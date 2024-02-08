import { describe, expect, test } from "vitest";
import { determineThemeFromMediaQuery } from "./theme-provider";

describe("determineThemeFromMediaQuery", () => {
	test("given prefersDarkMode=true and prefersHighContrast=false, returns dark", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: true, prefersHighContrast: false })).toBe("dark");
	});

	test("given prefersDarkMode=false and prefersHighContrast=false, returns light", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: false, prefersHighContrast: false })).toBe("light");
	});

	test("given prefersDarkMode=true and prefersHighContrast=true, returns dark-high-contrast", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: true, prefersHighContrast: true })).toBe(
			"dark-high-contrast",
		);
	});

	test("given prefersDarkMode=false and prefersHighContrast=true, returns light-high-contrast", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: false, prefersHighContrast: true })).toBe(
			"light-high-contrast",
		);
	});
});
