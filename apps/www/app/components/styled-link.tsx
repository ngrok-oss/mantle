import type { ComponentProps } from "react";

import { Anchor } from "@ngrok/mantle/anchor";
import { Link, type LinkProps } from "react-router";

type Props = LinkProps & ComponentProps<typeof Anchor>;

/**
 * A react-router Link styled as a mantle Anchor.
 */
export const StyledLink = ({ children, to, icon, iconPlacement, ...restProps }: Props) => (
	<Anchor icon={icon} iconPlacement={iconPlacement} asChild {...restProps}>
		<Link to={to}>{children}</Link>
	</Anchor>
);
