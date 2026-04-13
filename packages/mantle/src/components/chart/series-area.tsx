import { useEffect, useId } from "react";
import { useChartContext } from "./chart-context.js";
import type { CurveType } from "./types.js";

/** Props for `Chart.Area`. */
type AreaProps = {
	/** Key in the data objects to read Y values from. */
	dataKey: string;
	/** Curve interpolation method. Defaults to `"linear"`. */
	curve?: CurveType;
	/** Fill opacity for the area under the curve (0 to 1). Defaults to 0.15. */
	fillOpacity?: number;
	/** Stroke width for the top edge in CSS pixels. Defaults to 2. */
	strokeWidth?: number;
};

/**
 * Declares a filled area series to be rendered on the chart canvas.
 *
 * The area is drawn by filling the region between the data line and the
 * X-axis baseline. Combine with `Chart.Line` using the same `dataKey`
 * for an area chart with a distinct stroke on top.
 *
 * @example
 * ```tsx
 * <Chart.Root data={data} config={config}>
 *   <Chart.Area dataKey="requests" fillOpacity={0.3} curve="monotone" />
 * </Chart.Root>
 * ```
 */
function Area({ dataKey, curve = "linear", fillOpacity = 0.15, strokeWidth = 2 }: AreaProps) {
	const id = useId();
	const { registerSeries, scheduleDraw, config } = useChartContext();

	useEffect(() => {
		const deregister = registerSeries({
			id,
			dataKey,
			type: "area",
			color: config[dataKey]?.color ?? "",
			curve,
			fillOpacity,
			strokeWidth,
		});

		scheduleDraw();

		return deregister;
	}, [id, dataKey, curve, fillOpacity, strokeWidth, registerSeries, scheduleDraw, config]);

	return null;
}
Area.displayName = "Chart.Area";

export { Area };
export type { AreaProps };
