import { Eye } from "@phosphor-icons/react/Eye";
import { EyeClosed } from "@phosphor-icons/react/EyeClosed";
import { forwardRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { InputCapture, InputContainer } from "./input";
import type { InputType, WithAutoComplete, WithInvalid } from "./types";

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> &
	WithInvalid &
	WithAutoComplete;

type PasswordInputType = Extract<InputType, "text" | "password">;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const type: PasswordInputType = showPassword ? "text" : "password";
	const EyeCon = showPassword ? Eye : EyeClosed;

	return (
		<InputContainer type={type} ref={ref} {...props}>
			<InputCapture />
			<button
				type="button"
				tabIndex={-1}
				className="ml-1 cursor-pointer bg-inherit p-0 text-body hover:text-strong"
				onClick={() => {
					setShowPassword((s) => !s);
				}}
			>
				<span className="sr-only">Turn password visibility {showPassword ? "off" : "on"}</span>
				<EyeCon aria-hidden />
			</button>
		</InputContainer>
	);
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
export type { PasswordInputProps };
