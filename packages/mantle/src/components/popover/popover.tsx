import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../utils/cx";

/**
 * A popover is a floating overlay that appears above other elements on the page.
 * Displays rich content in a portal, triggered by a button.
 * This is the root, stateful component that manages the open/closed state of the popover.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const Popover = PopoverPrimitive.Root;
Popover.displayName = "Popover";

/**
 * The trigger button that opens the popover.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const PopoverTrigger = PopoverPrimitive.Trigger;
PopoverTrigger.displayName = "PopoverTrigger";

/**
 * An optional element to position the PopoverContent against. If this part is not used, the content will position alongside the PopoverTrigger.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const PopoverAnchor = PopoverPrimitive.Anchor;
PopoverAnchor.displayName = "PopoverAnchor";

/**
 * A button that closes an open popover.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const PopoverClose = PopoverPrimitive.Close;
PopoverClose.displayName = "PopoverClose";

/**
 * The content to render inside the popover.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const PopoverContent = forwardRef<
	ElementRef<typeof PopoverPrimitive.Content>,
	ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cx(
				"text-popover-foreground border-popover bg-popover data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95 z-50 w-72 rounded-md border p-4 shadow-md outline-none",
				className,
			)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

export {
	//,
	Popover,
	PopoverAnchor,
	PopoverClose,
	PopoverContent,
	PopoverTrigger,
};
