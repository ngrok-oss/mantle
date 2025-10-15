"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react/MagnifyingGlass";
import { Command as CommandPrimitive } from "cmdk";

import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef,
} from "react";
import { cx } from "../../utils/cx/cx.js";
import { Dialog } from "../dialog/dialog.js";

const CommandRoot = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		ref={ref}
		data-slot="command"
		className={cx(
			"bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
			className,
		)}
		{...props}
	/>
));
CommandRoot.displayName = "Command";

const CommandDialog = ({
	title = "Command Palette",
	description = "Search for a command to run...",
	children,
	className,
	showCloseButton = true,
	...props
}: ComponentPropsWithoutRef<typeof Dialog.Root> & {
	title?: string;
	description?: string;
	className?: string;
	showCloseButton?: boolean;
}) => (
	<Dialog.Root {...props}>
		<Dialog.Header className="sr-only">
			<Dialog.Title>{title}</Dialog.Title>
			<Dialog.Description>{description}</Dialog.Description>
		</Dialog.Header>
		<Dialog.Content className={cx("overflow-hidden p-0", className)}>
			{showCloseButton && <Dialog.CloseIconButton />}
			<CommandRoot className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
				{children}
			</CommandRoot>
		</Dialog.Content>
	</Dialog.Root>
);
CommandDialog.displayName = "CommandDialog";

const CommandInput = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		data-slot="command-input-wrapper"
		className="flex h-9 items-center gap-2 border-b px-3"
	>
		<MagnifyingGlassIcon className="size-4 shrink-0 opacity-50" />
		<CommandPrimitive.Input
			data-slot="command-input"
			className={cx(
				"placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	</div>
));
CommandInput.displayName = "CommandInput";

const CommandList = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		data-slot="command-list"
		className={cx(
			"max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
			className,
		)}
		{...props}
	/>
));
CommandList.displayName = "CommandList";

const CommandEmpty = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		data-slot="command-empty"
		className="py-6 text-center text-sm"
		{...props}
	/>
));
CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		data-slot="command-group"
		className={cx(
			"text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
			className,
		)}
		{...props}
	/>
));
CommandGroup.displayName = "CommandGroup";

const CommandSeparator = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		data-slot="command-separator"
		className={cx("bg-border -mx-1 h-px", className)}
		{...props}
	/>
));
CommandSeparator.displayName = "CommandSeparator";

const CommandItem = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		data-slot="command-item"
		className={cx(
			"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			className,
		)}
		{...props}
	/>
));
CommandItem.displayName = "CommandItem";

const CommandShortcut = forwardRef<
	ComponentRef<"span">,
	ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		data-slot="command-shortcut"
		className={cx(
			"text-muted-foreground ml-auto text-xs tracking-widest",
			className,
		)}
		{...props}
	/>
));
CommandShortcut.displayName = "CommandShortcut";

const Command = {
	Root: CommandRoot,
	Dialog: CommandDialog,
	Input: CommandInput,
	List: CommandList,
	Empty: CommandEmpty,
	Group: CommandGroup,
	Item: CommandItem,
	Shortcut: CommandShortcut,
	Separator: CommandSeparator,
};

export { Command };
