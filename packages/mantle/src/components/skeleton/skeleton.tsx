import type { HTMLAttributes } from "react";
import { cx } from "../../../utils/cx";

type Props = Exclude<HTMLAttributes<HTMLDivElement>, "children">;

/**
 * A skeleton is a placeholder for content that is loading.
 * By using a skeleton, you can give the user an idea of what the content will
 * look like and reduce the perceived loading time and CLS (Cumulative Layout Shift).
 *
 * @note Default height is 1rem.
 */
function Skeleton({ className, ...props }: Props) {
	return (
		<div
			className={cx(
				"dark-high-contrast:bg-black/30 high-contrast:bg-black/30 h-4 animate-pulse rounded-md bg-gray-300/25 dark:bg-gray-950/10",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
