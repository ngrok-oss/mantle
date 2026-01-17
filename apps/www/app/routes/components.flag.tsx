import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Flag } from "@ngrok/mantle/flag";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
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
import type { Route } from "./+types/components.flag";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Flag" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<div className="space-y-4">
				<PageHeader id="flag">Flag</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a flag as an svg based on the provided country code.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<Flag code="US" />
						<Flag code="JP" loading="lazy" />
						<Flag code="ES" loading="eager" />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Flag } from "@ngrok/mantle/flag";

									<Flag code="US" />
									<Flag code="JP" loading="lazy" />
									<Flag code="ES" loading="eager" />
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</div>
			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Flag</Code> accepts the following props in addition to the{" "}
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
								A string providing a hint to the user agent as to how to best schedule the loading
								of the image to optimize page performance.{" "}
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
