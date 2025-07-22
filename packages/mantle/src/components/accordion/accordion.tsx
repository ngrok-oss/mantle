"use client";

import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
	type ComponentPropsWithoutRef,
	type ComponentRef,
	forwardRef,
} from "react";
import { cx } from "../../utils/cx/cx.js";
import { Icon, type IconProps } from "../icon/icon.js";

/**
 * A vertically stacked set of interactive headings that each reveal a section of content.
 * The root component that contains all accordion items.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionHeading>
 *       <AccordionTrigger>
 *         <AccordionTriggerIcon />
 *         Is it accessible?
 *       </AccordionTrigger>
 *     </AccordionHeading>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const Accordion = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Root
		ref={ref}
		className={cx("w-full space-y-2.5", className)}
		{...props}
	/>
));
Accordion.displayName = "Accordion";

/**
 * Contains all the parts of a collapsible section.
 * A single accordion item that can be expanded or collapsed.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-item
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionHeading>
 *       <AccordionTrigger>
 *         <AccordionTriggerIcon />
 *         Is it accessible?
 *       </AccordionTrigger>
 *     </AccordionHeading>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const AccordionItem = AccordionPrimitive.Item;
AccordionItem.displayName = "AccordionItem";

/**
 * Wraps an AccordionTrigger.
 * Contains the accordion trigger and provides proper heading semantics.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-heading
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionHeading>
 *       <AccordionTrigger>
 *         <AccordionTriggerIcon />
 *         Is it accessible?
 *       </AccordionTrigger>
 *     </AccordionHeading>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const AccordionHeading = forwardRef<
	ComponentRef<"div">,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Header
		ref={ref}
		className={cx("flex items-center gap-2", className)}
		{...props}
	/>
));
AccordionHeading.displayName = "AccordionHeading";

/**
 * Toggles the collapsed state of its associated item.
 * The interactive element that expands or collapses the accordion content.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-trigger
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionHeading>
 *       <AccordionTrigger>
 *         <AccordionTriggerIcon />
 *         Is it accessible?
 *       </AccordionTrigger>
 *     </AccordionHeading>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const AccordionTrigger = forwardRef<
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
AccordionTrigger.displayName = "AccordionTrigger";

/**
 * An icon that indicates the expanded/collapsed state of the accordion trigger.
 * Rotates based on the accordion item state to provide visual feedback.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-trigger-icon
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionHeading>
 *       <AccordionTrigger>
 *         <AccordionTriggerIcon />
 *         Is it accessible?
 *       </AccordionTrigger>
 *     </AccordionHeading>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const AccordionTriggerIcon = ({
	className,
	...props
}: Omit<IconProps, "svg">) => (
	<Icon
		{...props}
		svg={<CaretDownIcon weight="fill" />}
		className={cx("group-data-state-open:rotate-0 -rotate-90", className)}
	/>
);
AccordionTriggerIcon.displayName = "AccordionTriggerIcon";

/**
 * Contains the collapsible content for an item.
 * The content area that is revealed when the accordion item is expanded.
 *
 * @see https://mantle.ngrok.com/components/accordion#api-accordion-content
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionHeading>
 *       <AccordionTrigger>
 *         <AccordionTriggerIcon />
 *         Is it accessible?
 *       </AccordionTrigger>
 *     </AccordionHeading>
 *     <AccordionContent>
 *       Yes. It adheres to the WAI-ARIA design pattern.
 *     </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const AccordionContent = forwardRef<
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
AccordionContent.displayName = "AccordionContent";

export {
	//,
	Accordion,
	AccordionContent,
	AccordionHeading,
	AccordionItem,
	AccordionTrigger,
	AccordionTriggerIcon,
};
