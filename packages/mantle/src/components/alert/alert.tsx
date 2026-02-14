import { CheckCircleIcon } from "@phosphor-icons/react/CheckCircle";
import { InfoIcon } from "@phosphor-icons/react/Info";
import { WarningIcon } from "@phosphor-icons/react/Warning";
import { WarningDiamondIcon } from "@phosphor-icons/react/WarningDiamond";
import { XIcon } from "@phosphor-icons/react/X";
import { cva } from "class-variance-authority";
import type { ComponentProps, ComponentRef, HTMLAttributes, ReactNode } from "react";
import { createContext, forwardRef, useContext, useMemo } from "react";
import invariant from "tiny-invariant";
import { $cssProperties, type WithAsChild } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";
import { IconButton, type IconButtonProps } from "../button/icon-button.js";
import { SvgOnly } from "../icon/svg-only.js";
import type { SvgAttributes } from "../icon/types.js";
import { Slot } from "../slot/index.js";

const priorities = [
	//,
	"danger",
	"info",
	// "neutral",
	"success",
	"warning",
] as const;
type Priority = (typeof priorities)[number];

const appearances = ["banner", "default"] as const;
type Appearance = (typeof appearances)[number];

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
	"relative flex w-full gap-1.5 rounded-md border p-2.5 text-sm font-sans",
	{
		variants: {
			/**
			 * The priority of the Alert. Indicates the importance or impact level of the Alert,
			 * affecting its color and styling to communicate its purpose to the user.
			 */
			priority: {
				danger: "border-danger-500/50 bg-danger-500/10 text-danger-700",
				info: "border-info-500/50 bg-info-500/10 text-info-700",
				// neutral: "border-neutral-500/50 bg-neutral-500/10 text-neutral-700",
				success: "border-success-500/50 bg-success-500/10 text-success-700",
				warning: "border-warning-500/50 bg-warning-500/10 text-warning-700",
			} as const satisfies Record<Priority, string>,
			/**
			 * Controls the visual style of the Alert.
			 * - "default" provides standard rounded corners and borders.
			 * - "banner" creates a banner-style alert with no rounded corners, sticky positioning, and no left/right borders.
			 *
			 * @default "default"
			 */
			appearance: {
				banner: "border-x-0 border-t-0 rounded-none z-50 sticky",
				default: "",
			} as const satisfies Record<Appearance, string>,
		},
		compoundVariants: [
			{
				priority: "danger",
				appearance: "banner",
				className: "", // placeholder for different bg-color (color-mix w/ bg-popover)
			},
			{
				priority: "info",
				appearance: "banner",
				className: "", // placeholder for different bg-color (color-mix w/ bg-popover)
			},
			{
				priority: "success",
				appearance: "banner",
				className: "", // placeholder for different bg-color (color-mix w/ bg-popover)
			},
			{
				priority: "warning",
				appearance: "banner",
				className: "", // placeholder for different bg-color (color-mix w/ bg-popover)
			},
		],
	},
);

