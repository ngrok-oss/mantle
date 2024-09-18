import { Anchor } from "@ngrok/mantle/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import {
	NumberPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";
import { useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Progress Donut" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="space-y-16">
			<div className="space-y-4">
				<h1 className="text-5xl font-medium">Progress Donut</h1>
				<p className="font-body text-body text-xl">
					Displays an indicator showing the completion progress of a task as a circular progress bar.
				</p>
				<p className="font-body text-body text-xl">
					The indicator color is inherited via <InlineCode>currentColor</InlineCode>. Override the default (
					<InlineCode>accent-600</InlineCode>) by setting the
					<InlineCode>ProgressDonutIndicator</InlineCode>'s text color.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<ProgressDonut value={60} className="size-10" strokeWidth="0.375rem">
							<ProgressDonutIndicator />
						</ProgressDonut>

						<ProgressDonut value={60} className="size-10" strokeWidth="0.375rem">
							<ProgressDonutIndicator className="text-fuchsia-600" />
						</ProgressDonut>

						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-1.5 text-sm">
								<ProgressDonut value={100} className="size-6">
									<ProgressDonutIndicator />
								</ProgressDonut>
								Data transfer out
							</div>

							<div className="flex items-center gap-1.5 text-xs">
								<div className="grid w-6 place-items-center">
									<ProgressDonut value={100} className="size-4" strokeWidth="0.1875rem">
										<ProgressDonutIndicator />
									</ProgressDonut>
								</div>
								Included
							</div>

							<div className="flex items-center gap-1.5 text-xs">
								<div className="grid w-6 place-items-center">
									<ProgressDonut className="size-4" value="indeterminate" strokeWidth="0.1875rem">
										<ProgressDonutIndicator />
									</ProgressDonut>
								</div>
								Additional
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut value={60} className="size-10" strokeWidth="0.375rem">
										<ProgressDonutIndicator />
									</ProgressDonut>

									<ProgressDonut value={60} className="size-10" strokeWidth="0.375rem">
										<ProgressDonutIndicator className="text-fuchsia-600" />
									</ProgressDonut>

									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-1.5 text-sm">
											<ProgressDonut value={100} className="size-6">
												<ProgressDonutIndicator />
											</ProgressDonut>
											Data transfer out
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={100} className="size-4" strokeWidth="0.1875rem">
													<ProgressDonutIndicator />
												</ProgressDonut>
											</div>
											Included
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={25} className="size-4" strokeWidth="0.1875rem">
													<ProgressDonutIndicator className="text-success-600" />
												</ProgressDonut>
											</div>
											Additional
										</div>
									</div>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</div>
			<section className="space-y-4">
				<h2 id="indeterminate" className="text-3xl font-medium">
					Indeterminate Value
				</h2>
				<p className="font-body text-body text-xl">
					You can set the <InlineCode>value</InlineCode> prop to <InlineCode>"indeterminate"</InlineCode> to show the
					progress bar in an indeterminate state.
				</p>
				<div>
					<Example>
						<ProgressDonut className="size-10" value="indeterminate" strokeWidth="0.375rem">
							<ProgressDonutIndicator />
						</ProgressDonut>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut className="size-10" value="indeterminate" strokeWidth="0.375rem">
										<ProgressDonutIndicator />
									</ProgressDonut>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
			<section className="space-y-4">
				<h2 id="dynamic-colors" className="text-3xl font-medium">
					Dynamic Colors
				</h2>
				<p className="font-body text-body text-xl">
					The color of the <InlineCode>ProgressDonutIndicator</InlineCode> is inherited from the parent text color using{" "}
					<InlineCode>currentColor</InlineCode>. Using this, you can easily change the color of it based on the current
					progress value.
				</p>
				<div>
					<Example>
						<div className="min-w-72">
							<DynamicColorsExample />
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

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
												<ProgressDonut value={value} className="size-10" strokeWidth="0.375rem">
													<ProgressDonutIndicator className={computeColor()} />
												</ProgressDonut>
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
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>ProgressDonut</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg#attributes">
						standard HTML svg attributes
					</Anchor>
					.
				</p>
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
								The maximum value of the progress bar. This attribute describes how much work the task indicated by the
								progress element requires. The max attribute, if present, must have a value greater than 0. The default
								value is 100.
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
								The width of the progress bar stroke. Note, we clamp the stroke width to a minimum of 1px and max of
								12px since it is proportional to the viewbox size (0 0 32 32).
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
								The current value of the progress bar. This attribute specifies how much of the task that has been
								completed. It must be a valid floating point number between 0 and max, or between 0 and 100 if max is
								omitted.
							</p>
							<p>
								If set to <InlineCode>"indeterminate"</InlineCode>, the progress bar is considered{" "}
								<strong>indeterminate</strong>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
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
			<ProgressDonut value={value} className="size-10" strokeWidth="0.375rem">
				<ProgressDonutIndicator className={computeColor()} />
			</ProgressDonut>
			<label className="block space-y-1">
				<p>Value:</p>
				<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} /> (
				{value}%)
			</label>
		</form>
	);
};
