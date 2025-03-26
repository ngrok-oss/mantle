import { Badge } from "@ngrok/mantle/badge";
import type { WithStyleProps } from "@ngrok/mantle/types";
import { HandPalm } from "@phosphor-icons/react/HandPalm";
import { Sparkle } from "@phosphor-icons/react/Sparkle";

const PreviewBadge = ({ className, style }: WithStyleProps) => (
	<Badge
		className={className}
		appearance="muted"
		color="fuchsia"
		icon={<Sparkle />}
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
		icon={<HandPalm />}
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
