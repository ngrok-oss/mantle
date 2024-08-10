import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { Input } from "@/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/popover";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { PreviewBadge } from "~/components/badges";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Popover" },
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
		<div className="space-y-4">
			<div className="flex items-center gap-3">
				<h1 className="text-5xl font-medium">Popover</h1>
				<PreviewBadge />
			</div>
			<p className="font-body text-xl text-body">Displays rich content in a portal, triggered by a button.</p>
			<div>
				<Example className="gap-2">
					<Popover>
						<PopoverTrigger asChild>
							<Button type="button" appearance="filled">
								Open popover
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-80">
							<form
								className="grid gap-4"
								onSubmit={(event) => {
									event.preventDefault();
								}}
							>
								<div className="space-y-2">
									<h4 className="font-medium leading-none">Dimensions</h4>
									<p className="text-sm text-gray-700">Set the dimensions for the layer.</p>
								</div>
								<div className="grid gap-2">
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="width">Width</label>
										<Input id="width" defaultValue="100%" className="col-span-2 h-8" />
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="maxWidth">Max. width</label>
										<Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="height">Height</label>
										<Input id="height" defaultValue="25px" className="col-span-2 h-8" />
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="maxHeight">Max. height</label>
										<Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
									</div>
								</div>
							</form>
						</PopoverContent>
					</Popover>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
								import { Popover, PopoverContent, PopoverTrigger } from "@ngrok/mantle/popover";

								<Popover>
									<PopoverTrigger asChild>
										<Button>Open popover</Button>
									</PopoverTrigger>
									<PopoverContent className="w-80">
										<p>Reprehenderit veniam excepteur incididunt et ut eu.</p>
									</PopoverContent>
								</Popover>
							`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
