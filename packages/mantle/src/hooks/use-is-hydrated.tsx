import { useSyncExternalStore } from "react";

/**
 * React hook that returns whether the component tree has been hydrated
 * on the client.
 *
 * Uses `useSyncExternalStore` to ensure the value is consistent between
 * server and client rendering, preventing hydration mismatches.
 *
 * - On the server, it always returns `false`.
 * - On the client (after hydration), it returns `true`.
 *
 * @see https://tkdodo.eu/blog/avoiding-hydration-mismatches-with-use-sync-external-store
 *
 * @returns {boolean} `true` once hydration has occurred on the client,
 * otherwise `false`.
 *
 * @example
 * const isHydrated = useIsHydrated();
 *
 * if (!isHydrated) {
 *   return <span style={{ visibility: "hidden" }}>Loading…</span>;
 * }
 *
 * return <span>Ready!</span>;
 */
function useIsHydrated() {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
}

export {
	//,
	useIsHydrated,
};

/**
 * No-op subscription function required by `useSyncExternalStore`.
 *
 * Since hydration state never changes after mount, this effectively
 * does nothing.
 *
 * @private
 */
function emptySubscribe() {
	return () => {};
}
