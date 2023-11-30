import { Anchor } from "@/anchor";
import { LinkProps, Link as RRLink } from "@remix-run/react";
import { Route } from "~/types/routes";

type Props = Exclude<LinkProps, "to"> & { to: Route };

export const Link = (props: Props) => (
	<Anchor asChild>
		<RRLink {...props} />
	</Anchor>
);
