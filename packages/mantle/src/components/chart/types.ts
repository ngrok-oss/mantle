import type { ComponentType } from "react";

/**
 * Configuration for a single data series in a chart.
 * Maps a data key to its visual and labeling properties.
 */
type ChartSeriesConfig = {
	/**
	 * Human-readable label shown in tooltips and legends.
	 */
	label: string;

	/**
	 * Color reference for this series.
	 *
	 * Accepts:
	 * - Mantle semantic color + shade: `"accent-500"`, `"danger-500"`, `"success-400"`
	 * - Raw CSS color: `"#ff0000"`, `"oklch(0.7 0.15 150)"`, `"rgb(255, 0, 0)"`
	 *
	 * Mantle color references are resolved at paint time via
	 * `getComputedStyle` on the canvas element, so they automatically
	 * adapt to light/dark/high-contrast themes.
	 */
	color: string;

	/**
	 * Optional icon component shown in the legend.
	 */
	icon?: ComponentType<{ className?: string }>;
};

/**
 * Maps data key strings to their series configuration.
 *
 * @example
 * ```ts
 * const config = {
 *   requests: { label: "Requests", color: "accent-500" },
 *   errors: { label: "Errors", color: "danger-500" },
 * } satisfies ChartConfig;
 * ```
 */
type ChartConfig = Record<string, ChartSeriesConfig>;

/**
 * Margin around the plot area, in CSS pixels.
 * Determines space for axis labels and tick marks.
 */
type ChartMargin = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

/**
 * Computed plot area dimensions derived from container size and margins.
 * All values are in CSS pixels relative to the container origin.
 */
type PlotArea = {
	left: number;
	top: number;
	right: number;
	bottom: number;
	width: number;
	height: number;
};

/** Curve interpolation method for line and area series. */
type CurveType = "linear" | "monotone" | "step";

/**
 * Describes a registered chart series. Created by series child components
 * (`Chart.Line`, `Chart.Bar`, etc.) and collected by `Chart.Root` for rendering.
 */
type SeriesDescriptor = {
	/** Unique identifier for this series registration. */
	id: string;
	/** Key in the data objects to read values from. */
	dataKey: string;
	/** The type of chart series. */
	type: "line" | "bar" | "area" | "scatter";
	/** Resolved color string for this series. */
	color: string;
	/** Curve interpolation method (line and area only). */
	curve?: CurveType;
	/** Stack group identifier. Bars with the same stackId are stacked. */
	stackId?: string;
	/** Fill opacity for area and bar series. */
	fillOpacity?: number;
	/** Stroke width in CSS pixels. */
	strokeWidth?: number;
	/** Point radius for scatter series, in CSS pixels. */
	radius?: number;
};

/**
 * A single entry in the tooltip payload, representing one series value
 * at the hovered data index.
 */
type ChartTooltipEntry = {
	/** Data key this entry corresponds to. */
	dataKey: string;
	/** The numeric value at the hovered index. */
	value: number;
	/** Resolved CSS color string for this series. */
	color: string;
	/** Human-readable label from ChartConfig. */
	label: string;
};

/**
 * Payload passed to tooltip content renderers.
 * Contains all series values at the currently hovered data point.
 */
type ChartTooltipPayload = {
	/** Whether the tooltip is actively showing. */
	active: boolean;
	/** Formatted label for the hovered X-axis value. */
	label: string;
	/** Index into the data array for the hovered point. */
	dataIndex: number;
	/** Series entries at this data index. */
	entries: ReadonlyArray<ChartTooltipEntry>;
};

/**
 * Resolved CSS variable values for imperative canvas painting.
 * Canvas cannot read CSS variables directly, so these are resolved
 * once per theme change via `getComputedStyle`.
 */
type ResolvedCanvasStyles = {
	/** Cache key derived from the current theme, used to detect theme changes. */
	cacheKey: string;
	/** Resolved color for axis lines. */
	axisColor: string;
	/** Resolved color for grid lines. */
	gridColor: string;
	/** Resolved color for muted text (tick labels). */
	mutedTextColor: string;
	/** Resolved color for body text. */
	bodyTextColor: string;
	/** Resolved font family string. */
	fontFamily: string;
	/** Resolved background color. */
	backgroundColor: string;
	/** Maps each dataKey to its resolved CSS color string. */
	seriesColors: Record<string, string>;
};

/** Scale function: maps a data domain value to a pixel position. */
type ScaleFunction = (value: number) => number;

/** Inverse scale: maps a pixel position back to a data domain value. */
type InverseScaleFunction = (pixel: number) => number;

/**
 * Band scale function for categorical data (bar charts).
 * Maps a category string to the start pixel position of its band.
 */
type BandScaleFunction = {
	(value: string): number | undefined;
	/** The width of each band in pixels. */
	bandwidth: () => number;
	/** The domain (category strings) of this scale. */
	domain: () => string[];
};

export type {
	BandScaleFunction,
	ChartConfig,
	ChartMargin,
	ChartSeriesConfig,
	ChartTooltipEntry,
	ChartTooltipPayload,
	CurveType,
	InverseScaleFunction,
	PlotArea,
	ResolvedCanvasStyles,
	ScaleFunction,
	SeriesDescriptor,
};
