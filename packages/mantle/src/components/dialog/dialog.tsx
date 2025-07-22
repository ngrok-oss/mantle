import { XIcon } from "@phosphor-icons/react/X";
import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	ComponentRef,
} from "react";
import { forwardRef } from "react";
import { cx } from "../../utils/cx/cx.js";
import { IconButton, type IconButtonProps } from "../button/icon-button.js";
import { preventCloseOnPromptInteraction } from "../toast/toast.js";
import * as DialogPrimitive from "./primitive.js";

/**
 * A window overlaid on either the primary window or another dialog window.
 * The root stateful component for the Dialog.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogCloseIconButton />
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *     <DialogFooter>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const Dialog = DialogPrimitive.Root;
Dialog.displayName = "Dialog";

/**
 * A button that opens the dialog.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-trigger
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogTrigger = DialogPrimitive.Trigger;
DialogTrigger.displayName = "DialogTrigger";

const DialogPortal = DialogPrimitive.Portal;
DialogPortal.displayName = "DialogPortal";

const DialogClose = DialogPrimitive.Close;
DialogClose.displayName = "DialogClose";

const DialogOverlay = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cx(
			"bg-overlay data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:animate-in data-state-open:fade-in-0 fixed inset-0 z-50 backdrop-blur-sm",
			className,
		)}
		{...props}
	/>
));
DialogOverlay.displayName = "DialogOverlay";

type DialogContentProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Content
> & {
	/**
	 * The preferred width of the `DialogContent` as a tailwind `max-w-` class.
	 *
	 * By default, a `Dialog`'s content width is responsive with a default
	 * preferred width: the maximum width of the `DialogContent`
	 *
	 * @default `max-w-lg`
	 */
	preferredWidth?: `max-w-${string}`;
};

/**
 * The container for the dialog content.
 * Renders on top of the overlay and is centered in the viewport.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-content
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogCloseIconButton />
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *     <DialogFooter>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogContent = forwardRef<ComponentRef<"div">, DialogContentProps>(
	(
		{
			children,
			className,
			onInteractOutside,
			onPointerDownOutside,
			preferredWidth = "max-w-lg",
			...props
		},
		ref,
	) => (
		<DialogPortal>
			<DialogOverlay />
			<div className="fixed inset-4 z-50 flex items-center justify-center">
				<DialogPrimitive.Content
					className={cx(
						"flex max-h-full w-full flex-1 flex-col",
						"outline-none focus-within:outline-none",
						"border-dialog bg-dialog rounded-xl border shadow-lg transition-transform duration-200",
						"data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
						preferredWidth,
						className,
					)}
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
				</DialogPrimitive.Content>
			</div>
		</DialogPortal>
	),
);
DialogContent.displayName = "DialogContent";

/**
 * Contains the header content of the dialog, including the title and close button.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-header
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogCloseIconButton />
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogHeader = ({
	className,
	children,
	...props
}: ComponentProps<"div">) => (
	<div
		className={cx(
			"border-dialog-muted text-strong relative flex shrink-0 items-center justify-between gap-2 border-b px-6 py-4",
			"has-[.icon-button]:pr-4", // when there are actions in the header, shorten the padding
			className,
		)}
		{...props}
	>
		{children}
	</div>
);
DialogHeader.displayName = "DialogHeader";

type DialogCloseIconButtonProps = Partial<Omit<IconButtonProps, "icon">>;

/**
 * An icon button that closes the dialog when clicked.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-close-icon-button
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogCloseIconButton />
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogCloseIconButton = ({
	size = "md",
	type = "button",
	label = "Close Dialog",
	appearance = "ghost",
	...props
}: DialogCloseIconButtonProps) => (
	<DialogPrimitive.Close asChild>
		<IconButton
			appearance={appearance}
			icon={<XIcon />}
			label={label}
			size={size}
			type={type}
			{...props}
		/>
	</DialogPrimitive.Close>
);
DialogCloseIconButton.displayName = "DialogCloseIconButton";

/**
 * Contains the main content of the dialog.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-body
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogBody = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cx("scrollbar text-body flex-1 overflow-y-auto p-6", className)}
		{...props}
	/>
);
DialogBody.displayName = "DialogBody";

/**
 * Contains the footer content of the dialog, including action buttons.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-footer
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *     <DialogFooter>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogFooter = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cx(
			"border-dialog-muted flex shrink-0 flex-row-reverse gap-2 border-t px-6 py-4",
			className,
		)}
		{...props}
	/>
);
DialogFooter.displayName = "DialogFooter";

/**
 * An accessible name to be announced when the dialog is opened.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-title
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogCloseIconButton />
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogTitle = forwardRef<
	ComponentRef<typeof DialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cx("text-strong truncate text-lg font-medium", className)}
		{...props}
	/>
));
DialogTitle.displayName = "DialogTitle";

/**
 * An accessible description to be announced when the dialog is opened.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-description
 *
 * @example
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogDescription>
 *         This is an optional description.
 *       </DialogDescription>
 *     </DialogHeader>
 *     <DialogBody>
 *       <p>This is the dialog content.</p>
 *     </DialogBody>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
const DialogDescription = forwardRef<
	ComponentRef<"p">,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cx("text-muted", className)}
		{...props}
	/>
));
DialogDescription.displayName = "DialogDescription";

export {
	Dialog,
	DialogBody,
	DialogClose,
	DialogCloseIconButton,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
