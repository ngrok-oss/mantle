import type { Indentation } from "../components/code-block/normalize-indentation.js";
import { decorateHighlightedHtml } from "../components/code-block/decorate-highlighted-html.js";
import { inferIndentation } from "../components/code-block/normalize-indentation.js";
import type { LineRange } from "../components/code-block/line-numbers.js";
import { normalizeIndentation } from "../components/code-block/normalize.js";
import {
	isSupportedLanguage,
	parseLanguage,
} from "../components/code-block/supported-languages.js";
import type { SupportedLanguage } from "../components/code-block/supported-languages.js";

/**
 * Shiki grammar IDs preloaded by Mantle's highlighting engine.
 * This list is shared by both Vite plugins and server-side highlighting routes.
 */
const mantleShikiLanguageGrammarIds = [
	"bash",
	"csharp",
	"css",
	"go",
	"html",
	"java",
	"javascript",
	"json",
	"jsx",
	"python",
	"ruby",
	"rust",
	"shell",
	"tsx",
	"typescript",
	"xml",
	"yaml",
] as const satisfies SupportedLanguage[];

/**
 * Shared Shiki theme name used across Mantle highlighting.
 */
const mantleShikiThemeName = "mantle-css-variables" as const;

type ShikiHighlighter = Awaited<ReturnType<(typeof import("shiki"))["createHighlighter"]>>;

type MantleHighlightInput = {
	/**
	 * Raw code string to highlight.
	 */
	code: string;
	/**
	 * Language hint. Accepts supported language aliases and markdown-style values.
	 */
	language: SupportedLanguage | (string & {});
	/**
	 * Optional indentation preference. Defaults to language-inferred indentation.
	 */
	indentation?: Indentation;
	/**
	 * Whether to render line numbers into the returned HTML.
	 * @default false
	 */
	showLineNumbers?: boolean;
	/**
	 * Optional list of highlighted line numbers/ranges to render into the returned HTML.
	 * @default []
	 */
	highlightLines?: (LineRange | number)[];
	/**
	 * Start line number for rendered line numbers.
	 * @default 1
	 */
	lineNumberStart?: number;
};

type MantleHighlightResult = {
	/**
	 * Normalized source code used as the highlight input.
	 */
	code: string;
	/**
	 * Highlighted HTML extracted from Shiki's `<code>...</code>`.
	 */
	html: string;
	/**
	 * Resolved supported language used for highlighting.
	 */
	language: SupportedLanguage;
	/**
	 * Whether returned HTML includes line numbers.
	 */
	showLineNumbers: boolean;
	/**
	 * Highlighted line numbers/ranges applied to the returned HTML.
	 */
	highlightLines: (LineRange | number)[];
	/**
	 * Start line number used for rendered line numbers.
	 */
	lineNumberStart: number;
};

type MantleServerHighlighter = {
	/**
	 * Highlight a code snippet and return normalized code + highlighted HTML.
	 */
	highlight: (input: MantleHighlightInput) => Promise<MantleHighlightResult>;
};

let highlighterPromise: Promise<ShikiHighlighter> | undefined;

/**
 * Creates (and caches) Mantle's shared Shiki highlighter instance.
 */
function getMantleShikiHighlighter(): Promise<ShikiHighlighter> {
	if (highlighterPromise != null) {
		return highlighterPromise;
	}

	highlighterPromise = (async () => {
		const { createCssVariablesTheme, createHighlighter } = await import("shiki");
		const cssVarsTheme = createCssVariablesTheme({ name: mantleShikiThemeName });
		return createHighlighter({
			themes: [cssVarsTheme],
			langs: [...mantleShikiLanguageGrammarIds],
		});
	})();

	return highlighterPromise;
}

/**
 * Extracts the inner HTML from a Shiki `<code>...</code>` wrapper.
 */
function extractHighlightedCodeInnerHtml(fullHtml: string): string | undefined {
	return fullHtml.match(/<code>([\s\S]*?)<\/code>/)?.[1];
}

/**
 * Highlights code with Mantle's shared Shiki engine and normalization defaults.
 */
async function highlightWithMantleShiki(
	input: MantleHighlightInput,
): Promise<MantleHighlightResult> {
	const resolvedLanguage = isSupportedLanguage(input.language)
		? input.language
		: parseLanguage(input.language);
	const normalizedCode = normalizeIndentation(input.code, {
		indentation: input.indentation ?? inferIndentation(resolvedLanguage, undefined),
	});
	const lineNumberStart = input.lineNumberStart ?? 1;
	const highlighter = await getMantleShikiHighlighter();
	const fullHtml = highlighter.codeToHtml(normalizedCode, {
		lang: resolvedLanguage,
		theme: mantleShikiThemeName,
	});
	const baseHtml = extractHighlightedCodeInnerHtml(fullHtml);

	if (baseHtml == null) {
		throw new Error("Failed to extract highlighted HTML from Shiki output");
	}
	const html = decorateHighlightedHtml({
		highlightLines: input.highlightLines,
		html: baseHtml,
		lineNumberStart,
		showLineNumbers: input.showLineNumbers,
	});

	return {
		code: normalizedCode,
		html,
		language: resolvedLanguage,
		showLineNumbers: input.showLineNumbers ?? false,
		highlightLines: input.highlightLines ?? [],
		lineNumberStart,
	};
}

/**
 * Creates a reusable Mantle server highlighter facade for API routes.
 */
function createMantleServerHighlighter(): MantleServerHighlighter {
	return {
		highlight: highlightWithMantleShiki,
	};
}

export {
	createMantleServerHighlighter,
	extractHighlightedCodeInnerHtml,
	getMantleShikiHighlighter,
	highlightWithMantleShiki,
	mantleShikiLanguageGrammarIds,
	mantleShikiThemeName,
};
export type { MantleHighlightInput, MantleHighlightResult, MantleServerHighlighter };
