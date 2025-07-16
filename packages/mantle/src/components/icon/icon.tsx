import { type ComponentRef, type ReactNode, forwardRef } from "react";
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
 *
 * @see https://mantle.ngrok.com/components/icon#api
 *
 * @example
 * ```tsx
 * import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
 *
 * <Icon svg={<ShrimpIcon />} />
 * ```
 */
const Icon = forwardRef<ComponentRef<"svg">, IconProps>(
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
Icon.displayName = "Icon";

export {
	//,
	Icon,
};

export type {
	//,
	IconProps,
};
