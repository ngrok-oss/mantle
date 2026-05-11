import { describe, expect, test } from "vitest";
import { resolveFieldControlAriaProps, type FieldItemContextValue } from "./field-context.js";

/**
 * Options for a minimal `Field.Item` context fixture.
 */
type CreateFieldItemContextOptions = {
	/**
	 * Description IDs registered in the fixture context.
	 */
	descriptionIds?: string[];
	/**
	 * Error IDs registered in the fixture context.
	 */
	errorIds?: string[];
	/**
	 * Validation state exposed by the fixture context.
	 */
	validation?: FieldItemContextValue["validation"];
};

/**
 * Creates a minimal `Field.Item` context value for ARIA resolver tests.
 */
const createFieldItemContext = ({
	descriptionIds = [],
	errorIds = [],
	validation,
}: CreateFieldItemContextOptions) =>
	({
		descriptionIds,
		errorIds,
		registerDescriptionId: () => () => {},
		registerErrorId: () => () => {},
		validation,
	}) satisfies FieldItemContextValue;

describe("field context helpers", () => {
	describe("resolveFieldControlAriaProps", () => {
		test("wires only descriptions when the resolved validation state is valid", () => {
			const result = resolveFieldControlAriaProps({
				context: createFieldItemContext({
					descriptionIds: ["description"],
					errorIds: ["error"],
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
					descriptionIds: ["description"],
					errorIds: ["error"],
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
					descriptionIds: ["description"],
					errorIds: ["error"],
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
	});
});
