import { Children, cloneElement, HTMLAttributes, isValidElement, ReactElement, ReactNode } from "react";
import invariant from "tiny-invariant";
import { cx } from "../../core";
import { WithStyleProps } from "../../types";

type IconProps = WithStyleProps & {
	/**
	 * A single SVG icon element.
	 */
	svg: ReactNode;
};

type SvgAttributes = HTMLAttributes<SVGElement> & {
	focusable?: "true" | "false";
};

/**
 * Decorates an svg icon with automatic sizing styles.
 * Merges `className` selectors with the following order of precedence (last one wins):
 * 1. Icon base classes
 * 2. svg className
 * 3. Icon className
 */
const Icon = ({ className, style, svg }: IconProps) => {
	const icon = Children.only(svg) as ReactElement;
	invariant(isValidElement<SvgAttributes>(icon), "Icon must be passed a single SVG icon as a JSX tag.");

	return (
		<>
			{cloneElement(icon, {
				className: cx("size-6 sm:size-5 shrink-0", icon.props.className, className),
				style: { ...icon.props.style, ...style },
			})}
		</>
	);
};

export { Icon };
export type { IconProps, SvgAttributes };
