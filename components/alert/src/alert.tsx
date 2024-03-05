import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cx } from "../../core";
import type { VariantProps } from "../../types";

const alertVariants = cva("relative flex w-full gap-1.5 rounded-md border p-2.5 text-sm", {
	variants: {
		priority: {
			danger: "border-red-500/50 bg-red-500/10 text-red-700",
			default: "border-gray-500/50 bg-gray-500/10 text-gray-700",
			info: "border-blue-500/50 bg-blue-500/10 text-blue-700",
			success: "border-green-500/50 bg-green-500/10 text-green-700",
			warning: "border-amber-500/50 bg-amber-500/10 text-amber-700",
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
