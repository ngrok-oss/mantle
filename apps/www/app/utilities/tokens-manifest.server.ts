import mantlePackageJson from "@ngrok/mantle/package.json" with { type: "json" };
import { canonicalOrigin } from "~/utilities/canonical-origin";
import { readThemeStyle } from "~/utilities/mantle-source.server";

/**
 * The four themes Mantle ships. Each maps to one authored value per token
 * in {@link TokenValues}. `lightHC` / `darkHC` are the high-contrast
 * variants.
 */
type ThemeKey = "light" | "dark" | "lightHC" | "darkHC";

/**
 * Coarse classification used by agents to filter the token set (e.g. "show
 * me every spacing token"). Derived purely from the token name prefix — see
 * {@link categorizeToken}.
 */
type TokenCategory =
	| "color"
	| "background"
	| "border"
	| "text"
	| "ring"
	| "shadow"
	| "divide"
	| "spacing"
	| "radius"
	| "typography"
	| "font"
	| "breakpoint"
	| "z-index"
	| "other";

/** Per-theme authored values for a single token. Absent themes are omitted. */
type TokenValues = {
	/** Authored value in the default (light) theme. */
	light?: string;
	/** Authored value in dark mode. */
	dark?: string;
	/** Authored value in light high-contrast mode. */
	lightHC?: string;
	/** Authored value in dark high-contrast mode. */
	darkHC?: string;
};

/**
 * One Tailwind 4 design token surfaced at `/api/tokens.json`.
 *
 * Values are the *authored* per-theme declarations — `var()` and
 * `color-mix()` chains are emitted verbatim, never resolved. When the
 * authored value is a single `var(...)` reference it is additionally
 * surfaced as {@link TokenEntry.aliasOf} so agents can follow the alias
 * without re-parsing the value.
 */
type TokenEntry = {
	/** Bare token name without the `--` prefix, e.g. `"color-accent-600"`. */
	name: string;
	/** The CSS custom property, e.g. `"--color-accent-600"`. */
	cssVar: string;
	/** Coarse category for filtering. */
	category: TokenCategory;
	/**
	 * Human-meaningful role for semantic tokens, e.g. `"accent"`, `"danger"`,
	 * `"card"`. Omitted for raw base scales (e.g. `--color-sky-600`).
	 */
	semanticRole?: string;
	/**
	 * Tailwind utility prefixes that consume this token, e.g.
	 * `["bg-filled-accent"]`. Omitted when no obvious utility maps to it.
	 */
	utilities?: string[];
	/**
	 * Present when every authored value is the same single `var(...)`
	 * reference — the token is a pure alias. Value is the verbatim
	 * reference, e.g. `"var(--color-sky-600)"`.
	 */
	aliasOf?: string;
	/** Authored per-theme values. */
	values: TokenValues;
};

/** Top-level shape returned by `/api/tokens.json`. */
type TokensManifest = {
	/** Currently published `@ngrok/mantle` version. */
	version: string;
	/** Canonical docs origin. */
	origin: string;
	/** Public design tokens, sorted by name. */
	tokens: TokenEntry[];
};

/** A `--name: value;` declaration captured at brace depth 0 of a block. */
type Declaration = {
	/** Bare token name without the `--` prefix. */
	name: string;
	/** Authored value with all internal whitespace collapsed to single spaces. */
	value: string;
};

/** A whitelisted `@theme`/`:root` block paired with the theme it defines. */
type ThemeBlock = {
	/** `null` for theme-agnostic `@theme` registrations. */
	theme: ThemeKey | null;
	/** Raw text between the block's outermost braces. */
	body: string;
};

/**
 * Token names we never surface: Shiki syntax-highlight variables and the
 * Mantle code-block rendering hooks. These are implementation detail, not
 * part of the public design-token surface agents should build against.
 */
function isExcludedTokenName(name: string): boolean {
	return name.startsWith("shiki-") || name.startsWith("mantle-code-");
}

