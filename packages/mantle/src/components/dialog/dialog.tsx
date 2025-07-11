import { XIcon } from "@phosphor-icons/react/X";
import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	ComponentRef,
} from "react";
import { forwardRef } from "react";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import { cx } from "../../utils/cx/cx.js";
import { IconButton, type IconButtonProps } from "../button/icon-button.js";
import { preventCloseOnPromptInteraction } from "../toast/toast.js";
import * as DialogPrimitive from "./primitive.js";

const Root = DialogPrimitive.Root;
Root.displayName = "DialogRoot";

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
	 * The preferred width of the `DialogContent` as a tailwind `max-w-` class.
	 *
	 * By default, a `Dialog`'s content width is responsive with a default
	 * preferred width: the maximum width of the `DialogContent`
	 *
	 * @default `max-w-lg`
	 */
	preferredWidth?: `max-w-${string}`;
};

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

const Body = ({ className, ...props }: ComponentProps<"div">) => (
	<div
		className={cx("scrollbar text-body flex-1 overflow-y-auto p-6", className)}
		{...props}
	/>
);
Body.displayName = "DialogBody";

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

const Dialog = createNamespacedComponent(
	Root,
	{
		Body,
		Close,
		CloseIconButton,
		Content,
		Description,
		Footer,
		Header,
		Overlay,
		Portal,
		Title,
		Trigger,
	},
	"Dialog",
);

export {
	//,
	Dialog,
};
