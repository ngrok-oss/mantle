import type { LineRange } from "./line-numbers.js";
import { resolveLineNumbers } from "./line-numbers.js";
import { cx } from "../../utils/cx/cx.js";

function splitHighlightedHtmlIntoLines(html: string): string[] {
	const normalizedHtml = html.replace(/\n+$/g, "");
	const shikiLines = normalizedHtml.split("\n");
	const linePrefix = '<span class="line">';
	const lineSuffix = "</span>";

	const maybeUnwrapped = shikiLines.map((line) => {
		if (line.startsWith(linePrefix) && line.endsWith(lineSuffix)) {
			return line.slice(linePrefix.length, line.length - lineSuffix.length);
		}
		return undefined;
	});

	if (maybeUnwrapped.some((line) => line != null)) {
		return maybeUnwrapped.map((line, index) => line ?? shikiLines[index] ?? "");
	}

	return normalizedHtml.split("\n");
}

type DecorateHighlightedHtmlInput = {
	highlightLines?: (LineRange | number)[] | undefined;
	html: string;
	lineNumberStart?: number | undefined;
	showLineNumbers?: boolean | undefined;
};

function decorateHighlightedHtml({
	highlightLines,
	html,
	lineNumberStart = 1,
	showLineNumbers = false,
}: DecorateHighlightedHtmlInput): string {
	const highlightedLineNumbers = resolveLineNumbers(...(highlightLines ?? []));
	const lines = splitHighlightedHtmlIntoLines(html);
	return lines
		.map((line, index) => {
			const lineNumber = lineNumberStart + index;
			const lineClassName = cx(
				"mantle-code-line",
				highlightedLineNumbers.has(lineNumber) && "mantle-code-line-highlighted",
			);

			const lineNumberHtml = showLineNumbers
				? `<span class="mantle-code-line-number" data-slot="line-number">${lineNumber}</span>`
				: "";

			return `<span class="${lineClassName}" data-line-number="${lineNumber}">${lineNumberHtml}<span class="mantle-code-line-content" data-slot="line-content">${line === "" ? " " : line}</span></span>`;
		})
		.join("");
}

export { decorateHighlightedHtml };
export type { DecorateHighlightedHtmlInput };
