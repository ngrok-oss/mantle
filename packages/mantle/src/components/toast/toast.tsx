"use client";

import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { Info } from "@phosphor-icons/react/Info";
import { Warning } from "@phosphor-icons/react/Warning";
import { WarningDiamond } from "@phosphor-icons/react/WarningDiamond";
import { Slot } from "@radix-ui/react-slot";
import { createContext, forwardRef, useContext, type ComponentProps, type ElementRef, type ReactNode } from "react";
import * as ToastPrimitive from "sonner";
import type { WithAsChild } from "../../types/as-child.js";
import type { WithStyleProps } from "../../types/with-style-props.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/icon.js";
import type { SvgOnlyProps } from "../icon/svg-only.js";
import { useAppliedTheme } from "../theme-provider/theme-provider.js";

type ToasterPrimitiveProps = ComponentProps<typeof ToastPrimitive.Toaster>;
type ToasterPrimitiveTheme = ToasterPrimitiveProps["theme"];

type ToasterProps = WithStyleProps &
	Pick<ToasterPrimitiveProps, "containerAriaLabel" | "dir" | "position"> & {
		/**
		 * Time in milliseconds that should elapse before automatically dismissing toasts.
		 * When set here, this will be the default duration for all toasts.
		 * @default 4000
		 */
		duration_ms?: number;
	};

/**
 * A container for displaying all toasts.
 *
 * Only one `<Toaster />` should be rendered in an app a time, preferably at the
 * root level of the app.
 */
const Toaster = ({
	//,
	className,
	containerAriaLabel,
	dir,
	duration_ms = 4000,
	position = "top-center",
	style,
}: ToasterProps) => {
	const theme = useAppliedTheme();

	return (
		<ToastPrimitive.Toaster
			className={cx("toaster mantle-prompt pointer-events-auto font-sans *:duration-200", className)}
			containerAriaLabel={containerAriaLabel}
			dir={dir}
			duration={duration_ms}
			gap={12}
			position={position ?? "top-center"}
			style={style}
			theme={theme as ToasterPrimitiveTheme} // we have additional themes that are not in the sonner types, so we need to cast for now
			toastOptions={{
				unstyled: true,
			}}
		/>
	);
};

const ToastIdContext = createContext<string | number>("");

type MakeToastOptions = {
	/**
	 * Time in milliseconds that should elapse before automatically closing the toast.
	 * Will default to the `<Toaster />`'s `duration_ms` if not provided.
	 */
	duration_ms?: number;
	/**
	 * An optional custom ID for this toast. If not given, a unique ID is provided for you.
	 */
	id?: string;
};

/**
 * Create a toast. Provide a `<Toast>` component as the `children` to be rendered
 * inside the `<Toaster />` section.
 */
function makeToast(children: ReactNode, options?: MakeToastOptions) {
	return ToastPrimitive.toast.custom(
		(toastId) => <ToastIdContext.Provider value={options?.id ?? toastId}>{children}</ToastIdContext.Provider>,
		{
			//
			duration: options?.duration_ms,
			id: options?.id,
			unstyled: true,
		},
	);
}

type ToastActionProps = ComponentProps<"button"> & WithAsChild;

const priorities = [
	//,
	"danger",
	"info",
	"success",
	"warning",
] as const;
type Priority = (typeof priorities)[number];

type ToastState = {
	priority: Priority;
};

const ToastStateContext = createContext<ToastState>({
	priority: "info",
});

type ToastProps = ComponentProps<"div"> &
	WithAsChild & {
		priority: Priority;
	};

/**
 * A succinct message with a priority that is displayed temporarily.
 * Toasts are used to provide feedback to the user without interrupting their workflow.
 */
const Toast = forwardRef<ElementRef<"div">, ToastProps>(({ asChild, children, className, priority, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<ToastStateContext.Provider value={{ priority }}>
			<Component
				className={cx(
					"relative flex items-start gap-2 text-base sm:text-sm",
					"p-3 pl-[0.9375rem]",
					"bg-popover high-contrast:border-popover rounded rounded-r-[0.3125rem] border border-gray-500/35 shadow-lg",
					/**
					 * Do not apply overflow-hidden because we want the priority bar accent
					 * to overlap the toast border, else the border flows over the
					 * priority bar.
					 */
					className,
				)}
				ref={ref}
				{...props}
			>
				<PriorityBarAccent priority={priority} />
				{children}
			</Component>
		</ToastStateContext.Provider>
	);
});

