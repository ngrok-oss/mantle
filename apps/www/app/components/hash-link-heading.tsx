import { cx } from "@ngrok/mantle/cx";
import { Icon } from "@ngrok/mantle/icon";
import { LinkIcon } from "@phosphor-icons/react/Link";
import { Slot } from "@radix-ui/react-slot";
import {
	Children,
	type ComponentProps,
	cloneElement,
	isValidElement,
} from "react";
import { Link } from "react-router";
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
	const singleChild = Children.only(children);
	invariant(
		isValidElement<Props>(singleChild),
		"When using `asChild`, HashLinkHeading must be passed a single child as a JSX tag.",
	);
	const grandchildren = singleChild.props?.children;

	return (
		<Slot id={id} className={cx("group relative", className)} {...props}>
			{cloneElement(
				singleChild,
				{},
				<>
					<Link
						to={`.#${id}`}
						className="group-hover:underline cursor-pointer -ml-6 pl-6 block"
					>
						{grandchildren}
					</Link>
					<Icon
						svg={<LinkIcon />}
						className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-70 pointer-events-none"
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
