import { useMemo } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion.js";

/**
 * `scroll-behavior` values:
 *
 * - `"auto"`   — scrolling happens instantly (no animation).
 * - `"smooth"` — scrolling animates smoothly using a user-agent–defined easing and duration.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#values
 */
type ScrollBehavior = "auto" | "smooth";

/**
 * Returns a `ScrollBehavior` that respects the user's motion preference via `usePrefersReducedMotion`.
 *
 * - When `usePrefersReducedMotion()` is `true`, returns `"auto"` (no animated scroll).
 * - Otherwise returns `"smooth"`.
 *
 * Use this with `window.scrollTo`, `Element.scrollIntoView`, etc. It prevents
 * smooth-scrolling for users who opt out of motion and avoids SSR “first paint”
 * animations thanks to the hook’s conservative server default.
 *
 * @example
 * // Scroll to top
 * const behavior = useScrollBehavior();
 * window.scrollTo({ top: 0, behavior });
 *
 * @example
 * // Bring a section into view
 * const behavior = useScrollBehavior();
 * sectionRef.current?.scrollIntoView({ behavior, block: "start" });
 *
 * @see {@link usePrefersReducedMotion}
 * @see CSS `scroll-behavior` property (values: `"auto"`, `"smooth"`).
 */
export function useScrollBehavior(): ScrollBehavior {
	const prefersReducedMotion = usePrefersReducedMotion();

	return useMemo(
		() => (prefersReducedMotion ? "auto" : "smooth"),
		[prefersReducedMotion],
	);
}
