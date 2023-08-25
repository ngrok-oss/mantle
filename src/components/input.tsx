import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cx } from "../lib/cx";
import type { VariantProps } from "../types/variant-props";
import type { AutoComplete, InputType } from "../types/input";

const inputVariants = cva(
	"flex h-10 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:border-brand-primary-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary-500/25 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			state: {
				default: "",
				danger:
					"text-red-500 border-red-500 focus:border-red-500 focus-visible:ring-red-500/25 placeholder:text-red-400",
				success: "text-success-500 border-success-500 focus:border-success-500 focus-visible:ring-success-500/25",
			},
		},
		defaultVariants: {
			state: "default",
		},
	},
);

type InputVariants = VariantProps<typeof inputVariants>;

/**
 * The props for the `Input` component.
 */
export type InputProps = InputVariants &
	Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> & {
		autoComplete?: AutoComplete;
		type?: InputType;
	};

/**
 * Used to create interactive controls for web-based forms in order to accept data from the user
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, state = "default", type = "text", ...props }, ref) => {
		return <input className={cx(inputVariants({ state }), className)} ref={ref} type={type} {...props} />;
	},
);
Input.displayName = "Input";

export { Input };
