import { Radio as HeadlessRadio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import type { RadioGroupProps as HeadlessRadioGroupProps, RadioProps as HeadlessRadioProps } from "@headlessui/react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { createContext, forwardRef, useContext } from "react";
import type { ElementRef, HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { cx } from "../../cx";
import type { WithAsChild } from "../../types";

type RadioGroupProps = PropsWithChildren<Omit<HeadlessRadioGroupProps, "as" | "children">>;

/**
 * A group of radio items. It manages the state of the children radios. Unstyled and simple.
 */
const RadioGroup = forwardRef<ElementRef<typeof HeadlessRadioGroup>, RadioGroupProps>((props, ref) => (
	<HeadlessRadioGroup {...props} ref={ref} />
));
RadioGroup.displayName = "RadioGroup";

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
 */
const RadioItem = forwardRef<ElementRef<"div">, RadioItemProps>(({ children, className, ...props }, ref) => (
	<HeadlessRadio
		className={cx(
			"group/radio flex cursor-default gap-2 py-1 text-base focus:outline-none aria-enabled:cursor-pointer sm:text-sm [&_label]:cursor-inherit",
			className,
		)}
		as="div"
		{...props}
		ref={ref}
	>
		{(ctx) => <RadioStateContext.Provider value={ctx}>{children}</RadioStateContext.Provider>}
	</HeadlessRadio>
));
RadioItem.displayName = "RadioItem";

type RadioIndicatorProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
	children?: ReactNode | ((context: RadioStateContextValue) => ReactNode);
};

/**
 * The default radio indicator.
 * @private
 */
const DefaultRadioIndicator = ({ checked, disabled, focus, hover }: RadioStateContextValue) => (
	<span
		className={cx(
			"flex size-4 items-center justify-center rounded-full border border-form",
			disabled && "cursor-default opacity-50",
			checked && "border-accent-500 bg-accent-500",
			focus && !disabled && "border-accent-600 ring-4 ring-focus-accent",
			hover && "border-accent-600",
		)}
	>
		{checked && <span className="size-2 rounded-full bg-[#fff]" />}
	</span>
);

/**
 * The selection indicator for any radio item.
 * Use it as a child of `RadioItem`, `RadioListItem`, or `RadioCard`.
 * By default, it's a circle that changes color when checked.
 * You can customize the indicator by passing children:
 * - a different component
 * - a render-props function that receives the radio state context and should return a component.
 */
const RadioIndicator = ({ children, className, ...props }: RadioIndicatorProps) => {
	const ctx = useContext(RadioStateContext);

	return (
		<div
			className={cx("radio-indicator inline-flex size-6 select-none items-center justify-center sm:size-5", className)}
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

/**
 * A group of radio list items. Use RadioListItem as direct children.
 */
const RadioGroupList = forwardRef<ElementRef<typeof RadioGroup>, RadioGroupProps>(({ className, ...props }, ref) => {
	return <RadioGroup className={clsx("-space-y-px", className)} {...props} ref={ref} />;
});
RadioGroupList.displayName = "RadioGroupList";

type RadioListItemProps = RadioItemProps;

/**
 * A radio list item that is used inside a `RadioGroupList`.
 */
const RadioListItem = forwardRef<ElementRef<"div">, RadioListItemProps>(({ children, className, ...props }, ref) => {
	return (
		<HeadlessRadio
			as="div"
			className={cx(
				"group/radio relative flex select-none gap-2 border border-form px-3 py-2 text-base sm:text-sm [&_label]:cursor-inherit",
				"focus:outline-none aria-enabled:cursor-pointer",
				"first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
				"aria-disabled:border-form/50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
				"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 enabled:hover:aria-checked:border-accent-600",
				"has-[.radio-indicator:first-child]:pl-2 has-[.radio-indicator:last-child]:pr-2",
				className,
			)}
			ref={ref}
			{...props}
		>
			{(ctx) => (
				<>
					<RadioStateContext.Provider value={ctx}>{children}</RadioStateContext.Provider>
				</>
			)}
		</HeadlessRadio>
	);
});
RadioListItem.displayName = "RadioListItem";

type RadioItemContentProps = HTMLAttributes<HTMLDivElement> & WithAsChild;

type RadioCardProps = RadioItemProps;

/**
 * A radio card item. Use it as a child of `RadioGroup`
 */
const RadioCard = forwardRef<ElementRef<"div">, RadioCardProps>(({ children, className, ...props }, ref) => {
	return (
		<HeadlessRadio
			as="div"
			className={clsx(
				"group/radio relative rounded-md border border-card bg-card p-4 text-base sm:text-sm [&_label]:cursor-inherit",
				"focus:outline-none aria-enabled:cursor-pointer",
				"first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
				"aria-disabled:border-form/50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
				"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 aria-enabled:hover:aria-checked:border-accent-600",
				className,
			)}
			{...props}
			ref={ref}
		>
			{(ctx) => (
				<>
					<RadioStateContext.Provider value={ctx}>{children}</RadioStateContext.Provider>
				</>
			)}
		</HeadlessRadio>
	);
});
RadioCard.displayName = "RadioCard";

/**
 * The content of any radio item. Use it to wrap any labels, descriptions, or content of a radio item.
 * Use it as a child of `RadioItem`, `RadioListItem`, or `RadioCard`.
 */
const RadioItemContent = ({ asChild = false, children, className, ...props }: RadioItemContentProps) => {
	const ctx = useContext(RadioStateContext);
	const Component = asChild ? Slot : "div";

	return (
		<Component className={clsx("min-w-0 flex-1", ctx.disabled && "opacity-50", className)} {...props}>
			{children}
		</Component>
	);
};

/**
 * An inline group of radio buttons. Use RadioButton as direct children.
 */
const RadioButtonGroup = forwardRef<ElementRef<typeof RadioGroup>, RadioGroupProps>(({ className, ...props }, ref) => {
	return <RadioGroup className={clsx("flex flex-row flex-nowrap -space-x-px", className)} {...props} ref={ref} />;
});
RadioButtonGroup.displayName = "RadioButtonGroup";

type RadioButtonProps = RadioItemProps;

/**
 * A radio button that is used inside a `RadioButtonGroup`.
 */
const RadioButton = forwardRef<ElementRef<"div">, RadioButtonProps>(({ children, className, ...props }, ref) => {
	return (
		<HeadlessRadio
			as="div"
			className={cx(
				"group/radio relative flex flex-1 select-none items-center justify-center gap-2 border border-form px-3 py-2 text-base sm:text-sm [&_label]:cursor-inherit",
				"focus:outline-none aria-enabled:cursor-pointer",
				"first-of-type:rounded-bl-md first-of-type:rounded-tl-md last-of-type:rounded-br-md last-of-type:rounded-tr-md",
				"aria-disabled:opacity-50 aria-enabled:hover:z-1 aria-enabled:hover:border-accent-600",
				"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 enabled:hover:aria-checked:border-accent-600",
				"has-[.radio-indicator:first-child]:pl-2 has-[.radio-indicator:last-child]:pr-2",
				className,
			)}
			ref={ref}
			{...props}
		>
			{(ctx) => (
				<>
					<RadioStateContext.Provider value={ctx}>{children}</RadioStateContext.Provider>
				</>
			)}
		</HeadlessRadio>
	);
});
RadioButton.displayName = "RadioButton";

export {
	//
	RadioButton,
	RadioButtonGroup,
	RadioCard,
	RadioGroup,
	RadioGroupList,
	RadioIndicator,
	RadioItem,
	RadioItemContent,
	RadioListItem,
};
