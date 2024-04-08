import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — InlineCode" },
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
		<div>
			<h1 className="text-5xl font-medium">Inline Code</h1>
			<p className="mt-4 text-xl text-body">Marks text to signify a short fragment of inline computer code.</p>

			<Example className="mt-4">
				<InlineCode>npm install @ngrok/mantle</InlineCode>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="tsx"
						value={fmtCode`
						import { InlineCode } from "@ngrok/mantle";

						<InlineCode>npm install @ngrok/mantle</InlineCode>
					`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
