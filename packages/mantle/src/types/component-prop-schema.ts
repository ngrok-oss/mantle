/**
 * Shared types describing the structured prop data emitted by the build-time
 * prop-extraction codegen (`packages/mantle/scripts/generate-component-props.ts`)
 * into `packages/mantle/src/__generated__/component-props.json`.
 *
 * These types are the single source of truth for the artifact's shape. Both
 * the generator (writer) and downstream consumers — the `apps/www` component
 * manifest, the docs `<AutoPropsTable>`, and the offline `dist/agent.json`
 * slice — import them so writer and readers cannot drift.
 *
 * @see https://mantle.ngrok.com/components/button
 */

/**
 * How a prop's `type` text should be rendered/grouped by consumers. Drives
 * docs-table formatting and lets machine consumers branch without re-parsing
 * the raw `type` string.
 *
 * - `"union"`: a union of string (or mixed) literals, e.g. `"start" | "end"`.
 * - `"boolean"`: resolves to `boolean` (or `true`/`false` literal union).
 * - `"enum"`: a string-literal union documented with a per-member `@enum` body.
 * - `"node"`: a React renderable (`ReactNode`, `ReactElement`, etc.).
 * - `"string"`: a plain `string`.
 * - `"other"`: anything else (objects, functions, numbers, refs, …).
 */
export type PropTypeKind = "union" | "boolean" | "enum" | "node" | "string" | "other";

/**
 * Where a prop's default value was discovered, in precedence order. The
 * generator records the highest-precedence source it found.
 *
 * - `"cva"`: a `defaultVariants` entry in the component's `cva(...)` call.
 * - `"destructure"`: a destructuring default in the component function params.
 * - `"jsdoc"`: a `@default` JSDoc tag on the prop declaration.
 */
export type PropDefaultSource = "cva" | "destructure" | "jsdoc";

/**
 * Whether a prop originates from Mantle's own source or is inherited from an
 * external declaration (`@types/react`, `lib.dom.d.ts`).
 *
 * - `"own"`: declared under `packages/mantle/src/**`.
 * - `"inherited"`: only declared in external typings. These are excluded from
 *   {@link ComponentPropSchema.props} and collapsed into
 *   {@link ComponentPropSchema.hostElement} ("All props from <el>, plus:").
 */
export type PropSource = "own" | "inherited";

/**
 * A parsed `@enum` member-meaning pair. Mantle authors per-member prose under
 * an `@enum` JSDoc tag as a bulleted list; the generator captures each
 * member's literal name and its prose so docs/agents can surface meanings.
 *
 * @example
 * // From a JSDoc body like:
 * //   @enum
 * //   - `"submit"`: Submits the form data to the server.
 * { member: '"submit"', meaning: "Submits the form data to the server." }
 */
export type EnumDocEntry = {
	/** The literal member, including quotes for string literals, e.g. `'"submit"'`. */
	member: string;
	/** The prose describing what the member does. */
	meaning: string;
};

/**
 * One prop of a Mantle component, as extracted by the type checker plus JSDoc
 * parsing. The shape mirrors the columns a docs prop table renders (Prop /
 * Type / Default / Description) while carrying extra structured metadata for
 * machine consumers.
 *
 * @example
 * const appearance: PropEntry = {
 *   name: "appearance",
 *   required: false,
 *   type: '"filled" | "ghost" | "outlined" | "link"',
 *   typeKind: "union",
 *   default: '"outlined"',
 *   defaultSource: "cva",
 *   description: "Defines the visual style of the Button.",
 *   source: "own",
 * };
 */
