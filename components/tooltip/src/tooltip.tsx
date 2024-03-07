import { Content, Provider, Root, Trigger } from "@radix-ui/react-tooltip";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cx } from "../../core";

/**
 * Wraps your app to provide global functionality to your tooltips.
 */
const TooltipProvider = ({ delayDuration = 0, ...props }: ComponentPropsWithoutRef<typeof Provider>) => (
	<Provider delayDuration={delayDuration ?? 0} {...props} />
);

const Tooltip = Root;

const TooltipTrigger = Trigger;

const TooltipContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
	({ children, className, sideOffset = 4, ...props }, ref) => (
		<Content
			ref={ref}
			sideOffset={sideOffset}
			className={cx(
				"z-50 overflow-hidden rounded-md bg-tooltip px-3 py-1.5 text-sm text-tooltip shadow animate-in fade-in-0 zoom-in-95 data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95",
				className,
			)}
			{...props}
		>
			{children}
		</Content>
	),
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
