"use client";

import { InfoIcon } from "@phosphor-icons/react/Info";
import { WarningIcon } from "@phosphor-icons/react/Warning";
import { Slot } from "@radix-ui/react-slot";
import {
	type ComponentProps,
	type ComponentPropsWithoutRef,
	type ComponentRef,
	type ReactNode,
	createContext,
	forwardRef,
	useContext,
	useMemo,
} from "react";
import invariant from "tiny-invariant";
import type { WithAsChild } from "../../types/as-child.js";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import { cx } from "../../utils/cx/cx.js";
import {
	Button,
	type ButtonPriority,
	type ButtonProps,
} from "../button/button.js";
import * as AlertDialogPrimitive from "../dialog/primitive.js";
import { SvgOnly } from "../icon/svg-only.js";
import type { SvgAttributes } from "../icon/types.js";
import { preventCloseOnPromptInteraction } from "../toast/toast.js";

const priorities = ["info", "danger"] as const;
type Priority = (typeof priorities)[number];

type AlertDialogContextValue = {
	priority: Priority;
};

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

function useAlertDialogContext() {
	const context = useContext(AlertDialogContext);
	invariant(
		context,
		"AlertDialog child component used outside of AlertDialog parent!",
	);
	return context;
}

type AlertDialogProps = ComponentProps<typeof AlertDialogPrimitive.Root> & {
	/**
	 * Indicates the importance or impact level of the AlertDialog, affecting its
	 * color and styling to communicate its purpose to the user.
	 */
	priority: Priority;
};

/**
 * A modal dialog that interrupts the user with important content and expects a
 * response.
 * The root stateful component for the Alert Dialog.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
function Root({ priority, ...props }: AlertDialogProps) {
	const context: AlertDialogContextValue = useMemo(
		() => ({ priority }),
		[priority],
	);

	return (
		<AlertDialogContext.Provider value={context}>
			<AlertDialogPrimitive.Root {...props} />
		</AlertDialogContext.Provider>
	);
}
Root.displayName = "AlertDialog";

/**
 * A button that opens the Alert Dialog.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-trigger
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Trigger = AlertDialogPrimitive.Trigger;

/**
 * The portal for the Alert Dialog.
 *
 * @private
 */
const Portal = AlertDialogPrimitive.Portal;

/**
 * A layer that covers the inert portion of the view when the dialog is open.
 *
 * @private
 */
