import { cx } from "@ngrok/mantle/cx";
import type { WithStyleProps } from "@ngrok/mantle/types";
import type { PropsWithChildren } from "react";
import { PreviewBadge, UnreleasedBadge } from "./badges";

type PageHeaderProps = WithStyleProps &
	PropsWithChildren & {
		id?: string;
		isPreview?: boolean;
		isUnreleased?: boolean;
	};

export const PageHeader = ({ children, className, style, id, isPreview, isUnreleased }: PageHeaderProps) => (
	<div className="flex flex-wrap items-center gap-3">
		<h1 className={cx("text-4xl font-medium sm:text-5xl", className)} style={style} id={id}>
			{children}
		</h1>
		{isPreview && <PreviewBadge />}
		{isUnreleased && <UnreleasedBadge />}
	</div>
);
