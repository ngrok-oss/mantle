import { describe, expect, test } from "vitest";
import { estimateTickCount, generateLinearTicks, generateLogTicks } from "./ticks.js";

describe("generateLinearTicks", () => {
	test("generates ticks spanning the domain", () => {
		const ticks = generateLinearTicks(0, 100, 5);
		expect(ticks[0]).toBeLessThanOrEqual(0);
		expect(ticks[ticks.length - 1]).toBeGreaterThanOrEqual(100);
	});

	test("generates approximately the requested number of ticks", () => {
		const ticks = generateLinearTicks(0, 100, 5);
		// Allow reasonable deviation since we snap to nice numbers
		expect(ticks.length).toBeGreaterThanOrEqual(3);
		expect(ticks.length).toBeLessThanOrEqual(12);
	});

	test("produces nice round numbers", () => {
		const ticks = generateLinearTicks(0, 100, 5);
		for (const tick of ticks) {
			// Every tick should be a multiple of 10 or 20
			expect(tick % 10).toBe(0);
		}
	});

	test("handles equal min and max", () => {
		const ticks = generateLinearTicks(42, 42, 5);
		expect(ticks).toEqual([42]);
	});

	test("handles negative range", () => {
		const ticks = generateLinearTicks(-50, 50, 5);
		expect(ticks[0]).toBeLessThanOrEqual(-50);
		expect(ticks[ticks.length - 1]).toBeGreaterThanOrEqual(50);
		expect(ticks).toContain(0);
	});

	test("handles very small range", () => {
		const ticks = generateLinearTicks(0.001, 0.005, 5);
		expect(ticks.length).toBeGreaterThanOrEqual(2);
		for (const tick of ticks) {
			expect(Number.isFinite(tick)).toBe(true);
		}
	});

	test("handles very large range", () => {
		const ticks = generateLinearTicks(0, 1_000_000, 5);
		expect(ticks.length).toBeGreaterThanOrEqual(2);
		expect(ticks[ticks.length - 1]).toBeGreaterThanOrEqual(1_000_000);
	});
});

describe("generateLogTicks", () => {
	test("generates ticks at powers of 10", () => {
		const ticks = generateLogTicks(1, 10000);
		expect(ticks).toEqual([1, 10, 100, 1000, 10000]);
	});

	test("handles non-power-of-10 boundaries", () => {
		const ticks = generateLogTicks(5, 500);
		expect(ticks[0]).toBeLessThanOrEqual(5);
		expect(ticks[ticks.length - 1]).toBeGreaterThanOrEqual(500);
	});

	test("handles very small minimum", () => {
		const ticks = generateLogTicks(0.001, 100);
		expect(ticks[0]).toBeLessThanOrEqual(0.001);
		expect(ticks[ticks.length - 1]).toBeGreaterThanOrEqual(100);
	});
});

describe("estimateTickCount", () => {
	test("returns at least 2 ticks", () => {
		expect(estimateTickCount(50)).toBe(2);
		expect(estimateTickCount(0)).toBe(2);
	});

	test("returns at most 12 ticks", () => {
		expect(estimateTickCount(2000)).toBe(12);
	});

	test("returns roughly 1 tick per 80 pixels", () => {
		expect(estimateTickCount(400)).toBe(5);
		expect(estimateTickCount(800)).toBe(10);
	});
});
