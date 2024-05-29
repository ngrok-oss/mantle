import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import clsx from "clsx";
import { forwardRef, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { composeRefs } from "../../compose-refs";
import { cx } from "../../cx";

const RadioGroup = forwardRef<
	ElementRef<typeof RadioGroupPrimitive.Root>,
	ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cx(
				// "grid gap-2",
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
				"relative size-4 shrink-0 overflow-hidden rounded-full border border-form bg-form enabled:active:bg-form disabled:opacity-50",
				"data-state-checked:border-transparent data-state-checked:bg-accent-500 active:data-state-checked:bg-accent-500",
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

type SimpleRadioItemProps = Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, "asChild">;

const SimpleRadioItem = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, SimpleRadioItemProps>(
	({ children, disabled, className, style, ...props }, ref) => {
		const containerRef = useRef<ElementRef<"div">>(null);
		const childrenRef = useRef<ElementRef<"div">>(null);
		const innerRef = useRef<ElementRef<typeof RadioGroupPrimitive.Item> | null>(null);
		const [isActive, setIsActive] = useState(false);

		const clickRadio = () => {
			innerRef.current?.focus();
			innerRef.current?.click();
		};

		return (
			<div
				aria-disabled={disabled}
				ref={containerRef}
				className={cx(
					"flex select-none items-center gap-2",
					!disabled && "cursor-pointer [&_*]:cursor-pointer",
					className,
				)}
				style={style}
				onClick={(event) => {
					if (containerRef.current === event.target && innerRef.current !== document.activeElement) {
						clickRadio();
					}
				}}
				onMouseDown={() => {
					if (disabled) {
						return;
					}
					setIsActive(true);
				}}
				onBlur={() => {
					setIsActive(false);
				}}
				onMouseUp={() => {
					setIsActive(false);
				}}
				onMouseLeave={() => {
					setIsActive(false);
				}}
			>
				<RadioButton
					className={clsx(isActive && "border-accent-600 data-state-checked:border-accent-600")}
					disabled={disabled}
					ref={composeRefs(ref, innerRef)}
					{...props}
				/>
				<div
					ref={childrenRef}
					onClick={(event) => {
						if (childrenRef.current === event.target && innerRef.current !== document.activeElement) {
							clickRadio();
						}
					}}
					onMouseUp={() => {}}
					className={clsx(disabled && "opacity-50")}
				>
					{children}
				</div>
			</div>
		);
	},
);
SimpleRadioItem.displayName = "SimpleRadioItem";

export { RadioGroup, RadioButton, SimpleRadioItem };
