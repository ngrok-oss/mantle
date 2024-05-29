import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../cx";

const RadioGroup = forwardRef<
	ElementRef<typeof RadioGroupPrimitive.Root>,
	ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cx(
				"grid gap-2 border",
				// "has-[[data-state='checked']]:border-green-600 has-[[data-state='checked']]:bg-red-600/10",
				className,
			)}
			{...props}
			ref={ref}
		/>
	);
});
RadioGroup.displayName = "RadioGroup";

const RadioButton = forwardRef<
	ElementRef<typeof RadioGroupPrimitive.Item>,
	ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cx(
				"relative size-4 shrink-0 overflow-hidden rounded-full border border-form bg-form active:bg-form-active disabled:opacity-50",
				"data-state-checked:border-transparent data-state-checked:bg-accent-500",
				"focus:border-accent-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent",
				"focus:data-state-checked:border-accent-600",
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
				<div className="size-2 rounded-full bg-[#fff]" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
});
RadioButton.displayName = "RadioButton";

export { RadioGroup, RadioButton };
