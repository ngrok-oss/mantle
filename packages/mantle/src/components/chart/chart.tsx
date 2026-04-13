import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ComponentRef, PropsWithChildren } from "react";
import { extent } from "d3-array";
import { cx } from "../../utils/cx/cx.js";
import { composeRefs } from "../../utils/compose-refs/compose-refs.js";
import { usePrefersReducedMotion } from "../../hooks/use-prefers-reduced-motion.js";
import { ChartContext } from "./chart-context.js";
import type { ChartContextValue } from "./chart-context.js";
import type { ChartConfig, ChartMargin, PlotArea, SeriesDescriptor } from "./types.js";
import { createPlotArea, defaultMargin } from "./plot-area.js";
import { createLinearScale } from "./scales.js";
import { useContainerSize } from "./use-container-size.js";
import { useCanvasStyles } from "./use-canvas-styles.js";
import { useScheduledDraw } from "./use-scheduled-draw.js";
import { drawLine } from "./draw-line.js";
import { drawArea } from "./draw-area.js";
import { drawScatter } from "./draw-scatter.js";
import { computeGroupedBarLayouts, computeStackedBarLayouts, drawBars } from "./draw-bar.js";
import { clearCanvas, prepareCanvasContext } from "./draw-utils.js";
import { easeOutCubic, startAnimation } from "./animation.js";
import type { AnimationHandle } from "./animation.js";
import { Line } from "./series-line.js";
import { Bar } from "./series-bar.js";
import { Area } from "./series-area.js";
import { Scatter } from "./series-scatter.js";
import { XAxis, YAxis } from "./axis.js";
import { Grid } from "./grid.js";
import { ChartTooltip, ChartTooltipContent } from "./tooltip.js";
import { ChartLegend } from "./legend.js";

/** Props for `Chart.Root`. */
type ChartRootProps = PropsWithChildren<{
	/** The data array. Each element is an object with keys matching the series `dataKey` values. */
	data: ReadonlyArray<Record<string, unknown>>;
	/** Configuration mapping data keys to labels, colors, and icons. */
	config: ChartConfig;
	/** Margin around the plot area. */
	margin?: ChartMargin;
	/** Additional CSS class names for the container. */
	className?: string;
	/** Whether to animate chart entry. Defaults to `true`. */
	animated?: boolean;
	/** Duration of the entry animation in milliseconds. Defaults to 400. */
	animationDuration?: number;
	/** Accessible title for screen readers. Adds `role="figure"` and `aria-labelledby`. */
	accessibleTitle?: string;
	/** Accessible description for screen readers. */
	accessibleDescription?: string;
}>;

/**
 * The root container for a chart. Manages canvas rendering, scaling,
 * series registration, and provides context to all child components.
 *
 * Size is controlled via CSS on this element (e.g., `className="h-64"`).
 * The chart automatically resizes when the container dimensions change.
 *
 * @example
 * ```tsx
 * <Chart.Root data={data} config={config} className="h-64">
 *   <Chart.XAxis dataKey="timestamp" />
 *   <Chart.YAxis />
 *   <Chart.Line dataKey="requests" />
 * </Chart.Root>
 * ```
 */
