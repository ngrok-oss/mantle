import { CaretDown } from "@phosphor-icons/react/CaretDown";
import { CaretUp } from "@phosphor-icons/react/CaretUp";
import { Check } from "@phosphor-icons/react/Check";
import * as SelectPrimitive from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef, SelectHTMLAttributes } from "react";
import { createContext, forwardRef, useContext } from "react";
import { cx } from "../../cx";
import type { WithInvalid } from "../../input";
import { Separator } from "../../separator";

type WithAriaInvalid = Pick<SelectHTMLAttributes<HTMLSelectElement>, "aria-invalid">;
type SelectContextType = WithInvalid & WithAriaInvalid;

const SelectContext = createContext<SelectContextType>({});

type SelectProps = Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, "onValueChange"> &
	WithInvalid &
	WithAriaInvalid & {
		/**
		 * Event handler called when the value changes.
		 */
		onChange?: (value: string) => void;
	};

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 */
const Select = ({ "aria-invalid": _ariaInvalid, children, invalid, onChange, ...props }: SelectProps) => {
	return (
		<SelectPrimitive.Root {...props} onValueChange={onChange}>
			<SelectContext.Provider value={{ "aria-invalid": _ariaInvalid, invalid }}>{children}</SelectContext.Provider>
		</SelectPrimitive.Root>
	);
};

/**
 * A group of related options within a select menu. Similar to an html `<optgroup>` element.
 * Use in conjunction with Select.Label to ensure good accessibility via automatic labelling.
 */
const SelectGroup = SelectPrimitive.Group;

/**
 * The part that reflects the selected value. By default the selected item's text will be rendered. if you require more control, you can instead control the select and pass your own children. It should not be styled to ensure correct positioning. An optional placeholder prop is also available for when the select has no value.
 */
const SelectValue = SelectPrimitive.Value;

type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & WithAriaInvalid & WithInvalid;

/**
 * The button that toggles the select. The Select.Content will position itself adjacent to the trigger.
 */
const SelectTrigger = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
	({ "aria-invalid": _ariaInvalid, className, children, invalid, ...props }, ref) => {
		const { "aria-invalid": ctxAriaInvalid, invalid: ctxInvalid } = useContext(SelectContext);
		const ariaInvalid = ctxAriaInvalid ?? ctxInvalid ?? _ariaInvalid ?? invalid;

		return (
			<SelectPrimitive.Trigger
				aria-invalid={ariaInvalid}
				ref={ref}
				className={cx(
					"flex h-11 w-full items-center justify-between rounded-md border border-form bg-form px-3 py-2 text-strong placeholder:text-placeholder hover:border-neutral-400 hover:bg-form-hover hover:text-strong focus:border-accent-600 focus:outline-none focus:ring-4 focus:ring-focus-accent focus-visible:border-accent-600 focus-visible:ring-focus-accent active:border-neutral-400 active:bg-neutral-500/10 active:text-strong focus-visible:active:border-accent-600 disabled:pointer-events-none disabled:opacity-50 aria-expanded:border-accent-600 aria-expanded:ring-4 aria-expanded:ring-focus-accent sm:h-9 sm:text-sm [&>span]:line-clamp-1 [&>span]:text-left",
					ariaInvalid &&
						"border-danger-600 focus:border-danger-600 focus:ring-focus-danger aria-expanded:border-danger-600 aria-expanded:ring-focus-danger",
					className,
				)}
				{...props}
			>
				{children}
				<SelectPrimitive.Icon asChild>
					<CaretDown className="size-4 shrink-0" weight="bold" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
		);
	},
);
SelectTrigger.displayName = "SelectTrigger";

const SelectScrollUpButton = forwardRef<
	ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={cx("flex cursor-default items-center justify-center py-1", className)}
		{...props}
	>
		<CaretUp className="size-4 shrink-0" weight="bold" />
	</SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = forwardRef<
	ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={cx("flex cursor-default items-center justify-center py-1", className)}
		{...props}
	>
		<CaretDown className="size-4 shrink-0" weight="bold" />
	</SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = "SelectScrollDownButton";

type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
	width?: "trigger" | "content";
};

/**
 * The component that pops out when the select is open as a portal adjacent to the trigger button.
 * It contains a scrolling viewport of the select items.
 */
const SelectContent = forwardRef<ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
	({ className, children, position = "popper", width, ...props }, ref) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				ref={ref}
				className={cx(
					"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-popover shadow-md data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
					"bg-popover",
					position === "popper" &&
						"max-h-[var(--radix-select-content-available-height)] data-side-bottom:translate-y-2 data-side-left:-translate-x-2 data-side-right:translate-x-2 data-side-top:-translate-y-2",
					width === "trigger" && "w-[var(--radix-select-trigger-width)]",
					className,
				)}
				position={position}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={cx("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full")}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	),
);
SelectContent.displayName = "SelectContent";

/**
 * Used to render the label of a group. It won't be focusable using arrow keys.
 */
const SelectLabel = forwardRef<
	ElementRef<typeof SelectPrimitive.Label>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label ref={ref} className={cx("px-2 py-1.5 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = "SelectLabel";

/**
 * An option within a select menu. Similar to an html `<option>` element.
 * Contains a `value` prop that will be passed to the `onChange` handler of the `Select` component when selected.
 * Displays the children as the option's text.
 */
const SelectItem = forwardRef<
	ElementRef<typeof SelectPrimitive.Item>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cx(
			"relative flex w-full cursor-pointer select-none items-center rounded py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-popover-hover data-state-checked:bg-filled-accent data-state-checked:text-on-filled data-disabled:pointer-events-none data-disabled:opacity-50",
			className,
		)}
		{...props}
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		<SelectPrimitive.ItemIndicator className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
			<Check className="size-4 shrink-0" weight="bold" />
		</SelectPrimitive.ItemIndicator>
	</SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

/**
 * Used to visually separate items in the select.
 */
const SelectSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
	({ className, ...props }, ref) => (
		<Separator ref={ref} className={cx("-mx-1 my-1 h-px w-auto", className)} {...props} />
	),
);
SelectSeparator.displayName = "SelectSeparator";

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
};
