import type { MetaFunction } from "@vercel/remix";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Input } from "@ngrok/mantle/input";

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
			<div className="bg-background mt-4 flex items-center justify-center rounded-lg rounded-b-none border border-gray-300 p-9">
				<Input placeholder="Enter a username" />
			</div>

			<SyntaxHighlighter
				className="!rounded-t-none !border-t-0"
				language="jsx"
				useInlineStyles={false}
				codeTagProps={{ style: {} }}
			>{`<Input placeholder="Enter a username" />`}</SyntaxHighlighter>
		</div>
	);
}
