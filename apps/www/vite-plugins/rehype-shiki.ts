import type { Element, Root } from "hast";
import type { BundledLanguage } from "shiki";
import { createHighlighter } from "shiki";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

// Language aliases: maps CodeBlock's SupportedLanguage values to Shiki BundledLanguage names.
const LANGUAGE_ALIASES: Partial<Record<string, BundledLanguage>> = {
	js: "javascript",
	ts: "typescript",
	sh: "bash",
	shell: "bash",
	py: "python",
	rb: "ruby",
	cs: "csharp",
	dotnet: "csharp",
	yml: "yaml",
	xml: "xml",
	html: "html",
	markup: "html",
	jsx: "jsx",
	tsx: "tsx",
};

// Languages that need no Shiki highlighting (render as plain text).
const PLAIN_TEXT_LANGS = new Set(["text", "plain", "plaintext", "txt"]);

// Shiki BundledLanguage values to preload.
const PRELOAD_LANGS: BundledLanguage[] = [
	"bash",
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
	"tsx",
	"typescript",
	"yaml",
	"xml",
	"csharp",
];

// Singleton: create the highlighter once per build/dev process.
let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ["github-light-default", "github-dark-default"],
			langs: PRELOAD_LANGS,
		});
	}
	return highlighterPromise;
}

/**
 * Resolves a language string to a Shiki BundledLanguage, or null if the
 * language is unknown or should be treated as plain text.
 */
function resolveLanguage(lang: string): BundledLanguage | null {
	if (PLAIN_TEXT_LANGS.has(lang)) {
		return null;
	}
	return (LANGUAGE_ALIASES[lang] ?? lang) as BundledLanguage;
}

/**
 * Extracts the innerHTML of the `<code>` element from a full Shiki-generated
 * HTML string (which wraps output in `<pre><code>…</code></pre>`).
 */
function extractCodeInnerHtml(html: string): string {
	const match = html.match(/<code[^>]*>([\s\S]*?)<\/code>/);
	return match?.[1] ?? "";
}

/**
 * Rehype plugin that runs Shiki on fenced code blocks at compile time and
 * injects the pre-highlighted HTML as a `data-highlighted-html` property on
 * each `<code>` element.
 *
 * The property is read by the MDX provider and forwarded to `CodeBlock.Code`
 * as the `preHighlightedHtml` prop, which bypasses the client-side Prism
 * fallback entirely — so no Shiki runtime ships to the browser.
 *
 * Dual themes (`github-light-default` / `github-dark-default`) are used with
 * `defaultColor: false`, meaning each token span carries both
 * `--shiki-light` and `--shiki-dark` CSS custom properties. A small CSS rule
 * (in `global.css`) selects the active variable depending on the active
 * Mantle theme.
 */
export const rehypeShiki: Plugin<[], Root> = () => {
	return async (tree) => {
		const highlighter = await getHighlighter();

		// Collect nodes synchronously (visit is synchronous), then highlight in parallel.
		const pending: Array<{ node: Element; lang: BundledLanguage; code: string }> = [];

		visit(tree, "element", (node) => {
			if (node.tagName !== "code") {
				return;
			}

			const classList = node.properties.className;
			if (!Array.isArray(classList)) {
				return;
			}

			const langClass = classList.find(
				(c): c is string => typeof c === "string" && c.startsWith("language-"),
			);
			if (!langClass) {
				return;
			}

			const rawLang = langClass.slice("language-".length);
			const resolvedLang = resolveLanguage(rawLang);
			if (!resolvedLang) {
				return;
			}

			const code = node.children
				.filter((child) => child.type === "text")
				.map((child) => (child as { value: string }).value)
				.join("");

			if (!code.trim()) {
				return;
			}

			pending.push({ node, lang: resolvedLang, code });
		});

		await Promise.all(
			pending.map(async ({ node, lang, code }) => {
				try {
					const html = highlighter.codeToHtml(code, {
						lang,
						themes: {
							light: "github-light-default",
							dark: "github-dark-default",
						},
						// `defaultColor: false` emits CSS variables only — no inline color.
						// Our global.css rule applies the correct variable per active theme.
						defaultColor: false,
					});

					node.properties["dataHighlightedHtml"] = extractCodeInnerHtml(html);
				} catch {
					// If Shiki can't highlight the code (e.g. unrecognized language
					// variant), leave the node unchanged so the client-side Prism
					// fallback handles it.
				}
			}),
		);
	};
};
