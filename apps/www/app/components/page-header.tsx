import { cx } from "@ngrok/mantle/cx";
import type { ComponentProps } from "react";
import { PreviewBadge, UnreleasedBadge } from "./badges";

type PageHeaderProps = ComponentProps<"h1"> & {
	isPreview?: boolean;
	isUnreleased?: boolean;
};

export const PageHeader = ({ children, className, isPreview, isUnreleased, ...props }: PageHeaderProps) => (
	<div className="flex flex-wrap items-center gap-3">
		<h1 className={cx("text-4xl font-medium sm:text-5xl", className)} {...props}>
			{children}
		</h1>
		{isPreview && <PreviewBadge />}
		{isUnreleased && <UnreleasedBadge />}
	</div>
);
