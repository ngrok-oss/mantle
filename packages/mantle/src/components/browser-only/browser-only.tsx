import type { ReactNode } from "react";
import { useIsHydrated } from "../../hooks/use-is-hydrated.js";

type Props = {
	/**
	 * Children must be a render function so that evaluation is deferred
	 * until after hydration has occurred.
	 */
	children: () => ReactNode;
	/**
	 * Optional fallback to render on the server (and during hydration)
	 * before the client-only children are mounted.
	 * Ideally, this should be the same dimensions as the eventual children
	 * to avoid layout shift.
	 */
	fallback?: ReactNode;
};

/**
 * A wrapper component that ensures its children only render in the browser,
 * after hydration has completed.
 *
 * This is useful for components that rely on browser-only APIs
 * (e.g. `window`, `document`, `localStorage`, media queries) or that
 * cannot safely be rendered during server-side rendering (SSR).
 *
 * - On the server, and during the initial hydration pass,
 *   the `fallback` is rendered.
 * - On the client, after hydration, the `children` render function is called.
 *
 * @see https://mantle.ngrok.com/components/browser-only
 *
 * @example
 * ```tsx
 * <BrowserOnly fallback={<div style={{ height: 200 }} />} >
 *   {() => <ExpensiveChart />}
 * </BrowserOnly>
 * ```
 *
 * @see useIsHydrated
 */
function BrowserOnly({ children, fallback = null }: Props) {
	return useIsHydrated() ? children() : fallback;
}

export {
	//,
	BrowserOnly,
};
