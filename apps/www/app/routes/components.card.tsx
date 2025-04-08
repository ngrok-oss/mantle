import { Anchor } from "@ngrok/mantle/anchor";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ngrok/mantle/card";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
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
} from "~/components/props-table";
import type { Route } from "./+types/components.card";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Card" },
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
				<PageHeader id="card">Card</PageHeader>
				<p className="font-body text-body text-xl">
					A container used to display content in a box, resembling a physical
					card.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<Card>
							<CardBody>
								<p>Laborum in aute officia adipisicing elit velit.</p>
							</CardBody>
						</Card>
						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle>Card Title Here</CardTitle>
							</CardHeader>
							<CardBody>
								<p>Laborum in aute officia adipisicing elit velit.</p>
							</CardBody>
							<CardFooter>
								<p>Card footer</p>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Card Title Here</CardTitle>
							</CardHeader>
							<CardBody>
								<p>Laborum in aute officia adipisicing elit velit.</p>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<p>Laborum in aute officia adipisicing elit velit.</p>
							</CardBody>
							<CardFooter>
								<p>Card footer</p>
							</CardFooter>
						</Card>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
								import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";

								<Card>
									<CardBody>
										<p>Laborum in aute officia adipisicing elit velit.</p>
									</CardBody>
								</Card>

								<Card className="shadow-lg">
									<CardHeader>
										<CardTitle>Card Title Here</CardTitle>
									</CardHeader>
									<CardBody>
										<p>Laborum in aute officia adipisicing elit velit.</p>
									</CardBody>
									<CardFooter>
										<p>Card footer</p>
									</CardFooter>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Card Title Here</CardTitle>
									</CardHeader>
									<CardBody>
										<p>Laborum in aute officia adipisicing elit velit.</p>
									</CardBody>
								</Card>

								<Card>
									<CardBody>
										<p>Laborum in aute officia adipisicing elit velit.</p>
									</CardBody>
									<CardFooter>
										<p>Card footer</p>
									</CardFooter>
								</Card>
							`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium text-strong">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Card</InlineCode> is a container used to display
						content in a box, resembling a physical card. It is composed of
						several sub-components.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-card" className="text-xl font-medium">
							Card
						</h3>

						<p className="font-body text-body">
							A container that can be used to display content in a box
							resembling a physical card. The root component of the all{" "}
							<InlineCode>Card</InlineCode> sub-components. sub-components.
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
									<InlineCode>Card</InlineCode> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-card-body" className="text-xl font-medium">
							CardBody
						</h3>

						<p className="font-body text-body">
							The main content of a card. Usually composed as a direct child of
							a <InlineCode>Card</InlineCode> component.
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
									<InlineCode>CardBody</InlineCode> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-card-footer" className="text-xl font-medium">
							CardFooter
						</h3>

						<p className="font-body text-body">
							The footer container of a card. Usually composed as a direct child
							of a <InlineCode>Card</InlineCode> component.
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
									<InlineCode>CardFooter</InlineCode> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-card-header" className="text-xl font-medium">
							CardHeader
						</h3>

						<p className="font-body text-body">
							The header container of a card. Usually composed as a direct child
							of a <InlineCode>Card</InlineCode> component.
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
									<InlineCode>CardHeader</InlineCode> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-card-title" className="text-xl font-medium">
							CardTitle
						</h3>

						<p className="font-body text-body">
							The title of a card. Usually composed as a direct child of a
							<InlineCode>CardHeader</InlineCode> component. Renders as an{" "}
							<InlineCode>h3</InlineCode> element by default, but can be changed
							to any other element by using the <InlineCode>asChild</InlineCode>{" "}
							prop. It is preferred to use a heading element (
							<InlineCode>h1-h6</InlineCode>) for accessibility reasons.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								h1-h6
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
									<InlineCode>CardTitle</InlineCode> styling and functionality
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
