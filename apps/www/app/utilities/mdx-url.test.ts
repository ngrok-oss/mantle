import { describe, expect, test } from "vitest";
import { mdxUrlToCanonicalPath } from "./mdx-url.js";

describe("mdxUrlToCanonicalPath", () => {
	test("strips a trailing .mdx extension", () => {
		expect(mdxUrlToCanonicalPath("/docs/components/button.mdx")).toBe("/docs/components/button");
		expect(mdxUrlToCanonicalPath("/blocks/sheet-async.mdx")).toBe("/blocks/sheet-async");
	});

	test("leaves non-.mdx paths unchanged", () => {
		expect(mdxUrlToCanonicalPath("/docs/components/button")).toBe("/docs/components/button");
		expect(mdxUrlToCanonicalPath("/docs/components/button.md")).toBe("/docs/components/button.md");
	});

	test("only strips the extension, not .mdx elsewhere in the path", () => {
		expect(mdxUrlToCanonicalPath("/docs/mdx/button.mdx")).toBe("/docs/mdx/button");
	});
});
