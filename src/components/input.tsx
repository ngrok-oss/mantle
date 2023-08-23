import * as React from "react";
import { cx } from "../lib/cx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cx(
				"flex h-10 w-full rounded-md border border-neutral-400 bg-white px-3 py-2 text-neutral-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:border-brand-primary-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary-500/25 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
