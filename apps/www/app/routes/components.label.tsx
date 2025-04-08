import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Input } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
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
import type { Route } from "./+types/components.label";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Label" },
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
				<PageHeader id="label">Label</PageHeader>
				<p className="font-body text-body text-xl">
					A <InlineCode>Label</InlineCode> represents a caption for an item in a
					user interface. Renders an accessible label associated with controls.
				</p>
				<div>
					<Example className="grid gap-6">
						<Label htmlFor="name">
							Name <Input type="text" id="name" />
						</Label>
						<div className="flex items-center gap-2">
							<Label htmlFor="name-2">Name</Label>
							<Input type="text" id="name-2" />
						</div>
						<Label htmlFor="name-disabled">
							Name{" "}
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
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Input } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";

									<Label htmlFor="name">
										Name: <Input type="text" id="name" />
									</Label>

									<div className="flex items-center gap-2">
										<Label htmlFor="name-2">Name:</Label>
										<Input type="text" id="name-2" />
									</div>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>Label</InlineCode> accepts the following props in
					addition to the{" "}
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
								Use the <InlineCode>disabled</InlineCode> prop to explicitly
								render the label in a disabled state.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
