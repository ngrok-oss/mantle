import {
	Content as TabsPrimitiveContent,
	List as TabsPrimitiveList,
	Root as TabsPrimitiveRoot,
	Trigger as TabsPrimitiveTrigger,
} from "@radix-ui/react-tabs";
import clsx from "clsx";
import type {
	ComponentPropsWithoutRef,
	ComponentRef,
	HTMLAttributes,
} from "react";
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

type TabsStateContextValue = {
	orientation: "horizontal" | "vertical";
};

const TabsStateContext = createContext<TabsStateContextValue>({
	orientation: "horizontal",
});

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * The root component that provides context for all tab components.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="account">
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
 * </Tabs>
 * ```
 */
const Root = forwardRef<
	ComponentRef<typeof TabsPrimitiveRoot>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveRoot>
>(({ className, children, orientation = "horizontal", ...props }, ref) => (
	<TabsPrimitiveRoot
		className={cx(
			"flex gap-4",
			orientation === "horizontal" ? "flex-col" : "flex-row",
			className,
		)}
		orientation={orientation}
		ref={ref}
		{...props}
	>
		<TabsStateContext.Provider value={{ orientation }}>
			{children}
		</TabsStateContext.Provider>
	</TabsPrimitiveRoot>
));
Root.displayName = "Tabs";

/**
 * Contains the triggers that are aligned along the edge of the active content.
 * The container for tab triggers that provides the visual layout for tab navigation.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs-list
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 * </Tabs>
 * ```
 */
const List = forwardRef<
	ComponentRef<typeof TabsPrimitiveList>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveList>
>(({ className, ...props }, ref) => {
	const ctx = useContext(TabsStateContext);

	return (
		<TabsPrimitiveList
			aria-orientation={ctx.orientation}
			className={cx(
				"flex border-gray-200",
				ctx.orientation === "horizontal"
					? "flex-row items-center gap-6 border-b"
					: "flex-col items-end gap-[0.875rem] self-stretch border-r",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
});
List.displayName = "TabsList";

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitiveTrigger>;

const TabsTriggerDecoration = () => {
	const ctx = useContext(TabsStateContext);

	return (
		<span
			aria-hidden
			className={clsx(
				"group-data-state-active/tab-trigger:bg-blue-600 absolute z-0",
				ctx.orientation === "horizontal" &&
					"-bottom-px left-0 right-0 h-[0.1875rem]",
				ctx.orientation === "vertical" &&
					"-right-px bottom-0 top-0 w-[0.1875rem]",
			)}
		/>
	);
};
TabsTriggerDecoration.displayName = "TabsTriggerDecoration";

/**
 * The button that activates its associated content.
 * A clickable tab trigger that switches between different tab content panels.
 *
 * @see https://mantle.ngrok.com/components/tabs#api-tabs-trigger
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">
 *     <p>Make changes to your account here.</p>
 *   </Tabs.Content>
 * </Tabs>
 * ```
 */
const Trigger = forwardRef<
	ComponentRef<typeof TabsPrimitiveTrigger>,
	TabsTriggerProps
>(
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
		const ctx = useContext(TabsStateContext);
		const disabled = parseBooleanish(_ariaDisabled ?? _disabled);

		const tabsTriggerProps = {
			"aria-disabled": _ariaDisabled ?? _disabled,
			className: cx(
				"group/tab-trigger relative flex cursor-pointer items-center gap-1 whitespace-nowrap py-3 text-sm font-medium text-gray-600",
				ctx.orientation === "horizontal" && "rounded-tl-md rounded-tr-md",
				ctx.orientation === "vertical" && "rounded-bl-md rounded-tl-md pr-3",
				"ring-focus-accent outline-none",
				"aria-disabled:cursor-default aria-disabled:opacity-50",
				"focus-visible:ring-4",
				"[&>svg]:shrink-0 [&>svg]:size-5",
				"not-aria-disabled:hover:text-gray-900 not-aria-disabled:hover:data-state-active:text-blue-600",
				"data-state-active:text-blue-600",
				className,
			),
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

			const cloneProps = {
				...(disabled
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
						{ tabIndex: 0 }),
			};

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
 * <Tabs defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">
 *       Account <Tabs.Badge>5</Tabs.Badge>
 *     </Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 * </Tabs>
 * ```
 */
const Badge = ({
	className,
	children,
	...props
}: HTMLAttributes<HTMLSpanElement>) => (
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
 * <Tabs defaultValue="account">
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
 * </Tabs>
 * ```
 */
const Content = forwardRef<
	ComponentRef<typeof TabsPrimitiveContent>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveContent>
>(({ className, ...props }, ref) => (
	<TabsPrimitiveContent
		ref={ref}
		className={cx(
			"focus-visible:ring-focus-accent outline-none focus-visible:ring-4",
			className,
		)}
		{...props}
	/>
));
Content.displayName = "TabsContent";

/**
 * A tabs namespace object that contains the tabs components.
 */
const Tabs = {
	Root,
	Content,
	List,
	Trigger,
	Badge,
} as const;

export {
	//
	Tabs,
};
