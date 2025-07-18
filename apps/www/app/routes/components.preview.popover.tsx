import { Button } from "@ngrok/mantle/button";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Input } from "@ngrok/mantle/input";
import { Popover } from "@ngrok/mantle/popover";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.preview.popover";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Popover" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="space-y-4">
			<PageHeader id="popover" isPreview>
				Popover
			</PageHeader>
			<p className="font-body text-body text-xl">
				Displays rich content in a portal, triggered by a button.
			</p>
			<div>
				<Example className="gap-2">
					<Popover.Root>
						<Popover.Trigger asChild>
							<Button type="button" appearance="filled">
								Open popover
							</Button>
						</Popover.Trigger>
						<Popover.Content preferredWidth="max-w-96">
							<form
								className="grid gap-4"
								onSubmit={(event) => {
									event.preventDefault();
								}}
							>
								<div className="space-y-2">
									<h4 className="font-medium leading-none">Dimensions</h4>
									<p className="text-sm text-gray-700">
										Set the dimensions for the layer.
									</p>
								</div>
								<div className="grid gap-2">
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="width">Width</label>
										<Input
											id="width"
											defaultValue="100%"
											className="col-span-2 h-8"
										/>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="maxWidth">Max width</label>
										<Input
											id="maxWidth"
											defaultValue="300px"
											className="col-span-2 h-8"
										/>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="height">Height</label>
										<Input
											id="height"
											defaultValue="25px"
											className="col-span-2 h-8"
										/>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<label htmlFor="maxHeight">Max height</label>
										<Input
											id="maxHeight"
											defaultValue="none"
											className="col-span-2 h-8"
										/>
									</div>
								</div>
							</form>
						</Popover.Content>
					</Popover.Root>
				</Example>
				<CodeBlock.Root className="rounded-b-lg rounded-t-none">
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { Popover } from "@ngrok/mantle/popover";

								<Popover.Root>
									<Popover.Trigger asChild>
										<Button>Open popover</Button>
									</Popover.Trigger>
									<Popover.Content preferredWidth="max-w-96">
										<p>Reprehenderit veniam excepteur incididunt et ut eu.</p>
									</Popover.Content>
								</Popover.Root>
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</div>
		</div>
	);
}
