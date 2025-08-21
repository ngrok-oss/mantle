import { CircleNotchIcon } from "@phosphor-icons/react/CircleNotch";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Children, cloneElement, isValidElement } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps, WithAsChild } from "../../types/index.js";
import { parseBooleanish } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/index.js";

const iconButtonVariants = cva(
	"inline-flex shrink-0 items-center justify-center rounded-[var(--icon-button-border-radius,0.375rem)] border focus-within:outline-hidden focus-visible:ring-4 disabled:cursor-default disabled:opacity-50",
	{
		variants: {
			/**
			 * Defines the visual style of the Button.
			 */
			appearance: {
				ghost:
					"text-strong focus-visible:ring-focus-accent not-disabled:hover:bg-neutral-500/10 not-disabled:hover:text-strong not-disabled:active:bg-neutral-500/15 not-disabled:active:text-strong border-transparent",
				outlined:
					"border-form bg-form text-strong focus-visible:border-accent-600 focus-visible:ring-focus-accent not-disabled:hover:border-neutral-400 not-disabled:hover:bg-form-hover not-disabled:hover:text-strong not-disabled:active:border-neutral-400 not-disabled:active:bg-neutral-500/10 not-disabled:active:text-strong focus-visible:not-disabled:active:border-accent-600",
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
				xs: "size-6",
				sm: "size-7",
				md: "size-9",
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
	} & (
		| {
				/**
				 * Use the `asChild` prop to compose Radix's functionality onto alternative
				 * element types or your own React components.
				 *
				 * When `asChild` is set to `true`, mantle will not render a default DOM
				 * element, instead cloning the component's child and passing it the props and
				 * behavior required to make it functional.
				 *
				 * asChild can be used as deeply as you need to. This means it is a great way
				 * to compose multiple primitive's behavior together.
				 *
				 * @see https://www.radix-ui.com/docs/primitives/guides/composition#composition
				 */
				asChild: true;
				/**
				 * The default behavior of the button. Possible values are: `"button"`, `"submit"`, and `"reset"`.
				 *
				 * if `asChild` is NOT used: Unlike the native `<button>` element, this prop is required and has no default value.
				 *
				 * If `asChild` IS used: This prop HAS NO EFFECT, is REMOVED, and has no default value. This is because we do not want the `button` `type` to automatically merge with any child anchor `type` attribute because the `anchor` `type` is _strictly different_ than the `button` type, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#type
				 *
				 * @enum
				 * - `"button"`: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.
				 * - `"reset"`: The button resets all the controls to their initial values.
				 * - `"submit"`: The button submits the form data to the server.
				 *
				 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
				 */
				type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
		  }
		| {
				asChild?: false | undefined;
				/**
				 * The default behavior of the button. Possible values are: `"button"`, `"submit"`, and `"reset"`.
				 *
				 * if `asChild` is NOT used: Unlike the native `<button>` element, this prop is required and has no default value.
				 *
				 * If `asChild` IS used: This prop HAS NO EFFECT, is REMOVED, and has no default value. This is because we do not want the `button` `type` to automatically merge with any child anchor `type` attribute because the `anchor` `type` is _strictly different_ than the `button` type, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#type
				 *
				 * @enum
				 * - `"button"`: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.
				 * - `"reset"`: The button resets all the controls to their initial values.
				 * - `"submit"`: The button submits the form data to the server.
				 *
				 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
				 */
				type: Exclude<
					ButtonHTMLAttributes<HTMLButtonElement>["type"],
					undefined
				>;
		  }
	);

/**
 * Renders a button or a component that looks like a button, an interactive
 * element activated by a user with a mouse, keyboard, finger, voice command, or
 * other assistive technology. Once activated, it then performs an action, such
 * as submitting a form or opening a dialog.
 * Renders only a single icon as children with an accessible, screen-reader-only label.
 *
 * @see https://mantle.ngrok.com/components/button#api-icon-button
 *
 * @example
 * ```tsx
 * <IconButton
 *   type="button"
 *   icon={<TrashIcon />}
 *   label="Delete item"
 *   appearance="ghost"
 *   size="sm"
 * />
 * ```
 */
function IconButton({
	"aria-disabled": _ariaDisabled,
	appearance,
	asChild = false,
	children,
	className,
	disabled: _disabled,
	icon: propIcon,
	isLoading = false,
	label,
	size,
	type,
	...props
}: IconButtonProps) {
	const disabled = parseBooleanish(_ariaDisabled ?? _disabled ?? isLoading);
	const icon = isLoading ? (
		<CircleNotchIcon className="animate-spin" />
	) : (
		propIcon
	);

	const buttonProps = {
		"aria-disabled": disabled,
		"data-icon-button": true,
		"data-loading": isLoading,
		"data-size": size,
		className: cx(
			"icon-button",
			iconButtonVariants({ appearance, isLoading, size }),
			className,
		),
		disabled,
		...props,
	};

	if (asChild) {
		const singleChild = Children.only(children);
		const isValidChild = isValidElement(singleChild);

		return (
			<Slot {...buttonProps}>
				{isValidChild && cloneElement(singleChild, {}, <Icon svg={icon} />)}
			</Slot>
		);
	}

	return (
		<button {...buttonProps} type={type}>
			<span className="sr-only">{label}</span>
			<Icon svg={icon} />
		</button>
	);
}
IconButton.displayName = "IconButton";

export {
	//,
	IconButton,
	iconButtonVariants,
};

export type {
	//,
	IconButtonProps,
};
