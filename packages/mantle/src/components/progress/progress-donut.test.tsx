import { describe, expect, test } from "vitest";
import { deriveStrokeWidthPx } from "./progress-donut.js";

describe("deriveStrokeWidthPx", () => {
	test("given null/undefined, returns 4", () => {
		expect(deriveStrokeWidthPx(null as any)).toBe(4);
		expect(deriveStrokeWidthPx(undefined)).toBe(4);
	});

	test('given "6", returns 6', () => {
		expect(deriveStrokeWidthPx("6")).toBe(6);
	});

	test('given "16", returns 12', () => {
		expect(deriveStrokeWidthPx("16")).toBe(12);
	});

	test('given "0.25rem", returns 4', () => {
		expect(deriveStrokeWidthPx("0.25rem")).toBe(4);
	});

	test('given "0.5rem", returns 8', () => {
		expect(deriveStrokeWidthPx("0.5rem")).toBe(8);
	});

	test('given "1rem", returns 12', () => {
		expect(deriveStrokeWidthPx("1rem")).toBe(12);
	});

	test('given "0.375rem", returns 6', () => {
		expect(deriveStrokeWidthPx("0.375rem")).toBe(6);
	});

	test("given 6, returns 6", () => {
		expect(deriveStrokeWidthPx(6)).toBe(6);
	});

	test("given 8, returns 8", () => {
		expect(deriveStrokeWidthPx(8)).toBe(8);
	});

	test("given 16, returns 12", () => {
		expect(deriveStrokeWidthPx(16)).toBe(12);
	});
});
