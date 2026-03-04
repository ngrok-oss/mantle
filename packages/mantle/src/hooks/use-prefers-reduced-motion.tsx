import { useEffect, useState } from "react";
import { canUseDOM } from "../components/browser-only/browser-only.js";

/**
 * no-preference is the default value for the prefers-reduced-motion media query.
 * Users who have never fiddled with their a11y settings will still see animations
 * (no explicit opt-in required from a user's perspective)
 */
const query = "(prefers-reduced-motion: no-preference)";

/**
 * Imperatively reads the current `prefers-reduced-motion` preference.
 * Useful in event handlers and plain functions where a hook cannot be called.
 *
 * Returns `true` when the user has opted out of animations.
 *
 * @remarks
 * Returns `true` (reduce motion) when called outside a browser environment (SSR),
 * matching the conservative default of {@link usePrefersReducedMotion}.
 */
export function getPrefersReducedMotion(): boolean {
	if (!canUseDOM()) {
		return true;
	}
	return !window.matchMedia(query).matches;
}

/**
 * Returns `true` when the user has opted out of animations (i.e., prefers reduced motion).
 *
 * Implementation notes:
 * - Uses the `(prefers-reduced-motion: no-preference)` media query and inverts it.
 *   This keeps the “default” mental model explicit: if the system hasn’t opted out,
 *   animations are allowed.
 * - Defaults to `true` (reduce motion) on the server/during SSR to avoid animating
 *   before hydration. The initial client effect reads the *real* preference and updates state.
 *
 * @example
 * // Conditionally shorten or skip transitions
 * const reduce = usePrefersReducedMotion();
 * const duration = reduce ? 0 : 200;
 *
 * @remarks
 * If you need to support very old browsers that lack `MediaQueryList.addEventListener`,
 * consider falling back to `addListener/removeListener`.
 */
export function usePrefersReducedMotion(): boolean {
	// Default to no animations on SSR/first paint; update on mount with the real value.
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);

		// set the _real_ initial value now that we're on the client
		setPrefersReducedMotion(getPrefersReducedMotion());

		// register for updates
		function listener(event: MediaQueryListEvent) {
			setPrefersReducedMotion(!event.matches);
		}

		mediaQueryList.addEventListener("change", listener);

		return () => {
			mediaQueryList.removeEventListener("change", listener);
		};
	}, []);

	return prefersReducedMotion;
}
