import { Button } from "@/button";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Button" },
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
			<h1 className="text-5xl font-medium">Button</h1>
			<p className="mt-4 text-xl text-gray-600">
				Initiates an action, such as completing a task or submitting information
			</p>
			<Example className="mt-4 flex flex-wrap gap-6">
				<div>
					<p className="mb-2 text-center font-mono text-xs">Default</p>
					<div className="flex items-center gap-2">
						<Button>Ghost</Button>
						<Button appearance="filled">Filled</Button>
						<Button appearance="outlined">Outlined</Button>
						<Button appearance="link">Link</Button>
					</div>
				</div>

				<div>
					<p className="mb-2 text-center font-mono text-xs">Muted</p>
					<div className="flex items-center gap-2">
						<Button priority="muted">Ghost</Button>
						<Button priority="muted" appearance="filled">
							Filled
						</Button>
						<Button priority="muted" appearance="outlined">
							Outlined
						</Button>
						<Button priority="muted" appearance="link">
							Link
						</Button>
					</div>
				</div>

				<div>
					<p className="mb-2 text-center font-mono text-xs">Danger</p>
					<div className="flex items-center gap-2">
						<Button priority="danger">Ghost</Button>
						<Button priority="danger" appearance="filled">
							Filled
						</Button>
						<Button priority="danger" appearance="outlined">
							Outlined
						</Button>
						<Button priority="danger" appearance="link">
							Link
						</Button>
					</div>
				</div>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`
						import { Button } from "@ngrok/mantle";

						<Button>Ghost</Button>
						<Button appearance="filled">Filled</Button>
						<Button appearance="outlined">Outlined</Button>
						<Button appearance="link">Link</Button>

						<Button priority="muted">Ghost</Button>
						<Button priority="muted" appearance="filled">Filled</Button>
						<Button priority="muted" appearance="outlined">Outlined</Button>
						<Button priority="muted" appearance="link">Link</Button>

						<Button priority="danger">Ghost</Button>
						<Button priority="danger" appearance="filled">Filled</Button>
						<Button priority="danger" appearance="outlined">Outlined</Button>
						<Button priority="danger" appearance="link">Link</Button>
					`}</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
			<h2 className="mt-16 text-3xl font-medium">API Reference</h2>
			<div className="z-10 mt-4 overflow-hidden rounded-lg border border-gray-300">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Prop</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Options</TableHead>
							<TableHead>Default</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="font-mono text-xs text-gray-600">
						<TableRow>
							<TableCell className="align-top font-medium">appearance</TableCell>
							<TableCell className="align-top">enum</TableCell>
							<TableCell className="space-y-2 align-top">
								<p>ghost</p>
								<p>filled</p>
								<p>outlined</p>
								<p>link</p>
							</TableCell>
							<TableCell className="align-top">ghost</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="align-top font-medium">priority</TableCell>
							<TableCell className="align-top">enum</TableCell>
							<TableCell className="space-y-2 align-top">
								<p>default</p>
								<p>danger</p>
								<p>muted</p>
							</TableCell>
							<TableCell className="align-top">default</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">asChild</TableCell>
							<TableCell>boolean</TableCell>
							<TableCell></TableCell>
							<TableCell>false</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
