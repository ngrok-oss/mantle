import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { HoverCard } from "@ngrok/mantle/hover-card";
import { Icon } from "@ngrok/mantle/icon";
import { CalendarIcon } from "@phosphor-icons/react/Calendar";
import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
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

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <Code>HoverCard</Code> component is built on top of Radix UI Hover
					Card and provides a floating card that appears when a user hovers over
					a trigger element.
				</p>

				<div className="space-y-8">
					<div>
						<h3 className="text-xl font-medium mb-4">HoverCard.Root</h3>
						<p className="mb-4 text-muted-foreground">
							The root stateful component that manages the open/closed state of
							the hover card.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="open" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The controlled open state of the hover card. Must be used in
										conjunction with <Code>onOpenChange</Code>.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="onOpenChange" optional />
								<PropTypeCell>
									<Code>(open: boolean) =&gt; void</Code>
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										Event handler called when the open state of the hover card
										changes.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="defaultOpen" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={false} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The open state of the hover card when it is initially
										rendered. Use when you do not need to control its open
										state.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="openDelay" optional />
								<PropTypeCell>
									<Code>number</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<Code>100</Code>
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The duration in milliseconds from when the mouse enters the
										trigger until the hover card opens.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="closeDelay" optional />
								<PropTypeCell>
									<Code>number</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<Code>300</Code>
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The duration in milliseconds from when the mouse leaves the
										trigger or content until the hover card closes.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<h3 className="text-xl font-medium mb-4">HoverCard.Trigger</h3>
						<p className="mb-4 text-muted-foreground">
							The trigger element that opens the hover card when hovered.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="asChild" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={false} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										Use the <Code>asChild</Code> prop to compose the trigger
										functionality onto your own component.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div>
						<h3 className="text-xl font-medium mb-4">HoverCard.Content</h3>
						<p className="mb-4 text-muted-foreground">
							The content to render inside the hover card. Appears in a portal
							with rich styling and animations.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="side" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="top" />
										</li>
										<li>
											<StringPropType value="right" />
										</li>
										<li>
											<StringPropType value="bottom" />
										</li>
										<li>
											<StringPropType value="left" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="bottom" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The preferred side of the trigger to render against when
										open. Will be reversed when collisions occur and{" "}
										<Code>avoidCollisions</Code> is enabled.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="align" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="start" />
										</li>
										<li>
											<StringPropType value="center" />
										</li>
										<li>
											<StringPropType value="end" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="center" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The preferred alignment against the trigger. May change when
										collisions occur.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="sideOffset" optional />
								<PropTypeCell>
									<Code>number</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<Code>4</Code>
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The distance in pixels from the trigger. This is the
										distance between the trigger and the hover card content.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="alignOffset" optional />
								<PropTypeCell>
									<Code>number</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<Code>0</Code>
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										An offset in pixels from the <Code>start</Code> or{" "}
										<Code>end</Code> alignment options.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="avoidCollisions" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={true} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										When <Code>true</Code>, overrides the <Code>side</Code> and{" "}
										<Code>align</Code> preferences to prevent collisions with
										boundary edges.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="collisionBoundary" optional />
								<PropTypeCell>
									<Code>Element | null | Array&lt;Element | null&gt;</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<Code>[]</Code>
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The element used as the collision boundary. By default this
										is the viewport, though you can provide additional
										element(s) to be included in this check.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="collisionPadding" optional />
								<PropTypeCell>
									<Code>
										number | Partial&lt;Record&lt;Side, number&gt;&gt;
									</Code>
								</PropTypeCell>
								<PropDefaultValueCell>
									<Code>0</Code>
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The distance in pixels from the boundary edges where
										collision detection should occur. Accepts a number (same for
										all sides), or a partial padding object.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="sticky" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="partial" />
										</li>
										<li>
											<StringPropType value="always" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="partial" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The sticky behavior on the align axis.{" "}
										<Code>"partial"</Code> will keep the content in the boundary
										as long as the trigger is at least partially in the boundary
										whilst <Code>"always"</Code> will keep the content in the
										boundary regardless.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="hideWhenDetached" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={false} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										Whether to hide the content when the trigger becomes fully
										occluded.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>
				</div>
			</section>
		</div>
	);
}
