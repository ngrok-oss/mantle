import { describe, expect, test } from "vitest";
import { inferIndentation, isIndentation } from "./normalize-indentation.js";

describe("isIndentation", () => {
	test("returns true for valid indentation values", () => {
		expect(isIndentation("tabs")).toBe(true);
		expect(isIndentation("spaces")).toBe(true);
	});

	test("returns false for invalid indentation values", () => {
		expect(isIndentation("tab")).toBe(false);
		expect(isIndentation("space")).toBe(false);
		expect(isIndentation("")).toBe(false);
		expect(isIndentation(undefined)).toBe(false);
		expect(isIndentation(null)).toBe(false);
		expect(isIndentation(1)).toBe(false);
	});
});

describe("inferIndentation", () => {
	test("uses preferred indentation when provided", () => {
		expect(inferIndentation("typescript", "tabs")).toBe("tabs");
		expect(inferIndentation("typescript", "spaces")).toBe("spaces");
	});

	test("uses tab indentation for configured tab-indented languages", () => {
		expect(inferIndentation("cs", undefined)).toBe("tabs");
		expect(inferIndentation("csharp", undefined)).toBe("tabs");
		expect(inferIndentation("typescript", undefined)).toBe("tabs");
		expect(inferIndentation("javascript", undefined)).toBe("tabs");
	});

	test("uses space indentation for configured space-indented languages", () => {
		expect(inferIndentation("html", undefined)).toBe("spaces");
		expect(inferIndentation("xml", undefined)).toBe("spaces");
		expect(inferIndentation("python", undefined)).toBe("spaces");
		expect(inferIndentation("yaml", undefined)).toBe("spaces");
	});

	test("falls back to spaces when language is not in either explicit bucket", () => {
		expect(inferIndentation("text", undefined)).toBe("spaces");
		expect(inferIndentation("txt", undefined)).toBe("spaces");
	});
});
