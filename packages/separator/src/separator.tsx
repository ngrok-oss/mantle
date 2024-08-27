import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import { createContext, forwardRef, useContext } from "react";
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react";
import { cx } from "../../cx";
import type { WithAsChild } from "../../types/src/as-child";

type Orientation = "horizontal" | "vertical";

type SeparatorGroupContextShape = {
	orientation?: Orientation;
};

const SeparatorGroupContext = createContext<SeparatorGroupContextShape>({});

/**
 * A container to layout a group of horizontal separators.
 */
const HorizontalSeparatorGroup = ({
	className,
	children,
	asChild,
	...props
}: HTMLAttributes<HTMLDivElement> & WithAsChild) => {
	const Comp = asChild ? Slot : "div";

	return (
		<SeparatorGroupContext.Provider value={{ orientation: "horizontal" }}>
			<Comp
				data-horizontal-separator-group
				className={cx("group flex items-center gap-2 [&_*:not([data-separator])]:shrink-0", className)}
				{...props}
			>
				{children}
			</Comp>
		</SeparatorGroupContext.Provider>
	);
};

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

/**
 * Visually or semantically separates content.
 */
const Separator = forwardRef<ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
	({ className, orientation: propOrientation, decorative = true, ...props }, ref) => {
		const ctx = useContext(SeparatorGroupContext);
		// Prefer the orientation from the context if it's set, else fallback to the prop and then to "horizontal".
		const orientation = ctx.orientation ?? propOrientation ?? "horizontal";

		return (
			<SeparatorPrimitive.Root
				ref={ref}
				data-separator
				aria-orientation={decorative ? undefined : orientation}
				decorative={decorative}
				orientation={orientation}
				className={cx(
					"bg-gray-500/20 dark-high-contrast:bg-black high-contrast:bg-black dark:bg-gray-600/20",
					orientation === "horizontal" ? "h-px w-full group-data-[horizontal-separator-group]:flex-1" : "h-full w-px",
					className,
				)}
				{...props}
			/>
		);
	},
);
Separator.displayName = "Separator";

export { HorizontalSeparatorGroup, Separator };
