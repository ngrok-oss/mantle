import { useEffect, useState } from "react";
import type { RefObject } from "react";
import type { ChartConfig, ResolvedCanvasStyles } from "./types.js";
import { defaultChartColors, resolveColorRef, resolveCssVar } from "./colors.js";

const emptyStyles: ResolvedCanvasStyles = {
	cacheKey: "",
	axisColor: "#888",
	gridColor: "#e5e7eb",
	mutedTextColor: "#6b7280",
	bodyTextColor: "#111827",
	fontFamily: "sans-serif",
	backgroundColor: "#ffffff",
	seriesColors: {},
};

/**
 * Resolves CSS custom properties and chart config colors into concrete
 * color strings for imperative canvas painting.
 *
 * Canvas `strokeStyle` and `fillStyle` cannot read CSS variables directly,
 * so this hook resolves them via `getComputedStyle` on a DOM element.
 * The resolved styles are cached and invalidated when the theme changes
 * (detected via a `MutationObserver` on the `data-applied-theme` attribute).
 *
 * @param elementRef - A ref to a DOM element in the chart (typically the container div).
 * @param config - The chart configuration with series color references.
 * @param ready - Signal that the element is mounted and ready for style resolution.
 * @returns Resolved canvas styles with concrete color strings.
 */
function useCanvasStyles(
	elementRef: RefObject<HTMLElement | null>,
	config: ChartConfig,
	ready: boolean,
): ResolvedCanvasStyles {
	const [styles, setStyles] = useState<ResolvedCanvasStyles>(emptyStyles);

	useEffect(() => {
		if (!ready) {
			return;
		}

		const element = elementRef.current;
		if (!element) {
			return;
		}

		function resolve() {
			const target = elementRef.current;
			if (!target) {
				return;
			}

			const computedStyle = getComputedStyle(target);
			const themeKey = document.documentElement.getAttribute("data-applied-theme") ?? "default";

			const seriesColors: Record<string, string> = {};
			const configKeys = Object.keys(config);

			for (let index = 0; index < configKeys.length; index++) {
				const key = configKeys[index];
				if (!key) {
					continue;
				}
				const seriesConfig = config[key];
				const fallbackColor = defaultChartColors[index % defaultChartColors.length] ?? "accent-500";
				const colorRef = seriesConfig?.color || fallbackColor;
				seriesColors[key] = resolveColorRef(computedStyle, colorRef);
			}

			setStyles({
				cacheKey: themeKey,
				axisColor: resolveCssVar(computedStyle, "--border-color-card", "#888"),
				gridColor: resolveCssVar(computedStyle, "--color-gray-200", "#e5e7eb"),
				mutedTextColor: resolveCssVar(computedStyle, "--text-color-muted", "#6b7280"),
				bodyTextColor: resolveCssVar(computedStyle, "--text-color-body", "#111827"),
				fontFamily: computedStyle.fontFamily || "sans-serif",
				backgroundColor: resolveCssVar(computedStyle, "--background-color-card", "#ffffff"),
				seriesColors,
			});
		}

		// Initial resolution
		resolve();

		// Watch for theme changes
		const observer = new MutationObserver(() => {
			resolve();
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-applied-theme", "class", "data-theme"],
		});

		return () => {
			observer.disconnect();
		};
	}, [elementRef, config, ready]);

	return styles;
}

export { useCanvasStyles };
