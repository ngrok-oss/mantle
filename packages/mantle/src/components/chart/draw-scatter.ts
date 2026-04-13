import type { PlotArea, ScaleFunction } from "./types.js";
import { clipToPlotArea } from "./draw-utils.js";

/**
 * Draws a scatter series on a canvas context.
 *
 * Each data point is drawn as a filled circle at its pixel position.
 * For large datasets, points are drawn in a single pass with no
 * per-point state changes for optimal performance.
 *
 * @param context - The 2D canvas rendering context.
 * @param points - Array of data points as `{ x, y }` in data coordinates.
 * @param xScale - Scale function mapping data X values to pixel positions.
 * @param yScale - Scale function mapping data Y values to pixel positions.
 * @param plotArea - The plot area for clipping.
 * @param color - Fill color string.
 * @param radius - Point radius in CSS pixels. Defaults to 3.
 * @param fillOpacity - Opacity for the fill (0 to 1). Defaults to 0.7.
 * @param animationProgress - Animation progress from 0 to 1.
 */
function drawScatter(
	context: CanvasRenderingContext2D,
	points: ReadonlyArray<{ x: number; y: number }>,
	xScale: ScaleFunction,
	yScale: ScaleFunction,
	plotArea: PlotArea,
	color: string,
	radius: number = 3,
	fillOpacity: number = 0.7,
	animationProgress: number = 1,
): void {
	if (points.length === 0) {
		return;
	}

	clipToPlotArea(context, plotArea);

	context.fillStyle = color;
	context.globalAlpha = fillOpacity * animationProgress;

	// Batch all circles into a single path for performance with large datasets
	context.beginPath();
	for (const point of points) {
		const pixelX = xScale(point.x);
		const pixelY = yScale(point.y);
		context.moveTo(pixelX + radius, pixelY);
		context.arc(pixelX, pixelY, radius * animationProgress, 0, Math.PI * 2);
	}
	context.fill();

	context.globalAlpha = 1;
	context.restore();
}

export { drawScatter };
