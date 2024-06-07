import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { cx } from "../../cx";

type LabelProps = ComponentPropsWithoutRef<"label"> & {
	disabled?: boolean;
};

const Label = forwardRef<ElementRef<"label">, LabelProps>(
	({ "aria-disabled": _ariaDisabled, children, className, disabled, onMouseDown, ...props }, ref) => (
		<label
			aria-disabled={disabled ?? _ariaDisabled}
			className={cx(
				"cursor-pointer peer-disabled:cursor-default has-[:disabled]:cursor-default aria-disabled:cursor-default",
				className,
			)}
			onMouseDown={(event) => {
				// only prevent text selection if clicking inside the label itself
				const target = event.target as HTMLElement;
				if (target.closest("button, input, select, textarea")) {
					return;
				}

				onMouseDown?.(event);

				// prevent text selection when double clicking label
				if (!event.defaultPrevented && event.detail > 1) {
					event.preventDefault();
				}
			}}
			ref={ref}
			{...props}
		>
			{children}
		</label>
	),
);
Label.displayName = "Label";

export {
	//
	Label,
};
