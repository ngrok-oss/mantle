import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Kbd } from "@ngrok/mantle/kbd";
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
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.kbd";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Kbd" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="kbd">Kbd</PageHeader>
				<p className="font-body text-body text-xl">
					A square, centered keyboard "key" chip for rendering keyboard shortcut hints. Designed so
					every key—letters and modifiers—shares the same visual height/width and baseline.
				</p>
				<div>
					<Example>
						<div className="flex items-center gap-2">
							<Kbd>K</Kbd>
							<Kbd>⌘</Kbd>
							<Kbd>⌃</Kbd>
							<Kbd>⇧</Kbd>
							<Kbd>⌥</Kbd>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Kbd } from "@ngrok/mantle/kbd";

									<div className="flex items-center gap-2">
										<Kbd>K</Kbd>
										<Kbd>⌘</Kbd>
										<Kbd>⌃</Kbd>
										<Kbd>⇧</Kbd>
										<Kbd>⌥</Kbd>
									</div>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="shortcuts" className="text-3xl font-medium">
					<h2>Keyboard Shortcuts</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					Combine multiple <Code>Kbd</Code> components to display keyboard shortcuts.
				</p>
				<div>
					<Example>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2">
								<Kbd>⌘</Kbd>
								<span>+</span>
								<Kbd>K</Kbd>
							</div>
							<div className="flex items-center gap-2">
								<Kbd>⌃</Kbd>
								<span>+</span>
								<Kbd>⇧</Kbd>
								<span>+</span>
								<Kbd>P</Kbd>
							</div>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Kbd } from "@ngrok/mantle/kbd";

									<div className="flex items-center gap-2">
										<Kbd>⌘</Kbd>
										<span>+</span>
										<Kbd>K</Kbd>
									</div>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="accessibility" className="text-3xl font-medium">
					<h2>Accessibility</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					When displaying modifier symbols (⌘/⌃/⇧/⌥), provide an accessible name via{" "}
					<Code>aria-label</Code> for screen reader users.
				</p>
				<div>
					<Example>
						<div className="flex items-center gap-2">
							<Kbd aria-label="Command">⌘</Kbd>
							<span>+</span>
							<Kbd>K</Kbd>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Kbd } from "@ngrok/mantle/kbd";

									<div className="flex items-center gap-2">
										<Kbd aria-label="Command">⌘</Kbd>
										<span>+</span>
										<Kbd>K</Kbd>
									</div>
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
					The <Code>Kbd</Code> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd">
						standard HTML kbd attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="children" />
						<PropTypeCell>
							<ReactNodePropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>The keyboard key or symbol to display (e.g., "K", "⌘", "⌃").</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="className" optional />
						<PropTypeCell>
							<StringPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>Additional CSS classes to apply to the kbd element.</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