type AlertProps = ComponentProps<"div"> & {
	/**
	 * Indicates the importance or impact level of the Alert, affecting its
	 * color and styling to communicate its purpose to the user.
	 */
	priority: Priority;
	/**
	 * Controls the visual style of the Alert.
	 * - "default" provides standard rounded corners and borders.
	 * - "banner" creates a banner-style alert with no rounded corners, sticky positioning, and no left/right borders.
	 *
	 * @default "default"
	 */
	appearance?: Appearance;
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
 *      <AlertDismissIconButton />
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const Root = forwardRef<ComponentRef<"div">, AlertProps>(
	({ appearance = "default", className, priority, ...props }, ref) => {
		const context: AlertContextValue = useMemo(() => ({ priority }), [priority]);

		return (
			<AlertContext.Provider value={context}>
				<div
					ref={ref}
					className={cx(alertVariants({ appearance, priority }), className)}
					{...props}
				/>
			</AlertContext.Provider>
		);
	},
);
Root.displayName = "Alert";

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
	danger: <WarningIcon />,
	info: <InfoIcon />,
	// neutral: <BellRinging />,
	success: <CheckCircleIcon />,
	warning: <WarningDiamondIcon />,
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
 *     <AlertDismissIconButton />
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 * ```
 */
const Icon = forwardRef<ComponentRef<"svg">, AlertIconProps>(
	({ className, svg, ...props }, ref) => {
		const ctx = useAlertContext();
		const defaultIcon = defaultIcons[ctx.priority];

		return (
			<SvgOnly ref={ref} className={cx("size-5", className)} svg={svg ?? defaultIcon} {...props} />
		);
	},
);
Icon.displayName = "AlertIcon";

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
 *     <AlertDismissIconButton />
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const Content = forwardRef<ComponentRef<"div">, ComponentProps<"div">>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cx("min-w-0 flex-1 has-data-alert-dismiss:pr-6", className)}
			{...props}
		/>
	),
);
Content.displayName = "AlertContent";

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
 *     <AlertDismissIconButton />
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const Title = forwardRef<HTMLHeadingElement, AlertTitleProps>(
	({ asChild = false, className, ...props }, ref) => {
		const Component = asChild ? Slot : "h5";

		return <Component ref={ref} className={cx("font-medium", className)} {...props} />;
	},
);
Title.displayName = "AlertTitle";

type AlertDescriptionProps = ComponentProps<"div"> & WithAsChild;

/**
 * The optional description of an alert.
 * Renders as a `div` by default, but can be changed to any other element using
 * the `asChild` prop.
 *
 * @see https://mantle.ngrok.com/components/alert#api-alert-description
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *     <AlertDismissIconButton />
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 * ```
 */
const Description = forwardRef<ComponentRef<"div">, AlertDescriptionProps>(
	({ asChild = false, className, ...props }, ref) => {
		const Component = asChild ? Slot : "div";

		return <Component ref={ref} className={cx("text-sm", className)} {...props} />;
	},
);
Description.displayName = "AlertDescription";

const dismissTextColor = <T extends Priority = Priority>(priority: T) =>
	`var(--color-${priority}-700)`;

const dismissHoverColor = <T extends Priority = Priority>(priority: T) =>
	`var(--color-${priority}-800)`;

const dismissActiveColor = <T extends Priority = Priority>(priority: T) =>
	`var(--color-${priority}-900)`;

type AlertDismissIconButtonProps = Partial<Omit<IconButtonProps, "icon">>;
const DismissIconButton = ({
	size = "sm",
	type = "button",
	label = "Dismiss Alert",
	appearance = "ghost",
	className,
	style,
	...props
}: AlertDismissIconButtonProps) => {
	const ctx = useAlertContext();
	return (
		<IconButton
			appearance={appearance}
			icon={<XIcon />}
			label={label}
			size={size}
			data-alert-dismiss
			className={cx(
				"right-1.5 top-1.5 absolute",
				"text-(--alert-dismiss-icon-color)",
				"not-disabled:hover:text-(--alert-dismiss-icon-hover-color)",
				"not-disabled:active:text-(--alert-dismiss-icon-active-color)",
				className,
			)}
			type={type}
			style={$cssProperties({
				...style,
				"--alert-dismiss-icon-color": dismissTextColor(ctx.priority),
				"--alert-dismiss-icon-hover-color": dismissHoverColor(ctx.priority),
				"--alert-dismiss-icon-active-color": dismissActiveColor(ctx.priority),
			})}
			{...props}
		/>
	);
};
DismissIconButton.displayName = "AlertDismissIconButton";

/**
 * Displays a callout for user attention.
 *
 * @see https://mantle.ngrok.com/components/alert
 *
 * @example
 * ```tsx
 * <Alert priority="info">
 *   <AlertIcon />
 *   <AlertContent>
 *     <AlertTitle>Alert Title</AlertTitle>
 *      <AlertDismissIconButton />
 *     <AlertDescription>
 *       Alert description text.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *```
 */
const Alert = {
	/**
	 * The root container of the alert component.
	 *
	 * @see https://mantle.ngrok.com/components/alert#api-alert-root
	 *
	 * @example
	 * ```tsx
	 * <Alert.Root priority="info">
	 *   <Alert.Icon />
	 *   <Alert.Content>
	 *     <Alert.Title>Alert Title</Alert.Title>
	 *     <Alert.Description>Alert description</Alert.Description>
	 *   </Alert.Content>
	 * </Alert.Root>
	 * ```
	 */
	Root,
	/**
	 * The container for the content slot of an alert.
	 *
	 * @see https://mantle.ngrok.com/components/alert#api-alert-content
	 *
	 * @example
	 * ```tsx
	 * <Alert.Root priority="info">
	 *   <Alert.Icon />
	 *   <Alert.Content>
	 *     <Alert.Title>Alert Title</Alert.Title>
	 *     <Alert.Description>Alert description text.</Alert.Description>
	 *   </Alert.Content>
	 * </Alert.Root>
	 * ```
	 */
	Content,
	/**
	 * The optional description of an alert.
	 *
	 * @see https://mantle.ngrok.com/components/alert#api-alert-description
	 *
	 * @example
	 * ```tsx
	 * <Alert.Root priority="info">
	 *   <Alert.Icon />
	 *   <Alert.Content>
	 *     <Alert.Title>Alert Title</Alert.Title>
	 *     <Alert.Description>Alert description text.</Alert.Description>
	 *   </Alert.Content>
	 * </Alert.Root>
	 * ```
	 */
	Description,
	/**
	 * An optional dismiss button that can be used to close the alert.
	 *
	 * @see https://mantle.ngrok.com/components/alert#api-alert-dismiss-icon-button
	 *
	 * @example
	 * ```tsx
	 * <Alert.Root priority="info">
	 *   <Alert.Icon />
	 *   <Alert.Content>
	 *     <Alert.Title>Alert Title</Alert.Title>
	 *     <Alert.DismissIconButton />
	 *     <Alert.Description>Alert description text.</Alert.Description>
	 *   </Alert.Content>
	 * </Alert.Root>
	 * ```
	 */
	DismissIconButton,
	/**
	 * An optional icon that visually represents the priority of the Alert.
	 *
	 * @see https://mantle.ngrok.com/components/alert#api-alert-icon
	 *
	 * @example
	 * ```tsx
	 * <Alert.Root priority="info">
	 *   <Alert.Icon />
	 *   <Alert.Content>
	 *     <Alert.Title>Alert Title</Alert.Title>
	 *     <Alert.Description>Alert description text.</Alert.Description>
	 *   </Alert.Content>
	 * </Alert.Root>
	 * ```
	 */
	Icon,
	/**
	 * The title of an alert.
	 *
	 * @see https://mantle.ngrok.com/components/alert#api-alert-title
	 *
	 * @example
	 * ```tsx
	 * <Alert.Root priority="info">
	 *   <Alert.Icon />
	 *   <Alert.Content>
	 *     <Alert.Title>Alert Title</Alert.Title>
	 *     <Alert.Description>Alert description text.</Alert.Description>
	 *   </Alert.Content>
	 * </Alert.Root>
	 * ```
	 */
	Title,
} as const;

export {
	//,
	Alert,
};
