import path from "node:path";
import type { ComponentPropSchema, ComponentPropsArtifact } from "@ngrok/mantle/types";

/**
 * Raw Mantle package source, bundled by Vite so serverless runtimes can
 * inspect JSDoc and barrel exports without reading from the filesystem.
 */
const rawSourceFiles: Record<string, string> = import.meta.glob<string>(
	"../../../../packages/mantle/src/**/*.{ts,tsx}",
	{
		eager: true,
		import: "default",
		query: "?raw",
	},
);

/**
 * Raw text of the committed build-time prop-extraction artifact
 * (`packages/mantle/src/__generated__/component-props.json`), bundled by
 * Vite so the serverless component manifest can surface type-level prop
 * data without a TypeScript program at request time.
 *
 * The generator (`packages/mantle/scripts/generate-component-props.ts`)
 * runs in `prebuild` before the docs build consumes the artifact, and
 * `turbo.json` makes `apps/www` build `dependsOn: ["^build"]`, so the
 * committed JSON always exists when this glob bundles it. It is globbed as
 * a single explicit path (not a `**` wildcard) so unrelated generated
 * files never leak into the serverless bundle.
 */
const rawComponentPropsArtifact: Record<string, string> = import.meta.glob<string>(
	"../../../../packages/mantle/src/__generated__/component-props.json",
	{
		eager: true,
		import: "default",
		query: "?raw",
	},
);

const componentPropsArtifactKey =
	"../../../../packages/mantle/src/__generated__/component-props.json";

/**
 * Raw text of the four Mantle theme stylesheets, bundled by Vite so the
 * serverless `/api/tokens.json` route can parse the authored Tailwind 4
 * semantic tokens without a TypeScript program or PostCSS at request time.
 *
 * The glob is an explicit array of these exact four entry points (not a
 * `**` wildcard) so it never pulls in `source-all.css` or the per-component
 * CSS and bloats the serverless bundle. An array of literal paths avoids the
 * brace-expansion ambiguity that drops prefix-overlapping alternatives like
 * `mantle` vs. `mantle-dark`.
 */
const rawThemeStyles: Record<string, string> = import.meta.glob<string>(
	[
		"../../../../packages/mantle/src/mantle.css",
		"../../../../packages/mantle/src/mantle-dark.css",
		"../../../../packages/mantle/src/mantle-light-high-contrast.css",
		"../../../../packages/mantle/src/mantle-dark-high-contrast.css",
	],
	{
		eager: true,
		import: "default",
		query: "?raw",
	},
);

const sourcePrefix = "../../../../packages/mantle/src/";

const componentsSrcDir = "components";
const hooksSrcDir = "hooks";
const utilsSrcDir = "utils";

