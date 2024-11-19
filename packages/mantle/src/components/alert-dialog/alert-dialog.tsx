"use client";

import { Info } from "@phosphor-icons/react/Info";
import { Warning } from "@phosphor-icons/react/Warning";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {
	createContext,
	forwardRef,
	useContext,
	type ComponentProps,
	type ComponentPropsWithoutRef,
	type ElementRef,
	type ReactNode,
} from "react";
import invariant from "tiny-invariant";
import { cx } from "../../utils/cx/cx.js";
import { Button, type ButtonPriority, type ButtonProps } from "../button/button.js";
import { IconBase } from "../icon/_icon-base.js";
import type { SvgAttributes } from "../icon/types.js";

const priorities = ["info", "danger"] as const;
type Priority = (typeof priorities)[number];

type AlertDialogContextValue = {
	priority: Priority;
};

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

function useAlertDialogContext() {
	const context = useContext(AlertDialogContext);
	invariant(context, "AlertDialog child component used outside of AlertDialog parent!");
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
 * The root component for the Alert Dialog
 */
function AlertDialog({ priority, ...props }: AlertDialogProps) {
	return (
		<AlertDialogContext.Provider value={{ priority }}>
			<AlertDialogPrimitive.Root {...props} />
		</AlertDialogContext.Provider>
	);
}

/**
 * A button that opens the Alert Dialog.
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

/**
 * A layer that covers the inert portion of the view when the dialog is open.
 */
const AlertDialogOverlay = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Overlay>,
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
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

/**
 * The popover alert dialog container.
 *
 * Renders on top of the overlay and is centered in the viewport.
 */
const AlertDialogContent = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<div className="fixed inset-4 z-50 flex items-center justify-center">
			<AlertDialogPrimitive.Content
				ref={ref}
				className={cx(
					"flex w-full max-w-md flex-1 flex-col items-center gap-4 sm:flex-row sm:items-start",
					"outline-none focus-within:outline-none",
					"p-6",
					"border-dialog bg-dialog rounded-xl border shadow-lg transition-transform duration-200",
					"data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
					className,
				)}
				{...props}
			/>
		</div>
	</AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

/**
 * Contains the main content of the dialog.
 */
const AlertDialogBody = ({ className, ...props }: ComponentProps<"div">) => (
	<div className={cx("flex-1 space-y-4", className)} {...props} />
);

/**
 * Contains the header content of the dialog, including the title and description.
 */
const AlertDialogHeader = ({ className, ...props }: ComponentProps<"div">) => (
	<div className={cx("flex flex-col space-y-2 text-center sm:text-start", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

/**
 * Contains the footer content of the dialog, including the action and cancel buttons.
 */
const AlertDialogFooter = ({ className, ...props }: ComponentProps<"div">) => (
	<div className={cx("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

/**
 * An accessible name to be announced when the dialog is opened.
 *
 * Alternatively, you can provide `aria-label` or `aria-labelledby` to
 * `AlertDialogContent` and exclude this component.
 */
const AlertDialogTitle = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cx("text-strong text-center text-xl font-medium sm:text-start sm:text-lg", className)}
		{...props}
	/>
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

/**
 * An accessible description to be announced when the dialog is opened.
 *
 * Alternatively, you can provide `aria-describedby` to `AlertDialogContent` and
 * exclude this component.
 */
const AlertDialogDescription = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cx("text-body text-center text-base font-normal sm:text-start sm:text-sm", className)}
		{...props}
	/>
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

/**
 * A button that closes the dialog and confirms the action.
 * Will default to appearance="filled", as well as the priority color from the `AlertDialog`.
 *
 * These buttons should be distinguished visually from the AlertDialogCancel button.
 *
 * Composes around the mantle Button component.
 */
const AlertDialogAction = forwardRef<ElementRef<"button">, ButtonProps>(
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
			<AlertDialogPrimitive.Action asChild>
				<Button
					//
					appearance={appearance}
					priority={buttonPriority}
					ref={ref}
					{...props}
				/>
			</AlertDialogPrimitive.Action>
		);
	},
);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

/**
 * A button that closes the dialog and cancels the action.
 * Will default to appearance="outlined" and priority="neutral".
 *
 * This button should be distinguished visually from AlertDialogAction buttons.
 *
 * Composes around the mantle Button component.
 */
const AlertDialogCancel = forwardRef<ElementRef<"button">, ButtonProps>(
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
		<AlertDialogPrimitive.Cancel asChild>
			<Button
				appearance={appearance}
				className={cx("mt-2 sm:mt-0", className)}
				priority={priority}
				ref={ref}
				{...props}
			/>
		</AlertDialogPrimitive.Cancel>
	),
);
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

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
 */
const AlertDialogIcon = forwardRef<ElementRef<"svg">, AlertDialogIconProps>(({ className, svg, ...props }, ref) => {
	const ctx = useAlertDialogContext();
	const defaultColor = ctx.priority === "danger" ? "text-danger-600" : "text-accent-600";
	const defaultIcon = ctx.priority === "danger" ? <Warning /> : <Info />;

	return (
		<IconBase
			ref={ref}
			className={cx("size-12 sm:size-7", defaultColor, className)}
			svg={svg ?? defaultIcon}
			{...props}
		/>
	);
});
AlertDialogIcon.displayName = "AlertDialogIcon";

export {
	//,
	AlertDialog,
	AlertDialogAction,
	AlertDialogBody,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogIcon,
	AlertDialogTitle,
	AlertDialogTrigger,
};
