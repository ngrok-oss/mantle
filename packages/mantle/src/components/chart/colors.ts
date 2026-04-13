/**
 * Default color palette sequence for chart series.
 * Colors are mantle semantic + named tokens that provide good
 * visual distinction in both light and dark themes.
 *
 * When a series in `ChartConfig` does not specify a color,
 * it is assigned the next color from this sequence (by insertion order).
 */
const defaultChartColors = [
	"accent-500",
	"danger-500",
	"success-500",
	"warning-500",
	"important-500",
	"blue-500",
	"orange-500",
	"teal-500",
] as const;

/**
 * Resolves a color reference string to a concrete CSS color value
 * by reading computed styles from an element.
 *
 * If the color looks like a mantle token (e.g., `"accent-500"`, `"emerald-400"`),
 * it is resolved as `--color-{token}` via `getComputedStyle`.
 * Otherwise, the string is returned as-is (assumed to be a raw CSS color).
 *
 * @param computedStyle - The computed style declaration of a DOM element in the chart.
 * @param colorRef - A color reference string from ChartConfig.
 * @returns A concrete CSS color string usable as `ctx.strokeStyle` or `ctx.fillStyle`.
 */
function resolveColorRef(computedStyle: CSSStyleDeclaration, colorRef: string): string {
	// Raw CSS colors: hex, rgb(), oklch(), hsl(), named colors, etc.
	if (
		colorRef.startsWith("#") ||
		colorRef.startsWith("rgb") ||
		colorRef.startsWith("oklch") ||
		colorRef.startsWith("hsl") ||
		colorRef.startsWith("var(")
	) {
		return colorRef;
	}

	// Mantle token: resolve as CSS custom property
	const resolved = computedStyle.getPropertyValue(`--color-${colorRef}`).trim();
	if (resolved) {
		return resolved;
	}

	// Fallback: return as-is (could be a named CSS color like "red")
	return colorRef;
}

/**
 * Resolves a CSS custom property from computed styles, with a fallback.
 *
 * @param computedStyle - The computed style declaration of a DOM element.
 * @param variableName - The CSS custom property name (with `--` prefix).
 * @param fallback - Fallback value if the property is not found.
 * @returns The resolved value or the fallback.
 */
function resolveCssVar(
	computedStyle: CSSStyleDeclaration,
	variableName: string,
	fallback: string,
): string {
	const value = computedStyle.getPropertyValue(variableName).trim();
	return value || fallback;
}

export { defaultChartColors, resolveColorRef, resolveCssVar };
