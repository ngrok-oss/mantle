import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { DescriptionList } from "@ngrok/mantle/description-list";
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
import type { Route } from "./+types/components.description-list";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Description List" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="description-list">Description List</PageHeader>
				<p className="font-body text-body my-4 text-xl">
					A semantically correct description list built on the HTML{" "}
					<Anchor
						href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Code>&lt;dl&gt;</Code>
					</Anchor>{" "}
					element. Renders a list of label/value pairs, commonly used in detail views to display
					metadata about a resource.
				</p>
				<div className="font-body text-body space-y-4">
					<p>
						Compose the <Code>&lt;DescriptionList&gt;</Code> with{" "}
						<Code>&lt;DescriptionList.Item&gt;</Code>, <Code>&lt;DescriptionList.Label&gt;</Code>,
						and <Code>&lt;DescriptionList.Value&gt;</Code> as direct children.
					</p>

					<div>
						<Example>
							<div className="w-full max-w-lg">
								<DescriptionList.Root>
									<DescriptionList.Item>
										<DescriptionList.Label>Name</DescriptionList.Label>
										<DescriptionList.Value>Ada Lovelace</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>Email</DescriptionList.Label>
										<DescriptionList.Value>ada@example.com</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>Role</DescriptionList.Label>
										<DescriptionList.Value>Administrator</DescriptionList.Value>
									</DescriptionList.Item>
								</DescriptionList.Root>
							</div>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { DescriptionList } from "@ngrok/mantle/description-list";

										<DescriptionList.Root>
											<DescriptionList.Item>
												<DescriptionList.Label>Name</DescriptionList.Label>
												<DescriptionList.Value>Ada Lovelace</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>Email</DescriptionList.Label>
												<DescriptionList.Value>ada@example.com</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>Role</DescriptionList.Label>
												<DescriptionList.Value>Administrator</DescriptionList.Value>
											</DescriptionList.Item>
										</DescriptionList.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>

					<HashLinkHeading id="striped">
						<h3 className="text-xl font-medium text-strong">Striped</h3>
					</HashLinkHeading>
					<p>
						Use the <Code>striped</Code> prop to apply alternating row backgrounds for improved
						readability in longer lists.
					</p>

					<div>
						<Example>
							<div className="w-full max-w-lg">
								<DescriptionList.Root striped>
									<DescriptionList.Item>
										<DescriptionList.Label>Key</DescriptionList.Label>
										<DescriptionList.Value className="font-bold">my-api-key</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>ID</DescriptionList.Label>
										<DescriptionList.Value>aigk_2fKm9x8Hn3QpYT7zKlR0vW5</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>Description</DescriptionList.Label>
										<DescriptionList.Value>
											Production API key for the billing service
										</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>Created</DescriptionList.Label>
										<DescriptionList.Value>2 days ago by admin@example.com</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>Last Used</DescriptionList.Label>
										<DescriptionList.Value>
											<span className="italic text-muted">Never</span>
										</DescriptionList.Value>
									</DescriptionList.Item>
									<DescriptionList.Item>
										<DescriptionList.Label>Metadata</DescriptionList.Label>
										<DescriptionList.Value>17 Bytes</DescriptionList.Value>
									</DescriptionList.Item>
								</DescriptionList.Root>
							</div>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { DescriptionList } from "@ngrok/mantle/description-list";

										<DescriptionList.Root striped>
											<DescriptionList.Item>
												<DescriptionList.Label>Key</DescriptionList.Label>
												<DescriptionList.Value className="font-bold">
													my-api-key
												</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>ID</DescriptionList.Label>
												<DescriptionList.Value>
													aigk_2fKm9x8Hn3QpYT7zKlR0vW5
												</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>Description</DescriptionList.Label>
												<DescriptionList.Value>Production API key for the billing service</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>Created</DescriptionList.Label>
												<DescriptionList.Value>2 days ago by admin@example.com</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>Last Used</DescriptionList.Label>
												<DescriptionList.Value>
													<span className="italic text-muted">Never</span>
												</DescriptionList.Value>
											</DescriptionList.Item>
											<DescriptionList.Item>
												<DescriptionList.Label>Metadata</DescriptionList.Label>
												<DescriptionList.Value>17 Bytes</DescriptionList.Value>
											</DescriptionList.Item>
										</DescriptionList.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<HashLinkHeading id="api">
						<h2 className="text-3xl font-medium text-strong">API Reference</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-description-list-root">
							<h3 className="text-xl font-medium text-strong">DescriptionList.Root</h3>
						</HashLinkHeading>

						<p>
							The root container for a description list. Renders a <Code>&lt;dl&gt;</Code> element.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								dl
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Compose <Code>DescriptionList.Item</Code> components as direct children.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="className" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>Additional CSS class names to apply to the root element.</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="striped" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Whether to apply alternating row backgrounds to <Code>DescriptionList.Item</Code>{" "}
									children for improved readability.
								</p>
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
									Use the <Code>asChild</Code> prop to compose the <Code>DescriptionList.Root</Code>{" "}
									styling and functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-description-list-item">
							<h3 className="text-xl font-medium text-strong">DescriptionList.Item</h3>
						</HashLinkHeading>

						<p>
							A wrapper that groups a <Code>DescriptionList.Label</Code> and{" "}
							<Code>DescriptionList.Value</Code> pair. Renders a <Code>&lt;div&gt;</Code> with a
							default subgrid layout that inherits column tracks from the root.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									A <Code>DescriptionList.Label</Code> and <Code>DescriptionList.Value</Code> pair.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="className" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>Additional CSS class names to apply to the item wrapper.</p>
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
									Use the <Code>asChild</Code> prop to compose the <Code>DescriptionList.Item</Code>{" "}
									styling and functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-description-list-label">
							<h3 className="text-xl font-medium text-strong">DescriptionList.Label</h3>
						</HashLinkHeading>

						<p>
							The label for a description list item. Renders a <Code>&lt;dt&gt;</Code> element.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								dt
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>The label text for this description list item.</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="className" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>Additional CSS class names to apply to the label element.</p>
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
									<Code>DescriptionList.Label</Code> styling and functionality onto alternative
									element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-description-list-value">
							<h3 className="text-xl font-medium text-strong">DescriptionList.Value</h3>
						</HashLinkHeading>

						<p>
							The value for a description list item. Renders a <Code>&lt;dd&gt;</Code> element.
							Compose any content inside — the component imposes no layout on its children.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								dd
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									The value content for this description list item. Can be any React node — text,
									formatted values, interactive elements, etc.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="className" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>Additional CSS class names to apply to the value element.</p>
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
									<Code>DescriptionList.Value</Code> styling and functionality onto alternative
									element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
