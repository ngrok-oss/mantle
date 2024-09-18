import { Link, useLocation } from "@remix-run/react";
import type { Path } from "@remix-run/react";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
	className?: string | ((isActive: boolean) => string);
	to: string | Partial<Path>;
}>;

export const HashNavLink = ({ className, children, to }: Props) => {
	const location = useLocation();
	const hash = typeof to === "string" ? to.split("#").pop() : to.hash;
	const isActive = Boolean(hash && location.hash === `#${hash}`);

	return (
		<Link
			className={typeof className === "function" ? className(isActive) : className}
			onKeyDown={(event) => {
				// If the space key was pressed on this link, stop event propagation
				// and prevent the default action. This is so that the ul scroll
				// container doesn't scroll when the space key is pressed on this link
				// and the search input doesn't gain focus. Instead, we want the link
				// to be clicked.
				if (event.key === " ") {
					event.stopPropagation();
					event.preventDefault();
					event.currentTarget.click();
				}
			}}
			tabIndex={0}
			to={to}
		>
			{children}
		</Link>
	);
};