const Overlay = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay
		className={cx(
			"data-state-open:animate-in data-state-closed:animate-out data-state-closed:fade-out-0 data-state-open:fade-in-0 bg-overlay fixed inset-0 z-50 backdrop-blur-sm",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
Overlay.displayName = "AlertDialogOverlay";

type AlertDialogContentProps = ComponentPropsWithoutRef<
	typeof AlertDialogPrimitive.Content
> & {
	/**
	 * The preferred width of the `AlertDialogContent` as a tailwind `max-w-` class.
	 *
	 * By default, a `AlertDialog`'s content width is responsive with a default
	 * preferred width: the maximum width of the `AlertDialogContent`
	 *
	 * @default `max-w-md`
	 */
	preferredWidth?: `max-w-${string}`;
};

/**
 * The popover alert dialog container.
 *
 * Renders on top of the overlay and is centered in the viewport.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-content
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Content = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Content>,
	AlertDialogContentProps
>(
	(
		{
			className,
			onInteractOutside,
			onPointerDownOutside,
			preferredWidth = "max-w-md",
			...props
		},
		ref,
	) => (
		<Portal>
			<Overlay />
			<div className="fixed inset-4 z-50 flex items-center justify-center">
				<AlertDialogPrimitive.Content
					ref={ref}
					className={cx(
						"flex w-full flex-1 flex-col items-center gap-4 sm:flex-row sm:items-start",
						"outline-none focus-within:outline-none",
						"p-6",
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
					{...props}
				/>
			</div>
		</Portal>
	),
);
Content.displayName = "AlertDialogContent";

/**
 * Contains the main content of the alert dialog.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-body
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Body = forwardRef<
	ComponentRef<"div">,
	ComponentProps<"div"> & WithAsChild
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			className={cx("flex-1 space-y-4", className)}
			ref={ref}
			{...props}
		/>
	);
});
Body.displayName = "AlertDialogBody";

/**
 * Contains the header content of the dialog, including the title and description.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-header
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Header = forwardRef<
	ComponentRef<"div">,
	ComponentProps<"div"> & WithAsChild
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			className={cx(
				"flex flex-col space-y-2 text-center sm:text-start",
				className,
			)}
			{...props}
		/>
	);
});
Header.displayName = "AlertDialogHeader";

/**
 * Contains the footer content of the dialog, including the action and cancel buttons.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-footer
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Footer = forwardRef<
	ComponentRef<"div">,
	ComponentProps<"div"> & WithAsChild
>(({ asChild = false, className, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			className={cx(
				"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
				className,
			)}
			{...props}
		/>
	);
});
Footer.displayName = "AlertDialogFooter";

/**
 * An accessible name to be announced when the dialog is opened.
 *
 * Alternatively, you can provide `aria-label` or `aria-labelledby` to
 * `AlertDialog.Content` and exclude this component.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-title
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Title = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cx(
			"text-strong text-center text-lg font-medium sm:text-start",
			className,
		)}
		{...props}
	/>
));
Title.displayName = "AlertDialogTitle";

/**
 * An accessible description to be announced when the dialog is opened.
 *
 * Alternatively, you can provide `aria-describedby` to `AlertDialog.Content` and
 * exclude this component.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-description
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Description = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cx(
			"text-body text-center text-sm font-normal sm:text-start",
			className,
		)}
		{...props}
	/>
));
Description.displayName = "AlertDialogDescription";

/**
 * A button that confirms the Alert Dialog action.
 * Will default to appearance="filled", as well as the priority color from the `AlertDialog`.
 * Does not close the alert dialog by default.
 *
 * These buttons should be distinguished visually from the AlertDialog.Cancel button.
 *
 * Composes around the mantle Button component.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-action
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Action = forwardRef<ComponentRef<"button">, ButtonProps>(
	(
		{
			//,
			appearance = "filled",
			...props
		},
		ref,
	) => {
		const ctx = useAlertDialogContext();
		let buttonPriority: NonNullable<ButtonPriority> = "default";
		if (ctx.priority === "danger") {
			buttonPriority = "danger";
		}

		return (
			<Button
				//
				appearance={appearance}
				priority={buttonPriority}
				ref={ref}
				{...props}
			/>
		);
	},
);
Action.displayName = "AlertDialogAction";

/**
 * A button that closes the dialog and cancels the action.
 * Will default to appearance="outlined" and priority="neutral".
 *
 * This button should be distinguished visually from AlertDialog.Action buttons.
 *
 * Composes around the mantle Button component.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-cancel
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Cancel = forwardRef<ComponentRef<"button">, ButtonProps>(
	(
		{
			//,
			appearance = "outlined",
			className,
			priority = "neutral",
			...props
		},
		ref,
	) => (
		<AlertDialogPrimitive.Close asChild>
			<Button
				appearance={appearance}
				className={cx("mt-2 sm:mt-0", className)}
				priority={priority}
				ref={ref}
				{...props}
			/>
		</AlertDialogPrimitive.Close>
	),
);
Cancel.displayName = "AlertDialogCancel";

type AlertDialogIconProps = Omit<SvgAttributes, "children"> & {
	svg?: ReactNode;
};

/**
 * An icon that visually represents the priority of the AlertDialog.
 *
 * Defaults to a warning icon for danger priority and an info icon for info
 * priority with the appropriate color.
 *
 * Can be overridden with a custom icon using the `svg` prop.
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-icon
 *
 * @example
 * ```tsx
 * <AlertDialog priority="danger">
 *   <AlertDialog.Trigger asChild>
 *     <Button type="button" appearance="outlined">
 *       Show Danger Alert Dialog
 *     </Button>
 *   </AlertDialog.Trigger>
 *   <AlertDialog.Content>
 *     <AlertDialog.Icon />
 *     <AlertDialog.Body>
 *       <AlertDialog.Header>
 *         <AlertDialog.Title>
 *           Are you absolutely sure?
 *         </AlertDialog.Title>
 *         <AlertDialog.Description>
 *           Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
 *         </AlertDialog.Description>
 *       </AlertDialog.Header>
 *       <AlertDialog.Footer>
 *         <AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
 *         <AlertDialog.Action type="button">
 *           Continue
 *         </AlertDialog.Action>
 *       </AlertDialog.Footer>
 *   	</AlertDialog.Body>
 *   </AlertDialog.Content>
 * </AlertDialog>
 * ```
 */
const Icon = forwardRef<ComponentRef<"svg">, AlertDialogIconProps>(
	({ className, svg, ...props }, ref) => {
		const ctx = useAlertDialogContext();
		const defaultColor =
			ctx.priority === "danger" ? "text-danger-600" : "text-accent-600";
		const defaultIcon =
			ctx.priority === "danger" ? <WarningIcon /> : <InfoIcon />;

		return (
			<SvgOnly
				ref={ref}
				className={cx("size-12 sm:size-7", defaultColor, className)}
				svg={svg ?? defaultIcon}
				{...props}
			/>
		);
	},
);
Icon.displayName = "AlertDialogIcon";

/**
 * A button that closes the Alert Dialog. (Unstyled)
 *
 * @see https://mantle.ngrok.com/components/alert-dialog#api-alert-dialog-close
 *
 * @example
 * ```tsx
 * <AlertDialog.Close asChild>
 *   <AlertDialog.Action
 *   	type="button"
 *   	onClick={() => doThing()}
 *   >
 *   	Do thing and close
 *   </AlertDialog.Action>
 * </AlertDialog.Close>
 */
const Close = AlertDialogPrimitive.Close;

const AlertDialog = createNamespacedComponent(
	Root,
	{
		Action,
		Body,
		Cancel,
		Close,
		Content,
		Description,
		Footer,
		Header,
		Icon,
		Title,
		Trigger,
	},
	"AlertDialog",
);

export {
	//,
	AlertDialog,
};
