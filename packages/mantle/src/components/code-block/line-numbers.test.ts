import { describe, expect, test } from "vitest";
import { resolveLineNumbers } from "./line-numbers.js";

describe("resolveLineNumbers", () => {
	test("given an empty list, returns an empty set", () => {
		expect(resolveLineNumbers()).toEqual(new Set());
	});

	test("given a list of numbers, returns a set of those numbers", () => {
		expect(resolveLineNumbers(1, 2, 3)).toEqual(new Set([1, 2, 3]));
	});

	test("given a list of non-unique numbers, returns a set of unique numbers", () => {
		expect(resolveLineNumbers(1, 2, 2, 3, 3, 3)).toEqual(new Set([1, 2, 3]));
	});

	test("given a list of integers and floats, returns a set of integers", () => {
		expect(resolveLineNumbers(1, 2, 2.5, 3)).toEqual(new Set([1, 2, 3]));
	});

	test("given a range of numbers, returns a set of those numbers", () => {
		expect(resolveLineNumbers("1-3")).toEqual(new Set([1, 2, 3]));
	});

	test("given a range of numbers with a float, returns a set of integers", () => {
		expect(resolveLineNumbers("1-3.5")).toEqual(new Set([1, 2, 3]));
	});

	test("given a list of numbers and a range of numbers, returns a set of those numbers", () => {
		expect(resolveLineNumbers(1, 2, 3, "4-6")).toEqual(new Set([1, 2, 3, 4, 5, 6]));
	});

	test("given a list of numbers and a range of numbers with overlap, returns a set of unique numbers", () => {
		expect(resolveLineNumbers(1, 2, 3, "2-4", "1-6", "2-6.5", 6, 5, 6, 2)).toEqual(new Set([1, 2, 3, 4, 5, 6]));
	});
});
