import type { LineRange } from "./line-numbers.js";
import { resolveLineNumbers } from "./line-numbers.js";
import { cx } from "../../utils/cx/cx.js";

function splitHighlightedHtmlIntoLines(html: string): string[] {
	const normalizedHtml = html.replace(/\n+$/g, "");
	const shikiLines = normalizedHtml.split("\n");
	const linePrefix = '<span class="line">';
	const lineSuffix = "</span>";

	for (let i = 0; i < shikiLines.length; i++) {
		const line = shikiLines[i] ?? "";
		if (line.startsWith(linePrefix) && line.endsWith(lineSuffix)) {
			shikiLines[i] = line.slice(linePrefix.length, line.length - lineSuffix.length);
		}
	}

	return shikiLines;
}

type DecorateHighlightedHtmlInput = {
	highlightLines?: (LineRange | number)[] | undefined;
	html: string;
	lineNumberStart?: number | undefined;
	showLineNumbers?: boolean | undefined;
};

/**
 * Decorates Shiki-generated HTML by splitting it into individual line spans,
 * adding line number elements, and marking highlighted lines.
 */
function decorateHighlightedHtml({
	highlightLines,
	html,
	lineNumberStart = 1,
	showLineNumbers = false,
}: DecorateHighlightedHtmlInput): string {
	const highlightedLineNumbers = resolveLineNumbers(...(highlightLines ?? []));
	const lines = splitHighlightedHtmlIntoLines(html);
	let output = "";
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i] ?? "";
		const lineNumber = lineNumberStart + i;
		const lineClassName = cx(
			"mantle-code-line",
			highlightedLineNumbers.has(lineNumber) && "mantle-code-line-highlighted",
		);

		const lineNumberHtml = showLineNumbers
			? `<span class="mantle-code-line-number" data-slot="line-number">${lineNumber}</span>`
			: "";

		output += `<span class="${lineClassName}" data-line-number="${lineNumber}">${lineNumberHtml}<span class="mantle-code-line-content" data-slot="line-content">${line === "" ? " " : line}</span></span>`;
	}
	return output;
}

export { decorateHighlightedHtml };
export type { DecorateHighlightedHtmlInput };
