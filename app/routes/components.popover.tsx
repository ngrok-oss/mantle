import { Button } from "@/button";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { Input } from "@/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/popover";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
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
		<div>
			<h1 className="text-5xl font-medium">Popover</h1>
			<p className="mt-4 text-xl text-body">Displays rich content in a portal, triggered by a button.</p>
			<Example className="mt-4 gap-2">
				<Popover>
					<PopoverTrigger asChild>
						<Button appearance="filled">Open popover</Button>
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
					<CodeBlockCode language="tsx">
						{code`
							import { Popover, PopoverContent, PopoverTrigger } from "@ngrok/mantle";

							<Popover>
								<PopoverTrigger asChild>
									<Button>Open popover</Button>
								</PopoverTrigger>
								<PopoverContent className="w-80">
									<p>Reprehenderit veniam excepteur incididunt et ut eu.</p>
								</PopoverContent>
							</Popover>
						`}
					</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
