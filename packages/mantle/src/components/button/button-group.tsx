import { cva } from "class-variance-authority";
import { type ComponentProps, type ElementRef, forwardRef } from "react";
import type { VariantProps } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";

const buttonGroupVariants = cva(
	"border-form inline-flex items-center rounded-md",
	{
		variants: {
			/**
			 * Defines the visual style of the ButtonGroup.
			 */
			appearance: {
				panel:
					"bg-form gap-0.5 border p-[0.1875rem] [--icon-button-border-radius:0.125rem] [&>.separator]:mx-px",
				ghost: "gap-0.5",
				outlined: "", // TODO(cody): implement me
			},
		},
	},
);

type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;

type ButtonGroupProps = ComponentProps<"fieldset"> & ButtonGroupVariants;

/**
 * A contained group of related buttons.
 */
const ButtonGroup = forwardRef<ElementRef<"fieldset">, ButtonGroupProps>(
	({ appearance, className, children, ...props }, ref) => {
		return (
			<fieldset
				className={cx(buttonGroupVariants({ appearance }), className)}
				ref={ref}
				{...props}
			>
				{children}
			</fieldset>
		);
	},
);
ButtonGroup.displayName = "ButtonGroup";

export {
	//,
	ButtonGroup,
};

export type {
	//,
	ButtonGroupProps,
};
