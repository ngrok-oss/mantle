"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react/MagnifyingGlass";
import { Command as CommandPrimitive, useCommandState } from "cmdk";

import {
	type ComponentProps,
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef,
} from "react";
import { cx } from "../../utils/cx/cx.js";
import { Dialog } from "../dialog/dialog.js";

type CommandRootProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

/**
 * The root component for the Command. It provides the context for all other command sub-components.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-root
 *
 * @example
 * ```tsx
 * <Command.Root>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Root>
 */
const CommandRoot = forwardRef<ComponentRef<"div">, CommandRootProps>(
	({ className, ...props }, ref) => (
		<CommandPrimitive
			ref={ref}
			data-slot="command"
			className={cx(
				"bg-popover flex h-full w-full flex-col overflow-hidden rounded-md",
				className,
			)}
			{...props}
		/>
	),
);
CommandRoot.displayName = "Command";

/**
 * The props for the CommandDialog component.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-dialog
 */
type CommandDialogProps = ComponentPropsWithoutRef<typeof Dialog.Root> & {
	/**
	 * The title of the command dialog.
	 */
	title?: string;
	/**
	 * The description of the command dialog.
	 */
	description?: string;
	/**
	 * Class name(s) to apply to the command dialog content.
	 */
	className?: string;
	/**
	 * Whether to show the close button.
	 */
	showCloseButton?: boolean;
	/**
	 * Custom filter function for the command list.
	 *
	 * @see https://github.com/pacocoursey/cmdk?tab=readme-ov-file#filtering
	 */
	filter?: CommandRootProps["filter"];
	/**
	 * Whether to enable filtering of command items. When false, disables built-in filtering.
	 *
	 * @see https://github.com/pacocoursey/cmdk?tab=readme-ov-file#filtering
	 */
	shouldFilter?: CommandRootProps["shouldFilter"];
};

/**
 * A window overlaid on either the primary window or another dialog window.
 * The root stateful component for the CommandDialog.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-dialog
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandDialog = ({
	children,
	className,
	description = "Search for a command to run...",
	filter,
	shouldFilter,
	showCloseButton = true,
	title = "Command Palette",
	...props
}: CommandDialogProps) => (
	<Dialog.Root {...props}>
		<Dialog.Header className="sr-only absolute">
			<Dialog.Title>{title}</Dialog.Title>
			<Dialog.Description>{description}</Dialog.Description>
		</Dialog.Header>
		<Dialog.Content className={cx("overflow-hidden p-0 relative", className)}>
			<CommandRoot
				className="**:[[cmdk-group-heading]]:text-muted **:data-[slot=command-input-wrapper]:h-12 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
				filter={filter}
				shouldFilter={shouldFilter}
			>
				{children}
			</CommandRoot>
			{showCloseButton && (
				<div className="absolute top-1.5 right-1.5">
					<Dialog.CloseIconButton />
				</div>
			)}
		</Dialog.Content>
	</Dialog.Root>
);
CommandDialog.displayName = "CommandDialog";

/**
 * The input component for the Command. It provides the input for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-input
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandInput = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		data-slot="command-input-wrapper"
		className="flex h-9 items-center gap-2 border-b border-popover px-3"
	>
		<MagnifyingGlassIcon className="size-4 shrink-0 opacity-50" />
		<CommandPrimitive.Input
			data-slot="command-input"
			className={cx(
				"placeholder:text-muted flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	</div>
));
CommandInput.displayName = "CommandInput";

/**
 * The list component for the Command. It provides the list for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-list
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandList = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		data-slot="command-list"
		className={cx(
			"max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto scrollbar",
			className,
		)}
		{...props}
	/>
));
CommandList.displayName = "CommandList";

/**
 * The empty component for the Command. It provides the empty state for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-empty
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
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

/**
 * The group component for the Command. It provides the group for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-group
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandGroup = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		data-slot="command-group"
		className={cx(
			"**:[[cmdk-group-heading]]:text-muted overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium",
			className,
		)}
		{...props}
	/>
));
CommandGroup.displayName = "CommandGroup";

/**
 * The separator component for the Command. It provides the separator for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-separator
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandSeparator = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		data-slot="command-separator"
		className={cx(
			"dark-high-contrast:bg-black high-contrast:bg-black bg-gray-500/20 dark:bg-gray-600/20 -mx-1 h-px",
			className,
		)}
		{...props}
	/>
));
CommandSeparator.displayName = "CommandSeparator";

/**
 * The item component for the Command. It provides the item for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-item
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandItem = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		data-slot="command-item"
		className={cx(
			"data-[selected=true]:bg-popover-hover [&_svg:not([class*='text-'])]:text-muted relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			className,
		)}
		{...props}
	/>
));
CommandItem.displayName = "CommandItem";

/**
 * The shortcut component for the Command. It provides the shortcut for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command-shortcut
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *         <Command.Shortcut>⌘,</Command.Shortcut>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const CommandShortcut = forwardRef<
	ComponentRef<"span">,
	ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		data-slot="command-shortcut"
		className={cx("text-muted ml-auto text-xs tracking-widest", className)}
		{...props}
	/>
));
CommandShortcut.displayName = "CommandShortcut";

/**
 * The command component for the Command. It provides the command for the command palette.
 *
 * @see https://mantle.ngrok.com/components/preview/command#api-command
 *
 * @example
 * ```tsx
 * <Command.Dialog>
 *   <Command.Input placeholder="Type a command or search..." />
 *   <Command.List>
 *     <Command.Empty>No results found.</Command.Empty>
 *     <Command.Group heading="Suggestions">
 *       <Command.Item>
 *         <span>Calendar</span>
 *       </Command.Item>
 *     </Command.Group>
 *     <Command.Separator />
 *     <Command.Group heading="Settings">
 *       <Command.Item>
 *         <span>Profile</span>
 *       </Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command.Dialog>
 */
