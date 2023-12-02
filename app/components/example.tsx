import { cx } from "@/cx";
import { WithStyleProps } from "@/types/with-style-props";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & WithStyleProps;

export function Example({ children, className, style }: Props) {
	return (
		<div
			className={cx(
				"rounded-lg border to-gray-200 from-gray-50 bg-gradient-to-br dark:bg-gradient-to-tl flex items-center justify-center p-4 md:p-16 border-b-0 border-gray-300 rounded-b-none",
				className,
			)}
			style={style}
		>
			{children}
		</div>
	);
}