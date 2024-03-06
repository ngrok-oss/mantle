import * as Ariakit from "@ariakit/react";
import { Check } from "@phosphor-icons/react/Check";
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cx } from "../../core";
import { Separator } from "../../separator";
import { WithAsChild } from "../../types";

const DropdownMenu = Ariakit.MenuProvider;

type DropdownMenuTriggerProps = Omit<ComponentPropsWithoutRef<typeof Ariakit.MenuButton>, "render"> & WithAsChild;
const DropdownMenuTrigger = forwardRef<ElementRef<"button">, DropdownMenuTriggerProps>(
	({ asChild = false, children, ...props }, ref) => {
		if (asChild) {
			return (
				<Ariakit.MenuButton
					ref={ref}
					render={typeof children === "object" && children != null ? (children as React.JSX.Element) : <button />}
				/>
			);
		}

		return (
			<Ariakit.MenuButton ref={ref} {...props}>
				{children}
			</Ariakit.MenuButton>
		);
	},
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuContent = forwardRef<ElementRef<typeof Ariakit.Menu>, ComponentPropsWithoutRef<typeof Ariakit.Menu>>(
	({ className, gutter = 8, ...props }, ref) => (
		<Ariakit.Menu
			gutter={gutter}
			ref={ref}
			className={cx(
				"z-50 min-w-[8rem] overflow-hidden rounded border border-popover bg-popover p-1.25 shadow-xl outline-none data-side-bottom:slide-in-from-top-2 data-side-left:slide-in-from-right-2 data-side-right:slide-in-from-left-2 data-side-top:slide-in-from-bottom-2 data-state-closed:animate-out data-state-closed:fade-out-0 data-state-closed:zoom-out-95 data-state-open:animate-in data-state-open:fade-in-0 data-state-open:zoom-in-95",
				className,
			)}
			{...props}
		/>
	),
);
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = forwardRef<
	ElementRef<typeof Ariakit.MenuItem>,
	ComponentPropsWithoutRef<typeof Ariakit.MenuItem>
>(({ className, ...props }, ref) => (
	<Ariakit.MenuItem
		ref={ref}
		className={cx(
			"relative flex cursor-pointer select-none items-center rounded px-2 py-1.5 text-sm font-normal text-strong outline-none data-active-item:bg-popover-hover data-disabled:pointer-events-none data-disabled:opacity-50 data-active-item:dark:bg-popover-hover",
			className,
		)}
		{...props}
	/>
));
DropdownMenuItem.displayName = "DropdownMenuItem";

type DropdownMenuCheckboxItemProps = Omit<ComponentPropsWithoutRef<typeof Ariakit.MenuItemCheckbox>, "render">;
const DropdownMenuCheckboxItem = forwardRef<ElementRef<typeof Ariakit.MenuItemRadio>, DropdownMenuCheckboxItemProps>(
	({ className, children, ...props }, ref) => (
		<Ariakit.MenuItemCheckbox
			ref={ref}
			className={cx(
				"relative flex cursor-pointer select-none items-center gap-2 rounded py-1.5 pl-2 pr-9 text-sm font-normal text-strong outline-none data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-active-item:bg-popover",
				"aria-checked:bg-filled-accent aria-checked:font-medium aria-checked:text-on-filled",
				className,
			)}
			{...props}
		>
			{children}
			<DropdownMenuItemCheck className="absolute right-2 flex items-center" />
		</Ariakit.MenuItemCheckbox>
	),
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

type DropdownMenuRadioItemProps = Omit<ComponentPropsWithoutRef<typeof Ariakit.MenuItemRadio>, "render">;
const DropdownMenuRadioItem = forwardRef<ElementRef<typeof Ariakit.MenuItemRadio>, DropdownMenuRadioItemProps>(
	({ className, children, ...props }, ref) => (
		<Ariakit.MenuItemRadio
			ref={ref}
			className={cx(
				"relative flex cursor-pointer select-none items-center gap-2 rounded py-1.5 pl-2 pr-9 text-sm font-normal text-strong outline-none data-disabled:pointer-events-none data-disabled:opacity-50",
				"data-active-item:bg-popover-hover data-active-item:dark:bg-popover-hover",
				"aria-checked:!bg-filled-accent aria-checked:font-medium aria-checked:text-on-filled",
				className,
			)}
			{...props}
		>
			{children}
			<DropdownMenuItemCheck className="absolute right-2 flex items-center" />
		</Ariakit.MenuItemRadio>
	),
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuItemCheck = (props: Omit<HTMLAttributes<HTMLSpanElement>, "children">) => (
	<Ariakit.MenuItemCheck {...props}>
		<Check className="size-5" weight="bold" />
	</Ariakit.MenuItemCheck>
);

const DropdownMenuLabel = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("px-2 py-1.5 text-sm font-medium text-strong", className)} {...props} />
	),
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";

const DropdownMenuSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
	({ className, ...props }, ref) => <Separator ref={ref} className={cx("-mx-2 my-1 w-auto", className)} {...props} />,
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={cx("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,

	// TODO(cody): audit / add in these exports in a follow up
	// DropdownMenuGroup,
	// DropdownMenuPortal,
	// DropdownMenuSub,
	// DropdownMenuSubContent,
	// DropdownMenuSubTrigger,
	// DropdownMenuRadioGroup,
};
