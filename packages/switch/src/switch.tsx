import { Root as SwitchPrimitiveRoot, Thumb as SwitchPrimitiveThumb } from "@radix-ui/react-switch";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../cx";

const Switch = forwardRef<ElementRef<typeof SwitchPrimitiveRoot>, ComponentPropsWithoutRef<typeof SwitchPrimitiveRoot>>(
	({ className, ...props }, ref) => (
		<SwitchPrimitiveRoot
			className={cx(
				"peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-form shadow-sm outline-none transition-colors sm:h-5 sm:w-9",
				"disabled:cursor-default disabled:opacity-50",
				"focus-visible:border-accent-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent",
				"data-state-checked:bg-blue-500 data-state-unchecked:bg-gray-400",
				className,
			)}
			{...props}
			ref={ref}
		>
			<SwitchPrimitiveThumb
				className={clsx(
					"pointer-events-none block size-5 rounded-full bg-[#fff] shadow-md ring-0 transition-transform sm:size-4",
					"data-state-checked:translate-x-4 data-state-unchecked:translate-x-0",
				)}
			/>
		</SwitchPrimitiveRoot>
	),
);
Switch.displayName = "Switch";

export {
	//
	Switch,
};
