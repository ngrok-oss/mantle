import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";

const alertVariants = cva(
	"relative flex w-full gap-1.5 rounded-md border p-2.5 text-sm",
	{
		variants: {
			/**
			 * The priority of the Alert. Indicates the importance or impact level of the Alert,
			 * affecting its color and styling to communicate its purpose to the user.
			 * @default "default"
			 */
			priority: {
				danger: "border-danger-500/50 bg-danger-500/10 text-danger-700",
				default: "border-neutral-500/50 bg-neutral-500/10 text-neutral-700",
				info: "border-accent-500/50 bg-accent-500/10 text-accent-700",
				success: "border-success-500/50 bg-success-500/10 text-success-700",
				warning: "border-warning-500/50 bg-warning-500/10 text-warning-700",
			},
		},
		defaultVariants: {
			priority: "default",
		},
	},
);

type AlertVariants = VariantProps<typeof alertVariants>;

/**
 * Displays a callout for user attention.
 */
const Alert = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & AlertVariants
>(({ className, priority = "default", ...props }, ref) => (
	<div
		ref={ref}
		className={cx(alertVariants({ priority }), className)}
		{...props}
	/>
));
Alert.displayName = "Alert";

/**
 * The container for the content slot of an alert. Place the title and description as direct children.
 */
const AlertContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("min-w-0 flex-1", className)} {...props} />
	),
);
AlertContent.displayName = "AlertContent";

/**
 * The title of an alert.
 */
const AlertTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5 ref={ref} className={cx("font-medium", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

/**
 * The description of an alert.
 */
const AlertDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cx("text-sm", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertContent, AlertTitle, AlertDescription };
