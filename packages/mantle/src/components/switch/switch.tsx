import { Root as SwitchPrimitiveRoot, Thumb as SwitchPrimitiveThumb } from "@radix-ui/react-switch";
import clsx from "clsx";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { parseBooleanish } from "../../types/booleanish.js";
import { cx } from "../../utils/cx/cx.js";

type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitiveRoot> & {
	/**
	 * Makes the element not mutable, meaning the user can not edit the control
	 * @note This is buggy and doesn't actually stop the switch from toggling
	 */
	readOnly?: boolean;
};

const Switch = forwardRef<ElementRef<typeof SwitchPrimitiveRoot>, SwitchProps>(
	({ "aria-readonly": _ariaReadOnly, className, readOnly: _readOnly, onChange, ...props }, ref) => {
		const readOnly = parseBooleanish(_readOnly ?? _ariaReadOnly);

		return (
			<SwitchPrimitiveRoot
				aria-readonly={readOnly}
				className={cx(
					"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full outline-none",
					"disabled:cursor-default disabled:opacity-50",
					"focus-visible:border-accent-600 focus-visible:ring-focus-accent focus-visible:outline-none focus-visible:ring-4",
					"data-state-checked:bg-blue-500 data-state-unchecked:bg-gray-400",
					className,
				)}
				onChange={(event) => {
					// TODO(cody): this doesn't actually stop the radix switch from toggling
					if (readOnly) {
						event.preventDefault();
						event.stopPropagation();
						return;
					}
					onChange?.(event);
				}}
				ref={ref}
				{...props}
			>
				<SwitchPrimitiveThumb
					className={clsx(
						"pointer-events-none block size-4 rounded-full bg-[#fff] shadow-md ring-0 transition-transform",
						"data-state-checked:translate-x-[1.125rem] data-state-unchecked:translate-x-[0.125rem]",
					)}
				/>
			</SwitchPrimitiveRoot>
		);
	},
);
Switch.displayName = "Switch";

export {
	//
	Switch,
};
