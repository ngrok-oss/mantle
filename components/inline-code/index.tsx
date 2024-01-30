import { forwardRef, HTMLAttributes } from "react";
import { cx } from "../cx";

/**
 * A component to render inline code.
 */
const InlineCode = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => (
	<code
		ref={ref}
		className={cx(
			"rounded-md border border-gray-300 bg-gray-100 px-1 py-0.5 font-mono text-[0.8em] dark:border-gray-500 dark:bg-gray-200",
			className,
		)}
		{...props}
	/>
));
InlineCode.displayName = "InlineCode";

export { InlineCode };
