import { cx } from "@/core";
import { NavLinkProps, NavLink as RRNavLink } from "@remix-run/react";
import { Route } from "~/types/routes";

type Props = Omit<NavLinkProps, "to"> & {
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

export function NavLink({ className, hash, rawTo, search, to, ...props }: Props) {
	return (
		<RRNavLink
			to={{
				pathname: to ?? rawTo,
				search,
				hash,
			}}
			className={(args) =>
				cx(
					"hover:text-strong block py-1 text-muted",
					args.isActive && "font-medium text-accent hover:text-accent",
					typeof className === "function" ? className(args) : className,
				)
			}
			{...props}
		/>
	);
}
