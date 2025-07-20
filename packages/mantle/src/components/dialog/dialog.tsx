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
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.CloseIconButton />
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *     <Dialog.Footer>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </Dialog.Footer>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Root = DialogPrimitive.Root;
Root.displayName = "Dialog";

/**
 * A button that opens the dialog.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-trigger
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Trigger = DialogPrimitive.Trigger;
Trigger.displayName = "DialogTrigger";

const Portal = DialogPrimitive.Portal;
Portal.displayName = "DialogPortal";

const Close = DialogPrimitive.Close;
Close.displayName = "DialogClose";

const Overlay = forwardRef<
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
Overlay.displayName = "DialogOverlay";

type ContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
	/**
	 * The preferred width of the `Dialog.Content` as a tailwind `max-w-` class.
	 *
	 * By default, a `Dialog`'s content width is responsive with a default
	 * preferred width: the maximum width of the `Dialog.Content`
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
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.CloseIconButton />
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *     <Dialog.Footer>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </Dialog.Footer>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Content = forwardRef<ComponentRef<"div">, ContentProps>(
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
		<Portal>
			<Overlay />
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
		</Portal>
	),
);
Content.displayName = "DialogContent";

/**
 * Contains the header content of the dialog, including the title and close button.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-header
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.CloseIconButton />
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Header = ({ className, children, ...props }: ComponentProps<"div">) => (
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
Header.displayName = "DialogHeader";

type CloseIconButtonProps = Partial<Omit<IconButtonProps, "icon">>;

/**
 * An icon button that closes the dialog when clicked.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-close-icon-button
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.CloseIconButton />
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const CloseIconButton = ({
	size = "md",
	type = "button",
	label = "Close Dialog",
	appearance = "ghost",
	...props
}: CloseIconButtonProps) => (
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
CloseIconButton.displayName = "DialogCloseIconButton";

/**
 * Contains the main content of the dialog.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-body
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Body = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cx("scrollbar text-body flex-1 overflow-y-auto p-6", className)}
		{...props}
	/>
);
Body.displayName = "DialogBody";

/**
 * Contains the footer content of the dialog, including action buttons.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-footer
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *     <Dialog.Footer>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </Dialog.Footer>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Footer = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cx(
			"border-dialog-muted flex shrink-0 flex-row-reverse gap-2 border-t px-6 py-4",
			className,
		)}
		{...props}
	/>
);
Footer.displayName = "DialogFooter";

/**
 * An accessible name to be announced when the dialog is opened.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-title
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.CloseIconButton />
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Title = forwardRef<
	ComponentRef<typeof DialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cx("text-strong truncate text-lg font-medium", className)}
		{...props}
	/>
));
Title.displayName = "DialogTitle";

/**
 * An accessible description to be announced when the dialog is opened.
 *
 * @see https://mantle.ngrok.com/components/dialog#api-dialog-description
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.Description>
 *         This is an optional description.
 *       </Dialog.Description>
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Description = forwardRef<
	ComponentRef<"p">,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cx("text-muted", className)}
		{...props}
	/>
));
Description.displayName = "DialogDescription";

/**
 * A window overlaid on either the primary window or another dialog window.
 *
 * @see https://mantle.ngrok.com/components/dialog
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Open Dialog
 *     </Button>
 *   </Dialog.Trigger>
 *   <Dialog.Content>
 *     <Dialog.Header>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.CloseIconButton />
 *     </Dialog.Header>
 *     <Dialog.Body>
 *       <p>This is the dialog content.</p>
 *     </Dialog.Body>
 *     <Dialog.Footer>
 *       <Button type="button" appearance="outlined">
 *         Cancel
 *       </Button>
 *       <Button type="button" appearance="filled">
 *         Save
 *       </Button>
 *     </Dialog.Footer>
 *   </Dialog.Content>
 * </Dialog.Root>
 * ```
 */
const Dialog = {
	/**
	 * A window overlaid on either the primary window or another dialog window.
	 * The root stateful component for the Dialog.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *       <Dialog.CloseIconButton />
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *     <Dialog.Footer>
	 *       <Button type="button" appearance="outlined">
	 *         Cancel
	 *       </Button>
	 *       <Button type="button" appearance="filled">
	 *         Save
	 *       </Button>
	 *     </Dialog.Footer>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Root,
	/**
	 * Contains the main content of the dialog.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-body
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Body,
	/**
	 * A button that closes the dialog when clicked.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-close
	 */
	Close,
	/**
	 * An icon button that closes the dialog when clicked.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-close-icon-button
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *       <Dialog.CloseIconButton />
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	CloseIconButton,
	/**
	 * The container for the dialog content.
	 * Renders on top of the overlay and is centered in the viewport.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-content
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *       <Dialog.CloseIconButton />
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *     <Dialog.Footer>
	 *       <Button type="button" appearance="outlined">
	 *         Cancel
	 *       </Button>
	 *       <Button type="button" appearance="filled">
	 *         Save
	 *       </Button>
	 *     </Dialog.Footer>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Content,
	/**
	 * An accessible description to be announced when the dialog is opened.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-description
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *       <Dialog.Description>
	 *         This is an optional description.
	 *       </Dialog.Description>
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Description,
	/**
	 * Contains the footer content of the dialog, including action buttons.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-footer
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *     <Dialog.Footer>
	 *       <Button type="button" appearance="outlined">
	 *         Cancel
	 *       </Button>
	 *       <Button type="button" appearance="filled">
	 *         Save
	 *       </Button>
	 *     </Dialog.Footer>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Footer,
	/**
	 * Contains the header content of the dialog, including the title and close button.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-header
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *       <Dialog.CloseIconButton />
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Header,
	/**
	 * The overlay backdrop for the dialog.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-overlay
	 */
	Overlay,
	/**
	 * The portal container for the dialog.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-portal
	 */
	Portal,
	/**
	 * An accessible name to be announced when the dialog is opened.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-title
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *       <Dialog.CloseIconButton />
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Title,
	/**
	 * A button that opens the dialog.
	 *
	 * @see https://mantle.ngrok.com/components/dialog#api-dialog-trigger
	 *
	 * @example
	 * ```tsx
	 * <Dialog.Root>
	 *   <Dialog.Trigger asChild>
	 *     <Button type="button" appearance="outlined">
	 *       Open Dialog
	 *     </Button>
	 *   </Dialog.Trigger>
	 *   <Dialog.Content>
	 *     <Dialog.Header>
	 *       <Dialog.Title>Dialog Title</Dialog.Title>
	 *     </Dialog.Header>
	 *     <Dialog.Body>
	 *       <p>This is the dialog content.</p>
	 *     </Dialog.Body>
	 *   </Dialog.Content>
	 * </Dialog.Root>
	 * ```
	 */
	Trigger,
} as const;

export { Dialog };
