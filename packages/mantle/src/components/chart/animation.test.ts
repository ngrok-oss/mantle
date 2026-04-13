import { describe, expect, test } from "vitest";
import { easeInOutCubic, easeOutCubic, lerp, lerpArray } from "./animation.js";

describe("easeOutCubic", () => {
	test("returns 0 at t=0", () => {
		expect(easeOutCubic(0)).toBe(0);
	});

	test("returns 1 at t=1", () => {
		expect(easeOutCubic(1)).toBe(1);
	});

	test("is greater than linear at midpoint (fast start)", () => {
		expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
	});

	test("is monotonically increasing", () => {
		let previous = 0;
		for (let t = 0.1; t <= 1; t += 0.1) {
			const current = easeOutCubic(t);
			expect(current).toBeGreaterThan(previous);
			previous = current;
		}
	});
});

describe("easeInOutCubic", () => {
	test("returns 0 at t=0", () => {
		expect(easeInOutCubic(0)).toBe(0);
	});

	test("returns 1 at t=1", () => {
		expect(easeInOutCubic(1)).toBe(1);
	});

	test("returns 0.5 at t=0.5", () => {
		expect(easeInOutCubic(0.5)).toBeCloseTo(0.5);
	});

	test("is monotonically increasing", () => {
		let previous = 0;
		for (let t = 0.1; t <= 1; t += 0.1) {
			const current = easeInOutCubic(t);
			expect(current).toBeGreaterThanOrEqual(previous);
			previous = current;
		}
	});
});

describe("lerp", () => {
	test("returns start at progress 0", () => {
		expect(lerp(10, 20, 0)).toBe(10);
	});

	test("returns end at progress 1", () => {
		expect(lerp(10, 20, 1)).toBe(20);
	});

	test("returns midpoint at progress 0.5", () => {
		expect(lerp(10, 20, 0.5)).toBe(15);
	});

	test("handles negative values", () => {
		expect(lerp(-10, 10, 0.5)).toBe(0);
	});
});

describe("lerpArray", () => {
	test("interpolates each element independently", () => {
		const result = lerpArray([0, 10, 100], [10, 20, 200], 0.5);
		expect(result).toEqual([5, 15, 150]);
	});

	test("returns start values at progress 0", () => {
		const result = lerpArray([1, 2, 3], [4, 5, 6], 0);
		expect(result).toEqual([1, 2, 3]);
	});

	test("returns end values at progress 1", () => {
		const result = lerpArray([1, 2, 3], [4, 5, 6], 1);
		expect(result).toEqual([4, 5, 6]);
	});

	test("handles mismatched lengths by defaulting missing start values to 0", () => {
		const result = lerpArray([10], [10, 20], 0.5);
		expect(result).toEqual([10, 10]);
	});

	test("handles empty arrays", () => {
		const result = lerpArray([], [], 0.5);
		expect(result).toEqual([]);
	});
});
