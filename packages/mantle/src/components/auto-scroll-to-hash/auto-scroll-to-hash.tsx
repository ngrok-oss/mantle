import { useLocation } from "react-router";
import { useIsomorphicLayoutEffect } from "../../hooks/use-isomorphic-layout-effect.js";
import { useScrollBehavior } from "../../hooks/use-scroll-behavior.js";

/**
 * React component that auto-scrolls to the element matching the current URL hash (e.g., `#subscription`).
 *
 * Behavior:
 * - Runs on mount and whenever the `hash` changes.
 * - Schedules the scroll in `requestAnimationFrame` to ensure the target element
 *   exists after DOM updates/paint.
 * - Respects the user's motion preference via `useScrollBehavior()` (i.e., `"auto"` when
 *   reduced motion is enabled; `"smooth"` otherwise).
 * - Safe for SSR via `useIsomorphicLayoutEffect`.
 *
 * @example
 * <AutoScrollToHash />
 *
 * @remarks
 * If your content is loaded asynchronously and may not exist by the next animation
 * frame, consider enhancing the hook with a short retry loop or a `MutationObserver`.
 *
 * **Note:** This component requires `react-router` as a peer dependency.
 */
function AutoScrollToHash() {
	useAutoScrollToHash();

	return null;
}

type Props = {
	/** Disable automatic scrolling to hash targets. */
	disabled?: boolean;
};

/**
 * Hook that scrolls the element identified by `location.hash` into view.
 *
 * - Exits early when `disabled` or when `hash` is empty.
 * - Attempts both the raw ID and a decoded ID (`decodeURIComponent`) for robustness.
 * - Uses `useScrollBehavior()` so motion-sensitive users get `"auto"` instead of `"smooth"`.
 *
 * @param options.disabled When `true`, suppresses scrolling.
 *
 * @example
 * function Page() {
 *   useAutoScrollToHash();
 *   return <>{page content}</>;
 * }
 *
 * @remarks
 * **Note:** This hook requires `react-router` as a peer dependency.
 *
 * @see {@link useScrollBehavior} for how the scroll behavior is chosen.
 */
function useAutoScrollToHash({ disabled = false }: Props = {}) {
	const { hash } = useLocation();
	const scrollBehavior = useScrollBehavior();

	useIsomorphicLayoutEffect(() => {
		if (disabled || !hash) {
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

		let handle = 0;
		handle = window.requestAnimationFrame(() => {
			// Resolve the first element that exists among our candidates.
			const target =
				document.getElementById(candidates[0] ?? "") ??
				document.getElementById(candidates[1] ?? "");

			target?.scrollIntoView({ behavior: scrollBehavior });
		});

		return () => {
			window.cancelAnimationFrame(handle);
		};
	});
}

export {
	//,
	AutoScrollToHash,
	useAutoScrollToHash,
};
