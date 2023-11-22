import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cx } from "../cx";
import type { WithAsChild } from "../types/as-child";

export type Props = HTMLAttributes<HTMLDivElement>;

/**
 * A container that can be used to display content in a box resembling a playing
 * card.
 */
export const Card = forwardRef<HTMLDivElement, Props>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("relative rounded border bg-white", className)} {...rest}>
		{children}
	</div>
));
Card.displayName = "Card";

/**
 * The main content of a card. Usually composed as a direct child of a `Card` component.
 */
export const CardBody = forwardRef<HTMLDivElement, Props>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("p-6", className)} {...rest}>
		{children}
	</div>
));
CardBody.displayName = "CardBody";

/**
 * The footer container of a card. Usually composed as a direct child of a `Card` component.
 */
export const CardFooter = forwardRef<HTMLDivElement, Props>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("border-t px-6 py-3", className)} {...rest}>
		{children}
	</div>
));
CardFooter.displayName = "CardFooter";

/**
 * The header container of a card. Usually composed as a direct child of a `Card` component.
 */
export const CardHeader = forwardRef<HTMLDivElement, Props>(({ className, children, ...rest }, ref) => (
	<div ref={ref} className={cx("border-b px-6 py-3", className)} {...rest}>
		{children}
	</div>
));
CardHeader.displayName = "CardHeader";

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & WithAsChild;

/**
 * The title of a card. Usually composed as a direct child of a `CardHeader` component.
 */
export const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(({ className, asChild, ...props }, ref) => {
	const Comp = asChild ? Slot : "h3";
	return <Comp ref={ref} className={cx("font-semibold leading-none tracking-tight", className)} {...props} />;
});
CardTitle.displayName = "CardTitle";
