import type { PlotArea, ScaleFunction } from "./types.js";
import { clipToPlotArea } from "./draw-utils.js";

/** Layout information for a single bar in a chart. */
type BarLayout = {
	/** X pixel position of the bar's left edge. */
	x: number;
	/** Y pixel position of the bar's top edge. */
	y: number;
	/** Bar width in pixels. */
	width: number;
	/** Bar height in pixels. */
	height: number;
	/** Fill color. */
	color: string;
	/** Fill opacity (0 to 1). */
	fillOpacity: number;
};

/**
 * Computes the layout for grouped (non-stacked) bars at a single X position.
 *
 * @param bandX - Pixel position of the band's left edge.
 * @param bandwidth - Total width of the band in pixels.
 * @param values - Array of `{ value, color, fillOpacity }` for each series in the group.
 * @param yScale - Scale function mapping data values to pixel positions.
 * @param baseline - Y pixel position of the zero baseline.
 * @param animationProgress - Animation progress from 0 to 1.
 * @returns Array of bar layouts for this group.
 */
function computeGroupedBarLayouts(
	bandX: number,
	bandwidth: number,
	values: ReadonlyArray<{ value: number; color: string; fillOpacity: number }>,
	yScale: ScaleFunction,
	baseline: number,
	animationProgress: number = 1,
): BarLayout[] {
	const count = values.length;
	if (count === 0) {
		return [];
	}

	const barWidth = bandwidth / count;

	return values.map((entry, index) => {
		const targetY = yScale(entry.value);
		const animatedY = baseline + (targetY - baseline) * animationProgress;
		const barTop = Math.min(animatedY, baseline);
		const barBottom = Math.max(animatedY, baseline);

		return {
			x: bandX + index * barWidth,
			y: barTop,
			width: barWidth,
			height: barBottom - barTop,
			color: entry.color,
			fillOpacity: entry.fillOpacity,
		};
	});
}

/**
 * Computes the layout for stacked bars at a single X position.
 *
 * @param bandX - Pixel position of the band's left edge.
 * @param bandwidth - Total width of the band in pixels.
 * @param values - Array of `{ value, color, fillOpacity }` for each series in the stack.
 * @param yScale - Scale function mapping data values to pixel positions.
 * @param animationProgress - Animation progress from 0 to 1.
 * @returns Array of bar layouts for this stack.
 */
function computeStackedBarLayouts(
	bandX: number,
	bandwidth: number,
	values: ReadonlyArray<{ value: number; color: string; fillOpacity: number }>,
	yScale: ScaleFunction,
	animationProgress: number = 1,
): BarLayout[] {
	let cumulativeValue = 0;

	return values.map((entry) => {
		const startValue = cumulativeValue;
		cumulativeValue += entry.value;

		const animatedStart = startValue * animationProgress;
		const animatedEnd = cumulativeValue * animationProgress;

		const startY = yScale(animatedStart);
		const endY = yScale(animatedEnd);
		const barTop = Math.min(startY, endY);
		const barBottom = Math.max(startY, endY);

		return {
			x: bandX,
			y: barTop,
			width: bandwidth,
			height: barBottom - barTop,
			color: entry.color,
			fillOpacity: entry.fillOpacity,
		};
	});
}

/**
 * Draws a set of bar layouts on a canvas context.
 *
 * @param context - The 2D canvas rendering context.
 * @param bars - Array of bar layouts to draw.
 * @param plotArea - The plot area for clipping.
 * @param cornerRadius - Corner radius for bar rounding. Defaults to 2.
 */
function drawBars(
	context: CanvasRenderingContext2D,
	bars: ReadonlyArray<BarLayout>,
	plotArea: PlotArea,
	cornerRadius: number = 2,
): void {
	if (bars.length === 0) {
		return;
	}

	clipToPlotArea(context, plotArea);

	for (const bar of bars) {
		if (bar.height < 0.5) {
			continue;
		}

		context.fillStyle = bar.color;
		context.globalAlpha = bar.fillOpacity;

		// Use rounded rectangle if supported and radius > 0
		if (cornerRadius > 0 && typeof context.roundRect === "function") {
			context.beginPath();
			context.roundRect(bar.x, bar.y, bar.width, bar.height, cornerRadius);
			context.fill();
		} else {
			context.fillRect(bar.x, bar.y, bar.width, bar.height);
		}
	}

	context.globalAlpha = 1;
	context.restore();
}

export { computeGroupedBarLayouts, computeStackedBarLayouts, drawBars };
export type { BarLayout };
