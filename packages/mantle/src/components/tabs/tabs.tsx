import {
	Content as TabsPrimitiveContent,
	List as TabsPrimitiveList,
	Root as TabsPrimitiveRoot,
	Trigger as TabsPrimitiveTrigger,
} from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ComponentRef, HTMLAttributes } from "react";
import {
	Children,
	cloneElement,
	createContext,
	forwardRef,
	isValidElement,
	useContext,
} from "react";
import invariant from "tiny-invariant";
import { parseBooleanish } from "../../types/booleanish.js";
import { cx } from "../../utils/cx/cx.js";

type Orientation = "horizontal" | "vertical";
type Appearance = "classic" | "pill";

type TabsStateContextValue = {
	orientation: Orientation;
	appearance: Appearance;
};

const TabsStateContext = createContext<TabsStateContextValue>({
	orientation: "horizontal",
	appearance: "classic",
});

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * The root component that provides context for all tab components.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 *   <Tabs.Content value="password">
 *     <p>Change your password here.</p>
 *   </Tabs.Content>
 * </Tabs.Root>
 * ```
 */
const Root = forwardRef<
	ComponentRef<typeof TabsPrimitiveRoot>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveRoot> & {
		/**
		 * The appearance of the tabs. Classic appearance shows the tab
		 * list with an underline; pill appearance shows each tab as a pill.
		 * @default "classic"
		 */
		appearance?: "classic" | "pill";
	}
>(({ className, children, orientation = "horizontal", appearance = "classic", ...props }, ref) => (
	<TabsPrimitiveRoot
		className={cx("flex gap-4", orientation === "horizontal" ? "flex-col" : "flex-row", className)}
		orientation={orientation}
		ref={ref}
		{...props}
	>
		<TabsStateContext.Provider value={{ orientation, appearance }}>
			{children}
		</TabsStateContext.Provider>
	</TabsPrimitiveRoot>
));
Root.displayName = "Tabs";

/**
 * Variants for the List component
 */
const listVariants = cva("flex border-gray-200", {
	variants: {
		orientation: {
			horizontal: "flex-row items-center",
			vertical: "flex-col items-end gap-3.5 self-stretch",
		} as const satisfies Record<Orientation, string>,
		appearance: {
			classic: "",
			pill: "",
		} as const satisfies Record<Appearance, string>,
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			appearance: "pill",
			className: "gap-1",
		},
		{
			orientation: "horizontal",
			appearance: "classic",
			className: "gap-6 border-b",
		},
		{
			orientation: "vertical",
			appearance: "classic",
			className: "border-r",
		},
	],
});

/**
 * Contains the triggers that are aligned along the edge of the active content.
 * The container for tab triggers that provides the visual layout for tab navigation.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs-list
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 * </Tabs.Root>
 * ```
 */
const List = forwardRef<
	ComponentRef<typeof TabsPrimitiveList>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveList>
>(({ className, ...props }, ref) => {
	const { orientation, appearance } = useContext(TabsStateContext);

	return (
		<TabsPrimitiveList
			aria-orientation={orientation}
			className={cx(listVariants({ orientation, appearance }), className)}
			ref={ref}
			{...props}
		/>
	);
});
List.displayName = "TabsList";

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitiveTrigger>;

/**
 * Variants for the TabsTriggerDecoration component
 */
const triggerDecorationVariants = cva("absolute z-0", {
	variants: {
		orientation: {
			horizontal: "-bottom-px left-0 right-0 h-0.75",
			vertical: "-right-px bottom-0 top-0 w-0.75",
		} as const satisfies Record<Orientation, string>,
		appearance: {
			classic: "group-data-state-active/tab-trigger:bg-blue-600",
			pill: "hidden",
		} as const satisfies Record<Appearance, string>,
	},
});

const TabsTriggerDecoration = () => {
	const { orientation, appearance } = useContext(TabsStateContext);

	return (
		<span aria-hidden className={clsx(triggerDecorationVariants({ orientation, appearance }))} />
	);
};
TabsTriggerDecoration.displayName = "TabsTriggerDecoration";

