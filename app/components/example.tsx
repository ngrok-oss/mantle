import { cx } from "@/core";
import { WithStyleProps } from "@/types";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & WithStyleProps;

export function Example({ children, className, style }: Props) {
	return (
		<div
			className={cx(
				"flex items-center justify-center rounded-lg rounded-b-none border border-b-0 border-gray-300 bg-gradient-to-br from-[#fcfcfc] to-gray-100 p-4 dark-high-contrast:from-gray-50 dark-high-contrast:to-white high-contrast:from-white high-contrast:to-gray-50 dark:from-gray-200 dark:to-gray-50 md:p-16",
				className,
			)}
			style={style}
		>
			{children}
		</div>
	);
}
