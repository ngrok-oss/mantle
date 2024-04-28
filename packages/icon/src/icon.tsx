import { ReactNode } from "react";
import { cx } from "../../cx";
import { WithStyleProps } from "../../types";
import { IconBase } from "./_icon-base";

type IconProps = WithStyleProps & {
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
const Icon = ({ className, style, svg }: IconProps) => (
	<IconBase className={cx("size-6 sm:size-5", className)} style={style} svg={svg} />
);

export { Icon };
export type { IconProps };
