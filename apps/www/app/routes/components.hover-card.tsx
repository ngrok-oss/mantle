import { Button } from "@ngrok/mantle/button";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { HoverCard } from "@ngrok/mantle/hover-card";
import { Icon } from "@ngrok/mantle/icon";
import { CalendarIcon } from "@phosphor-icons/react/Calendar";
import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.hover-card";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Hover Card" },
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
			<PageHeader id="hover-card">Hover Card</PageHeader>
			<p className="font-body text-body text-xl">
				For sighted users to preview content available behind a link.
			</p>
			<div>
				<Example className="gap-2">
					<HoverCard.Root>
						<HoverCard.Trigger asChild>
							<Button type="button" appearance="link">
								Open Hover Card
							</Button>
						</HoverCard.Trigger>
						<HoverCard.Content className="w-80">
							<div className="flex justify-between space-x-4">
								<div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-pink-300">
									<Icon svg={<ShrimpIcon />} className="size-12" />
								</div>
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">@ngrok/mantle</h4>
									<p className="text-sm">
										The Design System – created and maintained by @ngrok.
									</p>
									<div className="flex items-center pt-2">
										<Icon
											svg={<CalendarIcon />}
											className="mr-2 h-4 w-4 opacity-70"
										/>{" "}
										<span className="text-muted-foreground text-xs">
											Joined November 2023
										</span>
									</div>
								</div>
							</div>
						</HoverCard.Content>
					</HoverCard.Root>
				</Example>
				<CodeBlock.Root className="rounded-b-lg rounded-t-none">
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { Button } from "@ngrok/mantle/button";
								import { HoverCard } from "@ngrok/mantle/hover-card";
								import { Icon } from "@ngrok/mantle/icon";
								import { CalendarIcon } from "@phosphor-icons/react/Calendar";
								import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";

								<HoverCard.Root>
									<HoverCard.Trigger asChild>
										<Button type="button" appearance="link">
											Open Hover Card
										</Button>
									</HoverCard.Trigger>
									<HoverCard.Content className="w-80">
										<div className="flex justify-between space-x-4">
											<div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-pink-300">
												<Icon svg={<ShrimpIcon />} className="size-12" />
											</div>
											<div className="space-y-1">
												<h4 className="text-sm font-semibold">@ngrok/mantle</h4>
												<p className="text-sm">The Design System – created and maintained by @ngrok.</p>
												<div className="flex items-center pt-2">
													<Icon svg={<CalendarIcon />} className="mr-2 h-4 w-4 opacity-70" />{" "}
													<span className="text-muted-foreground text-xs">Joined November 2023</span>
												</div>
											</div>
										</div>
									</HoverCard.Content>
								</HoverCard.Root>
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</div>
		</div>
	);
}
