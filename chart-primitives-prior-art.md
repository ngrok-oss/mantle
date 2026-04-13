# Chart Primitives for Mantle

Reference document for building reusable chart primitives in `@ngrok/mantle`, derived from the canvas and SVG chart implementations in `apps/blog/app/components/` (authored by Sam Rose). The goal is to replace ad-hoc one-off chart code (and the `recharts` dependency) with composable, theme-aware, accessible canvas primitives.

---

## Existing implementations

| Chart                 | File                                                    | Renderer                      | Data shape                                                               |
| --------------------- | ------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------ |
| Weight distribution   | `quantization/weight-distribution-graph.tsx`            | Recharts `LineChart` (SVG)    | Wide rows: `{ midpoint, bucketStart, bucketEnd, [seriesKey]: number }[]` |
| IEEE-754 distribution | `quantization/ieee-754-distribution.tsx`                | Recharts `BarChart` (SVG)     | `{ midpoint, bucketStart, bucketEnd, count, percent }[]`                 |
| Cached vs. uncached   | `prompt-caching/cached-uncached-comparison.tsx`         | Recharts `ScatterChart` (SVG) | Positional tuples `number[][]` (`[x, y]`)                                |
| Token probability     | `quantization/token-probability-distribution-graph.tsx` | Canvas 2D                     | Parallel `readonly number[]` arrays per series                           |
| Sine wave             | `quantization/sine-wave.tsx`                            | Canvas 2D                     | Computed per-pixel via `Math.sin` + `quantizeForFormat`                  |
| KL divergence         | `quantization/kl-divergence-graph.tsx`                  | Canvas 2D                     | Computed per-pixel via `normalPdf`                                       |

All data is flat numbers. No chart uses nested objects or complex structures.

---

## What the Recharts charts actually need

These three charts use Recharts today but could be replaced with canvas primitives. Here's what they rely on:

### Line chart (weight distribution)

- Multiple named series overlaid on a shared x-axis
- Monotone-x interpolation between points
- Dynamic x-domain clamping (range zoom)
- Y-axis scale toggle: linear / log
- Y-axis value mode toggle: absolute count / percentage
- Reference line at x=0 (dashed)
- Legend with custom sort order, semi-transparent background
- Custom tooltip: shows bucket range + all series values sorted by magnitude
- Line animation on mount (300ms ease-in)

### Bar chart (IEEE-754 distribution)

- Single series histogram with computed bins
- X-axis: numeric, symmetric domain
- Y-axis scale toggle: linear / log
- Y-axis value mode toggle: absolute / percentage (switches `dataKey` between `count` and `percent`)
- Cartesian grid (horizontal only, dashed)
- Custom tooltip: bucket range + count + percent
- Bar animation on mount (350ms)

### Scatter chart (cached vs. uncached)

- Two scatter series per chart (cached / uncached)
- Data is raw `[x, y]` tuples from JSON
- Fitting line through each scatter series (`lineType="fitting"`)
- Custom dot component (`<circle r={2}>`)
- Cartesian grid (dashed)
- Inline text labels for legend (not Recharts Legend)
- Axis tick formatters: tokens as `Xk`, time as `Xs`

---

## Patterns already proven in the canvas charts

The three canvas charts share infrastructure that's been battle-tested and should inform the primitives.

### Container and sizing

Every chart uses an identical `ResizeObserver` setup:

```ts
// ref a container div, track { width, height } in state
const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
// ResizeObserver updates on mount, guard rendering on width > 0 && height > 0
```

This should be a hook: `useContainerSize(ref)` or similar.

### DPR-aware canvas context

Every canvas chart has this identical `getPreparedContext` function:

```ts
const dpr = window.devicePixelRatio || 1;
canvas.width = Math.round(cssWidth * dpr);
canvas.height = Math.round(cssHeight * dpr);
context.setTransform(dpr, 0, 0, dpr, 0, 0);
context.clearRect(0, 0, cssWidth, cssHeight);
```

This should be a utility or hook that returns a ready-to-draw context.

### Plot area calculation

Fixed margins define the drawable region. Every chart computes this:

```ts
type PlotArea = {
	left: number;
	top: number;
	right: number;
	bottom: number;
	width: number;
	height: number;
};

// Typical margins
const CHART_MARGIN = { top: 8 - 12, right: 12 - 18, bottom: 28 - 30, left: 44 - 52 };
```

Left margin is wider to accommodate y-axis labels. Bottom margin accommodates x-axis labels.

### Theme-aware color resolution

Canvas can't use CSS variables directly. Every chart resolves them once per theme change:

```ts
type CanvasStyles = {
	themeKey: string; // cache key, e.g. `${theme}:dark`
	axisColor: string; // --border-color-card
	gridColor: string; // --color-zinc-200
	mutedTextColor: string; // --text-color-muted
	fontFamily: string; // inherited from computed style
	// + series-specific stroke/fill colors
};

// Resolution via getComputedStyle on the canvas element
function resolveCssVar(styles: CSSStyleDeclaration, variableName: string, fallback: string) {
	return styles.getPropertyValue(variableName).trim() || fallback;
}
```

