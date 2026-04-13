import type { PlotArea } from "./types.js";

/**
 * Prepares a canvas context for DPR-aware drawing.
 *
 * Sets the canvas buffer size to account for the device pixel ratio,
 * applies the DPR transform, and clears the entire canvas.
 *
 * @param canvas - The canvas element to prepare.
 * @param cssWidth - The desired CSS pixel width.
 * @param cssHeight - The desired CSS pixel height.
 * @returns The prepared 2D rendering context, or `null` if the context is unavailable.
 */
function prepareCanvasContext(
	canvas: HTMLCanvasElement,
	cssWidth: number,
	cssHeight: number,
): CanvasRenderingContext2D | null {
	const context = canvas.getContext("2d");
	if (!context) {
		return null;
	}

	const dpr = window.devicePixelRatio || 1;
	canvas.width = Math.round(cssWidth * dpr);
	canvas.height = Math.round(cssHeight * dpr);
	context.setTransform(dpr, 0, 0, dpr, 0, 0);
	context.clearRect(0, 0, cssWidth, cssHeight);

	return context;
}

/**
 * Clears the entire canvas without changing its size or transform.
 *
 * @param context - The canvas rendering context to clear.
 */
function clearCanvas(context: CanvasRenderingContext2D): void {
	context.save();
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	context.restore();
}

/**
 * Clips the drawing region to the plot area. Call `context.restore()` when done
 * to remove the clip.
 *
 * @param context - The canvas rendering context.
 * @param plotArea - The plot area to clip to.
 */
function clipToPlotArea(context: CanvasRenderingContext2D, plotArea: PlotArea): void {
	context.save();
	context.beginPath();
	context.rect(plotArea.left, plotArea.top, plotArea.width, plotArea.height);
	context.clip();
}

export { clearCanvas, clipToPlotArea, prepareCanvasContext };
