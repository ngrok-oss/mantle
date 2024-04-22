import { cx } from "@ngrok/mantle/cx";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement>;

/**
 * @todo replace with <Badge /> when it's available
 */
export const PreviewBadge = ({ children = "Preview", className, ...props }: Props) => (
	<span className={cx("rounded-md bg-purple-500 px-1.5 text-xs leading-5 text-on-filled", className)} {...props}>
		{children}
	</span>
);
