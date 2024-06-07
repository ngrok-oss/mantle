import {
	Content as TabsPrimitiveContent,
	List as TabsPrimitiveList,
	Root as TabsPrimitiveRoot,
	Trigger as TabsPrimitiveTrigger,
} from "@radix-ui/react-tabs";
import clsx from "clsx";
import { createContext, forwardRef, useContext } from "react";
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react";
import { cx } from "../../cx";

type TabsStateContextValue = {
	orientation: "horizontal" | "vertical";
};

const TabsStateContext = createContext<TabsStateContextValue>({ orientation: "horizontal" });

const Tabs = forwardRef<ElementRef<typeof TabsPrimitiveRoot>, ComponentPropsWithoutRef<typeof TabsPrimitiveRoot>>(
	({ className, children, orientation = "horizontal", ...props }, ref) => (
		<TabsPrimitiveRoot
			className={cx("flex gap-4", orientation === "horizontal" ? "flex-col" : "flex-row", className)}
			orientation={orientation}
			ref={ref}
			{...props}
		>
			<TabsStateContext.Provider value={{ orientation }}>{children}</TabsStateContext.Provider>
		</TabsPrimitiveRoot>
	),
);
Tabs.displayName = "Tabs";

const TabsList = forwardRef<ElementRef<typeof TabsPrimitiveList>, ComponentPropsWithoutRef<typeof TabsPrimitiveList>>(
	({ className, ...props }, ref) => {
		const ctx = useContext(TabsStateContext);

		return (
			<TabsPrimitiveList
				aria-orientation={ctx.orientation}
				className={cx(
					"flex max-w-min border-gray-200",
					ctx.orientation === "horizontal"
						? // ? "flex-row items-center gap-6 border-b border-b-gray-200"
							"flex-row items-center gap-6 border-b"
						: // : "flex-col items-end gap-[0.875rem] min-h-full border-r border-r-gray-200",
							"h-full max-h-fit flex-col items-end gap-[0.875rem] border-r",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
TabsList.displayName = "TabsList";

type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitiveTrigger>;

const TabsTrigger = forwardRef<ElementRef<typeof TabsPrimitiveTrigger>, TabsTriggerProps>(
	({ children, className, ...props }, ref) => {
		const ctx = useContext(TabsStateContext);

		return (
			<TabsPrimitiveTrigger
				className={cx(
					"group/tab-trigger relative flex cursor-pointer items-center gap-1 whitespace-nowrap py-3 text-sm font-medium text-gray-600",
					ctx.orientation === "horizontal" && "rounded-tl-md rounded-tr-md",
					ctx.orientation === "vertical" && "rounded-bl-md rounded-tl-md pr-3",
					"outline-none ring-focus-accent",
					"disabled:cursor-default disabled:opacity-50",
					"focus-visible:ring-4",
					"[&>svg]:size-6 [&>svg]:shrink-0 [&>svg]:sm:size-5",
					"enabled:hover:data-state-active:text-blue-600 enabled:hover:text-gray-900",
					"data-state-active:text-blue-600",
					className,
				)}
				ref={ref}
				{...props}
			>
				<span
					aria-hidden
					className={clsx(
						"group-data-state-active/tab-trigger:bg-blue-600 absolute",
						ctx.orientation === "horizontal" && "bottom-0 left-0 right-0 h-[0.1875rem]",
						ctx.orientation === "vertical" && "bottom-0 right-0 top-0 w-[0.1875rem]",
					)}
				/>
				{children}
			</TabsPrimitiveTrigger>
		);
	},
);
TabsTrigger.displayName = "TabsTrigger";

const TabBadge = ({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
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

const TabsContent = forwardRef<
	ElementRef<typeof TabsPrimitiveContent>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveContent>
>(({ className, ...props }, ref) => (
	<TabsPrimitiveContent
		ref={ref}
		className={cx("outline-none focus-visible:ring-4 focus-visible:ring-focus-accent", className)}
		{...props}
	/>
));
TabsContent.displayName = "TabsContent";

export {
	//
	TabBadge,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
};
