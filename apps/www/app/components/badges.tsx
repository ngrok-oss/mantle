import { Badge } from "@ngrok/mantle/badge";
import type { WithStyleProps } from "@ngrok/mantle/types";
import { HandPalmIcon } from "@phosphor-icons/react";
import { SparkleIcon } from "@phosphor-icons/react";

const PreviewBadge = ({ className, style }: WithStyleProps) => (
	<Badge
		className={className}
		appearance="muted"
		color="fuchsia"
		icon={<SparkleIcon />}
		style={style}
	>
		Preview
	</Badge>
);

const UnreleasedBadge = ({ className, style }: WithStyleProps) => (
	<Badge
		className={className}
		appearance="muted"
		color="red"
		icon={<HandPalmIcon />}
		style={style}
	>
		Unreleased
	</Badge>
);

export {
	//,
	PreviewBadge,
	UnreleasedBadge,
};
