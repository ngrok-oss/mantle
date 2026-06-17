/**
 * Build-time prop-extraction codegen.
 *
 * Loads a ts-morph `Project` from `tsconfig.build.json` (falling back to
 * `tsconfig.json`), walks every `src/components/*\/index.ts` barrel, resolves
 * the primary exported component per directory, and extracts a structured prop
 * schema for it using the TypeScript checker plus JSDoc parsing. The result is
 * written to `src/__generated__/component-props.json` — the single source of
 * truth consumed by the docs site, the docs prop tables, and the offline
 * `dist/agent.json` slice.
 *
 * Determinism is a hard requirement: components and props are stably sorted,
 * the JSON is 2-space indented with a trailing newline, so re-running the
 * codegen leaves the working tree clean.
 *
 * Unresolvable components (compound POJO namespaces, components whose props
 * type cannot be resolved) are skipped with a `console.warn` — a single bad
 * component never crashes the whole run.
 *
 * @example
 * // From packages/mantle:
 * //   pnpm run codegen
 * // Emits src/__generated__/component-props.json deterministically.
 */
import { existsSync, readdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { format } from "oxfmt";
import { Node, Project, SyntaxKind, type Symbol as TsSymbol, type Type } from "ts-morph";
import packageJson from "../package.json" with { type: "json" };
import type {
	ComponentPropSchema,
	ComponentPropsArtifact,
	ComponentPropVariant,
	EnumDocEntry,
	PropDefaultSource,
	PropEntry,
	PropSource,
	PropTypeKind,
} from "../src/types/component-prop-schema.js";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const PACKAGE_DIR = resolve(SCRIPT_DIR, "..");
const COMPONENTS_DIR = join(PACKAGE_DIR, "src", "components");
const ARTIFACT_PATH = join(PACKAGE_DIR, "src", "__generated__", "component-props.json");
const GENERATED_FROM = "packages/mantle/src/components";

/**
 * Compound (POJO-namespace) components whose sub-component schemas are emitted
 * into the artifact. The extraction pipeline ({@link extractCompoundSchemas})
 * is general, but this proof-of-concept rollout is scoped to `AlertDialog` so
 * the artifact, the docs migration, and the drift snapshot grow only by the
 * intended `AlertDialog.*` entries. The full rollout (all compounds) is a
 * follow-up: add the compound's PascalCase name here once its docs page and
 * snapshot are ready to absorb the addition.
 */
const COMPOUND_COMPONENTS_TO_EXTRACT = new Set<string>(["AlertDialog"]);

// MARK: - Pure helpers (unit-testable without a ts-morph Project)

/**
 * Convert a kebab-case component directory name into the PascalCase identifier
 * the primary component is exported as. Mirrors `apps/www`'s `leafToPascal` so
 * the artifact `name` keys match the manifest's component names.
 *
 * @example
 * leafToPascal("data-table"); // "DataTable"
 * leafToPascal("button");     // "Button"
 */
export function leafToPascal(leaf: string): string {
	return leaf
		.split("-")
		.map((part) => {
			const first = part.charAt(0);
			if (first === "") {
				return part;
			}
			return first.toUpperCase() + part.slice(1);
		})
		.join("");
}

/**
 * Join the multi-part text of a JSDoc tag into a single string. ts-morph
 * splits some tag bodies (notably `@see` URLs) across several text parts, so
 * callers must concatenate them before use.
 *
 * @example
 * joinTagText([{ text: "https" }, { text: "://x.dev" }]); // "https://x.dev"
 */
export function joinTagText(parts: readonly { readonly text: string }[]): string {
	return parts
		.map((part) => part.text)
		.join("")
		.trim();
}

/**
 * Parse the bulleted body of an `@enum` JSDoc tag into per-member meanings.
 * Each bullet has the shape `` - `"member"`: meaning prose `` (the member may
 * be quoted or bare). Lines that don't match the bullet shape are ignored.
 *
 * @example
 * parseEnumDoc('- `"submit"`: Submits the form.\n- `"reset"`: Resets it.');
 * // [{ member: '"submit"', meaning: "Submits the form." },
 * //  { member: '"reset"', meaning: "Resets it." }]
 */
export function parseEnumDoc(body: string): EnumDocEntry[] {
	const entries: EnumDocEntry[] = [];
	const lines = body.split("\n");
	for (const line of lines) {
		const match = line.match(/^\s*[-*]\s*`?([^`:]+?)`?\s*:\s*(.+?)\s*$/);
		if (!match) {
			continue;
		}
		const member = match[1]?.trim();
		const meaning = match[2]?.trim();
		if (member && meaning) {
			entries.push({ member, meaning });
		}
	}
	return entries;
}

/**
 * Detect the intrinsic host element a component spreads its props onto by
 * scanning its props type-alias declaration text for a
 * `ComponentProps<"x">` / `ComponentPropsWithRef<"x">` /
 * `ComponentPropsWithoutRef<"x">` reference to an intrinsic JSX element.
 * Returns `undefined` when the props extend a non-intrinsic type (e.g. a Radix
 * primitive's props) or no such reference exists.
 *
 * @example
 * detectHostElement('type ButtonProps = ComponentProps<"button"> & {...}');
 * // "button"
 */
export function detectHostElement(propsDeclText: string): string | undefined {
	const match = propsDeclText.match(/ComponentProps(?:WithRef|WithoutRef)?<\s*"([a-z][a-z0-9-]*)"/);
	return match?.[1];
}

/**
 * Maps an external (typically Radix) package specifier to the human-readable
 * library stem used in an `extends` label. The label format is
 * `Radix <Lib>.<Member>` (dot, not space) so it reads as a real member path and
 * matches the hand-authored docs prose (e.g. "Radix Dialog.Content props, plus:").
 *
 * Kept as a module const so {@link deriveExtendsLabel} stays pure and the
 * mapping is unit-testable without a ts-morph `Project`.
 */
const RADIX_LIBRARY_BY_PACKAGE: Record<string, string> = {
	"@radix-ui/react-dialog": "Dialog",
	"@radix-ui/react-alert-dialog": "AlertDialog",
	"@radix-ui/react-select": "Select",
	"@radix-ui/react-dropdown-menu": "DropdownMenu",
	"@radix-ui/react-tabs": "Tabs",
	"@radix-ui/react-popover": "Popover",
	"@radix-ui/react-hover-card": "HoverCard",
	"@radix-ui/react-tooltip": "Tooltip",
	"@radix-ui/react-accordion": "Accordion",
	"@radix-ui/react-radio-group": "RadioGroup",
};

/**
 * Derive the human-readable inheritance label for a sub-component from the
 * external module specifier its props ultimately wrap and the wrapped member
 * name. Pure and table-driven (no checker-order dependence) so the artifact
 * stays byte-stable:
 *
 * - `@radix-ui/react-*` mapped by {@link RADIX_LIBRARY_BY_PACKAGE} → `Radix <Lib>.<Member>`.
 * - `@ariakit/react*` → `Ariakit <Member>`.
 * - anything else → `undefined` (caller omits `extends` and warns).
 *
 * The `@extends` JSDoc override is applied by the caller *before* this runs, so
 * this function only handles the derived (non-editorial) path.
 *
 * @example
 * deriveExtendsLabel({ moduleSpecifier: "@radix-ui/react-dialog", memberName: "Content" });
 * // "Radix Dialog.Content"
 * deriveExtendsLabel({ moduleSpecifier: "@ariakit/react", memberName: "Combobox" });
 * // "Ariakit Combobox"
 */
export function deriveExtendsLabel(args: {
	moduleSpecifier: string;
	memberName: string;
}): string | undefined {
	const { moduleSpecifier, memberName } = args;
	const radixLib = RADIX_LIBRARY_BY_PACKAGE[moduleSpecifier];
	if (radixLib != null) {
		return `Radix ${radixLib}.${memberName}`;
	}
	if (moduleSpecifier === "@ariakit/react" || moduleSpecifier.startsWith("@ariakit/react/")) {
		return `Ariakit ${memberName}`;
	}
	return undefined;
}

/**
 * Classify rendered type text into a coarse {@link PropTypeKind}. `enumMembers`
 * (the union's string-literal members, if any) disambiguates documented enums
 * from plain unions: callers pass the parsed `@enum` presence via `hasEnumDoc`.
 *
 * @example
 * classifyTypeKind({ typeText: "boolean", isBoolean: true, ... }); // "boolean"
 * classifyTypeKind({ typeText: '"start" | "end"', enumMembers: ['"start"', '"end"'], ... }); // "union"
 */
export function classifyTypeKind(args: {
	typeText: string;
	isBoolean: boolean;
	hasEnumDoc: boolean;
	enumMembers: string[];
}): PropTypeKind {
	const { typeText, isBoolean, hasEnumDoc, enumMembers } = args;
	if (isBoolean || typeText === "boolean") {
		return "boolean";
	}
	if (hasEnumDoc && enumMembers.length > 0) {
		return "enum";
	}
	if (/\bReactNode\b|\bReactElement\b|\bReactPortal\b/.test(typeText)) {
		return "node";
	}
	if (enumMembers.length > 0) {
		return "union";
	}
	if (typeText === "string") {
		return "string";
	}
	return "other";
}

/**
 * Normalize a checker-rendered type string for stable, readable display:
 * strips `undefined` union members (optionality is tracked separately),
 * collapses `false | true` to `boolean`, removes `import("…").`/`React.`
 * qualifiers, and collapses whitespace. The result is deterministic across
 * runs so the artifact stays byte-stable.
 *
 * @example
 * normalizeTypeText('"start" | "end" | undefined'); // '"start" | "end"'
 * normalizeTypeText("false | true | undefined");     // "boolean"
 */
export function normalizeTypeText(raw: string): string {
	const collapsed = raw
		.replace(/import\("[^"]*"\)\./g, "")
		.replace(/\bReact\./g, "")
		.replace(/\s+/g, " ")
		.trim();

	if (!collapsed.includes("|")) {
		return collapsed;
	}

	const members = collapsed.split("|").map((member) => member.trim());
	const withoutUndefined = members.filter((member) => member !== "undefined");

	const hasFalse = withoutUndefined.includes("false");
	const hasTrue = withoutUndefined.includes("true");
	if (hasFalse && hasTrue) {
		const remainder = withoutUndefined.filter((member) => member !== "false" && member !== "true");
		const result = ["boolean", ...remainder];
		return result.length === 1 ? "boolean" : result.join(" | ");
	}

	if (withoutUndefined.length === 0) {
		return collapsed;
	}
	if (withoutUndefined.length === 1) {
		return withoutUndefined[0] ?? collapsed;
	}
	return withoutUndefined.join(" | ");
}

/**
 * Extract the string-literal members of a union type's rendered text, in
 * source order, dropping `undefined`. Used to populate `enumMembers` and to
 * decide `enum`/`union` kinds. Returns an empty array when the type isn't a
 * union of string literals.
 *
 * @example
 * stringLiteralMembers('"start" | "end" | undefined'); // ['"start"', '"end"']
 */
export function stringLiteralMembers(normalizedText: string): string[] {
	if (!normalizedText.includes("|")) {
		return /^".*"$/.test(normalizedText) ? [normalizedText] : [];
	}
	const members = normalizedText.split("|").map((member) => member.trim());
	const literals = members.filter((member) => /^".*"$/.test(member));
	return literals.length === members.length ? literals : [];
}

/**
 * Resolve the highest-precedence default for a prop. Precedence is
 * cva `defaultVariants` > forwardRef destructure default > `@default` JSDoc.
 * Returns the value text and its source, or `undefined` when no default is
 * known.
 *
 * @example
 * resolveDefault({ name: "appearance", cva: { appearance: '"outlined"' }, ... });
 * // { value: '"outlined"', source: "cva" }
 */
export function resolveDefault(args: {
	name: string;
	cvaDefaults: Record<string, string>;
	destructureDefaults: Record<string, string>;
	jsdocDefault?: string;
}): { value: string; source: PropDefaultSource } | undefined {
	const { name, cvaDefaults, destructureDefaults, jsdocDefault } = args;
	if (name in cvaDefaults) {
		return { value: cvaDefaults[name] ?? "", source: "cva" };
	}
	if (name in destructureDefaults) {
		return { value: destructureDefaults[name] ?? "", source: "destructure" };
	}
	if (jsdocDefault != null) {
		return { value: jsdocDefault, source: "jsdoc" };
	}
	return undefined;
}

/**
 * Compute the branch-requiredness summary for a prop across the branches of a
 * discriminated union. Returns `branchInfo` prose when the prop is required in
 * some branches but optional in others, and the flattened `required` flag
 * (a prop is required overall only when required in *every* branch).
 *
 * @example
 * branchRequiredness([
 *   { optional: false, discriminantWhen: "asChild is true" },
 *   { optional: true, discriminantWhen: "asChild is false or unset" },
 * ]);
 * // { required: false, branchInfo: "Required unless asChild is true" }
 */
export function branchRequiredness(branches: { optional: boolean; discriminantWhen?: string }[]): {
	required: boolean;
	branchInfo?: string;
} {
	const present = branches.filter((branch) => branch != null);
	if (present.length === 0) {
		return { required: false };
	}
	const requiredEverywhere = present.every((branch) => !branch.optional);
	const optionalEverywhere = present.every((branch) => branch.optional);

	if (requiredEverywhere) {
		return { required: true };
	}
	if (optionalEverywhere) {
		return { required: false };
	}

	// Conditionally required: required in the branches where it's not optional.
	const requiredBranch = present.find((branch) => !branch.optional);
	const branchInfo = requiredBranch?.discriminantWhen
		? `Required when ${requiredBranch.discriminantWhen}`
		: undefined;
	return { required: false, branchInfo };
}

// MARK: - ts-morph extraction

/**
 * Classify a prop as Mantle-`"own"` when *any* of its declarations live under
 * `packages/mantle/src/**`, otherwise `"inherited"`. A prop authored in Mantle
 * source counts as own even when it overrides/narrows a native attribute that
 * is *also* declared in `@types/react` (e.g. Button's `type`, which Mantle
 * redeclares in both discriminated-union branches). A prop whose only
 * declarations live in `@types/react`/`lib.dom.d.ts` is inherited and excluded
 * from `props[]`.
 */
function classifyPropSource(symbol: TsSymbol): PropSource {
	const declarations = symbol.getDeclarations();
	if (declarations.length === 0) {
		return "inherited";
	}
	const anyOwn = declarations.some((declaration) => {
		const filePath = declaration.getSourceFile().getFilePath();
		return filePath.includes("/packages/mantle/src/") && !filePath.includes("/node_modules/");
	});
	return anyOwn ? "own" : "inherited";
}

/**
 * Read the description prose (tags stripped) for a prop symbol.
 */
function readDescription(symbol: TsSymbol, project: Project): string | undefined {
	const parts = symbol.compilerSymbol.getDocumentationComment(
		project.getTypeChecker().compilerObject,
	);
	const text = parts
		.map((part) => part.text)
		.join("")
		.replace(/\s+/g, " ")
		.trim();
	return text.length > 0 ? text : undefined;
}

/**
 * Collect the deduplicated JSDoc tag values for a prop symbol. Because a prop
 * declared in multiple discriminated-union branches surfaces duplicate tags,
 * `@see`/`@enum` values are deduplicated while preserving source order.
 */
function readJsDocTags(symbol: TsSymbol): {
	see: string[];
	enumBody?: string;
	jsdocDefault?: string;
	deprecated?: string | boolean;
	extendsTag?: string;
} {
	const see: string[] = [];
	let enumBody: string | undefined;
	let jsdocDefault: string | undefined;
	let deprecated: string | boolean | undefined;
	let extendsTag: string | undefined;

	for (const tag of symbol.getJsDocTags()) {
		const name = tag.getName();
		const text = joinTagText(tag.getText());
		switch (name) {
			case "see": {
				if (text && !see.includes(text)) {
					see.push(text);
				}
				break;
			}
			case "enum": {
				enumBody ??= text;
				break;
			}
			case "default": {
				jsdocDefault ??= text.length > 0 ? text : undefined;
				break;
			}
			case "deprecated": {
				deprecated = text.length > 0 ? text : true;
				break;
			}
			case "extends": {
				// Editorial escape hatch: a `@extends Button` tag overrides the
				// derived inheritance label verbatim (see deriveExtendsLabel).
				extendsTag ??= text.length > 0 ? text : undefined;
				break;
			}
			default:
				break;
		}
	}

	return { see, enumBody, jsdocDefault, deprecated, extendsTag };
}

/**
 * The discriminant condition prose for a union branch, derived from a
 * `asChild`-style boolean discriminant. Returns `undefined` when the branch
 * has no obvious single discriminant.
 */
function discriminantWhen(branch: Type, location: Node): string | undefined {
	const asChild = branch.getProperty("asChild");
	if (!asChild) {
		return undefined;
	}
	const text = normalizeTypeText(asChild.getTypeAtLocation(location).getText(location));
	if (text === "true") {
		return "asChild is true";
	}
	if (text === "false" || text === "boolean") {
		return "asChild is not set";
	}
	return undefined;
}

/**
 * Build a single {@link PropEntry} from a resolved prop symbol on the merged
 * props type, consulting the per-branch optionality for discriminated unions.
 */
function buildPropEntry(args: {
	symbol: TsSymbol;
	location: Node;
	project: Project;
	branches: Type[];
	cvaDefaults: Record<string, string>;
	destructureDefaults: Record<string, string>;
}): PropEntry | null {
	const { symbol, location, project, branches, cvaDefaults, destructureDefaults } = args;
	const name = symbol.getName();

	const source = classifyPropSource(symbol);
	if (source === "inherited") {
		return null;
	}

	const rawType = symbol.getTypeAtLocation(location);
	const normalizedType = normalizeTypeText(rawType.getText(location));
	const enumMembers = stringLiteralMembers(normalizedType);

	const { see, enumBody, jsdocDefault, deprecated } = readJsDocTags(symbol);
	const enumDoc = enumBody ? parseEnumDoc(enumBody) : [];

	const typeKind = classifyTypeKind({
		typeText: normalizedType,
		isBoolean: rawType.isBoolean() || rawType.isBooleanLiteral(),
		hasEnumDoc: enumDoc.length > 0,
		enumMembers,
	});

	const branchStates = branches.map((branch) => {
		const branchProp = branch.getProperty(name);
		return {
			optional: branchProp ? branchProp.isOptional() : true,
			discriminantWhen: discriminantWhen(branch, location),
		};
	});
	const { required, branchInfo } = branchRequiredness(branchStates);

	const resolvedDefault = resolveDefault({
		name,
		cvaDefaults,
		destructureDefaults,
		jsdocDefault,
	});

	const entry: PropEntry = {
		name,
		required,
		type: normalizedType,
		typeKind,
		source: "own",
	};
	if (enumMembers.length > 0) {
		entry.enumMembers = enumMembers;
	}
	if (resolvedDefault) {
		entry.default = resolvedDefault.value;
		entry.defaultSource = resolvedDefault.source;
	}
	const description = readDescription(symbol, project);
	if (description) {
		entry.description = description;
	}
	if (deprecated != null) {
		entry.deprecated = deprecated;
	}
	if (see.length > 0) {
		entry.see = see;
	}
	if (enumDoc.length > 0) {
		entry.enumDoc = enumDoc;
	}
	if (branchInfo) {
		entry.branchInfo = branchInfo;
	}
	return entry;
}

/**
 * Read a `cva(...)` call's `defaultVariants` object literal into a
 * `{ variant: valueText }` map. Returns an empty object when the file has no
 * single `cva(...)` call backing the component or no `defaultVariants`.
 */
function readCvaDefaults(
	sourceFile: ReturnType<Project["getSourceFileOrThrow"]>,
): Record<string, string> {
	const defaults: Record<string, string> = {};
	sourceFile.forEachDescendant((node) => {
		if (!Node.isCallExpression(node)) {
			return;
		}
		const expression = node.getExpression();
		if (expression.getText() !== "cva") {
			return;
		}
		const config = node.getArguments()[1];
		if (!config || !Node.isObjectLiteralExpression(config)) {
			return;
		}
		const defaultVariants = config.getProperty("defaultVariants");
		if (!defaultVariants || !Node.isPropertyAssignment(defaultVariants)) {
			return;
		}
		const literal = defaultVariants.getInitializer();
		if (!literal || !Node.isObjectLiteralExpression(literal)) {
			return;
		}
		for (const property of literal.getProperties()) {
			if (Node.isPropertyAssignment(property)) {
				const initializer = property.getInitializer();
				if (initializer) {
					defaults[property.getName()] = initializer.getText();
				}
			}
		}
	});
	return defaults;
}

/**
 * Read the destructuring defaults from a component function's first parameter
 * binding pattern (`{ size = "l" }`) into a `{ prop: valueText }` map. Handles
 * both `forwardRef((props) => …)` and plain `function Component(props)` forms.
 */
function readDestructureDefaults(componentDeclaration: Node): Record<string, string> {
	const defaults: Record<string, string> = {};

	const fromFunctionLike = (fn: Node): void => {
		if (
			!Node.isArrowFunction(fn) &&
			!Node.isFunctionExpression(fn) &&
			!Node.isFunctionDeclaration(fn)
		) {
			return;
		}
		const firstParam = fn.getParameters()[0];
		const binding = firstParam?.getNameNode();
		if (binding && Node.isObjectBindingPattern(binding)) {
			for (const element of binding.getElements()) {
				const initializer = element.getInitializer();
				if (initializer) {
					defaults[element.getName()] = initializer.getText();
				}
			}
		}
	};

	if (Node.isVariableDeclaration(componentDeclaration)) {
		const initializer = componentDeclaration.getInitializer();
		if (initializer && Node.isCallExpression(initializer)) {
			// forwardRef(<fn>) / memo(<fn>)
			const inner = initializer.getArguments()[0];
			if (inner) {
				fromFunctionLike(inner);
			}
		} else if (initializer) {
			fromFunctionLike(initializer);
		}
	} else if (Node.isFunctionDeclaration(componentDeclaration)) {
		fromFunctionLike(componentDeclaration);
	}

	return defaults;
}

/**
 * Locate the props type-alias declaration text for a component so the host
 * element can be detected. Prefers resolving the props parameter's declared
 * type symbol to its alias (handles `FlagProps`, the inline `Props` alias,
 * etc.), then falls back to a `<Name>Props` alias in the same file.
 */
function findPropsDeclText(args: {
	propsParam: TsSymbol;
	location: Node;
	sourceFile: ReturnType<Project["getSourceFileOrThrow"]>;
	componentName: string;
}): string | undefined {
	const { propsParam, location, sourceFile, componentName } = args;

	const aliasSymbol = propsParam.getTypeAtLocation(location).getAliasSymbol();
	const aliasDeclaration = aliasSymbol?.getDeclarations()[0];
	if (aliasDeclaration && Node.isTypeAliasDeclaration(aliasDeclaration)) {
		return aliasDeclaration.getText();
	}

	const namedAlias = sourceFile.getTypeAlias(`${componentName}Props`);
	return namedAlias?.getText();
}

/**
 * Extract the full {@link ComponentPropSchema} for one component, or `null`
 * when it cannot be resolved as a single callable component (e.g. a compound
 * POJO namespace or a component whose props type has no resolvable call
 * signature).
 */
function extractComponentSchema(args: {
	project: Project;
	componentDir: string;
	componentName: string;
	importPath: string;
}): ComponentPropSchema | null {
	const { project, componentDir, componentName, importPath } = args;

	const indexPath = join(COMPONENTS_DIR, componentDir, "index.ts");
	const indexFile = project.getSourceFile(indexPath);
	if (!indexFile) {
		console.warn(`[generate-component-props] skip ${componentName}: no index.ts at ${indexPath}`);
		return null;
	}

	// Resolve the exported symbol matching the directory's PascalCase name.
	const exportedSymbols = indexFile.getExportSymbols();
	const exported = exportedSymbols.find((symbol) => symbol.getName() === componentName);
	if (!exported) {
		console.warn(`[generate-component-props] skip ${componentName}: not exported from index.ts`);
		return null;
	}

	const valueDeclaration =
		exported.getAliasedSymbol()?.getValueDeclaration() ?? exported.getValueDeclaration();
	if (!valueDeclaration) {
		console.warn(`[generate-component-props] skip ${componentName}: no value declaration`);
		return null;
	}

	const componentType = valueDeclaration.getType();
	const callSignatures = componentType.getCallSignatures();
	if (callSignatures.length === 0) {
		console.warn(
			`[generate-component-props] skip ${componentName}: no call signature (likely a compound namespace)`,
		);
		return null;
	}

	const propsParam = callSignatures[0]?.getParameters()[0];
	if (!propsParam) {
		console.warn(`[generate-component-props] skip ${componentName}: component takes no props`);
		return null;
	}

	const propsType = propsParam.getTypeAtLocation(valueDeclaration);
	const branches = propsType.isUnion() ? propsType.getUnionTypes() : [propsType];

	const ownSourceFile = valueDeclaration.getSourceFile();
	const cvaDefaults = readCvaDefaults(ownSourceFile);
	const destructureDefaults = readDestructureDefaults(valueDeclaration);

	const propsDeclText = findPropsDeclText({
		propsParam,
		location: valueDeclaration,
		sourceFile: ownSourceFile,
		componentName,
	});
	const hostElement = propsDeclText ? detectHostElement(propsDeclText) : undefined;

	const props: PropEntry[] = [];
	const seen = new Set<string>();
	for (const symbol of propsType.getProperties()) {
		const name = symbol.getName();
		if (seen.has(name)) {
			continue;
		}
		seen.add(name);
		const entry = buildPropEntry({
			symbol,
			location: valueDeclaration,
			project,
			branches,
			cvaDefaults,
			destructureDefaults,
		});
		if (entry) {
			props.push(entry);
		}
	}

	props.sort((a, b) => a.name.localeCompare(b.name));

	const schema: ComponentPropSchema = {
		name: componentName,
		importPath,
		props,
	};
	if (hostElement) {
		schema.hostElement = hostElement;
	}

	const variants = buildVariants({
		branches,
		location: valueDeclaration,
		project,
		cvaDefaults,
		destructureDefaults,
	});
	if (variants.length > 1) {
		schema.variants = variants;
	}

	return schema;
}

/**
 * Resolve the external module specifier a `typeof <Alias>.<Member>` reference in
 * a sub-component's props text ultimately wraps, following at most one local
 * re-export hop. Returns the final module specifier and the wrapped member name,
 * or `undefined` when no `typeof Alias.Member` reference is present or the alias
 * cannot be resolved to an import.
 *
 * Resolution:
 * 1. Match `typeof Alias.Member` in `propsDeclText`.
 * 2. Find `Alias`'s import in `sourceFile` (namespace or named import).
 * 3. If the import resolves to a `packages/mantle/src/**` file (a local
 *    re-export like `../dialog/primitive.js`), open it and read where *that*
 *    file imports `Alias`'s underlying namespace from (one hop). Otherwise use
 *    the import's own specifier.
 *
 * @example
 * // AlertDialog.Content props text references `typeof AlertDialogPrimitive.Content`,
 * // AlertDialogPrimitive is imported from "../dialog/primitive.js" which itself
 * // imports `* as DialogPrimitive from "@radix-ui/react-dialog"`:
 * // → { moduleSpecifier: "@radix-ui/react-dialog", memberName: "Content" }
 */
function resolveWrappedMember(args: {
	propsDeclText: string;
	sourceFile: ReturnType<Project["getSourceFileOrThrow"]>;
}): { moduleSpecifier: string; memberName: string } | undefined {
	const { propsDeclText, sourceFile } = args;

	const match = propsDeclText.match(/typeof\s+(\w+)\.(\w+)/);
	if (!match) {
		return undefined;
	}
	const aliasName = match[1];
	const memberName = match[2];
	if (aliasName == null || memberName == null) {
		return undefined;
	}

	const importDeclaration = findImportForAlias(sourceFile, aliasName);
	if (!importDeclaration) {
		return undefined;
	}

	const specifier = importDeclaration.getModuleSpecifierValue();
	// External package (e.g. Radix directly): use as-is.
	if (!specifier.startsWith(".")) {
		return { moduleSpecifier: specifier, memberName };
	}

	// One local re-export hop: open the resolved local file and find where it
	// imports its underlying namespace from. ts-morph resolves the `.js`
	// specifier to the on-disk `.tsx`/`.ts` source.
	const localFile = importDeclaration.getModuleSpecifierSourceFile();
	if (!localFile) {
		return undefined;
	}
	for (const local of localFile.getImportDeclarations()) {
		const localSpecifier = local.getModuleSpecifierValue();
		if (!localSpecifier.startsWith(".")) {
			return { moduleSpecifier: localSpecifier, memberName };
		}
	}
	return undefined;
}

/**
 * Find the import declaration that brings `aliasName` into `sourceFile`, whether
 * via a namespace import (`import * as Alias from "…"`) or a named import
 * (`import { Alias } from "…"`). Returns `undefined` when no such import exists.
 */
function findImportForAlias(
	sourceFile: ReturnType<Project["getSourceFileOrThrow"]>,
	aliasName: string,
): ReturnType<typeof sourceFile.getImportDeclarations>[number] | undefined {
	for (const importDeclaration of sourceFile.getImportDeclarations()) {
		const namespaceImport = importDeclaration.getNamespaceImport();
		if (namespaceImport && namespaceImport.getText() === aliasName) {
			return importDeclaration;
		}
		const named = importDeclaration
			.getNamedImports()
			.some((element) => (element.getAliasNode()?.getText() ?? element.getName()) === aliasName);
		if (named) {
			return importDeclaration;
		}
	}
	return undefined;
}

/**
 * Read the props-type type-argument text from a `forwardRef<Ref, Props>(…)`
 * member declaration. Passthrough sub-components (e.g. `AlertDialog.Trigger`)
 * declare their props inline as the second `forwardRef` type argument with no
 * named alias, so {@link findPropsDeclText} cannot recover it from the props
 * symbol — this reads it straight off the declaration so the wrapped
 * `typeof Alias.Member` reference is still derivable.
 *
 * @example
 * // const Trigger = forwardRef<ComponentRef<...>, ComponentPropsWithoutRef<typeof P.Trigger>>(…)
 * // → "ComponentPropsWithoutRef<typeof P.Trigger>"
 */
function readForwardRefPropsArgText(memberDeclaration: Node): string | undefined {
	if (!Node.isVariableDeclaration(memberDeclaration)) {
		return undefined;
	}
	const initializer = memberDeclaration.getInitializer();
	if (!initializer || !Node.isCallExpression(initializer)) {
		return undefined;
	}
	const typeArgs = initializer.getTypeArguments();
	return typeArgs[1]?.getText();
}

/**
 * Resolve the underlying value declaration that backs a compound member symbol
 * (the `forwardRef(...)` const, a plain function, or a re-export) so defaults
 * and JSDoc tags read from the right node.
 *
 * Members of a `const Foo = { Bar, … }` namespace surface as
 * `ShorthandPropertyAssignment`s (`Bar,`), so the symbol's value declaration is
 * the shorthand inside the object literal — not the `const Bar = …` we want.
 * This follows the shorthand's value symbol to its real declaration. Falls back
 * to the aliased/own value declaration for non-shorthand members.
 */
function memberValueDeclaration(symbol: TsSymbol): Node | undefined {
	const direct = symbol.getAliasedSymbol()?.getValueDeclaration() ?? symbol.getValueDeclaration();
	if (direct && Node.isShorthandPropertyAssignment(direct)) {
		const referenced = direct.getValueSymbol()?.getValueDeclaration();
		if (referenced) {
			return referenced;
		}
	}
	return direct;
}

/**
 * Read the `@extends` JSDoc override from a compound member's declaration,
 * returning the tag text verbatim. This is the editorial escape hatch (e.g.
 * `@extends Button` on `AlertDialog.Action`) and takes precedence over the
 * derived label.
 *
 * The JSDoc for a `const Foo = forwardRef(…)` attaches to the enclosing
 * `VariableStatement`, not the `VariableDeclaration`, so this walks up from the
 * declaration to the nearest JSDocable ancestor (statement) when the
 * declaration itself carries none.
 */
function readMemberExtendsTag(memberDeclaration: Node): string | undefined {
	// The JSDoc for a `const Foo = forwardRef(…)` attaches to the enclosing
	// VariableStatement, not the VariableDeclaration, so consider both.
	const statement = memberDeclaration.getFirstAncestorByKind(SyntaxKind.VariableStatement);
	const candidates = [memberDeclaration, statement].filter(
		(node): node is Node => node != null && Node.isJSDocable(node),
	);
	for (const candidate of candidates) {
		if (!Node.isJSDocable(candidate)) {
			continue;
		}
		for (const jsdoc of candidate.getJsDocs()) {
			for (const tag of jsdoc.getTags()) {
				if (tag.getTagName() !== "extends") {
					continue;
				}
				// TS parses `@extends Button` as an augments tag whose target is a
				// type expression, so `getCommentText()` is empty. Recover the label
				// from the raw tag text instead: strip the leading `@extends`/
				// `@augments` token and take the first remaining word.
				const target = parseExtendsTagTarget(tag.getText());
				if (target != null) {
					return target;
				}
			}
		}
	}
	return undefined;
}

/**
 * Parse the target label out of an `@extends`/`@augments` JSDoc tag's raw text.
 * The first non-whitespace token after the tag name is the label; trailing
 * comment-block punctuation (`*`, `/`) and surrounding `{}`/`()` are stripped.
 * Returns `undefined` when no target token is present.
 *
 * @example
 * parseExtendsTagTarget("@extends Button\n *\n * "); // "Button"
 * parseExtendsTagTarget("@augments {Foo} bar");      // "Foo"
 */
export function parseExtendsTagTarget(rawTagText: string): string | undefined {
	const afterTag = rawTagText.replace(/^@(?:extends|augments)\b/, "");
	const token = afterTag
		.split(/\s+/)
		.map((part) => part.trim())
		.find((part) => part.length > 0 && part !== "*" && part !== "*/");
	if (token == null) {
		return undefined;
	}
	const cleaned = token
		.replace(/^[{(]+/, "")
		.replace(/[})]+$/, "")
		.trim();
	return cleaned.length > 0 ? cleaned : undefined;
}

/**
 * Extract per-sub-component {@link ComponentPropSchema}s for a compound POJO
 * namespace export (e.g. `AlertDialog`), keyed by dotted name
 * (`"AlertDialog.Content"`). Each callable member is resolved through the same
 * `buildPropEntry`/default-reading pipeline as single components; the
 * inheritance label is derived per the extends-label strategy
 * (`@extends` override → wrapped `typeof Alias.Member` package map → intrinsic
 * `hostElement`). `extends` and `hostElement` are mutually exclusive; `extends`
 * wins when both could apply.
 *
 * EMIT GATE (compound sub-components only): an entry is emitted when it has own
 * props OR a derivable inheritance label, so passthroughs like
 * `AlertDialog.Trigger` (zero own props, `extends: "Radix Dialog.Trigger"`)
 * still render the "All props from …" prose. Members that resolve to neither are
 * skipped with a warning. This relaxation is scoped to sub-components — the
 * single-component gate (`props.length > 0`) is unchanged.
 */
function extractCompoundSchemas(args: {
	project: Project;
	indexFile: ReturnType<Project["getSourceFileOrThrow"]>;
	componentName: string;
	importPath: string;
}): ComponentPropSchema[] {
	const { project, indexFile, componentName, importPath } = args;

	const exported = indexFile
		.getExportSymbols()
		.find((symbol) => symbol.getName() === componentName);
	const valueDeclaration =
		exported?.getAliasedSymbol()?.getValueDeclaration() ?? exported?.getValueDeclaration();
	if (!valueDeclaration) {
		return [];
	}

	const namespaceType = valueDeclaration.getType();
	if (namespaceType.getCallSignatures().length > 0 || namespaceType.getProperties().length === 0) {
		return [];
	}

	const schemas: ComponentPropSchema[] = [];
	for (const member of namespaceType.getProperties()) {
		const memberName = member.getName();
		// Module-local internals (portals/overlays) are never namespace members,
		// but guard against any leading-underscore/private member defensively.
		if (memberName.startsWith("_")) {
			continue;
		}
		try {
			const schema = extractCompoundMemberSchema({
				project,
				member,
				memberName,
				componentName,
				importPath,
				location: valueDeclaration,
			});
			if (schema) {
				schemas.push(schema);
			}
		} catch (error) {
			console.warn(
				`[generate-component-props] skip ${componentName}.${memberName}: extraction threw — ${
					error instanceof Error ? error.message : String(error)
				}`,
			);
		}
	}
	return schemas;
}

/**
 * Build the {@link ComponentPropSchema} for a single compound member, or `null`
 * when the member is not callable or fails the compound emit gate (no own props
 * and no derivable inheritance label). See {@link extractCompoundSchemas}.
 */
function extractCompoundMemberSchema(args: {
	project: Project;
	member: TsSymbol;
	memberName: string;
	componentName: string;
	importPath: string;
	location: Node;
}): ComponentPropSchema | null {
	const { project, member, memberName, componentName, importPath, location } = args;
	const qualifiedName = `${componentName}.${memberName}`;

	const memberType = member.getTypeAtLocation(location);
	const callSignatures = memberType.getCallSignatures();
	if (callSignatures.length === 0) {
		console.warn(
			`[generate-component-props] skip ${qualifiedName}: no call signature (re-export without one)`,
		);
		return null;
	}

	const propsParam = callSignatures[0]?.getParameters()[0];

	const memberDeclaration = memberValueDeclaration(member);
	const memberSourceFile = memberDeclaration?.getSourceFile();
	const cvaDefaults = memberSourceFile ? readCvaDefaults(memberSourceFile) : {};
	const destructureDefaults = memberDeclaration ? readDestructureDefaults(memberDeclaration) : {};

	const props: PropEntry[] = [];
	if (propsParam) {
		const propsType = propsParam.getTypeAtLocation(location);
		const branches = propsType.isUnion() ? propsType.getUnionTypes() : [propsType];
		const seen = new Set<string>();
		for (const symbol of propsType.getProperties()) {
			const name = symbol.getName();
			if (seen.has(name)) {
				continue;
			}
			seen.add(name);
			const entry = buildPropEntry({
				symbol,
				location,
				project,
				branches,
				cvaDefaults,
				destructureDefaults,
			});
			if (entry) {
				props.push(entry);
			}
		}
		props.sort((a, b) => a.name.localeCompare(b.name));
	}

	const { extendsLabel, hostElement } = deriveMemberInheritance({
		propsParam,
		memberDeclaration,
		memberSourceFile,
		qualifiedName,
		location,
	});

	if (props.length === 0 && extendsLabel == null && hostElement == null) {
		console.warn(
			`[generate-component-props] skip ${qualifiedName}: no inheritance label derivable`,
		);
		return null;
	}

	const schema: ComponentPropSchema = {
		name: qualifiedName,
		importPath,
		props,
	};
	// `extends` and `hostElement` are mutually exclusive; the more-specific
	// `extends` wins when both could derive (e.g. a member that wraps a Radix
	// primitive yet also references an intrinsic element internally).
	if (extendsLabel != null) {
		schema.extends = extendsLabel;
	} else if (hostElement != null) {
		schema.hostElement = hostElement;
	}
	return schema;
}

/**
 * Derive the mutually-exclusive `extends` label OR intrinsic `hostElement` for a
 * compound member. Precedence: `@extends` JSDoc override → wrapped
 * `typeof Alias.Member` package map ({@link deriveExtendsLabel}) → intrinsic
 * `ComponentProps<"x">` host element. Returns both as `undefined` when nothing
 * resolves (caller decides whether the member still emits via its own props).
 */
function deriveMemberInheritance(args: {
	propsParam: TsSymbol | undefined;
	memberDeclaration: Node | undefined;
	memberSourceFile: ReturnType<Project["getSourceFileOrThrow"]> | undefined;
	qualifiedName: string;
	location: Node;
}): { extendsLabel?: string; hostElement?: string } {
	const { propsParam, memberDeclaration, memberSourceFile, qualifiedName, location } = args;

	// 1. Editorial override.
	if (memberDeclaration) {
		const tag = readMemberExtendsTag(memberDeclaration);
		if (tag != null) {
			return { extendsLabel: tag };
		}
	}

	if (!memberSourceFile) {
		return {};
	}

	// Prefer the named/alias props-decl text; fall back to the inline
	// `forwardRef<Ref, Props>` second type argument for passthrough members that
	// have no named props alias (e.g. AlertDialog.Trigger/Title/Description/Close).
	const aliasPropsText = propsParam
		? findPropsDeclText({
				propsParam,
				location,
				sourceFile: memberSourceFile,
				componentName: qualifiedName.replace(".", ""),
			})
		: undefined;
	const forwardRefPropsText = memberDeclaration
		? readForwardRefPropsArgText(memberDeclaration)
		: undefined;
	const propsTextCandidates = [aliasPropsText, forwardRefPropsText].filter(
		(text): text is string => text != null,
	);
	if (propsTextCandidates.length === 0) {
		return {};
	}

	// 2. Wrapped Radix/Ariakit primitive (search both candidate texts).
	for (const propsDeclText of propsTextCandidates) {
		const wrapped = resolveWrappedMember({ propsDeclText, sourceFile: memberSourceFile });
		if (wrapped) {
			const label = deriveExtendsLabel(wrapped);
			if (label != null) {
				return { extendsLabel: label };
			}
		}
	}

	// 3. Intrinsic host element.
	for (const propsDeclText of propsTextCandidates) {
		const hostElement = detectHostElement(propsDeclText);
		if (hostElement != null) {
			return { hostElement };
		}
	}

	return {};
}

/**
 * Build the optional `variants[]` slice (one entry per discriminated-union
 * branch) for machine consumers. Each branch carries its own flattened prop
 * set. Returns a single-element array (or empty) when the props type isn't a
 * meaningful discriminated union.
 */
function buildVariants(args: {
	branches: Type[];
	location: Node;
	project: Project;
	cvaDefaults: Record<string, string>;
	destructureDefaults: Record<string, string>;
}): ComponentPropVariant[] {
	const { branches, location, project, cvaDefaults, destructureDefaults } = args;
	if (branches.length < 2) {
		return [];
	}
	const variants: ComponentPropVariant[] = [];
	for (const branch of branches) {
		const when = discriminantWhen(branch, location) ?? "default";
		const props: PropEntry[] = [];
		const seen = new Set<string>();
		for (const symbol of branch.getProperties()) {
			const name = symbol.getName();
			if (seen.has(name)) {
				continue;
			}
			seen.add(name);
			const entry = buildPropEntry({
				symbol,
				location,
				project,
				branches: [branch],
				cvaDefaults,
				destructureDefaults,
			});
			if (entry) {
				props.push(entry);
			}
		}
		props.sort((a, b) => a.name.localeCompare(b.name));
		variants.push({ when, props });
	}
	return variants;
}

// MARK: - Orchestration

/**
 * Load a ts-morph `Project` from `tsconfig.build.json`, falling back to
 * `tsconfig.json` if the build variant cannot resolve a program.
 */
function loadProject(): Project {
	const buildTsConfig = join(PACKAGE_DIR, "tsconfig.build.json");
	const baseTsConfig = join(PACKAGE_DIR, "tsconfig.json");
	const tsConfigFilePath = existsSync(buildTsConfig) ? buildTsConfig : baseTsConfig;
	return new Project({
		tsConfigFilePath,
		skipAddingFilesFromTsConfig: false,
	});
}

/**
 * List component directories under `src/components`, sorted for determinism.
 */
function listComponentDirs(): string[] {
	return readdirSync(COMPONENTS_DIR, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.toSorted((a, b) => a.localeCompare(b));
}

/**
 * Generate the full {@link ComponentPropsArtifact} by extracting every
 * resolvable component. Skips (with a warning) any component that cannot be
 * resolved to a single callable component with own props.
 *
 * @example
 * const artifact = generateArtifact(loadProject());
 * artifact.components.find((component) => component.name === "Button");
 */
export function generateArtifact(project: Project): ComponentPropsArtifact {
	const components: ComponentPropSchema[] = [];

	for (const componentDir of listComponentDirs()) {
		const componentName = leafToPascal(componentDir);
		const importPath = `@ngrok/mantle/${componentDir}`;
		try {
			const schema = extractComponentSchema({
				project,
				componentDir,
				componentName,
				importPath,
			});
			if (schema && schema.props.length > 0) {
				components.push(schema);
				continue;
			}
			if (schema) {
				console.warn(
					`[generate-component-props] skip ${componentName}: no own props after classification`,
				);
				continue;
			}

			// Single-component extraction returned null. Try the compound-namespace
			// phase (e.g. `AlertDialog`), which emits one entry per callable member.
			// Scoped to the POC allowlist so the artifact only grows by intended
			// sub-component entries.
			if (!COMPOUND_COMPONENTS_TO_EXTRACT.has(componentName)) {
				continue;
			}
			const indexPath = join(COMPONENTS_DIR, componentDir, "index.ts");
			const indexFile = project.getSourceFile(indexPath);
			if (!indexFile) {
				continue;
			}
			const subSchemas = extractCompoundSchemas({
				project,
				indexFile,
				componentName,
				importPath,
			});
			components.push(...subSchemas);
		} catch (error) {
			console.warn(
				`[generate-component-props] skip ${componentName}: extraction threw — ${
					error instanceof Error ? error.message : String(error)
				}`,
			);
		}
	}

	components.sort((a, b) => a.name.localeCompare(b.name));

	return {
		version: packageJson.version,
		generatedFrom: GENERATED_FROM,
		components,
	};
}

/**
 * Serialize the artifact to JSON: 2-space indent, trailing newline. This is the
 * raw `JSON.stringify` shape *before* formatting; {@link formatArtifact} runs
 * the result through oxfmt so the committed file matches `oxfmt --check`.
 *
 * @example
 * const json = serializeArtifact({ version: "0.0.0", generatedFrom: "x", components: [] });
 * // '{\n  "version": "0.0.0",\n  ...\n}\n'
 */
export function serializeArtifact(artifact: ComponentPropsArtifact): string {
	return `${JSON.stringify(artifact, null, 2)}\n`;
}

/**
 * Serialize the artifact and format it through oxfmt so the committed output
 * is byte-identical to what `oxfmt --check` expects (notably oxfmt's short-array
 * collapsing, which raw `JSON.stringify` does not do). Running this twice yields
 * identical bytes — the determinism the drift guard relies on.
 *
 * Throws if oxfmt reports formatting errors so a malformed artifact fails loudly
 * rather than committing un-formatted output.
 *
 * @example
 * const json = await formatArtifact(generateArtifact(project));
 * await writeFile(path, json, "utf8");
 */
export async function formatArtifact(artifact: ComponentPropsArtifact): Promise<string> {
	const raw = serializeArtifact(artifact);
	const result = await format(ARTIFACT_PATH, raw, {});
	if (result.errors.length > 0) {
		throw new Error(`oxfmt reported errors formatting the artifact: ${result.errors.join("; ")}`);
	}
	return result.code;
}

/**
 * Generate and write `src/__generated__/component-props.json`, returning the
 * component count and the path written. This is the programmatic entry point for
 * the `codegen` script and tests; it performs no `process.exit` and throws on
 * error so callers control failure handling. Behavior is byte-identical to the
 * prior inline `main()` so the committed artifact stays stable.
 *
 * @example
 * const { componentCount, artifactPath } = await generateComponentPropsArtifact();
 * // componentCount === 18, artifactPath ends with "component-props.json"
 */
export async function generateComponentPropsArtifact(): Promise<{
	componentCount: number;
	artifactPath: string;
}> {
	const project = loadProject();
	const artifact = generateArtifact(project);
	const json = await formatArtifact(artifact);
	await writeFile(ARTIFACT_PATH, json, "utf8");
	return { componentCount: artifact.components.length, artifactPath: ARTIFACT_PATH };
}

/**
 * Entry point: generate and write `src/__generated__/component-props.json`.
 */
async function main(): Promise<void> {
	const { componentCount, artifactPath } = await generateComponentPropsArtifact();
	console.log(`[generate-component-props] wrote ${componentCount} components to ${artifactPath}`);
}

const isDirectRun =
	process.argv[1] != null && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
	main().catch((error: unknown) => {
		console.error("[generate-component-props] failed:", error);
		process.exitCode = 1;
	});
}
