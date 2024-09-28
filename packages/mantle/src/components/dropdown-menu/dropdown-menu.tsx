import { CaretRight } from "@phosphor-icons/react/CaretRight";
import { Check } from "@phosphor-icons/react/Check";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { cx } from "../../utils/cx/cx.js";
import { Separator } from "../separator/separator.js";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean;
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger
		className={cx(
			"focus:bg-accent data-state-open:bg-accent relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-9 text-base outline-none sm:text-sm",
			"data-highlighted:bg-popover-hover data-state-open:bg-popover-hover",
			"[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
			inset && "pl-8",
			className,
		)}
		ref={ref}
		{...props}
	>
		{children}
		<span className="absolute right-2 flex items-center">
			<CaretRight className="size-5 shrink-0 sm:size-4" weight="bold" />
		</span>
	</DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

const DropdownMenuSubContent = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, loop = true, ...props }, ref) => (
	<DropdownMenuPortal>
		<DropdownMenuPrimitive.SubContent
			className={cx(
				"scrollbar",
				"text-popover-foreground border-popover bg-popover p-1.25 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded border shadow-xl",
				"my-2 max-h-[calc(var(--radix-dropdown-menu-content-available-height)_-_16px)] overflow-auto",
				className,
			)}
			loop={loop}
			ref={ref}
			{...props}
		/>
	</DropdownMenuPortal>
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
	/**
	 * Whether the DropdownMenuContent should match the width of the trigger or use the intrinsic content width.
	 */
	width?: "trigger" | "content";
};

const DropdownMenuContent = forwardRef<ElementRef<typeof DropdownMenuPrimitive.Content>, DropdownMenuContentProps>(
	({ className, loop = true, width, ...props }, ref) => (
		<DropdownMenuPortal>
			<DropdownMenuPrimitive.Content
				ref={ref}
				className={cx(
					"scrollbar",
					"text-popover-foreground border-popover bg-popover p-1.25 z-50 min-w-[8rem] overflow-hidden rounded border shadow-xl outline-none",
					"data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
					"my-2 max-h-[calc(var(--radix-dropdown-menu-content-available-height)_-_16px)] overflow-auto",
					width === "trigger" && "w-[var(--radix-dropdown-menu-trigger-width)]",
					className,
				)}
				loop={loop}
				{...props}
			/>
		</DropdownMenuPortal>
	),
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.Item>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		className={cx(
			"focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-popover-hover data-active-item:dark:bg-popover-hover relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 text-base font-normal outline-none transition-colors sm:text-sm",
			"[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
			inset && "pl-8",
			className,
		)}
		{...props}
	/>
));
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuCheckboxItem = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cx(
			"text-strong data-disabled:pointer-events-none data-disabled:opacity-50 relative flex cursor-pointer select-none items-center gap-2 rounded py-1.5 pl-2 pr-9 text-base font-normal outline-none sm:text-sm",
			"data-highlighted:bg-popover-hover data-highlighted:dark:bg-popover-hover",
			"aria-checked:!bg-filled-accent aria-checked:text-on-filled aria-checked:font-medium",
			"[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
			className,
		)}
		checked={checked}
		{...props}
	>
		<span className="absolute right-2 flex items-center">
			<DropdownMenuPrimitive.ItemIndicator>
				<Check className="size-5 shrink-0 sm:size-4" weight="bold" />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
	name?: string;
	id?: string;
};

const DropdownMenuRadioItem = forwardRef<ElementRef<"input">, DropdownMenuRadioItemProps>(
	({ className, children, ...props }, ref) => (
		<DropdownMenuPrimitive.RadioItem
			className={cx(
				"text-strong data-disabled:pointer-events-none data-disabled:opacity-50 relative flex cursor-pointer select-none items-center gap-2 rounded py-1.5 pl-2 pr-9 text-base font-normal outline-none sm:text-sm",
				"data-highlighted:bg-popover-hover data-highlighted:dark:bg-popover-hover",
				"aria-checked:!bg-filled-accent aria-checked:text-on-filled aria-checked:font-medium",
				"[&>svg]:size-6 [&>svg]:sm:size-5 [&_svg]:shrink-0",
				className,
			)}
			ref={ref}
			{...props}
		>
			<span className="absolute right-2 flex items-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<Check className="size-5 shrink-0 sm:size-4" weight="bold" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	),
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuLabel = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.Label>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
		inset?: boolean;
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Label
		ref={ref}
		className={cx("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
		{...props}
	/>
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
	({ className, ...props }, ref) => (
		<Separator ref={ref} className={cx("-mx-1.25 my-1 w-auto", className)} {...props} />
	),
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={cx("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
};
