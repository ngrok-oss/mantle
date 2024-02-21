import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../core";
import type { VariantProps } from "../../types";

const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm flex gap-4", {
	variants: {
		priority: {
			danger: "border-red-600 bg-red-500/5 text-red-700",
			default: "border-gray-600 bg-gray-500/3 text-gray-700",
			info: "border-blue-600 bg-blue-500/5 text-blue-700",
			success: "border-green-600 bg-green-500/5 text-green-700",
			warning: "border-amber-600 bg-amber-500/5 text-amber-700",
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
	({ className, ...props }, ref) => (
		<h5 ref={ref} className={cx("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
	),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("text-sm [&_p]:leading-relaxed", className)} {...props} />
	),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertContent, AlertTitle, AlertDescription };
