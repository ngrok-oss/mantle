import { cx } from "@/core";
import { WithStyleProps } from "@/types";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & WithStyleProps;

export function Example({ children, className, style }: Props) {
	return (
		<div
			className={cx(
				"flex items-center justify-center rounded-lg rounded-b-none border border-b-0 border-gray-300 p-4 md:p-16",
				className,
			)}
			style={style}
		>
			{children}
		</div>
	);
}
