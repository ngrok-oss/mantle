import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import type { WithAsChild } from "../../types/as-child";
import { cx } from "../../utils/cx";

export type CardProps = HTMLAttributes<HTMLDivElement>;

/**
 * A container that can be used to display content in a box resembling a playing
 * card.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...rest }, ref) => (
	<div
		ref={ref}
		className={cx("divide-card-muted border-card bg-card relative divide-y rounded-md border", className)}
		{...rest}
	>
		{children}
	</div>
));
Card.displayName = "Card";

/**
 * The main content of a card. Usually composed as a direct child of a `Card` component.
 */
const CardBody = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("p-6", className)} {...rest}>
		{children}
	</div>
));
CardBody.displayName = "CardBody";

/**
 * The footer container of a card. Usually composed as a direct child of a `Card` component.
 */
const CardFooter = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("px-6 py-3", className)} {...rest}>
		{children}
	</div>
));
CardFooter.displayName = "CardFooter";

/**
 * The header container of a card. Usually composed as a direct child of a `Card` component.
 */
const CardHeader = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("px-6 py-3", className)} {...rest}>
		{children}
	</div>
));
CardHeader.displayName = "CardHeader";

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & WithAsChild;

/**
 * The title of a card. Usually composed as a direct child of a `CardHeader` component.
 */
const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(({ className, asChild, ...props }, ref) => {
	const Comp = asChild ? Slot : "h3";
	return <Comp ref={ref} className={cx("text-strong text-base font-medium", className)} {...props} />;
});
CardTitle.displayName = "CardTitle";

export {
	//,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
};
