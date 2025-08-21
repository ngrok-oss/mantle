import { Alert } from "@ngrok/mantle/alert";
import { Anchor } from "@ngrok/mantle/anchor";
import { Card } from "@ngrok/mantle/card";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
import { Example } from "~/components/example";
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
		{ title: "@ngrok/mantle — Alert" },
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
					<h2 id="examples" className="text-3xl font-medium">
						Examples
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="example-composition"
							className="text-xl font-medium text-strong"
						>
							Composition
						</h3>
					</header>
					<p className="font-body text-body text-xl">
						You can mix and match what you put inside the{" "}
						<InlineCode>Alert</InlineCode> component to create different types
						of Alert layouts.
					</p>
					<div>
						<Example className="flex-col gap-4">
							<div className="w-full max-w-screen-sm space-y-2">
								<p>
									Danger <InlineCode>Alert</InlineCode> with icon and{" "}
									<InlineCode>AlertDismissIconButton</InlineCode>
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
									Danger <InlineCode>Alert</InlineCode> without icon
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
									Danger <InlineCode>Alert</InlineCode> with icon and no
									description
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
									Danger <InlineCode>Alert</InlineCode> without icon or
									description, but including{" "}
									<InlineCode>AlertDismissIconButton</InlineCode>.
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
						<h3
							id="example-banners"
							className="text-xl font-medium text-strong"
						>
							Banners
						</h3>
					</header>

					<p className="font-body text-body text-xl">
						For banner-like alerts, set <InlineCode>rounded-none</InlineCode> on
						the <InlineCode>Alert</InlineCode> component.
					</p>
					<div>
						<Example>
							<div className="border-card min-h-56 space-y-4 border">
								<Alert.Root priority="info" className="rounded-none">
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

									<Alert.Root priority="info" className="rounded-none">
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
					<p className="font-body text-body text-xl">
						Depending on the context, you may want or need to remove all borders
						except the bottom one. This can be achieved by adding{" "}
						<InlineCode>rounded-none border-x-0 border-t-0</InlineCode> to the{" "}
						<InlineCode>Alert</InlineCode> component.
					</p>
					<div>
						<Example>
							<div className="border-card min-h-56 space-y-4 border">
								<Alert.Root
									priority="info"
									className="rounded-none border-x-0 border-t-0"
								>
									<Alert.Icon />
									<Alert.Content>
										<Alert.Title>
											This is an info Alert as a page banner with only a bottom
											border
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

									<Alert.Root priority="info" className="rounded-none border-x-0 border-t-0">
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
					<h2 id="api" className="text-3xl font-medium text-strong">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Alert</InlineCode> displays a callout for user
						attention and is composed of several sub-components.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-alert" className="text-xl font-medium text-strong">
							<span id="api-alert-root" />
							Alert
						</h3>

						<p className="font-body text-body">
							Displays a callout for user attention. Root container for all{" "}
							<InlineCode>Alert</InlineCode> sub-components.
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
							<PropNameCell name="priority" />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="danger" />
									</li>
									<li>
										<StringPropType value="info" />
									</li>
									{/* <li>
										<StringPropType value="neutral" />
									</li> */}
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
									<InlineCode>Alert</InlineCode>, affecting its color and
									styling to communicate its purpose to the user.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-alert-content"
							className="text-xl font-medium text-strong"
						>
							AlertContent
						</h3>
						<p className="font-body text-body">
							The container for the content slot of an{" "}
							<InlineCode>Alert</InlineCode>. Place the{" "}
							<InlineCode>AlertTitle</InlineCode> and{" "}
							<InlineCode>AlertDescription</InlineCode> and{" "}
							<InlineCode>AlertDismissIconButton</InlineCode> as direct
							children.
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
					<header className="space-y-1">
						<h3
							id="api-alert-description"
							className="text-xl font-medium text-strong"
						>
							AlertDescription
						</h3>
						<p className="font-body text-body">
							The optional description of an <InlineCode>Alert</InlineCode>.
							Renders as a <InlineCode>div</InlineCode> by default, but can be
							changed to any other element using the{" "}
							<InlineCode>asChild</InlineCode> prop.
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
									Use the <InlineCode>asChild</InlineCode> prop to compose the{" "}
									<InlineCode>AlertDescription</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-alert-icon" className="text-xl font-medium text-strong">
							AlertIcon
						</h3>
						<p className="font-body text-body">
							An optional icon that visually represents the priority of the{" "}
							<InlineCode>Alert</InlineCode>. The default rendered icon be
							overridden with a custom icon using the{" "}
							<InlineCode>svg</InlineCode> prop.
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
									the <InlineCode>Alert</InlineCode> priority.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-alert-title"
							className="text-xl font-medium text-strong"
						>
							AlertTitle
						</h3>
						<p className="font-body text-body">
							The title of an <InlineCode>Alert</InlineCode>. Default renders as
							an <InlineCode>h5</InlineCode> element; use{" "}
							<InlineCode>asChild</InlineCode> to render something else.
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
									Use the <InlineCode>asChild</InlineCode> prop to compose the{" "}
									<InlineCode>AlertTitle</InlineCode> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-alert-dismiss-icon-button"
							className="text-xl font-medium text-strong"
						>
							Alert.DismissIconButton
						</h3>

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
									Use the <InlineCode>asChild</InlineCode> prop to compose the{" "}
									<InlineCode>Alert.DismissIconButton</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
