import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
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
 * <Card.Root>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 * </Card.Root>
 *
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Card Title Here</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <p>Card footer</p>
 *   </Card.Footer>
 * </Card.Root>
 * ```
 */
function Root({ asChild = false, className, children, ...rest }: CardProps) {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			className={cx(
				"divide-card-muted border-card bg-card relative divide-y rounded-md border",
				className,
			)}
			{...rest}
		>
			{children}
		</Component>
	);
}
Root.displayName = "CardRoot";

/**
 * The main content of a card. Usually composed as a direct child of a `Card` component.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-body
 *
 * @example
 * ```tsx
 * <Card.Root>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 * </Card.Root>
 *
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Card Title Here</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <p>Card footer</p>
 *   </Card.Footer>
 * </Card.Root>
 * ```
 */
function Body({ asChild = false, className, children, ...rest }: CardProps) {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			//
			className={cx("p-6", className)}
			{...rest}
		>
			{children}
		</Component>
	);
}
Body.displayName = "CardBody";

/**
 * The footer container of a card. Usually composed as a direct child of a `Card` component.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-footer
 *
 * @example
 * ```tsx
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Card Title Here</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <p>Card footer</p>
 *   </Card.Footer>
 * </Card.Root>
 * ```
 */
function Footer({ asChild = false, className, children, ...rest }: CardProps) {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			//
			className={cx("px-6 py-3", className)}
			{...rest}
		>
			{children}
		</Component>
	);
}
Footer.displayName = "CardFooter";

/**
 * The header container of a card. Usually composed as a direct child of a `Card` component.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-header
 *
 * @example
 * ```tsx
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Card Title Here</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <p>Card footer</p>
 *   </Card.Footer>
 * </Card.Root>
 * ```
 */
function Header({ asChild = false, className, children, ...rest }: CardProps) {
	const Component = asChild ? Slot : "div";

	return (
		<Component className={cx("px-6 py-3", className)} {...rest}>
			{children}
		</Component>
	);
}
Header.displayName = "CardHeader";

type CardTitleProps = ComponentProps<"h3"> & WithAsChild;

/**
 * The title of a card. Usually composed as a direct child of a `Card.Header`
 * component.
 * Renders as an `h3` element by default, but can be changed to any other
 * element by using the `asChild` prop. It is preferred to use a heading element
 * (h1-h6) for accessibility reasons.
 *
 * @see https://mantle.ngrok.com/components/card#api-card-title
 *
 * @example
 * ```tsx
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Card Title Here</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <p>Card footer</p>
 *   </Card.Footer>
 * </Card.Root>
 * ```
 */
function Title({ className, asChild, ...props }: CardTitleProps) {
	const Comp = asChild ? Slot : "h3";
	return (
		<Comp
			//
			className={cx("text-strong text-base font-medium", className)}
			{...props}
		/>
	);
}
Title.displayName = "CardTitle";

/**
 * A container that can be used to display content in a box resembling a
 * physical card.
 *
 * @see https://mantle.ngrok.com/components/card
 *
 * @example
 * ```tsx
 * <Card.Root>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 * </Card.Root>
 *
 * <Card.Root>
 *   <Card.Header>
 *     <Card.Title>Card Title Here</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <p>Laborum in aute officia adipisicing elit velit.</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <p>Card footer</p>
 *   </Card.Footer>
 * </Card.Root>
 * ```
 */
const Card = {
	/**
	 * A container that can be used to display content in a box resembling a physical card.
	 *
	 * @see https://mantle.ngrok.com/components/card#api-card-root
	 *
	 * @example
	 * ```tsx
	 * <Card.Root>
	 *   <Card.Body>
	 *     <p>Laborum in aute officia adipisicing elit velit.</p>
	 *   </Card.Body>
	 * </Card.Root>
	 * ```
	 */
	Root,
	/**
	 * The main content of a card.
	 *
	 * @see https://mantle.ngrok.com/components/card#api-card-body
	 *
	 * @example
	 * ```tsx
	 * <Card.Root>
	 *   <Card.Body>
	 *     <p>Laborum in aute officia adipisicing elit velit.</p>
	 *   </Card.Body>
	 * </Card.Root>
	 * ```
	 */
	Body,
	/**
	 * The footer container of a card.
	 *
	 * @see https://mantle.ngrok.com/components/card#api-card-footer
	 *
	 * @example
	 * ```tsx
	 * <Card.Root>
	 *   <Card.Header>
	 *     <Card.Title>Card Title Here</Card.Title>
	 *   </Card.Header>
	 *   <Card.Body>
	 *     <p>Laborum in aute officia adipisicing elit velit.</p>
	 *   </Card.Body>
	 *   <Card.Footer>
	 *     <p>Card footer</p>
	 *   </Card.Footer>
	 * </Card.Root>
	 * ```
	 */
	Footer,
	/**
	 * The header container of a card.
	 *
	 * @see https://mantle.ngrok.com/components/card#api-card-header
	 *
	 * @example
	 * ```tsx
	 * <Card.Root>
	 *   <Card.Header>
	 *     <Card.Title>Card Title Here</Card.Title>
	 *   </Card.Header>
	 *   <Card.Body>
	 *     <p>Laborum in aute officia adipisicing elit velit.</p>
	 *   </Card.Body>
	 *   <Card.Footer>
	 *     <p>Card footer</p>
	 *   </Card.Footer>
	 * </Card.Root>
	 * ```
	 */
	Header,
	/**
	 * The title of a card.
	 *
	 * @see https://mantle.ngrok.com/components/card#api-card-title
	 *
	 * @example
	 * ```tsx
	 * <Card.Root>
	 *   <Card.Header>
	 *     <Card.Title>Card Title Here</Card.Title>
	 *   </Card.Header>
	 *   <Card.Body>
	 *     <p>Laborum in aute officia adipisicing elit velit.</p>
	 *   </Card.Body>
	 *   <Card.Footer>
	 *     <p>Card footer</p>
	 *   </Card.Footer>
	 * </Card.Root>
	 * ```
	 */
	Title,
} as const;

export {
	//,
	Card,
};

export type {
	//,
	CardProps,
	CardTitleProps,
};
