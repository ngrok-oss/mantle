import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import { TextArea } from "@/text-area";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { DragEvent } from "react";

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

async function handleDrop(event: DragEvent<HTMLTextAreaElement>) {
	event.preventDefault();
	const files = Array.from(event.dataTransfer.files);
	const fileData = await Promise.all(files.map((file) => file.text()));
	const textArea = event.target as HTMLTextAreaElement;
	textArea.value = fileData.join("\n");
}

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">TextArea</h1>
			<p className="mt-4 text-xl text-default">Displays a form textarea or a component that looks like a textarea.</p>

			<Example className="mt-4 flex-col gap-4">
				<TextArea
					onDrop={(event) => handleDrop(event)}
					className="max-w-64"
					placeholder="Tell us about your experience…"
				/>
				<TextArea
					onDrop={(event) => handleDrop(event)}
					className="max-w-64"
					appearance="monospaced"
					placeholder="Tell us about your experience…"
				/>
				<TextArea
					onDrop={(event) => handleDrop(event)}
					className="max-w-64"
					placeholder="Tell us about your experience…"
					aria-invalid
				/>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`
						import { TextArea } from "@ngrok/mantle";

						<TextArea placeholder="Tell us about your experience…" />
						<TextArea appearance="monospaced" placeholder="Tell us about your experience…" />
						<TextArea placeholder="Tell us about your experience…" aria-invalid />
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
					<TableBody className="font-mono text-xs text-default">
						<TableRow>
							<TableCell className="align-top font-medium">appearance</TableCell>
							<TableCell className="align-top">enum</TableCell>
							<TableCell className="space-y-2 align-top">
								<p>monospaced</p>
								<p>undefined</p>
							</TableCell>
							<TableCell className="align-top">undefined</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="align-top font-medium">aria-invalid</TableCell>
							<TableCell className="space-y-2 align-top">boolean</TableCell>
							<TableCell></TableCell>
							<TableCell className="align-top">false</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
