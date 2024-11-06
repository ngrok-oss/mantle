import type { ElementRef, ReactElement, ReactNode } from "react";
import { Children, cloneElement, forwardRef, isValidElement } from "react";
import invariant from "tiny-invariant";
import { cx } from "../../utils/cx/cx.js";
import type { SvgAttributes } from "./types.js";

type IconBaseProps = Omit<SvgAttributes, "children"> & {
	/**
	 * A single SVG icon element.
	 */
	svg: ReactNode;
};

/**
 * @private Internal component for Icon, should not be exported from mantle. Can be used in other mantle components if needed.
 * The main difference between Icon and IconBase is that IconBase does not apply any default sizing styles, only `shrink-0`.
 *
 * Decorates an svg icon with automatic sizing styles.
 * Merges `className` selectors with the following order of precedence (last one wins):
 * 1. Icon base classes
 * 2. svg className
 * 3. Icon className
 */
const IconBase = forwardRef<ElementRef<"svg">, IconBaseProps>(({ className, style, svg, ...props }, ref) => {
	const icon = Children.only(svg) as ReactElement<SvgAttributes>;
	invariant(isValidElement<SvgAttributes>(icon), "Icon must be passed a single SVG icon as a JSX tag.");

	return (
		<>
			{cloneElement(icon, {
				...props,
				className: cx("shrink-0", icon.props.className, className),
				style: { ...icon.props.style, ...style },
				ref,
			})}
		</>
	);
});

export {
	//,
	IconBase,
};