/**
 * Scan `source` for top-level `{ ... }` blocks and invoke `onBlock` with the
 * text immediately preceding each block's opening brace (the "prelude",
 * typically an at-rule or selector list) and the block's inner body.
 *
 * Implemented as a single brace-depth walk so nested braces — `@supports`,
 * `color-mix()` has none but `@utility foo { &:hover { … } }` does — are
 * attributed to their enclosing top-level block rather than splitting it.
 *
 * @example
 * const blocks: string[] = [];
 * scanTopLevelBlocks("@theme { --a: 1; }", (_prelude, body) => blocks.push(body));
 * // blocks[0] === " --a: 1; "
 */
function scanTopLevelBlocks(
	source: string,
	onBlock: (prelude: string, body: string) => void,
): void {
	let depth = 0;
	let blockStart = -1;
	let preludeStart = 0;

	for (let index = 0; index < source.length; index++) {
		const character = source[index];
		if (character === "{") {
			if (depth === 0) {
				blockStart = index + 1;
			}
			depth++;
		} else if (character === "}") {
			depth--;
			if (depth === 0 && blockStart >= 0) {
				const prelude = source.slice(preludeStart, blockStart - 1);
				const body = source.slice(blockStart, index);
				onBlock(prelude, body);
				preludeStart = index + 1;
				blockStart = -1;
			} else if (depth < 0) {
				// Unbalanced input — reset defensively rather than reading past it.
				depth = 0;
				preludeStart = index + 1;
			}
		}
	}
}

/**
 * Map a block's prelude (the selector list or at-rule before `{`) to the
 * theme it defines, or to `null` for the theme-agnostic `@theme` /
 * `@theme inline` registration blocks. Returns `undefined` for any block
 * that is not a token-defining block we whitelist — `@font-face`, `@layer`,
 * `@utility`, `@custom-variant`, the Shiki/code `:root`, and bare class
 * rules are all rejected here.
 *
 * @example
 * classifyThemeBlock(":root.dark, :root[data-theme='dark']"); // "dark"
 * classifyThemeBlock("@theme inline"); // null
 * classifyThemeBlock("@font-face"); // undefined
 */
