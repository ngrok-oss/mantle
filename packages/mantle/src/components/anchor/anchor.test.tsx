import { describe, expect, test } from "vitest";
import { resolveRel } from "./anchor.js";

describe("resolveRel", () => {
	test("given nothing or undefined, returns undefined", () => {
		expect(resolveRel(undefined)).toBe(undefined);
		expect(resolveRel(null)).toBe(undefined);
		expect(resolveRel([])).toBe(undefined);
		expect(resolveRel("")).toBe(undefined);
	});

	test("filters out empty values", () => {
		expect(resolveRel(["noopener", undefined, null, "", "     ", "\t\r\n ", "noreferrer"])).toBe("noopener noreferrer");
	});

	test("given a single rel, returns that rel", () => {
		expect(resolveRel("noopener")).toBe("noopener");
		expect(resolveRel("noreferrer")).toBe("noreferrer");
	});

	test("given multiple rels, returns a space-separated string of unique rels", () => {
		expect(resolveRel(["noopener", "noreferrer"])).toBe("noopener noreferrer");
		expect(resolveRel(["noopener", "noreferrer", "noopener"])).toBe("noopener noreferrer");
	});

	test("sorts rels", () => {
		expect(resolveRel(["noreferrer", "noopener", "alternate"])).toBe("alternate noopener noreferrer");
	});

	test("allows custom rels", () => {
		expect(resolveRel(["noopener", "noreferrer", "custom"])).toBe("custom noopener noreferrer");
	});
});
