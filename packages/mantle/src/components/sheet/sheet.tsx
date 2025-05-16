import { X as XIcon } from "@phosphor-icons/react/X";
import { type VariantProps, cva } from "class-variance-authority";
import type {
	ComponentPropsWithoutRef,
	ComponentRef,
	HTMLAttributes,
} from "react";
import { forwardRef } from "react";
import { cx } from "../../utils/cx/cx.js";
import { IconButton, type IconButtonProps } from "../button/icon-button.js";
import * as SheetPrimitive from "../dialog/primitive.js";
import { preventCloseOnPromptInteraction } from "../toast/toast.js";

/**
 * The root component for a `Sheet`. Should compose the `SheetTrigger` and `SheetContent`.
 * Acts as a stateful provider for the Sheet's open/closed state.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet
 *
 * @example
 * ```tsx
 * // Triggering a stateful sheet
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button type="button" appearance="filled">
 *       Open Sheet
 *     </Button>
 *   </SheetTrigger>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const Sheet = SheetPrimitive.Root;

/**
 * The button trigger for a `Sheet`. Should be rendered as a child of the `Sheet` component.
 * Renders an unstyled button by default, but can be customized with the `asChild` prop.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-trigger
 *
 * @example
 * ```tsx
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button type="button" appearance="filled">
 *       Open Sheet
 *     </Button>
 *   </SheetTrigger>
 *   <SheetContent>
 *     <p>
 *       Consequat do voluptate culpa fugiat consequat nostrud duis
 *       aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *       aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *       proident amet.
 *     </p>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetTrigger = SheetPrimitive.Trigger;

/**
 * The close button for a `Sheet`. Should be rendered as a child of the `SheetContent` component.
 * Usually contained within the `SheetFooter` component.
 * Renders an unstyled button by default, but can be customized with the `asChild` prop.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-close
 *
 * @example
 * ```tsx
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button type="button" appearance="filled">
 *       Open Sheet
 *     </Button>
 *   </SheetTrigger>
 *   <SheetContent>
 *     <p>
 *       Consequat do voluptate culpa fugiat consequat nostrud duis
 *       aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *       aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *       proident amet.
 *     </p>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetClose = SheetPrimitive.Close;

/**
 * The portal for a sheet. Should be rendered as a child of the `Sheet` component.
 * Renders a portal that the `SheetOverlay` and `SheetContent` is rendered into.
 *
 * @private
 */
const SheetPortal = SheetPrimitive.Portal;

/**
 * The overlay backdrop for a sheet. Should be rendered as a child of the `SheetPortal` component.
 *
 * You likely don't need to use this component directly, as it is used internally by the `SheetContent` component.
 *
 * @private
 */
