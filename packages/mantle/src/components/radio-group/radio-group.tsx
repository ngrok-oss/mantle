"use client";

import {
	Radio as HeadlessRadio,
	RadioGroup as HeadlessRadioGroup,
} from "@headlessui/react";
import type {
	RadioGroupProps as HeadlessRadioGroupProps,
	RadioProps as HeadlessRadioProps,
} from "@headlessui/react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import {
	Children,
	cloneElement,
	createContext,
	forwardRef,
	isValidElement,
	useContext,
	useRef,
} from "react";
import type {
	ComponentRef,
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
} from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import { isInput } from "../input/is-input.js";

type RadioGroupProps = PropsWithChildren<
	Omit<HeadlessRadioGroupProps, "as" | "children">
>;

/**
 * A group of radio items. It manages the state of the children radios. Unstyled and simple.
 * Used as the root component for grouping related radio items where only one can be selected.
 *
 * @see https://mantle.ngrok.com/components/radio-group#api-radio-group
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioGroup.Item value="option1">
 *     <RadioGroup.Indicator />
 *     <span>Option 1</span>
 *   </RadioGroup.Item>
 *   <RadioGroup.Item value="option2">
 *     <RadioGroup.Indicator />
 *     <span>Option 2</span>
 *   </RadioGroup.Item>
 * </RadioGroup>
 * ```
 */
const Root = forwardRef<
	ComponentRef<typeof HeadlessRadioGroup>,
	RadioGroupProps
>((props, ref) => <HeadlessRadioGroup {...props} ref={ref} />);
Root.displayName = "RadioGroup";

/**
 * The shape of the radio state context.
 */
type RadioStateContextValue = {
	autofocus: boolean;
	checked: boolean;
	disabled: boolean;
	focus: boolean;
	hover: boolean;
};

/**
 * The radio state. It's used to pass the state of the radio to its children components.
 * It's used internally by the radio components to manage the state/style of the radio items.
 * Used in place of css classes to avoid specificity issues and slightly improve performance.
 */
const RadioStateContext = createContext<RadioStateContextValue>({
	autofocus: false,
	checked: false,
	disabled: false,
	focus: false,
	hover: false,
});

type RadioItemProps = Omit<HeadlessRadioProps, "children"> & PropsWithChildren;

/**
 * A simple radio item that can be used inside a radio group. The "conventional" use-case.
 * Must be a child of `RadioGroup`.
 *
 * @see https://mantle.ngrok.com/components/radio-group#api-radio-item
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioGroup.Item value="option1">
 *     <RadioGroup.Indicator />
 *     <span>Option 1</span>
 *   </RadioGroup.Item>
 * </RadioGroup>
 * ```
 */
const Item = forwardRef<ComponentRef<"div">, RadioItemProps>(
	({ children, className, ...props }, ref) => (
		<HeadlessRadio
			className={cx(
				"group/radio aria-enabled:cursor-pointer [&_label]:cursor-inherit flex cursor-default gap-2 py-1 text-sm focus:outline-none",
				className,
			)}
			as="div"
			{...props}
			ref={ref}
		>
			{(ctx) => (
				<RadioStateContext.Provider value={ctx}>
					{children}
				</RadioStateContext.Provider>
			)}
		</HeadlessRadio>
	),
);
Item.displayName = "RadioItem";

type RadioIndicatorProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
	children?: ReactNode | ((context: RadioStateContextValue) => ReactNode);
};

/**
 * The default radio indicator.
 * @private
 */
const DefaultRadioIndicator = ({
	checked,
	disabled,
	focus,
	hover,
}: RadioStateContextValue) => (
	<span
		className={cx(
			"border-form flex size-4 items-center justify-center rounded-full border shrink-0",
			disabled && "cursor-default opacity-50",
			checked && "border-accent-500 bg-accent-500",
			focus && !disabled && "border-accent-600 ring-focus-accent ring-4",
			hover && "border-accent-600",
		)}
	>
		{checked && <span className="size-2 rounded-full bg-[#fff] shrink-0" />}
	</span>
);

/**
 * The selection indicator for any radio item.
 * Use it as a child of `RadioGroup.Item`, `RadioGroup.ListItem`, or `RadioGroup.Card`.
 * By default, it's a circle that changes color when checked.
 * You can customize the indicator by passing children:
 * - a different component
 * - a render-props function that receives the radio state context and should return a component.
 *
 * @see https://mantle.ngrok.com/components/radio-group#api-radio-indicator
 *
 * @example
 * ```tsx
 * <RadioGroup.Item value="option1">
 *   <RadioGroup.Indicator />
 *   <span>Option 1</span>
 * </RadioGroup.Item>
 * ```
 */
const Indicator = ({ children, className, ...props }: RadioIndicatorProps) => {
	const ctx = useContext(RadioStateContext);

	return (
		<div
			className={cx(
				"radio-indicator inline-flex size-5 select-none items-center justify-center shrink-0",
				className,
			)}
			{...props}
		>
			{children == null ? (
				<DefaultRadioIndicator {...ctx} />
			) : typeof children === "function" ? (
				children(ctx)
			) : (
				children
			)}
		</div>
	);
};
Indicator.displayName = "RadioIndicator";

