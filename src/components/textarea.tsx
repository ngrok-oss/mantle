import * as React from "react";

import { cx } from "../lib/cx";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cx(
				"flex min-h-[8rem] w-full rounded-md border border-gray-500 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-300 focus:border-brand-primary-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary-600/25 disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