function classifyThemeBlock(prelude: string): ThemeKey | null | undefined {
	// A block's prelude is the slice since the previous block closed, so it
	// may carry leading `/* … */` comments and earlier sibling at-rule text
	// (e.g. an unbraced `@custom-variant foo (…);`). Strip comments and keep
	// only the final selector/at-rule fragment — the part actually bound to
	// this block's `{` — before classifying.
	const withoutComments = prelude.replace(/\/\*[\s\S]*?\*\//g, " ");
	const lastStatement = withoutComments.slice(withoutComments.lastIndexOf(";") + 1);
	const normalized = lastStatement.trim().replace(/\s+/g, " ");

	// `@theme` and `@theme inline` register tokens but are not theme-specific.
	if (/^@theme\b/.test(normalized)) {
		return null;
	}

	// Reject every other at-rule outright (@font-face, @layer, @utility,
	// @custom-variant, @media, @supports, @import, …).
	if (normalized.startsWith("@")) {
		return undefined;
	}

	// Theme `:root` blocks are keyed off their high-contrast / dark markers.
	// A bare `:root { --shiki-… }` (no theme marker) falls through to
	// `undefined` and is dropped.
	if (/dark-high-contrast/.test(normalized)) {
		return "darkHC";
	}
	if (/light-high-contrast/.test(normalized)) {
		return "lightHC";
	}
	if (/(?:^|[\s,])(?::root)?(?:\.dark\b|\[data-(?:applied-)?theme="dark"\])/.test(normalized)) {
		return "dark";
	}
	if (/(?:^|[\s,])(?::root)?(?:\.light\b|\[data-(?:applied-)?theme="light"\])/.test(normalized)) {
		return "light";
	}
	// The plain default `:root, :root.light, …` selector in mantle.css opens
	// the light-theme definitions. Treat a `:root` selector that carries an
	// explicit `light` marker as light (handled above); a bare-`:root`-only
	// list with no theme marker is the Shiki block — reject it.
	return undefined;
}

/**
 * Split a block body into its depth-0 `--name: value;` declarations.
 *
 * A naive `/--name:\s*([^;\n]+)/` truncates multi-line values such as
 * `color-mix(in oklab, … )`, the multi-shadow `--shadow-*` lists, and
 * `--alpha(… / …)` — all of which contain newlines and (for `color-mix`)
 * parentheses. This walker instead tracks paren depth and splits only on a
 * `;` seen at paren depth 0, so multi-line values are captured intact.
 *
 * Declarations not starting with `--` (plain properties like
 * `color-scheme: light`) are ignored. `/* … *\/` comments are stripped first
 * so an inline comment between declarations (e.g. the "red matches Tailwind
 * defaults" note before `--background-color-base`) is not glued onto the
 * following property name.
 *
 * @example
 * parseDeclarations("--a: var(--b); --c: color-mix(in oklab, x 50%, y);");
 * // [{ name: "a", value: "var(--b)" }, { name: "c", value: "color-mix(in oklab, x 50%, y)" }]
 */
function parseDeclarations(body: string): Declaration[] {
	const withoutComments = body.replace(/\/\*[\s\S]*?\*\//g, " ");
	const declarations: Declaration[] = [];
	let parenDepth = 0;
	let segmentStart = 0;

	const flush = (end: number) => {
		const segment = withoutComments.slice(segmentStart, end).trim();
		segmentStart = end + 1;
		if (segment.length === 0) {
			return;
		}
		const colonIndex = segment.indexOf(":");
		if (colonIndex < 0) {
			return;
		}
		const rawName = segment.slice(0, colonIndex).trim();
		if (!rawName.startsWith("--")) {
			return;
		}
		const value = segment
			.slice(colonIndex + 1)
			.trim()
			.replace(/\s+/g, " ");
		if (value.length === 0) {
			return;
		}
		declarations.push({ name: rawName.slice(2), value });
	};

	for (let index = 0; index < withoutComments.length; index++) {
		const character = withoutComments[index];
		if (character === "(") {
			parenDepth++;
		} else if (character === ")") {
			parenDepth = Math.max(0, parenDepth - 1);
		} else if (character === ";" && parenDepth === 0) {
			flush(index);
		}
	}
	// Trailing declaration without a final `;`.
	flush(withoutComments.length);

	return declarations;
}

/**
 * Detect a pure-alias value: a single top-level `var(--token)` reference and
 * nothing else. Returns the verbatim reference (e.g. `"var(--color-sky-600)"`)
 * or `undefined` when the value is a literal, a `color-mix()`, an `--alpha()`,
 * or a `var()` embedded in a larger expression.
 *
 * @example
 * aliasReference("var(--color-sky-600)"); // "var(--color-sky-600)"
 * aliasReference("color-mix(in oklab, var(--a) 50%, var(--b))"); // undefined
 */
function aliasReference(value: string): string | undefined {
	const match = value.match(/^var\(\s*(--[a-z0-9-]+)\s*\)$/i);
	return match ? `var(${match[1]})` : undefined;
}

/**
 * A token whose authored value re-states its own name as a placeholder, e.g.
 * `--background-color-card: var(--background-color-card)`. These appear in
 * `@theme inline` purely to register the name for Tailwind utility
 * generation; they carry no real value and must not become a self-alias.
 */
function isSelfReference(name: string, value: string): boolean {
	return value === `var(--${name})`;
}

/**
 * Classify a token by its name prefix. `--text-color-*` is text while other
 * `--text-*` (font sizes) is typography; `--*-color-*` families map to their
 * leading family (`background`, `border`, `divide`, `ring`).
 *
 * @example
 * categorizeToken("color-accent-600"); // "color"
 * categorizeToken("text-color-strong"); // "text"
 * categorizeToken("text-2xl"); // "typography"
 * categorizeToken("background-color-card"); // "background"
 */
function categorizeToken(name: string): TokenCategory {
	if (
		name.startsWith("background-color-") ||
		name === "bg-checked-icon" ||
		name === "bg-indeterminate-icon"
	) {
		return "background";
	}
	if (name.startsWith("border-color-")) {
		return "border";
	}
	if (name.startsWith("divide-color-")) {
		return "divide";
	}
	if (name.startsWith("ring-color-")) {
		return "ring";
	}
	if (name.startsWith("text-color-")) {
		return "text";
	}
	if (name.startsWith("shadow") || name === "navigation-shadow") {
		return "shadow";
	}
	if (name.startsWith("font-")) {
		return "font";
	}
	if (name.startsWith("breakpoint-")) {
		return "breakpoint";
	}
	if (name.startsWith("radius-")) {
		return "radius";
	}
	if (name.startsWith("z-index-")) {
		return "z-index";
	}
	if (name.startsWith("spacing-") || name === "spacing") {
		return "spacing";
	}
	if (name.startsWith("text-")) {
		return "typography";
	}
	if (name.startsWith("color-")) {
		return "color";
	}
	return "other";
}

/**
 * The semantic color families Mantle exposes, used both to detect the
 * `semanticRole` of a `--color-<family>-<step>` alias and to recognize
 * filled/focus/menu semantic backgrounds.
 */
const SEMANTIC_COLOR_FAMILIES = [
	"accent",
	"info",
	"danger",
	"warning",
	"success",
	"important",
] as const;

/**
 * Derive a human-meaningful `semanticRole` for a token, or `undefined` for
 * raw base scales (`--color-sky-600`) and structural tokens that carry no
 * role. Kept deliberately conservative — only the well-known Mantle semantic
 * families are surfaced.
 *
 * @example
 * semanticRoleFor("color-accent-600"); // "accent"
 * semanticRoleFor("background-color-filled-danger"); // "danger"
 * semanticRoleFor("color-sky-600"); // undefined
 */
function semanticRoleFor(name: string): string | undefined {
	const colorFamily = name.match(/^color-([a-z]+)-\d+$/);
	if (colorFamily) {
		const family = colorFamily[1];
		return SEMANTIC_COLOR_FAMILIES.some((known) => known === family) ? family : undefined;
	}

	for (const family of SEMANTIC_COLOR_FAMILIES) {
		if (name.endsWith(`-${family}`) || name.endsWith(`-${family}-hover`)) {
			return family;
		}
	}
	if (name.endsWith("-neutral") || name.endsWith("-neutral-hover")) {
		return "neutral";
	}
	return undefined;
}

/**
 * Merge declarations from every whitelisted theme block into one map keyed by
 * token name, recording each block's value under its theme slot. The first
 * non-`null` theme that defines a token wins per theme slot the same way the
 * cascade resolves it: later declarations in the same theme overwrite earlier
 * ones (e.g. the P3 `--color-ff00ff` override in `@theme`).
 *
 * Theme-agnostic `@theme` blocks (`theme === null`) seed the `light` slot —
 * they hold the default-theme static values (fonts, breakpoints, typography,
 * shadow composition) that are not re-declared per `:root` theme block.
 * Self-referential registration placeholders are skipped entirely.
 */
function collectTokenValues(blocks: ThemeBlock[]): Map<string, TokenValues> {
	const byName = new Map<string, TokenValues>();

	for (const block of blocks) {
		const slot: ThemeKey = block.theme ?? "light";
		for (const { name, value } of parseDeclarations(block.body)) {
			if (isExcludedTokenName(name)) {
				continue;
			}
			if (isSelfReference(name, value)) {
				continue;
			}
			const existing = byName.get(name) ?? {};
			existing[slot] = value;
			byName.set(name, existing);
		}
	}

	return byName;
}

/**
 * Determine the alias reference for a token, if it is a pure alias in *every*
 * theme it defines. A token aliases another only when each present value is
 * an identical single `var(...)` reference — a token that aliases in light
 * but resolves to a literal in dark is not a stable alias.
 *
 * @example
 * resolveAliasOf({ light: "var(--color-sky-600)" }); // "var(--color-sky-600)"
 * resolveAliasOf({ light: "var(--a)", dark: "oklch(50% 0 0)" }); // undefined
 */
function resolveAliasOf(values: TokenValues): string | undefined {
	const present = [values.light, values.dark, values.lightHC, values.darkHC].filter(
		(value): value is string => value != null,
	);
	if (present.length === 0) {
		return undefined;
	}
	const aliases = present.map(aliasReference);
	const first = aliases[0];
	if (first == null) {
		return undefined;
	}
	return aliases.every((alias) => alias === first) ? first : undefined;
}

/**
 * Build one {@link TokenEntry} from a token's name and collected per-theme
 * values, attaching category, semantic role, and alias metadata.
 */
function toTokenEntry(name: string, values: TokenValues): TokenEntry {
	const entry: TokenEntry = {
		name,
		cssVar: `--${name}`,
		category: categorizeToken(name),
		values,
	};

	const semanticRole = semanticRoleFor(name);
	if (semanticRole != null) {
		entry.semanticRole = semanticRole;
	}

	const aliasOf = resolveAliasOf(values);
	if (aliasOf != null) {
		entry.aliasOf = aliasOf;
	}

	return entry;
}

/**
 * Parse the four Mantle theme stylesheets into a sorted, deduplicated list of
 * {@link TokenEntry}. Pure transform over the raw CSS text — no I/O, no
 * caching — so it is directly unit-testable. The exported
 * {@link buildTokensManifest} wraps this with version/origin metadata and a
 * process-lifetime cache.
 *
 * @example
 * const tokens = parseTokens({ light: lightCss, dark: darkCss });
 * tokens.find((token) => token.name === "color-accent-600")?.aliasOf;
 * // "var(--color-sky-600)"
 */
function parseTokens(
	sources: Partial<Record<"light" | "dark" | "lightHC" | "darkHC", string>>,
): TokenEntry[] {
	const blocks: ThemeBlock[] = [];

	for (const source of Object.values(sources)) {
		if (source == null) {
			continue;
		}
		scanTopLevelBlocks(source, (prelude, body) => {
			const theme = classifyThemeBlock(prelude);
			if (theme === undefined) {
				return;
			}
			blocks.push({ theme, body });
		});
	}

	const byName = collectTokenValues(blocks);

	const tokens = Array.from(byName, ([name, values]) => toTokenEntry(name, values));
	tokens.sort((a, b) => a.name.localeCompare(b.name));
	return tokens;
}

/**
 * Build the public design-token manifest served at `/api/tokens.json`.
 * Reads the four bundled theme stylesheets, parses their authored Tailwind 4
 * semantic tokens, and tags each with version/origin metadata.
 *
 * Cached after first build because the inputs are static for the lifetime of
 * the server process.
 *
 * @example
 * const manifest = await buildTokensManifest();
 * manifest.tokens.length; // > 0, sorted by name
 */
let cachedManifest: TokensManifest | null = null;
export async function buildTokensManifest(): Promise<TokensManifest> {
	if (cachedManifest) {
		return cachedManifest;
	}

	const tokens = parseTokens({
		light: readThemeStyle("mantle"),
		dark: readThemeStyle("mantle-dark"),
		lightHC: readThemeStyle("mantle-light-high-contrast"),
		darkHC: readThemeStyle("mantle-dark-high-contrast"),
	});

	cachedManifest = {
		version: mantlePackageJson.version,
		origin: canonicalOrigin,
		tokens,
	};
	return cachedManifest;
}

export {
	aliasReference,
	categorizeToken,
	classifyThemeBlock,
	parseDeclarations,
	parseTokens,
	resolveAliasOf,
	scanTopLevelBlocks,
	semanticRoleFor,
};
export type { ThemeKey, TokenCategory, TokenEntry, TokensManifest, TokenValues };
