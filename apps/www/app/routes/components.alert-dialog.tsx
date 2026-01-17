import { AlertDialog } from "@ngrok/mantle/alert-dialog";
import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { href } from "react-router";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.alert-dialog";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — AlertDialog" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="alert-dialog">Alert Dialog</PageHeader>
				<p className="font-body text-body text-xl">
					A modal dialog that interrupts the user with important content and expects a response.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<AlertDialog.Root priority="info">
							<AlertDialog.Trigger asChild>
								<Button type="button" appearance="outlined">
									Show Info Alert Dialog
								</Button>
							</AlertDialog.Trigger>
							<AlertDialog.Content>
								<AlertDialog.Icon />
								<AlertDialog.Body>
									<AlertDialog.Header>
										<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
										<AlertDialog.Description>
											Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
										</AlertDialog.Description>
									</AlertDialog.Header>
									<AlertDialog.Footer>
										<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
										<AlertDialog.Action type="button">Continue</AlertDialog.Action>
									</AlertDialog.Footer>
								</AlertDialog.Body>
							</AlertDialog.Content>
						</AlertDialog.Root>
						<AlertDialog.Root priority="danger">
							<AlertDialog.Trigger asChild>
								<Button type="button" appearance="outlined">
									Show Danger Alert Dialog
								</Button>
							</AlertDialog.Trigger>
							<AlertDialog.Content>
								<AlertDialog.Icon />
								<AlertDialog.Body>
									<AlertDialog.Header>
										<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
										<AlertDialog.Description>
											Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
										</AlertDialog.Description>
									</AlertDialog.Header>
									<AlertDialog.Footer>
										<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
										<AlertDialog.Action type="button">Continue</AlertDialog.Action>
									</AlertDialog.Footer>
								</AlertDialog.Body>
							</AlertDialog.Content>
						</AlertDialog.Root>

						<AlertDialog.Root priority="danger">
							<AlertDialog.Trigger asChild>
								<Button type="button" appearance="outlined">
									With a form
								</Button>
							</AlertDialog.Trigger>
							<AlertDialog.Content>
								<AlertDialog.Icon />
								<AlertDialog.Body>
									<AlertDialog.Header>
										<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
										<AlertDialog.Description>
											Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
										</AlertDialog.Description>
									</AlertDialog.Header>
									<AlertDialog.Footer>
										<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
										<form
											onSubmit={(event) => {
												event.preventDefault();
												window.alert("Form submitted!");
											}}
										>
											<AlertDialog.Action type="submit" className="w-full sm:w-fit">
												Continue
											</AlertDialog.Action>
										</form>
									</AlertDialog.Footer>
								</AlertDialog.Body>
							</AlertDialog.Content>
						</AlertDialog.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { AlertDialog } from "@ngrok/mantle/alert-dialog";
									import { Button } from "@ngrok/mantle/button";

									<AlertDialog.Root priority="info">
										<AlertDialog.Trigger asChild>
											<Button type="button" appearance="outlined">
												Show Info Alert Dialog
											</Button>
										</AlertDialog.Trigger>

										<AlertDialog.Content>
											<AlertDialog.Icon />
											<AlertDialog.Body>
												<AlertDialog.Header>
													<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
													<AlertDialog.Description>
														 Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
													</AlertDialog.Description>
												</AlertDialog.Header>
												<AlertDialog.Footer>
													<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
													<AlertDialog.Action type="button">Continue</AlertDialog.Action>
												</AlertDialog.Footer>
											</AlertDialog.Body>
										</AlertDialog.Content>
									</AlertDialog.Root>

									<AlertDialog.Root priority="danger">
										<AlertDialog.Trigger asChild>
											<Button type="button" appearance="outlined">
												With a form
											</Button>
										</AlertDialog.Trigger>
										<AlertDialog.Content>
											<AlertDialog.Icon />
											<AlertDialog.Body>
												<AlertDialog.Header>
													<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
													<AlertDialog.Description>
														 Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
													</AlertDialog.Description>
												</AlertDialog.Header>
												<AlertDialog.Footer>
													<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
													<form
														onSubmit={(event) => {
															event.preventDefault();
															window.alert("Form submitted!");
														}}
													>
														<AlertDialog.Action type="submit">Continue</AlertDialog.Action>
													</form>
												</AlertDialog.Footer>
											</AlertDialog.Body>
										</AlertDialog.Content>
									</AlertDialog.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api">
						<h2 className="text-3xl font-medium">API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>AlertDialog</Code> components are built on top of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog"
							target="_blank"
							rel="noopener noreferrer"
						>
							Radix Alert Dialog
						</Anchor>
						.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-dialog-root">
							<h3 className="text-xl font-medium text-strong">AlertDialog.Root</h3>
						</HashLinkHeading>

						<p className="font-body text-body">The root component for the Alert Dialog.</p>
						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#root"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Root
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
										<StringPropType value="info" />
									</li>
									<li>
										<StringPropType value="danger" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Indicates the importance or impact level of the AlertDialog, affecting its color
									and styling to communicate its purpose to the user.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-trigger">
						<h3 className="text-xl font-medium text-strong">AlertDialogTrigger</h3>
					</HashLinkHeading>

					<p className="font-body text-body">A button that opens the Alert Dialog.</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#trigger"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Trigger
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-dialog-content">
							<h3 className="text-xl font-medium text-strong">AlertDialogContent</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The popover Alert Dialog container. Renders on top of the overlay and is centered in
							the viewport.
						</p>
						<p className="font-body text-body">
							Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#content"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Content
							</Anchor>{" "}
							props, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="preferredWidth" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="max-w-md" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									The preferred width of the <Code>AlertDialogContent</Code> as a tailwind{" "}
									<Code>max-w-</Code> class.
								</p>
								<p>
									By default, a <Code>AlertDialogContent</Code>'s content width is responsive with a
									default <span className="italic">preferred width</span>: the maxiumum width of the{" "}
									<Code>AlertDialogContent</Code>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-body">
						<h3 className="text-xl font-medium text-strong">AlertDialogBody</h3>
					</HashLinkHeading>
					<p className="font-body text-body">Contains the main content of the alert dialog.</p>
					<p className="font-body text-body">
						The <Code>AlertDialogBody</Code> accepts the following props in addition to the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
							standard HTML div attributes
						</Anchor>
						.
					</p>
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
									Use the <Code>asChild</Code> prop to compose the <Code>AlertDialogBody</Code>{" "}
									styling and functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-header">
						<h3 className="text-xl font-medium text-strong">AlertDialogHeader</h3>
					</HashLinkHeading>
					<p className="font-body text-body">
						Contains the header content of the dialog, including the title and description.
					</p>
					<p className="font-body text-body">
						The <Code>AlertDialogHeader</Code> accepts the following props in addition to the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
							standard HTML div attributes
						</Anchor>
						.
					</p>
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
									Use the <Code>asChild</Code> prop to compose the <Code>AlertDialogHeader</Code>{" "}
									styling and functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-footer">
						<h3 className="text-xl font-medium text-strong">AlertDialogFooter</h3>
					</HashLinkHeading>
					<p className="font-body text-body">
						Contains the footer content of the dialog, including the action and cancel buttons.
					</p>
					<p className="font-body text-body">
						The <Code>AlertDialogFooter</Code> accepts the following props in addition to the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
							standard HTML div attributes
						</Anchor>
						.
					</p>
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
									Use the <Code>asChild</Code> prop to compose the <Code>AlertDialogFooter</Code>{" "}
									styling and functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-title">
						<h3 className="text-xl font-medium text-strong">AlertDialogTitle</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						An accessible name to be announced when the dialog is opened.
					</p>
					<p className="font-body text-body">
						Alternatively, you can provide <Code>aria-label</Code> or <Code>aria-labelledby</Code>{" "}
						to <Code>AlertDialogContent</Code> and exclude this component.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#title"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Title
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-description">
						<h3 className="text-xl font-medium text-strong">AlertDialogDescription</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						An accessible description to be announced when the dialog is opened. Renders as a{" "}
						<Code>div</Code> by default, but can be changed to any other element using the{" "}
						<Code>asChild</Code> prop.
					</p>
					<p className="font-body text-body">
						Alternatively, you can provide <Code>aria-describedby</Code> to{" "}
						<Code>AlertDialogContent</Code> and exclude this component.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#description"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Description
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-action">
						<h3 className="text-xl font-medium text-strong">AlertDialogAction</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						A button that confirms the Alert Dialog action. Will default to{" "}
						<Code>appearance="filled"</Code>, as well as the priority color from the{" "}
						<Code>AlertDialog</Code>. Does not close the alert dialog by default.
					</p>
					<p className="font-body text-body">
						These buttons should be distinguished visually from the <Code>AlertDialogCancel</Code>{" "}
						button.
					</p>
					<p className="font-body text-body">
						Composes around the mantle <Link to={href("/components/button")}>Button</Link>{" "}
						component.
					</p>
					<p className="font-body text-body">
						Same props as the <Link to={href("/components/button")}>Button</Link> component.
					</p>
				</section>

				<section className="space-y-2">
					<HashLinkHeading id="api-alert-dialog-cancel">
						<h3 className="text-xl font-medium text-strong">AlertDialogCancel</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						A button that closes the dialog and cancels the action. Will default to{" "}
						<Code>appearance="outlined"</Code> and <Code>priority="neutral"</Code>.
					</p>
					<p className="font-body text-body">
						This button should be distinguished visually from <Code>AlertDialogAction</Code>{" "}
						buttons.
					</p>
					<p className="font-body text-body">
						Composes around the mantle <Link to={href("/components/button")}>Button</Link>{" "}
						component.
					</p>
					<p className="font-body text-body">
						Same props as the <Link to={href("/components/button")}>Button</Link> component.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-dialog-icon">
							<h3 className="text-xl font-medium text-strong">AlertDialog.Icon</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							An icon displayed in the alert dialog, usually to indicate the type of alert.
						</p>

						<p className="font-body text-body">
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
									Use the <Code>asChild</Code> prop to compose the <Code>AlertDialog.Icon</Code>{" "}
									styling and functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-2">
						<HashLinkHeading id="api-alert-dialog-close">
							<h3 className="text-xl font-medium text-strong">AlertDialog.Close</h3>
						</HashLinkHeading>

						<p className="font-body text-body">A button that closes the dialog.</p>

						<p className="font-body text-body">
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
									Use the <Code>asChild</Code> prop to compose the <Code>AlertDialog.Close</Code>{" "}
									styling and functionality onto alternative element types or your own React
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
