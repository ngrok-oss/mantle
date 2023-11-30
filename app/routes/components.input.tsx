import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import { Input } from "@/input";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Input" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Input</h1>
			<h2 className="mt-4 text-xl text-gray-600">Fundamental component for inputs.</h2>
			<div className="my-4 rounded-lg border border-gray-300 bg-background">
				<div className="flex items-center justify-center p-4 md:p-9 border-b border-gray-300">
					<Input placeholder="Enter a username" />
				</div>

				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">{code`<Input placeholder="Enter a username" />`}</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
