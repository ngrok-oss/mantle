import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cx } from "../cx";
import type { VariantProps } from "../types/variant-props";
import type { AutoComplete, InputType } from "../types/input";

const inputVariants = cva(
	"flex h-10 w-full rounded-md border bg-white px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			state: {
				default:
					"text-gray-900 border-gray-500 placeholder:text-gray-400 focus:border-blue-500 focus-visible:ring-blue-600/25",
				danger:
					"text-red-900 border-red-500 placeholder:text-red-400 focus:border-red-500 focus-visible:ring-red-600/25",
				success:
					"text-green-900 border-green-500 placeholder:text-green-400 focus:border-green-500 focus-visible:ring-green-600/25",
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
