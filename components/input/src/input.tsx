import { Warning } from "@phosphor-icons/react/Warning";
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from "react";
import { createContext, forwardRef, useContext } from "react";
import { cx } from "../../core";
import type { WithAutoComplete, WithInputType, WithInvalid } from "./types";

type BaseProps = WithAutoComplete & WithInputType & WithInvalid;

/**
 * The props for the `Input` component.
 */
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> & BaseProps & PropsWithChildren;

/**
 * Used to create interactive controls for web-based forms in order to accept data from the user
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({ children, className, ...props }, inputRef) => {
	const hasChildren = Boolean(children);

	if (hasChildren) {
		return (
			<InputContainer className={className} __private={{ inputRef }} {...props}>
				{children}
			</InputContainer>
		);
	}

	return (
		<InputContainer invalid={props.invalid} className={className}>
			<InputCapture ref={inputRef} {...props} />
		</InputContainer>
	);
});
Input.displayName = "Input";

type InputCaptureProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> & BaseProps;

/**
 * The actual <input /> element that captures user input.
 */
const InputCapture = forwardRef<HTMLInputElement, InputCaptureProps>(
	({ "aria-invalid": _ariaInvalid, className, invalid = false, ...restProps }, ref) => {
		const { "aria-invalid": ctxAriaInvalid, invalid: ctxInvalid, ref: ctxRef, ...ctx } = useContext(InputContext);
		const ariaInvalid = ctxAriaInvalid ?? ctxInvalid ?? _ariaInvalid ?? invalid;
		const props = { ...ctx, ...restProps, type: restProps.type ?? ctx.type ?? "text" };

		return (
			<input
				aria-invalid={ariaInvalid}
				className={cx("min-w-0 flex-1 bg-form placeholder:text-placeholder focus:outline-none", className)}
				ref={ctxRef ?? ref}
				{...props}
			/>
		);
	},
);
InputCapture.displayName = "InputCapture";

type InputContextType = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> &
	BaseProps & {
		/**
		 * ref to the input element, forwarded from `Input` to `InputCapture`
		 */
		ref?: ForwardedRef<HTMLInputElement>;
	};

const InputContext = createContext<InputContextType>({ invalid: false });

type InputContainerProps = InputHTMLAttributes<HTMLInputElement> &
	BaseProps & {
		/**
		 * @private __SECRET_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
		 */
		__private?: {
			/**
			 * @private ref to the input element, forwarded from `Input` to `InputCapture`
			 */
			inputRef: ForwardedRef<HTMLInputElement>;
		};
	};

/**
 * The container for the input element.
 */
const InputContainer = forwardRef<HTMLInputElement, InputContainerProps>(
	({ "aria-invalid": _ariaInvalid, children, className, invalid, type, __private, style, ...props }, ref) => {
		const ariaInvalid = _ariaInvalid ?? invalid;

		return (
			<InputContext.Provider
				value={{ "aria-invalid": _ariaInvalid, invalid, type, ...props, ref: ref ?? __private?.inputRef }}
			>
				<div
					aria-invalid={ariaInvalid}
					className={cx(
						"flex h-11 w-full items-center gap-1.5 rounded-md border bg-form px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-within:outline-none focus-within:ring-4 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 sm:h-9 sm:text-sm",
						"has-[input:not(:first-child)]:ps-2.5 has-[input:not(:last-child)]:pe-2.5 [&>:not(input)]:shrink-0 [&_svg]:size-6 sm:[&_svg]:size-5",
						"border-form text-strong focus-within:border-accent-600 focus-within:ring-focus-accent",
						"aria-invalid:border-danger-600 aria-invalid:pe-2.5 aria-invalid:focus-within:border-danger-600 aria-invalid:focus-within:ring-focus-danger",
						className,
					)}
					ref={ref}
					style={style}
				>
					{children}
					{invalid && (
						<div className="pointer-events-none order-last text-danger-600">
							<span className="sr-only">The value entered for the {props.name ?? ""} input has failed validation.</span>
							<Warning aria-hidden weight="fill" />
						</div>
					)}
				</div>
			</InputContext.Provider>
		);
	},
);
InputContainer.displayName = "InputContainer";

export { Input, InputContainer, InputCapture };
export type { InputProps, InputCaptureProps, InputContainerProps };
