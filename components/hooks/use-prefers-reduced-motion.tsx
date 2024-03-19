import { useEffect, useState } from "react";

/**
 * no-preference is the default value for the prefers-reduced-motion media query.
 * Users who have never fiddled with their a11y settings will still see animations
 * (no explicit opt-in required from a user's perspective)
 */
const query = "(prefers-reduced-motion: no-preference)";

/**
 * usePrefersReducedMotion returns true if the user has opted out of animations
 */
export function usePrefersReducedMotion() {
	// default to no animations, since we don't know what the user's preference is on the server
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
