import { describe, expect, test } from "vitest";
import { createLinearScale } from "./scales.js";
import { createPlotArea } from "./plot-area.js";
import { generateLinearTicks } from "./ticks.js";

/**
 * Generates a synthetic dataset with the given number of points.
 * Simulates a time series with random walk data.
 */
function generateSyntheticData(pointCount: number): Array<{ timestamp: number; value: number }> {
	const data: Array<{ timestamp: number; value: number }> = [];
	let value = 100;

	for (let index = 0; index < pointCount; index++) {
		value += (Math.random() - 0.5) * 10;
		data.push({
			timestamp: index * 1000,
			value: Math.max(0, value),
		});
	}

	return data;
}

describe("stress tests", () => {
	test("createLinearScale handles 10k data points efficiently", () => {
		const data = generateSyntheticData(10_000);
		const plotArea = createPlotArea(800, 400);

		const start = performance.now();

		const values = data.map((datum) => datum.value);
		const min = Math.min(...values);
		const max = Math.max(...values);

		const { scale: xScale } = createLinearScale(
			[data[0]?.timestamp ?? 0, data[data.length - 1]?.timestamp ?? 1],
			[plotArea.left, plotArea.right],
		);
		const { scale: yScale } = createLinearScale([min, max], [plotArea.bottom, plotArea.top]);

		// Map all points through scales (simulates the drawing step)
		const pixelPoints = data.map((datum) => ({
			x: xScale(datum.timestamp),
			y: yScale(datum.value),
		}));

		const elapsed = performance.now() - start;

		expect(pixelPoints.length).toBe(10_000);
		expect(elapsed).toBeLessThan(100); // Should complete in < 100ms
	});

	test("createLinearScale handles 50k data points efficiently", () => {
		const data = generateSyntheticData(50_000);
		const plotArea = createPlotArea(800, 400);

		const start = performance.now();

		const values = data.map((datum) => datum.value);
		const min = Math.min(...values);
		const max = Math.max(...values);

		const { scale: xScale } = createLinearScale(
			[data[0]?.timestamp ?? 0, data[data.length - 1]?.timestamp ?? 1],
			[plotArea.left, plotArea.right],
		);
		const { scale: yScale } = createLinearScale([min, max], [plotArea.bottom, plotArea.top]);

		const pixelPoints = data.map((datum) => ({
			x: xScale(datum.timestamp),
			y: yScale(datum.value),
		}));

		const elapsed = performance.now() - start;

		expect(pixelPoints.length).toBe(50_000);
		expect(elapsed).toBeLessThan(500); // Should complete in < 500ms
	});

	test("createLinearScale handles 100k data points efficiently", () => {
		const data = generateSyntheticData(100_000);
		const plotArea = createPlotArea(800, 400);

		const start = performance.now();

		const values = data.map((datum) => datum.value);
		const min = Math.min(...values);
		const max = Math.max(...values);

		const { scale: xScale } = createLinearScale(
			[data[0]?.timestamp ?? 0, data[data.length - 1]?.timestamp ?? 1],
			[plotArea.left, plotArea.right],
		);
		const { scale: yScale } = createLinearScale([min, max], [plotArea.bottom, plotArea.top]);

		const pixelPoints = data.map((datum) => ({
			x: xScale(datum.timestamp),
			y: yScale(datum.value),
		}));

		const elapsed = performance.now() - start;

		expect(pixelPoints.length).toBe(100_000);
		expect(elapsed).toBeLessThan(1000); // Should complete in < 1s
	});

	test("tick generation is fast with extreme ranges", () => {
		const start = performance.now();

		// Generate ticks for various range sizes
		generateLinearTicks(0, 1_000_000_000, 10);
		generateLinearTicks(0.000001, 0.001, 10);
		generateLinearTicks(-1_000_000, 1_000_000, 10);

		const elapsed = performance.now() - start;

		expect(elapsed).toBeLessThan(10); // Should be near-instant
	});

	test("nearest point search is fast with 10k points", () => {
		const data = generateSyntheticData(10_000);
		const plotArea = createPlotArea(800, 400);

		const { scale: xScale } = createLinearScale(
			[data[0]?.timestamp ?? 0, data[data.length - 1]?.timestamp ?? 1],
			[plotArea.left, plotArea.right],
		);

		const start = performance.now();

		// Simulate 100 mousemove events, each finding nearest point
		for (let iteration = 0; iteration < 100; iteration++) {
			const mouseX = plotArea.left + Math.random() * plotArea.width;

			let nearestIndex = 0;
			let nearestDistance = Infinity;

			for (let index = 0; index < data.length; index++) {
				const datum = data[index];
				if (!datum) {
					continue;
				}
				const pixelX = xScale(datum.timestamp);
				const distance = Math.abs(pixelX - mouseX);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					nearestIndex = index;
				}
			}

			// Just verify the result is valid
			expect(nearestIndex).toBeGreaterThanOrEqual(0);
			expect(nearestIndex).toBeLessThan(data.length);
		}

		const elapsed = performance.now() - start;

		// 100 linear searches over 10k points should be fast
		expect(elapsed).toBeLessThan(200);
	});
});
