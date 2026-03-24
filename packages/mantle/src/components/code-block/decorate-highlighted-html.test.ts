import { describe, expect, test } from "vitest";
import { decorateHighlightedHtml } from "./decorate-highlighted-html.js";

/**
 * Helper that builds a minimal Shiki-like HTML string from line contents.
 * Each line is wrapped in `<span class="line">...</span>` separated by `\n`.
 */
function shikiHtml(lines: string[], lineEnding = "\n"): string {
	return lines.map((line) => `<span class="line">${line}</span>`).join(lineEnding);
}

describe("decorateHighlightedHtml", () => {
	test("wraps each line in mantle-code-line spans", () => {
		const html = shikiHtml(["const x = 1;", "const y = 2;"]);
		const result = decorateHighlightedHtml({ html });

		expect(result).toContain('class="mantle-code-line"');
		expect(result).toContain('data-line-number="1"');
		expect(result).toContain('data-line-number="2"');
		expect(result).toContain("const x = 1;");
		expect(result).toContain("const y = 2;");
	});

	test("replaces empty lines with a space to preserve line height", () => {
		const html = shikiHtml(["line1", "", "line3"]);
		const result = decorateHighlightedHtml({ html });

		expect(result).toContain('data-slot="line-content"> </span>');
	});

	test("adds line numbers when showLineNumbers is true", () => {
		const html = shikiHtml(["a", "b"]);
		const result = decorateHighlightedHtml({ html, showLineNumbers: true });

		expect(result).toContain('class="mantle-code-line-number"');
		expect(result).toContain('data-slot="line-number">1</span>');
		expect(result).toContain('data-slot="line-number">2</span>');
	});

	test("respects lineNumberStart offset", () => {
		const html = shikiHtml(["a", "b"]);
		const result = decorateHighlightedHtml({ html, showLineNumbers: true, lineNumberStart: 10 });

		expect(result).toContain('data-slot="line-number">10</span>');
		expect(result).toContain('data-slot="line-number">11</span>');
		expect(result).toContain('data-line-number="10"');
		expect(result).toContain('data-line-number="11"');
	});

	test("highlights specified lines", () => {
		const html = shikiHtml(["a", "b", "c"]);
		const result = decorateHighlightedHtml({ html, highlightLines: [2] });

		expect(result).toContain('class="mantle-code-line" data-line-number="1"');
		expect(result).toContain(
			'class="mantle-code-line mantle-code-line-highlighted" data-line-number="2"',
		);
		expect(result).toContain('class="mantle-code-line" data-line-number="3"');
	});

	test("highlights line ranges", () => {
		const html = shikiHtml(["a", "b", "c", "d"]);
		const result = decorateHighlightedHtml({ html, highlightLines: ["2-3"] });

		expect(result).toContain('class="mantle-code-line" data-line-number="1"');
		expect(result).toContain(
			'class="mantle-code-line mantle-code-line-highlighted" data-line-number="2"',
		);
		expect(result).toContain(
			'class="mantle-code-line mantle-code-line-highlighted" data-line-number="3"',
		);
		expect(result).toContain('class="mantle-code-line" data-line-number="4"');
	});

	test("omits line numbers when showLineNumbers is false", () => {
		const html = shikiHtml(["a"]);
		const result = decorateHighlightedHtml({ html, showLineNumbers: false });

		expect(result).not.toContain("mantle-code-line-number");
	});

	test("strips trailing newlines from input", () => {
		const html = shikiHtml(["a", "b"]) + "\n\n\n";
		const result = decorateHighlightedHtml({ html });

		// should produce exactly 2 lines, not 5
		const lineCount = (result.match(/data-line-number=/g) ?? []).length;
		expect(lineCount).toBe(2);
	});

	test("normalizes \\r\\n line endings", () => {
		const html = shikiHtml(["a", "b", "c"], "\r\n");
		const result = decorateHighlightedHtml({ html });

		const lineCount = (result.match(/data-line-number=/g) ?? []).length;
		expect(lineCount).toBe(3);
		// no stray \r in the output
		expect(result).not.toContain("\r");
	});

	test("normalizes bare \\r line endings", () => {
		const html = shikiHtml(["a", "b"], "\r");
		const result = decorateHighlightedHtml({ html });

		const lineCount = (result.match(/data-line-number=/g) ?? []).length;
		expect(lineCount).toBe(2);
		expect(result).not.toContain("\r");
	});

	test("strips trailing \\r\\n sequences", () => {
		const html = shikiHtml(["a"]) + "\r\n\r\n";
		const result = decorateHighlightedHtml({ html });

		const lineCount = (result.match(/data-line-number=/g) ?? []).length;
		expect(lineCount).toBe(1);
	});
});
