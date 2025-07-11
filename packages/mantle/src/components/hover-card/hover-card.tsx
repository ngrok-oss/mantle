"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import { cx } from "../../utils/cx/cx.js";

const Root = ({
	closeDelay = 300,
	openDelay = 100,
	...props
}: ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>) => (
	<HoverCardPrimitive.Root
		closeDelay={closeDelay}
		openDelay={openDelay}
		{...props}
	/>
);
Root.displayName = "HoverCard";

const Trigger = HoverCardPrimitive.Trigger;

/**
 * The portal for a HoverCard. Should be rendered as a child of the `HoverCard` component.
 * Renders a portal that the `HoverCardContent` is rendered into.
 *
 * You likely don't need to use this component directly, as it is used internally by the `HoverCardContent` component.
 */
const Portal = HoverCardPrimitive.Portal;

const Content = forwardRef<
	ComponentRef<typeof HoverCardPrimitive.Content>,
	ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, onClick, align = "center", sideOffset = 4, ...props }, ref) => (
	<Portal>
		<HoverCardPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cx(
				"bg-popover border-popover z-50 w-64 rounded-md border p-4 shadow-md outline-none",
				"data-state-open:animate-in data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:fade-in-0 data-state-closed:zoom-out-95 data-state-open:zoom-in-95 data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2",
				className,
			)}
			onClick={(event) => {
				/**
				 * Prevent the click event from propagating up to parent/containing elements
				 */
				event.stopPropagation();
				onClick?.(event);
			}}
			{...props}
		/>
	</Portal>
));
Content.displayName = HoverCardPrimitive.Content.displayName;

const HoverCard = createNamespacedComponent(
	Root,
	{
		Content,
		Portal,
		Trigger,
	},
	"HoverCard",
);

export {
	//,
	HoverCard,
};
