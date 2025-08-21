import { useCallback, useSyncExternalStore } from "react";

/**
 * React hook that subscribes to and returns the result of a CSS media query.
 *
 * This hook uses `window.matchMedia` under the hood and leverages
 * `useSyncExternalStore` to stay compliant with React's concurrent rendering model.
 *
 * @param {string} query - A valid CSS media query string (e.g., `(max-width: 768px)`).
 *
 * @returns {boolean} `true` if the media query currently matches, otherwise `false`.
 *
 * @example
 * // Detect if the user prefers a dark color scheme:
 * const isDarkMode = useMatchesMediaQuery("(prefers-color-scheme: dark)");
 *
 * if (isDarkMode) {
 *   document.body.classList.add("dark");
 * } else {
 *   document.body.classList.remove("dark");
 * }
 */
export function useMatchesMediaQuery(query: string) {
	const subscribe = useCallback(
		(callback: () => void) => {
			const matchMedia = window.matchMedia(query);

			matchMedia.addEventListener("change", callback);
			return () => {
				matchMedia.removeEventListener("change", callback);
			};
		},
		[query],
	);

	return useSyncExternalStore(
		subscribe,
		() => {
			return window.matchMedia(query).matches;
		},
		() => false,
	);
}
