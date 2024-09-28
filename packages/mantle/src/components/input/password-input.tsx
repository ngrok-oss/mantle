import { Eye } from "@phosphor-icons/react/Eye";
import { EyeClosed } from "@phosphor-icons/react/EyeClosed";
import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Input, InputCapture } from "./input.js";
import type { InputType, WithAutoComplete, WithValidation } from "./types.js";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> &
	WithValidation &
	WithAutoComplete & {
		/**
		 * Mask the true length of the password input with a fixed width when the value is hidden and the input is not focused.
		 * @default false
		 */
		maskHiddenValue?: boolean;
		/**
		 * Callback for when the visibility of the password value changes.
		 */
		onValueVisibilityChange?: (visible: boolean) => void;
		/**
		 * Show/hide the password value as a controlled state.
		 * @default false
		 */
		showValue?: boolean;
	};

type PasswordInputType = Extract<InputType, "text" | "password">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ maskHiddenValue = false, onBlur, onFocus, onValueVisibilityChange, showValue = false, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState<boolean>(showValue);
		const type: PasswordInputType = showPassword ? "text" : "password";
		const EyeCon = showPassword ? Eye : EyeClosed;

		useEffect(() => {
			setShowPassword(showValue);
		}, [showValue]);

		const [isFocused, setIsFocused] = useState(false);
		const shouldMaskHiddenValue = maskHiddenValue && !showPassword && !isFocused;

		return (
			<Input
				onBlur={(event) => {
					setIsFocused(false);
					onBlur?.(event);
				}}
				onFocus={(event) => {
					setIsFocused(true);
					onFocus?.(event);
				}}
				type={type}
				ref={ref}
				{...props}
			>
				<InputCapture className={clsx(shouldMaskHiddenValue && "max-w-6")} />
				<button
					type="button"
					tabIndex={-1}
					className="text-body hover:text-strong ml-1 cursor-pointer bg-inherit p-0"
					onClick={() => {
						setShowPassword(!showPassword);
						onValueVisibilityChange?.(!showPassword);
					}}
				>
					<span className="sr-only">Turn password visibility {showPassword ? "off" : "on"}</span>
					<EyeCon aria-hidden />
				</button>
			</Input>
		);
	},
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
export type { PasswordInputProps };
