import { scaleBand, scaleLinear, scaleLog } from "d3-scale";
import type { BandScaleFunction, InverseScaleFunction, ScaleFunction } from "./types.js";

/**
 * Creates a linear scale function that maps values from a continuous data domain
 * to a pixel range. Suitable for line, area, and scatter charts.
 *
 * @param domain - The `[min, max]` data domain.
 * @param range - The `[start, end]` pixel range. For Y axes, pass `[bottom, top]` to invert.
 * @returns A scale function and its inverse.
 */
function createLinearScale(
	domain: readonly [number, number],
	range: readonly [number, number],
): { scale: ScaleFunction; inverse: InverseScaleFunction } {
	const d3Scale = scaleLinear().domain(domain).range(range).nice();
	const scale: ScaleFunction = (value) => d3Scale(value);
	const inverse: InverseScaleFunction = (pixel) => d3Scale.invert(pixel);
	return { scale, inverse };
}

/**
 * Creates a logarithmic scale function. Useful for data with exponential ranges.
 *
 * @param domain - The `[min, max]` data domain. Both values must be positive.
 * @param range - The `[start, end]` pixel range.
 * @returns A scale function and its inverse.
 */
function createLogScale(
	domain: readonly [number, number],
	range: readonly [number, number],
): { scale: ScaleFunction; inverse: InverseScaleFunction } {
	const d3Scale = scaleLog().domain(domain).range(range).nice();
	const scale: ScaleFunction = (value) => d3Scale(value);
	const inverse: InverseScaleFunction = (pixel) => d3Scale.invert(pixel);
	return { scale, inverse };
}

/**
 * Creates a band scale for categorical data (bar charts).
 * Maps category strings to pixel positions with configurable padding.
 *
 * @param domain - Array of category strings (e.g., month names).
 * @param range - The `[start, end]` pixel range.
 * @param padding - Padding ratio between bands, from 0 to 1. Defaults to 0.2.
 * @returns A band scale function with `.bandwidth()` and `.domain()` methods.
 */
function createBandScale(
	domain: readonly string[],
	range: readonly [number, number],
	padding: number = 0.2,
): BandScaleFunction {
	const d3Scale = scaleBand<string>().domain(domain).range(range).padding(padding);

	const scale = ((value: string) => d3Scale(value)) as BandScaleFunction;
	scale.bandwidth = () => d3Scale.bandwidth();
	scale.domain = () => d3Scale.domain();

	return scale;
}

export { createBandScale, createLinearScale, createLogScale };
