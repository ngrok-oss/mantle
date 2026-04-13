import { createContext, useContext } from "react";
import type { RefObject } from "react";
import type {
	ChartConfig,
	ChartMargin,
	PlotArea,
	ResolvedCanvasStyles,
	ScaleFunction,
	SeriesDescriptor,
} from "./types.js";

/** Internal context value shared between Chart.Root and all child components. */
type ChartContextValue = {
	/** The data array passed to Chart.Root. */
	data: ReadonlyArray<Record<string, unknown>>;
	/** The chart configuration with series labels and colors. */
	config: ChartConfig;
	/** Container dimensions in CSS pixels. */
	containerSize: { width: number; height: number };
	/** Computed plot area (the drawable region inside margins). */
	plotArea: PlotArea;
	/** Margin around the plot area. */
	margin: ChartMargin;
	/** Scale function for the X axis. */
	xScale: ScaleFunction;
	/** Scale function for the Y axis. */
	yScale: ScaleFunction;
	/** The data key used for the X axis. */
	xDataKey: string;
	/** Whether the X axis uses categorical (band) data. */
	xIsCategorical: boolean;
	/** Register a series descriptor. Returns a cleanup function to deregister. */
	registerSeries: (descriptor: SeriesDescriptor) => () => void;
	/** Schedule a redraw of the main canvas on the next animation frame. */
	scheduleDraw: () => void;
	/** Schedule a redraw of the hover/interaction canvas. */
	scheduleHoverDraw: () => void;
	/** Ref to the main data canvas element. */
	mainCanvasRef: RefObject<HTMLCanvasElement | null>;
	/** Ref to the hover/interaction canvas element. */
	hoverCanvasRef: RefObject<HTMLCanvasElement | null>;
	/** Resolved CSS styles for canvas painting. */
	resolvedStyles: ResolvedCanvasStyles;
	/** Whether the user prefers reduced motion. */
	prefersReducedMotion: boolean;
	/** Animation progress for entry animations (0 to 1). */
	animationProgress: number;
	/** Currently registered series descriptors. */
	series: ReadonlyArray<SeriesDescriptor>;
};

const ChartContext = createContext<ChartContextValue | null>(null);
ChartContext.displayName = "ChartContext";

/**
 * Reads the chart context from a child component.
 * Throws if called outside of a `Chart.Root`.
 */
function useChartContext(): ChartContextValue {
	const context = useContext(ChartContext);
	if (!context) {
		throw new Error("Chart child components must be rendered inside <Chart.Root>.");
	}
	return context;
}

export { ChartContext, useChartContext };
export type { ChartContextValue };
