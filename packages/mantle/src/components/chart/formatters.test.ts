import { describe, expect, test } from "vitest";
import {
	formatAdaptiveDecimal,
	formatCompact,
	formatPercent,
	formatScientific,
} from "./formatters.js";

describe("formatCompact", () => {
	test("formats small numbers as-is", () => {
		expect(formatCompact(42)).toBe("42");
		expect(formatCompact(999)).toBe("999");
	});

	test("formats thousands with K suffix", () => {
		expect(formatCompact(1500)).toBe("1.5K");
		expect(formatCompact(42000)).toBe("42K");
	});

	test("formats millions with M suffix", () => {
		expect(formatCompact(1_500_000)).toBe("1.5M");
	});

	test("formats billions with B suffix", () => {
		expect(formatCompact(1_500_000_000)).toBe("1.5B");
	});

	test("formats zero", () => {
		expect(formatCompact(0)).toBe("0");
	});
});

describe("formatScientific", () => {
	test("formats large numbers in scientific notation", () => {
		const result = formatScientific(12000);
		expect(result).toMatch(/1\.2E4/);
	});

	test("formats small numbers in scientific notation", () => {
		const result = formatScientific(0.003);
		expect(result).toMatch(/3E-3/);
	});
});

describe("formatPercent", () => {
	test("formats values >= 1% with 1 decimal", () => {
		expect(formatPercent(0.42)).toBe("42.0%");
		expect(formatPercent(0.01)).toBe("1.0%");
	});

	test("formats values >= 0.01% with 2 decimals", () => {
		expect(formatPercent(0.0005)).toBe("0.05%");
	});

	test("formats very small values with 3 decimals", () => {
		expect(formatPercent(0.000005)).toBe("0.001%");
	});

	test("formats zero", () => {
		expect(formatPercent(0)).toBe("0.000%");
	});
});

describe("formatAdaptiveDecimal", () => {
	test("uses no decimals for large ranges", () => {
		expect(formatAdaptiveDecimal(42.123, 1000)).toBe("42");
	});

	test("uses 1 decimal for moderate ranges", () => {
		expect(formatAdaptiveDecimal(4.567, 50)).toBe("4.6");
	});

	test("uses 2 decimals for small ranges", () => {
		expect(formatAdaptiveDecimal(0.567, 0.5)).toBe("0.57");
	});

	test("uses 3 decimals for very small ranges", () => {
		expect(formatAdaptiveDecimal(0.0567, 0.05)).toBe("0.057");
	});

	test("uses 4 decimals for tiny ranges", () => {
		expect(formatAdaptiveDecimal(0.00567, 0.005)).toBe("0.0057");
	});
});
