import { cva } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cx } from "../cx";
import type { VariantProps } from "../types/variant-props";
import type { AutoComplete, InputType } from "./types";

const inputVariants = cva(
	"flex h-11 sm:h-9 w-full rounded-md border bg-white dark:bg-gray-50 px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm disabled:bg-gray-100",
	{
		variants: {
			state: {
				default:
					"text-gray-900 border-gray-300 hover:border-gray-400 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-500/25",
				danger: "border-red-600 focus:border-red-600 focus:ring-red-500/25",
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
