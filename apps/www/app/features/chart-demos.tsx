import { Chart } from "@ngrok/mantle/chart";
import type { ChartConfig } from "@ngrok/mantle/chart";

// --- Data ---

function generateTimeSeriesData(pointCount: number) {
	const data: Array<Record<string, number>> = [];
	let requests = 200;
	let errors = 10;

	const now = Date.now();
	const interval = 60_000; // 1 minute intervals

	for (let index = 0; index < pointCount; index++) {
		requests += Math.round((Math.random() - 0.45) * 20);
		errors += Math.round((Math.random() - 0.5) * 5);
		requests = Math.max(50, requests);
		errors = Math.max(0, Math.min(errors, requests * 0.15));

		data.push({
			timestamp: now - (pointCount - index) * interval,
			requests: Math.round(requests),
			errors: Math.round(errors),
		});
	}

	return data;
}

const lineData = generateTimeSeriesData(30);

const barData = [
	{ month: 1, desktop: 186, mobile: 80 },
	{ month: 2, desktop: 305, mobile: 200 },
	{ month: 3, desktop: 237, mobile: 120 },
	{ month: 4, desktop: 73, mobile: 190 },
	{ month: 5, desktop: 209, mobile: 130 },
	{ month: 6, desktop: 214, mobile: 140 },
];

const areaData = generateTimeSeriesData(50);

const scatterData = Array.from({ length: 100 }, () => ({
	x: Math.random() * 100,
	latency: Math.random() * 500 + Math.random() * Math.random() * 1000,
	throughput: Math.random() * 1000 + 200,
}));

const largeData = generateTimeSeriesData(10_000);

// --- Configs ---

const lineConfig: ChartConfig = {
	requests: { label: "Requests", color: "accent-500" },
	errors: { label: "Errors", color: "danger-500" },
};

const barConfig: ChartConfig = {
	desktop: { label: "Desktop", color: "accent-500" },
	mobile: { label: "Mobile", color: "important-500" },
};

const areaConfig: ChartConfig = {
	requests: { label: "Requests", color: "accent-500" },
};

const scatterConfig: ChartConfig = {
	latency: { label: "Latency (ms)", color: "warning-500" },
	throughput: { label: "Throughput (req/s)", color: "success-500" },
};

const largeConfig: ChartConfig = {
	requests: { label: "Requests", color: "accent-500" },
};

// --- Demos ---

/** Line chart demo with multiple series. */
function LineChartDemo() {
	return (
		<Chart.Root
			data={lineData}
			config={lineConfig}
			className="h-64"
			accessibleTitle="Request Traffic Over Time"
		>
			<Chart.XAxis
				dataKey="timestamp"
				tickFormatter={(value) =>
					new Date(value).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
				}
			/>
			<Chart.YAxis />
			<Chart.Grid horizontal />
			<Chart.Line dataKey="requests" curve="monotone" />
			<Chart.Line dataKey="errors" curve="monotone" />
			<Chart.Tooltip
				content={
					<Chart.TooltipContent
						labelFormatter={(label) => new Date(Number(label)).toLocaleTimeString()}
					/>
				}
			/>
			<Chart.Legend />
		</Chart.Root>
	);
}

/** Stacked bar chart demo. */
function StackedBarChartDemo() {
	return (
		<Chart.Root
			data={barData}
			config={barConfig}
			className="h-64"
			accessibleTitle="Desktop vs Mobile Traffic"
		>
			<Chart.XAxis dataKey="month" tickFormatter={(value) => `Month ${value}`} />
			<Chart.YAxis />
			<Chart.Grid horizontal strokeDasharray="4 4" />
			<Chart.Bar dataKey="desktop" stackId="a" />
			<Chart.Bar dataKey="mobile" stackId="a" />
			<Chart.Tooltip />
			<Chart.Legend />
		</Chart.Root>
	);
}

/** Area chart demo. */
function AreaChartDemo() {
	return (
		<Chart.Root
			data={areaData}
			config={areaConfig}
			className="h-64"
			accessibleTitle="Request Volume"
		>
			<Chart.XAxis
				dataKey="timestamp"
				tickFormatter={(value) =>
					new Date(value).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
				}
			/>
			<Chart.YAxis />
			<Chart.Grid horizontal strokeDasharray="4 4" />
			<Chart.Area dataKey="requests" curve="monotone" fillOpacity={0.2} />
			<Chart.Tooltip />
		</Chart.Root>
	);
}

/** Scatter chart demo. */
function ScatterChartDemo() {
	return (
		<Chart.Root
			data={scatterData}
			config={scatterConfig}
			className="h-64"
			accessibleTitle="Latency vs Throughput"
		>
			<Chart.XAxis dataKey="x" tickFormatter={(value) => `${Math.round(value)}%`} />
			<Chart.YAxis />
			<Chart.Grid horizontal vertical strokeDasharray="4 4" />
			<Chart.Scatter dataKey="latency" />
			<Chart.Tooltip />
			<Chart.Legend />
		</Chart.Root>
	);
}

/** Large dataset demo with 10k points. */
function LargeDatasetDemo() {
	return (
		<Chart.Root
			data={largeData}
			config={largeConfig}
			className="h-64"
			accessibleTitle="10,000 Data Points"
		>
			<Chart.XAxis
				dataKey="timestamp"
				tickFormatter={(value) => new Date(value).toLocaleDateString()}
			/>
			<Chart.YAxis />
			<Chart.Grid horizontal />
			<Chart.Line dataKey="requests" curve="linear" strokeWidth={1} />
			<Chart.Tooltip />
		</Chart.Root>
	);
}

export { AreaChartDemo, LargeDatasetDemo, LineChartDemo, ScatterChartDemo, StackedBarChartDemo };
