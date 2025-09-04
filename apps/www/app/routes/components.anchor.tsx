import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { BookIcon } from "@phosphor-icons/react/Book";
import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.alert";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Anchor" },
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
			<section className="space-y-4">
				<PageHeader id="anchor">Anchor</PageHeader>
				<p className="font-body text-body text-xl">
					Fundamental component for rendering links to external addresses.
				</p>
				<div className="font-body text-body space-y-4">
					<p>
						The <Code>&lt;Anchor&gt;</Code> element, with its <Code>href</Code>{" "}
						attribute, creates a hyperlink to web pages, files, email addresses,
						locations in the same page, or anything else a URL can address.
					</p>
					<p>
						Content within each <Code>&lt;Anchor&gt;</Code> should indicate the
						link&rsquo;s destination. If the <Code>href</Code> attribute is
						present, pressing the enter key while focused on the{" "}
						<Code>&lt;Anchor&gt;</Code> element will activate it.
					</p>
					<p>
						See the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
							MDN docs
						</Anchor>{" "}
						for more information.
					</p>
					<p>
						If you need to link to an internal application route, prefer using
						the{" "}
						<Anchor href="https://reactrouter.com/en/main/components/link">
							<Code>react-router</Code> <Code>&lt;Link&gt;</Code>
						</Anchor>
						.
					</p>
				</div>
				<div>
					<Example className="flex-col">
						<p>
							This link will go to{" "}
							<Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
						</p>
						<p>
							You can add icons! This one renders at the start:{" "}
							<Anchor href="https://ngrok.com/docs" icon={<BookIcon />}>
								ngrok docs
							</Anchor>
							!
						</p>
						<p>
							And this icon renders at the end:{" "}
							<Anchor
								href="https://dashboard.ngrok.com"
								icon={<ShrimpIcon />}
								iconPlacement="end"
							>
								ngrok dashboard
							</Anchor>
							!
						</p>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
								import { Anchor } from "@ngrok/mantle/anchor";
								import { BookIcon } from "@phosphor-icons/react/Book";
								import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";

								<p>
									This link will go to <Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
								</p>
								<p>
									You can add icons! This one renders at the start:{" "}
									<Anchor href="https://ngrok.com/docs" icon={<BookIcon />}>
										ngrok docs
									</Anchor>
									!
								</p>
								<p>
									And this icon renders at the end:{" "}
									<Anchor href="https://dashboard.ngrok.com" icon={<ShrimpIcon />} iconPlacement="end">
										ngrok dashboard
									</Anchor>
									!
								</p>
							`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Anchor</Code> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes">
						standard HTML anchor attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="icon" optional />
						<PropTypeCell>
							<ReactNodePropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>An icon to render inside the anchor.</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="iconPlacement" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="start" />
								</li>
								<li>
									<StringPropType value="end" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="start" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>The side that the icon will render on, if one is present</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="asChild" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Use the <Code>asChild</Code> prop to compose the{" "}
								<Code>Anchor</Code> styling and functionality onto alternative
								element types or your own React components.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
