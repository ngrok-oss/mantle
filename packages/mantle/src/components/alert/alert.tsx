import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { Info } from "@phosphor-icons/react/Info";
import { Warning } from "@phosphor-icons/react/Warning";
import { WarningDiamond } from "@phosphor-icons/react/WarningDiamond";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type {
	ComponentProps,
	ComponentRef,
	HTMLAttributes,
	ReactNode,
} from "react";
import { createContext, forwardRef, useContext, useMemo } from "react";
import invariant from "tiny-invariant";
import type { WithAsChild } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";
import { SvgOnly } from "../icon/svg-only.js";
import type { SvgAttributes } from "../icon/types.js";

const priorities = [
	//,
	"danger",
	"info",
	// "neutral",
	"success",
	"warning",
] as const;
type Priority = (typeof priorities)[number];

type AlertContextValue = {
	priority: Priority;
};

const AlertContext = createContext<AlertContextValue | null>(null);

function useAlertContext() {
	const context = useContext(AlertContext);
	invariant(context, "useAlertContext hook used outside of Alert parent!");
	return context;
}

const alertVariants = cva(
	"relative flex w-full gap-1.5 rounded-md border p-2.5 text-sm",
	{
		variants: {
			/**
			 * The priority of the Alert. Indicates the importance or impact level of the Alert,
			 * affecting its color and styling to communicate its purpose to the user.
			 */
			priority: {
				danger: "border-danger-500/50 bg-danger-500/10 text-danger-700",
				info: "border-accent-500/50 bg-accent-500/10 text-accent-700",
				// neutral: "border-neutral-500/50 bg-neutral-500/10 text-neutral-700",
				success: "border-success-500/50 bg-success-500/10 text-success-700",
				warning: "border-warning-500/50 bg-warning-500/10 text-warning-700",
			} as const satisfies Record<Priority, string>,
		},
	},
);

type AlertProps = ComponentProps<"div"> & {
	/**
	 * Indicates the importance or impact level of the Alert, affecting its
	 * color and styling to communicate its purpose to the user.
	 */
	priority: Priority;
};

/**
 * Displays a callout for user attention. Root container for all Alert sub-components.
 *
 * @see https://mantle.ngrok.com/components/alert#api-alert
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const Alert = forwardRef<ComponentRef<"div">, AlertProps>(
	({ className, priority, ...props }, ref) => {
		const context: AlertContextValue = useMemo(
			() => ({ priority }),
			[priority],
		);

		return (
			<AlertContext.Provider value={context}>
				<div
					ref={ref}
					className={cx(alertVariants({ priority }), className)}
					{...props}
				/>
			</AlertContext.Provider>
		);
	},
);
Alert.displayName = "Alert";

type AlertIconProps = Omit<SvgAttributes, "children"> & {
	/**
	 * An optional icon that renders in place of the default icon for the Alert priority.
	 */
	svg?: ReactNode;
};

/**
 * Default `<AlertIcon>` icons for each priority.
 */
const defaultIcons = {
	danger: <Warning />,
	info: <Info />,
	// neutral: <BellRinging />,
	success: <CheckCircle />,
	warning: <WarningDiamond />,
} as const satisfies Record<Priority, ReactNode>;

/**
 * An optional icon that visually represents the priority of the Alert.
 *
 * The default rendered icon be overridden with a custom icon using the `svg` prop.
 *
 * @see https://mantle.ngrok.com/components/alert#api-alert-icon
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 * ```
 */
const AlertIcon = forwardRef<ComponentRef<"svg">, AlertIconProps>(
	({ className, svg, ...props }, ref) => {
		const ctx = useAlertContext();
		const defaultIcon = defaultIcons[ctx.priority];

		return (
			<SvgOnly
				ref={ref}
				className={cx("size-5", className)}
				svg={svg ?? defaultIcon}
				{...props}
			/>
		);
	},
);
AlertIcon.displayName = "AlertIcon";

/**
 * The container for the content slot of an alert. Place the title and description as direct children.
 *
 * @see https://mantle.ngrok.com/components/alert#api-alert-content
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const AlertContent = forwardRef<ComponentRef<"div">, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("min-w-0 flex-1", className)} {...props} />
	),
);
AlertContent.displayName = "AlertContent";

type AlertTitleProps = HTMLAttributes<HTMLHeadingElement> & WithAsChild;

/**
 * The title of an alert. Default renders as an h5 element, use asChild to render something else.
 *
 * @see https://mantle.ngrok.com/components/alert#api-alert-title
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
	({ asChild = false, className, ...props }, ref) => {
		const Component = asChild ? Slot : "h5";

		return (
			<Component
				ref={ref}
				className={cx("font-medium", className)}
				{...props}
			/>
		);
	},
);
AlertTitle.displayName = "AlertTitle";

type AlertDescriptionProps = ComponentProps<"p"> & WithAsChild;

/**
 * The optional description of an alert. Default renders as an p element, use asChild to render something else.
 *
 * @see https://mantle.ngrok.com/components/alert#api-alert-description
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 * ```
 */
const AlertDescription = forwardRef<ComponentRef<"p">, AlertDescriptionProps>(
	({ asChild = false, className, ...props }, ref) => {
		const Component = asChild ? Slot : "p";

		return (
			<Component ref={ref} className={cx("text-sm", className)} {...props} />
		);
	},
);
AlertDescription.displayName = "AlertDescription";

export {
	//,
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
};
