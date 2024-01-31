import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import { Input } from "@/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Input" },
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
			<h1 className="text-5xl font-medium">Input</h1>
			<p className="mt-4 text-xl text-gray-600">Fundamental component for inputs.</p>

			<Example className="mt-4 flex-col gap-6">
				<div className="flex gap-2">
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input placeholder="Enter a username" />
					<Button priority="muted" appearance="outline" type="button">
						Submit
					</Button>
				</div>
				<div className="flex gap-2">
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input placeholder="Enter a username" state="danger" />
					<Button priority="danger" appearance="outline" type="button">
						Submit
					</Button>
				</div>
				<div className="flex gap-2">
					<Select disabled>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input placeholder="Enter a username" disabled />
					<Button priority="default" appearance="outline" type="button" disabled>
						Submit
					</Button>
				</div>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`<Input placeholder="Enter a username" />`}</CodeBlockCode>
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
							<TableCell className="align-top font-medium">state</TableCell>
							<TableCell className="space-y-2 align-top text-xs">
								<p>default</p>
								<p>danger</p>
							</TableCell>
							<TableCell className="align-top">default</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
