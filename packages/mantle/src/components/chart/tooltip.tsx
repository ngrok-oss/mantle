import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx/cx.js";
import { useChartContext } from "./chart-context.js";
import type { ChartTooltipPayload } from "./types.js";
import { clearCanvas } from "./draw-utils.js";

/** Props for `Chart.Tooltip`. */
type ChartTooltipProps = {
	/** Custom tooltip content renderer. Falls back to `Chart.TooltipContent` if not provided. */
	content?: ReactNode;
};

/**
 * A tooltip overlay that shows data values when hovering over the chart.
 *
 * By default, snaps to the nearest data point on the X axis and shows
 * all series values at that index. The crosshair and hover dots are
 * drawn on the hover canvas for smooth performance.
 *
 * @example
 * ```tsx
 * <Chart.Tooltip />
 * <Chart.Tooltip content={<MyCustomTooltip />} />
 * ```
 */
function ChartTooltip({ content }: ChartTooltipProps) {
	const {
		data,
		config,
		plotArea,
		xScale,
		yScale,
		resolvedStyles,
		hoverCanvasRef,
		containerSize,
		series,
		xDataKey,
	} = useChartContext();

	const tooltipRef = useRef<HTMLDivElement>(null);
	const [payload, setPayload] = useState<ChartTooltipPayload>({
		active: false,
		label: "",
		dataIndex: -1,
		entries: [],
	});

	const xDataKeyResolved = xDataKey ?? "x";

	// Linear search for nearest data point by X pixel
	const findNearestIndex = useCallback(
		(mouseX: number) => {
			if (data.length === 0) {
				return -1;
			}

			let nearestIndex = 0;
			let nearestDistance = Infinity;

			for (let index = 0; index < data.length; index++) {
				const datum = data[index];
				if (!datum) {
					continue;
				}
				const pixelX = xScale(Number(datum[xDataKeyResolved]));
				const distance = Math.abs(pixelX - mouseX);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					nearestIndex = index;
				}
			}

			return nearestIndex;
		},
		[data, xScale, xDataKeyResolved],
	);

	// Pointer event handlers — attached to the hover canvas
	useEffect(() => {
		const hoverCanvas = hoverCanvasRef.current;
		if (!hoverCanvas || containerSize.width === 0) {
			return;
		}

		let frameId: number | null = null;

		function handlePointerMove(event: PointerEvent) {
			if (frameId !== null) {
				return;
			}

			frameId = requestAnimationFrame(() => {
				frameId = null;
				if (!hoverCanvas) {
					return;
				}

				const rect = hoverCanvas.getBoundingClientRect();
				const mouseX = event.clientX - rect.left;
				const mouseY = event.clientY - rect.top;

				// Only show tooltip when mouse is within the plot area
				if (
					mouseX < plotArea.left ||
					mouseX > plotArea.right ||
					mouseY < plotArea.top ||
					mouseY > plotArea.bottom
				) {
					hideTooltip();
					return;
				}

				const dataIndex = findNearestIndex(mouseX);
				if (dataIndex < 0) {
					hideTooltip();
					return;
				}

				const datum = data[dataIndex];
				if (!datum) {
					hideTooltip();
					return;
				}

				const xValue = Number(datum[xDataKeyResolved]);
				const snapX = xScale(xValue);

				// Draw crosshair and dots on hover canvas
				const context = hoverCanvas.getContext("2d");
				if (context) {
					clearCanvas(context);

					// Vertical crosshair
					context.beginPath();
					context.strokeStyle = resolvedStyles.axisColor;
					context.lineWidth = 1;
					context.setLineDash([4, 4]);
					context.moveTo(snapX, plotArea.top);
					context.lineTo(snapX, plotArea.bottom);
					context.stroke();
					context.setLineDash([]);

					// Dots at each series
					for (const descriptor of series) {
						if (descriptor.type === "bar") {
							continue;
						}
						const value = Number(datum[descriptor.dataKey]);
						if (!Number.isFinite(value)) {
							continue;
						}
						const pixelY = yScale(value);
						const color = resolvedStyles.seriesColors[descriptor.dataKey] ?? "#888";

						context.beginPath();
						context.arc(snapX, pixelY, 4, 0, Math.PI * 2);
						context.fillStyle = resolvedStyles.backgroundColor;
						context.fill();
						context.beginPath();
						context.arc(snapX, pixelY, 3, 0, Math.PI * 2);
						context.fillStyle = color;
						context.fill();
					}
				}

				// Build tooltip payload
				const entries = series.map((descriptor) => ({
					dataKey: descriptor.dataKey,
					value: Number(datum[descriptor.dataKey]) || 0,
					color: resolvedStyles.seriesColors[descriptor.dataKey] ?? "#888",
					label: config[descriptor.dataKey]?.label ?? descriptor.dataKey,
				}));

				setPayload({
					active: true,
					label: String(xValue),
					dataIndex,
					entries,
				});

				// Position the tooltip
				const tooltip = tooltipRef.current;
				if (tooltip) {
					tooltip.style.display = "block";

					const tooltipWidth = tooltip.offsetWidth;
					const tooltipHeight = tooltip.offsetHeight;
					let tooltipX = snapX + 12;
					let tooltipY = mouseY - tooltipHeight / 2;

					if (tooltipX + tooltipWidth > containerSize.width - 8) {
						tooltipX = snapX - tooltipWidth - 12;
					}
					tooltipY = Math.max(4, Math.min(tooltipY, containerSize.height - tooltipHeight - 4));

					tooltip.style.transform = `translate(${tooltipX}px, ${tooltipY}px)`;
				}
			});
		}

		function handlePointerLeave() {
			hideTooltip();
		}

		function hideTooltip() {
			if (frameId !== null) {
				cancelAnimationFrame(frameId);
				frameId = null;
			}

			const tooltip = tooltipRef.current;
			if (tooltip) {
				tooltip.style.display = "none";
			}

			if (hoverCanvas) {
				const context = hoverCanvas.getContext("2d");
				if (context) {
					clearCanvas(context);
				}
			}

			setPayload((previous) => (previous.active ? { ...previous, active: false } : previous));
		}

		hoverCanvas.style.pointerEvents = "auto";
		hoverCanvas.addEventListener("pointermove", handlePointerMove);
		hoverCanvas.addEventListener("pointerleave", handlePointerLeave);

		return () => {
			hoverCanvas.removeEventListener("pointermove", handlePointerMove);
			hoverCanvas.removeEventListener("pointerleave", handlePointerLeave);
			hoverCanvas.style.pointerEvents = "";
			if (frameId !== null) {
				cancelAnimationFrame(frameId);
			}
		};
	}, [
		hoverCanvasRef,
		containerSize,
		plotArea,
		xScale,
		yScale,
		data,
		series,
		config,
		resolvedStyles,
		findNearestIndex,
		xDataKeyResolved,
	]);

	return (
		<>
			{/* Tooltip container — rendered as a foreignObject to escape the SVG context */}
			<foreignObject
				x={0}
				y={0}
				width={containerSize.width}
				height={containerSize.height}
				className="pointer-events-none overflow-visible"
			>
				<div
					ref={tooltipRef}
					style={{ display: "none", position: "absolute", top: 0, left: 0 }}
					className="pointer-events-none z-30"
				>
					{content ?? <ChartTooltipContent payload={payload} />}
				</div>
			</foreignObject>
		</>
	);
}
ChartTooltip.displayName = "Chart.Tooltip";

