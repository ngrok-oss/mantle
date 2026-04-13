import { useEffect, useId } from "react";
import { useChartContext } from "./chart-context.js";

/** Props for `Chart.Bar`. */
type BarProps = {
	/** Key in the data objects to read Y values from. */
	dataKey: string;
	/** Stack group identifier. Bars with the same `stackId` are stacked. No `stackId` means grouped side-by-side. */
	stackId?: string;
	/** Fill opacity (0 to 1). Defaults to 0.85. */
	fillOpacity?: number;
};

/**
 * Declares a bar series to be rendered on the chart canvas.
 *
 * Bars with the same `stackId` are stacked on top of each other.
 * Bars without a `stackId` (or with unique values) are grouped side-by-side.
 *
 * @example
 * ```tsx
 * <Chart.Root data={data} config={config}>
 *   <Chart.Bar dataKey="desktop" stackId="a" />
 *   <Chart.Bar dataKey="mobile" stackId="a" />
 * </Chart.Root>
 * ```
 */
function Bar({ dataKey, stackId, fillOpacity = 0.85 }: BarProps) {
	const id = useId();
	const { registerSeries, scheduleDraw, config } = useChartContext();

	useEffect(() => {
		const deregister = registerSeries({
			id,
			dataKey,
			type: "bar",
			color: config[dataKey]?.color ?? "",
			stackId,
			fillOpacity,
		});

		scheduleDraw();

		return deregister;
	}, [id, dataKey, stackId, fillOpacity, registerSeries, scheduleDraw, config]);

	return null;
}
Bar.displayName = "Chart.Bar";

export { Bar };
export type { BarProps };
