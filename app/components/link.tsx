import { Anchor } from "@/anchor";
import { LinkProps, Link as RRLink } from "@remix-run/react";
import { Route } from "~/types/routes";

type Props = Omit<LinkProps, "to"> & {
	hash?: `#${string}` | undefined;
	search?: `?${string}` | undefined;
} & (
		| {
				to: Route;
				rawTo?: undefined;
		  }
		| {
				to?: undefined;
				rawTo: string;
		  }
	);

export const Link = ({ hash, rawTo, search, to, ...props }: Props) => (
	<Anchor asChild>
		<RRLink
			to={{
				pathname: to ?? rawTo,
				search,
				hash,
			}}
			{...props}
		/>
	</Anchor>
);
