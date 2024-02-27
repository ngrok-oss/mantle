import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../../core";
import type { WithAsChild } from "../../types/src/as-child";
import type { VariantProps } from "../../types/src/variant-props";

const buttonVariants = cva(
	"items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap sm:text-sm aria-disabled:opacity-50",
	{
		variants: {
			appearance: {
				outlined:
					"font-medium inline-flex h-11 sm:h-9 px-3 border bg-form border-accent text-accent hover:bg-accent-muted-hover active:bg-accent-muted-active focus-visible:ring-accent",
				filled:
					"font-medium inline-flex h-11 sm:h-9 px-3 border border-transparent bg-accent text-on-bg-accent hover:bg-accent-hover active:bg-accent-active focus-visible:border-accent focus-visible:ring-accent",
				ghost:
					"font-medium inline-flex h-11 sm:h-9 px-3 border border-transparent text-accent hover:bg-accent-muted-hover active:bg-accent-muted-active focus-visible:ring-accent",
				link: "inline border-transparent cursor-pointer hover:underline text-accent focus-visible:ring-accent",
			},
			priority: {
				default: "",
				danger: "",
				neutral: "",
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
				priority: "neutral",
				class:
					"border-transparent text-gray-900 hover:bg-neutral-muted-hover active:bg-neutral-muted-active focus-visible:ring-accent",
			},
			{
				appearance: "outlined",
				priority: "neutral",
				class:
					"bg-form border-form text-gray-900 hover:bg-neutral-muted-hover active:bg-neutral-muted-active focus-visible:ring-accent focus-visible:border-accent",
			},
			{
				appearance: "filled",
				priority: "neutral",
				class:
					"border-transparent bg-neutral hover:bg-neutral-hover active:bg-neutral-active focus-visible:ring-neutral focus-visible:border-neutral",
			},
			{
				appearance: "link",
				priority: "neutral",
				class: "text-gray-900 focus-visible:ring-accent",
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
