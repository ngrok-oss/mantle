import { Button } from "@ngrok/mantle/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ngrok/mantle/tooltip";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { PreviewBadge } from "~/components/badges";
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
		<div className="space-y-4">
			<div className="flex items-center gap-3">
				<h1 className="text-5xl font-medium">Tooltip</h1>
				<PreviewBadge />
			</div>
			<p className="font-body text-xl text-body">
				A popup that displays information related to an element when the element receives keyboard focus or the mouse
				hovers over it.
			</p>
			<div>
				<Example>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button type="button" appearance="filled" priority="default">
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
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
								import { Button } from "@ngrok/mantle/button";
								import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ngrok/mantle/tooltip";

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
							`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