const Root = forwardRef<ComponentRef<"div">, ChartRootProps>(
	(
		{
			data,
			config,
			margin = defaultMargin,
			className,
			animated = true,
			animationDuration = 400,
			accessibleTitle,
			accessibleDescription,
			children,
		},
		ref,
	) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const mainCanvasRef = useRef<HTMLCanvasElement>(null);
		const hoverCanvasRef = useRef<HTMLCanvasElement>(null);
		const seriesRef = useRef<Map<string, SeriesDescriptor>>(new Map());
		const [seriesState, setSeriesState] = useState<ReadonlyArray<SeriesDescriptor>>([]);
		const prefersReducedMotion = usePrefersReducedMotion();
		const [animationProgress, setAnimationProgress] = useState(1);
		const animationHandleRef = useRef<AnimationHandle | null>(null);

		const containerSize = useContainerSize(containerRef);
		const isReady = containerSize.width > 0 && containerSize.height > 0;

		// Use the container div (always mounted) for style resolution, not the canvas
		const resolvedStyles = useCanvasStyles(containerRef, config, isReady);

		const plotArea: PlotArea = useMemo(
			() => createPlotArea(containerSize.width, containerSize.height, margin),
			[containerSize.width, containerSize.height, margin],
		);

		// xDataKey is state so that when XAxis sets it, scales recompute
		const [xDataKey, setXDataKeyState] = useState("x");

		// Compute scales based on data and registered series
		const scales = useMemo(() => {
			if (!isReady || data.length === 0 || seriesState.length === 0) {
				const identityScale = (value: number) => value;
				return { xScale: identityScale, yScale: identityScale };
			}

			const dataKeys = seriesState.map((descriptor) => descriptor.dataKey);
			const hasBars = seriesState.some((descriptor) => descriptor.type === "bar");

			// Compute X domain
			const xValues = data.map((datum) => Number(datum[xDataKey]));
			const [xMin, xMax] = extent(xValues);

			// Compute Y domain across all series
			let yMin = Infinity;
			let yMax = -Infinity;

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

			// Handle stacked bars: sum stacked values for Y domain
			const stackGroups = new Map<string, string[]>();
			for (const descriptor of seriesState) {
				if (descriptor.type === "bar" && descriptor.stackId) {
					const group = stackGroups.get(descriptor.stackId) ?? [];
					group.push(descriptor.dataKey);
					stackGroups.set(descriptor.stackId, group);
				}
			}

			for (const [, groupKeys] of stackGroups) {
				for (const datum of data) {
					let stackSum = 0;
					for (const key of groupKeys) {
						stackSum += Number(datum[key]) || 0;
					}
					if (stackSum > yMax) {
						yMax = stackSum;
					}
				}
			}

			// Ensure Y domain includes 0 for bar charts
			if (hasBars) {
				yMin = Math.min(0, yMin);
			}

			// Fallbacks for empty/degenerate domains
			if (!Number.isFinite(yMin) || !Number.isFinite(yMax)) {
				yMin = 0;
				yMax = 1;
			}
			if (yMin === yMax) {
				yMin = yMin - 1;
				yMax = yMax + 1;
			}

			const safeXMin = xMin ?? 0;
			const safeXMax = xMax ?? 1;

			const { scale: xScale } = createLinearScale(
				[safeXMin, safeXMax === safeXMin ? safeXMin + 1 : safeXMax],
				[plotArea.left, plotArea.right],
			);
			const { scale: yScale } = createLinearScale([yMin, yMax], [plotArea.bottom, plotArea.top]);

			return { xScale, yScale };
		}, [isReady, data, plotArea, seriesState, xDataKey]);

		// Series registration
		const registerSeries = useCallback((descriptor: SeriesDescriptor) => {
			seriesRef.current.set(descriptor.id, descriptor);
			setSeriesState(Array.from(seriesRef.current.values()));

			return () => {
				seriesRef.current.delete(descriptor.id);
				setSeriesState(Array.from(seriesRef.current.values()));
			};
		}, []);

		// Allow XAxis to set the xDataKey
		const setXDataKey = useCallback((key: string) => {
			setXDataKeyState((previous) => (previous === key ? previous : key));
		}, []);

		// Main canvas draw function
		const drawMainCanvas = useCallback(() => {
			const canvas = mainCanvasRef.current;
			if (!canvas || !isReady) {
				return;
			}

			const context = prepareCanvasContext(canvas, containerSize.width, containerSize.height);
			if (!context) {
				return;
			}

			const seriesList = Array.from(seriesRef.current.values());
			if (seriesList.length === 0) {
				return;
			}

			const progress = animationProgress;

			for (const descriptor of seriesList) {
				const color = resolvedStyles.seriesColors[descriptor.dataKey] ?? "#888";

				switch (descriptor.type) {
					case "line": {
						const points = data.map((datum) => ({
							x: Number(datum[xDataKey]),
							y: Number(datum[descriptor.dataKey]),
						}));
						drawLine(
							context,
							points,
							scales.xScale,
							scales.yScale,
							plotArea,
							color,
							descriptor.strokeWidth ?? 2,
							descriptor.curve ?? "linear",
							progress,
						);
						break;
					}
					case "area": {
						const points = data.map((datum) => ({
							x: Number(datum[xDataKey]),
							y: Number(datum[descriptor.dataKey]),
						}));
						drawArea(
							context,
							points,
							scales.xScale,
							scales.yScale,
							plotArea,
							color,
							descriptor.fillOpacity ?? 0.15,
							descriptor.strokeWidth ?? 2,
							descriptor.curve ?? "linear",
							progress,
						);
						break;
					}
					case "scatter": {
						const points = data.map((datum) => ({
							x: Number(datum[xDataKey]),
							y: Number(datum[descriptor.dataKey]),
						}));
						drawScatter(
							context,
							points,
							scales.xScale,
							scales.yScale,
							plotArea,
							color,
							descriptor.radius ?? 3,
							0.7,
							progress,
						);
						break;
					}
					case "bar": {
						// Bar drawing handled in batch below
						break;
					}
				}
			}

			// Batch draw bars (handle stacking/grouping)
			const barSeries = seriesList.filter((descriptor) => descriptor.type === "bar");
			if (barSeries.length > 0) {
				drawBarSeries(
					context,
					barSeries,
					data,
					xDataKey,
					scales,
					plotArea,
					resolvedStyles,
					progress,
				);
			}
		}, [
			isReady,
			containerSize,
			data,
			scales,
			plotArea,
			resolvedStyles,
			animationProgress,
			xDataKey,
		]);

		const scheduleDraw = useScheduledDraw(drawMainCanvas);

		// Hover canvas draw
		const drawHoverCanvas = useCallback(() => {
			const canvas = hoverCanvasRef.current;
			if (!canvas || !isReady) {
				return;
			}
			const context = canvas.getContext("2d");
			if (!context) {
				return;
			}
			clearCanvas(context);
		}, [isReady]);

		const scheduleHoverDraw = useScheduledDraw(drawHoverCanvas);

		// Trigger redraw whenever any relevant state changes
		useEffect(() => {
			scheduleDraw();
		}, [
			scheduleDraw,
			data,
			containerSize,
			resolvedStyles,
			seriesState,
			animationProgress,
			scales,
			xDataKey,
		]);

		// Entry animation — starts after first draw with series
		const hasStartedAnimation = useRef(false);
		useEffect(() => {
			if (!animated || prefersReducedMotion || !isReady || seriesState.length === 0) {
				setAnimationProgress(1);
				return;
			}

			// Only animate once on initial mount
			if (hasStartedAnimation.current) {
				return;
			}
			hasStartedAnimation.current = true;

			setAnimationProgress(0);

			const handle = startAnimation({
				duration: animationDuration,
				easing: easeOutCubic,
				onFrame(progress) {
					setAnimationProgress(progress);
				},
				onComplete() {
					setAnimationProgress(1);
				},
			});

			animationHandleRef.current = handle;

			return () => {
				handle.cancel();
			};
		}, [animated, animationDuration, prefersReducedMotion, isReady, seriesState.length]);

		const titleId = accessibleTitle ? "chart-title" : undefined;
		const descriptionId = accessibleDescription ? "chart-description" : undefined;

		const contextValue: ChartContextValue = useMemo(
			() => ({
				data,
				config,
				containerSize,
				plotArea,
				margin,
				xScale: scales.xScale,
				yScale: scales.yScale,
				xDataKey,
				xIsCategorical: false,
				registerSeries,
				scheduleDraw,
				scheduleHoverDraw,
				mainCanvasRef,
				hoverCanvasRef,
				resolvedStyles,
				prefersReducedMotion,
				animationProgress,
				series: seriesState,
			}),
			[
				data,
				config,
				containerSize,
				plotArea,
				margin,
				scales,
				xDataKey,
				registerSeries,
				scheduleDraw,
				scheduleHoverDraw,
				resolvedStyles,
				prefersReducedMotion,
				animationProgress,
				seriesState,
			],
		);

		const extendedContext = useMemo(
			() => ({ ...contextValue, setXDataKey }),
			[contextValue, setXDataKey],
		);

		return (
			<ChartContext.Provider value={extendedContext}>
				<div
					ref={composeRefs(containerRef, ref)}
					className={cx("relative", className)}
					role={accessibleTitle ? "figure" : undefined}
					aria-labelledby={titleId}
					aria-describedby={descriptionId}
					data-slot="chart"
				>
					{accessibleTitle && (
						<span id={titleId} className="sr-only">
							{accessibleTitle}
						</span>
					)}
					{accessibleDescription && (
						<span id={descriptionId} className="sr-only">
							{accessibleDescription}
						</span>
					)}

					{/* Canvas layers — absolutely positioned, behind everything */}
					{isReady && (
						<>
							<canvas
								ref={mainCanvasRef}
								aria-hidden="true"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: containerSize.width,
									height: containerSize.height,
								}}
							/>
							<canvas
								ref={hoverCanvasRef}
								aria-hidden="true"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: containerSize.width,
									height: containerSize.height,
								}}
							/>
						</>
					)}

					{/* SVG overlay for axes and grid — pointer-events none so hover canvas gets events */}
					{isReady && (
						<svg
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								pointerEvents: "none",
							}}
							width={containerSize.width}
							height={containerSize.height}
							aria-hidden="true"
						>
							{children}
						</svg>
					)}
				</div>
			</ChartContext.Provider>
		);
	},
);
Root.displayName = "Chart";

