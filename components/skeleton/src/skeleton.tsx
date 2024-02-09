import { HTMLAttributes } from "react";
import { cx } from "../../core";

type Props = Exclude<HTMLAttributes<HTMLDivElement>, "children">;

/**
 * A skeleton is a placeholder for content that is loading.
 * By using a skeleton, you can give the user an idea of what the content will
 * look like and reduce the perceived loading time and CLS (Cumulative Layout Shift).
 *
 * @note Default height is 1rem.
 */
function Skeleton({ className, ...props }: Props) {
	return <div className={cx("h-4 animate-pulse rounded-md bg-gray-200", className)} {...props} />;
}

export { Skeleton };
