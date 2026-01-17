import { describe, expect, test } from "vitest";
import { escapeHtml } from "./escape-html.js";

describe("escapeHtml", () => {
	test("given empty string, returns empty string", () => {
		expect(escapeHtml("")).toBe("");
	});

	test("given a string with all special characters, returns the escaped string", () => {
		expect(escapeHtml("& < > \" '")).toBe("&amp; &lt; &gt; &quot; &#39;");
	});

	test("given a string with no special characters, returns the string", () => {
		expect(escapeHtml("Hello World")).toBe("Hello World");
	});

	test("given a string with special characters, returns the escaped string", () => {
		expect(escapeHtml('<div>Hello & "world"</div>')).toBe(
			"&lt;div&gt;Hello &amp; &quot;world&quot;&lt;/div&gt;",
		);

		expect(escapeHtml('<script>window.alert("lol xss")</script>')).toBe(
			"&lt;script&gt;window.alert(&quot;lol xss&quot;)&lt;/script&gt;",
		);

		expect(escapeHtml("<textarea>foo</textarea>")).toBe("&lt;textarea&gt;foo&lt;/textarea&gt;");
	});
});