/**
 * Draws all bar series, handling stacked and grouped layouts.
 */
function drawBarSeries(
	context: CanvasRenderingContext2D,
	barSeries: ReadonlyArray<SeriesDescriptor>,
	data: ReadonlyArray<Record<string, unknown>>,
	xDataKey: string,
	scales: { xScale: (value: number) => number; yScale: (value: number) => number },
	plotArea: PlotArea,
	resolvedStyles: { seriesColors: Record<string, string> },
	animationProgress: number,
): void {
	const stacked = new Map<string, SeriesDescriptor[]>();
	const ungrouped: SeriesDescriptor[] = [];

	for (const descriptor of barSeries) {
		if (descriptor.stackId) {
			const group = stacked.get(descriptor.stackId) ?? [];
			group.push(descriptor);
			stacked.set(descriptor.stackId, group);
		} else {
			ungrouped.push(descriptor);
		}
	}

	const totalGroups = stacked.size + ungrouped.length;
	if (totalGroups === 0 || data.length === 0) {
		return;
	}

	const firstDatum = data[0];
	const secondDatum = data[1];
	const bandwidth =
		secondDatum && firstDatum
			? Math.abs(
					scales.xScale(Number(secondDatum[xDataKey])) -
						scales.xScale(Number(firstDatum[xDataKey])),
				) * 0.7
			: plotArea.width * 0.3;

	const groupWidth = bandwidth / totalGroups;
	const baseline = scales.yScale(0);

	for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
		const datum = data[dataIndex];
		if (!datum) {
			continue;
		}
		const centerX = scales.xScale(Number(datum[xDataKey]));
		const bandStart = centerX - bandwidth / 2;

		let groupOffset = 0;

		for (const [, group] of stacked) {
			const values = group.map((descriptor) => ({
				value: Number(datum[descriptor.dataKey]) || 0,
				color: resolvedStyles.seriesColors[descriptor.dataKey] ?? "#888",
				fillOpacity: descriptor.fillOpacity ?? 0.85,
			}));

			const bars = computeStackedBarLayouts(
				bandStart + groupOffset,
				groupWidth,
				values,
				scales.yScale,
				animationProgress,
			);
			drawBars(context, bars, plotArea);
			groupOffset += groupWidth;
		}

		for (const descriptor of ungrouped) {
			const values = [
				{
					value: Number(datum[descriptor.dataKey]) || 0,
					color: resolvedStyles.seriesColors[descriptor.dataKey] ?? "#888",
					fillOpacity: descriptor.fillOpacity ?? 0.85,
				},
			];

			const bars = computeGroupedBarLayouts(
				bandStart + groupOffset,
				groupWidth,
				values,
				scales.yScale,
				baseline,
				animationProgress,
			);
			drawBars(context, bars, plotArea);
			groupOffset += groupWidth;
		}
	}
}

