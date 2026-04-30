import { cx } from "@ngrok/mantle/cx";
import type { WithStyleProps } from "@ngrok/mantle/types";
import { NavLink } from "./nav-link";
import { blockPages, blockRoutes } from "./navigation-data";

/** Sidebar navigation for the blocks section. */
export function BlocksNavigation({ className, style }: WithStyleProps) {
	return (
		<nav className={cx("text-sm pb-16", className)} style={style}>
			<p className="mb-2 text-xs font-medium uppercase tracking-wider font-mono">Blocks</p>
			<ul className="mt-2 flex flex-col">
				{blockPages.map((page) => (
					<li key={page}>
						<NavLink to={blockRoutes[page]} prefetch="intent">
							{page}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