/**
 * Variants for the Trigger component
 */
const triggerVariants = cva(
	cx(
		"group/tab-trigger relative flex cursor-pointer items-center gap-1 whitespace-nowrap py-3 text-sm font-medium text-gray-600",
		"ring-focus-accent outline-hidden",
		"aria-disabled:cursor-default aria-disabled:opacity-50",
		"focus-visible:ring-4",
		"[&>svg]:shrink-0 [&>svg]:size-5",
		"not-aria-disabled:hover:text-gray-900",
	),
	{
		variants: {
			orientation: {
				horizontal: "rounded-tl-md rounded-tr-md",
				vertical: "rounded-bl-md rounded-tl-md pr-3",
			} as const satisfies Record<Orientation, string>,
			appearance: {
				classic: cx(
					"not-aria-disabled:hover:data-state-active:text-blue-600",
					"data-state-active:text-blue-600",
				),
				pill: cx(
					"not-aria-disabled:hover:data-state-active:text-blue-700",
					"not-aria-disabled:hover:data-state-active:bg-accent-500/20",
					"data-state-active:text-blue-700",
					"data-state-active:bg-accent-500/20",
					"rounded-full py-2 px-3",
				),
			} as const satisfies Record<Appearance, string>,
		},
	},
);

/**
 * The button that activates its associated content.
 * A clickable tab trigger that switches between different tab content panels.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs-trigger
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 * </Tabs.Root>
 * ```
 */
const Trigger = forwardRef<ComponentRef<typeof TabsPrimitiveTrigger>, TabsTriggerProps>(
	(
		{
			"aria-disabled": _ariaDisabled,
			asChild = false,
			children,
			className,
			disabled: _disabled,
			...props
		},
		ref,
	) => {
		const { orientation, appearance } = useContext(TabsStateContext);
		const disabled = parseBooleanish(_ariaDisabled ?? _disabled);

		const tabsTriggerProps = {
			"aria-disabled": _ariaDisabled ?? _disabled,
			className: cx(triggerVariants({ orientation, appearance }), className),
			disabled,
			...props,
		};

		if (asChild) {
			const singleChild = Children.only(children);
			invariant(
				isValidElement<TabsTriggerProps>(singleChild),
				"When using `asChild`, TabsTrigger must be passed a single child as a JSX tag.",
			);
			const grandchildren = singleChild.props?.children;

			const cloneProps = disabled
				? /**
					 * When disabled, prevent anchor/link children from being clickable by
					 * removing their href/to props!
					 * This is necessary because `<a>` doesn't support the `disabled`
					 * attribute and would be navigable. We could use `pointer-events-none`
					 * instead, but don't by default because it would also prevent tooltip
					 * interactions, which may be surprising.
					 */
					{ href: undefined, to: undefined }
				: /**
					 * when NOT disabled, allow keyboard navigation to the trigger,
					 * even for asChild anchors/links
					 */
					{ tabIndex: 0 };

			return (
				<TabsPrimitiveTrigger asChild {...tabsTriggerProps} ref={ref}>
					{cloneElement(
						disabled ? <button type="button" /> : singleChild,
						cloneProps,
						<>
							<TabsTriggerDecoration />
							{grandchildren}
						</>,
					)}
				</TabsPrimitiveTrigger>
			);
		}

		return (
			<TabsPrimitiveTrigger ref={ref} {...tabsTriggerProps}>
				<TabsTriggerDecoration />
				{children}
			</TabsPrimitiveTrigger>
		);
	},
);
Trigger.displayName = "TabsTrigger";

/**
 * A badge component that can be used inside tab triggers to display additional information.
 * Typically used to show counts or status indicators within tab headers.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tab-badge
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">
 *       Account <Tabs.Badge>5</Tabs.Badge>
 *     </Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 * </Tabs.Root>
 * ```
 */