/**
 * Compound component namespace for building charts.
 *
 * @example
 * ```tsx
 * import { Chart } from "@ngrok/mantle/chart";
 *
 * <Chart.Root data={data} config={config} className="h-64">
 *   <Chart.XAxis dataKey="timestamp" />
 *   <Chart.YAxis />
 *   <Chart.Grid horizontal />
 *   <Chart.Line dataKey="requests" curve="monotone" />
 *   <Chart.Tooltip content={<Chart.TooltipContent />} />
 *   <Chart.Legend />
 * </Chart.Root>
 * ```
 */
const Chart = {
	/** The root container that manages canvas rendering and provides context. */
	Root,
	/** A line series rendered on the canvas. */
	Line,
	/** A bar series rendered on the canvas. Supports stacking via `stackId`. */
	Bar,
	/** A filled area series rendered on the canvas. */
	Area,
	/** A scatter series rendered on the canvas. */
	Scatter,
	/** The horizontal (X) axis rendered in SVG. */
	XAxis,
	/** The vertical (Y) axis rendered in SVG. */
	YAxis,
	/** Grid lines rendered in SVG. */
	Grid,
	/** Tooltip that appears on hover. */
	Tooltip: ChartTooltip,
	/** Default tooltip content renderer. */
	TooltipContent: ChartTooltipContent,
	/** Legend showing series labels and colors. */
	Legend: ChartLegend,
} as const;

export { Chart };
export type { ChartRootProps };
