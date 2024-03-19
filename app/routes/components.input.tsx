import { Anchor } from "@/anchor";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { Input } from "@/input";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
} from "~/components/props-table";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Input" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="mb-4 space-y-4">
				<h1 id="input" className="text-5xl font-medium">
					Input
				</h1>
				<p className="mt-4 text-xl text-body">Fundamental component for inputs.</p>
				<div>
					<Example className="mt-4 flex flex-col gap-6">
						<label className="block space-y-1">
							<p>Username</p>
							<Input className="max-w-64" placeholder="Enter a username" />
						</label>
						<label className="block space-y-1">
							<p>Username (invalid)</p>
							<Input className="max-w-64" placeholder="Enter a username" invalid />
						</label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									import { Input } from "@ngrok/mantle";

									<Input placeholder="Enter a username" />
									<Input placeholder="Enter a username" invalid />
								`}
							</CodeBlockCode>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="text-xl text-body">
					The <InlineCode>Input</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">
						standard HTML input attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="invalid" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Use the <InlineCode>invalid</InlineCode> prop to show if the input has a validation error. This will
								change the presentation of the input to indicate <span className="italic">danger</span> to the user as
								well as set <InlineCode>aria-invalid</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
