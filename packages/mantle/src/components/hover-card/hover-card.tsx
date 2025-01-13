"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../utils/cx/cx.js";

const HoverCard = ({
	closeDelay = 300,
	openDelay = 100,
	...props
}: ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>) => (
	<HoverCardPrimitive.Root closeDelay={closeDelay} openDelay={openDelay} {...props} />
);
HoverCard.displayName = "HoverCard";

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef<
	ElementRef<typeof HoverCardPrimitive.Content>,
	ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
	<HoverCardPrimitive.Content
		ref={ref}
		align={align}
		sideOffset={sideOffset}
		className={cx(
			"bg-popover border-popover z-50 w-64 rounded-md border p-4 shadow-md outline-none",
			"data-state-open:animate-in data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:fade-in-0 data-state-closed:zoom-out-95 data-state-open:zoom-in-95 data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2",
			className,
		)}
		{...props}
	/>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export {
	//,
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
};
