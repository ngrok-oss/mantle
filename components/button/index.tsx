import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../cx";
import type { WithAsChild } from "../types/as-child";
import type { VariantProps } from "../types/variant-props";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium border focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			priority: {
				default:
					"border-gray-300 text-gray-800 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-blue-600/25 focus-visible:border-blue-500",
				primary:
					"bg-blue-500 text-button hover:bg-blue-600 active:bg-blue-700 focus-visible:ring-blue-600/25 border-transparent",
				secondary:
					"bg-gray-50 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-600/25",
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
				class:
					"border-red-300 text-red-500 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600/25 focus-visible:border-red-500",
			},
			{
				priority: "primary",
				state: "danger",
				class: "bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-600/25",
			},
			{
				priority: "secondary",
				state: "danger",
				class: "border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600/25",
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
