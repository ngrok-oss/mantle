import { Slot } from "@radix-ui/react-slot";
import { AnchorHTMLAttributes, forwardRef } from "react";
import { cx } from "../../core";
import { WithAsChild } from "../../types/src/as-child";

const anchorClassNames = (className: string | undefined) =>
	cx(
		"text-primary focus-visible:ring-primary cursor-pointer rounded bg-transparent focus:outline-none focus-visible:ring hover:underline",
		className,
	);

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & WithAsChild;

/**
 * Fundamental component for rendering links to external addresses.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @note If you need to link to an internal application route, prefer using the
 * [`react-router-dom` `<Link>`](https://reactrouter.com/en/main/components/link) or the
 * [`@remix-run/react` `<Link>`](https://remix.run/docs/en/main/components/link).
 */
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(({ asChild, className, ...props }, ref) => {
	const Component = asChild ? Slot : "a";

	return <Component className={anchorClassNames(className)} ref={ref} {...props} />;
});
Anchor.displayName = "Anchor";

export { Anchor, anchorClassNames };
