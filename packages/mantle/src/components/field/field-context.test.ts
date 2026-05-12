import { describe, expect, test } from "vitest";
import { resolveFieldControlAriaProps, type FieldItemContextValue } from "./field-context.js";

/**
 * Options for a minimal `Field.Item` context fixture.
 */
type CreateFieldItemContextOptions = {
	/**
	 * Whether a `Field.Description` is mounted in the fixture context.
	 */
	hasDescription?: boolean;
	/**
	 * Whether a non-empty `Field.Errors` / `Field.ErrorList` is mounted in the
	 * fixture context.
	 */
	hasErrors?: boolean;
	/**
	 * Validation state exposed by the fixture context.
	 */
	validation?: FieldItemContextValue["validation"];
};

/**
 * Creates a minimal `Field.Item` context value for ARIA resolver tests.
 */
const createFieldItemContext = ({
	hasDescription = false,
	hasErrors = false,
	validation,
}: CreateFieldItemContextOptions) =>
	({
		descriptionId: "description",
		errorId: "error",
		hasDescription,
		hasErrors,
		registerDescription: () => () => {},
		registerError: () => () => {},
		validation,
	}) satisfies FieldItemContextValue;

describe("field context helpers", () => {
	describe("resolveFieldControlAriaProps", () => {
		test("wires only descriptions when the resolved validation state is valid", () => {
			const result = resolveFieldControlAriaProps({
				context: createFieldItemContext({
					hasDescription: true,
					hasErrors: true,
				}),
			});

			expect(result).toEqual({
				ariaProps: {
					"aria-describedby": "description",
					"aria-errormessage": undefined,
					"aria-invalid": undefined,
				},
				validation: undefined,
			});
		});

		test("wires descriptions and errors when validation resolves invalid", () => {
			const result = resolveFieldControlAriaProps({
				"aria-describedby": "existing-description",
				"aria-errormessage": "existing-error",
				context: createFieldItemContext({
					hasDescription: true,
					hasErrors: true,
					validation: "error",
				}),
			});

			expect(result).toEqual({
				ariaProps: {
					"aria-describedby": "existing-description description error",
					"aria-errormessage": "existing-error error",
					"aria-invalid": true,
				},
				validation: "error",
			});
		});

		test("lets explicit control validation override context validation", () => {
			const result = resolveFieldControlAriaProps({
				context: createFieldItemContext({
					hasDescription: true,
					hasErrors: true,
					validation: "error",
				}),
				validation: false,
			});

			expect(result).toEqual({
				ariaProps: {
					"aria-describedby": "description",
					"aria-errormessage": undefined,
					"aria-invalid": undefined,
				},
				validation: undefined,
			});
		});

		test("omits description IDREF when no description is mounted", () => {
			const result = resolveFieldControlAriaProps({
				context: createFieldItemContext({
					hasErrors: true,
					validation: "error",
				}),
			});

			expect(result.ariaProps["aria-describedby"]).toBe("error");
		});

		test("omits error wiring when validation is invalid but no errors are mounted", () => {
			const result = resolveFieldControlAriaProps({
				context: createFieldItemContext({
					hasDescription: true,
					validation: "error",
				}),
			});

			expect(result.ariaProps).toEqual({
				"aria-describedby": "description",
				"aria-errormessage": undefined,
				"aria-invalid": true,
			});
		});
	});
});