function sourceBasePath(...parts: string[]): string {
	return path.posix.normalize(path.posix.join(...parts)).replace(/^\.\//, "");
}

function sourcePathFromExport(dir: string, fromPath: string): string {
	return sourceBasePath(dir, fromPath.replace(/\.js$/, ""));
}

/**
 * Read a bundled source file. `basePath` is relative to
 * `packages/mantle/src` and may omit its `.ts`/`.tsx` extension.
 */
function readSourceFile(basePath: string): string | undefined {
	const normalized = sourceBasePath(basePath);
	const candidates = [`${normalized}.tsx`, `${normalized}.ts`, normalized];

	for (const candidate of candidates) {
		const source = rawSourceFiles[`${sourcePrefix}${candidate}`];
		if (source != null) {
			return source;
		}
	}

	return undefined;
}

/**
 * Read one bundled theme stylesheet by its base filename (no extension),
 * e.g. `"mantle"` or `"mantle-dark"`. Returns `undefined` when the file is
 * not one of the four bundled theme entry points.
 */
function readThemeStyle(baseName: string): string | undefined {
	return rawThemeStyles[`${sourcePrefix}${baseName}.css`];
}

/**
 * Narrow the parsed artifact to the {@link ComponentPropsArtifact} shape.
 * The artifact is generated and drift-guarded in `packages/mantle`, so this
 * only guards against a malformed bundle rather than untrusted input — it
 * checks the top-level `components` array and that each entry carries the
 * required `name`/`importPath`/`props` fields the manifest reads.
 */
function isComponentPropsArtifact(value: unknown): value is ComponentPropsArtifact {
	if (value == null || typeof value !== "object") {
		return false;
	}
	if (!("components" in value) || !Array.isArray(value.components)) {
		return false;
	}
	return value.components.every((entry) => {
		return (
			entry != null &&
			typeof entry === "object" &&
			"name" in entry &&
			typeof entry.name === "string" &&
			"importPath" in entry &&
			typeof entry.importPath === "string" &&
			"props" in entry &&
			Array.isArray(entry.props)
		);
	});
}

/**
 * Per-component prop schema, keyed by the component's PascalCase export name
 * (e.g. `"Button"`, `"SkipToMainLink"`), parsed once from the bundled
 * artifact. Lazily computed and memoized for the server-process lifetime.
 * Empty when the artifact is absent or malformed — callers omit prop data
 * rather than crashing.
 */
let cachedPropSchemas: Map<string, ComponentPropSchema> | null = null;

/**
 * Parse and index the committed prop-extraction artifact, returning a map
 * from each component's PascalCase export name to its
 * {@link ComponentPropSchema}. Returns an empty map when the artifact is
 * missing or fails its shape check, so consumers degrade gracefully.
 */
function componentPropSchemasByName(): Map<string, ComponentPropSchema> {
	if (cachedPropSchemas) {
		return cachedPropSchemas;
	}

	const raw = rawComponentPropsArtifact[componentPropsArtifactKey];
	const schemas = new Map<string, ComponentPropSchema>();

	if (raw != null) {
		const parsed: unknown = JSON.parse(raw);
		if (isComponentPropsArtifact(parsed)) {
			for (const component of parsed.components) {
				schemas.set(component.name, component);
			}
		}
	}

	cachedPropSchemas = schemas;
	return schemas;
}

/**
 * Look up the structured prop schema(s) for a component, resolving compounds.
 * Tries each PascalCase candidate name in order; for the first candidate that
 * either matches a single-component entry exactly OR is the namespace of one or
 * more dotted sub-component entries, returns the matching schema(s):
 *
 * - Single component (e.g. `"Button"`): the one exact-match entry, wrapped in a
 *   one-element array.
 * - Compound (e.g. `"AlertDialog"`): every artifact entry whose name has the
 *   prefix `"AlertDialog."` (e.g. `"AlertDialog.Action"` … `"AlertDialog.Trigger"`),
 *   sorted by name.
 *
 * Returns `undefined` when no candidate matches either form, so callers keep
 * the manifest's `props` field absent rather than empty.
 *
 * @example
 * readComponentPropSchemasForComponent(["Button"]);
 * // [{ name: "Button", ... }]
 * readComponentPropSchemasForComponent(["AlertDialog"]);
 * // [{ name: "AlertDialog.Action", ... }, ..., { name: "AlertDialog.Trigger", ... }]
 */
function readComponentPropSchemasForComponent(
	candidateNames: Iterable<string>,
): ComponentPropSchema[] | undefined {
	const schemas = componentPropSchemasByName();
	for (const candidate of candidateNames) {
		const exact = schemas.get(candidate);
		if (exact) {
			return [exact];
		}
		const prefix = `${candidate}.`;
		const subSchemas = [...schemas.values()].filter((schema) => schema.name.startsWith(prefix));
		if (subSchemas.length > 0) {
			return subSchemas.toSorted((a, b) => a.name.localeCompare(b.name));
		}
	}
	return undefined;
}

/**
 * Drop the memoized prop-schema map so the next read re-parses the committed
 * artifact. Dev-only: the watcher plugin
 * (`apps/www/vite-plugins/watch-component-props.ts`) invokes this after a
 * codegen run so server-rendered surfaces (the `.md` twin, `/api/components.json`)
 * reflect the freshly written JSON without a full server restart. Harmless in
 * production, where it is never called.
 *
 * @internal
 */
function resetComponentPropSchemaCache(): void {
	cachedPropSchemas = null;
}

export {
	componentsSrcDir,
	hooksSrcDir,
	readComponentPropSchemasForComponent,
	readSourceFile,
	readThemeStyle,
	resetComponentPropSchemaCache,
	sourceBasePath,
	sourcePathFromExport,
	utilsSrcDir,
};
