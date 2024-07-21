import { cva } from "class-variance-authority";
import { forwardRef, useRef, useState } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cx } from "../../cx";
import type { WithValidation } from "../../input";
import type { VariantProps } from "../../types";

const textAreaVariants = cva(
	"border-input flex min-h-24 w-full rounded-md border bg-form px-3 py-[calc(theme(spacing[2.5])-1px)] focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-drag-over:border-dashed data-drag-over:ring-4 sm:py-[calc(theme(spacing[2])-1px)] sm:text-sm",
	{
		variants: {
			// /**
			//  * Whether or not the textarea has a validation error.
			//  */
			// invalid: {
			// 	false:
			// 		"border-form text-strong ring-focus-accent placeholder:text-placeholder focus:border-accent-600 data-drag-over:border-accent-600",
			// 	true: "border-danger-600 ring-focus-danger placeholder:text-placeholder focus:border-danger-600 data-drag-over:border-dashed data-drag-over:border-danger-600",
			// },
			/**
			 * The visual style of the textarea.
			 */
			appearance: {
				monospaced: "font-mono",
			},
		},
		// defaultVariants: {
		// 	invalid: false,
		// },
	},
);

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	WithValidation & {
		/**
		 * The visual style of the textarea.
		 */
		appearance?: "monospaced";
	};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			appearance,
			"aria-invalid": _ariaInvalid,
			className,
			onDragEnter,
			onDragLeave,
			onDropCapture,
			validation: _validation,
			...props
		},
		ref,
	) => {
		const isInvalid = _ariaInvalid != null && _ariaInvalid !== "false";
		const validation = isInvalid ? "error" : typeof _validation === "function" ? _validation() : _validation;
		const ariaInvalid = _ariaInvalid ?? validation === "error";
		const [isDragOver, setIsDragOver] = useState(false);
		const _ref = useRef<HTMLTextAreaElement | null>(null);

		return (
			<textarea
				aria-invalid={ariaInvalid}
				data-validation={validation || undefined} // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
				className={cx(
					appearance === "monospaced" && "font-mono text-[0.9375rem] sm:text-[0.8125rem]",
					"border-input flex min-h-24 w-full rounded-md border bg-form px-3 py-[calc(theme(spacing[2.5])-1px)] focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-drag-over:border-dashed data-drag-over:ring-4 sm:py-[calc(theme(spacing[2])-1px)] sm:text-sm",
					"placeholder:text-placeholder data-drag-over:border-dashed",
					"border-form text-strong ring-focus-accent focus:border-accent-600 data-drag-over:border-accent-600",
					"data-validation-error:border-danger-600 data-validation-error:ring-focus-danger data-validation-error:focus-visible:border-danger-600 data-validation-error:data-drag-over:border-danger-600",
					"data-validation-success:border-success-600 data-validation-success:ring-focus-success data-validation-success:focus-visible:border-success-600 data-validation-success:data-drag-over:border-success-600",
					"data-validation-warning:border-warning-600 data-validation-warning:ring-focus-warning data-validation-warning:focus-visible:border-warning-600 data-validation-warning:data-drag-over:border-warning-600",
					//,
					className,
				)}
				data-drag-over={isDragOver}
				onDragEnter={(event) => {
					setIsDragOver(true);
					onDragEnter?.(event);
				}}
				onDragLeave={(event) => {
					setIsDragOver(false);
					onDragLeave?.(event);
				}}
				onDropCapture={(event) => {
					setIsDragOver(false);
					_ref.current?.focus();
					onDropCapture?.(event);
				}}
				ref={(node) => {
					_ref.current = node;
					if (typeof ref === "function") {
						ref(node);
					} else if (ref) {
						ref.current = node;
					}
				}}
				{...props}
			/>
		);
	},
);
TextArea.displayName = "TextArea";

export { TextArea };
