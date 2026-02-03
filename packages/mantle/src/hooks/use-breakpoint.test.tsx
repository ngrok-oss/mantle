import { describe, expect, test } from "vitest";
import { breakpoints } from "./use-breakpoint.js";
import type { Breakpoint, TailwindBreakpoint } from "./use-breakpoint.js";

describe("breakpoints configuration", () => {
	test("includes all expected breakpoints including 2xs", () => {
		expect(breakpoints).toEqual(["default", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"]);
	});

	test("has correct length", () => {
		expect(breakpoints).toHaveLength(8);
	});

	test("includes 2xs as a valid breakpoint", () => {
		expect(breakpoints).toContain("2xs");
	});

	test("2xs is positioned correctly in array", () => {
		expect(breakpoints[7]).toBe("2xs");
	});
});

describe("TailwindBreakpoint type", () => {
	test("2xs is a valid TailwindBreakpoint value", () => {
		const breakpoint: TailwindBreakpoint = "2xs";
		expect(breakpoint).toBe("2xs");
	});

	test("all tailwind breakpoints are valid", () => {
		const validBreakpoints: TailwindBreakpoint[] = ["2xl", "xl", "lg", "md", "sm", "xs", "2xs"];
		expect(validBreakpoints).toHaveLength(7);
	});
});

describe("Breakpoint type", () => {
	test("includes default and all tailwind breakpoints", () => {
		const allBreakpoints: Breakpoint[] = ["default", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"];
		expect(allBreakpoints).toHaveLength(8);
	});
});
