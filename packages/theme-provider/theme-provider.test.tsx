import { describe, expect, test } from "vitest";

import { determineThemeFromMediaQuery } from ".";

describe("determineThemeFromMediaQuery", () => {
	test("given prefersDarkMode=true and prefersContrastMore=false, returns dark", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: true, prefersContrastMore: false })).toBe("dark");
	});

	test("given prefersDarkMode=false and prefersContrastMore=false, returns light", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: false, prefersContrastMore: false })).toBe("light");
	});

	test("given prefersDarkMode=true and prefersContrastMore=true, returns dark-high-contrast", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: true, prefersContrastMore: true })).toBe(
			"dark-high-contrast",
		);
	});

	test("given prefersDarkMode=false and prefersContrastMore=true, returns light-high-contrast", () => {
		expect(determineThemeFromMediaQuery({ prefersDarkMode: false, prefersContrastMore: true })).toBe(
			"light-high-contrast",
		);
	});
});
