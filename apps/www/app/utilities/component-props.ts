import type { ComponentPropSchema, ComponentPropsArtifact, PropEntry } from "@ngrok/mantle/types";
// The committed build-time prop-extraction artifact. Imported as a static
// relative JSON module (not the `@ngrok/mantle/component-props.json` export,
// which points at `dist/`) so the dependency direction stays apps → committed
// source and the data is available in both the server and client bundles.
import rawArtifact from "../../../../packages/mantle/src/__generated__/component-props.json" with { type: "json" };

/**
 * Narrow the statically imported artifact to {@link ComponentPropsArtifact}.
 * The artifact is generated and drift-guarded in `packages/mantle`, so this
 * guards against a malformed bundle rather than untrusted input — it checks
 * the top-level `components` array and that each entry carries the
 * `name`/`importPath`/`props` fields consumers read.
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
 * Per-component prop schema keyed by PascalCase export name (e.g. `"Button"`),
 * parsed once from the bundled artifact and memoized for the process lifetime.
 * Empty when the artifact is absent or malformed so callers degrade gracefully.
 */
let cachedSchemas: Map<string, ComponentPropSchema> | null = null;

function schemasByName(): Map<string, ComponentPropSchema> {
	if (cachedSchemas) {
		return cachedSchemas;
	}
	const schemas = new Map<string, ComponentPropSchema>();
	if (isComponentPropsArtifact(rawArtifact)) {
		for (const component of rawArtifact.components) {
			schemas.set(component.name, component);
		}
	}
	cachedSchemas = schemas;
	return schemas;
}

/**
 * Look up a component's build-time prop schema by its export name. For a single
 * component this is its PascalCase name (e.g. `"Button"`); for a compound
 * sub-component it is the dotted member path (e.g. `"AlertDialog.Content"`) —
 * the map is keyed by the artifact's `name`, so dotted keys resolve directly.
 * Returns `undefined` when the artifact has no matching entry, so callers can
 * render a fallback instead of crashing.
 *
 * @example
 * const schema = getComponentPropSchema("Button");
 * schema?.props.map((prop) => prop.name); // ["appearance", "asChild", ...]
 * getComponentPropSchema("AlertDialog.Content")?.extends; // "Radix Dialog.Content"
 */
export function getComponentPropSchema(name: string): ComponentPropSchema | undefined {
	return schemasByName().get(name);
}

/**
 * Drop the memoized prop-schema map so the next read re-parses the bundled
 * artifact. Dev-only: the watcher plugin
 * (`apps/www/vite-plugins/watch-component-props.ts`) invokes this after a
 * codegen run so the rendered prop tables reflect the freshly written JSON
 * without a full reload. Harmless in production, where it is never called.
 *
 * @internal
 * @example
 * resetComponentPropsCache(); // next getComponentPropSchema(...) re-reads the artifact
 */
export function resetComponentPropsCache(): void {
	cachedSchemas = null;
}

/**
 * The Prop-column label for a prop: the name, suffixed with `?` when the prop
 * is optional. Mirrors the convention of the hand-authored docs prop tables
 * (`appearance?`, `type`).
 *
 * @example
 * propLabel({ name: "appearance", required: false }); // "appearance?"
 * propLabel({ name: "type", required: true }); // "type"
 */
export function propLabel(prop: Pick<PropEntry, "name" | "required">): string {
	return prop.required ? prop.name : `${prop.name}?`;
}

/**
 * The Default-column text for a prop, or an empty string when the prop has no
 * recorded default. The generator already renders defaults as source text
 * (e.g. `'"outlined"'`, `"false"`), so this is a thin accessor that exists to
 * keep the HTML and `.md` renderers reading the same field.
 *
 * @example
 * formatPropDefault({ default: '"outlined"' }); // '"outlined"'
 * formatPropDefault({}); // ""
 */
export function formatPropDefault(prop: Pick<PropEntry, "default">): string {
	return prop.default ?? "";
}

/**
 * The Description-column text for a prop: its JSDoc description with a trailing
 * conditional-requiredness note appended when the prop carries `branchInfo`
 * from a discriminated union (e.g. Button's `type` / `asChild`). Returns an
 * empty string when the prop has neither.
 *
 * @example
 * formatPropDescription({ description: "The button behavior.", branchInfo: "Required when asChild is not set" });
 * // "The button behavior. Required when asChild is not set."
 */
export function formatPropDescription(prop: Pick<PropEntry, "description" | "branchInfo">): string {
	const description = prop.description?.trim() ?? "";
	const branchInfo = prop.branchInfo?.trim();
	if (!branchInfo) {
		return description;
	}
	// Branch info reads as its own sentence wherever it appears, so terminate it
	// with a period unless it already ends in sentence punctuation.
	const branchSentence = /[.!?]$/.test(branchInfo) ? branchInfo : `${branchInfo}.`;
	if (!description) {
		return branchSentence;
	}
	const separator = /[.!?]$/.test(description) ? " " : ". ";
	return `${description}${separator}${branchSentence}`;
}

/** One run of description text, flagged as inline code or plain prose. */
export type InlineSegment = {
	/** `true` when the run was wrapped in backticks → render as inline code. */
	code: boolean;
	/** The run's text, with the surrounding backticks (if any) stripped. */
	value: string;
};

/**
 * Split a description string into inline-code and plain-text runs on
 * backtick (`` ` ``) pairs. Both the HTML prop table and the `.md`-twin
 * serializer consume this so the rendered code spans stay identical — a prop
 * description like ``"Setting `isLoading` will…"`` becomes
 * `[{ code:false, value:"Setting " }, { code:true, value:"isLoading" }, …]`.
 *
 * This is a deliberately minimal markdown subset: artifact descriptions only
 * use inline code, not links or emphasis. An unbalanced trailing backtick is
 * treated as plain text.
 *
 * @example
 * splitInlineCode("Setting `isLoading` will replace it.");
 * // [
 * //   { code: false, value: "Setting " },
 * //   { code: true, value: "isLoading" },
 * //   { code: false, value: " will replace it." },
 * // ]
 */
export function splitInlineCode(text: string): InlineSegment[] {
	if (!text.includes("`")) {
		return [{ code: false, value: text }];
	}
	// Odd indices fall between a pair of backticks → inline code.
	return text
		.split("`")
		.map((value, index) => ({ code: index % 2 === 1, value }))
		.filter((segment) => segment.value !== "");
}
