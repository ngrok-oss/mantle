"use client";

import { CheckCircleIcon } from "@phosphor-icons/react/CheckCircle";
import { WarningIcon } from "@phosphor-icons/react/Warning";
import { WarningDiamondIcon } from "@phosphor-icons/react/WarningDiamond";
import clsx from "clsx";
import type {
	ComponentRef,
	ForwardedRef,
	InputHTMLAttributes,
	MutableRefObject,
	PropsWithChildren,
} from "react";
import { createContext, forwardRef, useContext, useRef } from "react";
import { composeRefs } from "../../utils/compose-refs/compose-refs.js";
import { cx } from "../../utils/cx/cx.js";
import { Icon } from "../icon/icon.js";
import type {
	Validation,
	WithAutoComplete,
	WithInputType,
	WithValidation,
} from "./types.js";

type BaseProps = WithAutoComplete & WithInputType & WithValidation;

/**
 * The props for the `Input` component.
 */
type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"autoComplete" | "type"
> &
	BaseProps &
	PropsWithChildren;

/**
 * Used to create interactive controls for web-based forms in order to accept data from the user.
 * A versatile input element that supports various types, validation states, and can be composed with other elements.
 *
 * @see https://mantle.ngrok.com/components/input#api-input
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="Enter your email"
 *   validation="success"
 * />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
	({ children, className, ...props }, forwardedRef) => {
		const hasChildren = Boolean(children);
		const innerRef = useRef<ComponentRef<"input">>(null);

		if (hasChildren) {
			return (
				<InputContainer
					className={className}
					forwardedRef={forwardedRef}
					innerRef={innerRef}
					{...props}
				>
					{children}
				</InputContainer>
			);
		}

		return (
			<InputContainer
				{...props}
				className={className}
				forwardedRef={forwardedRef}
				innerRef={innerRef}
			>
				<InputCapture {...props} />
			</InputContainer>
		);
	},
);
Input.displayName = "Input";

type InputCaptureProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"autoComplete" | "type"
> &
	BaseProps;

/**
 * The actual <input /> element that captures user input.
 * Used internally by Input component or when you need direct control over the input element.
 *
 * @see https://mantle.ngrok.com/components/input#api-input-capture
 *
 * @example
 * ```tsx
 * <Input>
 *   <InputCapture />
 *   <Icon svg={<SearchIcon />} />
 * </Input>
 * ```
 */
const InputCapture = forwardRef<HTMLInputElement, InputCaptureProps>(
	(
		{
			"aria-invalid": _ariaInvalid,
			className,
			validation: _validation,
			...restProps
		},
		ref,
	) => {
		const {
			"aria-invalid": ctxAriaInvalid,
			forwardedRef: ctxForwardedRef,
			innerRef: ctxInnerRef,
			validation: ctxValidation,
			...ctx
		} = useContext(InputContext);

		const validation = ctxValidation ?? _validation;
		const validationValue =
			(typeof validation === "function" ? validation() : validation) ||
			undefined;
		const ariaInvalid =
			ctxAriaInvalid ?? _ariaInvalid ?? validation === "error";
		const props = {
			...ctx,
			...restProps,
			type: restProps.type ?? ctx.type ?? "text",
		};

		return (
			<input
				aria-invalid={ariaInvalid}
				data-validation={validationValue}
				className={cx(
					"placeholder:text-placeholder min-w-0 flex-1 bg-transparent text-left autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--blue-50))] focus:outline-none",
					className,
				)}
				ref={composeRefs(ref, ctxForwardedRef, ctxInnerRef)}
				{...props}
			/>
		);
	},
);
InputCapture.displayName = "InputCapture";

type InputContextType = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"autoComplete" | "type"
> &
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

const InputContext = createContext<InputContextType>({
	validation: undefined,
	innerRef: { current: null },
});

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
	"aria-disabled": _ariaDisabled,
	children,
	className,
	disabled,
	forwardedRef,
	innerRef,
	style,
	type,
	validation: _validation,
	...props
}: InputContainerProps) => {
	const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
	const validation = isInvalid
		? "error"
		: typeof _validation === "function"
			? _validation()
			: _validation;
	const ariaInvalid = _ariaInvalid ?? validation === "error";

	return (
		<InputContext.Provider
			value={{
				"aria-invalid": _ariaInvalid,
				"aria-disabled": _ariaDisabled,
				disabled,
				type,
				validation,
				...props,
				forwardedRef,
				innerRef,
			}}
		>
			<div
				aria-invalid={ariaInvalid}
				aria-disabled={disabled ?? _ariaDisabled}
				data-validation={validation || undefined}
				className={cx(
					"pointer-coarse:text-base h-9 text-sm",
					"bg-form relative flex w-full items-center gap-1.5 rounded-md border px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-within:outline-none focus-within:ring-4 focus-visible:outline-none focus-visible:ring-4",
					"aria-disabled:opacity-50",
					"has-[input:not(:first-child)]:ps-2.5 has-[input:not(:last-child)]:pe-2.5 [&>:not(input)]:shrink-0 [&_svg]:size-5",
					"border-form text-strong has-[:focus-visible]:border-accent-600 has-[:focus-visible]:ring-focus-accent",
					"data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:border-success-600 has-[:focus-visible]:data-validation-success:ring-focus-success",
					"data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:border-warning-600 has-[:focus-visible]:data-validation-warning:ring-focus-warning",
					"data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:border-danger-600 has-[:focus-visible]:data-validation-error:ring-focus-danger",
					"autofill:shadow-[inset_0_0_0px_1000px_hsl(var(--blue-50))] has-[:autofill]:bg-blue-50 has-[:autofill]:[-webkit-text-fill-color:hsl(var(--text-strong))]", // Autofill styling on the input itself and any children with autofill styling
					className,
				)}
				onClick={() => {
					innerRef?.current?.focus();
				}}
				onKeyDown={() => {
					if (innerRef?.current !== document.activeElement) {
						innerRef?.current?.focus();
					}
				}}
				style={style}
			>
				{children}
				<ValidationFeedback name={props.name} validation={validation} />
			</div>
		</InputContext.Provider>
	);
};
InputContainer.displayName = "InputContainer";

export { Input, InputCapture };
export type { InputProps, InputCaptureProps };

const ValidationFeedback = ({
	name,
	validation,
}: { name?: string; validation: Validation | undefined }) => {
	switch (validation) {
		case "error":
			return (
				<div className="text-danger-600 pointer-events-none order-last select-none">
					<span className="sr-only">
						{clsx(
							"The value entered for the",
							name,
							"input has failed validation.",
						)}
					</span>
					<Icon svg={<WarningIcon aria-hidden weight="fill" />} />
				</div>
			);
		case "success":
			return (
				<div className="text-success-600 pointer-events-none order-last select-none">
					<Icon svg={<CheckCircleIcon weight="fill" />} />
				</div>
			);
		case "warning":
			return (
				<div className="text-warning-600 pointer-events-none order-last select-none">
					<Icon svg={<WarningDiamondIcon weight="fill" />} />
				</div>
			);
		default:
			return null;
	}
};
ValidationFeedback.displayName = "ValidationFeedback";
