import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../../core";
import type { WithAsChild } from "../../types/src/as-child";
import type { VariantProps } from "../../types/src/variant-props";

const buttonVariants = cva(
	"items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50 sm:text-sm",
	{
		variants: {
			appearance: {
				outlined:
					"inline-flex h-11 border border-accent-600 bg-form px-3 font-medium text-accent-600 hover:bg-accent-a50 focus-visible:ring-accent active:bg-accent-a100 sm:h-9",
				filled:
					"inline-flex h-11 border border-transparent bg-accent px-3 font-medium text-inverted hover:bg-accent-hover focus-visible:border-accent-600 focus-visible:ring-accent active:bg-accent-active sm:h-9",
				ghost:
					"inline-flex h-11 border border-transparent px-3 font-medium text-accent-600 hover:bg-accent-a50 focus-visible:ring-accent active:bg-accent-a100 sm:h-9",
				link: "inline cursor-pointer border-transparent text-accent-600 hover:underline focus-visible:ring-accent",
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
					"border-transparent text-danger-600 hover:bg-a50 focus-visible:ring-danger active:bg-danger-a100",
			},
			{
				appearance: "outlined",
				priority: "danger",
				class:
					"border-danger-600 bg-form text-danger-600 hover:bg-a50 focus-visible:ring-danger active:bg-danger-a100",
			},
			{
				appearance: "filled",
				priority: "danger",
				class:
					"border-transparent bg-danger hover:bg-danger-hover focus-visible:border-danger-600 focus-visible:ring-danger active:bg-danger-active",
			},
			{
				appearance: "link",
				priority: "danger",
				class: "text-danger-600 focus-visible:ring-danger",
			},
			{
				appearance: "ghost",
				priority: "neutral",
				class:
					"text-strong border-transparent hover:bg-neutral-a50 focus-visible:ring-accent active:bg-neutral-a100",
			},
			{
				appearance: "outlined",
				priority: "neutral",
				class:
					"text-strong border-form bg-form hover:bg-neutral-a50 focus-visible:border-accent-600 focus-visible:ring-accent active:bg-neutral-a100",
			},
			{
				appearance: "filled",
				priority: "neutral",
				class:
					"border-transparent bg-neutral hover:bg-neutral-hover focus-visible:border-neutral-600 focus-visible:ring-neutral active:bg-neutral-active",
			},
			{
				appearance: "link",
				priority: "neutral",
				class: "text-strong focus-visible:ring-accent",
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
