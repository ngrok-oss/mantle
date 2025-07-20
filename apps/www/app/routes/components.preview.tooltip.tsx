import { Button } from "@ngrok/mantle/button";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Tooltip, TooltipProvider } from "@ngrok/mantle/tooltip";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.preview.tooltip";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Tooltip" },
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
			<PageHeader id="tooltip" isPreview>
				Tooltip
			</PageHeader>
			<p className="font-body text-body text-xl">
				A popup that displays information related to an element when the element
				receives keyboard focus or the mouse hovers over it.
			</p>
			<div>
				<Example>
					<TooltipProvider>
						<Tooltip.Root>
							<Tooltip.Trigger asChild>
								<Button type="button" appearance="filled" priority="default">
									Add to library
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>This feature is part of your plan</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</TooltipProvider>
				</Example>
				<CodeBlock.Root className="rounded-b-lg rounded-t-none">
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { Button } from "@ngrok/mantle/button";
								import { Tooltip, TooltipProvider } from "@ngrok/mantle/tooltip";

								<TooltipProvider>
									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<Button appearance="filled" priority="default">
												Hover
											</Button>
										</Tooltip.Trigger>
										<Tooltip.Content>
											<p>Add to library</p>
										</Tooltip.Content>
									</Tooltip.Root>
								</TooltipProvider>
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</div>
		</div>
	);
}
