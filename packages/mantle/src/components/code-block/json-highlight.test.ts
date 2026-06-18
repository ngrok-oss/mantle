import { describe, expect, test } from "vitest";
import { jsonHighlightFixtures } from "./json-highlight.fixtures.js";
import { jsonCodeBlockValue, jsonToShikiHtml } from "./json-highlight.js";

describe("jsonToShikiHtml", () => {
	// The fixtures are the <code> inner HTML captured from Mantle's real Shiki
	// engine. Equality here is the byte-for-byte "matches Shiki 1:1" guarantee.
	test.each(jsonHighlightFixtures)("matches Shiki output 1:1 — $name", ({ code, expected }) => {
		expect(jsonToShikiHtml(code)).toBe(expected);
	});

	test("escapes `&` and `<` as hex entities but leaves `>` literal, like Shiki", () => {
		const html = jsonToShikiHtml(JSON.stringify("a < b > c & d"));
		expect(html).toContain("&#x3C;");
		expect(html).toContain("&#x26;");
		expect(html).toContain("> c"); // `>` is intentionally left literal
		expect(html).not.toContain("&gt;");
		expect(html).not.toContain("&amp;");
	});

	test("colors object keys and string values with distinct token variables", () => {
		const html = jsonToShikiHtml(JSON.stringify({ key: "value" }, null, 2));
		// key → keyword, value → string-expression
		expect(html).toContain('<span style="color:var(--shiki-token-keyword)">  "key"</span>');
		expect(html).toContain(
			'<span style="color:var(--shiki-token-string-expression)"> "value"</span>',
		);
	});

	test("splits escape sequences inside strings into their own escape spans", () => {
		const html = jsonToShikiHtml(JSON.stringify({ a: "x\ny" }, null, 2));
		expect(html).toContain(
			'<span style="color:var(--shiki-token-escape, var(--shiki-token-constant))">\\n</span>',
		);
	});
});

describe("jsonCodeBlockValue", () => {
	test("uses the JSON-serialized value (2-space indent) as the copy text", () => {
		const data = { id: "abc", count: 1 };
		const value = jsonCodeBlockValue(data);
		expect(value.language).toBe("json");
		expect(value.code).toBe(JSON.stringify(data, null, 2));
	});

	test("produces decorated, highlighted preHtml with no line numbers by default", () => {
		const value = jsonCodeBlockValue({ id: "abc" });
		const preHtml = value["~preHtml"];
		expect(preHtml).toBeTypeOf("string");
		expect(preHtml).toContain("mantle-code-line-content"); // ran through decorateHighlightedHtml
		expect(preHtml).toContain("var(--shiki-token-keyword)"); // the key is highlighted
		expect(preHtml).not.toContain("mantle-code-line-number"); // line numbers off by default
	});

	test("includes line-number markup when showLineNumbers is true", () => {
		const value = jsonCodeBlockValue({ id: "abc" }, { showLineNumbers: true });
		expect(value["~preHtml"]).toContain("mantle-code-line-number");
	});

	test("falls back to an empty string when the value is not JSON-serializable", () => {
		expect(jsonCodeBlockValue(undefined).code).toBe("");
	});

	test("serializes BigInt values (as decimal strings) without throwing", () => {
		const value = jsonCodeBlockValue({ id: 10n });
		expect(value.code).toBe(JSON.stringify({ id: "10" }, null, 2));
	});

	test("does not throw on circular structures — falls back to a best-effort string", () => {
		const circular: Record<string, unknown> = {};
		circular.self = circular;
		expect(() => jsonCodeBlockValue(circular)).not.toThrow();
		expect(jsonCodeBlockValue(circular).code).toBeTypeOf("string");
	});
});
