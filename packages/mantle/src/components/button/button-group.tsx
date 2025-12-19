import { cva } from "class-variance-authority";
import { type ComponentProps, type ComponentRef, forwardRef } from "react";
import type { VariantProps } from "../../types/index.js";
import { cx } from "../../utils/cx/cx.js";

const buttonGroupVariants = cva(
	"not-prose border-form inline-flex items-center rounded-md",
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
 *
 * @see https://mantle.ngrok.com/components/button-group#api-button-group
 *
 * @example
 * ```tsx
 * <ButtonGroup appearance="panel">
 *   <IconButton icon={<Bold />} label="Bold" />
 *   <IconButton icon={<Italic />} label="Italic" />
 *   <IconButton icon={<Underline />} label="Underline" />
 * </ButtonGroup>
 * ```
 */
const ButtonGroup = forwardRef<ComponentRef<"fieldset">, ButtonGroupProps>(
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
