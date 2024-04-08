import { forwardRef, HTMLAttributes } from "react";
import { cx } from "../../cx";

/**
 * A component to render inline code.
 */
const InlineCode = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => (
	<code
		ref={ref}
		className={cx("rounded-md border border-card bg-gray-500/5 px-1 py-0.5 font-mono text-[0.8em]", className)}
		{...props}
	/>
));
InlineCode.displayName = "InlineCode";

export { InlineCode };
