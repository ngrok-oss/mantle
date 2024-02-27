import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../core";

/**
 * Visually or semantically separates content.
 */
const Separator = forwardRef<
	ElementRef<typeof SeparatorPrimitive.Root>,
	ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
	<SeparatorPrimitive.Root
		ref={ref}
		aria-orientation={decorative ? undefined : orientation}
		decorative={decorative}
		orientation={orientation}
		className={cx(
			"shrink-0 bg-gray-500/20 dark-high-contrast:bg-black high-contrast:bg-black",
			orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
			className,
		)}
		{...props}
	/>
));
Separator.displayName = "Separator";

export { Separator };
