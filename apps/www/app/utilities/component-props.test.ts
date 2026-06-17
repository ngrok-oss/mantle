import { describe, expect, it } from "vitest";

import {
	formatPropDefault,
	formatPropDescription,
	getComponentPropSchema,
	propLabel,
	splitInlineCode,
} from "./component-props";

describe("propLabel", () => {
	it("appends `?` to optional props", () => {
		expect(propLabel({ name: "appearance", required: false })).toBe("appearance?");
	});

	it("leaves required props bare", () => {
		expect(propLabel({ name: "type", required: true })).toBe("type");
	});
});

describe("formatPropDefault", () => {
	it("returns the recorded default text", () => {
		expect(formatPropDefault({ default: '"outlined"' })).toBe('"outlined"');
	});

	it("returns an empty string when there is no default", () => {
		expect(formatPropDefault({})).toBe("");
	});
});

describe("formatPropDescription", () => {
	it("returns the description unchanged when there is no branch info", () => {
		expect(formatPropDescription({ description: "The visual style." })).toBe("The visual style.");
	});

	it("appends branch info as its own sentence when the description ends in punctuation", () => {
		expect(
			formatPropDescription({
				description: "The button behavior.",
				branchInfo: "Required when asChild is not set",
			}),
		).toBe("The button behavior. Required when asChild is not set.");
	});

	it("inserts a period before branch info when the description has none", () => {
		expect(
			formatPropDescription({
				description: "The button behavior",
				branchInfo: "Required when asChild is not set",
			}),
		).toBe("The button behavior. Required when asChild is not set.");
	});

	it("uses branch info alone when there is no description", () => {
		expect(formatPropDescription({ branchInfo: "Required when asChild is true" })).toBe(
			"Required when asChild is true.",
		);
	});

	it("returns an empty string when neither is present", () => {
		expect(formatPropDescription({})).toBe("");
	});
});

describe("splitInlineCode", () => {
	it("returns a single plain run when there are no backticks", () => {
		expect(splitInlineCode("plain text")).toEqual([{ code: false, value: "plain text" }]);
	});

	it("splits backtick pairs into code and text runs", () => {
		expect(splitInlineCode("Setting `isLoading` will replace it.")).toEqual([
			{ code: false, value: "Setting " },
			{ code: true, value: "isLoading" },
			{ code: false, value: " will replace it." },
		]);
	});

	it("drops empty runs from adjacent or edge backticks", () => {
		expect(splitInlineCode("`code`")).toEqual([{ code: true, value: "code" }]);
	});

	it("treats an unbalanced trailing backtick as a code run start", () => {
		// `split("`")` yields ["a ", "b"] for "a `b", marking "b" (odd index) as
		// code — a deliberate minimal-subset tradeoff documented on the helper.
		expect(splitInlineCode("a `b")).toEqual([
			{ code: false, value: "a " },
			{ code: true, value: "b" },
		]);
	});
});

describe("getComponentPropSchema", () => {
	it("resolves a known component from the committed artifact", () => {
		const schema = getComponentPropSchema("Button");
		expect(schema?.name).toBe("Button");
		expect(schema?.hostElement).toBe("button");
		expect(schema?.props.map((prop) => prop.name)).toContain("appearance");
	});

	it("returns undefined for an unknown component", () => {
		expect(getComponentPropSchema("NotARealComponent")).toBeUndefined();
	});

	it("resolves a compound sub-component by its dotted member path", () => {
		const schema = getComponentPropSchema("AlertDialog.Content");
		expect(schema?.name).toBe("AlertDialog.Content");
		expect(schema?.extends).toBe("Radix Dialog.Content");
		// The own `preferredWidth` prop carries the corrected destructure default.
		const preferredWidth = schema?.props.find((prop) => prop.name === "preferredWidth");
		expect(preferredWidth?.default).toBe('"max-w-lg"');
	});

	it("resolves a passthrough sub-component with an extends label and no own props", () => {
		const schema = getComponentPropSchema("AlertDialog.Trigger");
		expect(schema?.extends).toBe("Radix Dialog.Trigger");
		expect(schema?.props).toEqual([]);
	});
});
