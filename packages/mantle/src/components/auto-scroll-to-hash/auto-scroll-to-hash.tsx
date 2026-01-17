import { type PropsWithChildren, createContext, useCallback, useContext, useRef } from "react";
import { useLocation } from "react-router";
import invariant from "tiny-invariant";
import { useIsomorphicLayoutEffect } from "../../hooks/use-isomorphic-layout-effect.js";
import { useScrollBehavior } from "../../hooks/use-scroll-behavior.js";

const AutoScrollToHashContext = createContext<() => void>(() => {});

/**
 * React component that auto-scrolls to the element matching the current URL hash
 * (e.g., `#subscription`). It also provides a context so consumers can
 * programmatically re-run the scroll after asynchronous content mounts.
 *
 * Behavior
 * - Runs on initial mount and whenever the `location.hash` changes.
 * - Schedules the scroll in `requestAnimationFrame` to ensure the target exists
 * after DOM updates/paint.
 * - Respects the user's motion preference via {@link useScrollBehavior}
 * (i.e., `"auto"` when reduced motion is enabled; `"smooth"` otherwise).
 * - Cancels a pending animation frame on unmount or dependency change.
 *
 * Accessibility
 * - Honors reduced-motion preferences; no sudden scrolling for motion-sensitive users.
 *
 * SSR
 * - Uses {@link useIsomorphicLayoutEffect} so it is safe to include in code that may render on the server.
 *
 * @example
 * ```tsx
 * // App shell
 * <Router>
 *   <AutoScrollToHash>
 *     <TheRestOfYourApp />
 *   </AutoScrollToHash>
 * </Router>
 * ```
 *
 * @remarks
 * If your content is loaded asynchronously and may not exist by the next animation
 * frame, call the public hook {@link useAutoScrollToHash} to re-run the scroll once
 * the content is in the DOM.
 */
function AutoScrollToHash({ children }: PropsWithChildren) {
	const scrollToElement = useInternalAutoScrollToHash();

	return (
		<AutoScrollToHashContext.Provider value={scrollToElement}>
			{children}
		</AutoScrollToHashContext.Provider>
	);
}

/**
 * Public hook that returns a stable callback for programmatically re-running the
 * hash-based scroll performed by {@link AutoScrollToHash}.
 *
 * Use this when the element for the current `location.hash` is rendered later
 * (e.g., after lazy-loading a route, switching tabs, or finishing an async fetch)
 * so you can bring it into view once it exists.
 *
 * The hook throws if it is used outside of an {@link AutoScrollToHash} provider.
 *
 * @returns A stable `() => void` function that, when called, scrolls the hash target into view if present.
 *
 * @example
 * ```tsx
 * function DetailsTab({ ready }: { ready: boolean }) {
 *   const reScroll = useAutoScrollToHash();
 *
 *   useEffect(() => {
 *     if (ready) {
 *       reScroll();
 *     }
 *   }, [ready, reScroll]);
 *
 *   return <div id="subscription">...</div>;
 * }
 * ```
 *
 * @see {@link AutoScrollToHash}
 */
function useAutoScrollToHash() {
	const scrollToElement = useContext(AutoScrollToHashContext);
	invariant(
		scrollToElement,
		"useAutoScrollToHash must be used within an AutoScrollToHash provider",
	);
	return scrollToElement;
}

export {
	//,
	AutoScrollToHash,
	useAutoScrollToHash,
};

/**
 * Internal hook that scrolls the element identified by `location.hash` into view
 * and returns a function you can call to trigger the same behavior manually.
 *
 * Implementation notes
 * - Exits early when `hash` is empty.
 * - Attempts both the raw ID and a decoded ID (`decodeURIComponent`) for robustness.
 * - Uses {@link useScrollBehavior} so motion-sensitive users get `"auto"` instead of `"smooth"`.
 * - Schedules the scroll in `requestAnimationFrame` to avoid racing DOM paint.
 * - Cancels any pending frame on cleanup.
 *
 * @returns A stable `() => void` that attempts to scroll the hash target into view.
 *
 * @internal
 */
function useInternalAutoScrollToHash() {
	const { hash } = useLocation();
	const scrollBehavior = useScrollBehavior();
	const rafHandle = useRef(0);

	const scrollToElement = useCallback(() => {
		if (!hash) {
			return;
		}

		// Strip leading '#' and consider both raw and decoded forms.
		const rawId = hash.replace(/^#/, "");
		const candidates = [rawId];
		try {
			const decoded = window.decodeURIComponent(rawId);
			if (decoded && decoded !== rawId) {
				candidates.push(decoded);
			}
		} catch {
			// ignore malformed encodings and fall back to raw
		}

		rafHandle.current = window.requestAnimationFrame(() => {
			// Resolve the first element that exists among our candidates.
			const target =
				document.getElementById(candidates[0] ?? "") ??
				document.getElementById(candidates[1] ?? "");

			target?.scrollIntoView({ behavior: scrollBehavior });
		});
	}, [hash, scrollBehavior]);

	useIsomorphicLayoutEffect(() => {
		scrollToElement();

		return () => {
			window.cancelAnimationFrame(rafHandle.current);
		};
	}, [hash, scrollBehavior]);

	return scrollToElement;
}
