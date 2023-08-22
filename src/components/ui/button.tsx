import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium border border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			priority: {
				default: "border-brand-primary-600 text-brand-primary-600 bg-white hover:bg-brand-primary-50 active:bg-brand-primary-100",
				primary: "bg-brand-primary-500 text-[#fff] hover:bg-brand-primary-600 active:bg-brand-primary-700",
				secondary: "bg-brand-primary-50 border-brand-primary-300 text-brand-primary-900 hover:bg-brand-primary-100 active:bg-brand-primary-200",
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
	},
);

export type ButtonProps = {
	/**
	 * Use the `asChild` prop to compose Radix's functionality onto alternative
	 * element types or your own React components.
	 *
	 * All Radix primitive parts that render a DOM element accept an `asChild`
	 * prop. When `asChild` is set to `true`, Radix will not render a default DOM
	 * element, instead cloning the part's child and passing it the props and
	 * behavior required to make it functional.
	 *
	 * asChild can be used as deeply as you need to. This means it is a great way
	 * to compose multiple primitive's behavior together.
	 *
	 * @see https://www.radix-ui.com/docs/primitives/guides/composition#composition
	 */
	asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, priority, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return <Comp className={cn(buttonVariants({ priority, size, className }))} ref={ref} {...props} />;
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
