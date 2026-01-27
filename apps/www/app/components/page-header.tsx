import { cx } from "@ngrok/mantle/cx";
import type { ComponentProps } from "react";
import { PreviewBadge, UnreleasedBadge } from "./badges";
import { HashLinkHeading } from "./hash-link-heading";

type PageHeaderProps = Omit<ComponentProps<"h1">, "id"> & {
	id: string;
	isPreview?: boolean;
	isUnreleased?: boolean;
};

export const PageHeader = ({
	children,
	className,
	isPreview,
	isUnreleased,
	id,
	...props
}: PageHeaderProps) => (
	<div className="flex flex-wrap items-center gap-3">
		<HashLinkHeading id={id}>
			<h1 className={cx("text-4xl font-medium sm:text-5xl font-family", className)} {...props}>
				{children}
			</h1>
		</HashLinkHeading>
		{isPreview && <PreviewBadge />}
		{isUnreleased && <UnreleasedBadge />}
	</div>
);
