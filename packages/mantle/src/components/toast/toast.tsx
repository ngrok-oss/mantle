"use client";

import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { Info } from "@phosphor-icons/react/Info";
import { Warning } from "@phosphor-icons/react/Warning";
import { WarningDiamond } from "@phosphor-icons/react/WarningDiamond";
import { Slot } from "@radix-ui/react-slot";
import { createContext, forwardRef, useContext, type ComponentProps, type ElementRef, type ReactNode } from "react";
import * as ToastPrimitive from "sonner";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/icon.js";
import type { SvgOnlyProps } from "../icon/svg-only.js";
import { useAppliedTheme } from "../theme-provider/theme-provider.js";

type ToasterProps = ComponentProps<typeof ToastPrimitive.Toaster>;

const Toaster = (props: ToasterProps) => {
	const theme = useAppliedTheme();

	return (
		<ToastPrimitive.Toaster
			position="top-center"
			theme={theme as ToasterProps["theme"]}
			className="toaster mantle-prompt pointer-events-auto font-sans"
			gap={12}
			toastOptions={{
				unstyled: true,
			}}
			{...props}
		/>
	);
};

const ToastIdContext = createContext<string | number>("");

function makeToast(children: ReactNode) {
	return ToastPrimitive.toast.custom(
		(toastId) => <ToastIdContext.Provider value={toastId}>{children}</ToastIdContext.Provider>,
		{
			//
		},
	);
}

type ToastActionProps = ComponentProps<"button"> & WithAsChild;

const priorities = ["info", "success", "warning", "danger"] as const;
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

const Toast = forwardRef<ElementRef<"div">, ToastProps>(({ asChild, children, className, priority, ...props }, ref) => {
	const Component = asChild ? Slot : "div";

	return (
		<ToastStateContext.Provider value={{ priority }}>
			<Component
				data-mantle-notifier
				className={cx(
					"relative flex items-start gap-2",
					"py-3 pl-[0.9375rem] pr-4",
					"bg-popover border-popover rounded border shadow-lg",
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

const priorityBackgroundColor = {
	info: "bg-accent-600",
	warning: "bg-warning-600",
	success: "bg-success-600",
	danger: "bg-danger-600",
} as const satisfies Record<Priority, string>;

type PriorityBarAccentProps = Omit<ComponentProps<"div">, "children"> & { priority: Priority };

function PriorityBarAccent({ className, priority, ...props }: PriorityBarAccentProps) {
	return (
		<div
			className={cx(
				"z-1 absolute -inset-px right-auto w-1.5 rounded-bl rounded-tl",
				priorityBackgroundColor[priority],
				className,
			)}
		/>
	);
}

type ToastIconProps = Partial<SvgOnlyProps>;

const defaultPriorityIcon = {
	danger: <Warning weight="fill" />,
	warning: <WarningDiamond weight="fill" />,
	success: <CheckCircle weight="fill" />,
	info: <Info weight="fill" />,
} as const satisfies Record<Priority, ReactNode>;

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
			return <Icon className={cx("text-accent-600", className)} ref={ref} svg={<Info weight="fill" />} {...props} />;
		default:
			throw new Error(`Unreachable Case: ${ctx.priority}`);
	}
});

const ToastAction = forwardRef<ElementRef<"button">, ToastActionProps>(
	({ asChild, className, onClick, ...props }, ref) => {
		const ctx = useContext(ToastIdContext);

		const Component = asChild ? Slot : "button";

		return (
			<Component
				className={cx("shrink-0", className)}
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

const ToastMessage = forwardRef<ElementRef<"p">, ToastMessageProps>(({ asChild, className, ...props }, ref) => {
	const Component = asChild ? Slot : "p";

	return <Component className={cx("text-strong flex-1 text-sm", className)} ref={ref} {...props} />;
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
