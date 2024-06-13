import clsx from "clsx";
import { forwardRef, useEffect, useRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { composeRefs } from "../../compose-refs";
import { cx } from "../../cx";
import type { WithValidation } from "../../input";

type Props = Omit<ComponentPropsWithoutRef<"input">, "type" | "checked"> &
	WithValidation & {
		checked?: boolean | "indeterminate";
	};

/**
 * A form control that allows the user to toggle between checked and not checked.
 */
const Checkbox = forwardRef<ElementRef<"input">, Props>(
	({ "aria-invalid": _ariaInvalid, className, checked: _checked, validation: _validation, ...props }, ref) => {
		const innerRef = useRef<ElementRef<"input">>(null);
		const indeterminate = _checked === "indeterminate";
		const checked = !indeterminate || typeof _checked === "boolean" ? _checked : undefined;

		const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
		const validation = isInvalid ? "error" : typeof _validation === "function" ? _validation() : _validation;
		const ariaInvalid = _ariaInvalid ?? validation === "error";

		useEffect(() => {
			if (innerRef.current) {
				innerRef.current.indeterminate = indeterminate;
			}
		}, [indeterminate]);

		return (
			<input
				aria-invalid={ariaInvalid}
				data-validation={validation || undefined} // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
				className={clsx(
					"shrink-0 cursor-pointer select-none appearance-none rounded border border-form bg-form disabled:cursor-default disabled:opacity-50",
					"bg-center bg-no-repeat focus:outline-none",
					"focus-visible:border-accent-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus-accent",
					"checked:bg-accent-500 checked:bg-checked-icon",
					"indeterminate:bg-accent-500 indeterminate:bg-indeterminate-icon",
					"data-validation-success:border-success-600 data-validation-success:checked:bg-success-500 data-validation-success:indeterminate:bg-success-500 focus-visible:data-validation-success:border-success-600 focus-visible:data-validation-success:ring-focus-success",
					"data-validation-warning:border-warning-600 data-validation-warning:checked:bg-warning-500 data-validation-warning:indeterminate:bg-warning-500 focus-visible:data-validation-warning:border-warning-600 focus-visible:data-validation-warning:ring-focus-warning",
					"data-validation-error:border-danger-600 data-validation-error:checked:bg-danger-500 data-validation-error:indeterminate:bg-danger-500 focus-visible:data-validation-error:border-danger-600 focus-visible:data-validation-error:ring-focus-danger",
					cx("block size-4 p-0", className),
				)}
				checked={checked}
				ref={composeRefs(innerRef, ref)}
				type="checkbox"
				{...props}
			/>
		);
	},
);
Checkbox.displayName = "Checkbox";

export {
	//,
	Checkbox,
};
