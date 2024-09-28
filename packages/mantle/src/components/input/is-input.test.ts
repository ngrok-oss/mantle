import { describe, expect, test } from "vitest";
import { isInput } from "./is-input.js";

describe("isInput", () => {
	test("given an input element, returns true", () => {
		const input = document.createElement("input");
		expect(isInput(input)).toBe(true);
	});

	test("given a div element, returns false", () => {
		const div = document.createElement("div");
		expect(isInput(div)).toBe(false);
	});

	test("given null, returns false", () => {
		expect(isInput(null)).toBe(false);
	});

	test("given undefined, returns false", () => {
		expect(isInput(undefined)).toBe(false);
	});

	test('given "input", returns false', () => {
		expect(isInput("input")).toBe(false);
	});

	test("given 123, returns false", () => {
		expect(isInput(123)).toBe(false);
	});

	test("given {}, returns false", () => {
		expect(isInput({})).toBe(false);
	});

	test("given [], returns false", () => {
		expect(isInput([])).toBe(false);
	});
});