export type PropEntry = {
	/** The prop name as written by consumers, e.g. `"iconPlacement"`. */
	name: string;
	/** Whether the prop must be supplied. Optional props are `false`. */
	required: boolean;
	/** Rendered type text, e.g. `'"ghost" | "filled" | "outlined" | "link"'`. */
	type: string;
	/** Coarse classification of {@link type} for rendering and machine use. */
	typeKind: PropTypeKind;
	/** For union/enum kinds, the individual literal members in source order. */
	enumMembers?: string[];
	/** The default value as rendered text, e.g. `'"outlined"'` or `"false"`. */
	default?: string;
	/** Where {@link default} was discovered (precedence: cva > destructure > jsdoc). */
	defaultSource?: PropDefaultSource;
	/** The prop's JSDoc description prose (tags stripped), if any. */
	description?: string;
	/** `true` (or a reason string) when the prop carries an `@deprecated` tag. */
	deprecated?: string | boolean;
	/** URLs gathered from `@see` JSDoc tags on the prop, in source order. */
	see?: string[];
	/** Per-member meanings parsed from an `@enum` JSDoc body, if present. */
	enumDoc?: EnumDocEntry[];
	/** Whether the prop is Mantle-owned or inherited from external typings. */
	source: PropSource;
	/**
	 * Human-readable note about conditional requiredness arising from a
	 * discriminated union, e.g. `"Required unless asChild is set"`. Mirrors
	 * the editorial prose hand-authored in the docs prop tables.
	 */
	branchInfo?: string;
};

/**
 * One branch of a flattened discriminated union, retained for machine
 * consumers that want the per-branch prop sets (the docs render the flattened
 * {@link ComponentPropSchema.props} instead).
 */
export type ComponentPropVariant = {
	/** The condition that selects this branch, e.g. `"asChild is true"`. */
	when: string;
	/** The props as they appear in this branch. */
	props: PropEntry[];
};

/**
 * The structured prop schema for a single Mantle component.
 *
 * @example
 * const schema: ComponentPropSchema = {
 *   name: "Button",
 *   importPath: "@ngrok/mantle/button",
 *   hostElement: "button",
 *   props: [],
 * };
 */
export type ComponentPropSchema = {
	/**
	 * The component's exported identifier. For a single component this is its
	 * PascalCase name, e.g. `"Button"`. For a compound (POJO-namespace) component
	 * the generator emits one flat entry per callable sub-component, keyed by the
	 * dotted member path, e.g. `"AlertDialog.Content"` / `"AlertDialog.Trigger"`.
	 */
	name: string;
	/** ESM import path for the component, e.g. `"@ngrok/mantle/button"`. */
	importPath: string;
	/**
	 * The intrinsic host element a component spreads its props onto, e.g.
	 * `"button"`. When set, consumers render an "All props from <el>, plus:"
	 * prose line and the inherited DOM props are omitted from {@link props}.
	 * Mutually exclusive with {@link extends} — at most one is set per entry.
	 */
	hostElement?: string;
	/**
	 * A named type the component visibly extends, when one applies. Populated for
	 * compound sub-components that wrap another primitive: a derived label like
	 * `"Radix Dialog.Content"` for wrapped Radix members (`Radix <Lib>.<Member>`),
	 * `"Ariakit <Member>"` for Ariakit, or a bare component name like `"Button"`
	 * via an `@extends` JSDoc override. Consumers render an "All props from
	 * <extends>, plus:" prose line. Mutually exclusive with {@link hostElement}.
	 */
	extends?: string;
	/**
	 * The component's own props, in deterministic (name-sorted) order. May be
	 * empty for passthrough sub-components that add no own props beyond what they
	 * inherit (e.g. `AlertDialog.Trigger`), in which case {@link extends} or
	 * {@link hostElement} still describes the inherited surface.
	 */
	props: PropEntry[];
	/** Expanded discriminated-union branches, for machine consumers. */
	variants?: ComponentPropVariant[];
};

/**
 * The top-level shape of `component-props.json`. Carries a version stamp and
 * provenance alongside the per-component schemas.
 *
 * @example
 * const artifact: ComponentPropsArtifact = {
 *   version: "0.76.2",
 *   generatedFrom: "packages/mantle/src/components",
 *   components: [],
 * };
 */
export type ComponentPropsArtifact = {
	/** The `@ngrok/mantle` package version the artifact was generated against. */
	version: string;
	/** Provenance note describing what the artifact was generated from. */
	generatedFrom: string;
	/** Per-component prop schemas, sorted by {@link ComponentPropSchema.name}. */
	components: ComponentPropSchema[];
};
