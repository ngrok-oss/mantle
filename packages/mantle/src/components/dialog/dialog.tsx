import { X } from "@phosphor-icons/react/X";
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

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

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
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

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
DialogContent.displayName = DialogPrimitive.Content.displayName;

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
			icon={<X />}
			label={label}
			size={size}
			type={type}
			{...props}
		/>
	</DialogPrimitive.Close>
);

const DialogBody = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cx("scrollbar text-body flex-1 overflow-y-auto p-6", className)}
		{...props}
	/>
);
DialogBody.displayName = "DialogBody";

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
DialogTitle.displayName = DialogPrimitive.Title.displayName;

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
DialogDescription.displayName = DialogPrimitive.Description.displayName;

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