const Badge = ({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
	<span
		className={cx(
			"rounded-full bg-gray-500/20 px-1.5 text-xs font-medium text-gray-600",
			"group-data-state-active/tab-trigger:bg-blue-500/20 group-data-state-active/tab-trigger:text-blue-700 group-hover/tab-trigger:group-enabled/tab-trigger:group-data-state-active/tab-trigger:text-blue-700",
			"group-hover/tab-trigger:group-enabled/tab-trigger:text-gray-700",
			className,
		)}
		{...props}
	>
		{children}
	</span>
);
Badge.displayName = "TabBadge";

/**
 * Contains the content associated with each trigger.
 * The content panel that displays when its corresponding tab trigger is active.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs-content
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 *   <Tabs.Content value="password">
 *     <p>Change your password here.</p>
 *   </Tabs.Content>
 * </Tabs.Root>
 * ```
 */
const Content = forwardRef<
	ComponentRef<typeof TabsPrimitiveContent>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveContent>
>(({ className, ...props }, ref) => (
	<TabsPrimitiveContent
		ref={ref}
		className={cx("focus-visible:ring-focus-accent outline-hidden focus-visible:ring-4", className)}
		{...props}
	/>
));
Content.displayName = "TabsContent";

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * The root component that provides context for all tab components.
 *
 * @see https://mantle.ngrok.com/components/tabs
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 *   <Tabs.Content value="password">
 *     <p>Change your password here.</p>
 *   </Tabs.Content>
 * </Tabs.Root>
 * ```
 */
const Tabs = {
	/**
	 * The root container of the tabs component that provides context for all tab components.
	 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
	 *
	 * @see https://mantle.ngrok.com/components/tabs#api-tabs-root
	 *
	 * @example
	 * ```tsx
	 * <Tabs.Root defaultValue="account">
	 *   <Tabs.List>
	 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
	 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
	 *   </Tabs.List>
	 *   <Tabs.Content value="account">
	 *     <p>Make changes to your account here.</p>
	 *   </Tabs.Content>
	 * </Tabs.Root>
	 * ```
	 */
	Root,
	/**
	 * Contains the content associated with each trigger.
	 * The content panel that displays when its corresponding tab trigger is active.
	 *
	 * @see https://mantle.ngrok.com/components/tabs#api-tabs-content
	 *
	 * @example
	 * ```tsx
	 * <Tabs.Root defaultValue="account">
	 *   <Tabs.List>
	 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
	 *   </Tabs.List>
	 *   <Tabs.Content value="account">
	 *     <p>Make changes to your account here.</p>
	 *   </Tabs.Content>
	 * </Tabs.Root>
	 * ```
	 */
	Content,
	/**
	 * Contains the triggers that are aligned along the edge of the active content.
	 * The container for tab triggers that provides the visual layout for tab navigation.
	 *
	 * @see https://mantle.ngrok.com/components/tabs#api-tabs-list
	 *
	 * @example
	 * ```tsx
	 * <Tabs.Root defaultValue="account">
	 *   <Tabs.List>
	 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
	 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
	 *   </Tabs.List>
	 * </Tabs.Root>
	 * ```
	 */
	List,
	/**
	 * The button that activates its associated content.
	 * A clickable tab trigger that switches between different tab content panels.
	 *
	 * @see https://mantle.ngrok.com/components/tabs#api-tabs-trigger
	 *
	 * @example
	 * ```tsx
	 * <Tabs.Root defaultValue="account">
	 *   <Tabs.List>
	 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
	 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
	 *   </Tabs.List>
	 * </Tabs.Root>
	 * ```
	 */
	Trigger,
	/**
	 * A badge component that can be used inside tab triggers to display additional information.
	 * Typically used to show counts or status indicators within tab headers.
	 *
	 * @see https://mantle.ngrok.com/components/tabs#api-tab-badge
	 *
	 * @example
	 * ```tsx
	 * <Tabs.Root defaultValue="account">
	 *   <Tabs.List>
	 *     <Tabs.Trigger value="account">
	 *       Account <Tabs.Badge>5</Tabs.Badge>
	 *     </Tabs.Trigger>
	 *   </Tabs.List>
	 * </Tabs.Root>
	 * ```
	 */
	Badge,
} as const;

export {
	//
	Tabs,
};
