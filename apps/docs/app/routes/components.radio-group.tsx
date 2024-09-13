import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import {
	RadioButton,
	RadioButtonGroup,
	RadioCard,
	RadioGroup,
	RadioGroupList,
	RadioIndicator,
	RadioItem,
	RadioItemContent,
	RadioListItem,
} from "@ngrok/mantle/radio-group";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

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
			<section className="space-y-4">
				<h1 className="text-5xl font-medium">Radio Group</h1>
				<p className="font-body text-xl text-body">
					A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a
					time.
				</p>
				<div>
					<Example className="mt-4 grid gap-6">
						<RadioGroup defaultValue="compact">
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

						<RadioButtonGroup defaultValue="production">
							<RadioButton value="development">Development</RadioButton>
							<RadioButton disabled value="staging">
								Staging
							</RadioButton>
							<RadioButton value="production">Production</RadioButton>
						</RadioButtonGroup>

						<RadioGroupList defaultValue="comfortable">
							<RadioListItem value="default" disabled id="rli1">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium text-strong" htmlFor="rli1">
										Default
									</label>
									<p className="text-body">Laborum esse cillum incididunt est dolore.</p>
								</RadioItemContent>
							</RadioListItem>
							<RadioListItem value="comfortable" id="rli2">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium text-strong" htmlFor="rli2">
										Comfortable
									</label>
									<p className="text-body">Ea laboris tempor laborum officia ea adipisicing exercitation.</p>
								</RadioItemContent>
							</RadioListItem>
							<RadioListItem value="compact" id="rli3">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium text-strong" htmlFor="rli3">
										Compact
									</label>
									<p className="text-body">Adipisicing est dolore velit magna dolor voluptate velit.</p>
								</RadioItemContent>
							</RadioListItem>
							<RadioListItem value="roomy" id="rli4">
								<RadioIndicator />
								<RadioItemContent>
									<label className="font-medium text-strong" htmlFor="rli4">
										Roomy
									</label>
									<p className="text-body">Tempor dolore Lorem exercitation id nisi aliquip elit.</p>
								</RadioItemContent>
							</RadioListItem>
						</RadioGroupList>

						<RadioGroup className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" defaultValue="existing">
							<RadioCard className="flex" value="newsletter" id="radiocard-1">
								<div className="flex-1">
									<label htmlFor="radiocard-1" className="block text-sm font-medium text-strong">
										Newsletter
									</label>
									<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent an hour ago</p>
									<p className="mt-6 text-sm font-medium">621 users</p>
								</div>
								<RadioIndicator />
							</RadioCard>
							<RadioCard className="flex" value="existing" id="radiocard-2">
								<div className="flex-1">
									<label htmlFor="radiocard-2" className="block text-sm font-medium text-strong">
										Existing Customers
									</label>
									<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 2 weeks ago</p>
									<p className="mt-6 text-sm font-medium">1200 users</p>
								</div>
								<RadioIndicator />
							</RadioCard>
							<RadioCard className="flex" value="trial" id="radiocard-3">
								<div className="flex-1">
									<label htmlFor="radiocard-3" className="block text-sm font-medium text-strong">
										Trial Users
									</label>
									<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 4 days ago</p>
									<p className="mt-6 text-sm font-medium">2740 Users</p>
								</div>
								<RadioIndicator />
							</RadioCard>
						</RadioGroup>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import {
										RadioButton,
										RadioButtonGroup,
										RadioCard,
										RadioGroup,
										RadioGroupList,
										RadioIndicator,
										RadioItem,
										RadioItemContent,
										RadioListItem,
									} from "@ngrok/mantle/radio-group";

									<RadioGroup defaultValue="comfortable">
										<RadioItem className="py-1" value="default" id="simple-1">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-1">Default</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="comfortable" id="simple-2" disabled>
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-2">Comfortable</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="compact" id="simple-3">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-3">Compact</label>
											</RadioItemContent>
										</RadioItem>
										<RadioItem className="py-1" value="roomy" id="simple-4">
											<RadioIndicator />
											<RadioItemContent asChild>
												<label htmlFor="simple-4">Roomy</label>
											</RadioItemContent>
										</RadioItem>
									</RadioGroup>

									<RadioButtonGroup defaultValue="production">
										<RadioButton value="development">Development</RadioButton>
										<RadioButton value="staging">Staging</RadioButton>
										<RadioButton value="production">Production</RadioButton>
									</RadioButtonGroup>

									<RadioGroupList defaultValue="comfortable">
										<RadioListItem value="default" disabled id="rli1">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli1">
													Default
												</label>
												<p className="text-body">Laborum esse cillum incididunt est dolore.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="comfortable" id="rli2">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli2">
													Comfortable
												</label>
												<p className="text-body">Ea laboris tempor laborum officia ea adipisicing exercitation.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="compact" id="rli3">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli3">
													Compact
												</label>
												<p className="text-body">Adipisicing est dolore velit magna dolor voluptate velit.</p>
											</RadioItemContent>
										</RadioListItem>
										<RadioListItem value="roomy" id="rli4">
											<RadioIndicator />
											<RadioItemContent>
												<label className="font-medium text-strong" htmlFor="rli4">
													Roomy
												</label>
												<p className="text-body">Tempor dolore Lorem exercitation id nisi aliquip elit.</p>
											</RadioItemContent>
										</RadioListItem>
									</RadioGroupList>

									<RadioGroup className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" defaultValue="existing">
										<RadioCard className="flex" value="newsletter" id="radiocard-1">
											<div className="flex-1">
												<label htmlFor="radiocard-1" className="block text-sm font-medium text-strong">
													Newsletter
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent an hour ago</p>
												<p className="mt-6 text-sm font-medium">621 users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
										<RadioCard className="flex" value="existing" id="radiocard-2">
											<div className="flex-1">
												<label htmlFor="radiocard-2" className="block text-sm font-medium text-strong">
													Existing Customers
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 2 weeks ago</p>
												<p className="mt-6 text-sm font-medium">1200 users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
										<RadioCard className="flex" value="trial" id="radiocard-3">
											<div className="flex-1">
												<label htmlFor="radiocard-3" className="block text-sm font-medium text-strong">
													Trial Users
												</label>
												<p className="mt-1 flex items-center text-sm text-gray-500">Last message sent 4 days ago</p>
												<p className="mt-6 text-sm font-medium">2740 Users</p>
											</div>
											<RadioIndicator />
										</RadioCard>
									</RadioGroup>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			{/* <section className="mb-4 space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="text-xl font-body">
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
			</section> */}

			{/* <section className="mt-16 space-y-4">
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
			</section> */}
		</div>
	);
}
