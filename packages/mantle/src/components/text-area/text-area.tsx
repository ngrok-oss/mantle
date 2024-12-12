import { cva } from "class-variance-authority";
import { forwardRef, useRef, useState } from "react";
import type { TextareaHTMLAttributes } from "react";
import type { VariantProps } from "../../types/variant-props.js";
import { cx } from "../../utils/cx/cx.js";
import type { WithValidation } from "../input/types.js";

const textAreaVariants = cva(
	"border-input bg-form data-drag-over:border-dashed data-drag-over:ring-4 pointer-coarse:py-[calc(theme(spacing[2.5])-1px)] pointer-coarse:text-base pointer-fine:py-[calc(theme(spacing[2])-1px)] pointer-fine:text-sm flex min-h-24 w-full rounded-md border px-3 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			/**
			 * The visual style of the textarea.
			 */
			appearance: {
				monospaced: "pointer-coarse:text-[0.9375rem] pointer-fine:text-[0.8125rem] font-mono",
			},
		},
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
				data-validation={validation || undefined}
				className={cx(
					appearance === "monospaced" && "pointer-coarse:text-[0.9375rem] pointer-fine:text-[0.8125rem] font-mono",
					"border-input bg-form data-drag-over:border-dashed data-drag-over:ring-4 pointer-coarse:py-[calc(theme(spacing[2.5])-1px)] pointer-fine:py-[calc(theme(spacing[2])-1px)] pointer-coarse:text-base pointer-fine:text-sm flex min-h-24 w-full rounded-md border px-3 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
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
