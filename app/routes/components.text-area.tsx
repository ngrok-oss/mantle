import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import { TextArea } from "@/text-area";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — TextArea" },
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
			<h1 className="text-5xl font-medium">TextArea</h1>
			<p className="mt-4 text-xl text-gray-600">Displays a form textarea or a component that looks like a textarea.</p>

			<Example className="mt-4 flex-col gap-4">
				<TextArea className="max-w-64" placeholder="Enter a username" />
				<TextArea className="max-w-64" appearance="monospaced" placeholder="Enter a username" />
				<TextArea className="max-w-64" placeholder="Enter a username" aria-invalid />
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`
							<TextArea placeholder="Enter a username" />
							<TextArea appearance="monospaced" placeholder="Enter a username" />
							<TextArea placeholder="Enter a username" aria-invalid />
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
							<TableHead>Default</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="font-mono text-xs text-gray-600">
						<TableRow>
							<TableCell className="align-top font-medium">appearance</TableCell>
							<TableCell className="space-y-2 align-top text-xs">
								<p>monospaced</p>
								<p>undefined</p>
							</TableCell>
							<TableCell className="align-top">
								undefined
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="align-top font-medium">aria-invalid</TableCell>
							<TableCell className="space-y-2 align-top text-xs">
								boolean
							</TableCell>
							<TableCell className="align-top">
								false
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
