import { CircleNotch } from "@phosphor-icons/react/CircleNotch";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, Children, cloneElement, forwardRef, isValidElement, MouseEvent, ReactNode } from "react";
import { cx } from "../../cx";
import { Icon } from "../../icon";
import type { VariantProps, WithAsChild } from "../../types";

const iconButtonVariants = cva(
	"inline-flex items-center justify-center rounded-md border focus-within:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50",
	{
		variants: {
			/**
			 * Defines the visual style of the Button.
			 */
			appearance: {
				ghost:
					"border-transparent text-strong hover:bg-neutral-500/10 hover:text-strong focus-visible:ring-focus-accent active:bg-neutral-500/15 active:text-strong",
				outlined:
					"border-form bg-form text-strong hover:border-neutral-400 hover:bg-form-hover hover:text-strong focus-visible:border-accent-600 focus-visible:ring-focus-accent active:border-neutral-400 active:bg-neutral-500/10 active:text-strong focus-visible:active:border-accent-600",
			},
			/**
			 * Whether or not the button is in a loading state, default `false`. Setting `isLoading` will
			 * replace the `icon` with a spinner.
			 * It will also disable user interaction with the button and set `aria-disabled`.
			 */
			isLoading: {
				false: "",
				true: "opacity-50",
			},
			/**
			 * The size of the IconButton.
			 */
			size: {
				xs: "size-7 sm:size-6",
				sm: "size-9 sm:size-7",
				md: "size-11 sm:size-9",
			},
		},
		defaultVariants: {
			appearance: "outlined",
			size: "md",
		},
	},
);

type IconButtonVariants = VariantProps<typeof iconButtonVariants>;

/**
 * The props for the `Button` component.
 */
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	WithAsChild &
	IconButtonVariants & {
		/**
		 * The accessible label for the icon. This label will be visually hidden but announced to screen reader users, similar to alt text for img tags.
		 */
		label: string;
		/**
		 * An icon to render inside the button. If the `state` is `"pending"`, then
		 * the icon will automatically be replaced with a spinner.
		 */
		icon: ReactNode;
		/**
		 * The default behavior of the button. Possible values are: `"button"`, `"submit"`, and `"reset"`.
		 * Unlike the native `<button>` element, this prop defaults to `"button"`.
		 * - `"button"`: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.
		 * - `"reset"`: The button resets all the controls to their initial values.
		 * - `"submit"`: The button submits the form data to the server.
		 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
		 * @default "button"
		 */
		type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	};

/**
 * Renders a button or a component that looks like a button, an interactive
 * element activated by a user with a mouse, keyboard, finger, voice command, or
 * other assistive technology. Once activated, it then performs an action, such
 * as submitting a form or opening a dialog.
 * Renders only a single icon as children with an accessible, screen-reader-only label.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			"aria-disabled": _ariaDisabled,
			appearance,
			asChild = false,
			children,
			className,
			isLoading = false,
			icon: propIcon,
			label,
			onClickCapture,
			size,
			type = "button",
			...props
		},
		ref,
	) => {
		const ariaDisabled = _ariaDisabled ?? isLoading;

		const _onClickCapture = (event: MouseEvent<HTMLButtonElement>) => {
			if (isLoading) {
				event.preventDefault();
				event.stopPropagation();
			}
			onClickCapture?.(event);
		};

		const buttonProps = {
			"aria-disabled": ariaDisabled,
			className: cx(iconButtonVariants({ appearance, isLoading, size }), className),
			"data-loading": isLoading,
			onClickCapture: _onClickCapture,
			ref,
			type,
			...props,
		};

		if (asChild) {
			const singleChild = Children.only(children);
			const isValidChild = isValidElement(singleChild);
			const icon = isLoading ? <CircleNotch className="animate-spin" /> : propIcon;

			return <Slot {...buttonProps}>{isValidChild && cloneElement(singleChild, {}, <Icon svg={icon} />)}</Slot>;
		}

		const icon = isLoading ? <CircleNotch className="animate-spin" /> : propIcon;

		return (
			<button {...buttonProps}>
				<span className="sr-only">{label}</span>
				<Icon svg={icon} />
			</button>
		);
	},
);
IconButton.displayName = "IconButton";

export { IconButton };
export type { IconButtonProps };