const Command = {
	/**
	 * The root component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-root
	 *
	 * @example
	 * ```tsx
	 * <Command.Root>
	 *   <Command.Input placeholder="Type a command or search..." />
	 *   <Command.List>
	 *     <Command.Empty>No results found.</Command.Empty>
	 *   </Command.List>
	 * </Command.Root>
	 * ```
	 */
	Root: CommandRoot,
	/**
	 * The dialog component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-dialog
	 *
	 * @example
	 * ```tsx
	 * <Command.Dialog>
	 *   <Command.Input placeholder="Type a command or search..." />
	 *   <Command.List>
	 *     <Command.Empty>No results found.</Command.Empty>
	 *   </Command.List>
	 * </Command.Dialog>
	 * ```
	 */
	Dialog: CommandDialog,
	/**
	 * The input component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-input
	 *
	 * @example
	 * ```tsx
	 * <Command.Input placeholder="Type a command or search..." />
	 * ```
	 */
	Input: CommandInput,
	/**
	 * The list component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-list
	 *
	 * @example
	 * ```tsx
	 * <Command.List>
	 *   <Command.Empty>No results found.</Command.Empty>
	 * </Command.List>
	 */
	List: CommandList,
	/**
	 * The empty component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-empty
	 *
	 * @example
	 * ```tsx
	 * <Command.Empty>No results found.</Command.Empty>
	 * ```
	 */
	Empty: CommandEmpty,
	/**
	 * The group component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-group
	 *
	 * @example
	 * ```tsx
	 * <Command.Group heading="Suggestions">
	 *   <Command.Item>
	 *     Calendar
	 *   </Command.Item>
	 * </Command.Group>
	 * ```
	 */
	Group: CommandGroup,
	/**
	 * The item component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-item
	 *
	 * @example
	 * ```tsx
	 * <Command.Item>
	 *   Calendar
	 * </Command.Item>
	 * ```
	 */
	Item: CommandItem,
	/**
	 * The shortcut component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-shortcut
	 *
	 * @example
	 * ```tsx
	 * <Command.Shortcut>⌘,</Command.Shortcut>
	 * ```
	 */
	Shortcut: CommandShortcut,
	/**
	 * The seprator component for the Command component.
	 *
	 * @see https://mantle.ngrok.com/components/preview/command#api-command-separator
	 *
	 * @example
	 * ```tsx
	 * <Command.Separator />
	 * ```
	 */
	Separator: CommandSeparator,
} as const;

export {
	//,
	Command,
	useCommandState,
};
