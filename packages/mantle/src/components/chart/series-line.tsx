import { useEffect, useId } from "react";
import { useChartContext } from "./chart-context.js";
import type { CurveType } from "./types.js";

/** Props for `Chart.Line`. */
type LineProps = {
	/** Key in the data objects to read Y values from. */
	dataKey: string;
	/** Curve interpolation method. Defaults to `"linear"`. */
	curve?: CurveType;
	/** Stroke width in CSS pixels. Defaults to 2. */
	strokeWidth?: number;
};

/**
 * Declares a line series to be rendered on the chart canvas.
 *
 * This component does not render any DOM. It registers a series descriptor
 * into the chart context, which `Chart.Root` uses to drive canvas drawing.
 *
 * @example
 * ```tsx
 * <Chart.Root data={data} config={config}>
 *   <Chart.Line dataKey="requests" curve="monotone" />
 * </Chart.Root>
 * ```
 */
function Line({ dataKey, curve = "linear", strokeWidth = 2 }: LineProps) {
	const id = useId();
	const { registerSeries, scheduleDraw, config } = useChartContext();

	useEffect(() => {
		const deregister = registerSeries({
			id,
			dataKey,
			type: "line",
			color: config[dataKey]?.color ?? "",
			curve,
			strokeWidth,
		});

		scheduleDraw();

		return deregister;
	}, [id, dataKey, curve, strokeWidth, registerSeries, scheduleDraw, config]);

	return null;
}
Line.displayName = "Chart.Line";

export { Line };
export type { LineProps };
