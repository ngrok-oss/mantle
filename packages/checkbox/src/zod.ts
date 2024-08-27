import { z } from "zod";

type Options = {
	/**
	 * The value to use when the checkbox is checked.
	 * @default "on"
	 */
	trueValue?: string;
};

/**
 * Turns the value from a checkbox field into a boolean,
 * but does not require the checkbox to be checked.
 * For checkboxes with a `value` attribute, you can pass that as the `trueValue` option.
 *
 * @example
 * ```ts
 * z.object({
 *   defaultCheckbox: zodCheckbox(),
 *   checkboxWithValue: zodCheckbox({ trueValue: "true" }),
 *   mustBeChecked: zodCheckbox().refine((v) => v, "Please check this box"),
 * });
 * ```
 */
function zodCheckbox(options?: Options) {
	const { trueValue = "on" } = options ?? {};

	return z.union([
		z.literal(trueValue).transform(() => true),
		z.literal(false).transform(() => false),
		z.literal(undefined).transform(() => false),
	]);
}

export {
	//
	zodCheckbox,
};
