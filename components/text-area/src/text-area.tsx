import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cx } from "../../core";
import { VariantProps } from "../../types/";

const textAreaVariants = cva(
	"border-input flex min-h-[5.75rem] w-full rounded-md border bg-white px-3 py-[calc(theme(spacing[2.5])-1px)] shadow-sm focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 sm:min-h-[4.75rem] sm:py-[calc(theme(spacing[2])-1px)] sm:text-sm data-drag-over:border-dashed data-drag-over:ring-4",
	{
		variants: {
			state: {
				default:
					"text-strong border-form placeholder:text-placeholder focus:border-accent ring-accent data-drag-over:border-accent",
				danger:
					"border-danger placeholder:text-placeholder focus:border-danger ring-danger data-drag-over:border-danger data-drag-over:border-dashed",
			},
			appearance: {
				monospaced: "font-mono text-[0.9375rem] sm:text-[0.8125rem]",
			},
		},
		defaultVariants: {
			state: "default",
		},
	},
);

type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Pick<TextAreaVariants, "appearance">;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ appearance, className, ...props }, ref) => {
	const state = props["aria-invalid"] ? "danger" : "default";
	const [isDragOver, setIsDragOver] = useState(false);

	return (
		<textarea
			onDrop={(event) => {
				setIsDragOver(false);
				props.onDrop?.(event);
			}}
			onDragEnter={(event) => {
				setIsDragOver(true);
				props.onDragEnter?.(event);
			}}
			onDragLeave={(event) => {
				setIsDragOver(false);
				props.onDragLeave?.(event);
			}}
			data-drag-over={isDragOver}
			className={cx(textAreaVariants({ appearance, state }), className)}
			ref={ref}
			{...props}
		/>
	);
});
TextArea.displayName = "TextArea";

export { TextArea };
