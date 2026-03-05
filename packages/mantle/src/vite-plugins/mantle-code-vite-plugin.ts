import MagicString from "magic-string";
import type { Plugin } from "vite";
import { inferIndentation } from "../components/code-block/normalize-indentation.js";
import {
	isSupportedLanguage,
	type SupportedLanguage,
} from "../components/code-block/supported-languages.js";
import { highlightWithMantleShiki } from "../server-highlighter/engine.js";

/**
 * Escapes a string for embedding as a JS template literal
 * (backticks, backslashes, and `${`).
 */
function escapeForTemplateLiteral(str: string): string {
	return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

/**
 * Processes template literal escape sequences to get the actual string value.
 */
function processTemplateStringPart(raw: string): string {
	let result = "";
	let i = 0;
	while (i < raw.length) {
		if (raw[i] === "\\" && i + 1 < raw.length) {
			const next = raw[i + 1];
			switch (next) {
				case "n":
					result += "\n";
					i += 2;
					break;
				case "r":
					result += "\r";
					i += 2;
					break;
				case "t":
					result += "\t";
					i += 2;
					break;
				case "0":
					result += "\0";
					i += 2;
					break;
				case "\\":
					result += "\\";
					i += 2;
					break;
				case "`":
					result += "`";
					i += 2;
					break;
				case "$":
					result += "$";
					i += 2;
					break;
				default:
					result += raw[i];
					i += 1;
					break;
			}
		} else {
			result += raw[i];
			i++;
		}
	}
	return result;
}

/**
 * Finds the position of the closing `}` for a template literal expression,
 * starting at the character after `${`.
 * Returns -1 if not found (unclosed expression).
 */
function findExpressionEnd(code: string, start: number): number {
	let depth = 0;
	let i = start;

	while (i < code.length) {
		const c = code[i];

		if (c === "{") {
			depth++;
			i++;
		} else if (c === "}") {
			if (depth === 0) {
				return i;
			}
			depth--;
			i++;
		} else if (c === '"' || c === "'") {
			// Skip over string literal
			const quote = c;
			i++;
			while (i < code.length) {
				if (code[i] === "\\") {
					i += 2;
				} else if (code[i] === quote) {
					i++;
					break;
				} else {
					i++;
				}
			}
		} else if (c === "`") {
			// Skip over nested template literal
			i++;
			let nestedDepth = 0;
			while (i < code.length) {
				if (code[i] === "\\") {
					i += 2;
				} else if (code[i] === "$" && code[i + 1] === "{") {
					nestedDepth++;
					i += 2;
				} else if (code[i] === "}" && nestedDepth > 0) {
					nestedDepth--;
					i++;
				} else if (code[i] === "`") {
					i++;
					break;
				} else {
					i++;
				}
			}
		} else {
			i++;
		}
	}

	return -1;
}

type ParsedTemplate = {
	/** Position after the closing backtick */
	end: number;
	/** Static string parts (with escape sequences processed) */
	strings: string[];
	/** Span [start, end] of each expression in the original source (content between ${ and }) */
	exprSpans: [number, number][];
};

type ParsedMantleCodeOptions = {
	highlightLines: (number | `${number}-${number}`)[] | undefined;
	lineNumberStart: number | undefined;
	showLineNumbers: boolean | undefined;
};

type ParsedJsxCodePropsResult = ParsedMantleCodeOptions & {
	openingTagEnd: number | undefined;
	openingTagStart: number | undefined;
	strippedOpeningTag: string | undefined;
};

type CachedHighlightResult = {
	code: string;
	html: string;
};

const highlightResultCache = new Map<string, Promise<CachedHighlightResult>>();

function createHighlightCacheKey(input: {
	code: string;
	highlightLines: ParsedMantleCodeOptions["highlightLines"];
	indentation: ReturnType<typeof inferIndentation>;
	language: SupportedLanguage;
	lineNumberStart: number | undefined;
	showLineNumbers: boolean | undefined;
}): string {
	return JSON.stringify(input);
}

function getCachedMantleHighlight(input: {
	code: string;
	highlightLines: ParsedMantleCodeOptions["highlightLines"];
	indentation: ReturnType<typeof inferIndentation>;
	language: SupportedLanguage;
	lineNumberStart: number | undefined;
	showLineNumbers: boolean | undefined;
}): Promise<CachedHighlightResult> {
	const cacheKey = createHighlightCacheKey(input);
	const cached = highlightResultCache.get(cacheKey);
	if (cached != null) {
		return cached;
	}

	const promise = highlightWithMantleShiki(input)
		.then((highlighted) => ({
			code: highlighted.code,
			html: highlighted.html,
		}))
		.catch((error) => {
			highlightResultCache.delete(cacheKey);
			throw error;
		});

	highlightResultCache.set(cacheKey, promise);
	return promise;
}

function parseHighlightLinesArray(input: unknown): (number | `${number}-${number}`)[] | undefined {
	if (!Array.isArray(input)) {
		return undefined;
	}
	const parsed = input.filter((item): item is number | `${number}-${number}` => {
		if (typeof item === "number") {
			return Number.isFinite(item) && item > 0;
		}
		return typeof item === "string" && /^\d+-\d+$/.test(item);
	});
	return parsed.length > 0 ? parsed : [];
}

/**
 * Parses a template literal starting at `backtickPos` in `code`.
 * Returns the static string parts (unescaped), and source spans of each ${...} expression.
 */
function parseTemplateLiteral(code: string, backtickPos: number): ParsedTemplate | null {
	let i = backtickPos + 1; // skip opening backtick
	let currentRaw = "";
	const strings: string[] = [];
	const exprSpans: [number, number][] = [];

	while (i < code.length) {
		const c = code[i];

		if (c === "\\") {
			// Escape sequence — take two chars as-is
			currentRaw += code[i] + (code[i + 1] ?? "");
			i += 2;
		} else if (c === "`") {
			// End of template literal
			strings.push(processTemplateStringPart(currentRaw));
			return { end: i + 1, strings, exprSpans };
		} else if (c === "$" && code[i + 1] === "{") {
			// Start of an interpolation
			strings.push(processTemplateStringPart(currentRaw));
			currentRaw = "";

			const exprStart = i + 2; // character after ${
			const exprEnd = findExpressionEnd(code, exprStart);
			if (exprEnd === -1) {
				return null; // unclosed expression
			}
			exprSpans.push([exprStart, exprEnd]);
			i = exprEnd + 1; // skip past }
		} else {
			currentRaw += c;
			i++;
		}
	}

	return null; // unclosed template literal
}

/** Regex to find `mantleCode("lang", { ... })` followed by a backtick */
const SHIKI_CODE_RE = /mantleCode\s*\(\s*(['"])([^'"]+)\1(?:\s*,\s*(\{[\s\S]*?\}))?\s*\)\s*`/g;

function parseMantleCodeOptions(raw: string | undefined): ParsedMantleCodeOptions {
	if (raw == null || raw.trim() === "") {
		return {
			highlightLines: undefined,
			lineNumberStart: undefined,
			showLineNumbers: undefined,
		};
	}

	let evaluated: unknown;
	try {
		evaluated = Function(`"use strict"; return (${raw});`)();
	} catch {
		return {
			highlightLines: undefined,
			lineNumberStart: undefined,
			showLineNumbers: undefined,
		};
	}

	if (typeof evaluated !== "object" || evaluated == null) {
		return {
			highlightLines: undefined,
			lineNumberStart: undefined,
			showLineNumbers: undefined,
		};
	}

	const record = evaluated as Record<string, unknown>;
	const showLineNumbers =
		typeof record.showLineNumbers === "boolean" ? record.showLineNumbers : undefined;
	const lineNumberStart =
		typeof record.lineNumberStart === "number" &&
		Number.isFinite(record.lineNumberStart) &&
		record.lineNumberStart > 0
			? Math.floor(record.lineNumberStart)
			: undefined;

	const highlightLinesRaw = record.highlightLines;
	const highlightLines = parseHighlightLinesArray(highlightLinesRaw);

	return {
		highlightLines:
			highlightLines != null && highlightLines.length > 0 ? highlightLines : undefined,
		lineNumberStart,
		showLineNumbers,
	};
}

function stripCompileTimeCodePropsFromOpeningTag(openingTag: string): string {
	return openingTag
		.replace(/\s+showLineNumbers\b(?!\s*=)/g, "")
		.replace(/\s+showLineNumbers\s*=\s*\{(?:true|false)\}/g, "")
		.replace(/\s+lineNumberStart\s*=\s*\{\d+\}/g, "")
		.replace(/\s+highlightLines\s*=\s*\{(?:\[[\s\S]*?\])\}/g, "")
		.replace(/\s+indentation\s*=\s*"(?:tabs|spaces)"/g, "")
		.replace(/\s+indentation\s*=\s*\{(?:["'](?:tabs|spaces)["'])\}/g, "");
}

function parseJsxCodeProps(source: string, valueExpressionStart: number): ParsedJsxCodePropsResult {
	const openingTagStart = source.lastIndexOf("<ShikiCodeBlock.Code", valueExpressionStart);
	if (openingTagStart === -1) {
		return {
			highlightLines: undefined,
			lineNumberStart: undefined,
			openingTagEnd: undefined,
			openingTagStart: undefined,
			showLineNumbers: undefined,
			strippedOpeningTag: undefined,
		};
	}

	const openingTagEnd = source.indexOf(">", openingTagStart);
	if (openingTagEnd === -1 || openingTagEnd < valueExpressionStart) {
		return {
			highlightLines: undefined,
			lineNumberStart: undefined,
			openingTagEnd: undefined,
			openingTagStart: undefined,
			showLineNumbers: undefined,
			strippedOpeningTag: undefined,
		};
	}

	const openingTag = source.slice(openingTagStart, openingTagEnd + 1);
	const strippedOpeningTag = stripCompileTimeCodePropsFromOpeningTag(openingTag);
	let showLineNumbers: boolean | undefined;
	let lineNumberStart: number | undefined;
	let highlightLines: (number | `${number}-${number}`)[] | undefined;

	if (/\bshowLineNumbers\b(?!\s*=)/.test(openingTag)) {
		showLineNumbers = true;
	} else {
		const showLineNumbersMatch = openingTag.match(/\bshowLineNumbers\s*=\s*\{(true|false)\}/);
		if (showLineNumbersMatch?.[1] != null) {
			showLineNumbers = showLineNumbersMatch[1] === "true";
		}
	}

	const lineNumberStartMatch = openingTag.match(/\blineNumberStart\s*=\s*\{(\d+)\}/);
	if (lineNumberStartMatch?.[1] != null) {
		lineNumberStart = Number.parseInt(lineNumberStartMatch[1], 10);
	}

	const highlightLinesMatch = openingTag.match(/\bhighlightLines\s*=\s*\{(\[[\s\S]*?\])\}/);
	if (highlightLinesMatch?.[1] != null) {
		try {
			const parsed = Function(`"use strict"; return (${highlightLinesMatch[1]});`)();
			highlightLines = parseHighlightLinesArray(parsed);
		} catch {
			highlightLines = undefined;
		}
	}

	return {
		highlightLines,
		lineNumberStart,
		openingTagEnd,
		openingTagStart,
		showLineNumbers,
		strippedOpeningTag,
	};
}

function mergeMantleCodeOptions({
	componentProps,
	mantleCodeOptions,
}: {
	componentProps: ParsedMantleCodeOptions;
	mantleCodeOptions: ParsedMantleCodeOptions;
}): ParsedMantleCodeOptions {
	return {
		highlightLines: componentProps.highlightLines ?? mantleCodeOptions.highlightLines,
		lineNumberStart: componentProps.lineNumberStart ?? mantleCodeOptions.lineNumberStart,
		showLineNumbers: componentProps.showLineNumbers ?? mantleCodeOptions.showLineNumbers,
	};
}

/**
 * Vite plugin that transforms `mantleCode("lang")\`...\`` tagged template calls
 * into pre-rendered Shiki HTML objects at build time.
 *
 * Add this plugin to your `vite.config.ts` (or use `mantleCodeBlockPlugins()`)
 * to enable build-time syntax highlighting with zero Shiki runtime in the browser bundle.
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { mantleCodeBlockPlugins } from "@ngrok/mantle/vite-plugin";
 *
 * const codeBlockPlugins = mantleCodeBlockPlugins({ mdx: false });
 *
 * export default defineConfig({
 *   plugins: [...codeBlockPlugins.vitePlugins],
 * });
 * ```
 */
function mantleCodeVitePlugin(): Plugin {
	return {
		name: "vite-plugin-mantle-code-block",

		async transform(code, id) {
			// Only transform JS/TS files
			if (!/\.[jt]sx?$/.test(id)) {
				return;
			}
			// Quick bail-out if mantleCode is not referenced
			if (!code.includes("mantleCode")) {
				return;
			}
			const ms = new MagicString(code);
			let didTransform = false;
			const parsedOptionsCache = new Map<string | undefined, ParsedMantleCodeOptions>();

			// Reset regex state for each transform call
			SHIKI_CODE_RE.lastIndex = 0;

			let match: RegExpExecArray | null;
			while ((match = SHIKI_CODE_RE.exec(code)) !== null) {
				const matchStart = match.index;
				const language = match[2];
				const optionsRaw = match[3];
				if (language == null) {
					continue;
				}
				const parsedOptions =
					parsedOptionsCache.get(optionsRaw) ??
					(() => {
						const parsed = parseMantleCodeOptions(optionsRaw);
						parsedOptionsCache.set(optionsRaw, parsed);
						return parsed;
					})();
				const parsedComponentProps = parseJsxCodeProps(code, matchStart);
				const effectiveOptions = mergeMantleCodeOptions({
					componentProps: parsedComponentProps,
					mantleCodeOptions: parsedOptions,
				});
				if (
					parsedComponentProps.openingTagStart != null &&
					parsedComponentProps.openingTagEnd != null &&
					parsedComponentProps.strippedOpeningTag != null &&
					parsedComponentProps.strippedOpeningTag !==
						code.slice(parsedComponentProps.openingTagStart, parsedComponentProps.openingTagEnd + 1)
				) {
					ms.overwrite(
						parsedComponentProps.openingTagStart,
						parsedComponentProps.openingTagEnd + 1,
						parsedComponentProps.strippedOpeningTag,
					);
				}
				// The regex ends right after the opening backtick
				const backtickPos = match.index + match[0].length - 1;

				if (!isSupportedLanguage(language)) {
					this.warn(`mantleCodeVitePlugin: unsupported language "${language}" in ${id} — skipping`);
					continue;
				}

				const parsed = parseTemplateLiteral(code, backtickPos);
				if (!parsed) {
					this.warn(
						`mantleCodeVitePlugin: could not parse template literal in ${id} at offset ${backtickPos} — skipping`,
					);
					continue;
				}

				const { end: matchEnd, strings, exprSpans } = parsed;

				// Build the placeholder string (static parts joined by SHIKI_VAL_N)
				let placeholderCode = strings[0] ?? "";
				for (let i = 0; i < exprSpans.length; i++) {
					placeholderCode += `SHIKI_VAL_${i}` + (strings[i + 1] ?? "");
				}

				const indentation = inferIndentation(language, undefined);

				// Run Shiki and extract the <code> inner HTML.
				// `highlightWithMantleShiki` performs normalization and returns that normalized
				// code; reuse it instead of normalizing separately in this plugin.
				let normalizedPlaceholder: string;
				let shikiHtml: string;
				try {
					const highlighted = await getCachedMantleHighlight({
						code: placeholderCode,
						highlightLines: effectiveOptions.highlightLines,
						indentation,
						language,
						lineNumberStart: effectiveOptions.lineNumberStart,
						showLineNumbers: effectiveOptions.showLineNumbers,
					});
					normalizedPlaceholder = highlighted.code;
					shikiHtml = highlighted.html;
				} catch (error) {
					this.warn(
						`mantleCodeVitePlugin: Shiki failed for language "${language}" in ${id}: ${error}`,
					);
					continue;
				}

				// Escape HTML for embedding as a template literal string
				const escapedHtml = escapeForTemplateLiteral(shikiHtml);

				// Build the replacement object literal
				let replacement: string;
				if (exprSpans.length === 0) {
					// Static string only — store normalized code as a plain string
					const escapedCode = escapeForTemplateLiteral(normalizedPlaceholder);
					replacement = `{language:${JSON.stringify(language)},code:\`${escapedCode}\`,"~preHtml":\`${escapedHtml}\`,"~preVals":undefined,"~showLineNumbers":${JSON.stringify(effectiveOptions.showLineNumbers)},"~highlightLines":${JSON.stringify(effectiveOptions.highlightLines)},"~lineNumberStart":${JSON.stringify(effectiveOptions.lineNumberStart)}}`;
				} else {
					// Interpolated code: keep normalized SHIKI_VAL_N placeholders in `code`,
					// then substitute `~preVals` at runtime for copy text.
					const escapedCode = escapeForTemplateLiteral(normalizedPlaceholder);
					const preValsArray = `[${exprSpans.map(([s, e]) => code.slice(s, e)).join(",")}]`;

					replacement = `{language:${JSON.stringify(language)},code:\`${escapedCode}\`,"~preHtml":\`${escapedHtml}\`,"~preVals":${preValsArray},"~showLineNumbers":${JSON.stringify(effectiveOptions.showLineNumbers)},"~highlightLines":${JSON.stringify(effectiveOptions.highlightLines)},"~lineNumberStart":${JSON.stringify(effectiveOptions.lineNumberStart)}}`;
				}

				ms.overwrite(matchStart, matchEnd, replacement);
				didTransform = true;
			}

			if (!didTransform) {
				return;
			}

			return { code: ms.toString(), map: ms.generateMap({ hires: true }) };
		},
	};
}

export { mantleCodeVitePlugin };
