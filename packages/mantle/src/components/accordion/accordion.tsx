"use client";

import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef,
} from "react";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon, type IconProps } from "../icon/icon.js";

const Root = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Root
		ref={ref}
		className={cx("w-full space-y-2.5", className)}
		{...props}
	/>
));
Root.displayName = "Accordion";

const Item = AccordionPrimitive.Item;
Item.displayName = "AccordionItem";

const Heading = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Header
		ref={ref}
		className={cx("flex items-center gap-2", className)}
		{...props}
	/>
));
Heading.displayName = "AccordionHeading";

const Trigger = forwardRef<
	ComponentRef<"button">,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Trigger
		ref={ref}
		className={cx("group flex items-center gap-1.5", className)}
		{...props}
	>
		{children}
	</AccordionPrimitive.Trigger>
));
Trigger.displayName = "AccordionTrigger";

const TriggerIcon = ({ className, ...props }: Omit<IconProps, "svg">) => (
	<Icon
		{...props}
		svg={<CaretDownIcon weight="fill" />}
		className={cx("group-data-state-open:rotate-0 -rotate-90", className)}
	/>
);

const Content = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cx(
			"data-state-closed:animate-accordion-up data-state-open:animate-accordion-down overflow-hidden pt-4",
			className,
		)}
		{...props}
	>
		{children}
	</AccordionPrimitive.Content>
));
Content.displayName = "AccordionContent";

const Accordion = createNamespacedComponent(
	Root,
	{
		Content,
		Heading,
		Item,
		Trigger,
		TriggerIcon,
	},
	"Accordion",
);

export {
	//,
	Accordion,
};
