import { Eye } from "@phosphor-icons/react/Eye";
import { EyeClosed } from "@phosphor-icons/react/EyeClosed";
import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import { cx } from "../../core";
import type { AutoComplete, InputType } from "../../input";
import { VariantProps } from "../../types/src/variant-props";

export type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> & {
	autoComplete?: AutoComplete;
};

const passwordInputVariants = cva(
	"flex h-11 sm:h-9 w-full rounded-md border bg-white dark:bg-gray-50 px-3 py-2 focus-within:outline-none focus-within:ring-4 disabled:pointer-events-none disabled:opacity-50 sm:text-sm",
	{
		variants: {
			state: {
				default:
					"text-gray-900 border-form placeholder:text-gray-400 focus-within:border-accent focus-within:ring-accent",
				danger: "border-danger focus-within:border-danger focus-within:ring-danger",
			},
		},
		defaultVariants: {
			state: "default",
		},
	},
);

type PasswordInputVariants = VariantProps<typeof passwordInputVariants>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ className, style, ...inputProps }, ref) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const type: Extract<InputType, "text" | "password"> = showPassword ? "text" : "password";
	const state: PasswordInputVariants["state"] = inputProps["aria-invalid"] ? "danger" : "default";

	return (
		<div className={cx(passwordInputVariants({ state }), className)} style={style}>
			<input ref={ref} className="m-0 flex-1 bg-transparent p-0 focus:outline-none" type={type} {...inputProps} />
			<button
				type="button"
				tabIndex={-1}
				className="ml-1 cursor-pointer bg-inherit p-0 text-default hover:text-gray-900"
				onClick={() => {
					setShowPassword((s) => !s);
				}}
			>
				{showPassword ? <Eye className="size-6 sm:size-5" /> : <EyeClosed className="size-6 sm:size-5" />}
			</button>
		</div>
	);
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
