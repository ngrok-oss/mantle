import { describe, expect, test } from "vitest";
import { resolvePreRenderedCodeBlockProps } from "./resolve-pre-rendered-props.js";

describe("resolvePreRenderedCodeBlockProps", () => {
	test("returns undefined when no pre-rendered payload exists", () => {
		expect(resolvePreRenderedCodeBlockProps({ foo: "bar" })).toEqual({
			mantleCode: undefined,
			props: { foo: "bar" },
		});
	});

	test("normalizes mantle-prefixed payload", () => {
		expect(
			resolvePreRenderedCodeBlockProps({
				mantleCode: "const x = 1",
				mantleHighlightLines: "1,3-5",
				mantleLanguage: "ts",
				mantleLineNumberStart: "10",
				mantlePreHtml: "<span>...</span>",
				mantleShowLineNumbers: "true",
				dataX: "hello",
			}),
		).toEqual({
			mantleCode: {
				code: "const x = 1",
				collapsible: undefined,
				disableCopy: undefined,
				highlightLines: [1, "3-5"],
				language: "ts",
				lineNumberStart: 10,
				mode: undefined,
				preHtml: "<span>...</span>",
				rawLanguage: "ts",
				showLineNumbers: true,
				title: undefined,
			},
			props: {
				dataX: "hello",
			},
		});
	});

	test("returns mantle payload only", () => {
		expect(
			resolvePreRenderedCodeBlockProps({
				mantleCode: "echo hi",
				mantleLanguage: "sh",
				mantlePreHtml: "<span>...</span>",
				mantleShowLineNumbers: false,
			}),
		).toEqual({
			mantleCode: {
				code: "echo hi",
				collapsible: undefined,
				disableCopy: undefined,
				highlightLines: undefined,
				language: "sh",
				lineNumberStart: undefined,
				mode: undefined,
				preHtml: "<span>...</span>",
				rawLanguage: "sh",
				showLineNumbers: false,
				title: undefined,
			},
			props: {},
		});
	});

	test("ignores unknown non-mantle payload keys", () => {
		expect(
			resolvePreRenderedCodeBlockProps({
				mantleCode: "new",
				mantleLanguage: "ts",
				mantlePreHtml: "<span>new</span>",
				shikiCode: "old",
			}),
		).toEqual({
			mantleCode: {
				code: "new",
				collapsible: undefined,
				disableCopy: undefined,
				highlightLines: undefined,
				language: "ts",
				lineNumberStart: undefined,
				mode: undefined,
				preHtml: "<span>new</span>",
				rawLanguage: "ts",
				showLineNumbers: undefined,
				title: undefined,
			},
			props: {
				shikiCode: "old",
			},
		});
	});

	test("normalizes mantle disableCopy/mode/title payload and strips mantle keys", () => {
		expect(
			resolvePreRenderedCodeBlockProps({
				mantleCode: "echo test",
				mantleDisableCopy: "true",
				mantleLanguage: "sh",
				mantleMode: "cli",
				mantlePreHtml: "<span>echo test</span>",
				mantleTitle: "  run command  ",
				id: "example",
			}),
		).toEqual({
			mantleCode: {
				code: "echo test",
				collapsible: undefined,
				disableCopy: true,
				highlightLines: undefined,
				language: "sh",
				lineNumberStart: undefined,
				mode: "cli",
				preHtml: "<span>echo test</span>",
				rawLanguage: "sh",
				showLineNumbers: undefined,
				title: "run command",
			},
			props: {
				id: "example",
			},
		});
	});

	test("normalizes non-mantle metadata keys when mantle payload exists", () => {
		expect(
			resolvePreRenderedCodeBlockProps({
				collapsible: "false",
				disableCopy: true,
				mantleCode: "echo plain",
				mantleLanguage: "sh",
				mode: "cli",
				mantlePreHtml: "<span>echo plain</span>",
				title: "  plain title  ",
				role: "presentation",
			}),
		).toEqual({
			mantleCode: {
				code: "echo plain",
				collapsible: false,
				disableCopy: true,
				highlightLines: undefined,
				language: "sh",
				lineNumberStart: undefined,
				mode: "cli",
				preHtml: "<span>echo plain</span>",
				rawLanguage: "sh",
				showLineNumbers: undefined,
				title: "plain title",
			},
			props: {
				role: "presentation",
			},
		});
	});
});
