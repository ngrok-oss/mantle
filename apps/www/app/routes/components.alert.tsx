import { Alert } from "@ngrok/mantle/alert";
import { Anchor } from "@ngrok/mantle/anchor";
import { Card } from "@ngrok/mantle/card";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
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
	return [{ title: "@ngrok/mantle — Alert" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="alert">Alert</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a callout for user attention.
				</p>
				<div>
					<Example className="flex-col gap-2">
						<Alert.Root priority="danger">
							<Alert.Icon />
							<Alert.Content>
								<Alert.Title>Danger</Alert.Title>
								<Alert.Description>This is a danger Alert.</Alert.Description>
							</Alert.Content>
						</Alert.Root>
						<Alert.Root priority="info">
							<Alert.Icon />
							<Alert.Content>
								<Alert.Title>Info</Alert.Title>
								<Alert.DismissIconButton />
								<Alert.Description>This is an info Alert.</Alert.Description>
							</Alert.Content>
						</Alert.Root>
						{/* <Alert.Root priority="neutral">
							<Alert.Icon />
							<Alert.Content>
								<Alert.Title>Neutral</Alert.Title>
								<Alert.Description>This is a neutral Alert.</Alert.Description>
							</Alert.Content>
						</Alert.Root> */}
						<Alert.Root priority="success">
							<Alert.Icon />
							<Alert.Content>
								<Alert.Title>Success</Alert.Title>
								<Alert.Description>This is a success Alert.</Alert.Description>
							</Alert.Content>
						</Alert.Root>
						<Alert.Root priority="warning">
							<Alert.Icon />
							<Alert.Content>
								<Alert.Title>Warning</Alert.Title>
								<Alert.Description>This is a warning Alert.</Alert.Description>
							</Alert.Content>
						</Alert.Root>
						<Alert.Root priority="danger">
							<Alert.Icon svg={<ShrimpIcon />} />
							<Alert.Content>
								<Alert.Title>Danger w/ custom icon</Alert.Title>
								<Alert.Description>This is a danger Alert.</Alert.Description>
							</Alert.Content>
						</Alert.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Alert } from "@ngrok/mantle/alert";
									import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";

									<Alert.Root priority="danger">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>Danger</Alert.Title>
											<Alert.Description>This is a danger Alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>
									<Alert.Root priority="info">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>Info</Alert.Title>
											<Alert.DismissIconButton />
											<Alert.Description>This is an info Alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>
									<Alert.Root priority="success">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>Success</Alert.Title>
											<Alert.Description>This is a success Alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>
									<Alert.Root priority="warning">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>Warning</Alert.Title>
											<Alert.Description>This is a warning Alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>
									<Alert.Root priority="danger">
										<Alert.Icon svg={<ShrimpIcon />} />
										<Alert.Content>
											<Alert.Title>Danger w/ custom icon</Alert.Title>
											<Alert.Description>This is a danger Alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="examples">
						<h2 className="text-3xl font-medium">Examples</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="example-composition">
							<h3 className="text-xl font-medium text-strong">Composition</h3>
						</HashLinkHeading>
					</header>
					<p className="font-body text-body">
						You can mix and match what you put inside the <Code>Alert</Code>{" "}
						component to create different types of Alert layouts.
					</p>
					<div>
						<Example className="flex-col gap-4">
							<div className="w-full max-w-screen-sm space-y-2">
								<p>
									Danger <Code>Alert</Code> with icon and{" "}
									<Code>AlertDismissIconButton</Code>
								</p>
								<Alert.Root priority="danger">
									<Alert.Icon />
									<Alert.Content>
										<Alert.Title>Danger Will Robinson</Alert.Title>
										<Alert.DismissIconButton />
										<Alert.Description>
											Cupidatat ullamco commodo laborum consectetur ut mollit et
											nostrud amet elit ut Lorem culpa.
										</Alert.Description>
									</Alert.Content>
								</Alert.Root>
							</div>
							<div className="w-full max-w-screen-sm space-y-2">
								<p>
									Danger <Code>Alert</Code> without icon
								</p>
								<Alert.Root priority="danger">
									<Alert.Content>
										<Alert.Title>Danger Will Robinson</Alert.Title>
										<Alert.Description>
											Cupidatat ullamco commodo laborum consectetur ut mollit et
											nostrud amet elit ut Lorem culpa.
										</Alert.Description>
									</Alert.Content>
								</Alert.Root>
							</div>
							<div className="w-full max-w-screen-sm space-y-2">
								<p>
									Danger <Code>Alert</Code> with icon and no description
								</p>
								<Alert.Root priority="danger">
									<Alert.Icon />
									<Alert.Content>
										<Alert.Title>Danger Will Robinson</Alert.Title>
									</Alert.Content>
								</Alert.Root>
							</div>
							<div className="w-full max-w-screen-sm space-y-2">
								<p>
									Danger <Code>Alert</Code> without icon or description, but
									including <Code>AlertDismissIconButton</Code>.
								</p>
								<Alert.Root priority="danger">
									<Alert.Content>
										<Alert.Title>Danger Will Robinson</Alert.Title>
										<Alert.DismissIconButton />
									</Alert.Content>
								</Alert.Root>
							</div>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
									import { Alert } from "@ngrok/mantle/alert";

									// Danger Alert with icon and Dismiss Icon Button
									<Alert.Root priority="danger">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>Danger Will Robinson</Alert.Title>
											<Alert.DismissIconButton />
											<Alert.Description>This is a danger alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>

									// Danger Alert without icon
									<Alert.Root priority="danger">
										<Alert.Content>
											<Alert.Title>Danger Will Robinson</Alert.Title>
											<Alert.Description>This is a danger alert.</Alert.Description>
										</Alert.Content>
									</Alert.Root>

									// Danger Alert with icon and no description
									<Alert.Root priority="danger">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>Danger Will Robinson</Alert.Title>
										</Alert.Content>
									</Alert.Root>

									// Danger Alert without icon or description, but including a Dismiss Icon Button
									<Alert.Root priority="danger">
										<Alert.Content>
											<Alert.Title>Danger Will Robinson</Alert.Title>
											<Alert.DismissIconButton />
										</Alert.Content>
									</Alert.Root>
								`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="example-banners">
							<h3 className="text-xl font-medium text-strong">Banners</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						For banner-like alerts, use the <Code>appearance="banner"</Code>{" "}
						prop. This automatically removes the top, left, and right borders,
						leaving only the bottom border.
					</p>
					<div>
						<Example>
							<div className="border-card min-h-56 space-y-4 border">
								<Alert.Root priority="info" appearance="banner">
									<Alert.Icon />
									<Alert.Content>
										<Alert.Title>
											This is an info Alert as a page banner
										</Alert.Title>
									</Alert.Content>
								</Alert.Root>
								<div className="px-4">
									<Card.Root className="mx-auto max-w-screen-sm">
										<Card.Body>
											<p className="my-4">
												Laboris commodo Lorem anim consequat ut dolore proident.
											</p>
										</Card.Body>
									</Card.Root>
								</div>
							</div>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
									import { Alert } from "@ngrok/mantle/alert";

									<Alert.Root priority="info" appearance="banner">
										<Alert.Icon />
										<Alert.Content>
											<Alert.Title>This is an info Alert as a page banner</Alert.Title>
										</Alert.Content>
									</Alert.Root>
								`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<HashLinkHeading id="api">
						<h2 className="text-3xl font-medium text-strong">API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>Alert</Code> displays a callout for user attention and is
						composed of several sub-components.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-root">
							<h3 className="text-xl font-medium text-strong">Alert.Root</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							Displays a callout for user attention. Root container for all{" "}
							<Code>Alert</Code> sub-components.
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
							<PropNameCell name="appearance" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="default" />
									</li>
									<li>
										<StringPropType value="banner" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="default" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Controls the visual style of the <Code>Alert</Code>. "default"
									provides standard rounded corners and borders. "banner"
									creates a banner-style alert with no rounded corners, sticky
									positioning, and no top, left, or right borders.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="priority" />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="danger" />
									</li>
									<li>
										<StringPropType value="info" />
									</li>
									<li>
										<StringPropType value="success" />
									</li>
									<li>
										<StringPropType value="warning" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Indicates the importance or impact level of the{" "}
									<Code>Alert</Code>, affecting its color and styling to
									communicate its purpose to the user.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-content">
							<h3 className="text-xl font-medium text-strong">AlertContent</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The container for the content slot of an <Code>Alert</Code>. Place
							the <Code>AlertTitle</Code> and <Code>AlertDescription</Code> and{" "}
							<Code>AlertDismissIconButton</Code> as direct children.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML div attributes
							</Anchor>
						</p>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-description">
							<h3 className="text-xl font-medium text-strong">
								AlertDescription
							</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The optional description of an <Code>Alert</Code>. Renders as a{" "}
							<Code>div</Code> by default, but can be changed to any other
							element using the <Code>asChild</Code> prop.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML p attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
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
									<Code>AlertDescription</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-icon">
							<h3 className="text-xl font-medium text-strong">AlertIcon</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							An optional icon that visually represents the priority of the{" "}
							<Code>Alert</Code>. The default rendered icon be overridden with a
							custom icon using the <Code>svg</Code> prop.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML svg attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="svg" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									An optional icon that renders in place of the default icon for
									the <Code>Alert</Code> priority.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-title">
							<h3 className="text-xl font-medium text-strong">AlertTitle</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The title of an <Code>Alert</Code>. Default renders as an{" "}
							<Code>h5</Code> element; use <Code>asChild</Code> to render
							something else.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML h5 attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
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
									<Code>AlertTitle</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-dismiss-icon-button">
							<h3 className="text-xl font-medium text-strong">
								Alert.DismissIconButton
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A dismiss icon button that closes the alert when clicked.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								button
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
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
									<Code>Alert.DismissIconButton</Code> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
