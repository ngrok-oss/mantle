import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import { cx } from "../../utils/cx/cx.js";

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
const Root = PopoverPrimitive.Root;

/**
 * The trigger button that opens the popover.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const Trigger = PopoverPrimitive.Trigger;

/**
 * An optional element to position the PopoverContent against. If this part is not used, the content will position alongside the PopoverTrigger.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const Anchor = PopoverPrimitive.Anchor;

/**
 * A button that closes an open popover.
 *
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const Close = PopoverPrimitive.Close;

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
 * @preview This component is in `preview` mode which means the API is not stable and may change.
 * There may also be bugs! Please file an issue if you find any! <3
 *
 * https://github.com/ngrok-oss/mantle/issues
 */
const Content = forwardRef<ComponentRef<"div">, PopoverContentProps>(
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
Content.displayName = "PopoverContent";

const Popover = createNamespacedComponent(
	Root,
	{
		Anchor,
		Close,
		Content,
		Trigger,
	},
	"Popover",
);

export {
	//,
	Popover,
};
