import { Content, Provider, Root, Trigger } from "@radix-ui/react-tooltip";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { cx } from "../../utils/cx/cx.js";

/**
 * Wraps your app to provide global functionality to your tooltips.
 * Only one instance of this component should be rendered in your app, preferably at the root.
 *
 * @see https://mantle.ngrok.com/components/tooltip#api-tooltip-provider
 *
 * @example
 * ```tsx
 * <TooltipProvider>
 *   <App />
 * </TooltipProvider>
 * ```
 */
const TooltipProvider = ({
	delayDuration = 0,
	...props
}: ComponentPropsWithoutRef<typeof Provider>) => (
	<Provider delayDuration={delayDuration ?? 0} {...props} />
);
TooltipProvider.displayName = "TooltipProvider";

/**
 * A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * This is the root, stateful component that manages the open/closed state of the tooltip.
 * Will throw if you have not wrapped your app in a `TooltipProvider`.
 *
 * @see https://mantle.ngrok.com/components/tooltip#api-tooltip
 *
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Hover me
 *     </Button>
 *   </Tooltip.Trigger>
 *   <Tooltip.Content>
 *     This is a tooltip
 *   </Tooltip.Content>
 * </Tooltip.Root>
 * ```
 */
const TooltipRoot = Root;
TooltipRoot.displayName = "Tooltip";

/**
 * The trigger button that opens the tooltip.
 *
 * @see https://mantle.ngrok.com/components/tooltip#api-tooltip-trigger
 *
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Hover me
 *     </Button>
 *   </Tooltip.Trigger>
 *   <Tooltip.Content>
 *     This is a tooltip
 *   </Tooltip.Content>
 * </Tooltip.Root>
 * ```
 */
const TooltipTrigger = Trigger;
TooltipTrigger.displayName = "TooltipTrigger";

/**
 * The content to render inside the tooltip.
 *
 * @see https://mantle.ngrok.com/components/tooltip#api-tooltip-content
 *
 * @example
 * ```tsx
 * <Tooltip.Root>
 *   <Tooltip.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Hover me
 *     </Button>
 *   </Tooltip.Trigger>
 *   <Tooltip.Content>
 *     This is a tooltip
 *   </Tooltip.Content>
 * </Tooltip.Root>
 * ```
 */
const TooltipContent = forwardRef<
	ComponentRef<typeof Content>,
	ComponentPropsWithoutRef<typeof Content>
>(({ children, className, sideOffset = 4, ...props }, ref) => (
	<Content
		ref={ref}
		sideOffset={sideOffset}
		className={cx(
			"bg-tooltip text-tooltip animate-in fade-in-0 zoom-in-95 data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 z-50 max-w-72 overflow-hidden break-words rounded-md px-3 py-1.5 text-sm shadow font-sans",
			className,
		)}
		{...props}
	>
		{children}
	</Content>
));
TooltipContent.displayName = "TooltipContent";

const Tooltip = {
	Root: TooltipRoot,
	Content: TooltipContent,
	Trigger: TooltipTrigger,
} as const;

export {
	//,
	Tooltip,
	TooltipProvider,
};
