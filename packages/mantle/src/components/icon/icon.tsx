import { forwardRef, type ElementRef, type ReactNode } from "react";
import { cx } from "../../utils/cx/cx.js";
import { IconBase } from "./_icon-base.js";
import type { SvgAttributes } from "./types.js";

type IconProps = Omit<SvgAttributes, "children"> & {
	/**
	 * A single SVG icon element.
	 */
	svg: ReactNode;
};
/**
 * Decorates an svg icon with automatic sizing styles.
 * Merges `className` selectors with the following order of precedence (last one wins):
 * 1. Icon base classes
 * 2. svg className
 * 3. Icon className
 */
const Icon = forwardRef<ElementRef<"svg">, IconProps>(({ className, style, svg, ...props }, ref) => (
	<IconBase ref={ref} className={cx("size-6 sm:size-5", className)} style={style} svg={svg} {...props} />
));

export {
	//,
	Icon,
};

export type {
	//,
	IconProps,
};
