import { cx } from "@ngrok/mantle/cx";
import type { NavLinkProps } from "react-router";
import { NavLink as RRNavLink } from "react-router";
import { useNavigation } from "./navigation-context";

export function NavLink({ className, to, ...props }: NavLinkProps) {
	const { setShowNavigation } = useNavigation();

	return (
		<RRNavLink
			to={to}
			className={(args) =>
				cx(
					"text-muted hover:text-strong block py-1",
					(args.isActive || args.isPending) &&
						"text-accent-600 hover:text-accent-600 font-medium",
					typeof className === "function" ? className(args) : className,
				)
			}
			onClick={(event) => {
				setShowNavigation(false);
				if (props.onClick) props.onClick(event);
			}}
			{...props}
		/>
	);
}
