import * as Primitive from "@ariakit/react";
import type { ComponentPropsWithoutRef } from "react";
import { cx } from "../../utils/cx/cx.js";

type ComboboxProps = Primitive.ComboboxProviderProps;

const Combobox = ({ children, ...props }: ComboboxProps) => {
	return <Primitive.ComboboxProvider {...props}>{children}</Primitive.ComboboxProvider>;
};

const ComboboxInput = ({ className, ...props }: Primitive.ComboboxProps) => {
	return (
		<Primitive.Combobox
			// TODO(CODY): pare down the css here, copied from the mantle Input and SelectTrigger components
			className={cx(
				"pointer-coarse:text-base h-9 text-sm",
				"bg-form relative flex w-full items-center gap-1.5 rounded-md border px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-within:outline-none focus-within:ring-4 focus-visible:outline-none focus-visible:ring-4",
				"aria-disabled:opacity-50",
				"hover:border-neutral-400",
				"focus:outline-none focus:ring-4 aria-expanded:ring-4",
				"focus:border-accent-600 focus:ring-focus-accent aria-expanded:border-accent-600 aria-expanded:ring-focus-accent",
				"has-[input:not(:first-child)]:ps-2.5 has-[input:not(:last-child)]:pe-2.5 [&>:not(input)]:shrink-0 [&_svg]:size-5",
				"border-form text-strong has-[:focus-visible]:border-accent-600 has-[:focus-visible]:ring-focus-accent",
				"data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:ring-focus-success",
				"data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:ring-focus-warning",
				"data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:ring-focus-danger",
				"autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--blue-50))] has-[:autofill]:bg-blue-50 has-[:autofill]:[-webkit-text-fill-color:hsl(var(--text-strong))]", // Autofill styling on the input itself and any children with autofill styling
				"placeholder:text-placeholder min-w-0 flex-1 bg-transparent text-left autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--blue-50))] focus:outline-none",
				className,
			)}
			{...props}
		/>
	);
};

const ComboboxContent = ({
	children,
	className,
	sameWidth = true,
	unmountOnHide = true,
	...props
}: Primitive.ComboboxPopoverProps) => {
	return (
		<Primitive.ComboboxPopover
			className={cx(
				"border-popover relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
				// "data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
				"p-1",
				"mt-1",
				"bg-popover",
				// position === "popper" &&
				// 	"data-side-bottom:translate-y-2 data-side-left:-translate-x-2 data-side-right:translate-x-2 data-side-top:-translate-y-2 max-h-[var(--radix-select-content-available-height)]",
				// width === "trigger" && "w-[var(--radix-select-trigger-width)]",
				className,
			)}
			sameWidth={sameWidth}
			unmountOnHide={unmountOnHide}
			{...props}
		>
			{children}
		</Primitive.ComboboxPopover>
	);
};

const ComboboxItem = ({ children, className, focusOnHover = true, ...props }: Primitive.ComboboxItemProps) => {
	return (
		<Primitive.ComboboxItem
			className={cx("cursor-pointer rounded px-2 py-1.5 text-sm", "data-active-item:bg-popover-hover", className)}
			focusOnHover={focusOnHover}
			{...props}
		>
			{children}
		</Primitive.ComboboxItem>
	);
};

const ComboboxGroup = ({ children, className, ...props }: Primitive.ComboboxGroupProps) => {
	return (
		<Primitive.ComboboxGroup className={cx("", className)} {...props}>
			{children}
		</Primitive.ComboboxGroup>
	);
};

const ComboboxGroupLabel = ({ children, className, ...props }: Primitive.ComboboxGroupLabelProps) => {
	return (
		<Primitive.ComboboxGroupLabel className={cx("text-muted px-2 py-1 text-xs font-medium", className)} {...props}>
			{children}
		</Primitive.ComboboxGroupLabel>
	);
};

export {
	//,
	Combobox,
	ComboboxContent,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxInput,
	ComboboxItem,
};
