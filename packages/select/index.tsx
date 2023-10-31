import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
	Root,
	Group,
	Value,
	Trigger,
	Icon,
	Content,
	Portal,
	Viewport,
	Label,
	Item,
	ItemIndicator,
	ItemText,
	Separator,
} from "@radix-ui/react-select";

import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

import { cx } from "../cx";

const Select = Root;

const SelectGroup = Group;

const SelectValue = Value;

const SelectIcon = Icon;

const SelectTrigger = forwardRef<
	ElementRef<typeof Trigger>,
	ComponentPropsWithoutRef<typeof Trigger> & { hideIcon?: boolean }
>(({ className, children, hideIcon = false, ...props }, ref) => (
	<Trigger
		ref={ref}
		className={cx(
			"flex h-10 w-full items-center justify-between rounded-md border border-gray-500 bg-white px-3 py-2 placeholder:text-gray-300 focus:border-brand-primary-500 focus:outline-none focus:ring-4 focus:ring-brand-primary-600/25 disabled:cursor-not-allowed disabled:opacity-50",
			className,
		)}
		{...props}
	>
		{children}
		{!hideIcon && (
			<Icon asChild>
				<CaretSortIcon className="h-4 w-4 opacity-50" />
			</Icon>
		)}
	</Trigger>
));
SelectTrigger.displayName = Trigger.displayName;

const SelectContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
	({ className, children, position = "popper", ...props }, ref) => (
		<Portal>
			<Content
				ref={ref}
				className={cx(
					"relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
					position === "popper" &&
						"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
					className,
				)}
				position={position}
				{...props}
			>
				<Viewport
					className={cx(
						"p-1",
						position === "popper" &&
							"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
					)}
				>
					{children}
				</Viewport>
			</Content>
		</Portal>
	),
);
SelectContent.displayName = Content.displayName;

const SelectLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>(
	({ className, ...props }, ref) => (
		<Label ref={ref} className={cx("px-2 py-1.5 text-sm font-semibold", className)} {...props} />
	),
);
SelectLabel.displayName = Label.displayName;

const SelectOption = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
	({ className, children, ...props }, ref) => (
		<Item
			ref={ref}
			className={cx(
				"relative flex w-full cursor-pointer items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none focus:bg-brand-primary-500 focus:text-button data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				className,
			)}
			{...props}
		>
			<span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
				<ItemIndicator>
					<CheckIcon className="h-4 w-4" />
				</ItemIndicator>
			</span>
			<ItemText>{children}</ItemText>
		</Item>
	),
);
SelectOption.displayName = Item.displayName;

const SelectSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
	({ className, ...props }, ref) => (
		<Separator ref={ref} className={cx("-mx-1 my-1 h-px bg-muted", className)} {...props} />
	),
);
SelectSeparator.displayName = Separator.displayName;

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectIcon,
	SelectLabel,
	SelectOption,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
