import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import type { WithAsChild } from "../../types/as-child.js";
import { cx } from "../../utils/cx/cx.js";
import type { Rel, Target } from "./types.js";

/**
 * The class names for the `Anchor` component which define the styles for the component.
 */
const anchorClassNames = (className: string | undefined) =>
	cx(
		"cursor-pointer rounded bg-transparent text-accent-600 hover:underline focus:outline-none focus-visible:ring focus-visible:ring-focus-accent",
		className,
	);

/**
 * The props for the `Anchor` component.
 */
type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "rel" | "target"> &
	WithAsChild & {
		/**
		 * The rel attribute defines the relationship between a linked resource and the current document.
		 *
		 * Every keyword within a space-separated value should be unique within that value.
		 *
		 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
		 */
		rel?: Rel | (string & {}) | undefined | (Rel | (string & {}) | undefined | null)[];
		/**
		 * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).
		 *
		 * Note: Setting `target="_blank"` on <a> elements implicitly provides the same rel behavior as setting `rel="noopener"` which does not set `window.opener`.
		 *
		 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
		 *
		 * @default "_self"
		 */
		target?: Target | undefined;
	};

/**
 * Fundamental component for rendering links to external addresses.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @note If you need to link to an internal application route, prefer using the
 * [`react-router-dom` `<Link>`](https://reactrouter.com/en/main/components/link) or the
 * [`@remix-run/react` `<Link>`](https://remix.run/docs/en/main/components/link).
 */
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(({ asChild, className, rel: propRel, ...props }, ref) => {
	const Component = asChild ? Slot : "a";
	const rel = resolveRel(propRel);

	return <Component className={anchorClassNames(className)} ref={ref} rel={rel} {...props} />;
});
Anchor.displayName = "Anchor";

/**
 * Resolves the `rel` attribute to a string.
 *
 * If the value is an array, it will be filtered for empty values, ensure uniqueness, sorted, and joined with a space.
 */
function resolveRel(rel: Rel | (string & {}) | undefined | null | (Rel | (string & {}) | undefined | null)[]) {
	if (Array.isArray(rel)) {
		const uniqueRel = new Set(rel);
		const result = [...uniqueRel]
			.map((item) => item?.trim())
			.filter(Boolean)
			.sort()
			.join(" ");
		return result || undefined;
	}

	return rel?.trim() || undefined;
}

export { Anchor, anchorClassNames, resolveRel };
export type { AnchorProps };
