import { Anchor } from "@/anchor";
import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Button" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Button</h1>
			<h2 className="my-4 text-xl text-gray-600">Displays a button or a component that looks like a button.</h2>
			<div className="mt-8 space-y-4 text-gray-600">
				<p>
					The <code className="bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">&lt;Button&gt;</code>{" "}
					element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other
					assistive technology. Once activated, it then performs an action, such as submitting a{" "}
					<code className="bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">form</code> or opening a{" "}
					<code className="bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">dialog</code>.
				</p>
				<p>
					See the <Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">MDN docs</Anchor> for
					more information.
				</p>
			</div>
			<div className="my-4 rounded-lg border border-gray-300 bg-background">
				<div className="flex items-center justify-center p-4 md:p-9 border-b border-gray-300">
					<Button>Click me!</Button>
				</div>
				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">{code`<Button>Click me!</Button>`}</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
