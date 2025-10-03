import { useEffect, useState } from "react";

/**
 * no-preference is the default value for the prefers-reduced-motion media query.
 * Users who have never fiddled with their a11y settings will still see animations
 * (no explicit opt-in required from a user's perspective)
 */
const query = "(prefers-reduced-motion: no-preference)";

/**
 * Returns `true` when the user has opted out of animations (i.e., prefers reduced motion).
 *
 * Implementation notes:
 * - Uses the `(prefers-reduced-motion: no-preference)` media query and inverts it.
 *   This keeps the “default” mental model explicit: if the system hasn’t opted out,
 *   animations are allowed.
 * - Defaults to `true` on the server to avoid animating before hydration. The initial
 *   client effect reads the *real* preference and updates state.
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
		setPrefersReducedMotion(!mediaQueryList.matches);

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
