import type { ChartMargin, PlotArea } from "./types.js";

/** Default margins for chart plot areas, in CSS pixels. */
const defaultMargin: ChartMargin = {
	top: 10,
	right: 16,
	bottom: 30,
	left: 48,
};

/**
 * Computes the drawable plot area from container dimensions and margins.
 *
 * The plot area is the rectangular region inside the margins where
 * data series are rendered. Axes and labels are drawn in the margin space.
 *
 * @param width - Container width in CSS pixels.
 * @param height - Container height in CSS pixels.
 * @param margin - Margin configuration. Defaults to sensible values for typical charts.
 * @returns The computed plot area with absolute positions and dimensions.
 */
function createPlotArea(
	width: number,
	height: number,
	margin: ChartMargin = defaultMargin,
): PlotArea {
	const left = margin.left;
	const top = margin.top;
	const right = width - margin.right;
	const bottom = height - margin.bottom;

	return {
		left,
		top,
		right,
		bottom,
		width: Math.max(0, right - left),
		height: Math.max(0, bottom - top),
	};
}

export { createPlotArea, defaultMargin };
