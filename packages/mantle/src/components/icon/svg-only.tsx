import type { ComponentRef, ReactNode } from "react";
import { Children, cloneElement, forwardRef, isValidElement } from "react";
import invariant from "tiny-invariant";
import { cx } from "../../utils/cx/cx.js";
import type { SvgAttributes } from "./types.js";

type SvgOnlyProps = Omit<SvgAttributes, "children"> & {
	/**
	 * A single SVG icon element.
	 */
	svg: ReactNode;
};

/**
 * Accepts a single SVG icon element and decorates it with `shrink-0` class.
 *
 * Merges `className` selectors with the following order of precedence (last one wins):
 * 1. SvgOnly base classes ("shrink-0")
 * 2. SvgOnly className
 * 3. svg className
 *
 * You probably want to use the `Icon` component instead.
 *
 * The main difference between `Icon` and `SvgOnly` is that `SvgOnly` does not
 * apply any default sizing styles, only `shrink-0`.
 */
const SvgOnly = forwardRef<ComponentRef<"svg">, SvgOnlyProps>(
	({ className, style, svg, ...props }, ref) => {
		invariant(
			isValidElement<SvgAttributes>(svg) && Children.only(svg),
			"SvgOnly must be passed a single SVG icon as a JSX tag.",
		);

		return cloneElement(svg, {
			...props,
			className: cx(
				"shrink-0", // the SvgOnly base classes
				className, // the SvgOnly className
				svg.props.className, // the svg className
			),
			style: { ...style, ...svg.props.style },
			ref,
		});
	},
);

export {
	//,
	SvgOnly,
};

export type {
	//,
	SvgOnlyProps,
};
