import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Input } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
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
} from "~/components/props-table";
import type { Route } from "./+types/components.label";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Label" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="label">Label</PageHeader>
				<p className="font-body text-body text-xl">
					A <Code>Label</Code> represents a caption for an item in a user
					interface. Renders an accessible label associated with controls.
				</p>
				<div>
					<Example className="grid gap-6">
						<Label htmlFor="name">
							<span className="font-medium">Name</span>{" "}
							<Input type="text" id="name" />
						</Label>
						<div className="flex items-center gap-2">
							<Label htmlFor="name-2" className="font-medium">
								Name
							</Label>
							<Input type="text" id="name-2" />
						</div>
						<Label htmlFor="name-disabled">
							<span className="font-medium">Name</span>{" "}
							<Input
								type="text"
								id="name"
								disabled
								readOnly
								validation="error"
								value="foo"
							/>
						</Label>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Input } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";

									<Label htmlFor="name">
										<span className="font-medium">Name</span> <Input type="text" id="name" />
									</Label>

									<div className="flex items-center gap-2">
										<Label htmlFor="name-2" className="font-medium">Name:</Label>
										<Input type="text" id="name-2" />
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
					The <Code>Label</Code> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes">
						standard HTML label attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="disabled" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Use the <Code>disabled</Code> prop to explicitly render the
								label in a disabled state.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
