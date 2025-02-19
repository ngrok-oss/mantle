import { Anchor } from "@ngrok/mantle/anchor";
import type { LinkProps } from "react-router";
import { Link as RRLink } from "react-router";

export const Link = (props: LinkProps) => (
	<Anchor asChild>
		<RRLink {...props} />
	</Anchor>
);
