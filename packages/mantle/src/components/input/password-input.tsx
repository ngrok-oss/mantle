"use client";

import { EyeIcon } from "@phosphor-icons/react/Eye";
import { EyeClosedIcon } from "@phosphor-icons/react/EyeClosed";
import { type ComponentProps, useEffect, useState } from "react";
import { Icon } from "../icon/icon.js";
import { Input, InputCapture } from "./input.js";
import type { InputType, WithAutoComplete, WithValidation } from "./types.js";

type PasswordInputProps = Omit<
	ComponentProps<"input">,
	"autoComplete" | "type"
> &
	WithValidation &
	WithAutoComplete & {
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

/**
 * A specialized input component for password entry with a toggle button to show/hide the password value.
 * Provides enhanced security UX by allowing users to verify their input while maintaining privacy.
 *
 * @see https://mantle.ngrok.com/components/input#api-password-input
 *
 * @example
 * ```tsx
 * <PasswordInput
 *   placeholder="Enter your password"
 *   showValue={false}
 *   onValueVisibilityChange={(visible) => console.log('Password visible:', visible)}
 * />
 * ```
 */
function PasswordInput({
	onValueVisibilityChange,
	showValue = false,
	...props
}: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState<boolean>(showValue);
	const type: PasswordInputType = showPassword ? "text" : "password";
	const EyeCon = showPassword ? EyeIcon : EyeClosedIcon;

	useEffect(() => {
		setShowPassword(showValue);
	}, [showValue]);

	return (
		<Input type={type} {...props}>
			<InputCapture />
			<button
				type="button"
				tabIndex={-1}
				className="text-body hover:text-strong ml-1 cursor-pointer bg-inherit p-0"
				onClick={() => {
					setShowPassword(!showPassword);
					onValueVisibilityChange?.(!showPassword);
				}}
			>
				<span className="sr-only">
					Turn password visibility {showPassword ? "off" : "on"}
				</span>
				<Icon svg={<EyeCon aria-hidden />} />
			</button>
		</Input>
	);
}
PasswordInput.displayName = "PasswordInput";

export {
	//,
	PasswordInput,
};

export type {
	//,
	PasswordInputProps,
};
