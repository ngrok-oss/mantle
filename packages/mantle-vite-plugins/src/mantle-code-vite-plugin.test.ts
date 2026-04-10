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

const mantleImport = 'import { mantleCode } from "@ngrok/mantle/code-block";\n';

describe("mantleCodeVitePlugin", () => {
	test("transforms mantleCode tagged templates outside JSX", async () => {
		const result = await runTransform(
			mantleImport + 'const snippet = mantleCode("typescript")`const value = ${count};`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~preHtml"');
		expect(result.code).toContain('"~preValToken":"__MANTLE_PRE_VAL_');
		expect(result.code).toContain('"~preVals":[count]');
		expect(result.code).not.toContain('mantleCode("typescript")');
	});

	test("wraps replacement in parentheses for expression context safety", async () => {
		const result = await runTransform(
			mantleImport + 'const f = () => mantleCode("typescript")`const x = 1`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain("const f = () => ({language:");
	});

	test("skips mantleCode not imported from @ngrok/mantle/code-block", async () => {
		const result = await runTransform(
			'import { mantleCode } from "./my-local-helper";\nconst snippet = mantleCode("typescript")`const value = 1;`;',
		);

		expect(result.code).toBeUndefined();
	});

	test("skips mantleCode with no import at all", async () => {
		const result = await runTransform(
			'const snippet = mantleCode("typescript")`const value = 1;`;',
		);

		expect(result.code).toBeUndefined();
	});

	test("handles aliased imports", async () => {
		const result = await runTransform(
			'import { mantleCode as mc } from "@ngrok/mantle/code-block";\nconst snippet = mc("typescript")`const value = 1;`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~preHtml"');
	});

	test("folds static CodeBlock.Code props into the transformed value and removes them from JSX", async () => {
		const source = [
			mantleImport + "<CodeBlock.Code",
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
		expect(result.code).toContain("<CodeBlock.Code");
		expect(result.code).not.toContain(" showLineNumbers");
		expect(result.code).not.toContain("lineNumberStart={7}");
		expect(result.code).not.toContain('highlightLines={[1, "3-4"]}');
		expect(result.code).not.toContain('indentation="spaces"');
	});

	test("defaults showLineNumbers to true for non-shell languages and emits line-number HTML", async () => {
		const result = await runTransform(
			mantleImport + 'const snippet = mantleCode("typescript")`const value = 1;`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":true');
		expect(result.code).toContain("mantle-code-line-number");
	});

	test("preserves showLineNumbers false when explicitly set and omits line-number HTML", async () => {
		const result = await runTransform(
			mantleImport +
				'const snippet = mantleCode("typescript", { showLineNumbers: false })`const value = 1;`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":false');
		expect(result.code).not.toContain("mantle-code-line-number");
	});

	test("defaults showLineNumbers to false for single-line bash and omits line-number HTML", async () => {
		const result = await runTransform(
			mantleImport + 'const snippet = mantleCode("bash")`npm install @ngrok/mantle`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":false');
		expect(result.code).not.toContain("mantle-code-line-number");
	});

	test("defaults showLineNumbers to false for single-line sh", async () => {
		const result = await runTransform(
			mantleImport + 'const snippet = mantleCode("sh")`curl -s https://example.com`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":false');
		expect(result.code).not.toContain("mantle-code-line-number");
	});

	test("defaults showLineNumbers to false for single-line shell", async () => {
		const result = await runTransform(
			mantleImport + 'const snippet = mantleCode("shell")`echo hello`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":false');
		expect(result.code).not.toContain("mantle-code-line-number");
	});

	test("defaults showLineNumbers to true for multi-line shell code and emits line-number HTML", async () => {
		const result = await runTransform(
			mantleImport + 'const snippet = mantleCode("bash")`echo hello\necho world`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":true');
		expect(result.code).toContain("mantle-code-line-number");
	});

	test("single-line shell code respects explicit showLineNumbers true and emits line-number HTML", async () => {
		const result = await runTransform(
			mantleImport +
				'const snippet = mantleCode("bash", { showLineNumbers: true })`npm install @ngrok/mantle`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":true');
		expect(result.code).toContain("mantle-code-line-number");
	});

	test("highlightLines with lineNumberStart produces highlighted lines at correct offsets", async () => {
		const result = await runTransform(
			mantleImport +
				'const snippet = mantleCode("typescript", { lineNumberStart: 10, highlightLines: [11] })`const a = 1;\nconst b = 2;`;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~lineNumberStart":10');
		expect(result.code).toContain('"~highlightLines":[11]');
		expect(result.code).toContain("mantle-code-line-highlighted");
	});

	test("indented single-line shell template defaults showLineNumbers to false", async () => {
		const source = [
			mantleImport + 'const snippet = mantleCode("bash")`',
			"\t\tnpm install @ngrok/mantle",
			"\t`;",
		].join("\n");
		const result = await runTransform(source);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":false');
		expect(result.code).not.toContain("mantle-code-line-number");
	});

	test("JSX showLineNumbers prop overrides mantleCode option", async () => {
		const source = [
			mantleImport + "<CodeBlock.Code",
			"\tshowLineNumbers={false}",
			'\tvalue={mantleCode("typescript", { showLineNumbers: true })`const x = 1;`}',
			"/>;",
		].join("\n");
		const result = await runTransform(source);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":false');
		expect(result.code).not.toContain("mantle-code-line-number");
	});

	test("JSX showLineNumbers prop overrides shell single-line default", async () => {
		const source = [
			mantleImport + "<CodeBlock.Code",
			"\tshowLineNumbers",
			'\tvalue={mantleCode("bash")`npm install @ngrok/mantle`}',
			"/>;",
		].join("\n");
		const result = await runTransform(source);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~showLineNumbers":true');
		expect(result.code).toContain("mantle-code-line-number");
	});

	test("normalizes numeric highlightLines entries to integers", async () => {
		const result = await runTransform(
			mantleImport +
				'<CodeBlock.Code highlightLines={[2.9]} value={mantleCode("typescript")`const value = 1;`} />;',
		);

		expect(result.warn).not.toHaveBeenCalled();
		expect(result.code).toContain('"~highlightLines":[2]');
	});
});
