import type { CurveType, PlotArea, ScaleFunction } from "./types.js";
import { clipToPlotArea } from "./draw-utils.js";
import { traceMonotonePath } from "./draw-line.js";
import type { PixelPoint } from "./draw-line.js";

/**
 * Draws a filled area series on a canvas context.
 *
 * The area is drawn by tracing the line path, then extending down to the
 * baseline (bottom of the plot area) and closing the shape. The fill is
 * applied at the specified opacity, and the stroke outline is drawn at
 * full opacity on top.
 *
 * @param context - The 2D canvas rendering context.
 * @param points - Array of data points as `{ x, y }` in data coordinates.
 * @param xScale - Scale function mapping data X values to pixel positions.
 * @param yScale - Scale function mapping data Y values to pixel positions.
 * @param plotArea - The plot area for clipping and baseline.
 * @param color - Fill and stroke color string.
 * @param fillOpacity - Opacity for the fill area (0 to 1). Defaults to 0.15.
 * @param strokeWidth - Line width for the top edge. Defaults to 2.
 * @param curve - Curve interpolation method.
 * @param animationProgress - Animation progress from 0 to 1.
 */
function drawArea(
	context: CanvasRenderingContext2D,
	points: ReadonlyArray<{ x: number; y: number }>,
	xScale: ScaleFunction,
	yScale: ScaleFunction,
	plotArea: PlotArea,
	color: string,
	fillOpacity: number = 0.15,
	strokeWidth: number = 2,
	curve: CurveType = "linear",
	animationProgress: number = 1,
): void {
	if (points.length === 0) {
		return;
	}

	// Map data points to pixel coordinates
	const pixelPoints: PixelPoint[] = points.map((point) => ({
		x: xScale(point.x),
		y: yScale(point.y),
	}));

	// Apply animation: only draw a portion of the points
	const visibleCount = Math.ceil(pixelPoints.length * animationProgress);
	const visiblePoints = pixelPoints.slice(0, visibleCount);

	if (visiblePoints.length < 2) {
		return;
	}

	const firstPoint = visiblePoints[0];
	const lastPoint = visiblePoints[visiblePoints.length - 1];
	if (!firstPoint || !lastPoint) {
		return;
	}

	clipToPlotArea(context, plotArea);

	// Draw filled area
	context.beginPath();
	traceCurvePath(context, visiblePoints, curve);

	// Extend to baseline and close
	context.lineTo(lastPoint.x, plotArea.bottom);
	context.lineTo(firstPoint.x, plotArea.bottom);
	context.closePath();

	context.fillStyle = color;
	context.globalAlpha = fillOpacity;
	context.fill();
	context.globalAlpha = 1;

	// Draw the top edge stroke
	context.beginPath();
	traceCurvePath(context, visiblePoints, curve);
	context.strokeStyle = color;
	context.lineWidth = strokeWidth;
	context.lineJoin = "round";
	context.lineCap = "round";
	context.stroke();

	context.restore();
}

/**
 * Traces a curve path through points using the specified interpolation method.
 */
function traceCurvePath(
	context: CanvasRenderingContext2D,
	points: ReadonlyArray<PixelPoint>,
	curve: CurveType,
): void {
	const first = points[0];
	if (!first) {
		return;
	}

	switch (curve) {
		case "monotone": {
			traceMonotonePath(context, points);
			break;
		}
		case "step": {
			context.moveTo(first.x, first.y);
			for (let index = 1; index < points.length; index++) {
				const previous = points[index - 1];
				const current = points[index];
				if (!previous || !current) {
					continue;
				}
				const midX = (previous.x + current.x) / 2;
				context.lineTo(midX, previous.y);
				context.lineTo(midX, current.y);
				context.lineTo(current.x, current.y);
			}
			break;
		}
		default: {
			context.moveTo(first.x, first.y);
			for (let index = 1; index < points.length; index++) {
				const point = points[index];
				if (point) {
					context.lineTo(point.x, point.y);
				}
			}
		}
	}
}

export { drawArea };
