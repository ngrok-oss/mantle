import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../core";
import type { VariantProps } from "../../types";

const alertVariants = cva("relative w-full rounded-md border p-2.5 text-sm flex gap-1.5", {
	variants: {
		priority: {
			danger: "border-danger-muted bg-danger-muted text-on-bg-danger-muted",
			default: "border-neutral-muted bg-neutral-muted text-on-bg-neutral-muted",
			info: "border-accent-muted bg-accent-muted text-on-bg-accent-muted",
			success: "border-success-muted bg-success-muted text-on-bg-success-muted",
			warning: "border-warning-muted bg-warning-muted text-on-bg-warning-muted",
		},
	},
	defaultVariants: {
		priority: "default",
	},
});

type AlertVariants = VariantProps<typeof alertVariants>;

const Alert = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & AlertVariants>(
	({ className, priority, ...props }, ref) => (
		<div ref={ref} className={cx(alertVariants({ priority }), className)} {...props} />
	),
);
Alert.displayName = "Alert";

const AlertContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cx("min-w-0 flex-1", className)} {...props} />
));
AlertContent.displayName = "AlertContent";

const AlertTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => <h5 ref={ref} className={cx("font-medium", className)} {...props} />,
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cx("text-sm", className)} {...props} />,
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertContent, AlertTitle, AlertDescription };
