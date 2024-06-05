import { Warning } from "@phosphor-icons/react/Warning";
import type { ElementRef, ForwardedRef, InputHTMLAttributes, MutableRefObject, PropsWithChildren } from "react";
import { createContext, forwardRef, useContext, useRef } from "react";
import { composeRefs } from "../../compose-refs";
import { cx } from "../../cx";
import type { WithAutoComplete, WithInputType, WithInvalid } from "./types";

type BaseProps = WithAutoComplete & WithInputType & WithInvalid;

/**
 * The props for the `Input` component.
 */
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> & BaseProps & PropsWithChildren;

/**
 * Used to create interactive controls for web-based forms in order to accept data from the user
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({ children, className, ...props }, forwardedRef) => {
	const hasChildren = Boolean(children);
	const innerRef = useRef<ElementRef<"input">>(null);

	if (hasChildren) {
		return (
			<InputContainer className={className} forwardedRef={forwardedRef} innerRef={innerRef} {...props}>
				{children}
			</InputContainer>
		);
	}

	return (
		<InputContainer {...props} className={className} forwardedRef={forwardedRef} innerRef={innerRef}>
			<InputCapture {...props} />
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
		const {
			"aria-invalid": ctxAriaInvalid,
			invalid: ctxInvalid,
			forwardedRef: ctxForwardedRef,
			innerRef: ctxInnerRef,
			...ctx
		} = useContext(InputContext);
		const ariaInvalid = ctxAriaInvalid ?? ctxInvalid ?? _ariaInvalid ?? invalid;
		const props = { ...ctx, ...restProps, type: restProps.type ?? ctx.type ?? "text" };

		return (
			// <input
			// 	aria-invalid={ariaInvalid}
			// 	className={cx("min-w-0 flex-1 bg-form placeholder:text-placeholder focus:outline-none", className)}
			// 	ref={composeRefs(ref, ctxForwardedRef, ctxInnerRef)}
			// 	{...props}
			// />
			<div className={cx("min-w-0 flex-1")}>
				<input
					aria-invalid={ariaInvalid}
					className={cx("w-full bg-form placeholder:text-placeholder focus:outline-none", className)}
					ref={composeRefs(ref, ctxForwardedRef, ctxInnerRef)}
					{...props}
				/>
			</div>
		);
	},
);
InputCapture.displayName = "InputCapture";

type InputContextType = Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "type"> &
	BaseProps & {
		/**
		 * inner ref for the input element, controlled by `Input`
		 */
		innerRef: MutableRefObject<HTMLInputElement | null>;
		/**
		 * forwarded ref to the input element, forwarded from `Input` to `InputCapture`
		 */
		forwardedRef?: ForwardedRef<HTMLInputElement>;
	};

const InputContext = createContext<InputContextType>({ invalid: false, innerRef: { current: null } });

type InputContainerProps = InputHTMLAttributes<HTMLInputElement> &
	BaseProps & {
		/**
		 * @private inner ref for the input element, controlled by `Input`
		 */
		innerRef: MutableRefObject<HTMLInputElement | null>;
		/**
		 * @private ref to the input element, forwarded from `Input` to `InputCapture`
		 */
		forwardedRef: ForwardedRef<HTMLInputElement>;
	};

/**
 * The container for the input element.
 */
const InputContainer = ({
	"aria-invalid": _ariaInvalid,
	children,
	className,
	forwardedRef,
	innerRef,
	invalid,
	style,
	type,
	...props
}: InputContainerProps) => {
	const ariaInvalid = _ariaInvalid ?? invalid;

	return (
		<InputContext.Provider
			value={{
				"aria-invalid": _ariaInvalid,
				invalid,
				type,
				...props,
				forwardedRef,
				innerRef,
			}}
		>
			<div
				aria-invalid={ariaInvalid}
				className={cx(
					"relative flex h-11 w-full items-center gap-1.5 rounded-md border bg-form px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-within:outline-none focus-within:ring-4 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 sm:h-9 sm:text-sm",
					"has-[input:not(:first-child)]:ps-2.5 has-[input:not(:last-child)]:pe-2.5 [&>:not(input)]:shrink-0 [&_svg]:size-6 sm:[&_svg]:size-5",
					"border-form text-strong focus-within:border-accent-600 focus-within:ring-focus-accent",
					ariaInvalid && "border-danger-600 pe-2.5 focus-within:border-danger-600 focus-within:ring-focus-danger",
					className,
				)}
				onClick={() => {
					innerRef?.current?.focus();
				}}
				style={style}
			>
				{children}
				{invalid && (
					<div className="pointer-events-none order-last select-none text-danger-600">
						<span className="sr-only">
							{["The value entered for the", props.name, "input has failed validation."].filter(Boolean).join(" ")}
						</span>
						<Warning aria-hidden weight="fill" />
					</div>
				)}
			</div>
		</InputContext.Provider>
	);
};

export { Input, InputCapture };
export type { InputProps, InputCaptureProps };
