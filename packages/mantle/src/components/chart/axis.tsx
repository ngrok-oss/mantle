import { useEffect } from "react";
import { useChartContext } from "./chart-context.js";
import { estimateTickCount, generateLinearTicks } from "./ticks.js";
import { formatCompact } from "./formatters.js";

/** Props for `Chart.XAxis`. */
type XAxisProps = {
	/** Key in the data objects to read X values from. Defaults to `"x"`. */
	dataKey?: string;
	/** Custom tick formatter function. */
	tickFormatter?: (value: number) => string;
	/** Label for the axis (optional). */
	label?: string;
};

/**
 * Renders the horizontal (X) axis with tick marks and labels in SVG.
 *
 * Must be rendered inside `Chart.Root`. Communicates its `dataKey`
 * to the chart context so scales are computed correctly.
 *
 * @example
 * ```tsx
 * <Chart.XAxis dataKey="timestamp" tickFormatter={(v) => new Date(v).toLocaleDateString()} />
 * ```
 */
function XAxis({ dataKey = "x", tickFormatter, label }: XAxisProps) {
	const context = useChartContext();
	const { data, plotArea, xScale, resolvedStyles, containerSize } = context;

	// Communicate the xDataKey to the root
	useEffect(() => {
		const extendedContext = context as typeof context & { setXDataKey?: (key: string) => void };
		extendedContext.setXDataKey?.(dataKey);
	}, [dataKey, context]);

	if (containerSize.width === 0 || containerSize.height === 0 || data.length === 0) {
		return null;
	}

	// Compute tick values
	const xValues = data.map((datum) => Number(datum[dataKey]));
	const xMin = Math.min(...xValues);
	const xMax = Math.max(...xValues);
	const tickCount = estimateTickCount(plotArea.width);
	const ticks = generateLinearTicks(xMin, xMax, tickCount);

	const formatter = tickFormatter ?? formatCompact;

	return (
		<g data-slot="chart-x-axis">
			{/* Axis line */}
			<line
				x1={plotArea.left}
				y1={plotArea.bottom}
				x2={plotArea.right}
				y2={plotArea.bottom}
				stroke={resolvedStyles.axisColor}
				strokeWidth={1}
			/>

			{/* Tick marks and labels */}
			{ticks.map((tick) => {
				const pixelX = xScale(tick);
				if (pixelX < plotArea.left - 1 || pixelX > plotArea.right + 1) {
					return null;
				}

				return (
					<g key={tick}>
						<line
							x1={pixelX}
							y1={plotArea.bottom}
							x2={pixelX}
							y2={plotArea.bottom + 5}
							stroke={resolvedStyles.axisColor}
							strokeWidth={1}
						/>
						<text
							x={pixelX}
							y={plotArea.bottom + 18}
							textAnchor="middle"
							fill={resolvedStyles.mutedTextColor}
							fontSize={11}
							fontFamily={resolvedStyles.fontFamily}
						>
							{formatter(tick)}
						</text>
					</g>
				);
			})}

			{/* Axis label */}
			{label && (
				<text
					x={(plotArea.left + plotArea.right) / 2}
					y={containerSize.height - 2}
					textAnchor="middle"
					fill={resolvedStyles.bodyTextColor}
					fontSize={12}
					fontFamily={resolvedStyles.fontFamily}
				>
					{label}
				</text>
			)}
		</g>
	);
}
XAxis.displayName = "Chart.XAxis";

/** Props for `Chart.YAxis`. */
type YAxisProps = {
	/** Custom tick formatter function. */
	tickFormatter?: (value: number) => string;
	/** Label for the axis (optional). */
	label?: string;
};

/**
 * Renders the vertical (Y) axis with tick marks and labels in SVG.
 *
 * @example
 * ```tsx
 * <Chart.YAxis tickFormatter={(v) => `${v}%`} />
 * ```
 */
function YAxis({ tickFormatter, label }: YAxisProps) {
	const { data, plotArea, yScale, resolvedStyles, containerSize, series } = useChartContext();

	if (containerSize.width === 0 || containerSize.height === 0 || data.length === 0) {
		return null;
	}

	// Compute Y domain from data
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

	// Include 0 for bar charts
	const hasBars = series.some((descriptor) => descriptor.type === "bar");
	if (hasBars) {
		yMin = Math.min(0, yMin);
	}

	const tickCount = estimateTickCount(plotArea.height);
	const ticks = generateLinearTicks(yMin, yMax, tickCount);

	const formatter = tickFormatter ?? formatCompact;

	return (
		<g data-slot="chart-y-axis">
			{/* Axis line */}
			<line
				x1={plotArea.left}
				y1={plotArea.top}
				x2={plotArea.left}
				y2={plotArea.bottom}
				stroke={resolvedStyles.axisColor}
				strokeWidth={1}
			/>

			{/* Tick marks and labels */}
			{ticks.map((tick) => {
				const pixelY = yScale(tick);
				if (pixelY < plotArea.top - 1 || pixelY > plotArea.bottom + 1) {
					return null;
				}

				return (
					<g key={tick}>
						<line
							x1={plotArea.left - 5}
							y1={pixelY}
							x2={plotArea.left}
							y2={pixelY}
							stroke={resolvedStyles.axisColor}
							strokeWidth={1}
						/>
						<text
							x={plotArea.left - 8}
							y={pixelY}
							textAnchor="end"
							dominantBaseline="middle"
							fill={resolvedStyles.mutedTextColor}
							fontSize={11}
							fontFamily={resolvedStyles.fontFamily}
						>
							{formatter(tick)}
						</text>
					</g>
				);
			})}

			{/* Axis label */}
			{label && (
				<text
					x={14}
					y={(plotArea.top + plotArea.bottom) / 2}
					textAnchor="middle"
					dominantBaseline="middle"
					fill={resolvedStyles.bodyTextColor}
					fontSize={12}
					fontFamily={resolvedStyles.fontFamily}
					transform={`rotate(-90, 14, ${(plotArea.top + plotArea.bottom) / 2})`}
				>
					{label}
				</text>
			)}
		</g>
	);
}
YAxis.displayName = "Chart.YAxis";

export { XAxis, YAxis };
export type { XAxisProps, YAxisProps };
