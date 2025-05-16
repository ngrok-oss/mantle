import { Anchor } from "@ngrok/mantle/anchor";
import { Button, IconButton } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Separator } from "@ngrok/mantle/separator";
import {
	Sheet,
	SheetActions,
	SheetBody,
	SheetClose,
	SheetCloseIconButton,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTitleGroup,
	SheetTrigger,
} from "@ngrok/mantle/sheet";
import { ListMagnifyingGlassIcon } from "@phosphor-icons/react";
import { TerminalWindowIcon } from "@phosphor-icons/react";
import { TrashSimpleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, href } from "react-router";
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
import type { Route } from "./+types/components.sheet";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Sheet" },
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
				<PageHeader id="sheet">Sheet</PageHeader>
				<p className="font-body text-body text-xl">
					A container that overlays the current view from the edge of the
					screen. It is a lightweight way of allowing users to complete a task
					without losing contextual information of the view beneath it.
				</p>

				<div>
					<Example>
						<Sheet>
							<SheetTrigger asChild>
								<Button type="button" appearance="filled">
									Open Sheet
								</Button>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitleGroup>
										<SheetTitle>Are you absolutely sure?</SheetTitle>
										<SheetActions>
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
											<SheetCloseIconButton />
										</SheetActions>
									</SheetTitleGroup>
									<SheetDescription>
										This action cannot be undone. This will permanently delete
										your account and remove your data from our servers.
									</SheetDescription>
								</SheetHeader>
								<SheetBody className="space-y-4">
									<p>
										Consequat do voluptate culpa fugiat consequat nostrud duis
										aliqua minim. Tempor voluptate cillum elit velit. Voluptate
										aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
										proident amet.
									</p>
									<p>
										Et aliquip fugiat laborum id enim velit exercitation tempor
										irure pariatur commodo dolor tempor eu. Consectetur sunt est
										occaecat quis eiusmod ea cillum sunt sunt labore consequat
										aute. Aute ad anim do et enim nisi adipisicing sunt culpa
										magna reprehenderit. Reprehenderit dolor elit cupidatat
										veniam dolore. Consectetur occaecat ea est elit ipsum.
									</p>
									<p>
										Est pariatur exercitation commodo in veniam enim dolor.
										Labore consequat cupidatat ipsum enim deserunt exercitation
										ipsum Lorem. Ea dolor adipisicing et labore Lorem.
									</p>
									<p>
										Incididunt culpa proident qui in. Nulla do quis pariatur
										veniam est reprehenderit dolore. Occaecat consectetur
										incididunt incididunt commodo cillum amet aliqua id pariatur
										sunt. Laborum amet magna id sunt. Nulla nisi minim et eu
										incididunt irure fugiat laboris labore nostrud eiusmod irure
										adipisicing. Exercitation pariatur voluptate occaecat anim
										irure ad tempor est. Do culpa culpa occaecat ut pariatur
										elit do exercitation consectetur sint aliqua voluptate.
									</p>
									<p>
										Culpa Lorem fugiat mollit est velit enim fugiat
										reprehenderit consequat eu. Commodo eiusmod irure anim culpa
										consequat in commodo ad nostrud amet pariatur. Eiusmod velit
										qui reprehenderit consequat proident esse amet consequat.
										Exercitation nostrud laborum labore anim nulla consequat
										elit quis ullamco nisi minim. Voluptate aliqua magna eu
										proident qui ipsum officia laboris. Ad veniam eiusmod mollit
										laborum sit pariatur do eu nostrud quis. Adipisicing ea
										labore duis laboris ex aute ea ut magna sit nisi dolor.
									</p>
									<p>
										Amet adipisicing quis fugiat cillum do commodo culpa
										deserunt minim. Fugiat enim veniam ex ullamco minim laboris
										labore culpa occaecat ut exercitation occaecat culpa quis.
										Veniam quis velit enim id veniam nisi non consequat laboris.
										Reprehenderit fugiat nostrud voluptate esse et nulla mollit
										eiusmod veniam sunt adipisicing. Aute quis mollit non quis
										ullamco consectetur labore quis do occaecat. Veniam id
										laboris adipisicing fugiat.
									</p>
								</SheetBody>
								<SheetFooter>
									<SheetClose asChild>
										<Button type="button">Close</Button>
									</SheetClose>
									<Button type="button" appearance="filled">
										Save
									</Button>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button, IconButton } from "@ngrok/mantle/button";
									import { Separator } from "@ngrok/mantle/separator";
									import {
										Sheet,
										SheetActions,
										SheetBody,
										SheetClose,
										SheetCloseIconButton,
										SheetContent,
										SheetDescription,
										SheetFooter,
										SheetHeader,
										SheetTitle,
										SheetTitleGroup,
										SheetTrigger,
									} from "@ngrok/mantle/sheet";
									import { ListMagnifyingGlassIcon } from "@phosphor-icons/react";
									import { TerminalWindowIcon } from "@phosphor-icons/react";
									import { TrashSimpleIcon } from "@phosphor-icons/react";

									<Sheet>
										<SheetTrigger asChild>
											<Button type="button" appearance="filled">Open Sheet</Button>
										</SheetTrigger>
										<SheetContent>
											<SheetHeader>
												<SheetTitleGroup>
													<SheetTitle>Are you absolutely sure?</SheetTitle>
													<SheetActions>
														<IconButton appearance="ghost" type="button" icon={<TerminalWindowIcon />} label="Start a Tunnel" />
														<IconButton appearance="ghost" type="button" icon={<ListMagnifyingGlassIcon />} label="See Traffic" />
														<IconButton appearance="ghost" type="button" icon={<TrashSimpleIcon />} label="Delete" />
														<Separator orientation="vertical" className="h-[80%]" />
														<SheetCloseIconButton />
													</SheetActions>
												</SheetTitleGroup>
												<SheetDescription>
													This action cannot be undone. This will permanently delete your account and remove your data from our
													servers.
												</SheetDescription>
											</SheetHeader>
											<SheetBody className="space-y-4">
												<p>
													Lorem ipsum
												</p>
											</SheetBody>
											<SheetFooter>
												<SheetClose asChild>
													<Button type="button">Close</Button>
												</SheetClose>
											</SheetFooter>
										</SheetContent>
									</Sheet>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
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
						<h3 className="text-xl font-medium text-strong">
							Router or state management controlled Sheet
						</h3>
						<p className="font-body text-body">
							You can control when to render a Sheet with a router or via
							outside state management. This will allow you to open and close
							the Sheet programmatically without using a{" "}
							<InlineCode>SheetTrigger</InlineCode>.
						</p>
					</header>
					<div>
						<Example>
							<WithoutTriggerExample />
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										import { Button } from "@ngrok/mantle/button";
										import {
											Sheet,
											SheetActions,
											SheetBody,
											SheetClose,
											SheetCloseIconButton,
											SheetContent,
											SheetDescription,
											SheetFooter,
											SheetHeader,
											SheetTitle,
											SheetTitleGroup,
											SheetTrigger,
										} from "@ngrok/mantle/sheet";
										import { useNavigate } from "react-router";
										
										// this is a react-router route module component export
										export default function Component() {
											const navigate = useNavigate();

											return (
												<Sheet open onOpenChange={() => navigate("..")}>
													<SheetContent>
														<SheetHeader>
															<SheetTitleGroup>
																<SheetTitle>A controlled Sheet</SheetTitle>
																<SheetActions>
																	<SheetCloseIconButton />
																</SheetActions>
															</SheetTitleGroup>
															<SheetDescription>
																This sheet is controlled by a router or state manager.
															</SheetDescription>
														</SheetHeader>
														<SheetBody>
															<p>
																Consequat do voluptate culpa fugiat consequat nostrud duis
																aliqua minim. Tempor voluptate cillum elit velit. Voluptate
																aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
																proident amet.
															</p>
														</SheetBody>
														<SheetFooter>
															<SheetFooter>
																<SheetClose asChild>
																	<Button type="button">Close</Button>
																</SheetClose>
															</SheetFooter>
														</SheetFooter>
													</SheetContent>
												</Sheet>
											);
										}
									`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium text-strong">
							Setting a preferred width of the Sheet
						</h3>
						<p className="font-body text-body">
							By default, a <InlineCode>Sheet</InlineCode>'s content width is
							responsive with a default{" "}
							<span className="italic">preferred width</span>: the maximum width
							of the <InlineCode>SheetContent</InlineCode> when the window
							viewport is larger than the mobile breakpoint (
							<InlineCode>sm</InlineCode>). You can control the preferred width
							of the <InlineCode>SheetContent</InlineCode> by using the{" "}
							<InlineCode>preferredWidth</InlineCode> prop:
						</p>
					</header>
					<div>
						<Example>
							<Sheet>
								<SheetTrigger asChild>
									<Button type="button" appearance="filled">
										Open 800px wide Sheet
									</Button>
								</SheetTrigger>
								<SheetContent preferredWidth="sm:max-w-[800px]">
									<SheetHeader>
										<SheetTitleGroup>
											<SheetTitle>
												Tempor pariatur fugiat fugiat cupidatat velit.
											</SheetTitle>
											<SheetActions>
												<SheetCloseIconButton />
											</SheetActions>
										</SheetTitleGroup>
									</SheetHeader>
									<SheetBody className="space-y-4">
										<p>
											Consequat do voluptate culpa fugiat consequat nostrud duis
											aliqua minim. Tempor voluptate cillum elit velit.
											Voluptate aliqua ipsum aliqua dolore in nisi ea fugiat
											aliqua velit proident amet.
										</p>
									</SheetBody>
									<SheetFooter>
										<SheetClose asChild>
											<Button type="button">Close</Button>
										</SheetClose>
										<Button type="button" appearance="filled">
											Save
										</Button>
									</SheetFooter>
								</SheetContent>
							</Sheet>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										import { Button } from "@ngrok/mantle/button";
										import {
											Sheet,
											SheetActions,
											SheetBody,
											SheetClose,
											SheetCloseIconButton,
											SheetContent,
											SheetFooter,
											SheetHeader,
											SheetTitle,
											SheetTitleGroup,
											SheetTrigger,
										} from "@ngrok/mantle/sheet";
										
										<Sheet>
											<SheetTrigger asChild>
												<Button type="button" appearance="filled">
													Open 800px wide Sheet
												</Button>
											</SheetTrigger>
											{/* using the 👇 \`preferredWidth\` prop */}
											<SheetContent preferredWidth="sm:max-w-[800px]">
												<SheetHeader>
													<SheetTitleGroup>
														<SheetTitle>
															Tempor pariatur fugiat fugiat cupidatat velit.
														</SheetTitle>
														<SheetActions>
															<SheetCloseIconButton />
														</SheetActions>
													</SheetTitleGroup>
												</SheetHeader>
												<SheetBody className="space-y-4">
													<p>
														Consequat do voluptate culpa fugiat consequat nostrud duis
														aliqua minim. Tempor voluptate cillum elit velit.
														Voluptate aliqua ipsum aliqua dolore in nisi ea fugiat
														aliqua velit proident amet.
													</p>
												</SheetBody>
												<SheetFooter>
													<SheetClose asChild>
														<Button type="button">Close</Button>
													</SheetClose>
													<Button type="button" appearance="filled">
														Save
													</Button>
												</SheetFooter>
											</SheetContent>
										</Sheet>
									`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Sheet</InlineCode> components are built on top of{" "}
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
						<h3 id="api-sheet" className="text-xl font-medium text-strong">
							Sheet
						</h3>

						<p className="font-body text-body">
							The root component for a <InlineCode>Sheet</InlineCode>. Should
							compose the <InlineCode>SheetTrigger</InlineCode> and{" "}
							<InlineCode>SheetContent</InlineCode>. Acts as a stateful provider
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
						<h3
							id="api-sheet-trigger"
							className="text-xl font-medium text-strong"
						>
							SheetTrigger
						</h3>

						<p className="font-body text-body">
							The button trigger for a <InlineCode>Sheet</InlineCode>. Should be
							rendered as a child of the <InlineCode>Sheet</InlineCode>{" "}
							component. Renders an unstyled <InlineCode>button</InlineCode> by
							default, but can be customized with the{" "}
							<InlineCode>asChild</InlineCode> prop.
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
					<h3 id="api-sheet-close" className="text-xl font-medium text-strong">
						SheetClose
					</h3>

					<p className="font-body text-body">
						The close button for a <InlineCode>Sheet</InlineCode>. Should be
						rendered as a child of the <InlineCode>SheetContent</InlineCode>{" "}
						component. Usually contained within the{" "}
						<InlineCode>SheetFooter</InlineCode> component. Renders an unstyled{" "}
						<InlineCode>button</InlineCode> by default, but can be customized
						with the <InlineCode>asChild</InlineCode> prop.
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
						<h3
							id="api-sheet-content"
							className="text-xl font-medium text-strong"
						>
							SheetContent
						</h3>

						<p className="font-body text-body">
							The main container for a <InlineCode>Sheet</InlineCode>. Should be
							rendered as a child of the <InlineCode>Sheet</InlineCode>{" "}
							component. Renders on top of the overlay backdrop. Should contain
							the <InlineCode>SheetHeader</InlineCode>,{" "}
							<InlineCode>SheetBody</InlineCode>, and{" "}
							<InlineCode>SheetFooter</InlineCode>.
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
									The preferred width of the{" "}
									<InlineCode>SheetContent</InlineCode> as a tailwind{" "}
									<InlineCode>max-w-</InlineCode> class.
								</p>
								<p>
									By default, a <InlineCode>Sheet</InlineCode>'s content width
									is responsive with a default{" "}
									<span className="italic">preferred width</span>: the maxiumum
									width of the <InlineCode>SheetContent</InlineCode> when the
									window viewport is larger than the mobile breakpoint (
									<InlineCode>sm</InlineCode>).
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
								<p>
									The side of the screen from which the sheet will animate in
									from.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3
						id="api-sheet-close-icon-button"
						className="text-xl font-medium text-strong"
					>
						SheetCloseIconButton
					</h3>

					<p className="font-body text-body">
						An icon button that closes the <InlineCode>Sheet</InlineCode> when
						clicked. Should be rendered within the{" "}
						<InlineCode>SheetHeader</InlineCode> as a child of{" "}
						<InlineCode>SheetActions</InlineCode>.
					</p>

					<p className="font-body text-body">
						Same props as the{" "}
						<Link to={href("/components/icon-button")}>Mantle IconButton</Link>.
					</p>
				</section>

				<section className="space-y-1">
					<h3 id="api-sheet-body" className="text-xl font-medium text-strong">
						SheetBody
					</h3>

					<p className="font-body text-body">
						The body container for a <InlineCode>Sheet</InlineCode>. This is
						where you would typically place the main content of the sheet, such
						as forms or text. Should be rendered as a child of{" "}
						<InlineCode>SheetContent</InlineCode>.
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
					<h3 id="api-sheet-header" className="text-xl font-medium text-strong">
						SheetHeader
					</h3>

					<p className="font-body text-body">
						The header container for a <InlineCode>Sheet</InlineCode>. This is
						where you would typically place the title, description, and actions.
						Should be rendered as a child of{" "}
						<InlineCode>SheetContent</InlineCode>.
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
					<h3 id="api-sheet-footer" className="text-xl font-medium text-strong">
						SheetFooter
					</h3>

					<p className="font-body text-body">
						The footer container for a <InlineCode>Sheet</InlineCode>. This is
						where you would typically place close and submit buttons. Should be
						rendered as a child of
						<InlineCode>SheetContent</InlineCode>.
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
					<h3 id="api-sheet-title" className="text-xl font-medium text-strong">
						SheetTitle
					</h3>

					<p className="font-body text-body">
						The title for a <InlineCode>Sheet</InlineCode>. Typically rendered
						as a child of <InlineCode>SheetTitleGroup</InlineCode>. Defaults to
						an <InlineCode>h2</InlineCode> element, but can be changed via the{" "}
						<InlineCode>asChild</InlineCode> prop.
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
					<h3
						id="api-sheet-title-group"
						className="text-xl font-medium text-strong"
					>
						SheetTitleGroup
					</h3>

					<p className="font-body text-body">
						A group container for the title and actions of a{" "}
						<InlineCode>Sheet</InlineCode>. Typically rendered as a child of{" "}
						<InlineCode>SheetHeader</InlineCode>.
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
					<h3
						id="api-sheet-description"
						className="text-xl font-medium text-strong"
					>
						SheetDescription
					</h3>

					<p className="font-body text-body">
						A description for a <InlineCode>Sheet</InlineCode>. Typically
						rendered as a child of <InlineCode>SheetHeader</InlineCode>.
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
					<h3
						id="api-sheet-actions"
						className="text-xl font-medium text-strong"
					>
						SheetActions
					</h3>

					<p className="font-body text-body">
						A group container for the actions of a{" "}
						<InlineCode>Sheet</InlineCode>. Typically rendered as a child of{" "}
						<InlineCode>SheetTitleGroup</InlineCode>.
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
				<Sheet open onOpenChange={() => setIsOpen(false)}>
					<SheetContent>
						<SheetHeader>
							<SheetTitleGroup>
								<SheetTitle>A controlled Sheet</SheetTitle>
								<SheetActions>
									<SheetCloseIconButton />
								</SheetActions>
							</SheetTitleGroup>
							<SheetDescription>
								This sheet is controlled by a router or state manager.
							</SheetDescription>
						</SheetHeader>
						<SheetBody>
							<p>
								Consequat do voluptate culpa fugiat consequat nostrud duis
								aliqua minim. Tempor voluptate cillum elit velit. Voluptate
								aliqua ipsum aliqua dolore in nisi ea fugiat aliqua velit
								proident amet.
							</p>
						</SheetBody>
						<SheetFooter>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="button">Close</Button>
								</SheetClose>
							</SheetFooter>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			)}
		</>
	);
}
