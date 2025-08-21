import { useSyncExternalStore } from "react";

/**
 * Tailwind CSS breakpoints in descending order (largest → smallest).
 *
 * These correspond to Tailwind’s default `theme.screens` config and are used
 * to determine the current viewport size.
 *
 * @see https://tailwindcss.com/docs/screens
 *
 * @example
 * "2xl" // ≥96rem (1536px)
 * "xl"  // ≥80rem (1280px)
 * "lg"  // ≥64rem (1024px)
 * "md"  // ≥48rem (768px)
 * "sm"  // ≥40rem (640px)
 */
const tailwindBreakpoints = [
	//,
	"2xl",
	"xl",
	"lg",
	"md",
	"sm",
] as const;

/**
 * A valid Tailwind CSS breakpoint identifier.
 *
 * @example
 * const bp: TailwindBreakpoint = "md"; // ≥48rem (768px)
 *
 * @example
 * "2xl" // ≥96rem (1536px)
 * "xl"  // ≥80rem (1280px)
 * "lg"  // ≥64rem (1024px)
 * "md"  // ≥48rem (768px)
 * "sm"  // ≥40rem (640px)
 */
type TailwindBreakpoint = (typeof tailwindBreakpoints)[number];

/**
 * Mantle’s breakpoint set, extending Tailwind’s with `"default"`.
 *
 * `"default"` represents the base (0px and up) viewport,
 * useful for defining fallbacks or mobile-first styles.
 *
 * @example
 * "default" // ≥0rem (0px)
 * "sm"      // ≥40rem (640px)
 * "md"      // ≥48rem (768px)
 * "lg"      // ≥64rem (1024px)
 * "xl"      // ≥80rem (1280px)
 * "2xl"     // ≥96rem (1536px)
 */
const breakpoints = [
	//,
	"default",
	...tailwindBreakpoints,
] as const;

/**
 * A valid Mantle breakpoint identifier.
 *
 * Includes Tailwind’s standard breakpoints plus `"default"` for 0px+.
 *
 * @example
 * const bp: Breakpoint = "default"; // ≥0px
 *
 * @example
 * "default" // ≥0rem (0px)
 * "sm"      // ≥40rem (640px)
 * "md"      // ≥48rem (768px)
 * "lg"      // ≥64rem (1024px)
 * "xl"      // ≥80rem (1280px)
 * "2xl"     // ≥96rem (1536px)
 */
type Breakpoint = (typeof breakpoints)[number];

/**
 * React hook that returns the current breakpoint based on the viewport width.
 *
 * This hook uses a single media query subscription that efficiently tracks
 * all breakpoints and returns the largest one that currently matches.
 *
 * @returns {Breakpoint} The current breakpoint that matches the viewport width.
 *
 * @example
 * const breakpoint = useBreakpoint();
 *
 * if (breakpoint === "lg") {
 *   // Do something for large screens and above
 * }
 */
function useBreakpoint(): Breakpoint {
	return useSyncExternalStore(
		subscribe,
		getCurrentBreakpoint,
		() => "default", // SSR fallback
	);
}

export {
	//,
	breakpoints,
	useBreakpoint,
};

export type {
	//,
	Breakpoint,
};

/**
 * A CSS media query string representing a minimum width in `rem` units.
 *
 * @example
 * const query: MinWidthQuery = "(min-width: 48rem)";
 *
 * @private
 */
type MinWidthQuery = `(min-width: ${number}rem)`;

// Breakpoint definitions with their minimum widths in rem
const breakpointQueries = {
	"2xl": "(min-width: 96rem)", // 1536px
	xl: "(min-width: 80rem)", // 1280px
	lg: "(min-width: 64rem)", // 1024px
	md: "(min-width: 48rem)", // 768px
	sm: "(min-width: 40rem)", // 640px
} as const satisfies Record<TailwindBreakpoint, MinWidthQuery>;

/**
 * Get the current breakpoint by checking media queries from largest to smallest
 *
 * @private
 */
function getCurrentBreakpoint(): Breakpoint {
	// Check from largest to smallest breakpoint
	for (const breakpoint of tailwindBreakpoints) {
		const query = breakpointQueries[breakpoint];
		if (window.matchMedia(query).matches) {
			return breakpoint;
		}
	}
	return "default";
}

/**
 * Subscribe to breakpoint changes across all media queries.
 * Hoisted outside the hook to avoid recreating on each render.
 *
 * @private
 */
function subscribe(callback: () => void) {
	// Create a single listener that tracks all breakpoint changes
	const mediaQueries = Object.values(breakpointQueries).map((query) =>
		window.matchMedia(query),
	);

	// Add the same callback to all media queries
	for (const mq of mediaQueries) {
		mq.addEventListener("change", callback);
	}

	// Return cleanup function
	return () => {
		for (const mq of mediaQueries) {
			mq.removeEventListener("change", callback);
		}
	};
}
