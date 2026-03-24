import { createHash } from "node:crypto";
import {
	decorateHighlightedHtml,
	inferIndentation,
	isSupportedLanguage,
	normalizeIndentation,
	parseLanguage,
	type Indentation,
	type LineRange,
	type SupportedLanguage,
} from "@ngrok/mantle/highlight-utils";
import { createLruCache } from "./lru-cache.js";

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
const mantleHighlightCacheMaxEntries = 1000;

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
const mantleHighlightCache = createLruCache<string, Promise<MantleHighlightResult>>(
	mantleHighlightCacheMaxEntries,
);

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
	return fullHtml.match(/<code[^>]*>([\s\S]*?)<\/code>/)?.[1];
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
	const indentation = input.indentation ?? inferIndentation(resolvedLanguage, undefined);
	const normalizedCode = normalizeIndentation(input.code, {
		indentation,
	});
	const showLineNumbers = input.showLineNumbers ?? false;
	const highlightLines = input.highlightLines ?? [];
	const lineNumberStart = input.lineNumberStart ?? 1;
	const cacheKey = createHash("sha1")
		.update(normalizedCode)
		.update(
			`\0${resolvedLanguage}\0${showLineNumbers}\0${lineNumberStart}\0${JSON.stringify(highlightLines)}`,
		)
		.digest("hex");
	const cached = mantleHighlightCache.get(cacheKey);
	if (cached != null) {
		return cached;
	}

	const promise = (async () => {
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
			highlightLines,
			html: baseHtml,
			lineNumberStart,
			showLineNumbers,
		});

		return {
			code: normalizedCode,
			html,
			language: resolvedLanguage,
			showLineNumbers,
			highlightLines,
			lineNumberStart,
		};
	})().catch((error) => {
		mantleHighlightCache.delete(cacheKey);
		throw error;
	});

	mantleHighlightCache.set(cacheKey, promise);
	return promise;
}

/**
 * Creates a reusable Mantle server highlighter facade for API routes.
 */
function createMantleServerSyntaxHighlighter(): MantleServerHighlighter {
	return {
		highlight: highlightWithMantleShiki,
	};
}

export {
	createMantleServerSyntaxHighlighter,
	extractHighlightedCodeInnerHtml,
	getMantleShikiHighlighter,
	highlightWithMantleShiki,
	mantleHighlightCacheMaxEntries,
	mantleShikiLanguageGrammarIds,
	mantleShikiThemeName,
};
export type { MantleHighlightInput, MantleHighlightResult, MantleServerHighlighter };
