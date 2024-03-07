import { CircleNotch } from "@phosphor-icons/react/CircleNotch";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import {
	Children,
	cloneElement,
	forwardRef,
	HTMLAttributes,
	isValidElement,
	ReactNode,
	type ButtonHTMLAttributes,
} from "react";
import { cx } from "../../core";
import type { WithAsChild } from "../../types/src/as-child";
import type { VariantProps } from "../../types/src/variant-props";

const buttonVariants = cva(
	"group items-center justify-center whitespace-nowrap rounded-md [&>*]:focus-within:outline-none focus-within:outline-none group-focus-visible:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50 sm:text-sm gap-1",
	{
		variants: {
			appearance: {
				outlined:
					"inline-flex h-11 border border-accent-600 hover:border-accent-700 active:border-accent-700 bg-form px-3 font-medium text-accent-600 hover:text-accent-700 active:text-accent-700 hover:bg-accent-500/10 focus-visible:ring-focus-accent active:bg-accent-500/15 sm:h-9",
				filled:
					"inline-flex h-11 border border-transparent bg-filled-accent px-3 font-medium text-on-filled hover:bg-filled-accent-hover focus-visible:border-accent-600 focus-visible:ring-focus-accent active:bg-filled-accent-active sm:h-9",
				ghost:
					"inline-flex h-11 border border-transparent px-3 font-medium text-accent-600 hover:text-accent-700 active:text-accent-700 hover:bg-accent-500/10 focus-visible:ring-focus-accent active:bg-accent-500/15 sm:h-9",
				link: "group inline cursor-pointer border-transparent text-accent-600 hover:underline focus-visible:ring-focus-accent",
			},
			priority: {
				default: "",
				danger: "",
				neutral: "",
			},
			state: {
				pending: "opacity-50",
				idle: "",
			},
			iconPlacement: {
				left: "pl-2.5",
				right: "pr-2.5",
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
					"border-transparent text-danger-600 hover:text-danger-700 active:text-danger-700 hover:bg-danger-500/10 focus-visible:ring-focus-danger active:bg-danger-500/15",
			},
			{
				appearance: "outlined",
				priority: "danger",
				class:
					"border-danger-600 hover:border-danger-700 active:border-danger-700 bg-form text-danger-600 hover:text-danger-700 active:text-danger-700 hover:bg-danger-500/10 focus-visible:ring-focus-danger active:bg-danger-500/15",
			},
			{
				appearance: "filled",
				priority: "danger",
				class:
					"border-transparent bg-filled-danger hover:bg-filled-danger-hover focus-visible:border-danger-600 focus-visible:ring-focus-danger active:bg-filled-danger-active",
			},
			{
				appearance: "link",
				priority: "danger",
				class: "text-danger-600 focus-visible:ring-focus-danger",
			},
			{
				appearance: "ghost",
				priority: "neutral",
				class:
					"text-strong border-transparent hover:text-strong hover:bg-neutral-500/10 active:text-strong focus-visible:ring-focus-accent active:bg-neutral-500/15",
			},
			{
				appearance: "outlined",
				priority: "neutral",
				class:
					"text-strong border-form bg-form hover:bg-form-hover focus-visible:border-accent-600 focus-visible:active:border-accent-600 hover:border-neutral-400 active:border-neutral-400 hover:text-strong active:text-strong focus-visible:ring-focus-accent active:bg-neutral-500/10",
			},
			{
				appearance: "filled",
				priority: "neutral",
				class:
					"border-transparent bg-filled-neutral hover:bg-filled-neutral-hover focus-visible:border-neutral-600 focus-visible:ring-focus-neutral active:bg-filled-neutral-active",
			},
			{
				appearance: "link",
				priority: "neutral",
				class: "text-strong focus-visible:ring-focus-accent",
			},
		],
	},
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

/**
 * The props for the `Button` component.
 */
export type ButtonProps = WithAsChild &
	ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariants & {
		icon?: ReactNode;
	};

/**
 * Renders a button or a component that looks like a button, an interactive
 * element activated by a user with a mouse, keyboard, finger, voice command, or
 * other assistive technology. Once activated, it then performs an action, such
 * as submitting a form or opening a dialog.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			appearance = "ghost",
			asChild = false,
			children,
			className,
			icon: propIcon,
			iconPlacement = "left",
			priority = "default",
			state = "idle",
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		const icon = state === "pending" ? <CircleNotch className="animate-spin" /> : propIcon;

		if (asChild) {
			const singleChild = Children.only(children);

			// Access the child's children
			const grandchildren = isValidElement(singleChild) ? singleChild.props?.children : null;

			return (
				<Comp
					onClickCapture={(event) => {
						if (state === "pending") {
							event.preventDefault();
							event.stopPropagation();
						}
						props.onClickCapture?.(event);
					}}
					className={cx(
						buttonVariants({ appearance, priority, state, iconPlacement: icon ? iconPlacement : undefined, className }),
					)}
					ref={ref}
					{...props}
				>
					{cloneElement(singleChild, {
						children: (
							<span
								className={clsx(
									"inline-flex items-center gap-1.5 focus-within:outline-none focus-visible:outline-none",
									appearance === "link" && "group-hover:underline",
								)}
							>
								{icon && iconPlacement === "left" && <ButtonIcon>{icon}</ButtonIcon>}
								{grandchildren}
								{icon && iconPlacement === "right" && <ButtonIcon>{icon}</ButtonIcon>}
							</span>
						),
					})}
				</Comp>
			);
		}

		return (
			<button
				onClickCapture={(event) => {
					if (state === "pending") {
						event.preventDefault();
						event.stopPropagation();
					}
					props.onClickCapture?.(event);
				}}
				className={cx(
					buttonVariants({ appearance, priority, state, iconPlacement: icon ? iconPlacement : undefined, className }),
				)}
				ref={ref}
				{...props}
			>
				<span
					className={clsx(
						"inline-flex items-center gap-1.5 focus-within:outline-none focus-visible:outline-none",
						appearance === "link" && "group-hover:underline",
					)}
				>
					{icon && iconPlacement === "left" && <ButtonIcon>{icon}</ButtonIcon>}
					{children}
					{icon && iconPlacement === "right" && <ButtonIcon>{icon}</ButtonIcon>}
				</span>
			</button>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };

const ButtonIcon = ({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
	<span className={cx("[&>svg]:size-5", className)} {...props}>
		{children}
	</span>
);
