import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../../core";
import type { WithAsChild } from "../../types/src/as-child";
import type { VariantProps } from "../../types/src/variant-props";

const buttonVariants = cva(
	"items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50 sm:text-sm gap-1",
	{
		variants: {
			appearance: {
				outlined:
					"inline-flex h-11 border border-blue-600 hover:border-blue-700 active:border-blue-700 bg-form px-3 font-medium text-blue-600 hover:text-blue-700 active:text-blue-700 hover:bg-blue-500/10 focus-visible:ring-focus-blue active:bg-blue-500/15 sm:h-9",
				filled:
					"inline-flex h-11 border border-transparent bg-filled-blue px-3 font-medium text-on-filled hover:bg-filled-blue-hover focus-visible:border-blue-600 focus-visible:ring-focus-blue active:bg-filled-blue-active sm:h-9",
				ghost:
					"inline-flex h-11 border border-transparent px-3 font-medium text-blue-600 hover:text-blue-700 active:text-blue-700 hover:bg-blue-500/10 focus-visible:ring-focus-blue active:bg-blue-500/15 sm:h-9",
				link: "inline cursor-pointer border-transparent text-blue-600 hover:underline focus-visible:ring-focus-blue",
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
					"border-transparent text-red-600 hover:text-red-700 active:text-red-700 hover:bg-red-500/10 focus-visible:ring-focus-red active:bg-red-500/15",
			},
			{
				appearance: "outlined",
				priority: "danger",
				class:
					"border-red-600 hover:border-red-700 active:border-red-700 bg-form text-red-600 hover:text-red-700 active:text-red-700 hover:bg-red-500/10 focus-visible:ring-focus-red active:bg-red-500/15",
			},
			{
				appearance: "filled",
				priority: "danger",
				class:
					"border-transparent bg-filled-red hover:bg-filled-red-hover focus-visible:border-red-600 focus-visible:ring-focus-red active:bg-filled-red-active",
			},
			{
				appearance: "link",
				priority: "danger",
				class: "text-red-600 focus-visible:ring-focus-red",
			},
			{
				appearance: "ghost",
				priority: "neutral",
				class:
					"text-strong border-transparent hover:bg-gray-500/10 hover:text-strong hover:bg-gray-500/10 active:text-strong focus-visible:ring-focus-blue active:bg-gray-500/15",
			},
			{
				appearance: "outlined",
				priority: "neutral",
				class:
					"text-strong border-form bg-form hover:bg-form-hover focus-visible:border-blue-600 focus-visible:active:border-blue-600 hover:border-gray-400 active:border-gray-400 hover:text-strong active:text-strong focus-visible:ring-focus-blue active:bg-gray-500/10",
			},
			{
				appearance: "filled",
				priority: "neutral",
				class:
					"border-transparent bg-filled-gray hover:bg-filled-gray-hover focus-visible:border-gray-600 focus-visible:ring-focus-gray active:bg-filled-gray-active",
			},
			{
				appearance: "link",
				priority: "neutral",
				class: "text-strong focus-visible:ring-focus-blue",
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