const SheetOverlay = forwardRef<
	ComponentRef<typeof SheetPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cx(
			"bg-overlay data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:animate-in data-state-open:fade-in-0 fixed inset-0 z-40 backdrop-blur-sm",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetVariants = cva(
	"bg-dialog border-dialog inset-y-0 h-full w-full fixed z-40 flex flex-col shadow-lg outline-none transition ease-in-out focus-within:outline-none data-state-closed:duration-100 data-state-closed:animate-out data-state-open:duration-100 data-state-open:animate-in",
	{
		variants: {
			/**
			 * The side of the screen the sheet should slide in from.
			 */
			side: {
				left: "data-state-closed:slide-out-to-left data-state-open:slide-in-from-left left-0 border-r",
				right:
					"data-state-closed:slide-out-to-right data-state-open:slide-in-from-right right-0 border-l",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

type SheetContentProps = ComponentPropsWithoutRef<
	typeof SheetPrimitive.Content
> &
	VariantProps<typeof SheetVariants> & {
		/**
		 * The preferred width of the `SheetContent` as a tailwind `max-w-` class.
		 *
		 * By default, a `Sheet`'s content width is responsive with a default
		 * preferred width: the maximum width of the `SheetContent` when the window
		 * viewport is larger than the mobile breakpoint (`sm`).
		 *
		 * @default `sm:max-w-[30rem]`
		 */
		preferredWidth?: `sm:max-w-${string}`;
	};

/**
 * The main container for a `Sheet`. Should be rendered as a child of the `Sheet` component.
 * Renders on top of the overlay backdrop.
 * Should contain the `SheetHeader`, `SheetBody`, and `SheetFooter`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-content
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetContent = forwardRef<ComponentRef<"div">, SheetContentProps>(
	(
		{
			children,
			className,
			onInteractOutside,
			onPointerDownOutside,
			preferredWidth = "sm:max-w-[30rem]",
			side = "right",
			...props
		},
		ref,
	) => (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				className={cx(SheetVariants({ side }), preferredWidth, className)}
				onInteractOutside={(event) => {
					preventCloseOnPromptInteraction(event);
					onInteractOutside?.(event);
				}}
				onPointerDownOutside={(event) => {
					preventCloseOnPromptInteraction(event);
					onPointerDownOutside?.(event);
				}}
				ref={ref}
				{...props}
			>
				{children}
			</SheetPrimitive.Content>
		</SheetPortal>
	),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

type SheetCloseIconButtonProps = Partial<Omit<IconButtonProps, "icon">>;

/**
 * An icon button that closes the `Sheet` when clicked.
 * Should be rendered within the `SheetHeader` as a child of `SheetActions`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-close-icon-button
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetCloseIconButton = ({
	size = "md",
	type = "button",
	label = "Close Sheet",
	appearance = "ghost",
	...props
}: SheetCloseIconButtonProps) => (
	<SheetPrimitive.Close asChild>
		<IconButton
			appearance={appearance}
			icon={<XIcon />}
			label={label}
			size={size}
			type={type}
			{...props}
		/>
	</SheetPrimitive.Close>
);

/**
 * The body container for a `Sheet`. This is where you would typically place the main content of the sheet, such as forms or text.
 * Should be rendered as a child of `SheetContent`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-body
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx("scrollbar text-body flex-1 overflow-y-auto p-6", className)}
		{...props}
	/>
);

/**
 * The header container for a `Sheet`. This is where you would typically place the title, description, and actions.
 * Should be rendered as a child of `SheetContent`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-header
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			"border-dialog-muted flex shrink-0 flex-col gap-2 border-b py-4 pl-6 pr-4",
			"has-[.icon-button]:pr-4", // when there are actions in the header, shorten the padding
			className,
		)}
		{...props}
	/>
);

/**
 * The footer container for a `Sheet`. This is where you would typically place close and submit buttons.
 * Should be rendered as a child of `SheetContent`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-footer
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			"border-dialog-muted flex shrink-0 justify-end gap-2 border-t px-6 py-2.5",
			className,
		)}
		{...props}
	/>
);

/**
 * The title for a `Sheet`. Typically rendered as a child of `SheetTitleGroup`.
 * Defaults to an `h2` element, but can be changed via the `asChild` prop.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-title
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetTitle = forwardRef<
	ComponentRef<typeof SheetPrimitive.Title>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cx("text-strong flex-1 truncate text-lg font-medium", className)}
		{...props}
	/>
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * A group container for the title and actions of a sheet. Typically rendered as a child of `SheetHeader`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-title-group
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetTitleGroup = forwardRef<
	ComponentRef<"div">,
	HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
	<div
		className={cx("flex items-center justify-between gap-2", className)}
		{...props}
		ref={ref}
	>
		{children}
	</div>
));
SheetTitleGroup.displayName = "SheetTitleGroup";

/**
 * A description for a sheet. Typically rendered as a child of `SheetHeader`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-description
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetDescription = forwardRef<
	ComponentRef<typeof SheetPrimitive.Description>,
	ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cx("text-body text-sm", className)}
		{...props}
	/>
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

/**
 * A group container for the actions of a `Sheet`. Typically rendered as a child of `SheetTitleGroup`.
 *
 * @see https://mantle.ngrok.com/components/sheet#api-sheet-actions
 *
 * @example
 * ```tsx
 * // Sheet without a trigger (e.g. router controlled)
 * <Sheet open opOpenChange={() => onClose()}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitleGroup>
 *         <SheetTitle>Are you absolutely sure?</SheetTitle>
 *         <SheetActions>
 *           <IconButton
 *             appearance="ghost"
 *             type="button"
 *             icon={<TrashSimple />}
 *             label="Delete"
 *           />
 *           <Separator orientation="vertical" className="h-[80%]" />
 *           <SheetCloseIconButton />
 *         </SheetActions>
 *       </SheetTitleGroup>
 *       <SheetDescription>
 *         This action cannot be undone. This will permanently delete your account and remove your data from our servers.
 *       </SheetDescription>
 *     </SheetHeader>
 *     <SheetBody>
 *       <p>
 *         Consequat do voluptate culpa fugiat consequat nostrud duis
 *         aliqua minim. Tempor voluptate cillum elit velit. Voluptate
 *         aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
 *         proident amet.
 *       </p>
 *     </SheetBody>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button type="button">Close</Button>
 *       </SheetClose>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */
const SheetActions = forwardRef<
	ComponentRef<"div">,
	HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
	<div
		className={cx("flex h-full items-center gap-2", className)}
		{...props}
		ref={ref}
	>
		{children}
	</div>
));
SheetActions.displayName = "SheetActions";

export {
	//,
	Sheet,
	SheetActions,
	SheetBody,
	SheetClose,
	SheetCloseIconButton,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTitleGroup,
	SheetTrigger,
};
