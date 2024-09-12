import { useCallback, useSyncExternalStore } from "react";

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
