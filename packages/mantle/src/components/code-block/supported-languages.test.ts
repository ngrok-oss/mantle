import { describe, expect, test } from "vitest";
import { parseLanguage, supportedLanguages } from "./supported-languages.js";

describe("parseLanguage", () => {
	test("given undefined, returns 'sh'", () => {
		const lang = parseLanguage(undefined);
		expect(lang).toEqual("sh");
	});

	test('given "", returns "sh"', () => {
		const lang = parseLanguage("");
		expect(lang).toEqual("sh");
	});

	test("given '  \t\n\r  ', returns 'sh'", () => {
		const lang = parseLanguage("  \t\n\r  ");
		expect(lang).toEqual("sh");
	});

	test("given invalid languages, returns 'sh'", () => {
		const langs = ["fake", "language-fake", "lang-fake", "lang-", "language-"];
		for (const lang of langs) {
			const result = parseLanguage(lang);
			expect(result).toEqual("sh");
		}
	});

	test("given 'lang-tsx', returns 'tsx'", () => {
		const lang = parseLanguage("lang-tsx");
		expect(lang).toEqual("tsx");
	});

	test("given 'language-tsx', returns 'tsx'", () => {
		const lang = parseLanguage("language-tsx");
		expect(lang).toEqual("tsx");
	});

	test("given `language-${supportedLanguage}`, returns 'sh'", () => {
		for (const lang of supportedLanguages) {
			const className = `language-${lang}` as const;
			const result = parseLanguage(className);
			expect(result).toEqual(lang);
		}
	});
});
