import { Alert } from "@ngrok/mantle/alert";
import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Tooltip } from "@ngrok/mantle/tooltip";
import { LightbulbIcon } from "@phosphor-icons/react";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	NumberPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.tooltip";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Tooltip" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="tooltip">Tooltip</PageHeader>
				<p className="font-body text-body text-xl">
					A popup that displays information related to an element when the element receives keyboard
					focus or the mouse hovers over it.
				</p>
				<Alert.Root priority="warning">
					<Alert.Icon svg={<LightbulbIcon />} />
					<Alert.Content>
						<Alert.Title>
							<strong>Note:</strong> Wrap your app with <Code>TooltipProvider</Code> once at the
							root to enable tooltips throughout your application.
						</Alert.Title>
					</Alert.Content>
				</Alert.Root>
				<div>
					<Example>
						<Tooltip.Root>
							<Tooltip.Trigger asChild>
								<Button type="button" appearance="filled" priority="default">
									Hover me
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>This feature is part of your plan</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Tooltip } from "@ngrok/mantle/tooltip";

									<Tooltip.Root>
										<Tooltip.Trigger asChild>
											<Button type="button" appearance="filled" priority="default">
												Hover me
											</Button>
										</Tooltip.Trigger>
										<Tooltip.Content>
											<p>This feature is part of your plan</p>
										</Tooltip.Content>
									</Tooltip.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api">
					<h2 className="text-3xl font-medium">API Reference</h2>
				</HashLinkHeading>

				<HashLinkHeading id="tooltip-provider">
					<h3 className="text-2xl font-medium">TooltipProvider</h3>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					Wraps your app to provide global functionality to your tooltips. Only one instance of this
					component should be rendered in your app, preferably at the root.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="delayDuration" optional />
						<PropTypeCell>
							<NumberPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<NumberPropType value={0} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The duration from when the mouse enters a tooltip trigger until the tooltip opens,
								in milliseconds.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="skipDelayDuration" optional />
						<PropTypeCell>
							<NumberPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<NumberPropType value={300} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								How much time a user has to enter another trigger without incurring a delay again,
								in milliseconds.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="disableHoverableContent" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Prevents <Code>Tooltip.Content</Code> from remaining open when hovering. Disabling
								this has accessibility consequences.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>

				<HashLinkHeading id="tooltip-root">
					<h3 className="text-2xl font-medium">Tooltip.Root</h3>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The root component that manages the open/closed state of the tooltip. Will throw if you
					have not wrapped your app in a <Code>TooltipProvider</Code>.
				</p>
				<PropsTable>
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
								The open state of the tooltip when it is initially rendered. Use when you do not
								need to control its open state.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="open" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								The controlled open state of the tooltip. Must be used in conjunction with{" "}
								<Code>onOpenChange</Code>.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="onOpenChange" optional />
						<PropTypeCell>
							<StringPropType value="(open: boolean) => void" />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>Event handler called when the open state of the tooltip changes.</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="delayDuration" optional />
						<PropTypeCell>
							<NumberPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Override the duration given to the <Code>TooltipProvider</Code> to customize the
								open delay for a specific tooltip.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="disableHoverableContent" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Override the <Code>disableHoverableContent</Code> given to the{" "}
								<Code>TooltipProvider</Code> to customize the behavior for a specific tooltip.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>

				<HashLinkHeading id="tooltip-trigger">
					<h3 className="text-2xl font-medium">Tooltip.Trigger</h3>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The button that toggles the tooltip. By default, the <Code>Tooltip.Content</Code> will
					position itself against the trigger.
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
								Use the <Code>asChild</Code> prop to compose the tooltip trigger onto an alternative
								element.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>

				<HashLinkHeading id="tooltip-content">
					<h3 className="text-2xl font-medium">Tooltip.Content</h3>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The component that pops out when the tooltip is open.
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
							<StringPropType value="top" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The preferred side of the trigger to render against when open. Will be reversed when
								collisions occur and <Code>avoidCollisions</Code> is enabled.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="sideOffset" optional />
						<PropTypeCell>
							<NumberPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<NumberPropType value={4} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>The distance in pixels from the trigger.</p>
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
							<p>The preferred alignment against the trigger. May change when collisions occur.</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="alignOffset" optional />
						<PropTypeCell>
							<NumberPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<NumberPropType value={0} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								An offset in pixels from the <Code>start</Code> or <Code>end</Code> alignment
								options.
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
								When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code>{" "}
								preferences to prevent collisions with boundary edges.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
