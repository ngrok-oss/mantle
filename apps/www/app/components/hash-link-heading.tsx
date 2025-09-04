import { cx } from "@ngrok/mantle/cx";
import { useIsHydrated } from "@ngrok/mantle/hooks";
import { Icon } from "@ngrok/mantle/icon";
import { LinkIcon } from "@phosphor-icons/react/Link";
import { Slot } from "@radix-ui/react-slot";
import {
	Children,
	type ComponentProps,
	cloneElement,
	isValidElement,
} from "react";
import { Link, useLocation } from "react-router";
import invariant from "tiny-invariant";

type Props = Omit<
	ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">,
	"id"
> & {
	/**
	 * Required. Used both as the heading’s DOM id and as the anchor target
	 */
	id: string;
};

/**
 * A heading component that automatically renders an anchored hash link.
 *
 * This is useful for documentation-style pages where each heading can be
 * deep-linked. It wraps a single heading element (`h1`–`h6`) and injects:
 *
 * - A `Link` that points to `#id`, making the heading clickable and copyable.
 * - A hover-visible link icon positioned to the left of the heading text.
 *
 * @example
 * ```tsx
 * <HashLinkHeading id="installation">
 *   <h2>Installation</h2>
 * </HashLinkHeading>
 * ```
 *
 * Props:
 * - `children`: Must be a single heading element (`h1`–`h6`) with text/inline nodes.
 * - All other props are forwarded to the underlying `Slot` wrapper.
 *
 * Notes:
 * - Enforces a single valid child via `React.Children.only`.
 * - The link icon is non-interactive (pointer-events disabled) and only appears on hover.
 */
function HashLinkHeading({ id, className, children, ...props }: Props) {
	const location = useLocation();
	const isHydrated = useIsHydrated();
	const hashUrl = `#${id}`;

	/**
	 * True when the page is hydrated *and* the current URL hash targets this heading.
	 * We gate on hydration because `location.hash` is meaningless during SSR.
	 */
	const isTarget = isHydrated && location.hash === hashUrl;

	/**
	 * This component expects exactly one React element child so we can clone it
	 * and inject classes. (Common pattern when using an `asChild`-style Slot.)
	 */
	const singleChild = Children.only(children);
	invariant(
		isValidElement<Props>(singleChild),
		"HashLinkHeading must be passed a single heading element child (`h1`-`h6`).",
	);
	const grandchildren = singleChild.props?.children;

	return (
		<Slot id={id} {...props}>
			{cloneElement(
				singleChild,
				{
					className: cx(
						className,
						singleChild.props.className,
						"group relative transition-colors",
						// `:target` is unreliable for client-side route changes,
						// so we reflect the match via `useLocation` instead.
						isHydrated && isTarget && "text-accent-600",
					),
				},
				<>
					{/* Clickable heading text: routes to the same page with this hash.
             Using a relative `to=.\#id` keeps SPA navigation semantics. */}
					<Link
						to={`.${hashUrl}`}
						className="group-hover:underline cursor-pointer -ml-6 pl-6 block focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent rounded"
					>
						{grandchildren}
					</Link>
					{/* Link icon: appears on hover to hint deep-linking without stealing focus.
             Absolutely positioned into the left gutter; non-interactive for a11y. */}
					<Icon
						aria-hidden
						className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-70 pointer-events-none"
						svg={<LinkIcon />}
					/>
				</>,
			)}
		</Slot>
	);
}

export {
	//,
	HashLinkHeading,
};
