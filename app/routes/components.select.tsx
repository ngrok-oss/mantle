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
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";

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
						<Select invalid aria-invalid>
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
								<InlineCode>{"(value: string) => void"}</InlineCode>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Event handler called when the value changes. Use it instead of <InlineCode>onValueChange</InlineCode>.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="invalid" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>Whether or not the input has a validation error.</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell className="min-w-[130px]" name="aria-invalid" optional />
							<PropTypeCell>
								<InlineCode>{"HTMLAttributes<HTMLSelectElement>"}</InlineCode>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<InlineCode>{"aria-invalid"}</InlineCode> from{" "}
								<InlineCode>{"HTMLAttributes<HTMLSelectElement>"}</InlineCode>
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
							<PropNameCell name="invalid" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>Whether or not the input has a validation error.</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell className="min-w-[130px]" name="aria-invalid" optional />
							<PropTypeCell>
								<InlineCode>{"HTMLAttributes<HTMLSelectElement>"}</InlineCode>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<InlineCode>{"aria-invalid"}</InlineCode> from{" "}
								<InlineCode>{"HTMLAttributes<HTMLSelectElement>"}</InlineCode>
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
