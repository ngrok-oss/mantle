import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { cx } from "../../utils/cx/cx.js";

/**
 * A floating overlay that displays rich content in a portal, triggered by a button.
 * This is the root, stateful component that manages the open/closed state of the popover.
 *
 * @see https://mantle.ngrok.com/components/popover#api-popover
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Popover
 *     </Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>This is the popover content.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
const Popover = PopoverPrimitive.Root;
Popover.displayName = "Popover";

/**
 * The trigger button that opens the popover.
 *
 * @see https://mantle.ngrok.com/components/popover#api-popover-trigger
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Popover
 *     </Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>This is the popover content.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
const PopoverTrigger = PopoverPrimitive.Trigger;
PopoverTrigger.displayName = "PopoverTrigger";

/**
 * An optional element to position the PopoverContent against. If this part is not used, the content will position alongside the PopoverTrigger.
 *
 * @see https://mantle.ngrok.com/components/popover#api-popover-anchor
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Popover
 *     </Button>
 *   </PopoverTrigger>
 *   <PopoverAnchor asChild>
 *     <div>Anchor element</div>
 *   </PopoverAnchor>
 *   <PopoverContent>
 *     <p>This is the popover content.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
const PopoverAnchor = PopoverPrimitive.Anchor;
PopoverAnchor.displayName = "PopoverAnchor";

/**
 * A button that closes an open popover.
 *
 * @see https://mantle.ngrok.com/components/popover#api-popover-close
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Popover
 *     </Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>This is the popover content.</p>
 *     <PopoverClose asChild>
 *       <Button type="button">Close</Button>
 *     </PopoverClose>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
const PopoverClose = PopoverPrimitive.Close;
PopoverClose.displayName = "PopoverClose";

type PopoverContentProps = ComponentPropsWithoutRef<
	typeof PopoverPrimitive.Content
> & {
	/**
	 * The preferred width of the `PopoverContent` as a tailwind `max-w-` class.
	 *
	 * By default, a `Popover`'s content width is responsive with a default
	 * preferred width: the maximum width of the `PopoverContent`
	 *
	 * @default `max-w-72`
	 */
	preferredWidth?: `max-w-${string}`;
};

/**
 * The content to render inside the popover.
 *
 * @see https://mantle.ngrok.com/components/popover#api-popover-content
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Popover
 *     </Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>This is the popover content.</p>
 *   </PopoverContent>
 * </Popover>
 * ```
 */
const PopoverContent = forwardRef<ComponentRef<"div">, PopoverContentProps>(
	(
		{
			//,
			align = "center",
			className,
			onClick,
			preferredWidth = "max-w-72",
			sideOffset = 4,
			...props
		},
		ref,
	) => (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align={align}
				className={cx(
					"text-popover-foreground border-popover bg-popover data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95 z-50 rounded-md border p-4 shadow-md outline-none",
					preferredWidth,
					className,
				)}
				onClick={(event) => {
					/**
					 * Prevent the click event from propagating up to parent/containing elements
					 * of the PopoverContent
					 */
					event.stopPropagation();
					onClick?.(event);
				}}
				ref={ref}
				sideOffset={sideOffset}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	),
);
PopoverContent.displayName = "PopoverContent";

export {
	//,
	Popover,
	PopoverAnchor,
	PopoverClose,
	PopoverContent,
	PopoverTrigger,
};
