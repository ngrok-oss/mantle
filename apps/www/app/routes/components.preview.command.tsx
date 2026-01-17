import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Command, MetaKey } from "@ngrok/mantle/command";
import {
	CalculatorIcon,
	CalendarIcon,
	CreditCardIcon,
	GearIcon,
	SmileyIcon,
	UserIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";

function useHotkey(key: string, callback: () => void) {
	useEffect(() => {
		const keydown = (event: KeyboardEvent) => {
			if (event.key === key && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				callback();
			}
		};
		document.addEventListener("keydown", keydown);
		return () => document.removeEventListener("keydown", keydown);
	});
}

function CommandExample() {
	return (
		<Command.Root className="rounded-lg border border-dialog shadow-lg bg-dialog md:min-w-[450px]">
			<Command.Input placeholder="Type a command or search..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				<Command.Group heading="Suggestions">
					<Command.Item>
						<CalendarIcon />
						<span>Calendar</span>
					</Command.Item>
					<Command.Item>
						<SmileyIcon />
						<span>Search Emoji</span>
					</Command.Item>
					<Command.Item>
						<CalculatorIcon />
						<span>Calculator</span>
					</Command.Item>
				</Command.Group>
				<Command.Separator />
				<Command.Group heading="Settings">
					<Command.Item>
						<UserIcon />
						<span>Profile</span>
					</Command.Item>
				</Command.Group>
			</Command.List>
		</Command.Root>
	);
}

function CommandDialogExample() {
	const [open, setOpen] = useState(false);
	useHotkey("j", () => setOpen(!open));

	return (
		<>
			<p className="text-muted-foreground text-sm gap-2 flex items-center">
				Press{" "}
				<kbd className="bg-muted text-muted pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
					<span className="text-xs">
						<MetaKey />
					</span>
					J
				</kbd>
				or
				<Button type="button" onClick={() => setOpen(!open)}>
					Open Command Dialog
				</Button>
			</p>
			<Command.Dialog open={open} onOpenChange={setOpen}>
				<Command.Input placeholder="Type a command or search..." />
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Suggestions">
						<Command.Item>
							<CalendarIcon />
							<span>Calendar</span>
						</Command.Item>
						<Command.Item>
							<SmileyIcon />
							<span>Search Emoji</span>
						</Command.Item>
						<Command.Item>
							<CalculatorIcon />
							<span>Calculator</span>
						</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Settings">
						<Command.Item>
							<UserIcon />
							<span>Profile</span>
							<Command.Shortcut>
								<MetaKey /> P
							</Command.Shortcut>
						</Command.Item>
						<Command.Item>
							<CreditCardIcon />
							<span>Billing</span>
							<Command.Shortcut>
								<MetaKey /> B
							</Command.Shortcut>
						</Command.Item>
						<Command.Item>
							<GearIcon />
							<span>Settings</span>
							<Command.Shortcut>
								<MetaKey /> S
							</Command.Shortcut>
						</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Dialog>
		</>
	);
}

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="command" isPreview>
					Command
				</PageHeader>
				<p className="font-body text-body text-xl">
					A command palette that allows users to search and execute commands. Built on top of{" "}
					<Anchor href="https://cmdk.paco.me/">cmdk</Anchor>.
				</p>

				<header className="space-y-4">
					<HashLinkHeading id="command-example">
						<h3 className="text-xl font-medium text-strong">
							<span id="command-example" />
							Command Example
						</h3>
					</HashLinkHeading>
				</header>

				<div>
					<Example className="flex flex-col gap-6">
						<CommandExample />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
						function CommandExample() {
							return (
								<Command.Root className="rounded-lg border border-dialog shadow-lg bg-dialog md:min-w-[450px]">
									<Command.Input placeholder="Type a command or search..." />
									<Command.List>
										<Command.Empty>No results found.</Command.Empty>
										<Command.Group heading="Suggestions">
											<Command.Item>
												<CalendarIcon />
												<span>Calendar</span>
											</Command.Item>
											<Command.Item>
												<SmileyIcon />
												<span>Search Emoji</span>
											</Command.Item>
											<Command.Item>
												<CalculatorIcon />
												<span>Calculator</span>
											</Command.Item>
										</Command.Group>
										<Command.Separator />
										<Command.Group heading="Settings">
											<Command.Item>
												<UserIcon />
												<span>Profile</span>
											</Command.Item>
										</Command.Group>
									</Command.List>
								</Command.Root>
							);
						}
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>

				<header className="space-y-4">
					<HashLinkHeading id="command-dialog-example">
						<h3 className="text-xl font-medium text-strong">
							<span id="command-dialog-example" />
							Command Dialog Example
						</h3>
					</HashLinkHeading>
				</header>

				<div>
					<Example className="flex flex-col gap-6">
						<CommandDialogExample />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
						import { Button } from "@ngrok/mantle/button";
						import { Command, MetaKey } from "@ngrok/mantle/command";
						import {
							CalculatorIcon,
							CalendarIcon,
							CreditCardIcon,
							GearIcon,
							SmileyIcon,
							UserIcon,
						} from "@phosphor-icons/react";
						import { useEffect, useState } from "react";

						function useHotkey(key: string, callback: () => void) {
							useEffect(() => {
								const keydown = (event: KeyboardEvent) => {
									if (event.key === key && (event.metaKey || event.ctrlKey)) {
										event.preventDefault();
										callback();
									}
								};
								document.addEventListener("keydown", keydown);
								return () => document.removeEventListener("keydown", keydown);
							});
						}

						function CommandDialogExample() {
							const [open, setOpen] = useState(false);
							useHotkey("j", () => setOpen(!open));

							return (
								<>
									<p className="text-muted-foreground text-sm gap-2 flex items-center">
										Press{" "}
										<kbd className="bg-muted text-muted pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
											<span className="text-xs">
												<MetaKey />
											</span>
											J
										</kbd>
										or
										<Button type="button" onClick={() => setOpen(!open)}>
											Open Command Dialog
										</Button>
									</p>
									<Command.Dialog open={open} onOpenChange={setOpen}>
										<Command.Input placeholder="Type a command or search..." />
										<Command.List>
											<Command.Empty>No results found.</Command.Empty>
											<Command.Group heading="Suggestions">
												<Command.Item>
													<CalendarIcon />
													<span>Calendar</span>
												</Command.Item>
												<Command.Item>
													<SmileyIcon />
													<span>Search Emoji</span>
												</Command.Item>
												<Command.Item>
													<CalculatorIcon />
													<span>Calculator</span>
												</Command.Item>
											</Command.Group>
											<Command.Separator />
											<Command.Group heading="Settings">
												<Command.Item>
													<UserIcon />
													<span>Profile</span>
													<Command.Shortcut>
														<MetaKey /> P
													</Command.Shortcut>
												</Command.Item>
												<Command.Item>
													<CreditCardIcon />
													<span>Billing</span>
													<Command.Shortcut>
														<MetaKey /> B
													</Command.Shortcut>
												</Command.Item>
												<Command.Item>
													<GearIcon />
													<span>Settings</span>
													<Command.Shortcut>
														<MetaKey /> S
													</Command.Shortcut>
												</Command.Item>
											</Command.Group>
										</Command.List>
									</Command.Dialog>
								</>
							);
						}
							`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<header className="space-y-4">
					<HashLinkHeading id="api">
						<h2 className="text-3xl font-medium">API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>Command</Code> component is built on top of{" "}
						<Anchor href="https://cmdk.paco.me/">
							<Code>cmdk</Code>
						</Anchor>
						and provides a complete set of sub-components for building command palettes.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-root">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-root" />
								Command.Root
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The root component for the Command. It provides the context for all other command
							sub-components.
						</p>

						<p className="font-body text-body">
							All props from cmdk's
							<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#command-cmdk-root">
								<Code>Command Root</Code>
							</Anchor>
						</p>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-dialog">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-dialog" />
								Command.Dialog
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A window overlaid on either the primary window or another dialog window. The root
							stateful component for the CommandDialog.
						</p>

						<p className="font-body text-body">
							All props from cmdk's
							<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#dialog-cmdk-dialog-cmdk-overlay">
								<Code>Command Dialog</Code>
							</Anchor>
						</p>

						<p className="font-body text-body">
							Additional props include <Code>title</Code>, <Code>description</Code>,{" "}
							<Code>className</Code>, <Code>showCloseButton</Code>, <Code>filter</Code>, and{" "}
							<Code>shouldFilter</Code> to customize the dialog appearance and filtering behavior.
						</p>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-input">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-input" />
								Command.Input
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The input component for the Command. It provides the input for the command palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#input-cmdk-input">
							<Code>Command Input</Code>
						</Anchor>
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-list">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-list" />
								Command.List
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The list component for the Command. It provides the list for the command palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#list-cmdk-list">
							<Code>Command List</Code>
						</Anchor>
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-empty">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-empty" />
								Command.Empty
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The empty component for the Command. It provides the empty state for the command
						palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#empty-cmdk-empty">
							<Code>Command Empty</Code>
						</Anchor>
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-group">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-group" />
								Command.Group
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The group component for the Command. It provides the group for the command palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#group-cmdk-group-hidden">
							<Code>Command Group</Code>
						</Anchor>
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-separator">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-separator" />
								Command.Separator
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The separator component for the Command. It provides the separator for the command
						palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#separator-cmdk-separator">
							<Code>Command Separator</Code>
						</Anchor>
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-item">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-item" />
								Command.Item
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The item component for the Command. It provides the item for the command palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#item-cmdk-item-data-disabled-data-selected">
							<Code>Command Item</Code>
						</Anchor>
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-command-shortcut">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-command-shortcut" />
								Command.Shortcut
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The shortcut component for the Command. It provides the shortcut for the command
						palette.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-meta-key">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-meta-key" />
								MetaKey
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The <Code>MetaKey</Code> component renders the platform-appropriate meta key label (
						<Code>⌘</Code> for macOS/iOS or <Code>Ctrl</Code> for other platforms). It detects the
						platform on mount and is SSR-safe, defaulting to <Code>Ctrl</Code> to avoid hydration
						mismatches.
					</p>

					<p className="font-body text-body">
						Use it in keyboard shortcut hints and <Code>Command.Shortcut</Code> labels to ensure the
						correct modifier key is displayed for each platform.
					</p>

					<CodeBlock.Root>
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Command, MetaKey } from "@ngrok/mantle/command";

									<kbd>
										<MetaKey /> K
									</kbd>

									<Command.Shortcut>
										<MetaKey /> S
									</Command.Shortcut>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-use-command-state">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-use-command-state" />
								useCommandState
							</h3>
						</HashLinkHeading>
					</header>

					<p className="font-body text-body">
						The hook for the Command. It provides the state for the command palette.
					</p>

					<p className="font-body text-body">
						All props from cmdk's{" "}
						<Anchor href="https://github.com/pacocoursey/cmdk?tab=readme-ov-file#usecommandstatestate--stateselectedfield">
							<Code>useCommandState</Code>
						</Anchor>
					</p>
				</section>
			</section>
		</div>
	);
}
