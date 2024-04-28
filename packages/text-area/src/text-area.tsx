import { cva } from "class-variance-authority";
import { forwardRef, useRef, useState } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cx } from "../../cx";
import type { VariantProps } from "../../types";

const textAreaVariants = cva(
	"border-input flex min-h-24 w-full rounded-md border bg-form px-3 py-[calc(theme(spacing[2.5])-1px)] focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 data-drag-over:border-dashed data-drag-over:ring-4 sm:py-[calc(theme(spacing[2])-1px)] sm:text-sm",
	{
		variants: {
			/**
			 * Whether or not the textarea has a validation error.
			 */
			invalid: {
				false:
					"border-form text-strong ring-focus-accent placeholder:text-placeholder focus:border-accent-600 data-drag-over:border-accent-600",
				true: "border-danger-600 ring-focus-danger placeholder:text-placeholder focus:border-danger-600 data-drag-over:border-dashed data-drag-over:border-danger-600",
			},
			/**
			 * The visual style of the textarea.
			 */
			appearance: {
				monospaced: "font-mono text-[0.9375rem] sm:text-[0.8125rem]",
			},
		},
		defaultVariants: {
			invalid: false,
		},
	},
);

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaVariants;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{ appearance, "aria-invalid": _ariaInvalid, className, invalid, onDragEnter, onDragLeave, onDropCapture, ...props },
		ref,
	) => {
		const ariaInvalid = _ariaInvalid ?? invalid;
		const [isDragOver, setIsDragOver] = useState(false);
		const _ref = useRef<HTMLTextAreaElement | null>(null);

		return (
			<textarea
				aria-invalid={ariaInvalid}
				className={cx(textAreaVariants({ appearance, invalid }), className)}
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