Cached by theme key, invalidated when theme changes. This pattern is copy-pasted across all three canvas charts.

### Dual-canvas hover pattern

All interactive canvas charts use two stacked canvases:

1. **Main canvas** (`chartCanvasRef`) — draws axes, grid, data lines/areas. Redrawn on data/theme/size change.
2. **Hover canvas** (`hoverCanvasRef`) — draws crosshair + dots + positions tooltip. Redrawn on pointer move. Clears independently without redrawing the main chart.

Both canvases are absolutely positioned, same size. The hover canvas sits on top and handles pointer events.

### Draw scheduling

Every chart coalesces draw calls through `requestAnimationFrame`:

```ts
const frameRef = useRef<number | null>(null);

const scheduleDraw = useEffectEvent(() => {
	if (frameRef.current !== null) return; // already scheduled
	frameRef.current = requestAnimationFrame(() => {
		frameRef.current = null;
		draw();
	});
});
```

Separate scheduling for chart draws vs. hover draws.

### Tooltip

All canvas chart tooltips are a positioned `<div>` with:

- `position: absolute`, `pointer-events: none`, `z-index: 30`
- `display: none` when no hover, toggled to `block` on hover
- Inner HTML built as a string and set via `innerHTML` (avoids React re-renders on mouse move)
- Positioned relative to the hover pixel with clamping to stay in bounds
- Styled with CSS variables: `--background-color-card`, `--border-color-card`, `--text-color-body`, `--text-color-muted`
- Consistent visual style: `border-radius: 8`, `padding: 8px 10px`, `font-size: 11px`, `line-height: 14px`
- Grid layout for label/value pairs with `font-variant-numeric: tabular-nums`

### Axis drawing

Every canvas chart draws axes manually. Common patterns:

**X-axis ticks:**

```ts
for (const tick of xTicks) {
	const x = xToPixel(tick);
	ctx.moveTo(x, plot.bottom);
	ctx.lineTo(x, plot.bottom + 6); // 6px tick mark below axis
	ctx.stroke();
	ctx.fillText(label, x, plot.bottom + 8 - 15); // label below tick
}
```

**Y-axis ticks:**

```ts
for (const tick of yTicks) {
	const y = yToPixel(tick);
	ctx.moveTo(plot.left - 6, y); // 6px tick mark left of axis
	ctx.lineTo(plot.left, y);
	ctx.stroke();
	ctx.fillText(label, plot.left - 8, y); // label left of tick
}
```

**Grid lines:** horizontal lines at y-tick positions, `strokeStyle = gridColor`.

**Axis lines:** L-shape from top-left to bottom-left to bottom-right.

### Scale functions

Every chart builds linear scale functions inline:

```ts
const xToPixel = (value: number) => plot.left + ((value - xMin) / (xMax - xMin)) * plot.width;
const yToPixel = (value: number) => plot.top + ((yMax - value) / (yMax - yMin)) * plot.height;
// (y is inverted because canvas y increases downward)
```

### Curve interpolation

The token probability chart implements monotone cubic interpolation (Fritsch-Carlson):

```ts
function buildMonotoneTangents(points: Point[]): number[]; // tangent per point
function traceMonotonePath(ctx: CanvasRenderingContext2D, points: Point[]); // bezierCurveTo
```

This produces smooth curves that don't overshoot between data points. The weight distribution Recharts chart uses `type="monotoneX"` which is the same algorithm.

### Filled area under curve

Token probability and KL divergence both draw filled areas:

1. Trace the curve path
2. `lineTo` down to the baseline (plot.bottom)
3. `closePath()`
4. Fill with `globalAlpha = 0.14-0.18`
5. Then re-trace and stroke the line at full opacity

### Animation

Two animation patterns:

**Value interpolation** (token probability picker): lerp between start and target arrays over 320ms with `easeInOutCubic`:

```ts
targetValues.map((value, index) => {
	const start = startValues[index];
	return start + (value - start) * easedProgress;
});
```

**Domain interpolation** (sine wave zoom): lerp the entire x/y domain between view configs over 420ms:

```ts
function interpolateDomain(start: Domain, end: Domain, t: number): Domain;
// easeOutCubic for zoom-in, easeInCubic for zoom-out
```

**Line reveal** (sine wave): each line has a 0-1 progress value. Drawing samples `ceil(plotWidth * progress)` points, revealing left-to-right. 420ms `easeOutCubic`.

All animations respect `usePrefersReducedMotion` — when true, values snap immediately.

---

## Accessibility patterns

Every chart wraps in a `Card.Root` with:

