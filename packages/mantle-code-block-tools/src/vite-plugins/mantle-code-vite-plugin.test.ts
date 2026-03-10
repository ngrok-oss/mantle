import { describe, expect, test, vi } from "vitest";
import { mantleCodeVitePlugin } from "./mantle-code-vite-plugin.js";

type TransformContext = {
	warn: ReturnType<typeof vi.fn>;
};

async function runTransform(source: string, id = "/virtual/test.tsx") {
	const plugin = mantleCodeVitePlugin();
	const context: TransformContext = {
		warn: vi.fn(),
	};
	const transform = plugin.transform;
	if (transform == null) {
		throw new Error("vite plugin is missing transform()");
	}
	const transformHandler = typeof transform === "function" ? transform : transform.handler;
	const result = await transformHandler.call(context as never, source, id);
	return {
		code: typeof result === "object" && result != null ? result.code : result,
		warn: context.warn,
	};
}

describe("mantleCodeVitePlugin", () => {
	test("transforms mantleCode tagged templates outside JSX", async () => {
		const result = await runTransform(
			'const snippet = mantleCode("typescript")`const value = ${count};`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~preHtml"');
		expect(result.code).toContain('"~preVals":[count]');
		expect(result.code).not.toContain('mantleCode("typescript")');
	});

	test("folds static ShikiCodeBlock.Code props into the transformed value and removes them from JSX", async () => {
		const source = [
			"<ShikiCodeBlock.Code",
			"\tshowLineNumbers",
			"\tlineNumberStart={7}",
			'\thighlightLines={[1, "3-4"]}',
			'\tindentation="spaces"',
			'\tvalue={mantleCode("typescript", { showLineNumbers: false, lineNumberStart: 2, highlightLines: [2] })`const value = ${count};`}',
			"/>;",
		].join("\n");
		const result = await runTransform(source);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":true');
		expect(result.code).toContain('"~lineNumberStart":7');
		expect(result.code).toContain('"~highlightLines":[1,"3-4"]');
		expect(result.code).toContain("<ShikiCodeBlock.Code");
		expect(result.code).not.toContain(" showLineNumbers");
		expect(result.code).not.toContain("lineNumberStart={7}");
		expect(result.code).not.toContain('highlightLines={[1, "3-4"]}');
		expect(result.code).not.toContain('indentation="spaces"');
	});
});
