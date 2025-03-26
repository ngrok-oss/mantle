import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Label } from "@ngrok/mantle/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@ngrok/mantle/select";
import { useState } from "react";
import { href } from "react-router";
import { Example } from "~/components/example";
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
	return [
		{ title: "@ngrok/mantle — Select" },
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
	const [example1Value, setExample1Value] = useState("");

	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="select">Select</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a list of options for the user to pick from—triggered by a
					button.
				</p>

				<div>
					<Example className="flex-col gap-4">
						<Label className="w-full max-w-64" htmlFor="fruits">
							<p>Fruits</p>
							<Select id="fruits" name="number">
								<SelectTrigger>
									<SelectValue placeholder="Select a fruit" />
								</SelectTrigger>
								<SelectContent width="trigger">
									<SelectGroup>
										<SelectLabel>Fruits</SelectLabel>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectGroup>
									<SelectSeparator />
									<SelectGroup>
										<SelectLabel>Vegetables</SelectLabel>
										<SelectItem value="carrot">Carrot</SelectItem>
										<SelectItem value="cucumber">Cucumber</SelectItem>
										<SelectItem value="lettuce">Lettuce</SelectItem>
										<SelectItem value="tomato">Tomato</SelectItem>
										<SelectItem value="zucchini">
											<p>Zucchini</p>
											<p>
												Ex sit voluptate incididunt pariatur velit consequat
												reprehenderit.
											</p>
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Label>
						<Select validation="error">
							<SelectTrigger className="max-w-64">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
								<SelectSeparator />
								<SelectGroup>
									<SelectLabel>Vegetables</SelectLabel>
									<SelectItem value="carrot">Carrot</SelectItem>
									<SelectItem value="cucumber">Cucumber</SelectItem>
									<SelectItem value="lettuce">Lettuce</SelectItem>
									<SelectItem value="tomato">Tomato</SelectItem>
									<SelectItem value="zucchini">
										<p>Zucchini</p>
										<p>
											Ex sit voluptate incididunt pariatur velit consequat
											reprehenderit.
										</p>
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<Select validation="success">
							<SelectTrigger className="max-w-64">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
								<SelectSeparator />
								<SelectGroup>
									<SelectLabel>Vegetables</SelectLabel>
									<SelectItem value="carrot">Carrot</SelectItem>
									<SelectItem value="cucumber">Cucumber</SelectItem>
									<SelectItem value="lettuce">Lettuce</SelectItem>
									<SelectItem value="tomato">Tomato</SelectItem>
									<SelectItem value="zucchini">
										<p>Zucchini</p>
										<p>
											Ex sit voluptate incididunt pariatur velit consequat
											reprehenderit.
										</p>
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select validation="warning">
							<SelectTrigger className="max-w-64">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
								<SelectSeparator />
								<SelectGroup>
									<SelectLabel>Vegetables</SelectLabel>
									<SelectItem value="carrot">Carrot</SelectItem>
									<SelectItem value="cucumber">Cucumber</SelectItem>
									<SelectItem value="lettuce">Lettuce</SelectItem>
									<SelectItem value="tomato">Tomato</SelectItem>
									<SelectItem value="zucchini">
										<p>Zucchini</p>
										<p>
											Ex sit voluptate incididunt pariatur velit consequat
											reprehenderit.
										</p>
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Label } from "@ngrok/mantle/label";
									import {
										Select,
										SelectContent,
										SelectGroup,
										SelectItem,
										SelectLabel,
										SelectSeparator,
										SelectTrigger,
										SelectValue,
									} from "@ngrok/mantle/select";

									<Label className="w-full max-w-64" htmlFor="fruits">
										<p>Fruits</p>
										<Select id="fruits" name="number">
											<SelectTrigger>
												<SelectValue placeholder="Select a fruit" />
											</SelectTrigger>
											<SelectContent width="trigger">
												<SelectGroup>
													<SelectLabel>Fruits</SelectLabel>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">Blueberry</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">Pineapple</SelectItem>
												</SelectGroup>
												<SelectSeparator />
												<SelectGroup>
													<SelectLabel>Vegetables</SelectLabel>
													<SelectItem value="carrot">Carrot</SelectItem>
													<SelectItem value="cucumber">Cucumber</SelectItem>
													<SelectItem value="lettuce">Lettuce</SelectItem>
													<SelectItem value="tomato">Tomato</SelectItem>
													<SelectItem value="zucchini">
														<p>Zucchini</p>
														<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</Label>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="examples" className="text-3xl font-medium">
						Examples
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">Custom selected value</h3>
						<p className="font-body text-body">
							By default the selected item's text will be rendered when
							selected. Sometimes you may need to render something different.
							You can control the select and pass{" "}
							<InlineCode>children</InlineCode> instead.
						</p>
					</header>
					<div>
						<Example>
							<Select value={example1Value} onChange={setExample1Value}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a fruit">
										{example1Value === "apple" ? <>🍎 Apple</> : <>🍑 Peach</>}
									</SelectValue>
								</SelectTrigger>
								<SelectContent width="trigger">
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="peach">Peach</SelectItem>
								</SelectContent>
							</Select>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										import {
											Select,
											SelectContent,
											SelectItem,
											SelectTrigger,
											SelectValue,
										} from "@ngrok/mantle/select";

										<Select value={value} onChange={setValue}>
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Select a fruit">
													{value === "apple" ? <>🍎 Apple!</> : <>🍑 Peach!</>}
												</SelectValue>
											</SelectTrigger>
											<SelectContent width="trigger">
												<SelectItem value="apple">Apple</SelectItem>
												<SelectItem value="peach">Peach</SelectItem>
											</SelectContent>
										</Select>
									`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Select</InlineCode> components are built on top of{" "}
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
						<h3 id="api-select" className="text-xl font-medium">
							Select
						</h3>

						<p className="font-body text-body">
							Displays a list of options for the user to pick from—triggered by
							a button.
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
							<PropNameCell name="onChange" optional />
							<PropTypeCell>
								<FuncPropType value="(value: string) => void" />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Event handler called when the value changes. Use it instead of{" "}
									<InlineCode>onValueChange</InlineCode>.
								</p>
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
										<FuncPropType
											value={`() => "error" | "success" | "warning" | false`}
										/>
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell className="space-y-2">
								<p>
									Use the <InlineCode>validation</InlineCode> prop to show if
									the select trigger has a specific validation status. This will
									change the border and outline of the select trigger.
								</p>
								<p>
									The <InlineCode>false</InlineCode> type is useful when using
									short-circuiting logic so that you don't need to use a ternary
									with <InlineCode>undefined</InlineCode>.
								</p>
								<p>
									Setting <InlineCode>validation</InlineCode> to{" "}
									<InlineCode>error</InlineCode> also sets{" "}
									<InlineCode>aria-invalid</InlineCode>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-select-trigger" className="text-xl font-medium">
							SelectTrigger
						</h3>

						<p className="font-body text-body">
							The button that toggles the <InlineCode>Select</InlineCode>. The{" "}
							<InlineCode>SelectContent</InlineCode> will position itself
							adjacent to the trigger.
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
										<FuncPropType
											value={`() => "error" | "success" | "warning" | false`}
										/>
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell className="space-y-2">
								<p>
									Use the <InlineCode>validation</InlineCode> prop to show if
									the select trigger has a specific validation status. This will
									change the border and outline of the select trigger.
								</p>
								<p>
									The <InlineCode>false</InlineCode> type is useful when using
									short-circuiting logic so that you don't need to use a ternary
									with <InlineCode>undefined</InlineCode>.
								</p>
								<p>
									Setting <InlineCode>validation</InlineCode> to{" "}
									<InlineCode>error</InlineCode> also sets{" "}
									<InlineCode>aria-invalid</InlineCode>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3 id="api-select-value" className="text-xl font-medium">
						SelectValue
					</h3>

					<p className="font-body text-body">
						The part that reflects the selected value. By default the selected
						item's text will be rendered. if you require more control, you can
						instead control the <InlineCode>Select</InlineCode> and pass your
						own children. It should not be styled to ensure correct positioning.
						An optional placeholder prop is also available for when the{" "}
						<InlineCode>Select</InlineCode> has no value.
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
						<h3 id="api-select-content" className="text-xl font-medium">
							SelectContent
						</h3>

						<p className="font-body text-body">
							The component that pops out when the{" "}
							<InlineCode>Select</InlineCode> is open as a portal adjacent to
							the <InlineCode>SelectTrigger</InlineCode> button. It contains a
							scrolling viewport of the select items.
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
									<InlineCode>trigger</InlineCode> will ensure the content is
									the same width as the trigger button.
								</p>
								<p>
									<InlineCode>content</InlineCode> will make it the instrinic
									size of the content itself; it will be the width of the
									longest/widest item.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3 id="api-select-group" className="text-xl font-medium">
						SelectGroup
					</h3>

					<p className="font-body text-body">
						A group of related options within a select menu. Similar to an html{" "}
						<InlineCode>optgroup</InlineCode> element. Use in conjunction with{" "}
						<InlineCode>SelectLabel</InlineCode> to ensure good accessibility
						via automatic labelling.
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
					<h3 id="api-select-separator" className="text-xl font-medium">
						SelectSeparator
					</h3>

					<p className="font-body text-body">
						Used to visually separate items in the select. Composed from{" "}
						<Link to={href("/components/separator")}>Mantle Separator</Link>.
					</p>
				</section>

				<section className="space-y-1">
					<h3 id="api-select-item" className="text-xl font-medium">
						SelectItem
					</h3>

					<p className="font-body text-body">
						An option within a select menu. Similar to an html{" "}
						<InlineCode>option</InlineCode> element. Has a required{" "}
						<InlineCode>value</InlineCode> prop that will be passed to the{" "}
						<InlineCode>onChange</InlineCode> handler of the{" "}
						<InlineCode>Select</InlineCode> component when this item is
						selected. Displays the children as the option's text.
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
					<h3 id="api-select-label" className="text-xl font-medium">
						SelectLabel
					</h3>

					<p className="font-body text-body">
						Used to render the label of a group. It won't be focusable using
						arrow keys. Use in conjunction with{" "}
						<InlineCode>SelectGroup</InlineCode> to ensure good accessibility
						via automatic labelling of a group.
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
