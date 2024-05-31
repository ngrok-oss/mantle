import { Anchor } from "@/anchor";
import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import {
	RadioCard,
	RadioGroup,
	RadioGroupList,
	RadioIndicator,
	RadioItem,
	RadioItemContent,
	RadioListItem,
} from "@/radio-group";
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
					<RadioGroup className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" defaultValue="existing">
						<RadioCard className="flex" value="newsletter" id="rc1">
							<div className="flex-1">
								<p className="block text-sm font-medium text-strong">Newsletter</p>
								<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent an hour ago</p>
								<p className="mt-6 text-sm font-medium">621 users</p>
							</div>
							<RadioIndicator />
						</RadioCard>
						<RadioCard className="flex" value="existing" id="rc2">
							<div className="flex-1">
								<p className="block text-sm font-medium text-strong">Existing Customers</p>
								<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 2 weeks ago</p>
								<p className="mt-6 text-sm font-medium">1200 users</p>
							</div>
							<RadioIndicator />
						</RadioCard>
						<RadioCard className="flex" value="trial" id="rc3">
							<div className="flex-1">
								<p className="block text-sm font-medium text-strong">Trial Users</p>
								<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 4 days ago</p>
								<p className="mt-6 text-sm font-medium">2740 Users</p>
							</div>
							<RadioIndicator />
						</RadioCard>
					</RadioGroup>

					<div className="my-8 grid grid-cols-7 gap-4">
						<p className="col-span-2 text-right">MFA Enforcement:</p>
						<RadioGroup className="col-span-5 flex flex-col gap-2" defaultValue="disabled">
							<RadioCard className="flex gap-2" value="disabled" id="disabled">
								<RadioIndicator />
								<label htmlFor="disabled">
									<span className="font-medium">Disabled:</span> Allow all users to authenticate with any method
								</label>
							</RadioCard>
							<RadioCard className="flex gap-2" value="enabled" id="enabled">
								<RadioIndicator />
								<label htmlFor="enabled">
									<span className="font-medium">Enabled:</span> Require all team members to sign in with Multi-Factor
									Authentication. If they don't have it enabled, they will be prompted to enable it immediately.
								</label>
							</RadioCard>
						</RadioGroup>
					</div>

					<Example className="mt-4 flex flex-wrap gap-6">
						<RadioGroupList defaultValue="comfortable">
							<RadioListItem value="default" disabled id="rli1">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium" htmlFor="rli1">
										Default
									</label>
									<p>Laborum esse cillum incididunt est dolore.</p>
								</RadioItemContent>
							</RadioListItem>
							<RadioListItem value="comfortable" id="rli2">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium" htmlFor="rli2">
										Comfortable
									</label>
									<p>Ea laboris tempor laborum officia ea adipisicing exercitation.</p>
								</RadioItemContent>
							</RadioListItem>
							<RadioListItem value="compact" id="rli3">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium" htmlFor="rli3">
										Compact
									</label>
									<p>Adipisicing est dolore velit magna dolor voluptate velit.</p>
								</RadioItemContent>
							</RadioListItem>
							<RadioListItem value="roomy" id="rli4">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium" htmlFor="rli4">
										Roomy
									</label>
									<p>Tempor dolore Lorem exercitation id nisi aliquip elit.</p>
								</RadioItemContent>
							</RadioListItem>
						</RadioGroupList>

						<RadioGroup className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
							<RadioCard value="newsletter" id="rc1">
								asdf
							</RadioCard>
							<RadioCard value="existing" id="rc2">
								asdf
							</RadioCard>
							<RadioCard value="trial" id="rc3">
								asdf
							</RadioCard>
						</RadioGroup>

						<RadioGroup defaultValue="comfortable">
							<RadioItem value="default" id="simple-1">
								<RadioIndicator />
								<RadioItemContent asChild>
									<label htmlFor="simple-1">Default</label>
								</RadioItemContent>
							</RadioItem>
							<RadioItem value="comfortable" id="simple-2" disabled>
								<RadioIndicator />
								<RadioItemContent asChild>
									<label htmlFor="simple-2">Comfortable</label>
								</RadioItemContent>
							</RadioItem>
							<RadioItem value="compact" id="simple-3">
								<RadioIndicator />
								<RadioItemContent asChild>
									<label htmlFor="simple-3">Compact</label>
								</RadioItemContent>
							</RadioItem>
							<RadioItem value="roomy" id="simple-4">
								<RadioIndicator />
								<RadioItemContent asChild>
									<label htmlFor="simple-4">Roomy</label>
								</RadioItemContent>
							</RadioItem>
						</RadioGroup>

						{/* <form>
							Inside form:
							<RadioGroup defaultValue="comfortable" id="0">
								<label htmlFor="r1">
									<SimpleRadioItem value="default" id="1">
										<RadioButton value="default" id="r1" />
										<RadioItemContent>
											<p>Default</p>
										</RadioItemContent>
									</SimpleRadioItem>
								</label>
								<label htmlFor="r2">
									<SimpleRadioItem value="comfortable" id="2">
										<RadioButton value="comfortable" id="r2" disabled />
										<RadioItemContent>
											<p>Comfortable</p>
										</RadioItemContent>
									</SimpleRadioItem>
								</label>
								<SimpleRadioItem value="compact" id="3">
									<RadioButton value="compact" id="r3" />
									<RadioItemContent>
										<label htmlFor="r3">Compact</label>
									</RadioItemContent>
								</SimpleRadioItem>
								<SimpleRadioItem value="roomy" id="4">
									<RadioButton value="roomy" id="r4" />
									<RadioItemContent>Roomy</RadioItemContent>
								</SimpleRadioItem>
							</RadioGroup>
						</form>
						<div>
							Outside form:
							<RadioGroup defaultValue="compact">
								<label htmlFor="rr1">
									<SimpleRadioItem value="default" id="rr1">
										<p>Default</p>
									</SimpleRadioItem>
								</label>
								<label htmlFor="rr2">
									<SimpleRadioItem value="comfortable" id="rr2" disabled>
										<p>Comfortable</p>
									</SimpleRadioItem>
								</label>
								<SimpleRadioItem value="compact" id="rr3">
									<label htmlFor="rr3">Compact</label>
								</SimpleRadioItem>
								<SimpleRadioItem value="roomy" id="rr4">
									Roomy
								</SimpleRadioItem>
							</RadioGroup>
						</div> */}
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
