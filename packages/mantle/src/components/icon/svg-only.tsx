import type { ReactNode } from "react";
import { Children, cloneElement, isValidElement } from "react";
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
 * You probably want to use the `Icon` component instead.
 *
 * @see https://mantle.ngrok.com/components/icon#api-svg-only
 *
 * @example
 * ```tsx
 * import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
 *
 * <SvgOnly svg={<ShrimpIcon />} />
 * ```
 */
function SvgOnly({ className, style, svg, ...props }: SvgOnlyProps) {
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
	});
}
SvgOnly.displayName = "SvgOnly";

export {
	//,
	SvgOnly,
};

export type {
	//,
	SvgOnlyProps,
};
