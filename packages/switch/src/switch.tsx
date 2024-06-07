import { Root as SwitchPrimitiveRoot, Thumb as SwitchPrimitiveThumb } from "@radix-ui/react-switch";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../cx";

const Switch = forwardRef<ElementRef<typeof SwitchPrimitiveRoot>, ComponentPropsWithoutRef<typeof SwitchPrimitiveRoot>>(
	({ className, ...props }, ref) => (
		<SwitchPrimitiveRoot
			className={cx(
				"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm outline-none transition-colors",
				"disabled:cursor-default disabled:opacity-50",
				"focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent",
				"data-state-checked:bg-accent-600 data-state-unchecked:bg-form",
				// "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
				className,
			)}
			{...props}
			ref={ref}
		>
			<SwitchPrimitiveThumb
				className={clsx(
					"pointer-events-none block size-4 rounded-full bg-[#fff] shadow-lg ring-0 transition-transform",
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
