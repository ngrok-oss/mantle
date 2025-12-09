import type { ComponentProps } from "react";
import { PreviewBadge, UnreleasedBadge } from "./badges";
import { HashLinkHeading } from "./hash-link-heading";

type PageHeaderProps = Omit<ComponentProps<"h1">, "id"> & {
	id: string;
	title: string;
	isPreview?: boolean;
	isUnreleased?: boolean;
	description?: string;
};

export const PageHeader = ({
	children,
	className,
	isPreview,
	isUnreleased,
	id,
	title,
	description,
	...props
}: PageHeaderProps) => (
	<div>
		<div className="flex flex-wrap items-center gap-3">
			<HashLinkHeading id={id}>
				<h1 className="mb-0">{title}</h1>
			</HashLinkHeading>
			{isPreview && <PreviewBadge />}
			{isUnreleased && <UnreleasedBadge />}
		</div>
		{description && (
			<p className="mt-4 text-xl font-body text-body">{description}</p>
		)}
	</div>
);
