import { cx } from "@/cx";
import { WithStyleProps } from "@/types/with-style-props";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & WithStyleProps;

export function Example({ children, className, style }: Props) {
	return (
		<div
			className={cx(
				"rounded-lg border to-gray-100 from-[#fcfcfc] dark:from-gray-200 dark:to-gray-50 bg-gradient-to-br flex items-center justify-center p-4 md:p-16 border-b-0 border-gray-300 rounded-b-none dark-high-contrast:from-gray-50 dark-high-contrast:to-white high-contrast:from-white high-contrast:to-gray-50",
				className,
			)}
			style={style}
		>
			{children}
		</div>
	);
}
