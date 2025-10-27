import { describe, expect, test } from "vitest";
import { cx } from "./cx.js";

describe("cx", () => {
	test("given '', returns ''", () => {
		expect(cx("")).toBe("");
	});

	test("given {},[],false,null,undefined, returns ''", () => {
		expect(cx({}, [], false, null, undefined)).toBe("");
	});

	test("given 'a', returns 'a'", () => {
		expect(cx("a")).toBe("a");
	});

	test("given 'pb-6 pb-8, returns 'pb-8'", () => {
		expect(cx("pb-6 pb-8")).toBe("pb-8");
	});

	test("given 'pb-8 pb-6, returns 'pb-6'", () => {
		expect(cx("pb-8 pb-6")).toBe("pb-6");
	});

	test("given 'p-4 pt-5 pb-6 pr-3 pb-3', returns 'p-4 pt-5 pr-3 pb-3'", () => {
		expect(cx("p-4 pt-5 pb-6 pr-3 pb-3")).toBe("p-4 pt-5 pr-3 pb-3");
	});

	test("given 'p-4 pb-6 not-a-tailwind-class pb-3', returns 'p-4 not-a-tailwind-class pb-3'", () => {
		expect(cx("p-4 pb-6 not-a-tailwind-class pb-3")).toBe(
			"p-4 not-a-tailwind-class pb-3",
		);
	});

	test('given "text-red mb-2 text-base leading-4", returns "text-red mb-2 text-base leading-4"', () => {
		expect(cx("text-red mb-2 text-base leading-4")).toBe(
			"text-red mb-2 text-base leading-4",
		);
	});

	test('given "text-red mb-2 text-base leading-4 text-blue text-xl leading-5", returns "mb-2 text-blue text-xl leading-5"', () => {
		expect(
			cx("text-red mb-2 text-base leading-4 text-blue text-xl leading-5"),
		).toBe("mb-2 text-blue text-xl leading-5");
	});

	test('given "text-red mb-2 text-base leading-4 text-xl", returns "text-red mb-2 text-xl"', () => {
		expect(cx("text-red mb-2 text-base leading-4 text-xl")).toBe(
			"text-red mb-2 text-xl",
		);
	});

	test("conditional font color applies correctly", () => {
		expect(cx("text-red", false && "text-blue", true && "text-gold")).toBe(
			"text-gold",
		);
	});

	test("text-mono can be overridden by text-base", () => {
		expect(cx("text-mono text-base")).toBe("text-base");
	});

	test("text-base can be overridden by text-mono", () => {
		expect(cx("text-base text-mono")).toBe("text-mono");
	});

	test("text-mono with other classes and text-xl override", () => {
		expect(cx("font-mono text-mono p-4 text-xl")).toBe("font-mono p-4 text-xl");
	});
});
