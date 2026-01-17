import { Button, IconButton } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Dialog, isDialogOverlayTarget } from "@ngrok/mantle/dialog";
import { Input } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
import { Tooltip } from "@ngrok/mantle/tooltip";
import { TrashSimpleIcon } from "@phosphor-icons/react/TrashSimple";
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
import type { Route } from "./+types/components.dialog";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Dialog" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="dialog">Dialog</PageHeader>
				<p className="font-body text-body text-xl">
					A window overlaid on either the primary window or another dialog window, rendering the
					content underneath inert.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<Dialog.Root>
							<Dialog.Trigger asChild>
								<Button type="button" appearance="filled">
									Open dialog
								</Button>
							</Dialog.Trigger>
							<Dialog.Content
								onPointerDownOutside={(event) => {
									/**
									 * only allow closing when clicking outside the dialog if the
									 * click is not on the overlay itself
									 *
									 * this allows for clicking on form autofill plugins, like
									 * 1password, which renders as a sibling to the dialog content
									 * and visually positions itself inside inputs
									 */
									if (isDialogOverlayTarget(event.target)) {
										return;
									}
									event.preventDefault();
								}}
							>
								<Dialog.Header>
									<Dialog.Title>
										Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi
									</Dialog.Title>
									<Dialog.CloseIconButton />
								</Dialog.Header>
								<Dialog.Body>
									<p>
										This action cannot be undone. This will permanently delete your account and
										remove your data from our servers.
									</p>
									<form onSubmit={(event) => event.preventDefault()}>
										<Label htmlFor="email">Email input to trigger 1password plugin</Label>
										<Input type="email" autoComplete="email" id="email" name="email" />
									</form>
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
									<Dialog.Close asChild>
										<Button type="button" priority="neutral" appearance="outlined">
											Cancel
										</Button>
									</Dialog.Close>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
						<Dialog.Root>
							<Dialog.Trigger asChild>
								<Button type="button" appearance="filled">
									Open dialog (no close button)
								</Button>
							</Dialog.Trigger>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>
										Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi
									</Dialog.Title>
								</Dialog.Header>
								<Dialog.Body>
									This action cannot be undone. This will permanently delete your account and remove
									your data from our servers.
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
									<Dialog.Close asChild>
										<Button type="button" priority="neutral" appearance="outlined">
											Cancel
										</Button>
									</Dialog.Close>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
						<Dialog.Root>
							<Dialog.Trigger asChild>
								<Button type="button" appearance="filled">
									Open dialog (tall boi)
								</Button>
							</Dialog.Trigger>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Tall boi example</Dialog.Title>
									<Dialog.CloseIconButton />
								</Dialog.Header>
								<Dialog.Body className="flex flex-col gap-4">
									<p>
										Consequat velit minim labore esse aliqua laboris non laborum qui labore duis
										reprehenderit.
									</p>
									<p>Eiusmod eu consequat ex ipsum ex adipisicing.</p>
									<p>
										Veniam eu nostrud officia pariatur aliquip dolor laboris cupidatat magna cillum
										nostrud aliquip ex esse.
									</p>
									<p>Tempor laborum proident officia do.</p>
									<p>Aliqua laborum id cillum anim.</p>
									<p>Exercitation ex culpa laborum anim.</p>
									<p>Voluptate minim culpa qui anim officia non do labore.</p>
									<p>Ad exercitation do nulla laborum deserunt.</p>
									<p>Quis mollit nostrud sint officia elit eu deserunt nostrud excepteur ea.</p>
									<p>Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex adipisicing.</p>
									<p>Exercitation officia sunt sit sint.</p>
									<p>Velit eu deserunt proident Lorem sit proident ut minim.</p>
									<p>
										Consequat velit minim labore esse aliqua laboris non laborum qui labore duis
										reprehenderit.
									</p>
									<p>Eiusmod eu consequat ex ipsum ex adipisicing.</p>
									<p>
										Veniam eu nostrud officia pariatur aliquip dolor laboris cupidatat magna cillum
										nostrud aliquip ex esse.
									</p>
									<p>Tempor laborum proident officia do.</p>
									<p>Aliqua laborum id cillum anim.</p>
									<p>Exercitation ex culpa laborum anim.</p>
									<p>Voluptate minim culpa qui anim officia non do labore.</p>
									<p>Ad exercitation do nulla laborum deserunt.</p>
									<p>Quis mollit nostrud sint officia elit eu deserunt nostrud excepteur ea.</p>
									<p>Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex adipisicing.</p>
									<p>Exercitation officia sunt sit sint.</p>
									<p>Velit eu deserunt proident Lorem sit proident ut minim.</p>
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
									<Dialog.Close asChild>
										<Button type="button" priority="neutral" appearance="outlined">
											Cancel
										</Button>
									</Dialog.Close>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
							import { Dialog } from "@ngrok/mantle/dialog";

							<Dialog.Root>
								<Dialog.Trigger asChild>
									<Button type="button">Open dialog</Button>
								</Dialog.Trigger>
								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title>Are you absolutely sure?</Dialog.Title>
									</Dialog.Header>
									<Dialog.Body>
										This action cannot be undone. This will permanently delete your account and remove your data from our
										servers.
									</Dialog.Body>
									<Dialog.Footer>
										<Button type="button">
											Delete
										</Button>
										<Button type="button">
											Cancel
										</Button>
									</Dialog.Footer>
								</Dialog.Content>
							</Dialog.Root>
						`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="composition" className="text-3xl font-medium">
					<h2>Composition</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					In some cases, you might wish to have a tooltip over the dialog trigger. This is helpful
					if the dialog trigger is an <Code>IconButton</Code> and you wish to provide more context
					to what the button does. You can compose them both together to where the dialog trigger is
					also the tooltip trigger.
				</p>
				<div>
					<Example>
						<Dialog.Root>
							<Tooltip.Root>
								<Tooltip.Trigger asChild>
									<Dialog.Trigger asChild>
										<IconButton type="button" label="Delete" size="sm" icon={<TrashSimpleIcon />} />
									</Dialog.Trigger>
								</Tooltip.Trigger>
								<Tooltip.Content>
									<p>Delete</p>
								</Tooltip.Content>
							</Tooltip.Root>

							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Are you absolutely sure?</Dialog.Title>
									<Dialog.CloseIconButton />
								</Dialog.Header>
								<Dialog.Body>
									This action cannot be undone. This will permanently delete your account and remove
									your data from our servers.
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
									<Dialog.Close asChild>
										<Button type="button" priority="neutral" appearance="outlined">
											Cancel
										</Button>
									</Dialog.Close>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									<Dialog.Root>
										<Tooltip.Root>
											<Tooltip.Trigger asChild>
												<Dialog.Trigger asChild>
													<IconButton type="button" label="Delete" size="sm" icon={<TrashSimpleIcon />} />
												</Dialog.Trigger>
											</Tooltip.Trigger>
											<Tooltip.Content>
												<p>Delete</p>
											</Tooltip.Content>
										</Tooltip.Root>

										<Dialog.Content>
											<Dialog.Header>
												<Dialog.Title>Are you absolutely sure?</Dialog.Title>
												<Dialog.CloseIconButton />
											</Dialog.Header>
											<Dialog.Body>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</Dialog.Body>
											<Dialog.Footer>
												<Dialog.Close asChild>
													<Button type="button" priority="danger" appearance="filled">
														Delete
													</Button>
												</Dialog.Close>
												<Dialog.Close asChild>
													<Button type="button" priority="neutral" appearance="outlined">
														Cancel
													</Button>
												</Dialog.Close>
											</Dialog.Footer>
										</Dialog.Content>
									</Dialog.Root>
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
					The <Code>Dialog</Code> component is built on top of Radix UI Dialog and provides a
					complete set of sub-components for building modal dialogs.
				</p>

				<div className="space-y-8">
					<div>
						<HashLinkHeading id="dialog-root" className="text-xl font-medium mb-4">
							<h3>Dialog.Root</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							The root stateful component that manages the open/closed state of the dialog.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="open" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The controlled open state of the dialog. Must be used in conjunction with{" "}
										<Code>onOpenChange</Code>.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="onOpenChange" optional />
								<PropTypeCell>
									<Code>(open: boolean) =&gt; void</Code>
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Event handler called when the open state of the dialog changes.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="defaultOpen" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={false} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The open state of the dialog when it is initially rendered. Use when you do not
										need to control its open state.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="modal" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={true} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The modality of the dialog. When set to <Code>true</Code>, interaction with
										outside elements will be disabled and only dialog content will be visible to
										screen readers.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-trigger" className="text-xl font-medium mb-4">
							<h3>Dialog.Trigger</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">A button that opens the dialog.</p>
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
										Use the <Code>asChild</Code> prop to compose the trigger functionality onto your
										own component.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-content" className="text-xl font-medium mb-4">
							<h3>Dialog.Content</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							The container for the dialog content. Renders on top of the overlay and is centered in
							the viewport.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="preferredWidth" optional />
								<PropTypeCell>
									<Code>`max-w-$&#123;string&#125;`</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="max-w-lg" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The preferred width of the dialog content as a Tailwind <Code>max-w-</Code>{" "}
										class. Controls the maximum width of the dialog.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="onEscapeKeyDown" optional />
								<PropTypeCell>
									<Code>(event: KeyboardEvent) =&gt; void</Code>
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										Event handler called when the escape key is down. It can be prevented by calling{" "}
										<Code>event.preventDefault</Code>.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="onInteractOutside" optional />
								<PropTypeCell>
									<Code>(event: Event) =&gt; void</Code>
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										Event handler called when the user interacts outside the component. It can be
										prevented by calling <Code>event.preventDefault</Code>.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-header" className="text-xl font-medium mb-4">
							<h3>Dialog.Header</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							Contains the header content of the dialog, including the title and close button.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>The content to render inside the dialog header.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-body" className="text-xl font-medium mb-4">
							<h3>Dialog.Body</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">Contains the main content of the dialog.</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>The content to render inside the dialog body.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-footer" className="text-xl font-medium mb-4">
							<h3>Dialog.Footer</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							Contains the footer content of the dialog, including action buttons.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The content to render inside the dialog footer. Typically contains action
										buttons.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-title" className="text-xl font-medium mb-4">
							<h3>Dialog.Title</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							An accessible name to be announced when the dialog is opened.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>The title text for the dialog.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-description" className="text-xl font-medium mb-4">
							<h3>Dialog.Description</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							An accessible description to be announced when the dialog is opened.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The description text for the dialog. Enhances accessibility by providing
										additional context.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-close" className="text-xl font-medium mb-4">
							<h3>Dialog.Close</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							A button that closes the dialog when clicked.
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
										Use the <Code>asChild</Code> prop to compose the close functionality onto your
										own component.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<HashLinkHeading id="dialog-close-icon-button" className="text-xl font-medium mb-4">
							<h3>Dialog.CloseIconButton</h3>
						</HashLinkHeading>
						<p className="mb-4 text-muted-foreground">
							An icon button that closes the dialog when clicked.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="size" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="sm" />
										</li>
										<li>
											<StringPropType value="md" />
										</li>
										<li>
											<StringPropType value="lg" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="md" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>The size of the close icon button.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="label" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="Close Dialog" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>The accessible label for the close button. Important for screen readers.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="appearance" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="ghost" />
										</li>
										<li>
											<StringPropType value="outlined" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="ghost" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>The visual appearance of the close icon button.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>
				</div>
			</section>
		</div>
	);
}
