import type { CurveType, PlotArea, ScaleFunction } from "./types.js";
import { clipToPlotArea } from "./draw-utils.js";

/** A point in pixel coordinates for canvas drawing. */
type PixelPoint = {
	x: number;
	y: number;
};

/**
 * Draws a line series on a canvas context.
 *
 * @param context - The 2D canvas rendering context.
 * @param points - Array of data points as `{ x, y }` in data coordinates.
 * @param xScale - Scale function mapping data X values to pixel positions.
 * @param yScale - Scale function mapping data Y values to pixel positions.
 * @param plotArea - The plot area for clipping.
 * @param color - Stroke color string.
 * @param strokeWidth - Line width in CSS pixels.
 * @param curve - Curve interpolation method.
 * @param animationProgress - Animation progress from 0 to 1. At 1, the full line is drawn.
 */
function drawLine(
	context: CanvasRenderingContext2D,
	points: ReadonlyArray<{ x: number; y: number }>,
	xScale: ScaleFunction,
	yScale: ScaleFunction,
	plotArea: PlotArea,
	color: string,
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
		if (visiblePoints.length === 1) {
			const point = visiblePoints[0];
			if (point) {
				context.beginPath();
				context.arc(point.x, point.y, strokeWidth, 0, Math.PI * 2);
				context.fillStyle = color;
				context.fill();
			}
		}
		return;
	}

	clipToPlotArea(context, plotArea);

	context.beginPath();
	context.strokeStyle = color;
	context.lineWidth = strokeWidth;
	context.lineJoin = "round";
	context.lineCap = "round";

	switch (curve) {
		case "monotone": {
			traceMonotonePath(context, visiblePoints);
			break;
		}
		case "step": {
			traceStepPath(context, visiblePoints);
			break;
		}
		default: {
			traceLinearPath(context, visiblePoints);
		}
	}

	context.stroke();
	context.restore();
}

/**
 * Traces a linear (straight-line) path through the points.
 */
function traceLinearPath(
	context: CanvasRenderingContext2D,
	points: ReadonlyArray<PixelPoint>,
): void {
	const first = points[0];
	if (!first) {
		return;
	}
	context.moveTo(first.x, first.y);
	for (let index = 1; index < points.length; index++) {
		const point = points[index];
		if (point) {
			context.lineTo(point.x, point.y);
		}
	}
}

/**
 * Traces a step (staircase) path through the points.
 * Steps are horizontal-first, then vertical.
 */
function traceStepPath(context: CanvasRenderingContext2D, points: ReadonlyArray<PixelPoint>): void {
	const first = points[0];
	if (!first) {
		return;
	}
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
}

/**
 * Traces a monotone cubic spline path using the Fritsch-Carlson algorithm.
 *
 * This produces smooth curves that never overshoot between data points,
 * which is ideal for data visualization where artificial peaks would be misleading.
 */
function traceMonotonePath(
	context: CanvasRenderingContext2D,
	points: ReadonlyArray<PixelPoint>,
): void {
	if (points.length < 2) {
		return;
	}

	const p0 = points[0];
	const p1 = points[1];
	if (!p0 || !p1) {
		return;
	}

	if (points.length === 2) {
		context.moveTo(p0.x, p0.y);
		context.lineTo(p1.x, p1.y);
		return;
	}

	const tangents = buildMonotoneTangents(points);
	context.moveTo(p0.x, p0.y);

	for (let index = 1; index < points.length; index++) {
		const previous = points[index - 1];
		const current = points[index];
		const previousTangent = tangents[index - 1];
		const currentTangent = tangents[index];

		if (!previous || !current || previousTangent === undefined || currentTangent === undefined) {
			continue;
		}

		const dx = current.x - previous.x;

		context.bezierCurveTo(
			previous.x + dx / 3,
			previous.y + (previousTangent * dx) / 3,
			current.x - dx / 3,
			current.y - (currentTangent * dx) / 3,
			current.x,
			current.y,
		);
	}
}

/**
 * Computes monotone tangents for a set of points using the Fritsch-Carlson method.
 *
 * The algorithm:
 * 1. Compute slopes (deltas) between consecutive points.
 * 2. Compute initial tangents as the average of adjacent slopes.
 * 3. Clamp tangents to ensure monotonicity (no overshoot).
 */
function buildMonotoneTangents(points: ReadonlyArray<PixelPoint>): number[] {
	const count = points.length;
	const deltas: number[] = [];
	const tangents: number[] = [];

	// Step 1: compute slopes between consecutive points
	for (let index = 0; index < count - 1; index++) {
		const current = points[index];
		const next = points[index + 1];
		if (!current || !next) {
			deltas.push(0);
			continue;
		}
		const dx = next.x - current.x;
		if (dx === 0) {
			deltas.push(0);
		} else {
			deltas.push((next.y - current.y) / dx);
		}
	}

	// Step 2: initial tangents — average of adjacent slopes
	const firstDelta = deltas[0] ?? 0;
	tangents.push(firstDelta);
	for (let index = 1; index < count - 1; index++) {
		const prevDelta = deltas[index - 1] ?? 0;
		const currDelta = deltas[index] ?? 0;
		tangents.push((prevDelta + currDelta) / 2);
	}
	const lastDelta = deltas[count - 2] ?? 0;
	tangents.push(lastDelta);

	// Step 3: Fritsch-Carlson monotonicity constraints
	for (let index = 0; index < count - 1; index++) {
		const delta = deltas[index] ?? 0;
		if (Math.abs(delta) < 1e-12) {
			tangents[index] = 0;
			tangents[index + 1] = 0;
		} else {
			const alpha = (tangents[index] ?? 0) / delta;
			const beta = (tangents[index + 1] ?? 0) / delta;
			const norm = Math.sqrt(alpha * alpha + beta * beta);
			if (norm > 3) {
				const scale = 3 / norm;
				tangents[index] = scale * alpha * delta;
				tangents[index + 1] = scale * beta * delta;
			}
		}
	}

	return tangents;
}

export { drawLine, traceMonotonePath };
export type { PixelPoint };
