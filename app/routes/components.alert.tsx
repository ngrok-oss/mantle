import { Alert, AlertContent, AlertDescription, AlertTitle } from "@/alert";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { Fire } from "@phosphor-icons/react/Fire";
import { Info } from "@phosphor-icons/react/Info";
import { Rocket } from "@phosphor-icons/react/Rocket";
import { Warning } from "@phosphor-icons/react/Warning";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Alert" },
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
			<h1 className="text-5xl font-medium">Alert</h1>
			<p className="mt-4 text-xl text-gray-600">Displays a callout for user attention.</p>
			<Example className="mt-4 flex-col gap-2">
				<Alert>
					<Rocket className="h-6 w-6" />
					<AlertContent>
						<AlertTitle>Default</AlertTitle>
						<AlertDescription>This is a default alert.</AlertDescription>
					</AlertContent>
				</Alert>
				<Alert priority="danger">
					<Fire className="h-6 w-6" />
					<AlertContent>
						<AlertTitle>Danger</AlertTitle>
						<AlertDescription>This is a danger alert.</AlertDescription>
					</AlertContent>
				</Alert>
				<Alert priority="info">
					<Info className="h-6 w-6" />
					<AlertContent>
						<AlertTitle>Info</AlertTitle>
						<AlertDescription>This is an info alert.</AlertDescription>
					</AlertContent>
				</Alert>
				<Alert priority="success">
					<CheckCircle className="h-6 w-6" />
					<AlertContent>
						<AlertTitle>Success</AlertTitle>
						<AlertDescription>This is a success alert.</AlertDescription>
					</AlertContent>
				</Alert>
				<Alert priority="warning">
					<Warning className="h-6 w-6" />
					<AlertContent>
						<AlertTitle>Warning</AlertTitle>
						<AlertDescription>This is a warning alert.</AlertDescription>
					</AlertContent>
				</Alert>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`
						import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle";

						<Alert>
							<Rocket className="h-6 w-6" />
							<AlertContent>
								<AlertTitle>Default</AlertTitle>
								<AlertDescription>This is a default alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="danger">
							<Fire className="h-6 w-6" />
							<AlertContent>
								<AlertTitle>Danger</AlertTitle>
								<AlertDescription>This is a danger alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="info">
							<Info className="h-6 w-6" />
							<AlertContent>
								<AlertTitle>Info</AlertTitle>
								<AlertDescription>This is an info alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="success">
							<CheckCircle className="h-6 w-6" />
							<AlertContent>
								<AlertTitle>Success</AlertTitle>
								<AlertDescription>This is a success alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="warning">
							<Warning className="h-6 w-6" />
							<AlertContent>
								<AlertTitle>Warning</AlertTitle>
								<AlertDescription>This is a warning alert.</AlertDescription>
							</AlertContent>
						</Alert>
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
							<TableCell className="align-top font-medium">priority</TableCell>
							<TableCell className="align-top">enum</TableCell>
							<TableCell className="space-y-2 align-top">
								<p>danger</p>
								<p>default</p>
								<p>info</p>
								<p>success</p>
								<p>warning</p>
							</TableCell>
							<TableCell className="align-top">default</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
