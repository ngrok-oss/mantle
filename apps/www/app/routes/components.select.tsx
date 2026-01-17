import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Label } from "@ngrok/mantle/label";
import { Select } from "@ngrok/mantle/select";
import { useState } from "react";
import { href } from "react-router";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.select";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Select" }];
};

export default function Page() {
	const [example1Value, setExample1Value] = useState("");

	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="select">Select</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a list of options for the user to pick from—triggered by a button.
				</p>

				<div>
					<Example className="flex-col gap-4">
						<Label className="w-full max-w-64" htmlFor="fruits">
							<p>Fruits</p>
							<Select.Root id="fruits" name="number">
								<Select.Trigger>
									<Select.Value placeholder="Select a fruit" />
								</Select.Trigger>
								<Select.Content width="trigger">
									<Select.Group>
										<Select.Label>Fruits</Select.Label>
										<Select.Item value="apple">Apple</Select.Item>
										<Select.Item value="banana">Banana</Select.Item>
										<Select.Item value="blueberry">Blueberry</Select.Item>
										<Select.Item value="grapes">Grapes</Select.Item>
										<Select.Item value="pineapple">Pineapple</Select.Item>
									</Select.Group>
									<Select.Separator />
									<Select.Group>
										<Select.Label>Vegetables</Select.Label>
										<Select.Item value="carrot">Carrot</Select.Item>
										<Select.Item value="cucumber">Cucumber</Select.Item>
										<Select.Item value="lettuce">Lettuce</Select.Item>
										<Select.Item value="tomato">Tomato</Select.Item>
										<Select.Item value="zucchini">
											<p>Zucchini</p>
											<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
										</Select.Item>
									</Select.Group>
								</Select.Content>
							</Select.Root>
						</Label>
						<Select.Root validation="error">
							<Select.Trigger className="max-w-64">
								<Select.Value placeholder="Select a fruit" />
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									<Select.Label>Fruits</Select.Label>
									<Select.Item value="apple">Apple</Select.Item>
									<Select.Item value="banana">Banana</Select.Item>
									<Select.Item value="blueberry">Blueberry</Select.Item>
									<Select.Item value="grapes">Grapes</Select.Item>
									<Select.Item value="pineapple">Pineapple</Select.Item>
								</Select.Group>
								<Select.Separator />
								<Select.Group>
									<Select.Label>Vegetables</Select.Label>
									<Select.Item value="carrot">Carrot</Select.Item>
									<Select.Item value="cucumber">Cucumber</Select.Item>
									<Select.Item value="lettuce">Lettuce</Select.Item>
									<Select.Item value="tomato">Tomato</Select.Item>
									<Select.Item value="zucchini">
										<p>Zucchini</p>
										<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
									</Select.Item>
								</Select.Group>
							</Select.Content>
						</Select.Root>

						<Select.Root validation="success">
							<Select.Trigger className="max-w-64">
								<Select.Value placeholder="Select a fruit" />
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									<Select.Label>Fruits</Select.Label>
									<Select.Item value="apple">Apple</Select.Item>
									<Select.Item value="banana">Banana</Select.Item>
									<Select.Item value="blueberry">Blueberry</Select.Item>
									<Select.Item value="grapes">Grapes</Select.Item>
									<Select.Item value="pineapple">Pineapple</Select.Item>
								</Select.Group>
								<Select.Separator />
								<Select.Group>
									<Select.Label>Vegetables</Select.Label>
									<Select.Item value="carrot">Carrot</Select.Item>
									<Select.Item value="cucumber">Cucumber</Select.Item>
									<Select.Item value="lettuce">Lettuce</Select.Item>
									<Select.Item value="tomato">Tomato</Select.Item>
									<Select.Item value="zucchini">
										<p>Zucchini</p>
										<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
									</Select.Item>
								</Select.Group>
							</Select.Content>
						</Select.Root>
						<Select.Root validation="warning">
							<Select.Trigger className="max-w-64">
								<Select.Value placeholder="Select a fruit" />
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									<Select.Label>Fruits</Select.Label>
									<Select.Item value="apple">Apple</Select.Item>
									<Select.Item value="banana">Banana</Select.Item>
									<Select.Item value="blueberry">Blueberry</Select.Item>
									<Select.Item value="grapes">Grapes</Select.Item>
									<Select.Item value="pineapple">Pineapple</Select.Item>
								</Select.Group>
								<Select.Separator />
								<Select.Group>
									<Select.Label>Vegetables</Select.Label>
									<Select.Item value="carrot">Carrot</Select.Item>
									<Select.Item value="cucumber">Cucumber</Select.Item>
									<Select.Item value="lettuce">Lettuce</Select.Item>
									<Select.Item value="tomato">Tomato</Select.Item>
									<Select.Item value="zucchini">
										<p>Zucchini</p>
										<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
									</Select.Item>
								</Select.Group>
							</Select.Content>
						</Select.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Label } from "@ngrok/mantle/label";
									import { Select } from "@ngrok/mantle/select";

									<Label className="w-full max-w-64" htmlFor="fruits">
										<p>Fruits</p>
										<Select.Root id="fruits" name="number">
											<Select.Trigger>
												<Select.Value placeholder="Select a fruit" />
											</Select.Trigger>
											<Select.Content width="trigger">
												<Select.Group>
													<Select.Label>Fruits</Select.Label>
													<Select.Item value="apple">Apple</Select.Item>
													<Select.Item value="banana">Banana</Select.Item>
													<Select.Item value="blueberry">Blueberry</Select.Item>
													<Select.Item value="grapes">Grapes</Select.Item>
													<Select.Item value="pineapple">Pineapple</Select.Item>
												</Select.Group>
												<Select.Separator />
												<Select.Group>
													<Select.Label>Vegetables</Select.Label>
													<Select.Item value="carrot">Carrot</Select.Item>
													<Select.Item value="cucumber">Cucumber</Select.Item>
													<Select.Item value="lettuce">Lettuce</Select.Item>
													<Select.Item value="tomato">Tomato</Select.Item>
													<Select.Item value="zucchini">
														<p>Zucchini</p>
														<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
													</Select.Item>
												</Select.Group>
											</Select.Content>
										</Select.Root>
									</Label>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="examples" className="text-3xl font-medium">
						<h2>Examples</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="custom-selected-value" className="text-xl font-medium text-strong">
							<h3>Custom selected value</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							By default the selected item's text will be rendered when selected. Sometimes you may
							need to render something different. You can control the select and pass{" "}
							<Code>children</Code> instead.
						</p>
					</header>
					<div>
						<Example>
							<Select.Root value={example1Value} onValueChange={setExample1Value}>
								<Select.Trigger className="w-[180px]">
									<Select.Value placeholder="Select a fruit">
										{example1Value === "apple" ? <>🍎 Apple</> : <>🍑 Peach</>}
									</Select.Value>
								</Select.Trigger>
								<Select.Content width="trigger">
									<Select.Item value="apple">Apple</Select.Item>
									<Select.Item value="peach">Peach</Select.Item>
								</Select.Content>
							</Select.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { Select } from "@ngrok/mantle/select";

										<Select.Root value={value} onValueChange={setValue}>
											<Select.Trigger className="w-[180px]">
												<Select.Value placeholder="Select a fruit">
													{value === "apple" ? <>🍎 Apple!</> : <>🍑 Peach!</>}
												</Select.Value>
											</Select.Trigger>
											<Select.Content width="trigger">
												<Select.Item value="apple">Apple</Select.Item>
												<Select.Item value="peach">Peach</Select.Item>
											</Select.Content>
										</Select.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api" className="text-3xl font-medium">
						<h2>API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>Select</Code> components are built on top of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select"
							target="_blank"
							rel="noopener noreferrer"
						>
							Radix Select
						</Anchor>
						.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-select" className="text-xl font-medium text-strong">
							<h3>Select</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							Displays a list of options for the user to pick from—triggered by a button.
						</p>

						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/select#root"
								target="_blank"
								rel="noopener noreferrer"
							>
								Select.Root
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="onValueChange" optional />
							<PropTypeCell>
								<FuncPropType value="(value: string) => void" />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>Event handler called when the value changes.</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="validation" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="error" />
									</li>
									<li>
										<StringPropType value="success" />
									</li>
									<li>
										<StringPropType value="warning" />
									</li>
									<li>
										<BooleanPropType value={false} />
									</li>
									<li>
										<FuncPropType value={`() => "error" | "success" | "warning" | false`} />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell className="space-y-2">
								<p>
									Use the <Code>validation</Code> prop to show if the select trigger has a specific
									validation status. This will change the border and outline of the select trigger.
								</p>
								<p>
									The <Code>false</Code> type is useful when using short-circuiting logic so that
									you don't need to use a ternary with <Code>undefined</Code>.
								</p>
								<p>
									Setting <Code>validation</Code> to <Code>error</Code> also sets{" "}
									<Code>aria-invalid</Code>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-select-trigger" className="text-xl font-medium text-strong">
							<h3>Select.Trigger</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The button that toggles the <Code>Select</Code>. The <Code>Select.Content</Code> will
							position itself adjacent to the trigger.
						</p>

						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/select#trigger"
								target="_blank"
								rel="noopener noreferrer"
							>
								Select.Trigger
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="validation" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="error" />
									</li>
									<li>
										<StringPropType value="success" />
									</li>
									<li>
										<StringPropType value="warning" />
									</li>
									<li>
										<BooleanPropType value={false} />
									</li>
									<li>
										<FuncPropType value={`() => "error" | "success" | "warning" | false`} />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell className="space-y-2">
								<p>
									Use the <Code>validation</Code> prop to show if the select trigger has a specific
									validation status. This will change the border and outline of the select trigger.
								</p>
								<p>
									The <Code>false</Code> type is useful when using short-circuiting logic so that
									you don't need to use a ternary with <Code>undefined</Code>.
								</p>
								<p>
									Setting <Code>validation</Code> to <Code>error</Code> also sets{" "}
									<Code>aria-invalid</Code>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-select-value" className="text-xl font-medium text-strong">
						<h3>Select.Value</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						The part that reflects the selected value. By default the selected item's text will be
						rendered. if you require more control, you can instead control the <Code>Select</Code>{" "}
						and pass your own children. It should not be styled to ensure correct positioning. An
						optional placeholder prop is also available for when the <Code>Select</Code> has no
						value.
					</p>

					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select#value"
							target="_blank"
							rel="noopener noreferrer"
						>
							Select.Value
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-select-content" className="text-xl font-medium text-strong">
							<h3>Select.Content</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The component that pops out when the <Code>Select</Code> is open as a portal adjacent
							to the <Code>Select.Trigger</Code> button. It contains a scrolling viewport of the
							select items.
						</p>

						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/select#content"
								target="_blank"
								rel="noopener noreferrer"
							>
								Select.Content
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="width" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="trigger" />
									</li>
									<li>
										<StringPropType value="content" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="trigger" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									<Code>trigger</Code> will ensure the content is the same width as the trigger
									button.
								</p>
								<p>
									<Code>content</Code> will make it the instrinic size of the content itself; it
									will be the width of the longest/widest item.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-select-group" className="text-xl font-medium text-strong">
						<h3>Select.Group</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						A group of related options within a select menu. Similar to an html{" "}
						<Code>optgroup</Code> element. Use in conjunction with <Code>Select.Label</Code> to
						ensure good accessibility via automatic labelling.
					</p>

					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select#group"
							target="_blank"
							rel="noopener noreferrer"
						>
							Select.Group
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-select-separator" className="text-xl font-medium text-strong">
						<h3>Select.Separator</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						Used to visually separate items in the select. Composed from{" "}
						<Link to={href("/components/separator")}>Mantle Separator</Link>.
					</p>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-select-item" className="text-xl font-medium text-strong">
						<h3>Select.Item</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						An option within a select menu. Similar to an html <Code>option</Code> element. Has a
						required <Code>value</Code> prop that will be passed to the <Code>onValueChange</Code>{" "}
						handler of the <Code>Select</Code> component when this item is selected. Displays the
						children as the option's text.
					</p>

					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select#item"
							target="_blank"
							rel="noopener noreferrer"
						>
							Select.Item
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<HashLinkHeading id="api-select-label" className="text-xl font-medium text-strong">
						<h3>Select.Label</h3>
					</HashLinkHeading>

					<p className="font-body text-body">
						Used to render the label of a group. It won't be focusable using arrow keys. Use in
						conjunction with <Code>Select.Group</Code> to ensure good accessibility via automatic
						labelling of a group.
					</p>

					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select#label"
							target="_blank"
							rel="noopener noreferrer"
						>
							Select.Label
						</Anchor>{" "}
						props.
					</p>
				</section>
			</section>
		</div>
	);
}
