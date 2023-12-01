import { HTMLAttributes } from "react";
import { cx } from "../cx";

type Props = Exclude<HTMLAttributes<HTMLDivElement>, "children">;

function InlineCode({ className, ...props }: Props) {
	return (
		<InlineCode
			className={cx("font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5", className)}
			{...props}
		></InlineCode>
	);
}

export { InlineCode };
