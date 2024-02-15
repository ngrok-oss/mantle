import { Button } from "@/button";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/tooltip";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Tooltip" },
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
			<h1 className="text-5xl font-medium">Tooltip</h1>
			<p className="mt-4 text-xl text-gray-600">
				A popup that displays information related to an element when the element receives keyboard focus or the mouse
				hovers over it.
			</p>
			<Example className="mt-4">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button appearance="filled" priority="default">
								Hover
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Add to library</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`
						import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ngrok/mantle";

						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button appearance="filled" priority="default">
										Hover
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Add to library</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					`}</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
