import { Anchor } from "@ngrok/mantle/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Unreleased Data Table" },
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
				<PageHeader id="data-table" isUnreleased>
					Data Table
				</PageHeader>
				<p className="font-body text-body text-xl">
					Tables purposefully designed for dynamic, application data with features like sorting, filtering, and
					pagination. Powered by{" "}
					<Anchor href="https://tanstack.com/table/latest/docs/introduction">TanStack Table</Anchor>.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<p>Examples coming soon...</p>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { DNE } from "@ngrok/mantle/data-table";

									<DNE />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</div>
			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>DataTable</InlineCode> accepts the following props in addition to...
				</p>
				{/* <PropsTable>
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
				</PropsTable> */}
			</section>
		</div>
	);
}
