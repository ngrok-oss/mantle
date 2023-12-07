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
			<Example className="mt-4 gap-4 flex flex-wrap bg-white bg-none">
				<div className="flex gap-2">
					<Button>Ghost</Button>
					<Button appearance="solid">Solid</Button>
					<Button appearance="outline">Outline</Button>
				</div>

				<div className="flex gap-2">
					<Button priority="muted">Muted</Button>
					<Button priority="muted" appearance="solid">
						Muted
					</Button>
					<Button priority="muted" appearance="outline">
						Muted
					</Button>
				</div>

				<div className="flex gap-2">
					<Button priority="danger">Danger</Button>
					<Button priority="danger" appearance="solid">
						Danger
					</Button>
					<Button priority="danger" appearance="outline">
						Danger
					</Button>
				</div>
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
							<TableCell className="align-top font-medium">appearance</TableCell>
							<TableCell className="align-top text-xs space-y-2">
								<p>ghost</p>
								<p>solid</p>
								<p>outline</p>
							</TableCell>
							<TableCell className="align-top">ghost</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="align-top font-medium">priority</TableCell>
							<TableCell className="align-top text-xs space-y-2">
								<p>default</p>
								<p>danger</p>
								<p>muted</p>
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
