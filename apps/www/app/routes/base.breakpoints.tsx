import { Card } from "@ngrok/mantle/card";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { useBreakpoint } from "@ngrok/mantle/hooks";
import { Table } from "@ngrok/mantle/table";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.breakpoints";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Breakpoints" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	const currentBreakpoint = useBreakpoint();

	return (
		<div className="space-y-8">
			<div>
				<PageHeader id="breakpoints">Breakpoints</PageHeader>
				<p className="font-body text-body mt-4 text-xl">
					Responsive breakpoints for building adaptive layouts.
				</p>
			</div>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Current Breakpoint</h2>
				<Card.Root className="max-w-sm">
					<Card.Body className="flex items-center justify-between">
						<span>Current breakpoint:</span>
						<Code className="text-lg font-bold">{currentBreakpoint}</Code>
					</Card.Body>
				</Card.Root>
				<p className="text-sm text-muted">
					Resize your browser window to see the breakpoint change in real-time.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Breakpoint Values</h2>
				<p className="font-body text-body text-lg">
					There are six breakpoints by default, inspired by common device
					resolutions:
				</p>

				<Table.Root className="max-w-2xl mx-auto">
					<Table.Element>
						<Table.Head>
							<Table.Row>
								<Table.Header>Breakpoint prefix</Table.Header>
								<Table.Header>Minimum width</Table.Header>
								<Table.Header>CSS</Table.Header>
							</Table.Row>
						</Table.Head>
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Code>default</Code>
								</Table.Cell>
								<Table.Cell>
									0rem <span className="text-muted">(0px)</span>
								</Table.Cell>
								<Table.Cell>
									<span className="text-muted">No media query</span>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>sm</Code>
								</Table.Cell>
								<Table.Cell>
									40rem <span className="text-muted">(640px)</span>
								</Table.Cell>
								<Table.Cell>
									<Code>@media (width &gt;= 40rem) &#123; ... &#125;</Code>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>md</Code>
								</Table.Cell>
								<Table.Cell>
									48rem <span className="text-muted">(768px)</span>
								</Table.Cell>
								<Table.Cell>
									<Code>@media (width &gt;= 48rem) &#123; ... &#125;</Code>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>lg</Code>
								</Table.Cell>
								<Table.Cell>
									64rem <span className="text-muted">(1024px)</span>
								</Table.Cell>
								<Table.Cell>
									<Code>@media (width &gt;= 64rem) &#123; ... &#125;</Code>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>xl</Code>
								</Table.Cell>
								<Table.Cell>
									80rem <span className="text-muted">(1280px)</span>
								</Table.Cell>
								<Table.Cell>
									<Code>@media (width &gt;= 80rem) &#123; ... &#125;</Code>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>2xl</Code>
								</Table.Cell>
								<Table.Cell>
									96rem <span className="text-muted">(1536px)</span>
								</Table.Cell>
								<Table.Cell>
									<Code>@media (width &gt;= 96rem) &#123; ... &#125;</Code>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Element>
				</Table.Root>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">useBreakpoint Hook</h2>
				<p className="font-body text-body text-lg">
					The <Code>useBreakpoint</Code> hook returns the current breakpoint
					based on the viewport width. It efficiently tracks all breakpoints and
					returns the largest one that currently matches.
				</p>

				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useBreakpoint } from "@ngrok/mantle/hooks";
								
								function ResponsiveComponent() {
									const breakpoint = useBreakpoint();
									
									return (
										<div>
											<p>Current breakpoint: {breakpoint}</p>
											{breakpoint === "lg" && (
												<p>This only shows on large screens and above!</p>
											)}
										</div>
									);
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Features</h3>
					<ul className="list-disc list-inside space-y-1 text-body">
						<li>
							<strong>Performance optimized:</strong> Uses a single subscription
							for all breakpoint changes
						</li>
						<li>
							<strong>SSR compatible:</strong> Returns <Code>default</Code>{" "}
							during server-side rendering
						</li>
						<li>
							<strong>Real-time updates:</strong> Automatically updates when the
							viewport size changes
						</li>
						<li>
							<strong>TypeScript support:</strong> Fully typed with
							autocompletion for all breakpoints
						</li>
					</ul>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Return Value</h3>
					<p className="text-body">
						Returns a <Code>Breakpoint</Code> type that can be one of:{" "}
						<Code>"default"</Code>, <Code>"sm"</Code>, <Code>"md"</Code>,{" "}
						<Code>"lg"</Code>, <Code>"xl"</Code>, or <Code>"2xl"</Code>.
					</p>
				</div>
			</section>
		</div>
	);
}
