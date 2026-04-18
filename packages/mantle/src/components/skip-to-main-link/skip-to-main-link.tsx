import type { ComponentProps } from "react";
import { Anchor } from "../anchor/anchor.js";
import { cx } from "../../utils/cx/cx.js";

type SkipToMainLinkProps = Omit<ComponentProps<"a">, "href"> & {
	/**
	 * The id of the target element to focus when the link is activated.
	 * Must match the `id` on the `<Main>` (or any focusable landmark) you
	 * want keyboard users to be sent to.
	 *
	 * @default "main"
	 */
	targetId?: string;
};

/**
 * A visually-hidden-until-focused "skip link" that lets keyboard users jump
 * past repeated navigation and land directly on the page's main content
 * landmark. When activated, it focuses the element identified by `targetId`
 * (defaulting to `"main"`) without scrolling. Because it renders a plain
 * anchor with `href="#${targetId}"`, native hash navigation works in any
 * framework — React Router, Next.js, or plain HTML — with no router
 * dependency.
 *
 * Pair with the `<Main>` component (or any element with a matching `id`
 * and `tabIndex={-1}`) so it can receive focus.
 *
 * @see https://mantle.ngrok.com/components/skip-to-main-link
 *
 * @example
 * ```tsx
 * <SkipToMainLink />
 * <Header />
 * <Main>
 *   <h1>Page title</h1>
 * </Main>
 * ```
 */
const SkipToMainLink = ({
	children = "Skip to main content",
	className,
	targetId = "main",
	...props
}: SkipToMainLinkProps) => {
	return (
		<Anchor
			href={`#${targetId}`}
			onClick={(event) => {
				event.preventDefault();
				window.history.pushState(null, "", `#${targetId}`);
				document.getElementById(targetId)?.focus({ preventScroll: true });
			}}
			className={cx(
				"not-focus:sr-only bg-card fixed top-2 left-2 z-max px-4 py-2 shadow-lg",
				className,
			)}
			{...props}
		>
			{children}
		</Anchor>
	);
};
SkipToMainLink.displayName = "SkipToMainLink";

export {
	//,
	SkipToMainLink,
};