type ToastIconProps = Partial<SvgOnlyProps>;

/**
 * An icon that visually represents the priority of the toast.
 * If you do not provide an icon, the default icon and color for the priority is used.
 */
const ToastIcon = forwardRef<ElementRef<"svg">, ToastIconProps>(({ className, svg, ...props }, ref) => {
	const ctx = useContext(ToastStateContext);

	switch (ctx.priority) {
		case "danger":
			return (
				<Icon
					className={cx("text-danger-600", className)}
					ref={ref}
					svg={svg ?? <Warning weight="fill" />}
					{...props}
				/>
			);
		case "warning":
			return (
				<Icon
					className={cx("text-warning-600", className)}
					ref={ref}
					svg={svg ?? <WarningDiamond weight="fill" />}
					{...props}
				/>
			);
		case "success":
			return (
				<Icon
					className={cx("text-success-600", className)}
					ref={ref}
					svg={svg ?? <CheckCircle weight="fill" />}
					{...props}
				/>
			);
		case "info":
			return (
				<Icon
					//
					className={cx("text-accent-600", className)}
					ref={ref}
					svg={<Info weight="fill" />}
					{...props}
				/>
			);
		default:
			throw new Error(`Unreachable Case: ${ctx.priority}`);
	}
});

/**
 * A button that dismisses the toast when clicked.
 * You can prevent the toast from being dismissed `onClick` by calling `event.preventDefault()`
 */
const ToastAction = forwardRef<ElementRef<"button">, ToastActionProps>(
	({ asChild, className, onClick, ...props }, ref) => {
		const ctx = useContext(ToastIdContext);

		const Component = asChild ? Slot : "button";

		return (
			<Component
				className={cx(
					//,
					"shrink-0",
					// 👇 wiggle the bits so that icon buttons toast actions are aligned with the toast icon
					"data-[icon-button]:-mr-0.5 data-[icon-button]:-mt-0.5 data-[icon-button]:rounded-sm",
					className,
				)}
				onClick={(event) => {
					onClick?.(event);
					if (event.defaultPrevented) {
						return;
					}
					ToastPrimitive.toast.dismiss(ctx);
				}}
				ref={ref}
				{...props}
			/>
		);
	},
);

type ToastMessageProps = ComponentProps<"p"> & WithAsChild;

/**
 * The message content of the toast.
 */
const ToastMessage = forwardRef<ElementRef<"p">, ToastMessageProps>(({ asChild, className, ...props }, ref) => {
	const Component = asChild ? Slot : "p";

	return (
		<Component
			//
			className={cx("text-strong flex-1 text-base sm:text-sm", className)}
			ref={ref}
			{...props}
		/>
	);
});

export {
	//,
	makeToast,
	Toast,
	ToastAction,
	Toaster,
	ToastIcon,
	ToastMessage,
};

export type {
	//,
	Priority,
};

/**
 * @private
 *
 * Allows any mantle floating prompt (e.g. toasts and notifications) to be interacted with
 * even when a modaled view (e.g. dialog, sheet, etc) is open and a focus trap is active.
 *
 * Without this, interacting with the prompt would close the modaled view.
 */
export function preventCloseOnPromptInteraction(
	event: CustomEvent | PointerEvent | MouseEvent | TouchEvent | FocusEvent,
) {
	if (!(event.target instanceof Element)) {
		return;
	}

	if (event.target.closest(".mantle-prompt")) {
		event.preventDefault();
	}
}

const priorityBackgroundColor = {
	info: "bg-accent-600",
	warning: "bg-warning-600",
	success: "bg-success-600",
	danger: "bg-danger-600",
} as const satisfies Record<Priority, string>;

type PriorityBarAccentProps = Omit<ComponentProps<"div">, "children"> & { priority: Priority };

/**
 * @private
 *
 * A colored bar that visually represents the priority of the toast.
 */
function PriorityBarAccent({ className, priority, ...props }: PriorityBarAccentProps) {
	return (
		<div
			aria-hidden
			className={cx(
				//
				"z-1 absolute -inset-px right-auto w-1.5 rounded-l",
				priorityBackgroundColor[priority],
				className,
			)}
			{...props}
		/>
	);
}
