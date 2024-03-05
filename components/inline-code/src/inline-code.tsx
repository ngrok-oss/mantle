import { forwardRef, HTMLAttributes } from "react";
import { cx } from "../../core";

/**
 * A component to render inline code.
 */
const InlineCode = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => (
	<code
		ref={ref}
		className={cx("rounded-md border border-gray-a200 bg-gray-a50 px-1 py-0.5 font-mono text-[0.8em]", className)}
		{...props}
	/>
));
InlineCode.displayName = "InlineCode";

export { InlineCode };
