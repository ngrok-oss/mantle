import { cx } from "@ngrok/mantle/cx";
import { NavLink as RRNavLink } from "@remix-run/react";
import type { NavLinkProps } from "@remix-run/react";
import type { Route } from "~/types/routes";
import { useNavigation } from "./navigation-context";

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
	const { setShowNavigation } = useNavigation();

	return (
		<RRNavLink
			to={{
				pathname: to ?? rawTo,
				search,
				hash,
			}}
			className={(args) =>
				cx(
					"block py-1 text-muted hover:text-strong",
					args.isActive && "font-medium text-accent-600 hover:text-accent-600",
					typeof className === "function" ? className(args) : className,
				)
			}
			onClick={(e) => {
				setShowNavigation(false);
				if (props.onClick) props.onClick(e);
			}}
			{...props}
		/>
	);
}
