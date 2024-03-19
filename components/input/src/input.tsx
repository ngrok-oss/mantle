import { cva } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cx } from "../../core";
import type { VariantProps } from "../../types/src/variant-props";
import type { AutoComplete, InputType } from "./types";

export const inputVariants = cva(
	"flex h-11 w-full rounded-md border bg-form px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 sm:h-9 sm:text-sm",
	{
		variants: {
			/**
			 * Whether or not the input has a validation error.
			 */
			invalid: {
				false: "border-form text-strong placeholder:text-placeholder focus:border-accent-600 focus:ring-focus-accent",
				true: "border-danger-600 placeholder:text-placeholder focus:border-danger-600 focus:ring-focus-danger",
			},
		},
		defaultVariants: {
			invalid: false,
		},
	},
);

export type InputVariants = VariantProps<typeof inputVariants>;

/**
 * The props for the `Input` component.
 */
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> &
	InputVariants & {
		autoComplete?: AutoComplete;
		type?: InputType;
	};

/**
 * Used to create interactive controls for web-based forms in order to accept data from the user
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
	({ "aria-invalid": _ariaInvalid, className, invalid, type = "text", ...props }, ref) => {
		const ariaInvalid = _ariaInvalid ?? invalid;

		return (
			<input
				aria-invalid={ariaInvalid}
				className={cx(inputVariants({ invalid }), className)}
				ref={ref}
				type={type}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
