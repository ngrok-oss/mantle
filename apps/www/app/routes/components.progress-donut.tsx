import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { ProgressDonut } from "@ngrok/mantle/progress";
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
import type { Route } from "./+types/components.progress-donut";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Progress Donut" },
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
				<PageHeader id="progress-donut">Progress Donut</PageHeader>
				<p className="font-body text-body text-xl">
					Displays an indicator showing the completion progress of a task as a
					circular progress bar.
				</p>
				<p className="font-body text-body text-xl">
					The indicator color is inherited via <Code>currentColor</Code>.
					Override the default (<Code>accent-600</Code>) by setting the
					<Code>ProgressDonut.Indicator</Code>'s text color.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<ProgressDonut.Root
							value={60}
							className="size-10"
							strokeWidth="0.375rem"
						>
							<ProgressDonut.Indicator />
						</ProgressDonut.Root>

						<ProgressDonut.Root
							value={60}
							className="size-10"
							strokeWidth="0.375rem"
						>
							<ProgressDonut.Indicator className="text-fuchsia-600" />
						</ProgressDonut.Root>

						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-1.5 text-sm">
								<ProgressDonut.Root value={100} className="size-6">
									<ProgressDonut.Indicator />
								</ProgressDonut.Root>
								Data transfer out
							</div>

							<div className="flex items-center gap-1.5 text-xs">
								<div className="grid w-6 place-items-center">
									<ProgressDonut.Root
										value={100}
										className="size-4"
										strokeWidth="0.1875rem"
									>
										<ProgressDonut.Indicator />
									</ProgressDonut.Root>
								</div>
								Included
							</div>

							<div className="flex items-center gap-1.5 text-xs">
								<div className="grid w-6 place-items-center">
									<ProgressDonut.Root
										className="size-4"
										value={25}
										strokeWidth="0.1875rem"
									>
										<ProgressDonut.Indicator />
									</ProgressDonut.Root>
								</div>
								Additional
							</div>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { ProgressDonut } from "@ngrok/mantle/progress";

									<ProgressDonut.Root value={60} className="size-10" strokeWidth="0.375rem">
										<ProgressDonut.Indicator />
									</ProgressDonut.Root>

									<ProgressDonut.Root value={60} className="size-10" strokeWidth="0.375rem">
										<ProgressDonut.Indicator className="text-fuchsia-600" />
									</ProgressDonut.Root>

									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-1.5 text-sm">
											<ProgressDonut.Root value={100} className="size-6">
												<ProgressDonut.Indicator />
											</ProgressDonut.Root>
											Data transfer out
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut.Root value={100} className="size-4" strokeWidth="0.1875rem">
													<ProgressDonut.Indicator />
												</ProgressDonut.Root>
											</div>
											Included
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut.Root value={25} className="size-4" strokeWidth="0.1875rem">
													<ProgressDonut.Indicator className="text-success-600" />
												</ProgressDonut.Root>
											</div>
											Additional
										</div>
									</div>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</div>
			<section className="space-y-4">
				<h2 id="indeterminate" className="text-3xl font-medium">
					Indeterminate Value
				</h2>
				<p className="font-body text-body">
					You can set the <Code>value</Code> prop to{" "}
					<Code>"indeterminate"</Code> to show the progress bar in an
					indeterminate state.
				</p>
				<p className="font-body text-body">
					You can control the rotation speed with the{" "}
					<Code>indeterminateRotationSpeed</Code> prop.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<ProgressDonut.Root
							className="size-10"
							value="indeterminate"
							strokeWidth="0.375rem"
						>
							<ProgressDonut.Indicator />
						</ProgressDonut.Root>
						<ProgressDonut.Root
							className="size-10"
							value="indeterminate"
							indeterminateRotationSpeed="animation-duration-[2s]"
							strokeWidth="0.375rem"
						>
							<ProgressDonut.Indicator />
						</ProgressDonut.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { ProgressDonut } from "@ngrok/mantle/progress";

									<ProgressDonut.Root className="size-10" value="indeterminate" strokeWidth="0.375rem">
										<ProgressDonut.Indicator />
									</ProgressDonut.Root>

									<ProgressDonut.Root
										className="size-10"
										value="indeterminate"
										indeterminateRotationSpeed="animation-duration-[2s]"
										strokeWidth="0.375rem"
									>
										<ProgressDonut.Indicator />
									</ProgressDonut.Root>
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
					The color of the <Code>ProgressDonut.Indicator</Code> is inherited
					from the parent text color using <Code>currentColor</Code>. Using
					this, you can easily change the color of it based on the current
					progress value.
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
									import { ProgressDonut } from "@ngrok/mantle/progress";

									const Example = () => {
										const [value, setValue] = useState(0);

										function computeColor() {
											switch (true) {
												case value <= 20:
													return "text-accent-600";
												case value <= 40:
													return "text-success-600";
												case value <= 60:
													return "text-warning-600";
												case value <= 80:
													return "text-fuchsia-600";
												default:
													return "text-danger-600";
											}
										};

										return (
											<form className="space-y-4">
												<ProgressDonut.Root value={value} className="size-10" strokeWidth="0.375rem">
													<ProgressDonut.Indicator className={computeColor()} />
												</ProgressDonut.Root>
												<label className="block space-y-1">
													<p>Value:</p>
													<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} /> (
													{value}%)
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
							id="api-progress-donut"
							className="text-xl font-medium text-strong"
						>
							<span id="api-progress-donut-root" />
							ProgressDonut
						</h3>

						<div className="font-body text-body space-y-1">
							<p>
								A simple circular progress bar which shows the completion
								progress of a task.
							</p>
							<p>
								The indicator color is inherited via <Code>currentColor</Code>.
								Override the default (<Code>accent-600</Code>) by setting the
								<Code>ProgressDonut.Indicator</Code>'s text color.
							</p>

							<p>
								The <Code>ProgressDonut</Code> accepts the following props in
								addition to the{" "}
								<Anchor href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg#attributes">
									standard HTML svg attributes
								</Anchor>
								.
							</p>
						</div>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="indeterminateRotationSpeed" optional />
							<PropTypeCell>
								<Code>`animation-duration-$&#123;string&#125;`</Code>
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="animation-duration-[15s]" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Controls the rotation speed of the indeterminate spinner
									state, as a Tailwind <Code>animation-duration-*</Code> class.
								</p>
							</PropDescriptionCell>
						</PropRow>
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
							<PropNameCell name="strokeWidth" optional />
							<PropTypeCell>
								<ul>
									<li>
										<NumberPropType />
									</li>
									<li>
										<StringPropType value="`${number}rem`" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="0.25rem" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									The width of the progress bar stroke. Note, we clamp the
									stroke width to a minimum of 1px and max of 12px since it is
									proportional to the viewbox size (0 0 32 32).
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
									If set to <Code>"indeterminate"</Code>, the progress bar is
									considered <strong>indeterminate</strong>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-progress-donut-indicator"
							className="text-xl font-medium text-strong"
						>
							ProgressDonut.Indicator
						</h3>

						<p className="font-body text-body">
							The indicator for the circular progress bar.
						</p>

						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/g"
								target="_blank"
								rel="noopener noreferrer"
							>
								svg g
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

	function computeColor() {
		switch (true) {
			case value <= 20:
				return "text-accent-600";
			case value <= 40:
				return "text-success-600";
			case value <= 60:
				return "text-warning-600";
			case value <= 80:
				return "text-fuchsia-600";
			default:
				return "text-danger-600";
		}
	}

	return (
		<form className="space-y-4">
			<ProgressDonut.Root
				value={value}
				className="size-10"
				strokeWidth="0.375rem"
			>
				<ProgressDonut.Indicator className={computeColor()} />
			</ProgressDonut.Root>
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
