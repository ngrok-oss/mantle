import { Anchor } from "@/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/select";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { Link } from "~/components/link";
import {
	BooleanPropType,
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";
import { useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Select" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	const [example1Value, setExample1Value] = useState("");

	return (
		<div className="space-y-16">
			<section className="mb-4 space-y-4">
				<h1 className="text-5xl font-medium">Select</h1>
				<p className="mt-4 text-xl text-body">
					Displays a list of options for the user to pick from—triggered by a button.
				</p>

				<div>
					<Example className="mt-4 flex-col gap-4">
						<Select name="number">
							<SelectTrigger className="max-w-64">
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
										<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
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
										<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
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
										<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
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

							<Select>
								<SelectTrigger className="w-[180px]">
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
											<p>Ex sit voluptate incididunt pariatur velit consequat reprehenderit.</p>
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section>
				<header className="space-y-4">
					<h2 id="examples" className="text-3xl font-medium">
						Examples
					</h2>
				</header>

				<section>
					<h3 className="mt-8 text-xl font-medium">Custom selected value</h3>
					<p className="mt-1 text-body">
						By default the selected item's text will be rendered when selected. Sometimes you may need to render
						something different. You can control the select and pass <InlineCode>children</InlineCode> instead.
					</p>
					<Example className="mt-4">
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
				</section>
			</section>

			<section className="mt-16 space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="text-xl text-body">
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

				<section>
					<h3 className="mb-2 text-xl font-medium">Select</h3>

					<p className="mb-4 text-body">
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

					<PropsTable>
						<PropRow>
							<PropNameCell name="onChange" optional />
							<PropTypeCell>
								<FuncPropType value="(value: string) => void" />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Event handler called when the value changes. Use it instead of <InlineCode>onValueChange</InlineCode>.
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
										<FuncPropType value={`() => "error" | "success" | "warning" | false`} />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell className="space-y-2">
								<p>
									Use the <InlineCode>validation</InlineCode> prop to show if the select trigger has a specific
									validation status. This will change the border and outline of the select trigger.
								</p>
								<p>
									The <InlineCode>false</InlineCode> type is useful when using short-circuiting logic so that you don't
									need to use a ternary with <InlineCode>undefined</InlineCode>.
								</p>
								<p>
									Setting <InlineCode>validation</InlineCode> to <InlineCode>error</InlineCode> also sets{" "}
									<InlineCode>aria-invalid</InlineCode>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectTrigger</h3>

					<p className="mb-4 text-body">
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
									Use the <InlineCode>validation</InlineCode> prop to show if the select trigger has a specific
									validation status. This will change the border and outline of the select trigger.
								</p>
								<p>
									The <InlineCode>false</InlineCode> type is useful when using short-circuiting logic so that you don't
									need to use a ternary with <InlineCode>undefined</InlineCode>.
								</p>
								<p>
									Setting <InlineCode>validation</InlineCode> to <InlineCode>error</InlineCode> also sets{" "}
									<InlineCode>aria-invalid</InlineCode>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectValue</h3>

					<p className="mb-4 text-body">
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

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectContent</h3>

					<p className="mb-4 text-body">
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
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									<InlineCode>trigger</InlineCode> will ensure the content is the same width as the trigger button.
								</p>
								<p>
									<InlineCode>content</InlineCode> will make it the size of the content itself.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectGroup</h3>

					<p className="mb-4 text-body">
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

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectSeparator</h3>

					<p className="mb-4 text-body">
						Used to visually separate items in the select. Composed from{" "}
						<Link to="/components/separator">Mantle Separator</Link>.
					</p>
				</section>

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectItem</h3>

					<p className="mb-4 text-body">
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

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectLabel</h3>

					<p className="mb-4 text-body">
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

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectScrollUpButton</h3>

					<p className="mb-4 text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select#scrollupbutton"
							target="_blank"
							rel="noopener noreferrer"
						>
							Select.ScrollUpButton
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section>
					<h3 className="mb-4 text-xl font-medium">SelectScrollDownButton</h3>

					<p className="mb-4 text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/select#scrolldownbutton"
							target="_blank"
							rel="noopener noreferrer"
						>
							Select.ScrollDownButton
						</Anchor>{" "}
						props.
					</p>
				</section>
			</section>
		</div>
	);
}
