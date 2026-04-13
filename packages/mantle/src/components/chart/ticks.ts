/**
 * Generates evenly spaced tick values for a linear axis.
 *
 * The tick values are "nice" numbers (multiples of 1, 2, 5, 10, etc.)
 * that cover the data domain and are human-readable.
 *
 * @param min - Minimum data value.
 * @param max - Maximum data value.
 * @param count - Desired number of ticks (approximate). Defaults to 5.
 * @returns Array of tick values spanning the domain.
 */
function generateLinearTicks(min: number, max: number, count: number = 5): number[] {
	if (min === max) {
		return [min];
	}

	const range = max - min;
	const rawStep = range / count;
	const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
	const residual = rawStep / magnitude;

	let niceStep: number;
	if (residual <= 1.5) {
		niceStep = magnitude;
	} else if (residual <= 3.5) {
		niceStep = 2 * magnitude;
	} else if (residual <= 7.5) {
		niceStep = 5 * magnitude;
	} else {
		niceStep = 10 * magnitude;
	}

	const niceMin = Math.floor(min / niceStep) * niceStep;
	const niceMax = Math.ceil(max / niceStep) * niceStep;

	const ticks: number[] = [];
	for (let value = niceMin; value <= niceMax + niceStep * 0.5; value += niceStep) {
		ticks.push(Math.round(value * 1e12) / 1e12);
	}

	return ticks;
}

/**
 * Generates tick values for a logarithmic axis at powers of 10.
 *
 * @param min - Minimum data value (must be positive).
 * @param max - Maximum data value (must be positive).
 * @returns Array of tick values at powers of 10 spanning the domain.
 */
function generateLogTicks(min: number, max: number): number[] {
	const safeMin = Math.max(min, Number.MIN_VALUE);
	const startPow = Math.floor(Math.log10(safeMin));
	const endPow = Math.ceil(Math.log10(max));

	const ticks: number[] = [];
	for (let power = startPow; power <= endPow; power++) {
		ticks.push(Math.pow(10, power));
	}

	return ticks;
}

/**
 * Estimates the number of ticks that fit along an axis of a given pixel length.
 * Uses a heuristic of roughly one tick per 80 pixels, clamped between 2 and 12.
 *
 * @param axisLength - The pixel length of the axis.
 * @returns Recommended number of ticks.
 */
function estimateTickCount(axisLength: number): number {
	return Math.max(2, Math.min(12, Math.floor(axisLength / 80)));
}

export { estimateTickCount, generateLinearTicks, generateLogTicks };
