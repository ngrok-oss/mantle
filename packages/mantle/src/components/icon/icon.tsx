import { type ElementRef, type ReactNode, forwardRef } from "react";
import { cx } from "../../utils/cx/cx.js";
import { SvgOnly } from "./svg-only.js";
import type { SvgAttributes } from "./types.js";

type IconProps = Omit<SvgAttributes, "children"> & {
	/**
	 * A single SVG icon element.
	 */
	svg: ReactNode;
};
/**
 * Decorates an svg icon with automatic sizing styles and a `shrink-0` class.
 *
 * Merges `className` selectors with the following order of precedence (last one wins):
 * 1. SvgOnly base classes
 * 2. Icon base classes
 * 3. Icon className
 * 4. svg className
 */
const Icon = forwardRef<ElementRef<"svg">, IconProps>(
	({ className, style, svg, ...props }, ref) => (
		<SvgOnly
			ref={ref}
			className={cx("size-5", className)}
			style={style}
			svg={svg}
			{...props}
		/>
	),
);

export {
	//,
	Icon,
};

export type {
	//,
	IconProps,
};
