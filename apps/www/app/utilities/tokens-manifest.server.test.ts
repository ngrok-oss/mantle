import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import {
	aliasReference,
	categorizeToken,
	classifyThemeBlock,
	parseDeclarations,
	parseTokens,
	resolveAliasOf,
	scanTopLevelBlocks,
	semanticRoleFor,
} from "./tokens-manifest.server";

/**
 * Read the real Mantle theme stylesheets from disk for the integration
 * tests. Vitest's CSS handling returns an empty string for `.css?raw`
 * imports, so the production `import.meta.glob` path in
 * `buildTokensManifest` cannot be exercised here — but `parseTokens` is the
 * pure core that production also runs, so feeding it the real authored CSS
 * gives the same coverage without the glob.
 */
function readThemeCssFromDisk() {
	const dir = path.resolve(import.meta.dirname, "../../../../packages/mantle/src");
	return {
		light: readFileSync(path.join(dir, "mantle.css"), "utf8"),
		dark: readFileSync(path.join(dir, "mantle-dark.css"), "utf8"),
		lightHC: readFileSync(path.join(dir, "mantle-light-high-contrast.css"), "utf8"),
		darkHC: readFileSync(path.join(dir, "mantle-dark-high-contrast.css"), "utf8"),
	};
}

describe("scanTopLevelBlocks", () => {
	it("attributes nested braces to the enclosing top-level block", () => {
		const blocks: { prelude: string; body: string }[] = [];
		scanTopLevelBlocks(
			"@utility scrollbar { &:hover { color: red; } } @theme { --a: 1; }",
			(prelude, body) => blocks.push({ prelude: prelude.trim(), body: body.trim() }),
		);
		expect(blocks).toEqual([
			{ prelude: "@utility scrollbar", body: "&:hover { color: red; }" },
			{ prelude: "@theme", body: "--a: 1;" },
		]);
	});

	it("survives unbalanced trailing braces without reading past the input", () => {
		const bodies: string[] = [];
		scanTopLevelBlocks("} @theme { --a: 1; }", (_prelude, body) => bodies.push(body.trim()));
		expect(bodies).toEqual(["--a: 1;"]);
	});
});

describe("classifyThemeBlock", () => {
	it("maps theme `:root` selector lists to their theme", () => {
		expect(classifyThemeBlock(':root, :root.light, :root[data-theme="light"]')).toBe("light");
		expect(classifyThemeBlock(':root.dark, :root[data-theme="dark"]')).toBe("dark");
		expect(classifyThemeBlock(":root.light-high-contrast")).toBe("lightHC");
		expect(classifyThemeBlock(":root.dark-high-contrast")).toBe("darkHC");
	});

	it("treats `@theme` and `@theme inline` as theme-agnostic (null)", () => {
		expect(classifyThemeBlock("@theme")).toBeNull();
		expect(classifyThemeBlock("@theme inline")).toBeNull();
	});

	it("rejects non-token at-rules and bare `:root` Shiki blocks", () => {
		expect(classifyThemeBlock("@font-face")).toBeUndefined();
		expect(classifyThemeBlock("@layer base")).toBeUndefined();
		expect(classifyThemeBlock("@utility scrollbar")).toBeUndefined();
		expect(classifyThemeBlock(":root")).toBeUndefined();
		expect(classifyThemeBlock(".mantle-code-line")).toBeUndefined();
	});

	it("ignores leading comments and prior unbraced sibling at-rules in the prelude", () => {
		// The brace scanner hands over everything since the previous block
		// closed, including comments and `;`-terminated `@custom-variant`s.
		const prelude =
			"/** MARK: CUSTOM VARIANTS */ @custom-variant dark-high-contrast (&:where(.dark-high-contrast)); @custom-variant hover-hover";
		expect(classifyThemeBlock(prelude)).toBeUndefined();
	});
});

