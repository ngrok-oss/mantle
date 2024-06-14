import { describe, expect, test } from "vitest";
import { zodCheckbox } from "./zod";

describe("zodCheckbox", () => {
	test("default options, not required", () => {
		const schema = zodCheckbox();
		expect(schema.parse("on")).toBe(true);
		expect(schema.parse(undefined)).toBe(false);
		expect(schema.parse(false)).toBe(false);
	});

	test("default options, required", () => {
		const schema = zodCheckbox().refine((val) => val, "Please check this box");
		expect(schema.parse("on")).toBe(true);
		expect(() => schema.parse(false)).toThrow("Please check this box");
		expect(() => schema.parse(undefined)).toThrow("Please check this box");
	});

	test("custom trueValue, not required", () => {
		const schema = zodCheckbox({ trueValue: "yes" });
		expect(schema.parse("yes")).toBe(true);
		expect(schema.parse(undefined)).toBe(false);
		expect(schema.parse(false)).toBe(false);
	});
});
