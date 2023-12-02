import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import type { MetaFunction } from "@vercel/remix";
import { Example } from "~/components/example";

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
			<p className="mt-4 text-xl text-gray-600">
				Initiates an action, such as completing a task or submitting information
			</p>
			<Example className="mt-4 gap-2">
				<Button>Default</Button>
				<Button priority="primary">Primary</Button>
				<Button priority="secondary">Secondary</Button>

				<Button state="danger">Default</Button>
				<Button state="danger" priority="primary">
					Primary
				</Button>
				<Button state="danger" priority="secondary">
					Secondary
				</Button>
			</Example>
			<CodeBlock className="rounded-t-none rounded-b-lg">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`<Button>Click me!</Button>`}</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
			<h2 className="mt-16 text-3xl font-medium">API Reference</h2>
			<div className="mt-4 rounded-lg border border-gray-300 overflow-hidden z-10">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Prop</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Default</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="font-mono text-xs text-gray-600">
						<TableRow>
							<TableCell className="align-top font-medium">priority</TableCell>
							<TableCell className="align-top text-xs space-y-2">
								<p>default</p>
								<p>primary</p>
								<p>secondary</p>
							</TableCell>
							<TableCell className="align-top">default</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="align-top font-medium">size</TableCell>
							<TableCell className="align-top text-xs space-y-2">
								<p>default</p>
								<p>sm</p>
								<p>lg</p>
							</TableCell>
							<TableCell className="align-top">default</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="align-top font-medium">state</TableCell>
							<TableCell className="align-top text-xs space-y-2">
								<p>default</p>
								<p>danger</p>
							</TableCell>
							<TableCell className="align-top">default</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">asChild</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell>false</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
