import { Anchor } from "@ngrok/mantle/anchor";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { ProgressBar } from "@ngrok/mantle/progress";
import { useState } from "react";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	NumberPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.progress-bar";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — ProgressBar" },
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
	return (
		<div className="space-y-16">
			<div className="space-y-4">
				<PageHeader id="progress">Progress Bar</PageHeader>
				<p className="font-body text-body text-xl">
					Displays an indicator showing the completion progress of a task as a
					linear progress bar with customizable colors.
				</p>
				<p className="font-body text-body text-xl">
					The progress bar consists of an indicator (filled portion) that shows
					the current progress value against a background container.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<ProgressBar.Root value={60}>
							<ProgressBar.Indicator className="bg-orange-500" />
						</ProgressBar.Root>

						<ProgressBar.Root value={30}>
							<ProgressBar.Indicator className="bg-blue-600" />
						</ProgressBar.Root>

						<ProgressBar.Root value={85}>
							<ProgressBar.Indicator className="bg-green-600" />
						</ProgressBar.Root>

						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-3 text-sm">
								<ProgressBar.Root value={100} className="w-24">
									<ProgressBar.Indicator className="bg-success-600" />
								</ProgressBar.Root>
								Complete
							</div>

							<div className="flex items-center gap-3 text-sm">
								<ProgressBar.Root value={45} className="w-24">
									<ProgressBar.Indicator className="bg-warning-600" />
								</ProgressBar.Root>
								In Progress
							</div>

							<div className="flex items-center gap-3 text-sm">
								<ProgressBar.Root value={10} className="w-24">
									<ProgressBar.Indicator className="bg-danger-600" />
								</ProgressBar.Root>
								Starting
							</div>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { ProgressBar } from "@ngrok/mantle/progress";

									<ProgressBar.Root value={60}>
										<ProgressBar.Indicator className="bg-orange-500" />
									</ProgressBar.Root>

									<ProgressBar.Root value={30}>
										<ProgressBar.Indicator className="bg-blue-600" />
									</ProgressBar.Root>

									<div className="flex flex-col gap-3">
										<div className="flex items-center gap-3 text-sm">
											<ProgressBar.Root value={100} className="w-24">
												<ProgressBar.Indicator className="bg-success-600" />
											</ProgressBar.Root>
											Complete
										</div>

										<div className="flex items-center gap-3 text-sm">
											<ProgressBar.Root value={45} className="w-24">
												<ProgressBar.Indicator className="bg-warning-600" />
											</ProgressBar.Root>
											In Progress
										</div>
									</div>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</div>

			<section className="space-y-4">
				<h2 id="custom-max" className="text-3xl font-medium">
					Custom Maximum Value
				</h2>
				<p className="font-body text-body">
					You can set a custom maximum value using the{" "}
					<InlineCode>max</InlineCode> prop. The progress value will be
					calculated as a percentage of this maximum.
				</p>
				<div>
					<Example>
						<ProgressBar.Root value={150} max={200}>
							<ProgressBar.Indicator className="bg-purple-600" />
						</ProgressBar.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { ProgressBar } from "@ngrok/mantle/progress";

									<ProgressBar.Root value={150} max={200}>
										<ProgressBar.Indicator className="bg-purple-600" />
									</ProgressBar.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="indeterminate" className="text-3xl font-medium">
					Indeterminate Value
				</h2>
				<p className="font-body text-body">
					You can set the <InlineCode>value</InlineCode> prop to{" "}
					<InlineCode>"indeterminate"</InlineCode> to show the progress bar in
					an indeterminate state. Currently, this displays as a progress bar at
					0% but maintains accessibility attributes for screen readers.
				</p>
				<div>
					<Example>
						<ProgressBar.Root value="indeterminate">
							<ProgressBar.Indicator className="bg-accent-600" />
						</ProgressBar.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { ProgressBar } from "@ngrok/mantle/progress";

									<ProgressBar.Root value="indeterminate">
										<ProgressBar.Indicator className="bg-accent-600" />
									</ProgressBar.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="dynamic-colors" className="text-3xl font-medium">
					Dynamic Colors
				</h2>
				<p className="font-body text-body">
					The color of the <InlineCode>ProgressBar.Indicator</InlineCode> can be
					customized using the <InlineCode>className</InlineCode> prop. This
					allows you to change colors based on the current progress value or
					application state.
				</p>
				<div>
					<Example>
						<DynamicColorsExample />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { ProgressBar } from "@ngrok/mantle/progress";

									const Example = () => {
										const [value, setValue] = useState(0);

										function computeIndicatorColor() {
											switch (true) {
												case value <= 20:
													return "bg-danger-600";
												case value <= 40:
													return "bg-warning-600";
												case value <= 60:
													return "bg-accent-600";
												case value <= 80:
													return "bg-success-600";
												default:
													return "bg-fuchsia-600";
											}
										}

										return (
											<form className="space-y-4">
												<ProgressBar.Root value={value}>
													<ProgressBar.Indicator className={computeIndicatorColor()} />
												</ProgressBar.Root>
												<label className="block space-y-1">
													<p>Value:</p>
													<input 
														type="range" 
														min={0} 
														max={100} 
														value={value} 
														onChange={(e) => setValue(Number(e.target.value))} 
													/> ({value}%)
												</label>
											</form>
										);
									};
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-progress-bar-root"
							className="text-xl font-medium text-strong"
						>
							ProgressBar.Root
						</h3>

						<div className="font-body text-body space-y-1">
							<p>
								A linear progress bar that displays completion progress with
								customizable colors.
							</p>
							<p>
								The progress bar consists of an indicator (filled portion) that
								shows the current progress value against a background container.
							</p>

							<p>
								The <InlineCode>ProgressBar.Root</InlineCode> accepts the
								following props in addition to the{" "}
								<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
									standard HTML div attributes
								</Anchor>
								.
							</p>
						</div>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="max" optional />
							<PropTypeCell>
								<NumberPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<NumberPropType value={100} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									The maximum value of the progress bar. This attribute
									describes how much work the task indicated by the progress
									element requires. The max attribute, if present, must have a
									value greater than 0. The default value is 100.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="value" optional />
							<PropTypeCell>
								<ul>
									<li>
										<NumberPropType />
									</li>
									<li>
										<StringPropType value="indeterminate" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell>
								<NumberPropType value={0} />
							</PropDefaultValueCell>
							<PropDescriptionCell className="space-y-2">
								<p>
									The current value of the progress bar. This attribute
									specifies how much of the task that has been completed. It
									must be a valid floating point number between 0 and max, or
									between 0 and 100 if max is omitted.
								</p>
								<p>
									If set to <InlineCode>"indeterminate"</InlineCode>, the
									progress bar is considered <strong>indeterminate</strong>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-progress-bar-indicator"
							className="text-xl font-medium text-strong"
						>
							ProgressBar.Indicator
						</h3>

						<p className="font-body text-body">
							The indicator portion of the progress bar that shows the completed
							progress. This component is automatically positioned and sized
							based on the current value relative to the maximum value.
						</p>

						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
								target="_blank"
								rel="noopener noreferrer"
							>
								HTML div element
							</Anchor>
							.
						</p>
					</header>
				</section>
			</section>
		</div>
	);
}

const DynamicColorsExample = () => {
	const [value, setValue] = useState(0);

	function computeIndicatorColor() {
		switch (true) {
			case value <= 20:
				return "bg-danger-600";
			case value <= 40:
				return "bg-warning-600";
			case value <= 60:
				return "bg-accent-600";
			case value <= 80:
				return "bg-success-600";
			default:
				return "bg-fuchsia-600";
		}
	}

	return (
		<form className="space-y-4">
			<ProgressBar.Root value={value}>
				<ProgressBar.Indicator className={computeIndicatorColor()} />
			</ProgressBar.Root>
			<label className="block space-y-1">
				<p>Value: {value}%</p>
				<input
					type="range"
					min={0}
					max={100}
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>
			</label>
		</form>
	);
};