/** Props for `Chart.TooltipContent`. */
type ChartTooltipContentProps = {
	/** Tooltip payload. If not provided, uses the internal state from `Chart.Tooltip`. */
	payload?: ChartTooltipPayload;
	/** Custom label formatter. */
	labelFormatter?: (label: string) => string;
};

/**
 * Default tooltip content renderer showing all series values
 * at the hovered data point.
 *
 * @example
 * ```tsx
 * <Chart.Tooltip content={<Chart.TooltipContent labelFormatter={(v) => new Date(+v).toLocaleString()} />} />
 * ```
 */
function ChartTooltipContent({ payload, labelFormatter }: ChartTooltipContentProps) {
	if (!payload?.active || payload.entries.length === 0) {
		return null;
	}

	const label = labelFormatter ? labelFormatter(payload.label) : payload.label;

	return (
		<div
			className={cx("rounded-lg border bg-popover px-2.5 py-1.5 shadow-md", "text-xs text-body")}
			style={{ fontVariantNumeric: "tabular-nums" }}
		>
			{label && <div className="mb-1 font-medium text-strong">{label}</div>}
			<div className="grid gap-0.5" style={{ gridTemplateColumns: "auto auto auto" }}>
				{payload.entries.map((entry) => (
					<div key={entry.dataKey} className="contents">
						<div className="my-auto size-2 rounded-full" style={{ backgroundColor: entry.color }} />
						<span className="text-muted">{entry.label}</span>
						<span className="text-right font-medium text-strong">
							{entry.value.toLocaleString()}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
ChartTooltipContent.displayName = "Chart.TooltipContent";

export { ChartTooltip, ChartTooltipContent };
export type { ChartTooltipContentProps, ChartTooltipProps };
