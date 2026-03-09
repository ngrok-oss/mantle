import { describe, expect, test } from "vitest";

import { slugify, slugifyComponentName } from "./slugify.js";

describe("slugify", () => {
	test("given an empty string, it returns an empty string", () => {
		expect(slugify("")).toBe("");
	});

	test("given a simple string, it returns a lowercase slug", () => {
		expect(slugify("Hello World")).toBe("hello-world");
	});

	test("given only hyphens and spaces, it returns an empty string", () => {
		expect(slugify("   ---   ")).toBe("");
	});

	test("given a string with diacritics, it returns a slug without diacritics", () => {
		expect(slugify("Crème brûlée — 100%!")).toBe("creme-brulee-100");
	});

	test("given a string with leading/trailing spaces and underscores, it returns a trimmed slug", () => {
		expect(slugify("  Hello_world---Again  ")).toBe("hello-world-again");
	});

	test("given a string with non-Latin scripts, it retains those characters in the slug", () => {
		expect(slugify("東京 Rust 勉強会 #3")).toBe("東京-rust-勉強会-3");
	});

	test("given a string with only special characters, it returns an empty string", () => {
		expect(slugify("!@#$%^&*()")).toBe("");
	});

	test("given a string with multiple spaces and hyphens, it collapses them into a single hyphen", () => {
		expect(slugify("This   is___a---test")).toBe("this-is-a-test");
	});

	test("given a string with mixed case letters, it returns a lowercase slug", () => {
		expect(slugify("MiXeD CaSe LeTtErS")).toBe("mixed-case-letters");
	});
});

describe("slugifyComponentName", () => {
	test("given a PascalCase name, it returns a kebab-case slug", () => {
		expect(slugifyComponentName("CommandDialog")).toBe("command-dialog");
	});

	test("given a single PascalCase word, it returns a lowercase slug", () => {
		expect(slugifyComponentName("Button")).toBe("button");
	});

	test("given a kebab-case name, it returns it unchanged", () => {
		expect(slugifyComponentName("command-dialog")).toBe("command-dialog");
	});

	test("given an already lowercase name, it returns it unchanged", () => {
		expect(slugifyComponentName("badge")).toBe("badge");
	});

	test("given a multi-word PascalCase name, it splits all boundaries", () => {
		expect(slugifyComponentName("SelectScrollUpButton")).toBe("select-scroll-up-button");
	});

	test("given whitespace only, it returns an empty string", () => {
		expect(slugifyComponentName("   ")).toBe("");
	});

	test("given only punctuation, it returns an empty string", () => {
		expect(slugifyComponentName("!@#$")).toBe("");
	});
});

describe("allowlist normalization (slugifyComponentName + empty filter)", () => {
	function normalizeAllowlist(entries: string[]): Set<string> {
		return new Set(entries.map(slugifyComponentName).filter((name) => name.length > 0));
	}

	test("normalizes PascalCase entries to kebab-case", () => {
		expect(normalizeAllowlist(["Command", "Dialog"])).toEqual(new Set(["command", "dialog"]));
	});

	test("accepts kebab-case entries unchanged", () => {
		expect(normalizeAllowlist(["alert-dialog", "code-block"])).toEqual(
			new Set(["alert-dialog", "code-block"]),
		);
	});

	test("deduplicates equivalent PascalCase and kebab-case entries", () => {
		expect(normalizeAllowlist(["AlertDialog", "alert-dialog"])).toEqual(new Set(["alert-dialog"]));
	});

	test("filters out entries that slug to an empty string", () => {
		expect(normalizeAllowlist(["Button", "   ", "!@#$", "Badge"])).toEqual(
			new Set(["button", "badge"]),
		);
	});

	test("returns an empty set for an empty allowlist", () => {
		expect(normalizeAllowlist([])).toEqual(new Set());
	});
});
