import { useChartContext } from "./chart-context.js";
import { estimateTickCount, generateLinearTicks } from "./ticks.js";

/** Props for `Chart.Grid`. */
type GridProps = {
	/** Show horizontal grid lines. Defaults to `true`. */
	horizontal?: boolean;
	/** Show vertical grid lines. Defaults to `false`. */
	vertical?: boolean;
	/** Dash pattern for grid lines (e.g., `"4 4"`). Defaults to solid. */
	strokeDasharray?: string;
};

/**
 * Renders grid lines in SVG behind the chart data.
 *
 * Grid lines are drawn at tick positions to help readers
 * estimate values visually.
 *
 * @example
 * ```tsx
 * <Chart.Grid horizontal />
 * <Chart.Grid horizontal vertical strokeDasharray="4 4" />
 * ```
 */
function Grid({ horizontal = true, vertical = false, strokeDasharray }: GridProps) {
	const { data, plotArea, xScale, yScale, resolvedStyles, containerSize, series, xDataKey } =
		useChartContext();

	if (containerSize.width === 0 || containerSize.height === 0 || data.length === 0) {
		return null;
	}

	const lines: React.ReactNode[] = [];

	if (horizontal) {
		let yMin = Infinity;
		let yMax = -Infinity;
		const dataKeys = series.map((descriptor) => descriptor.dataKey);

		for (const key of dataKeys) {
			for (const datum of data) {
				const value = Number(datum[key]);
				if (Number.isFinite(value)) {
					if (value < yMin) {
						yMin = value;
					}
					if (value > yMax) {
						yMax = value;
					}
				}
			}
		}

		if (!Number.isFinite(yMin)) {
			yMin = 0;
		}
		if (!Number.isFinite(yMax)) {
			yMax = 1;
		}

		const hasBars = series.some((descriptor) => descriptor.type === "bar");
		if (hasBars) {
			yMin = Math.min(0, yMin);
		}

		const tickCount = estimateTickCount(plotArea.height);
		const yTicks = generateLinearTicks(yMin, yMax, tickCount);

		for (const tick of yTicks) {
			const pixelY = yScale(tick);
			if (pixelY >= plotArea.top - 1 && pixelY <= plotArea.bottom + 1) {
				lines.push(
					<line
						key={`h-${tick}`}
						x1={plotArea.left}
						y1={pixelY}
						x2={plotArea.right}
						y2={pixelY}
						stroke={resolvedStyles.gridColor}
						strokeWidth={1}
						strokeDasharray={strokeDasharray}
					/>,
				);
			}
		}
	}

	if (vertical) {
		const xValues = data.map((datum) => Number(datum[xDataKey]));
		const xMin = Math.min(...xValues);
		const xMax = Math.max(...xValues);
		const tickCount = estimateTickCount(plotArea.width);
		const xTicks = generateLinearTicks(xMin, xMax, tickCount);

		for (const tick of xTicks) {
			const pixelX = xScale(tick);
			if (pixelX >= plotArea.left - 1 && pixelX <= plotArea.right + 1) {
				lines.push(
					<line
						key={`v-${tick}`}
						x1={pixelX}
						y1={plotArea.top}
						x2={pixelX}
						y2={plotArea.bottom}
						stroke={resolvedStyles.gridColor}
						strokeWidth={1}
						strokeDasharray={strokeDasharray}
					/>,
				);
			}
		}
	}

	return <g data-slot="chart-grid">{lines}</g>;
}
Grid.displayName = "Chart.Grid";

export { Grid };
export type { GridProps };
