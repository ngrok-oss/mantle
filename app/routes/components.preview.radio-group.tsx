import { Anchor } from "@/anchor";
import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { RadioButton, RadioGroup, SimpleRadioItem } from "@/radio-group";
import { Fire } from "@phosphor-icons/react/Fire";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Example } from "~/components/example";
import { PreviewBadge } from "~/components/preview-badge";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import { route } from "~/types/routes";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Radio Group" },
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
				<div className="flex items-center gap-3">
					<h1 className="text-5xl font-medium">Radio Group</h1>
					<PreviewBadge />
				</div>
				<p className="text-xl text-body">
					A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a
					time.
				</p>
				<div>
					<Example className="mt-4 flex flex-wrap gap-6">
						<form>
							Inside form:
							<RadioGroup defaultValue="comfortable">
								<label htmlFor="r1">
									<SimpleRadioItem value="default" id="r1">
										<p>Default</p>
									</SimpleRadioItem>
								</label>
								<label htmlFor="r2">
									<SimpleRadioItem value="comfortable" id="r2" disabled>
										<p>Comfortable</p>
									</SimpleRadioItem>
								</label>
								<SimpleRadioItem value="compact" id="r3">
									<label htmlFor="r3">Compact</label>
								</SimpleRadioItem>
								<SimpleRadioItem value="roomy" id="r4">
									Roomy
								</SimpleRadioItem>
							</RadioGroup>
						</form>
						<div>
							Outside form:
							<RadioGroup defaultValue="compact">
								<label htmlFor="rr1" className="flex cursor-pointer items-center space-x-2">
									<RadioButton value="default" id="rr1" />
									<p>Default</p>
								</label>
								<label htmlFor="rr2" className="flex cursor-pointer items-center space-x-2">
									<RadioButton value="comfortable" id="rr2" />
									<p>Comfortable</p>
								</label>
								<label htmlFor="rr3" className="flex cursor-pointer items-center space-x-2">
									<RadioButton value="compact" id="rr3" />
									<p>Compact</p>
								</label>
							</RadioGroup>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";

									<Button type="button">Outlined</Button>
									<Button type="button" appearance="filled">Filled</Button>
									<Button type="button" appearance="ghost">Ghost</Button>
									<Button type="button" appearance="link">Link</Button>

									<Button type="button" priority="neutral">Outlined</Button>
									<Button type="button" priority="neutral" appearance="filled">Filled</Button>
									<Button type="button" priority="neutral" appearance="ghost">Ghost</Button>
									<Button type="button" priority="neutral" appearance="link">Link</Button>

									<Button type="button" priority="danger">Outlined</Button>
									<Button type="button" priority="danger" appearance="filled">Filled</Button>
									<Button type="button" priority="danger" appearance="ghost">Ghost</Button>
									<Button type="button" priority="danger" appearance="link">Link</Button>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mb-4 space-y-4">
				<h2 id="example-icon" className="text-3xl font-medium">
					Icon and Positioning
				</h2>
				<p className="text-xl text-body">
					Use the <InlineCode>icon</InlineCode> prop to add an icon to the button. By default, it will render on the
					logical start side of the button. Use the <InlineCode>iconPlacement</InlineCode> prop to change the side the
					icon is rendered on.
				</p>
				<div>
					<Example>
						<div className="flex items-center gap-2">
							<Button type="button" icon={<Fire weight="fill" />}>
								Icon Start
							</Button>
							<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
								Icon End
							</Button>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<Button type="button" icon={<Fire weight="fill" />}>Icon Start</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End
									</Button>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mb-4 space-y-4">
				<h2 id="example-loading" className="text-3xl font-medium">
					isLoading
				</h2>
				<p className="text-xl text-body">
					<InlineCode>isLoading</InlineCode> determines whether or not the button is in a loading state, default{" "}
					<InlineCode>false</InlineCode>. Setting <InlineCode>isLoading</InlineCode> will replace any{" "}
					<InlineCode>icon</InlineCode> with a spinner, or add one if an icon wasn't given. It will also disable user
					interaction with the button and set <InlineCode>aria-disabled</InlineCode>.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<div className="space-y-2">
							<p className="mb-2 text-center font-mono text-xs">Idle</p>
							<div className="flex items-center justify-center gap-2">
								<Button type="button">No Icon + Idle</Button>
								<Button type="button" icon={<Fire weight="fill" />}>
									Icon Start + Idle
								</Button>
								<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
									Icon End + Idle
								</Button>
							</div>
							<div className="flex items-center justify-center gap-2">
								<Button type="button" appearance="link" icon={<Fire weight="fill" />}>
									Link + Icon Start + Idle
								</Button>
								<Button type="button" appearance="link" icon={<Fire weight="fill" />} iconPlacement="end">
									Link + Icon End + Idle
								</Button>
							</div>
						</div>
						<div className="space-y-2">
							<p className="mb-2 text-center font-mono text-xs">isLoading</p>
							<div className="flex items-center justify-center gap-2">
								<Button type="button" isLoading>
									No Icon + isLoading
								</Button>
								<Button type="button" icon={<Fire weight="fill" />} isLoading>
									Icon Start + isLoading
								</Button>
								<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end" isLoading>
									Icon End + isLoading
								</Button>
							</div>
							<div className="flex items-center justify-center gap-2">
								<Button type="button" appearance="link" icon={<Fire weight="fill" />} isLoading>
									Link + Icon Start + isLoading
								</Button>
								<Button type="button" appearance="link" icon={<Fire weight="fill" />} iconPlacement="end" isLoading>
									Link + Icon End + isLoading
								</Button>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<Button type="button">No Icon + Idle</Button>
									<Button type="button" icon={<Fire weight="fill" />}>Icon Start + Idle</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End + Idle
									</Button>
									<Button type="button" isLoading>No Icon + isLoading</Button>
									<Button type="button" icon={<Fire weight="fill" />} isLoading>
										Icon Start + isLoading
									</Button>
									<Button type="button" icon={<Fire weight="fill" />} iconPlacement="end" isLoading>
										Icon End + isLoading
									</Button>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mb-4 space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="text-xl text-body">
					When you want to render <span className="italic">something else</span> as a <InlineCode>Button</InlineCode>,
					you can use the <InlineCode>asChild</InlineCode> prop to compose. This is useful when you want to splat the{" "}
					<InlineCode>Button</InlineCode> styling onto a <InlineCode>Link</InlineCode> from{" "}
					<InlineCode>remix</InlineCode> or <InlineCode>react-router</InlineCode>. Keep in mind that when you use{" "}
					<InlineCode>asChild</InlineCode> the <InlineCode>type</InlineCode> prop will <strong>NOT</strong> be passed to
					the child component.
				</p>
				<div>
					<Example>
						<Button appearance="filled" icon={<Fire weight="fill" />} asChild>
							<Link to={route("/base/colors")}>See our colors!</Link>
						</Button>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";
									import { Link } from "react-router-dom";

									<Button appearance="filled" icon={<Fire weight="fill" />} asChild>
										<Link to="/base/colors">See our colors!</Link>
									</Button>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="text-xl text-body">
					The <InlineCode>Button</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">
						standard HTML button attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="appearance" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="ghost" />
								</li>
								<li>
									<StringPropType value="filled" />
								</li>
								<li>
									<StringPropType value="outlined" />
								</li>
								<li>
									<StringPropType value="link" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="outlined" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Defines the visual style of the <InlineCode>Button</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
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
								Use the <InlineCode>asChild</InlineCode> prop to compose the <InlineCode>Button</InlineCode> styling and
								functionality onto alternative element types or your own React components.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="icon" optional />
						<PropTypeCell>
							<ReactNodePropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							An icon to render inside the button. If the <InlineCode>state</InlineCode> is{" "}
							<InlineCode>pending</InlineCode>, then the icon will automatically be replaced with a spinner.
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="iconPlacement" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="start" />
								</li>
								<li>
									<StringPropType value="end" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="start" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The side that the icon will render on, if one is present. If <InlineCode>state="pending"</InlineCode>,
								then the loading icon will also render on this side.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="isLoading" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Determines whether or not the button is in a loading state, default <InlineCode>false</InlineCode>.
								Setting <InlineCode>isLoading</InlineCode> will replace any <InlineCode>icon</InlineCode> with a
								spinner, or add one if an icon wasn't given. It will also disable user interaction with the button and
								set <InlineCode>aria-disabled</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="priority" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="default" />
								</li>
								<li>
									<StringPropType value="danger" />
								</li>
								<li>
									<StringPropType value="neutral" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="default" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Indicates the importance or impact level of the button, affecting its color and styling to communicate
								its purpose to the user.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="type" />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="button" />
								</li>
								<li>
									<StringPropType value="reset" />
								</li>
								<li>
									<StringPropType value="submit" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								The default behavior of the <InlineCode>Button</InlineCode>. Unlike the native{" "}
								<InlineCode>button</InlineCode> element, unless you use the <InlineCode>asChild</InlineCode> prop,{" "}
								<span className="font-semibold">this prop is required and has no default value</span>. See{" "}
								<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type">
									the MDN docs
								</Anchor>{" "}
								for more information.
							</p>
							<ul className="list-disc pl-5">
								<li>
									<p>
										<InlineCode>"button"</InlineCode>: The button has no default behavior, and does nothing when pressed
										by default.
									</p>
								</li>
								<li>
									<p>
										<InlineCode>"reset"</InlineCode>: The button resets all the controls to their initial values.
									</p>
								</li>
								<li>
									<p>
										<InlineCode>"submit"</InlineCode>: The button submits the form data to the server.
									</p>
								</li>
							</ul>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
