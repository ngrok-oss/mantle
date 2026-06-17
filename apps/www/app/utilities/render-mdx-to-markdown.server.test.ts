import { describe, expect, it } from "vitest";

import { renderMdxToMarkdown } from "./render-mdx-to-markdown.server";

describe("renderMdxToMarkdown", () => {
	it("drops the frontmatter and ESM imports but keeps prose and fenced code", () => {
		const mdx = [
			"---",
			"title: Button",
			"---",
			'import { Button } from "@ngrok/mantle/button";',
			"",
			"# Button",
			"",
			"Some prose.",
			"",
			"```tsx",
			'<Button type="button">Go</Button>',
			"```",
			"",
		].join("\n");

		const output = renderMdxToMarkdown(mdx);

		expect(output).toContain("# Button");
		expect(output).toContain("Some prose.");
		expect(output).toContain("```tsx");
		expect(output).not.toContain("import { Button }");
	});

	it("leaves a trail comment for JSX elements without a handler", () => {
		const output = renderMdxToMarkdown('<SomeUnknownThing foo="bar" />\n');
		expect(output).toContain("<!-- <SomeUnknownThing /> omitted in markdown output -->");
	});

	describe("AutoPropsTable", () => {
		it("serializes a known component to a real GFM prop table", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="Button" />\n');

			// The host-element prose line and a GFM table header + alignment row.
			expect(output).toContain("All props from `button`, plus:");
			expect(output).toContain("| Prop");
			expect(output).toMatch(/\| ---+ \| ---+ \| ---+ \| ---+ \|/);

			// Every column header is present.
			for (const header of ["Prop", "Type", "Default", "Description"]) {
				expect(output).toContain(header);
			}

			// A representative prop renders with its type, default, and the `?`
			// optional suffix, all as inline code.
			expect(output).toContain("`appearance?`");
			expect(output).toContain('`"outlined"`');
			// Union pipes inside a code cell are escaped so the table stays valid.
			expect(output).toContain("\\|");
		});

		it("renders inline code in descriptions instead of escaped backticks", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="Button" />\n');
			// `isLoading` appears inside another prop's description prose and must
			// stay real inline code, not an escaped backtick run.
			expect(output).toContain("`isLoading`");
			expect(output).not.toContain("\\`isLoading\\`");
		});

		it("appends discriminated-union branch info to the description", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="Button" />\n');
			// Button's `type` prop carries branchInfo from the asChild union.
			expect(output).toContain("Required when asChild is not set.");
		});

		it("degrades to the omitted comment for an unknown component", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="NotARealComponent" />\n');
			expect(output).toContain("<!-- <AutoPropsTable /> omitted in markdown output -->");
			expect(output).not.toContain("| Prop");
		});

		it("degrades to the omitted comment when the component name is missing", () => {
			const output = renderMdxToMarkdown("<AutoPropsTable />\n");
			expect(output).toContain("<!-- <AutoPropsTable /> omitted in markdown output -->");
		});

		it("renders an extends note plus a table for a compound sub-component with own props", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="AlertDialog.Content" />\n');

			// The extends label reads as a sentence ending in ", plus:" because the
			// sub-component adds its own `preferredWidth` prop on top of the Radix one.
			expect(output).toContain("All props from `Radix Dialog.Content`, plus:");
			// The own prop renders as a real table row with its corrected default.
			expect(output).toContain("`preferredWidth?`");
			expect(output).toContain('`"max-w-lg"`');
			expect(output).toContain("| Prop");
		});

		it("renders a passthrough sub-component as prose only, with no table", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="AlertDialog.Trigger" />\n');

			// A passthrough has zero own props, so the note is a standalone sentence
			// (period, not ", plus:") and no GFM table is emitted.
			expect(output).toContain("All props from `Radix Dialog.Trigger`.");
			expect(output).not.toContain("All props from `Radix Dialog.Trigger`, plus:");
			expect(output).not.toContain("| Prop");
		});

		it("renders a host-element passthrough table for Body with the asChild row", () => {
			const output = renderMdxToMarkdown('<AutoPropsTable component="AlertDialog.Body" />\n');

			expect(output).toContain("All props from `div`, plus:");
			expect(output).toContain("`asChild?`");
		});
	});
});
