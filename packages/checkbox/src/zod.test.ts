import { describe, expect, test } from "vitest";
import { zodCheckbox } from "./zod";

describe("zodCheckbox", () => {
	test("default options", () => {
		const schema = zodCheckbox();
		expect(schema.parse("on")).toBe("on");
		expect(() => schema.parse("off")).toThrow();
		expect(() => schema.parse(false)).toThrow();
	});

	test("custom trueValue", () => {
		const schema = zodCheckbox({ trueValue: "yes" });
		expect(schema.parse("yes")).toBe("yes");
		expect(() => schema.parse("no")).toThrow();
		expect(() => schema.parse(false)).toThrow();
	});

	test("custom message", () => {
		const schema = zodCheckbox({ message: "Custom message" });
		expect(() => schema.parse("off")).toThrow("Custom message");
	});

	test("custom message function", () => {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		const schema = zodCheckbox({ message: (data) => `Custom message: ${data}` });
		expect(() => schema.parse("off")).toThrow("Custom message: off");
	});
});
