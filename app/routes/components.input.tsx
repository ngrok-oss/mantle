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
			<p className="mt-4 text-xl text-gray-600">Fundamental component for inputs.</p>
			<div className="mt-4 flex items-center justify-center rounded-lg rounded-b-none border border-gray-300 bg-background p-9">
				<Input placeholder="Enter a username" />
			</div>

			<CodeBlock className="mt-4">
				<CodeBlockBody>
					<CodeBlockCopyButton
						onCopy={(value) => console.log("CodeBlockCopyButton.onCopy", { value })}
						onCopyError={(error) => console.log("CodeBlockCopyButton.onCopyError", { error })}
					/>
					<CodeBlockCode language="tsx">{code`<Input placeholder="Enter a username" />`}</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