```tsx
<Card.Root role="figure" aria-labelledby={titleId} aria-describedby={descriptionId}>
  <Card.Header><Card.Title id={titleId}>...</Card.Title></Card.Header>
  <Card.Body>
    <p id={descriptionId} className="sr-only">
      {/* Full text description of what the chart shows */}
    </p>
    <canvas aria-hidden="true" ... />
  </Card.Body>
</Card.Root>
```

- Canvas elements are `aria-hidden="true"` (not accessible to screen readers)
- Screen-reader descriptions are in `sr-only` paragraphs
- The token probability chart has an `aria-live="polite"` region that announces changes when the user switches quantization format
- The KL divergence chart sets `aria-valuetext` on slider thumbs with human-readable descriptions
- The Recharts charts require a `hideChartSurfaceFromAssistiveTech` hack that strips `role`, `tabindex`, and `focusable` from Recharts SVGs via MutationObserver (this goes away if we drop Recharts)

---

## Axis formatting

Reusable formatter patterns across charts:

| Pattern             | Usage                   | Implementation                                                                   |
| ------------------- | ----------------------- | -------------------------------------------------------------------------------- |
| Scientific notation | Large/small axis values | `Intl.NumberFormat` with `notation: "scientific"`, `maximumSignificantDigits: 2` |
| Compact count       | Y-axis counts           | `Intl.NumberFormat` with `notation: "compact"` (e.g. `1.5B`, `42k`)              |
| Percentage          | Y-axis probabilities    | `(value * 100).toFixed(1-3) + "%"` with edge cases for tiny values               |
| Pi multiples        | X-axis for trig         | Manual: `0`, `pi`, `2pi` based on ratio to `Math.PI`                             |
| Adaptive decimals   | Y-axis at high zoom     | `maximumFractionDigits` based on y-range: `<= 0.01` -> 4, `<= 0.1` -> 3, else 2  |
| Token/duration      | Scatter axes            | `${(tokens / 1000).toFixed(0)}k`, `${(ms / 1000).toFixed(0)}s`                   |

---

## Tick generation

Two approaches used:

**Uniform ticks:** evenly spaced between min and max:

```ts
function generateTicks(min: number, max: number, count: number): number[];
```

**Log ticks:** powers of 10 between min and max:

```ts
function buildLogTicks(maxValue: number, minValue = 1): number[];
```

**Smart percentage ticks:** adaptive step size based on range (10, 5, 2, 1, 0.5):

```ts
function buildLinearPercentTicks(maxPercent: number): number[];
```

---

## Suggested primitives

Based on what's duplicated and what would provide the most leverage:

### Hooks

- **`useContainerSize(ref)`** — ResizeObserver-based `{ width, height }` tracking with `> 0` guard
- **`useCanvasContext(canvasRef, size)`** — DPR-aware context setup, returns ready-to-draw `CanvasRenderingContext2D`
- **`useCanvasStyles(canvasRef, theme)`** — resolves CSS variables to concrete color strings, cached by theme key
- **`useScheduledDraw(drawFn)`** — rAF-coalesced draw scheduling, returns `scheduleDraw` function, handles cleanup

### Drawing utilities

- **`createPlotArea(width, height, margin)`** — returns `{ left, top, right, bottom, width, height }`
- **`createLinearScale(domain, range)`** — returns `(value: number) => number` mapping data to pixels
- **`drawAxes(ctx, plotArea, options)`** — draws L-shaped axis lines, tick marks, tick labels, optional grid lines
- **`drawMonotoneCurve(ctx, points)`** — Fritsch-Carlson monotone cubic interpolation via bezier curves
- **`drawFilledArea(ctx, points, baseline, options)`** — curve + fill to baseline with configurable alpha
- **`generateTicks(min, max, count, scale?)`** — uniform or log tick generation

### Components

- **`<ChartContainer>`** — handles ResizeObserver, dual-canvas setup, DPR scaling, hover canvas layering, pointer event wiring
- **`<ChartTooltip>`** — positioned div with CSS var styling, innerHTML-based updates, viewport clamping
- **`<ChartCard>`** — `Card.Root` wrapper with `role="figure"`, `aria-labelledby/describedby`, sr-only description slot, control footer slot

### Formatters

- **`formatCompact(value)`** — `1.5B`, `42k`
- **`formatScientific(value)`** — `1.2E4`
- **`formatPercent(value, options?)`** — adaptive precision
- **`formatAdaptiveDecimal(value, range)`** — adjusts decimal places to zoom level

---

## Data flow summary

For a generic canvas chart, the data contract is:

```
props (data + config)
  -> scale functions (data domain -> pixel range)
  -> draw function (imperative canvas calls using scales)
  -> hover function (pixel position -> nearest data point -> tooltip)
```

Data is always flat numbers. Series are either:

1. **Parallel arrays** — `series: { key: string; values: number[] }[]` with shared x-positions
2. **Computed functions** — `(x: number) => number` evaluated per-pixel
3. **XY tuples** — `[number, number][]` for scatter-style data

The chart component shouldn't care which shape it gets. A scale function + a way to sample y-values at any x is the universal interface.
