import { compile } from "@mdx-js/mdx";
import { describe, expect, test } from "vitest";
import { remarkMdxNoParagraphWrap } from "./index.js";

/**
 * Compile MDX source with the plugin and return the output as a string.
 */
async function compileWithPlugin(mdx: string) {
	const result = await compile(mdx, {
		jsx: true,
		remarkPlugins: [remarkMdxNoParagraphWrap],
	});
	return String(result);
}

/**
 * Compile MDX source without the plugin and return the output as a string.
 */
async function compileWithoutPlugin(mdx: string) {
	const result = await compile(mdx, { jsx: true });
	return String(result);
}

describe("remarkMdxNoParagraphWrap", () => {
	test("basic: single-line JSX text has no <p> with or without plugin", async () => {
		const input = `<Foo>text</Foo>`;
		const output = await compileWithPlugin(input);

		expect(output).not.toContain("_components.p");
		expect(output).toContain("<Foo>");
	});

	test("multiline: MDX wraps in <p> without plugin, plugin removes it", async () => {
		const input = `<Foo>\n\ttext\n</Foo>`;
		const without = await compileWithoutPlugin(input);
		const output = await compileWithPlugin(input);

		expect(without).toContain("_components.p");
		expect(output).not.toContain("_components.p");
		expect(output).toContain("<Foo>");
	});

	test("nested JSX: removes <p> from nested JSX elements", async () => {
		const input = `<Outer>\n\t<Inner>\n\t\ttext\n\t</Inner>\n</Outer>`;
		const output = await compileWithPlugin(input);

		expect(output).not.toContain("_components.p");
		expect(output).toContain("<Outer>");
		expect(output).toContain("<Inner>");
	});

	test("mixed content: preserves inline formatting without <p> wrapper", async () => {
		const input = `<Foo>\n\ttext with **bold** and \`code\`\n</Foo>`;
		const output = await compileWithPlugin(input);

		expect(output).not.toContain("_components.p");
		expect(output).toContain("<Foo>");
	});

	test("normal prose: paragraphs outside JSX elements are unaffected", async () => {
		const input = `This is a paragraph.\n\nThis is another paragraph.`;
		const output = await compileWithPlugin(input);

		expect(output).toContain("_components.p");
	});

	test("explicit <p> in JSX: not stripped because it is a JSX element, not an mdast paragraph", async () => {
		const input = `<Foo>\n\t<p className="custom">text</p>\n</Foo>`;
		const output = await compileWithPlugin(input);

		expect(output).toContain('<p className="custom">');
	});

	test("JSX with attributes: works with JSX elements that have props", async () => {
		const input = `<PageHeader id="philosophy">\n\tPhilosophy\n</PageHeader>`;
		const output = await compileWithPlugin(input);

		expect(output).not.toContain("_components.p");
		expect(output).toContain('id="philosophy"');
	});

	test("multiple JSX elements: all have paragraphs removed independently", async () => {
		const input = `<Foo>\n\tHello\n</Foo>\n\n<Bar>\n\tWorld\n</Bar>`;
		const output = await compileWithPlugin(input);

		expect(output).not.toContain("_components.p");
		expect(output).toContain("<Foo>");
		expect(output).toContain("<Bar>");
	});
});
