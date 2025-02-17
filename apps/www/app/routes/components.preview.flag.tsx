import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { Flag } from "@ngrok/mantle/flag";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.preview.flag";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Flag" },
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
				<PageHeader id="flag" isPreview>
					Flag
				</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a flag as an svg based on the provided country code.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<Flag code="US" />
						<Flag code="JP" loading="lazy" />
						<Flag code="ES" loading="eager" />
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Flag } from "@ngrok/mantle/flag";

									<Flag code="US" />
									<Flag code="JP" loading="lazy" />
									<Flag code="ES" loading="eager" />
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
					The <InlineCode>Flag</InlineCode> accepts the following props in
					addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
						standard HTML div attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="code" />
						<PropTypeCell>
							<StringPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>The country code of the flag to render.</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="size" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="s" />
								</li>
								<li>
									<StringPropType value="m" />
								</li>
								<li>
									<StringPropType value="l" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="l" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>The size of the flag to render. The default size is large.</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="loading" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="eager" />
								</li>
								<li>
									<StringPropType value="lazy" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="lazy" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								A string providing a hint to the user agent as to how to best
								schedule the loading of the image to optimize page performance.{" "}
								<Anchor href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading">
									See MDN docs.
								</Anchor>
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
