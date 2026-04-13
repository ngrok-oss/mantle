import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Chart } from "./chart.js";
import type { ChartConfig } from "./types.js";

// Mock ResizeObserver since jsdom doesn't support it
class MockResizeObserver {
	callback: ResizeObserverCallback;
	constructor(callback: ResizeObserverCallback) {
		this.callback = callback;
	}
	observe() {}
	unobserve() {}
	disconnect() {}
}

vi.stubGlobal("ResizeObserver", MockResizeObserver);

// Mock canvas getContext since jsdom doesn't support it
HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue(null);

const sampleData = [
	{ timestamp: 1000, requests: 100, errors: 5 },
	{ timestamp: 2000, requests: 150, errors: 8 },
	{ timestamp: 3000, requests: 120, errors: 3 },
];

const sampleConfig: ChartConfig = {
	requests: { label: "Requests", color: "accent-500" },
	errors: { label: "Errors", color: "danger-500" },
};

describe("Chart", () => {
	test("renders a container div with data-slot", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig} className="h-64">
				<Chart.Line dataKey="requests" />
			</Chart.Root>,
		);

		const chartElement = container.querySelector("[data-slot='chart']");
		expect(chartElement).toBeTruthy();
	});

	test("renders with accessible title and description", () => {
		render(
			<Chart.Root
				data={sampleData}
				config={sampleConfig}
				accessibleTitle="Request Traffic"
				accessibleDescription="Shows request and error counts over time"
			>
				<Chart.Line dataKey="requests" />
			</Chart.Root>,
		);

		const title = screen.getByText("Request Traffic");
		const description = screen.getByText("Shows request and error counts over time");
		expect(title).toBeTruthy();
		expect(description).toBeTruthy();
		// Both should be screen-reader only
		expect(title.className).toContain("sr-only");
		expect(description.className).toContain("sr-only");
	});

	test("sets role='figure' when accessibleTitle is provided", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig} accessibleTitle="Traffic Chart">
				<Chart.Line dataKey="requests" />
			</Chart.Root>,
		);

		const chartElement = container.querySelector("[data-slot='chart']");
		expect(chartElement?.getAttribute("role")).toBe("figure");
	});

	test("does not set role='figure' without accessibleTitle", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig}>
				<Chart.Line dataKey="requests" />
			</Chart.Root>,
		);

		const chartElement = container.querySelector("[data-slot='chart']");
		expect(chartElement?.getAttribute("role")).toBeNull();
	});

	test("Chart.Line renders null (no DOM output)", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig}>
				<Chart.Line dataKey="requests" />
			</Chart.Root>,
		);

		// Line component itself should not add any visible DOM
		// (it only registers into context)
		expect(container.querySelector("[data-slot='chart']")).toBeTruthy();
	});

	test("Chart.Bar renders null (no DOM output)", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig}>
				<Chart.Bar dataKey="requests" />
			</Chart.Root>,
		);

		expect(container.querySelector("[data-slot='chart']")).toBeTruthy();
	});

	test("Chart.Area renders null (no DOM output)", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig}>
				<Chart.Area dataKey="requests" />
			</Chart.Root>,
		);

		expect(container.querySelector("[data-slot='chart']")).toBeTruthy();
	});

	test("Chart.Scatter renders null (no DOM output)", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig}>
				<Chart.Scatter dataKey="requests" />
			</Chart.Root>,
		);

		expect(container.querySelector("[data-slot='chart']")).toBeTruthy();
	});

	test("renders with empty data without crashing", () => {
		const { container } = render(
			<Chart.Root data={[]} config={sampleConfig}>
				<Chart.Line dataKey="requests" />
				<Chart.XAxis dataKey="timestamp" />
				<Chart.YAxis />
			</Chart.Root>,
		);

		expect(container.querySelector("[data-slot='chart']")).toBeTruthy();
	});

	test("renders multiple series types together", () => {
		const { container } = render(
			<Chart.Root data={sampleData} config={sampleConfig}>
				<Chart.Line dataKey="requests" curve="monotone" />
				<Chart.Bar dataKey="errors" />
				<Chart.XAxis dataKey="timestamp" />
				<Chart.YAxis />
				<Chart.Grid horizontal />
			</Chart.Root>,
		);

		expect(container.querySelector("[data-slot='chart']")).toBeTruthy();
	});

	test("Chart compound namespace has all expected keys", () => {
		expect(Chart.Root).toBeDefined();
		expect(Chart.Line).toBeDefined();
		expect(Chart.Bar).toBeDefined();
		expect(Chart.Area).toBeDefined();
		expect(Chart.Scatter).toBeDefined();
		expect(Chart.XAxis).toBeDefined();
		expect(Chart.YAxis).toBeDefined();
		expect(Chart.Grid).toBeDefined();
		expect(Chart.Tooltip).toBeDefined();
		expect(Chart.TooltipContent).toBeDefined();
		expect(Chart.Legend).toBeDefined();
	});
});
