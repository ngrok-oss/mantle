import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../utils/cx/cx.js";

/**
 * A component to render inline code with syntax highlighting and styling.
 *
 * @see https://mantle.ngrok.com/components/inline-code#api-inline-code
 *
 * @example
 * ```tsx
 * <p>
 *   Use the <InlineCode>console.log()</InlineCode> function to debug your code.
 * </p>
 * ```
 */
const InlineCode = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
	({ className, ...props }, ref) => (
		<code
			ref={ref}
			className={cx(
				"border-card rounded-md border bg-gray-500/5 px-1 py-0.5 font-mono text-[0.8em]",
				className,
			)}
			{...props}
		/>
	),
);
InlineCode.displayName = "InlineCode";

export { InlineCode };