describe("parseDeclarations", () => {
	it("captures a multi-line color-mix() value intact (no truncation at newlines)", () => {
		const body = `
			--background-color-card-hover: color-mix(
				in oklab,
				var(--color-white) 50%,
				var(--color-neutral-100)
			);
		`;
		expect(parseDeclarations(body)).toEqual([
			{
				name: "background-color-card-hover",
				value: "color-mix( in oklab, var(--color-white) 50%, var(--color-neutral-100) )",
			},
		]);
	});

	it("captures a multi-line multi-shadow list with --alpha() segments intact", () => {
		const body = `
			--shadow-md:
				0px 2px 13px 0px --alpha(var(--shadow-color) / var(--shadow-first-opacity)),
				0px 2px 4px -2px --alpha(var(--shadow-color) / var(--shadow-second-opacity));
		`;
		expect(parseDeclarations(body)).toEqual([
			{
				name: "shadow-md",
				value:
					"0px 2px 13px 0px --alpha(var(--shadow-color) / var(--shadow-first-opacity)), 0px 2px 4px -2px --alpha(var(--shadow-color) / var(--shadow-second-opacity))",
			},
		]);
	});

	it("captures a trailing declaration with no final semicolon", () => {
		expect(parseDeclarations("--a: 1; --b: 2")).toEqual([
			{ name: "a", value: "1" },
			{ name: "b", value: "2" },
		]);
	});

	it("ignores non-custom-property declarations like `color-scheme`", () => {
		expect(parseDeclarations("color-scheme: light; --a: 1;")).toEqual([{ name: "a", value: "1" }]);
	});

	it("preserves the `--text-mono--line-height` double-dash modifier name", () => {
		expect(parseDeclarations("--text-mono--line-height: 1.25rem;")).toEqual([
			{ name: "text-mono--line-height", value: "1.25rem" },
		]);
	});
});

describe("aliasReference", () => {
	it("returns the verbatim reference for a single `var(...)` value", () => {
		expect(aliasReference("var(--color-sky-600)")).toBe("var(--color-sky-600)");
		expect(aliasReference("var( --color-sky-600 )")).toBe("var(--color-sky-600)");
	});

	it("returns undefined for literals and embedded var() expressions", () => {
		expect(aliasReference("oklch(55% 0.158 241.966)")).toBeUndefined();
		expect(aliasReference("color-mix(in oklab, var(--a) 50%, var(--b))")).toBeUndefined();
		expect(aliasReference("--alpha(var(--color-neutral-500) / 0.05)")).toBeUndefined();
	});
});

describe("resolveAliasOf", () => {
	it("aliases only when every present theme value is the same single reference", () => {
		expect(resolveAliasOf({ light: "var(--color-sky-600)" })).toBe("var(--color-sky-600)");
		expect(
			resolveAliasOf({ light: "var(--color-accent-600)", dark: "var(--color-accent-600)" }),
		).toBe("var(--color-accent-600)");
	});

	it("does not alias when themes reference different tokens or mix literal + reference", () => {
		expect(resolveAliasOf({ light: "var(--color-a)", dark: "var(--color-b)" })).toBeUndefined();
		expect(resolveAliasOf({ light: "var(--color-a)", dark: "oklch(50% 0 0)" })).toBeUndefined();
		expect(resolveAliasOf({})).toBeUndefined();
	});
});

describe("categorizeToken", () => {
	it("classifies family-prefixed tokens by their leading family", () => {
		expect(categorizeToken("color-accent-600")).toBe("color");
		expect(categorizeToken("background-color-card")).toBe("background");
		expect(categorizeToken("border-color-base")).toBe("border");
		expect(categorizeToken("divide-color-card")).toBe("divide");
		expect(categorizeToken("ring-color-focus-accent")).toBe("ring");
	});

	it("separates `--text-color-*` (text) from font-size `--text-*` (typography)", () => {
		expect(categorizeToken("text-color-strong")).toBe("text");
		expect(categorizeToken("text-2xl")).toBe("typography");
		expect(categorizeToken("text-mono")).toBe("typography");
	});

	it("classifies the remaining structural families", () => {
		expect(categorizeToken("shadow-md")).toBe("shadow");
		expect(categorizeToken("navigation-shadow")).toBe("shadow");
		expect(categorizeToken("font-sans")).toBe("font");
		expect(categorizeToken("breakpoint-xs")).toBe("breakpoint");
		expect(categorizeToken("z-index-max")).toBe("z-index");
		expect(categorizeToken("spacing-em")).toBe("spacing");
		expect(categorizeToken("bg-checked-icon")).toBe("background");
	});
});

