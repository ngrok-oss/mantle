import type { VariantProps } from "@/types/src/variant-props";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../core";

const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm flex gap-4", {
	variants: {
		priority: {
			danger: "border-red-600 text-red-600 bg-red-50",
			default: "bg-white text-gray-900 border-black",
			info: "border-blue-600 bg-blue-50 text-blue-600",
			success: "border-green-600 bg-green-50 text-green-600",
			warning: "border-amber-600 bg-amber-50 text-amber-600",
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