import { Accordion } from "@ngrok/mantle/accordion";
import { Badge } from "@ngrok/mantle/badge";
import { Button } from "@ngrok/mantle/button";
import { Card } from "@ngrok/mantle/card";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Separator } from "@ngrok/mantle/separator";
import { PlusIcon } from "@phosphor-icons/react/Plus";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.preview.accordion";

// import {
// 	PropDefaultValueCell,
// 	PropDescriptionCell,
// 	PropNameCell,
// 	PropRow,
// 	PropsTable,
// 	PropTypeCell,
// 	StringPropType,
// } from "~/components/props-table";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Accordion" },
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
				<PageHeader id="accordion" isPreview>
					Accordion
				</PageHeader>
				<p className="font-body text-body text-xl">
					A vertically stacked set of interactive headings that each reveal an
					associated section of content.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<Accordion
							type="multiple"
							defaultValue={["on_tcp_connect", "on_http_response"]}
						>
							<Accordion.Item value="on_tcp_connect">
								<Accordion.Heading
									className="mx-4 flex items-center gap-2"
									asChild
								>
									<h2>
										<Accordion.Trigger>
											<span className="font-mono text-sm font-medium">
												on_tcp_connect
											</span>
											<Badge
												appearance="muted"
												color="neutral"
												className="rounded-full"
											>
												3
											</Badge>
											<Accordion.TriggerIcon />
										</Accordion.Trigger>
										<Separator orientation="horizontal" className="flex-1" />
										<Button type="button" appearance="link" icon={<PlusIcon />}>
											<span className="xs:inline hidden">Add Rule</span>
										</Button>
									</h2>
								</Accordion.Heading>
								<Accordion.Content>
									<Card>
										<Card.Body>
											Proident irure consequat Lorem incididunt ullamco.
										</Card.Body>
									</Card>
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="on_http_request">
								<Accordion.Heading
									className="mx-4 flex items-center gap-2"
									asChild
								>
									<h2>
										<Accordion.Trigger>
											<span className="font-mono text-sm font-medium">
												on_http_request
											</span>
											<Badge
												appearance="muted"
												color="neutral"
												className="rounded-full"
											>
												2
											</Badge>
											<Accordion.TriggerIcon />
										</Accordion.Trigger>
										<Separator orientation="horizontal" className="flex-1" />
										<Button type="button" appearance="link" icon={<PlusIcon />}>
											<span className="xs:inline hidden">Add Rule</span>
										</Button>
									</h2>
								</Accordion.Heading>
								<Accordion.Content>
									<Card>
										<Card.Body>
											Excepteur amet laboris occaecat anim minim reprehenderit.
										</Card.Body>
									</Card>
								</Accordion.Content>
							</Accordion.Item>
							<Accordion.Item value="on_http_response">
								<Accordion.Heading
									className="mx-4 flex items-center gap-2"
									asChild
								>
									<h2>
										<Accordion.Trigger>
											<span className="font-mono text-sm font-medium">
												on_http_response
											</span>
											<Badge
												appearance="muted"
												color="neutral"
												className="rounded-full"
											>
												0
											</Badge>
											<Accordion.TriggerIcon />
										</Accordion.Trigger>
										<Separator orientation="horizontal" className="flex-1" />
										<Button type="button" appearance="link" icon={<PlusIcon />}>
											<span className="xs:inline hidden">Add Rule</span>
										</Button>
									</h2>
								</Accordion.Heading>
								<Accordion.Content>
									<p className="text-center">
										This phase does not have any rules defined
									</p>
								</Accordion.Content>
							</Accordion.Item>
						</Accordion>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Accordion } from "@ngrok/mantle/accordion";
									import { Badge } from "@ngrok/mantle/badge";
									import { Button } from "@ngrok/mantle/button";
									import { Card } from "@ngrok/mantle/card";

									<Accordion type="multiple" defaultValue={["on_tcp_connect", "on_http_response"]}>
										<Accordion.Item value="on_tcp_connect">
											<Accordion.Heading className="mx-4 flex items-center gap-2" asChild>
												<h2>
													<Accordion.Trigger>
														<span className="font-mono text-sm font-medium">on_tcp_connect</span>
														<Badge appearance="muted" color="neutral" className="rounded-full">
															3
														</Badge>
														<Accordion.TriggerIcon />
													</Accordion.Trigger>
													<Separator orientation="horizontal" className="flex-1" />
													<Button type="button" appearance="link" icon={<PlusIcon />}>
														Add Rule
													</Button>
												</h2>
											</Accordion.Heading>
											<Accordion.Content>
												<Card>
													<Card.Body>Proident irure consequat Lorem incididunt ullamco.</Card.Body>
												</Card>
											</Accordion.Content>
										</Accordion.Item>
										<Accordion.Item value="on_http_request">
											<Accordion.Heading className="mx-4 flex items-center gap-2" asChild>
												<h2>
													<Accordion.Trigger>
														<span className="font-mono text-sm font-medium">on_http_request</span>
														<Badge appearance="muted" color="neutral" className="rounded-full">
															2
														</Badge>
														<Accordion.TriggerIcon />
													</Accordion.Trigger>
													<Separator orientation="horizontal" className="flex-1" />
													<Button type="button" appearance="link" icon={<PlusIcon />}>
														Add Rule
													</Button>
												</h2>
											</Accordion.Heading>
											<Accordion.Content>
												<Card>
													<Card.Body>Excepteur amet laboris occaecat anim minim reprehenderit.</Card.Body>
												</Card>
											</Accordion.Content>
										</Accordion.Item>
										<Accordion.Item value="on_http_response">
											<Accordion.Heading className="mx-4 flex items-center gap-2" asChild>
												<h2>
													<Accordion.Trigger>
														<span className="font-mono text-sm font-medium">on_http_response</span>
														<Badge appearance="muted" color="neutral" className="rounded-full">
															0
														</Badge>
														<Accordion.TriggerIcon />
													</Accordion.Trigger>
													<Separator orientation="horizontal" className="flex-1" />
													<Button type="button" appearance="link" icon={<PlusIcon />}>
														Add Rule
													</Button>
												</h2>
											</Accordion.Heading>
											<Accordion.Content>
												<p className="text-center">This phase does not have any rules defined</p>
											</Accordion.Content>
										</Accordion.Item>
									</Accordion>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock>
				</div>
			</section>

			{/* <section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>AlertDialog</InlineCode> components are built on top of{" "}
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
					<header className="space-y-1">
						<h3 className="text-xl font-medium text-strong">AlertDialog</h3>

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
									Indicates the importance or impact level of the AlertDialog, affecting its color and styling to
									communicate its purpose to the user.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogTrigger</h3>

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

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogContent</h3>

					<p className="font-body text-body">
						The popover Alert Dialog container. Renders on top of the overlay and is centered in the viewport.
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
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogHeader</h3>

					<p className="font-body text-body">
						Contains the header content of the dialog, including the title and description.
					</p>
					<p className="font-body text-body">
						Same props as a <InlineCode>{"<div>"}</InlineCode> element.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogFooter</h3>

					<p className="font-body text-body">
						Contains the footer content of the dialog, including the action and cancel buttons.
					</p>
					<p className="font-body text-body">
						Same props as a <InlineCode>{"<div>"}</InlineCode> element.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogTitle</h3>

					<p className="font-body text-body">An accessible name to be announced when the dialog is opened.</p>
					<p className="font-body text-body">
						Alternatively, you can provide <InlineCode>aria-label</InlineCode> or{" "}
						<InlineCode>aria-labelledby</InlineCode> to <InlineCode>AlertDialogContent</InlineCode> and exclude this
						component.
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

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogDescription</h3>

					<p className="font-body text-body">An accessible description to be announced when the dialog is opened.</p>
					<p className="font-body text-body">
						Alternatively, you can provide <InlineCode>aria-describedby</InlineCode> to{" "}
						<InlineCode>AlertDialogContent</InlineCode> and exclude this component.
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

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogAction</h3>

					<p className="font-body text-body">
						A button that confirms the Alert Dialog action. Will default to <InlineCode>appearance="filled"</InlineCode>
						, as well as the priority color from the <InlineCode>AlertDialog</InlineCode>. Does not close the alert
						dialog by default.
					</p>
					<p className="font-body text-body">
						These buttons should be distinguished visually from the <InlineCode>AlertDialogCancel</InlineCode> button.
					</p>
					<p className="font-body text-body">
						Composes around the mantle <Link to="/components/button">Button</Link> component.
					</p>
					<p className="font-body text-body">
						Same props as the <Link to="/components/button">Button</Link> component.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium text-strong">AlertDialogCancel</h3>

					<p className="font-body text-body">
						A button that closes the dialog and cancels the action. Will default to{" "}
						<InlineCode>appearance="outlined"</InlineCode> and <InlineCode>priority="neutral"</InlineCode>.
					</p>
					<p className="font-body text-body">
						This button should be distinguished visually from <InlineCode>AlertDialogAction</InlineCode> buttons.
					</p>
					<p className="font-body text-body">
						Composes around the mantle <Link to="/components/button">Button</Link> component.
					</p>
					<p className="font-body text-body">
						Same props as the <Link to="/components/button">Button</Link> component.
					</p>
				</section>
			</section> */}
		</div>
	);
}
