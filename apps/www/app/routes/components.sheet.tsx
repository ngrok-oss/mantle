import { Anchor } from "@ngrok/mantle/anchor";
import { Button, IconButton } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Separator } from "@ngrok/mantle/separator";
import { Sheet } from "@ngrok/mantle/sheet";
import { ListMagnifyingGlassIcon } from "@phosphor-icons/react/ListMagnifyingGlass";
import { TerminalWindowIcon } from "@phosphor-icons/react/TerminalWindow";
import { TrashSimpleIcon } from "@phosphor-icons/react/TrashSimple";
import { useState } from "react";
import { Link, href } from "react-router";
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
import type { Route } from "./+types/components.sheet";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Sheet" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="sheet">Sheet</PageHeader>
				<p className="font-body text-body text-xl">
					A container that overlays the current view from the edge of the screen. It is a
					lightweight way of allowing users to complete a task without losing contextual information
					of the view beneath it.
				</p>

				<div>
					<Example>
						<Sheet.Root>
							<Sheet.Trigger asChild>
								<Button type="button" appearance="filled">
									Open Sheet
								</Button>
							</Sheet.Trigger>
							<Sheet.Content>
								<Sheet.Header>
									<Sheet.TitleGroup>
										<Sheet.Title>Are you absolutely sure?</Sheet.Title>
										<Sheet.Actions>
											<IconButton
												appearance="ghost"
												type="button"
												icon={<TerminalWindowIcon />}
												label="Start a Tunnel"
											/>
											<IconButton
												appearance="ghost"
												type="button"
												icon={<ListMagnifyingGlassIcon />}
												label="See Traffic"
											/>
											<IconButton
												appearance="ghost"
												type="button"
												icon={<TrashSimpleIcon />}
												label="Delete"
											/>
											<Separator orientation="vertical" className="h-[80%]" />
											<Sheet.CloseIconButton />
										</Sheet.Actions>
									</Sheet.TitleGroup>
									<Sheet.Description>
										This action cannot be undone. This will permanently delete your account and
										remove your data from our servers.
									</Sheet.Description>
								</Sheet.Header>
								<Sheet.Body className="space-y-4">
									<p>
										Consequat do voluptate culpa fugiat consequat nostrud duis aliqua minim. Tempor
										voluptate cillum elit velit. Voluptate aliqua ipsum aliqua dolore in nisi ea
										fugiat aliqua velit proident amet.
									</p>
									<p>
										Et aliquip fugiat laborum id enim velit exercitation tempor irure pariatur
										commodo dolor tempor eu. Consectetur sunt est occaecat quis eiusmod ea cillum
										sunt sunt labore consequat aute. Aute ad anim do et enim nisi adipisicing sunt
										culpa magna reprehenderit. Reprehenderit dolor elit cupidatat veniam dolore.
										Consectetur occaecat ea est elit ipsum.
									</p>
									<p>
										Est pariatur exercitation commodo in veniam enim dolor. Labore consequat
										cupidatat ipsum enim deserunt exercitation ipsum Lorem. Ea dolor adipisicing et
										labore Lorem.
									</p>
									<p>
										Incididunt culpa proident qui in. Nulla do quis pariatur veniam est
										reprehenderit dolore. Occaecat consectetur incididunt incididunt commodo cillum
										amet aliqua id pariatur sunt. Laborum amet magna id sunt. Nulla nisi minim et eu
										incididunt irure fugiat laboris labore nostrud eiusmod irure adipisicing.
										Exercitation pariatur voluptate occaecat anim irure ad tempor est. Do culpa
										culpa occaecat ut pariatur elit do exercitation consectetur sint aliqua
										voluptate.
									</p>
									<p>
										Culpa Lorem fugiat mollit est velit enim fugiat reprehenderit consequat eu.
										Commodo eiusmod irure anim culpa consequat in commodo ad nostrud amet pariatur.
										Eiusmod velit qui reprehenderit consequat proident esse amet consequat.
										Exercitation nostrud laborum labore anim nulla consequat elit quis ullamco nisi
										minim. Voluptate aliqua magna eu proident qui ipsum officia laboris. Ad veniam
										eiusmod mollit laborum sit pariatur do eu nostrud quis. Adipisicing ea labore
										duis laboris ex aute ea ut magna sit nisi dolor.
									</p>
									<p>
										Amet adipisicing quis fugiat cillum do commodo culpa deserunt minim. Fugiat enim
										veniam ex ullamco minim laboris labore culpa occaecat ut exercitation occaecat
										culpa quis. Veniam quis velit enim id veniam nisi non consequat laboris.
										Reprehenderit fugiat nostrud voluptate esse et nulla mollit eiusmod veniam sunt
										adipisicing. Aute quis mollit non quis ullamco consectetur labore quis do
										occaecat. Veniam id laboris adipisicing fugiat.
									</p>
								</Sheet.Body>
								<Sheet.Footer>
									<Sheet.Close asChild>
										<Button type="button">Close</Button>
									</Sheet.Close>
									<Button type="button" appearance="filled">
										Save
									</Button>
								</Sheet.Footer>
							</Sheet.Content>
						</Sheet.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Button, IconButton } from "@ngrok/mantle/button";
									import { Separator } from "@ngrok/mantle/separator";
									import { Sheet } from "@ngrok/mantle/sheet";
									import { ListMagnifyingGlassIcon } from "@phosphor-icons/react/ListMagnifyingGlass";
									import { TerminalWindowIcon } from "@phosphor-icons/react/TerminalWindow";
									import { TrashSimpleIcon } from "@phosphor-icons/react/TrashSimple";

									<Sheet.Root>
										<Sheet.Trigger asChild>
											<Button type="button" appearance="filled">Open Sheet</Button>
										</Sheet.Trigger>
										<Sheet.Content>
											<Sheet.Header>
												<Sheet.TitleGroup>
													<Sheet.Title>Are you absolutely sure?</Sheet.Title>
													<Sheet.Actions>
														<IconButton appearance="ghost" type="button" icon={<TerminalWindowIcon />} label="Start a Tunnel" />
														<IconButton appearance="ghost" type="button" icon={<ListMagnifyingGlassIcon />} label="See Traffic" />
														<IconButton appearance="ghost" type="button" icon={<TrashSimpleIcon />} label="Delete" />
														<Separator orientation="vertical" className="h-[80%]" />
														<Sheet.CloseIconButton />
													</Sheet.Actions>
												</Sheet.TitleGroup>
												<Sheet.Description>
													This action cannot be undone. This will permanently delete your account and remove your data from our
													servers.
												</Sheet.Description>
											</Sheet.Header>
											<Sheet.Body className="space-y-4">
												<p>
													Lorem ipsum
												</p>
											</Sheet.Body>
											<Sheet.Footer>
												<Sheet.Close asChild>
													<Button type="button">Close</Button>
												</Sheet.Close>
											</Sheet.Footer>
										</Sheet.Content>
									</Sheet.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="examples" className="text-3xl font-medium">
						<h2>Examples</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="router-or-state-management-controlled-sheet"
							className="text-xl font-medium text-strong"
						>
							<h3>Router or state management controlled Sheet</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							You can control when to render a Sheet with a router or via outside state management.
							This will allow you to open and close the Sheet programmatically without using a{" "}
							<Code>Sheet.Trigger</Code>.
						</p>
					</header>
					<div>
						<Example>
							<WithoutTriggerExample />
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { Button } from "@ngrok/mantle/button";
										import { Sheet } from "@ngrok/mantle/sheet";
										import { useNavigate } from "react-router";
										
										// this is a react-router route module component export
										export default function Component() {
											const navigate = useNavigate();

											return (
												<Sheet.Root open onOpenChange={() => navigate("..")}>
													<Sheet.Content>
														<Sheet.Header>
															<Sheet.TitleGroup>
																<Sheet.Title>A controlled Sheet</Sheet.Title>
																<Sheet.Actions>
																	<Sheet.CloseIconButton />
																</Sheet.Actions>
															</Sheet.TitleGroup>
															<Sheet.Description>
																This sheet is controlled by a router or state manager.
															</Sheet.Description>
														</Sheet.Header>
														<Sheet.Body>
															<p>
																Consequat do voluptate culpa fugiat consequat nostrud duis
																aliqua minim. Tempor voluptate cillum elit velit. Voluptate
																aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
																proident amet.
															</p>
														</Sheet.Body>
														<Sheet.Footer>
															<Sheet.Close asChild>
																<Button type="button">Close</Button>
															</Sheet.Close>
														</Sheet.Footer>
													</Sheet.Content>
												</Sheet.Root>
											);
										}
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="setting-a-preferred-width-of-the-sheet"
							className="text-xl font-medium text-strong"
						>
							<h3>Setting a preferred width of the Sheet</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							By default, a <Code>Sheet</Code>'s content width is responsive with a default{" "}
							<span className="italic">preferred width</span>: the maximum width of the{" "}
							<Code>Sheet.Content</Code> when the window viewport is larger than the mobile
							breakpoint (<Code>sm</Code>). You can control the preferred width of the{" "}
							<Code>Sheet.Content</Code> by using the <Code>preferredWidth</Code> prop:
						</p>
					</header>
					<div>
						<Example>
							<Sheet.Root>
								<Sheet.Trigger asChild>
									<Button type="button" appearance="filled">
										Open 800px wide Sheet
									</Button>
								</Sheet.Trigger>
								<Sheet.Content preferredWidth="sm:max-w-[800px]">
									<Sheet.Header>
										<Sheet.TitleGroup>
											<Sheet.Title>Tempor pariatur fugiat fugiat cupidatat velit.</Sheet.Title>
											<Sheet.Actions>
												<Sheet.CloseIconButton />
											</Sheet.Actions>
										</Sheet.TitleGroup>
									</Sheet.Header>
									<Sheet.Body className="space-y-4">
										<p>
											Consequat do voluptate culpa fugiat consequat nostrud duis aliqua minim.
											Tempor voluptate cillum elit velit. Voluptate aliqua ipsum aliqua dolore in
											nisi ea fugiat aliqua velit proident amet.
										</p>
									</Sheet.Body>
									<Sheet.Footer>
										<Sheet.Close asChild>
											<Button type="button">Close</Button>
										</Sheet.Close>
										<Button type="button" appearance="filled">
											Save
										</Button>
									</Sheet.Footer>
								</Sheet.Content>
							</Sheet.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { Button } from "@ngrok/mantle/button";
										import { Sheet } from "@ngrok/mantle/sheet";
										
										<Sheet.Root>
											<Sheet.Trigger asChild>
												<Button type="button" appearance="filled">
													Open 800px wide Sheet
												</Button>
											</Sheet.Trigger>
											{/* using the 👇 \`preferredWidth\` prop */}
											<Sheet.Content preferredWidth="sm:max-w-[800px]">
												<Sheet.Header>
													<Sheet.TitleGroup>
														<Sheet.Title>
															Tempor pariatur fugiat fugiat cupidatat velit.
														</Sheet.Title>
														<Sheet.Actions>
															<Sheet.CloseIconButton />
														</Sheet.Actions>
													</Sheet.TitleGroup>
												</Sheet.Header>
												<Sheet.Body className="space-y-4">
													<p>
														Consequat do voluptate culpa fugiat consequat nostrud duis
														aliqua minim. Tempor voluptate cillum elit velit.
														Voluptate aliqua ipsum aliqua dolore in nisi ea fugiat
														aliqua velit proident amet.
													</p>
												</Sheet.Body>
												<Sheet.Footer>
													<Sheet.Close asChild>
														<Button type="button">Close</Button>
													</Sheet.Close>
													<Button type="button" appearance="filled">
														Save
													</Button>
												</Sheet.Footer>
											</Sheet.Content>
										</Sheet.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api" className="text-3xl font-medium">
						<h2>API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>Sheet</Code> components are built on top of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog"
							target="_blank"
							rel="noopener noreferrer"
						>
							Radix Dialog
						</Anchor>
						.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-sheet" className="text-xl font-medium text-strong">
							<h3>Sheet</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The root component for a <Code>Sheet</Code>. Should compose the{" "}
							<Code>Sheet.Trigger</Code> and <Code>Sheet.Content</Code>. Acts as a stateful provider
							for the Sheet's open/closed state.
						</p>

						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#root"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Root
							</Anchor>
							.
						</p>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-sheet-trigger" className="text-xl font-medium text-strong">
							<h3>SheetTrigger</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The button trigger for a <Code>Sheet</Code>. Should be rendered as a child of the{" "}
							<Code>Sheet</Code> component. Renders an unstyled <Code>button</Code> by default, but
							can be customized with the <Code>asChild</Code> prop.
						</p>

						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#trigger"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Trigger
							</Anchor>
							.
						</p>
					</header>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-sheet-close" className="text-xl font-medium text-strong">
						<h3>SheetClose</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						The close button for a <Code>Sheet</Code>. Should be rendered as a child of the{" "}
						<Code>Sheet.Content</Code> component. Usually contained within the{" "}
						<Code>Sheet.Footer</Code> component. Renders an unstyled <Code>button</Code> by default,
						but can be customized with the <Code>asChild</Code> prop.
					</p>

					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#close"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Close
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-sheet-content" className="text-xl font-medium text-strong">
							<h3>SheetContent</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The main container for a <Code>Sheet</Code>. Should be rendered as a child of the{" "}
							<Code>Sheet</Code> component. Renders on top of the overlay backdrop. Should contain
							the <Code>Sheet.Header</Code>, <Code>Sheet.Body</Code>, and <Code>Sheet.Footer</Code>.
						</p>

						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#content"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Content
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="preferredWidth" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="sm:max-w-[30rem]" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									The preferred width of the <Code>Sheet.Content</Code> as a tailwind{" "}
									<Code>max-w-</Code> class.
								</p>
								<p>
									By default, a <Code>Sheet</Code>'s content width is responsive with a default{" "}
									<span className="italic">preferred width</span>: the maxiumum width of the{" "}
									<Code>Sheet.Content</Code> when the window viewport is larger than the mobile
									breakpoint (<Code>sm</Code>).
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="side" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="top" />
									</li>
									<li>
										<StringPropType value="bottom" />
									</li>
									<li>
										<StringPropType value="left" />
									</li>
									<li>
										<StringPropType value="right" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="right" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>The side of the screen from which the sheet will animate in from.</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<HashLinkHeading
						id="api-sheet-close-icon-button"
						className="text-xl font-medium text-strong"
					>
						<h3>SheetCloseIconButton</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						An icon button that closes the <Code>Sheet</Code> when clicked. Should be rendered
						within the <Code>Sheet.Header</Code> as a child of <Code>SheetActions</Code>.
					</p>

					<p className="font-body text-body">
						Same props as the <Link to={href("/components/icon-button")}>Mantle IconButton</Link>.
					</p>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-sheet-body" className="text-xl font-medium text-strong">
						<h3>SheetBody</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						The body container for a <Code>Sheet</Code>. This is where you would typically place the
						main content of the sheet, such as forms or text. Should be rendered as a child of{" "}
						<Code>Sheet.Content</Code>.
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
						.
					</p>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-sheet-header" className="text-xl font-medium text-strong">
						<h3>SheetHeader</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						The header container for a <Code>Sheet</Code>. This is where you would typically place
						the title, description, and actions. Should be rendered as a child of{" "}
						<Code>Sheet.Content</Code>.
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
						.
					</p>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-sheet-footer" className="text-xl font-medium text-strong">
						<h3>SheetFooter</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						The footer container for a <Code>Sheet</Code>. This is where you would typically place
						close and submit buttons. Should be rendered as a child of
						<Code>Sheet.Content</Code>.
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
						.
					</p>
				</section>

				<section className="space-y-4">
					<HashLinkHeading id="api-sheet-title" className="text-xl font-medium text-strong">
						<h3>SheetTitle</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						The title for a <Code>Sheet</Code>. Typically rendered as a child of{" "}
						<Code>SheetTitleGroup</Code>. Defaults to an <Code>h2</Code> element, but can be changed
						via the <Code>asChild</Code> prop.
					</p>

					<p className="font-body text-body">
						All props from Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#title"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Title
						</Anchor>
						.
					</p>
				</section>

				<section className="space-y-4">
					<HashLinkHeading id="api-sheet-title-group" className="text-xl font-medium text-strong">
						<h3>SheetTitleGroup</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						A group container for the title and actions of a <Code>Sheet</Code>. Typically rendered
						as a child of <Code>Sheet.Header</Code>.
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
						.
					</p>
				</section>

				<section className="space-y-4">
					<HashLinkHeading id="api-sheet-description" className="text-xl font-medium text-strong">
						<h3>SheetDescription</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						A description for a <Code>Sheet</Code>. Typically rendered as a child of{" "}
						<Code>Sheet.Header</Code>.
					</p>

					<p className="font-body text-body">
						All props from Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#description"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Description
						</Anchor>
						.
					</p>
				</section>

				<section className="space-y-4">
					<HashLinkHeading id="api-sheet-actions" className="text-xl font-medium text-strong">
						<h3>SheetActions</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						A group container for the actions of a <Code>Sheet</Code>. Typically rendered as a child
						of <Code>SheetTitleGroup</Code>.
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
						.
					</p>
				</section>
			</section>
		</div>
	);
}

function WithoutTriggerExample() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button type="button" onClick={() => setIsOpen(true)}>
				Open Sheet
			</Button>
			{isOpen && ( // 👈 this could be controlled by a router or state manager
				<Sheet.Root open onOpenChange={() => setIsOpen(false)}>
					<Sheet.Content>
						<Sheet.Header>
							<Sheet.TitleGroup>
								<Sheet.Title>A controlled Sheet</Sheet.Title>
								<Sheet.Actions>
									<Sheet.CloseIconButton />
								</Sheet.Actions>
							</Sheet.TitleGroup>
							<Sheet.Description>
								This sheet is controlled by a router or state manager.
							</Sheet.Description>
						</Sheet.Header>
						<Sheet.Body>
							<p>
								Consequat do voluptate culpa fugiat consequat nostrud duis aliqua minim. Tempor
								voluptate cillum elit velit. Voluptate aliqua ipsum aliqua dolore in nisi ea fugiat
								aliqua velit proident amet.
							</p>
						</Sheet.Body>
						<Sheet.Footer>
							<Sheet.Close asChild>
								<Button type="button">Close</Button>
							</Sheet.Close>
						</Sheet.Footer>
					</Sheet.Content>
				</Sheet.Root>
			)}
		</>
	);
}
