import { cx } from "../../utils/cx/cx.js";
import { useChartContext } from "./chart-context.js";

/** Props for `Chart.Legend`. */
type ChartLegendProps = {
	/** Additional CSS class names. */
	className?: string;
};

/**
 * Renders a legend showing series labels and color indicators.
 *
 * Reads series configuration from the chart context.
 * Rendered as HTML via `foreignObject` inside the SVG overlay.
 *
 * @example
 * ```tsx
 * <Chart.Legend />
 * ```
 */
function ChartLegend({ className }: ChartLegendProps) {
	const { config, resolvedStyles, containerSize, series } = useChartContext();

	if (series.length === 0) {
		return null;
	}

	return (
		<foreignObject
			x={0}
			y={0}
			width={containerSize.width}
			height={containerSize.height}
			className="pointer-events-none overflow-visible"
		>
			<div
				className={cx("flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1", className)}
			>
				{series.map((descriptor) => {
					const seriesConfig = config[descriptor.dataKey];
					const label = seriesConfig?.label ?? descriptor.dataKey;
					const color = resolvedStyles.seriesColors[descriptor.dataKey] ?? "#888";
					const Icon = seriesConfig?.icon;

					return (
						<div key={descriptor.id} className="flex items-center gap-1.5 text-xs text-muted">
							{Icon ? (
								<Icon className="size-3" />
							) : (
								<div className="size-2 rounded-full" style={{ backgroundColor: color }} />
							)}
							<span>{label}</span>
						</div>
					);
				})}
			</div>
		</foreignObject>
	);
}
ChartLegend.displayName = "Chart.Legend";

export { ChartLegend };
export type { ChartLegendProps };
