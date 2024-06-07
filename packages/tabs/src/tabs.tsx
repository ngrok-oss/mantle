import {
	Content as TabsPrimitiveContent,
	List as TabsPrimitiveList,
	Root as TabsPrimitiveRoot,
	Trigger as TabsPrimitiveTrigger,
} from "@radix-ui/react-tabs";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../cx";

const Tabs = TabsPrimitiveRoot;

const TabsList = forwardRef<ElementRef<typeof TabsPrimitiveList>, ComponentPropsWithoutRef<typeof TabsPrimitiveList>>(
	({ className, ...props }, ref) => (
		<TabsPrimitiveList
			ref={ref}
			className={cx(
				"bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1",
				className,
			)}
			{...props}
		/>
	),
);
TabsList.displayName = "TabsList";

const TabsTrigger = forwardRef<
	ElementRef<typeof TabsPrimitiveTrigger>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveTrigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitiveTrigger
		ref={ref}
		className={cx(
			"ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",
			className,
		)}
		{...props}
	/>
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = forwardRef<
	ElementRef<typeof TabsPrimitiveContent>,
	ComponentPropsWithoutRef<typeof TabsPrimitiveContent>
>(({ className, ...props }, ref) => (
	<TabsPrimitiveContent
		ref={ref}
		className={cx(
			"ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
			className,
		)}
		{...props}
	/>
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