describe("semanticRoleFor", () => {
	it("surfaces the family for Mantle semantic color scales", () => {
		expect(semanticRoleFor("color-accent-600")).toBe("accent");
		expect(semanticRoleFor("color-danger-500")).toBe("danger");
	});

	it("does not assign a role to raw base scales", () => {
		expect(semanticRoleFor("color-sky-600")).toBeUndefined();
		expect(semanticRoleFor("color-neutral-950")).toBeUndefined();
	});

	it("surfaces the role for filled / focus semantic tokens", () => {
		expect(semanticRoleFor("background-color-filled-danger")).toBe("danger");
		expect(semanticRoleFor("background-color-filled-accent-hover")).toBe("accent");
		expect(semanticRoleFor("ring-color-focus-success")).toBe("success");
		expect(semanticRoleFor("background-color-filled-neutral")).toBe("neutral");
	});
});

describe("parseTokens", () => {
	const lightCss = `
		@theme {
			--color-accent-600: var(--color-sky-600);
			--spacing-em: 1em;
			--z-index-max: 2147483647;
			--shadow-sm: 0px 1px 2px 0 --alpha(var(--shadow-color) / var(--shadow-first-opacity));
		}
		@theme inline {
			--font-sans: "Roobert", sans-serif;
			/* self-referential registration placeholder — must be dropped */
			--background-color-card: var(--background-color-card);
		}
		:root, :root.light, :root[data-theme="light"] {
			color-scheme: light;
			--color-sky-600: oklch(55% 0.158 241.966);
			--background-color-card: var(--color-white);
			--background-color-card-hover: color-mix(
				in oklab,
				var(--color-white) 50%,
				var(--color-neutral-100)
			);
			--shiki-foreground: var(--text-color-strong);
		}
		:root {
			--shiki-token-comment: var(--text-color-muted);
			--mantle-code-line-number-width: 2rem;
		}
		@font-face { font-family: "Roobert"; }
	`;
	const darkCss = `
		:root.dark, :root[data-theme="dark"] {
			color-scheme: dark;
			--color-sky-600: oklch(74.6% 0.16 232.661);
			--background-color-card: var(--color-neutral-100);
		}
	`;

	it("merges per-theme values without fabricating absent themes (sparse base scale)", () => {
		const tokens = parseTokens({ light: lightCss, dark: darkCss });
		const sky = tokens.find((token) => token.name === "color-sky-600");
		expect(sky?.values).toEqual({
			light: "oklch(55% 0.158 241.966)",
			dark: "oklch(74.6% 0.16 232.661)",
		});
		// No high-contrast sources supplied → those slots stay absent, not "".
		expect(sky?.values.lightHC).toBeUndefined();
		expect(sky?.values.darkHC).toBeUndefined();
	});

	it("flags a pure cross-theme alias with aliasOf and no semanticRole churn", () => {
		const tokens = parseTokens({ light: lightCss });
		const accent = tokens.find((token) => token.name === "color-accent-600");
		expect(accent?.aliasOf).toBe("var(--color-sky-600)");
		expect(accent?.semanticRole).toBe("accent");
		expect(accent?.category).toBe("color");
	});

	it("excludes --shiki-* and --mantle-code-* tokens and skips @font-face / @utility blocks", () => {
		const tokens = parseTokens({ light: lightCss, dark: darkCss });
		const names = tokens.map((token) => token.name);
		expect(names).not.toContain("shiki-foreground");
		expect(names).not.toContain("shiki-token-comment");
		expect(names).not.toContain("mantle-code-line-number-width");
	});

	it("drops self-referential @theme inline registration placeholders but keeps the real per-theme value", () => {
		const tokens = parseTokens({ light: lightCss, dark: darkCss });
		const card = tokens.find((token) => token.name === "background-color-card");
		// The `var(--background-color-card)` placeholder must not become an alias.
		expect(card?.aliasOf).toBeUndefined();
		expect(card?.values).toEqual({
			light: "var(--color-white)",
			dark: "var(--color-neutral-100)",
		});
	});

	it("captures multi-line color-mix() values intact through the full pipeline", () => {
		const tokens = parseTokens({ light: lightCss });
		const hover = tokens.find((token) => token.name === "background-color-card-hover");
		expect(hover?.values.light).toBe(
			"color-mix( in oklab, var(--color-white) 50%, var(--color-neutral-100) )",
		);
	});

	it("returns tokens sorted by name", () => {
		const tokens = parseTokens({ light: lightCss, dark: darkCss });
		const names = tokens.map((token) => token.name);
		expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b)));
	});
});

