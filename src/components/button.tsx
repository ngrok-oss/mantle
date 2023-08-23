import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cx } from "../lib/cx";
import type { WithAsChild } from "../types/as-child";
import type { VariantProps } from "../types/variant-props";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium border border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			priority: {
				default:
					"border-brand-primary-600 text-brand-primary-600 dark:text-brand-primary-800 bg-white hover:bg-brand-primary-50 active:bg-brand-primary-100",
				primary: "bg-brand-primary-500 text-[#fff] hover:bg-brand-primary-600 active:bg-brand-primary-700",
				secondary:
					"bg-brand-primary-50 border-brand-primary-300 text-brand-primary-900 hover:bg-brand-primary-100 active:bg-brand-primary-200",
			},
			state: {
				default: "",
				danger: "",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3 text-sm",
				lg: "h-12 rounded-md px-6 text-lg",
			},
		},
		defaultVariants: {
			priority: "default",
			size: "default",
		},
		compoundVariants: [
			{
				priority: "default",
				state: "danger",
				class: "border-danger-600 text-danger-600 hover:bg-danger-50 active:bg-danger-100",
			},
			{
				priority: "primary",
				state: "danger",
				class: "bg-danger-500 hover:bg-danger-600 active:bg-danger-700",
			},
			{
				priority: "secondary",
				state: "danger",
				class: "bg-danger-50 border-danger-300 text-danger-900 hover:bg-danger-100 active:bg-danger-200",
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
	({ className, priority = "default", size = "default", state = "default", asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return <Comp className={cx(buttonVariants({ priority, size, state, className }))} ref={ref} {...props} />;
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
