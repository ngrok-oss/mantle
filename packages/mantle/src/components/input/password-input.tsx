"use client";

import { EyeIcon } from "@phosphor-icons/react/Eye";
import { EyeClosedIcon } from "@phosphor-icons/react/EyeClosed";
import { forwardRef, useEffect, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Icon } from "../icon/icon.js";
import { Input, InputCapture } from "./input.js";
import type { InputType, WithAutoComplete, WithValidation } from "./types.js";

type PasswordInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
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

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ onValueVisibilityChange, showValue = false, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState<boolean>(showValue);
		const type: PasswordInputType = showPassword ? "text" : "password";
		const EyeCon = showPassword ? EyeIcon : EyeClosedIcon;

		useEffect(() => {
			setShowPassword(showValue);
		}, [showValue]);

		return (
			<Input type={type} ref={ref} {...props}>
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
	},
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
export type { PasswordInputProps };