/**
 * A group of radio list items. Use RadioGroup.ListItem as direct children.
 */
const List = forwardRef<ComponentRef<typeof Root>, RadioGroupProps>(
	({ className, ...props }, ref) => {
		return (
			<Root className={clsx("-space-y-px", className)} {...props} ref={ref} />
		);
	},
);
List.displayName = "RadioGroupList";

type RadioListItemProps = RadioItemProps;

/**
 * A radio list item that is used inside a `RadioGroup.List`.
 */
const ListItem = forwardRef<ComponentRef<"div">, RadioListItemProps>(
	({ children, className, ...props }, ref) => {
		return (
			<HeadlessRadio
				as="div"
				className={cx(
					"group/radio border-form [&_label]:cursor-inherit relative flex select-none gap-2 border px-3 py-2 text-sm",
					"aria-enabled:cursor-pointer focus:outline-none",
					"focus-visible:ring-focus-accent aria-enabled:focus-visible:border-accent-600 focus-visible:ring-4",
					"first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
					"aria-disabled:border-form/50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
					"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 dark-high-contrast:aria-checked:border-accent-400 high-contrast:aria-checked:border-accent-400 not-aria-disabled:hover:aria-checked:border-accent-600",
					"has-[.radio-indicator:first-child]:pl-2 has-[.radio-indicator:last-child]:pr-2",
					className,
				)}
				ref={ref}
				{...props}
			>
				{(ctx) => (
					<>
						<RadioStateContext.Provider value={ctx}>
							{children}
						</RadioStateContext.Provider>
					</>
				)}
			</HeadlessRadio>
		);
	},
);
ListItem.displayName = "RadioListItem";

type RadioItemContentProps = HTMLAttributes<HTMLDivElement> & WithAsChild;

type RadioCardProps = RadioItemProps;

/**
 * A radio card item. Use it as a child of `RadioGroup`
 */
const Card = forwardRef<ComponentRef<"div">, RadioCardProps>(
	({ children, className, ...props }, ref) => {
		return (
			<HeadlessRadio
				as="div"
				className={clsx(
					"group/radio border-card bg-card [&_label]:cursor-inherit relative rounded-md border p-4 text-sm",
					"aria-enabled:cursor-pointer focus:outline-none",
					"focus-visible:ring-focus-accent aria-enabled:focus-visible:border-accent-600 focus-visible:ring-4",
					"first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
					"aria-disabled:border-form/50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
					"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 aria-enabled:hover:aria-checked:border-accent-600 dark-high-contrast:aria-checked:border-accent-400 high-contrast:aria-checked:border-accent-400",
					className,
				)}
				{...props}
				ref={ref}
			>
				{(ctx) => (
					<>
						<RadioStateContext.Provider value={ctx}>
							{children}
						</RadioStateContext.Provider>
					</>
				)}
			</HeadlessRadio>
		);
	},
);
Card.displayName = "RadioCard";

/**
 * The content of any radio item. Use it to wrap any labels, descriptions, or content of a radio item.
 * Use it as a child of `RadioGroup.Item`, `RadioGroup.ListItem`, or `RadioGroup.Card`.
 */
const ItemContent = ({
	asChild = false,
	children,
	className,
	...props
}: RadioItemContentProps) => {
	const ctx = useContext(RadioStateContext);
	const Component = asChild ? Slot : "div";

	return (
		<Component
			className={clsx(
				"min-w-0 flex-1",
				ctx.disabled && "opacity-50",
				className,
			)}
			{...props}
		>
			{children}
		</Component>
	);
};
ItemContent.displayName = "RadioItemContent";

/**
 * An inline group of radio buttons. Use RadioGroup.Button as direct children.
 */
const ButtonGroup = forwardRef<ComponentRef<typeof Root>, RadioGroupProps>(
	({ className, ...props }, ref) => {
		return (
			<Root
				className={clsx("flex flex-row flex-nowrap -space-x-px", className)}
				{...props}
				ref={ref}
			/>
		);
	},
);
ButtonGroup.displayName = "RadioButtonGroup";

type RadioButtonProps = RadioItemProps;

/**
 * A radio button that is used inside a `RadioGroup.ButtonGroup`.
 */
const Button = forwardRef<ComponentRef<"div">, RadioButtonProps>(
	({ children, className, ...props }, ref) => {
		return (
			<HeadlessRadio
				as="div"
				className={cx(
					"group/radio border-form [&_label]:cursor-inherit relative flex flex-1 select-none items-center justify-center gap-2 border px-3 text-sm",
					"h-9",
					"focus-visible:ring-focus-accent aria-enabled:focus-visible:border-accent-600 focus-visible:ring-4",
					"aria-enabled:cursor-pointer focus:outline-none",
					"first-of-type:rounded-bl-md first-of-type:rounded-tl-md last-of-type:rounded-br-md last-of-type:rounded-tr-md",
					"aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600 aria-disabled:opacity-50",
					"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 aria-enabled:hover:aria-checked:border-accent-600",
					"has-[.radio-indicator:first-child]:pl-2 has-[.radio-indicator:last-child]:pr-2",
					className,
				)}
				ref={ref}
				{...props}
			>
				{(ctx) => (
					<>
						<RadioStateContext.Provider value={ctx}>
							{children}
						</RadioStateContext.Provider>
					</>
				)}
			</HeadlessRadio>
		);
	},
);
Button.displayName = "RadioButton";

