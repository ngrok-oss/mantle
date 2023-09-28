import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cx } from "@/lib/cx";
import type { WithAsChild } from "@/types/as-child";
import type { VariantProps } from "@/types/variant-props";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			priority: {
				default:
					"border-brand-primary-500 text-brand-primary-500 bg-white hover:bg-brand-primary-50 active:bg-brand-primary-100 focus-visible:ring-brand-primary-600/25",
				primary:
					"bg-brand-primary-500 text-button hover:bg-brand-primary-600 active:bg-brand-primary-700 focus-visible:ring-brand-primary-600/25",
				secondary:
					"bg-brand-primary-50 border-brand-primary-200 text-brand-primary-900 hover:bg-brand-primary-100 active:bg-brand-primary-200 focus-visible:ring-brand-primary-600/25",
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
				class: "border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600/25",
			},
			{
				priority: "primary",
				state: "danger",
				class: "bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-600/25",
			},
			{
				priority: "secondary",
				state: "danger",
				class: "bg-red-50 border-red-200 text-red-900 hover:bg-red-100 active:bg-red-200 focus-visible:ring-red-600/25",
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
