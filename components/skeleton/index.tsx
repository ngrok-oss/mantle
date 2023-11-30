import { HTMLAttributes } from "react";
import { cx } from "../cx";

type Props = Exclude<HTMLAttributes<HTMLDivElement>, "children">;

function Skeleton({ className, ...props }: Props) {
	return <div className={cx("animate-pulse rounded-md bg-gray-200", className)} {...props} />;
}

export { Skeleton };
