import { z } from "zod";

type CheckboxOptions = {
	/**
	 * The value to use when the checkbox is checked.
	 */
	trueValue?: "on" | (string & {});
	/**
	 * The error message to display when the value is not valid.
	 * Pass a function to customize the message based on the data.
	 */
	message?: string | ((data: unknown) => string);
};

/**
 * A zod schema for a checkbox input value.
 */
function zodCheckbox(options?: CheckboxOptions) {
	const { trueValue = "on", message = "Invalid value" } = options ?? {};

	return z.literal(trueValue, {
		errorMap: (issue, args) => ({
			message: typeof message === "function" ? message(args.data) : message ?? issue.message ?? issue.code,
		}),
	});
}

export {
	//
	zodCheckbox,
};
