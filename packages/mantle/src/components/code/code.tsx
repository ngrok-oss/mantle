import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../utils/cx/cx.js";

/**
 * Marks text to signify a short fragment of inline computer code.
 *
 * @see https://mantle.ngrok.com/components/code
 *
 * @example
 * ```tsx
 * <p>
 *   Use the <Code>console.log()</Code> function to debug your code.
 * </p>
 * ```
 */
const Code = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
	({ className, ...props }, ref) => (
		<code
			ref={ref}
			className={cx(
				"border-gray-500/15 rounded-md border bg-gray-500/5 px-1 font-mono text-[0.8em]",
				className,
			)}
			{...props}
		/>
	),
);
Code.displayName = "Code";

export {
	//,
	Code,
};