type RadioInputSandboxProps = HTMLAttributes<HTMLDivElement>;

/**
 * A sandbox container for input elements composed within radio group items.
 * It prevents the default behavior of the radio group when clicking on the input element or accepting keyboard input.
 */
const InputSandbox = ({
	children,
	onClick,
	onKeyDown,
	...props
}: RadioInputSandboxProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const ctx = useContext(RadioStateContext);

	const singleChild = Children.only(children);

	// Prevent the child input from receiving focus when the parent radio group item is disabled or unchecked.
	const shouldPreventTabIndex = ctx.disabled || !ctx.checked;

	return (
		<div
			ref={ref}
			aria-disabled={ctx.disabled}
			onKeyDown={(event) => {
				if (ctx.disabled) {
					event.stopPropagation();
					event.preventDefault();
					return;
				}
				switch (event.key) {
					case "Enter":
					case "Tab":
						break;
					default:
						event.stopPropagation();
				}
				onKeyDown?.(event);
			}}
			onClick={(event) => {
				if (ctx.disabled) {
					event.stopPropagation();
					event.preventDefault();
					return;
				}
				const target = event.target;
				if (isInput(target)) {
					window.requestAnimationFrame(() => {
						target.focus();
					});
				}
				onClick?.(event);
			}}
			{...props}
		>
			{isValidElement<HTMLInputElement>(singleChild)
				? cloneElement(singleChild, {
						disabled: ctx.disabled || singleChild.props.disabled,
						tabIndex: shouldPreventTabIndex ? -1 : singleChild.props.tabIndex,
					})
				: null}
		</div>
	);
};
InputSandbox.displayName = "RadioInputSandbox";

/**
 * A group of radio items. It manages the state of the children radios.
 *
 * @see https://mantle.ngrok.com/components/radio-group
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <RadioGroup.Item value="option1">
 *     <RadioGroup.Indicator />
 *     <span>Option 1</span>
 *   </RadioGroup.Item>
 *   <RadioGroup.Item value="option2">
 *     <RadioGroup.Indicator />
 *     <span>Option 2</span>
 *   </RadioGroup.Item>
 * </RadioGroup>
 * ```
 */
const RadioGroup = {
	/**
	 * A radio button that is used inside a RadioGroup.ButtonGroup for inline grouped radio options.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-button
	 */
	Button,
	/**
	 * An inline group of radio buttons. Use RadioGroup.Button as direct children for horizontal radio layouts.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-button-group
	 */
	ButtonGroup,
	/**
	 * A radio card item with enhanced styling. Use it as a child of RadioGroup for card-based radio options.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-card
	 */
	Card,
	/**
	 * The selection indicator for any radio item. Shows the checked state with customizable appearance.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-indicator
	 *
	 * @example
	 * ```tsx
	 * <RadioGroup.Item value="option1">
	 *   <RadioGroup.Indicator />
	 *   <span>Option 1</span>
	 * </RadioGroup.Item>
	 * ```
	 */
	Indicator,
	/**
	 * A sandbox container for input elements composed within radio group items. Prevents default radio behavior.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-input-sandbox
	 */
	InputSandbox,
	/**
	 * A simple radio item that can be used inside a radio group. The conventional use-case for basic radio options.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-item
	 *
	 * @example
	 * ```tsx
	 * <RadioGroup.Item value="option1">
	 *   <RadioGroup.Indicator />
	 *   <span>Option 1</span>
	 * </RadioGroup.Item>
	 * ```
	 */
	Item,
	/**
	 * The content wrapper for any radio item. Use it to wrap labels, descriptions, or content of a radio item.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-item-content
	 */
	ItemContent,
	/**
	 * A group of radio list items with connected borders. Use RadioGroup.ListItem as direct children.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-list
	 */
	List,
	/**
	 * A radio list item that is used inside a RadioGroup.List for connected list-style radio options.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-list-item
	 */
	ListItem,
	/**
	 * The root radio group component. Manages the state of the children radios where only one can be selected.
	 *
	 * @see https://mantle.ngrok.com/components/radio-group#api-radio-group
	 *
	 * @example
	 * ```tsx
	 * <RadioGroup.Root value={value} onValueChange={setValue}>
	 *   <RadioGroup.Item value="option1">
	 *     <RadioGroup.Indicator />
	 *     <span>Option 1</span>
	 *   </RadioGroup.Item>
	 * </RadioGroup.Root>
	 * ```
	 */
	Root,
} as const;

export {
	//
	RadioGroup,
};
