import { Card } from "@ngrok/mantle/card";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { useBreakpoint, useIsBelowBreakpoint } from "@ngrok/mantle/hooks";
import { Table } from "@ngrok/mantle/table";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.breakpoints";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Breakpoints" }];
};

export default function Page() {
	const currentBreakpoint = useBreakpoint();
	const isBelowMd = useIsBelowBreakpoint("md");
	const isBelowLg = useIsBelowBreakpoint("lg");

	return (
		<div className="space-y-8">
			<div>
				<PageHeader id="breakpoints">Breakpoints</PageHeader>
				<p className="font-body text-body mt-4 text-xl">
					Responsive breakpoints for building adaptive layouts.
				</p>
			</div>

			<section className="space-y-4">
				<HashLinkHeading id="live-demo" className="text-2xl font-medium">
					<h2>Live Demo</h2>
				</HashLinkHeading>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Card.Root>
						<Card.Header>
							<Card.Title>Current Breakpoint</Card.Title>
						</Card.Header>
						<Card.Body className="flex items-center justify-between">
							<span>Current breakpoint:</span>
							<Code className="text-lg font-bold">{currentBreakpoint}</Code>
						</Card.Body>
					</Card.Root>

					<Card.Root>
						<Card.Header>
							<Card.Title>Below Medium?</Card.Title>
						</Card.Header>
						<Card.Body className="flex items-center justify-between">
							<span>Below md (768px):</span>
							<Code className="text-lg font-bold">{isBelowMd.toString()}</Code>
						</Card.Body>
					</Card.Root>

					<Card.Root>
						<Card.Header>
							<Card.Title>Below Large?</Card.Title>
						</Card.Header>
						<Card.Body className="flex items-center justify-between">
							<span>Below lg (1024px):</span>
							<Code className="text-lg font-bold">{isBelowLg.toString()}</Code>
						</Card.Body>
					</Card.Root>
				</div>
				<p className="text-sm text-muted">
					Resize your browser window to see the values change in real-time.
				</p>
			</section>

			<section className="space-y-4">
				<HashLinkHeading
					id="breakpoint-values"
					className="text-2xl font-medium"
				>
					<h2>Breakpoint Values</h2>
				</HashLinkHeading>
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
									<Code>xs</Code>
								</Table.Cell>
								<Table.Cell>
									30rem <span className="text-muted">(480px)</span>
								</Table.Cell>
								<Table.Cell>
									<Code>@media (width &gt;= 30rem) &#123; ... &#125;</Code>
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
				<h2 className="text-2xl font-medium">useBreakpoint Hook</h2>
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
					<h3 className="text-lg font-medium">Features</h3>
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
					<h3 className="text-lg font-medium">Return Value</h3>
					<p className="text-body">
						Returns a <Code>Breakpoint</Code> type that can be one of:{" "}
						<Code>"default"</Code>, <Code>"xs"</Code>, <Code>"sm"</Code>,{" "}
						<Code>"md"</Code>, <Code>"lg"</Code>, <Code>"xl"</Code>, or{" "}
						<Code>"2xl"</Code>.
					</p>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-medium">useIsBelowBreakpoint Hook</h2>
				<p className="font-body text-body text-lg">
					The <Code>useIsBelowBreakpoint</Code> hook returns <Code>true</Code>{" "}
					if the current viewport width is below the specified breakpoint.
					Perfect for mobile-first responsive design patterns.
				</p>

				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useIsBelowBreakpoint } from "@ngrok/mantle/hooks";

								function ResponsiveSidebar() {
									const isMobile = useIsBelowBreakpoint("md");

									return (
										<aside className={isMobile ? "mobile-sidebar" : "desktop-sidebar"}>
											{isMobile ? <MobileNav /> : <DesktopNav />}
										</aside>
									);
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>

				<div className="space-y-2">
					<h3 className="text-lg font-medium">Parameters</h3>
					<p className="text-body">
						Accepts a <Code>TailwindBreakpoint</Code> which can be one of:{" "}
						<Code>"xs"</Code>, <Code>"sm"</Code>, <Code>"md"</Code>,{" "}
						<Code>"lg"</Code>, <Code>"xl"</Code>, or <Code>"2xl"</Code>.
					</p>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-medium">Common Use Cases</h3>
					<ul className="list-disc list-inside space-y-1 text-body">
						<li>
							<strong>Mobile detection:</strong>{" "}
							<Code>useIsBelowBreakpoint("md")</Code> for mobile-first layouts
						</li>
						<li>
							<strong>Conditional rendering:</strong> Show/hide components based
							on screen size
						</li>
						<li>
							<strong>Dynamic styling:</strong> Apply different CSS classes for
							mobile vs desktop
						</li>
						<li>
							<strong>Component adaptation:</strong> Switch between mobile and
							desktop component variants
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
