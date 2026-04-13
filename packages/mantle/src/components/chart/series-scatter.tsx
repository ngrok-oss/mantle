import { useEffect, useId } from "react";
import { useChartContext } from "./chart-context.js";

/** Props for `Chart.Scatter`. */
type ScatterProps = {
	/** Key in the data objects to read Y values from. */
	dataKey: string;
	/** Point radius in CSS pixels. Defaults to 3. */
	radius?: number;
};

/**
 * Declares a scatter series to be rendered on the chart canvas.
 *
 * Each data point is drawn as a filled circle at its `(x, y)` position.
 * The X position is determined by the `dataKey` on `Chart.XAxis`.
 *
 * @example
 * ```tsx
 * <Chart.Root data={data} config={config}>
 *   <Chart.XAxis dataKey="x" />
 *   <Chart.YAxis />
 *   <Chart.Scatter dataKey="series1" />
 * </Chart.Root>
 * ```
 */
function Scatter({ dataKey, radius = 3 }: ScatterProps) {
	const id = useId();
	const { registerSeries, scheduleDraw, config } = useChartContext();

	useEffect(() => {
		const deregister = registerSeries({
			id,
			dataKey,
			type: "scatter",
			color: config[dataKey]?.color ?? "",
			radius,
		});

		scheduleDraw();

		return deregister;
	}, [id, dataKey, radius, registerSeries, scheduleDraw, config]);

	return null;
}
Scatter.displayName = "Chart.Scatter";

export { Scatter };
export type { ScatterProps };
