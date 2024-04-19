import { describe, expect, test } from "vitest";
import { parseBooleanish } from "./parse-booleanish";

describe("parseBooleanish", () => {
	test("given `false`, returns `false`", () => {
		expect(parseBooleanish(false)).toBe(false);
	});

	test("given `true`, returns `true`", () => {
		expect(parseBooleanish(true)).toBe(true);
	});

	test('given `"false"`, returns `false`', () => {
		expect(parseBooleanish("false")).toBe(false);
	});

	test('given `"true"`, returns `true`', () => {
		expect(parseBooleanish("true")).toBe(true);
	});

	test('(garbage check) given `"ayylmao"`, returns `false`', () => {
		expect(parseBooleanish("ayylmao")).toBe(false);
	});
});
