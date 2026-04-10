import { describe, expect, test } from "vitest";
import { mantleCode } from "./mantle-code.js";

describe("mantleCode", () => {
	test("returns a MantleCodeBlockValue with the correct language and code", () => {
		const value = mantleCode("typescript")`const x = 1;`;
		expect(value.language).toBe("typescript");
		expect(value.code).toBe("const x = 1;");
	});

	test("showLineNumbers defaults to true", () => {
		const value = mantleCode("typescript")`const x = 1;`;
		expect(value["~showLineNumbers"]).toBe(true);
	});

	test("showLineNumbers can be explicitly set to false", () => {
		const value = mantleCode("typescript", { showLineNumbers: false })`const x = 1;`;
		expect(value["~showLineNumbers"]).toBe(false);
	});

	test("showLineNumbers can be explicitly set to true", () => {
		const value = mantleCode("typescript", { showLineNumbers: true })`const x = 1;`;
		expect(value["~showLineNumbers"]).toBe(true);
	});

	test("interpolated template expressions are included in the code string", () => {
		const name = "world";
		const value = mantleCode("typescript")`const greeting = "Hello, ${name}!";`;
		expect(value.code).toBe('const greeting = "Hello, world!";');
	});

	test("interpolated values are captured in ~preVals", () => {
		const name = "world";
		const value = mantleCode("typescript")`Hello, ${name}!`;
		expect(value["~preVals"]).toEqual(["world"]);
	});

	test("~preVals is undefined when there are no interpolated values", () => {
		const value = mantleCode("typescript")`const x = 1;`;
		expect(value["~preVals"]).toBeUndefined();
	});

	test("passes through highlightLines option", () => {
		const value = mantleCode("typescript", { highlightLines: [1, 3] })`const x = 1;`;
		expect(value["~highlightLines"]).toEqual([1, 3]);
	});

	test("passes through lineNumberStart option", () => {
		const value = mantleCode("typescript", { lineNumberStart: 5 })`const x = 1;`;
		expect(value["~lineNumberStart"]).toBe(5);
	});
});
