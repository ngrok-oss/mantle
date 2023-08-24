import * as React from "react";
import { cva } from "class-variance-authority";

import { cx } from "../lib/cx";
import type { VariantProps } from "../types/variant-props";

const inputVariants = cva(
	"flex h-10 w-full rounded-md border border-neutral-400 bg-white px-3 py-2 text-neutral-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:border-brand-primary-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary-500/25 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			state: {
				default: "",
				danger: "text-danger-500 border-danger-500 focus:border-danger-500 focus-visible:ring-danger-500/25",
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
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariants;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, state = "default", ...props }, ref) => {
		return <input type={type} className={cx(inputVariants({ state }), className)} ref={ref} {...props} />;
	},
);
Input.displayName = "Input";

export { Input };
