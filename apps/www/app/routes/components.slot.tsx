import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Slot } from "@ngrok/mantle/slot";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	ReactNodePropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.slot";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Slot" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="slot">Slot</PageHeader>
				<p className="font-body text-body text-xl">
					Merges its props onto its immediate child. This is a utility component used internally by
					other components to enable the <Code>asChild</Code> pattern.
				</p>
				<div>
					<Example>
						<div className="flex flex-col gap-4">
							<Slot className="rounded bg-blue-500 px-4 py-2 text-white">
								<a href="https://ngrok.com">Visit ngrok</a>
							</Slot>
							<Slot className="rounded bg-red-500 px-4 py-2 text-white">
								<button type="button">Click me</button>
							</Slot>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Slot } from "@ngrok/mantle/slot";

									<Slot className="rounded bg-blue-500 px-4 py-2 text-white">
										<a href="https://ngrok.com">Visit ngrok</a>
									</Slot>

									<Slot className="rounded bg-red-500 px-4 py-2 text-white">
										<button type="button">Click me</button>
									</Slot>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usage" className="text-3xl font-medium">
					<h2>Usage with asChild</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Slot</Code> component is the foundation of the <Code>asChild</Code> pattern used
					throughout Mantle. When a component supports <Code>asChild</Code>, it uses{" "}
					<Code>Slot</Code> internally to merge its props onto the child element instead of
					rendering a wrapper.
				</p>
				<div>
					<Example>
						<div className="flex gap-4">
							<Button appearance="filled" asChild>
								<Link to="https://ngrok.com">Visit ngrok</Link>
							</Button>
							<Button appearance="outlined" asChild>
								<a href="https://github.com/ngrok/ngrok">View on GitHub</a>
							</Button>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";

									<Button appearance="filled" asChild>
										<Link to="https://ngrok.com">Visit ngrok</Link>
									</Button>

									<Button appearance="outlined" asChild>
										<a href="https://github.com/ngrok/ngrok">View on GitHub</a>
									</Button>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="class-merging" className="text-3xl font-medium">
					<h2>Class Name Merging</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					<Code>Slot</Code> automatically merges <Code>className</Code> props using Tailwind CSS's
					merge logic. Child classes take priority over parent classes for conflicting styles, while
					non-conflicting classes are preserved.
				</p>
				<div>
					<Example>
						<Slot className="rounded bg-blue-500 px-4 text-white">
							<div className="bg-red-500 py-2">
								Child bg-red-500 wins, parent px-4 and py-2 merge
							</div>
						</Slot>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Slot } from "@ngrok/mantle/slot";

									<Slot className="rounded bg-blue-500 px-4 text-white">
										<div className="bg-red-500 py-2">
											Child bg-red-500 wins, parent px-4 and py-2 merge
										</div>
									</Slot>

									// Result: className="bg-red-500 rounded px-4 py-2 text-white"
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api" className="text-3xl font-medium">
						<h2>API Reference</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-slot" className="text-xl font-medium text-strong">
							<h3>Slot</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							Merges its props onto its immediate child element. Automatically handles className
							merging with Tailwind CSS merge logic.
						</p>

						<p className="font-body text-body">
							Based on{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/utilities/slot"
								target="_blank"
								rel="noopener noreferrer"
							>
								Radix UI Slot
							</Anchor>
							.
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									A single child element. The <Code>Slot</Code> will merge its props onto this
									child.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="className" optional />
							<PropTypeCell>string</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									CSS classes to merge with the child's className. Uses Tailwind CSS merge logic
									where child classes win for conflicting properties.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
