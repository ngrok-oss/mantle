import { X } from "@phosphor-icons/react/X";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react";
import { IconButton, type IconButtonProps } from "../../button";
import { cx } from "../../cx";

/**
 * The root component for a sheet. Should compose the `SheetTrigger` and `SheetContent`.
 * Acts as a stateful provider for the sheet's open/closed state.
 */
const Sheet = SheetPrimitive.Root;

/**
 * The trigger for a sheet. Should be rendered as a child of the `Sheet` component.
 * Renders an unstyled button by default, but can be customized with the `asChild` prop.
 */
const SheetTrigger = SheetPrimitive.Trigger;

/**
 * The close button for a sheet. Should be rendered as a child of the `SheetContent` component.
 * Renders an unstyled button by default, but can be customized with the `asChild` prop.
 */
const SheetClose = SheetPrimitive.Close;

/**
 * The portal for a sheet. Should be rendered as a child of the `Sheet` component.
 * Renders a portal that the `SheetOverlay` and `SheetContent` is rendered into.
 *
 * You likely don't need to use this component directly, as it is used internally by the `SheetContent` component.
 */
const SheetPortal = SheetPrimitive.Portal;

/**
 * The overlay backdrop for a sheet. Should be rendered as a child of the `SheetPortal` component.
 *
 * You likely don't need to use this component directly, as it is used internally by the `SheetContent` component.
 */
const SheetOverlay = forwardRef<
	ElementRef<typeof SheetPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cx(
			"fixed inset-0 z-40 bg-overlay backdrop-blur-sm data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:animate-in data-state-open:fade-in-0",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetVariants = cva(
	"fixed z-40 flex flex-col bg-dialog shadow-lg outline-none transition ease-in-out focus-within:outline-none data-state-closed:duration-100 data-state-closed:animate-out data-state-open:duration-100 data-state-open:animate-in",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b border-dialog data-state-closed:slide-out-to-top data-state-open:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t border-dialog data-state-closed:slide-out-to-bottom data-state-open:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-full border-r border-dialog data-state-closed:slide-out-to-left data-state-open:slide-in-from-left sm:max-w-[30rem]",
				right:
					"inset-y-0 right-0 h-full w-full border-l border-dialog data-state-closed:slide-out-to-right data-state-open:slide-in-from-right sm:max-w-[30rem]",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

type SheetContentProps = {} & ComponentPropsWithoutRef<typeof SheetPrimitive.Content> &
	VariantProps<typeof SheetVariants>;

/**
 * The main container for a sheet. Renders on top of the overlay backdrop.
 * Should compose the `SheetHeader`, `SheetBody`, and `SheetFooter`.
 */
const SheetContent = forwardRef<ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
	({ side = "right", className, children, ...props }, ref) => (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content ref={ref} className={cx(SheetVariants({ side }), className)} {...props}>
				{children}
			</SheetPrimitive.Content>
		</SheetPortal>
	),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

type SheetCloseIconButtonProps = Partial<Omit<IconButtonProps, "icon">>;

/**
 * An icon button that closes the sheet when clicked. Should be rendered within the `SheetHeader` as a child of `SheetActions`.
 */
const SheetCloseIconButton = ({
	size = "md",
	type = "button",
	label = "Close Sheet",
	appearance = "ghost",
	...props
}: SheetCloseIconButtonProps) => (
	<SheetPrimitive.Close asChild>
		<IconButton appearance={appearance} icon={<X />} label={label} size={size} type={type} {...props} />
	</SheetPrimitive.Close>
);

/**
 * The body container for a sheet. This is where you would typically place the main content of the sheet.
 * Should be rendered as a child of `SheetContent`.
 */
const SheetBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cx("scrollbar flex-1 overflow-y-auto p-6 text-body", className)} {...props} />
);

/**
 * The header container for a sheet. This is where you would typically place the title, description, and actions.
 * Should be rendered as a child of `SheetContent`.
 */
const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			"flex shrink-0 flex-col gap-2 border-b border-dialog-muted py-4 pl-6 pr-4",
			"has-[.icon-button]:pr-4", // when there are actions in the header, shorten the padding
			className,
		)}
		{...props}
	/>
);

/**
 * The footer container for a sheet. This is where you would typically place close and submit buttons.
 * Should be rendered as a child of `SheetContent`.
 */
const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx("flex shrink-0 justify-end gap-2 border-t border-dialog-muted px-6 py-2.5", className)}
		{...props}
	/>
);

/**
 * The title for a sheet. Typically rendered as a child of `SheetTitleGroup`.
 * Defaults to an `h2` element, but can be changed via the `asChild` prop.
 */
const SheetTitle = forwardRef<
	ElementRef<typeof SheetPrimitive.Title>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cx("flex-1 truncate text-lg font-medium text-strong", className)}
		{...props}
	/>
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * A group container for the title and actions of a sheet. Typically rendered as a child of `SheetHeader`.
 */
const SheetTitleGroup = forwardRef<ElementRef<"div">, HTMLAttributes<HTMLDivElement>>(
	({ children, className, ...props }, ref) => (
		<div className={cx("flex items-center justify-between gap-2", className)} {...props} ref={ref}>
			{children}
		</div>
	),
);
SheetTitleGroup.displayName = "SheetTitleGroup";

/**
 * A description for a sheet. Typically rendered as a child of `SheetHeader`.
 */
const SheetDescription = forwardRef<
	ElementRef<typeof SheetPrimitive.Description>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description ref={ref} className={cx("text-sm text-body", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

/**
 * A group container for the actions of a sheet. Typically rendered as a child of `SheetTitleGroup`.
 */
const SheetActions = forwardRef<ElementRef<"div">, HTMLAttributes<HTMLDivElement>>(
	({ children, className, ...props }, ref) => (
		<div className={cx("flex h-full items-center gap-2", className)} {...props} ref={ref}>
			{children}
		</div>
	),
);
SheetActions.displayName = "SheetActions";

export {
	Sheet,
	SheetActions,
	SheetBody,
	SheetClose,
	SheetCloseIconButton,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTitleGroup,
	SheetTrigger,
};
