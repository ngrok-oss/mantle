import { forwardRef, HTMLAttributes } from "react";
import { cx } from "../cx";

/**
 * A component to render inline code.
 */
const InlineCode = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => (
	<code
		ref={ref}
		className={cx(
			"font-mono bg-gray-100 border border-gray-300 dark:border-gray-500 dark:bg-gray-200 text-[0.8em] rounded-md px-1 py-0.5",
			className,
		)}
		{...props}
	/>
));
InlineCode.displayName = "InlineCode";

export { InlineCode };
