import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cx } from "../../core";
import { VariantProps } from "../../types/";

const textAreaVariants = cva(
	"flex min-h-[5.75rem] sm:min-h-[4.75rem] w-full rounded-md border border-input bg-white dark:bg-gray-50 px-3 py-[calc(theme(spacing[2.5])-1px)] sm:py-[calc(theme(spacing[2])-1px)] shadow-sm focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 sm:text-sm",
	{
		variants: {
			state: {
				default: "text-strong border-form placeholder:text-placeholder focus:border-accent focus:ring-accent",
				danger: "border-danger placeholder:text-placeholder focus:border-danger focus:ring-danger",
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
	return <textarea className={cx(textAreaVariants({ appearance, state }), className)} ref={ref} {...props} />;
});
TextArea.displayName = "TextArea";

export { TextArea };
