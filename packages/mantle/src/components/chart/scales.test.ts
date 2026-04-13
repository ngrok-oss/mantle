import { describe, expect, test } from "vitest";
import { createBandScale, createLinearScale, createLogScale } from "./scales.js";

describe("createLinearScale", () => {
	test("maps domain values to pixel range", () => {
		const { scale } = createLinearScale([0, 100], [0, 500]);
		expect(scale(0)).toBeCloseTo(0, 1);
		expect(scale(50)).toBeCloseTo(250, 1);
		expect(scale(100)).toBeCloseTo(500, 1);
	});

	test("handles inverted range for Y axis", () => {
		const { scale } = createLinearScale([0, 100], [500, 0]);
		expect(scale(0)).toBeCloseTo(500, 1);
		expect(scale(100)).toBeCloseTo(0, 1);
	});

	test("inverse maps pixels back to domain values", () => {
		const { scale, inverse } = createLinearScale([0, 100], [0, 500]);
		expect(inverse(scale(42))).toBeCloseTo(42, 1);
	});

	test("handles single-point domain", () => {
		const { scale } = createLinearScale([50, 50], [0, 500]);
		// d3 .nice() may expand this, but the scale should still be valid
		expect(typeof scale(50)).toBe("number");
		expect(Number.isFinite(scale(50))).toBe(true);
	});

	test("handles negative domain", () => {
		const { scale } = createLinearScale([-100, 100], [0, 400]);
		expect(scale(0)).toBeCloseTo(200, 1);
	});
});

describe("createLogScale", () => {
	test("maps domain values to pixel range", () => {
		const { scale } = createLinearScale([1, 1000], [0, 300]);
		expect(scale(1)).toBeCloseTo(0, 0);
		expect(scale(1000)).toBeCloseTo(300, 0);
	});

	test("inverse maps pixels back to domain values", () => {
		const { scale, inverse } = createLogScale([1, 1000], [0, 300]);
		expect(inverse(scale(100))).toBeCloseTo(100, 0);
	});
});

describe("createBandScale", () => {
	test("maps categories to pixel positions", () => {
		const scale = createBandScale(["a", "b", "c"], [0, 300], 0);
		expect(scale("a")).toBe(0);
		expect(scale("b")).toBe(100);
		expect(scale("c")).toBe(200);
		expect(scale.bandwidth()).toBe(100);
	});

	test("returns undefined for unknown categories", () => {
		const scale = createBandScale(["a", "b"], [0, 200], 0);
		expect(scale("z")).toBeUndefined();
	});

	test("applies padding between bands", () => {
		const scale = createBandScale(["a", "b"], [0, 200], 0.5);
		expect(scale.bandwidth()).toBeLessThan(100);
		expect(scale.domain()).toEqual(["a", "b"]);
	});
});
