import { Radio as HeadlessRadio, RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import type { RadioGroupProps as HeadlessRadioGroupProps, RadioProps as HeadlessRadioProps } from "@headlessui/react";
import { Slot } from "@radix-ui/react-slot";
import { createContext, forwardRef } from "react";
import type { ElementRef, HTMLAttributes, PropsWithChildren } from "react";
import { cx } from "../../cx";
import type { WithAsChild } from "../../types";

type RadioGroupProps = PropsWithChildren<Omit<HeadlessRadioGroupProps, "as" | "children">>;

const RadioGroup = forwardRef<ElementRef<typeof HeadlessRadioGroup>, RadioGroupProps>((props, ref) => (
	<HeadlessRadioGroup {...props} ref={ref} />
));
RadioGroup.displayName = "RadioGroup";

type RadioContextValue = {
	autofocus: boolean;
	checked: boolean;
	disabled: boolean;
	focus: boolean;
	hover: boolean;
};

const RadioContext = createContext<RadioContextValue>({
	autofocus: false,
	checked: false,
	disabled: false,
	focus: false,
	hover: false,
});

type RadioItemProps = Omit<HeadlessRadioProps, "children"> & PropsWithChildren;

const RadioItem = forwardRef<ElementRef<"div">, RadioItemProps>(({ children, className, ...props }, ref) => (
	<HeadlessRadio
		className={cx(
			"group/radio flex cursor-default gap-2 focus:outline-none aria-enabled:cursor-pointer [&_label]:cursor-inherit",
			className,
		)}
		as="div"
		{...props}
		ref={ref}
	>
		{(ctx) => <RadioContext.Provider value={ctx}>{children}</RadioContext.Provider>}
	</HeadlessRadio>
));
RadioItem.displayName = "RadioItem";

type RadioIndicatorProps = HTMLAttributes<HTMLDivElement>;

/**
 * The selection indicator for a radio item.
 * Pass a function as children for a render-props way to customize the indicator.
 */
const RadioIndicator = ({ children, className, ...props }: RadioIndicatorProps) => {
	return (
		<div className={cx("inline-flex h-6 items-center", className)} {...props}>
			{children ?? (
				<span
					className={cx(
						"flex size-4 items-center justify-center rounded-full border border-form",
						"group-aria-disabled/radio:cursor-default group-aria-disabled/radio:opacity-50",
						"group-focus-visible/radio:!border-accent-600 group-focus-visible/radio:ring-4 group-focus-visible/radio:ring-focus-accent",
						"group-aria-checked/radio:border-accent-500 group-aria-checked/radio:bg-accent-500",
						"enabled:group-hover/radio:!border-accent-600",
					)}
				>
					<span className="hidden size-2 rounded-full bg-[#fff] group-aria-checked/radio:block" />
				</span>
			)}
		</div>
	);
};

const RadioGroupList = forwardRef<ElementRef<typeof RadioGroup>, RadioGroupProps>(({ className, ...props }, ref) => {
	return <RadioGroup className={cx("-space-y-px", className)} {...props} ref={ref} />;
});
RadioGroupList.displayName = "RadioGroupList";

type RadioListItemProps = RadioItemProps;

const RadioListItem = forwardRef<ElementRef<"div">, RadioListItemProps>(
	({ children, className, disabled, ...props }, ref) => {
		return (
			<HeadlessRadio
				as="div"
				className={cx(
					"group/radio",
					"relative flex select-none gap-2 border border-form p-2 focus:outline-none aria-enabled:cursor-pointer",
					"first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
					"[&_label]:cursor-inherit",
					disabled && "border-form/50",
					"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 hover:aria-checked:border-accent-600",
					!disabled && "hover:z-1 hover:border-accent-600",
					className,
				)}
				disabled={disabled}
				{...props}
				ref={ref}
			>
				{(ctx) => (
					<>
						<RadioContext.Provider value={ctx}>{children}</RadioContext.Provider>
					</>
				)}
			</HeadlessRadio>
		);
	},
);
RadioListItem.displayName = "RadioListItem";

type RadioItemContentProps = HTMLAttributes<HTMLDivElement> & WithAsChild;

const RadioItemContent = ({ asChild = false, children, className, ...props }: RadioItemContentProps) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component className={cx("min-w-0 flex-1 group-aria-disabled/radio:opacity-50", className)} {...props}>
			{children}
		</Component>
	);
};

type RadioCardProps = RadioItemProps;

const RadioCard = forwardRef<ElementRef<"div">, RadioCardProps>(({ children, className, disabled, ...props }, ref) => {
	return (
		<HeadlessRadio
			as="div"
			className={cx(
				"group/radio [&_label]:cursor-inherit",
				"rounded-md border border-card bg-card",
				"p-4",
				"relative focus:outline-none aria-enabled:cursor-pointer",
				"first-of-type:rounded-tl-md first-of-type:rounded-tr-md last-of-type:rounded-bl-md last-of-type:rounded-br-md",
				disabled && "border-form/50",
				"aria-checked:z-1 aria-checked:border-accent-500/40 aria-checked:bg-accent-500/10 hover:aria-checked:border-accent-600",
				!disabled && "hover:z-1 hover:border-accent-600",
				className,
			)}
			disabled={disabled}
			{...props}
			ref={ref}
		>
			{(ctx) => (
				<>
					<RadioContext.Provider value={ctx}>{children}</RadioContext.Provider>
				</>
			)}
		</HeadlessRadio>
	);
});
RadioCard.displayName = "RadioCard";

export {
	//
	RadioCard,
	RadioGroup,
	RadioGroupList,
	RadioIndicator,
	RadioItem,
	RadioItemContent,
	RadioListItem,
};