describe("parseTokens against the real Mantle theme CSS", () => {
	const tokens = parseTokens(readThemeCssFromDisk());
	const byName = new Map(tokens.map((token) => [token.name, token]));

	it("parses a large, name-sorted token set", () => {
		expect(tokens.length).toBeGreaterThan(300);
		const names = tokens.map((token) => token.name);
		expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b)));
	});

	it("surfaces the semantic accent alias over its sky base", () => {
		const accent = byName.get("color-accent-600");
		expect(accent?.aliasOf).toBe("var(--color-sky-600)");
		expect(accent?.semanticRole).toBe("accent");
		expect(accent?.category).toBe("color");
	});

	it("omits values.light for a base scale only overridden in non-light themes (no fabrication)", () => {
		// `--color-sky-600` is custom-overridden in light, but most base scales
		// (e.g. `--color-red-50`) inherit Tailwind's light defaults and are only
		// re-declared in dark/high-contrast — so they carry no authored light.
		const red = byName.get("color-red-50");
		expect(red?.values.light).toBeUndefined();
		expect(red?.values.dark).toBeDefined();
		expect(red?.values.lightHC).toBeDefined();
		expect(red?.values.darkHC).toBeDefined();
	});

	it("captures the semantic filled-danger token across all four themes", () => {
		const filledDanger = byName.get("background-color-filled-danger");
		expect(filledDanger?.category).toBe("background");
		expect(filledDanger?.semanticRole).toBe("danger");
		expect(filledDanger?.values.light).toBeDefined();
		expect(filledDanger?.values.dark).toBeDefined();
		expect(filledDanger?.values.lightHC).toBeDefined();
		expect(filledDanger?.values.darkHC).toBeDefined();
	});

	it("captures a declaration that follows an inline comment in the block body", () => {
		// `--background-color-base` is preceded by the "red matches Tailwind
		// defaults" comment in the light `:root` block — a regression guard for
		// the comment-stripping in parseDeclarations.
		expect(byName.get("background-color-base")?.values.light).toBe("var(--color-neutral-50)");
	});

	it("captures multi-line color-mix() and multi-shadow values intact", () => {
		expect(byName.get("background-color-card-hover")?.values.light).toBe(
			"color-mix( in oklab, var(--color-white) 50%, var(--color-neutral-100) )",
		);
		expect(byName.get("shadow-md")?.values.light).toContain(
			"--alpha(var(--shadow-color) / var(--shadow-first-opacity))",
		);
	});

	it("keeps the last-wins P3 override for a token declared twice in @theme", () => {
		// `--color-ff00ff` is declared twice in @theme; the trailing display-p3
		// value must win, matching the CSS cascade.
		expect(byName.get("color-ff00ff")?.values.light).toBe("color(display-p3 0.94164 0 0.99869)");
	});

	it("preserves the `--text-mono--line-height` double-dash modifier token", () => {
		expect(byName.get("text-mono--line-height")?.values.light).toBe("1.25rem");
	});

	it("never emits Shiki or Mantle code-block hook tokens, fonts faces, or selectors", () => {
		expect(
			tokens.some(
				(token) => token.name.startsWith("shiki-") || token.name.startsWith("mantle-code-"),
			),
		).toBe(false);
		// `font-family` (a font-face descriptor) is distinct from the
		// `--font-family` token; the token is present, the descriptor is not a
		// token at all.
		expect(byName.has("font-family")).toBe(true);
	});
});
