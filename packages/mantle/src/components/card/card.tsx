import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, ComponentRef, HTMLAttributes } from "react";
import { forwardRef } from "react";
import type { WithAsChild } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";

type CardProps = ComponentProps<"div"> & WithAsChild;

/**
 * A container that can be used to display content in a box resembling a
 * physical card. The root component of the all Card components.
 *
 * @see https://mantle.ngrok.com/components/card#api-card
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 * </Card>
 *
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title Here</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 *   <CardFooter>
 *     <p>Card footer</p>
 *   </CardFooter>
 * </Card>
 * ```
 */
const Card = forwardRef<ComponentRef<"div">, CardProps>(
	({ asChild = false, className, children, ...rest }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component
				ref={ref}
				className={cx(
					"divide-card-muted border-card bg-card relative divide-y rounded-md border",
					className,
				)}
				{...rest}
			>
				{children}
			</Component>
		);
	},
);
Card.displayName = "Card";

/**
 * The main content of a card. Usually composed as a direct child of a `Card` component.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-body
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 * </Card>
 *
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title Here</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 *   <CardFooter>
 *     <p>Card footer</p>
 *   </CardFooter>
 * </Card>
 * ```
 */
const CardBody = forwardRef<ComponentRef<"div">, CardProps>(
	({ asChild = false, className, children, ...rest }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component ref={ref} className={cx("p-6", className)} {...rest}>
				{children}
			</Component>
		);
	},
);
CardBody.displayName = "CardBody";

/**
 * The footer container of a card. Usually composed as a direct child of a `Card` component.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-footer
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title Here</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 *   <CardFooter>
 *     <p>Card footer</p>
 *   </CardFooter>
 * </Card>
 * ```
 */
const CardFooter = forwardRef<ComponentRef<"div">, CardProps>(
	({ asChild = false, className, children, ...rest }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component ref={ref} className={cx("px-6 py-3", className)} {...rest}>
				{children}
			</Component>
		);
	},
);
CardFooter.displayName = "CardFooter";

/**
 * The header container of a card. Usually composed as a direct child of a `Card` component.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-header
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title Here</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 *   <CardFooter>
 *     <p>Card footer</p>
 *   </CardFooter>
 * </Card>
 * ```
 */
const CardHeader = forwardRef<ComponentRef<"div">, CardProps>(
	({ asChild = false, className, children, ...rest }, ref) => {
		const Component = asChild ? Slot : "div";

		return (
			<Component ref={ref} className={cx("px-6 py-3", className)} {...rest}>
				{children}
			</Component>
		);
	},
);
CardHeader.displayName = "CardHeader";

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & WithAsChild;

/**
 * The title of a card. Usually composed as a direct child of a `CardHeader`
 * component.
 * Renders as an `h3` element by default, but can be changed to any other
 * element by using the `asChild` prop. It is preferred to use a heading element
 * (h1-h6) for accessibility reasons.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-title
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title Here</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </CardBody>
 *   <CardFooter>
 *     <p>Card footer</p>
 *   </CardFooter>
 * </Card>
 * ```
 */
const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
	({ className, asChild, ...props }, ref) => {
		const Comp = asChild ? Slot : "h3";
		return (
			<Comp
				ref={ref}
				className={cx("text-strong text-base font-medium", className)}
				{...props}
			/>
		);
	},
);
CardTitle.displayName = "CardTitle";

export {
	//,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
};

export type {
	//,
	CardProps,
	CardTitleProps,
};
