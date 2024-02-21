import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../../core";
import type { WithAsChild } from "../../types/src/as-child";
import type { VariantProps } from "../../types/src/variant-props";

const buttonVariants = cva(
	"items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap sm:text-sm",
	{
		variants: {
			appearance: {
				outlined:
					"font-medium inline-flex h-11 sm:h-9 px-3 border bg-form border-primary text-primary hover:bg-primary-muted-hover active:bg-primary-muted-active focus-visible:ring-primary",
				filled:
					"font-medium inline-flex h-11 sm:h-9 px-3 border border-transparent bg-primary text-bg-primary hover:bg-primary-hover active:bg-primary-active focus-visible:border-primary focus-visible:ring-primary",
				ghost:
					"font-medium inline-flex h-11 sm:h-9 px-3 border border-transparent text-primary hover:bg-primary-muted-hover active:bg-primary-muted-active focus-visible:ring-primary",
				link: "inline border-transparent cursor-pointer hover:underline text-primary focus-visible:ring-primary",
			},
			priority: {
				default: "",
				danger: "",
				muted: "",
			},
		},
		defaultVariants: {
			appearance: "ghost",
		},
		compoundVariants: [
			{
				appearance: "ghost",
				priority: "danger",
				class:
					"border-transparent text-danger hover:bg-danger-muted-hover active:bg-danger-muted-active focus-visible:ring-danger",
			},
			{
				appearance: "outlined",
				priority: "danger",
				class:
					"bg-form border-danger text-danger hover:bg-danger-muted-hover active:bg-danger-muted-active focus-visible:ring-danger",
			},
			{
				appearance: "filled",
				priority: "danger",
				class:
					"border-transparent bg-danger hover:bg-danger-hover active:bg-danger-active focus-visible:ring-danger focus-visible:border-danger",
			},
			{
				appearance: "link",
				priority: "danger",
				class: "text-danger focus-visible:ring-danger",
			},
			{
				appearance: "ghost",
				priority: "muted",
				class:
					"border-transparent text-gray-900 hover:bg-neutral-muted-hover active:bg-neutral-muted-active focus-visible:ring-primary",
			},
			{
				appearance: "outlined",
				priority: "muted",
				class:
					"bg-form border-form text-gray-900 hover:bg-neutral-muted-hover active:bg-neutral-muted-active focus-visible:ring-primary focus-visible:border-primary",
			},
			{
				appearance: "filled",
				priority: "muted",
				class:
					"border-transparent bg-neutral hover:bg-neutral-hover active:bg-neutral-active focus-visible:ring-neutral focus-visible:border-neutral",
			},
			{
				appearance: "link",
				priority: "muted",
				class: "text-gray-900 focus-visible:ring-primary",
			},
		],
	},
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

/**
 * The props for the `Button` component.
 */
export type ButtonProps = WithAsChild & ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

/**
 * Renders a button or a component that looks like a button, an interactive
 * element activated by a user with a mouse, keyboard, finger, voice command, or
 * other assistive technology. Once activated, it then performs an action, such
 * as submitting a form or opening a dialog.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, appearance = "ghost", priority = "default", asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return <Comp className={cx(buttonVariants({ appearance, priority, className }))} ref={ref} {...props} />;
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
