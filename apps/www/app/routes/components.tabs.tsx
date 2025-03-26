import { Card, CardHeader, CardTitle } from "@ngrok/mantle/card";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import {
	TabBadge,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ngrok/mantle/tabs";
import { Globe } from "@phosphor-icons/react/Globe";
import { ShieldCheck } from "@phosphor-icons/react/ShieldCheck";
import { User } from "@phosphor-icons/react/User";
import { Link, href } from "react-router";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.tabs";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Tabs" },
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
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="tabs">Tabs</PageHeader>
				<p className="font-body text-body text-xl">
					A set of layered sections of content—known as tab panels—that are
					displayed one at a time.
				</p>
				<div>
					<Example className="mt-4 grid gap-6">
						<p>
							<InlineCode>asChild</InlineCode> with{" "}
							<InlineCode>Link</InlineCode>s
						</p>
						<div className="scrollbar -mt-4 overflow-x-scroll">
							<Tabs orientation="horizontal" defaultValue="colors">
								<TabsList>
									<TabsTrigger value="colors" asChild>
										<Link to={href("/base/colors")}>Colors</Link>
									</TabsTrigger>
									<TabsTrigger value="shadows" asChild>
										<Link to={href("/base/shadows")}>Shadows</Link>
									</TabsTrigger>
									<TabsTrigger disabled value="tailwind-variants" asChild>
										<Link to={href("/base/tailwind-variants")}>
											Tailwind Variants
										</Link>
									</TabsTrigger>
									<TabsTrigger value="typography" asChild>
										<Link to={href("/base/typography")}>Typography</Link>
									</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs orientation="horizontal" defaultValue="tab-1">
								<TabsList>
									<TabsTrigger value="tab-1">Tab Title</TabsTrigger>
									<TabsTrigger value="tab-2">Tab Title</TabsTrigger>
									<TabsTrigger disabled value="tab-3">
										Tab Title
									</TabsTrigger>
									<TabsTrigger value="tab-4">Tab Title</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs orientation="horizontal" defaultValue="tab-1">
								<TabsList>
									<TabsTrigger value="tab-1">
										<Globe />
										Tab Title
									</TabsTrigger>
									<TabsTrigger value="tab-2">
										<Globe />
										Tab Title
									</TabsTrigger>
									<TabsTrigger disabled value="tab-3">
										<Globe />
										Tab Title
									</TabsTrigger>
									<TabsTrigger value="tab-4">
										<Globe />
										Tab Title
									</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs orientation="horizontal" defaultValue="tab-1">
								<TabsList>
									<TabsTrigger value="tab-1">
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
									<TabsTrigger value="tab-2">
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
									<TabsTrigger disabled value="tab-3">
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
									<TabsTrigger value="tab-4">
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs orientation="horizontal" defaultValue="tab-1">
								<TabsList>
									<TabsTrigger value="tab-1">
										<Globe />
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
									<TabsTrigger value="tab-2">
										<Globe />
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
									<TabsTrigger disabled value="tab-3">
										<Globe />
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
									<TabsTrigger value="tab-4">
										<Globe />
										Tab Title
										<TabBadge>32</TabBadge>
									</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
						<Tabs
							orientation="horizontal"
							defaultValue="account"
							className="w-100 max-w-[400px]"
						>
							<TabsList>
								<TabsTrigger value="account">
									<User />
									Account
									<TabBadge>2</TabBadge>
								</TabsTrigger>
								<TabsTrigger value="password">
									<ShieldCheck />
									Password
								</TabsTrigger>
							</TabsList>
							<TabsContent value="account">
								<Card>
									<CardHeader>
										<CardTitle>Account</CardTitle>
										<p className="text-muted">
											Make changes to your account here. Click save when you're
											done.
										</p>
									</CardHeader>
								</Card>
							</TabsContent>
							<TabsContent value="password">
								<Card>
									<CardHeader>
										<CardTitle>Password</CardTitle>
										<p className="text-muted">
											Change your password here. After saving, you'll be logged
											out.
										</p>
									</CardHeader>
								</Card>
							</TabsContent>
						</Tabs>
						<Tabs
							orientation="vertical"
							defaultValue="account"
							className="scrollbar max-w-xl overflow-x-scroll"
						>
							<TabsList>
								<TabsTrigger value="account">Account</TabsTrigger>
								<TabsTrigger value="password">Password</TabsTrigger>
								<TabsTrigger value="disabled-tab" disabled>
									Disabled tab
								</TabsTrigger>
							</TabsList>
							<TabsContent value="account">
								<Card>
									<CardHeader>
										<CardTitle>Account</CardTitle>
										<p className="text-muted">
											Make changes to your account here. Click save when you're
											done.
										</p>
									</CardHeader>
								</Card>
							</TabsContent>
							<TabsContent value="password">
								<Card>
									<CardHeader>
										<CardTitle>Password</CardTitle>
										<p className="text-muted">
											Change your password here. After saving, you'll be logged
											out.
										</p>
									</CardHeader>
								</Card>
							</TabsContent>
						</Tabs>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";
									import { Input, PasswordInput } from "@ngrok/mantle/input";
									import { TabBadge, Tabs, TabsContent, TabsList, TabsTrigger } from "@ngrok/mantle/tabs";

									<Tabs orientation="horizontal" defaultValue="account" className="w-[400px]">
										<TabsList>
											<TabsTrigger value="account">
												<User />
												Account
												<TabBadge>2</TabBadge>
											</TabsTrigger>
											<TabsTrigger value="password">
												<ShieldCheck />
												Password
											</TabsTrigger>
										</TabsList>
										<TabsContent value="account">
											<Card>
												<CardHeader>
													<CardTitle>Account</CardTitle>
													<p className="text-muted">Make changes to your account here. Click save when you're done.</p>
												</CardHeader>
												<CardBody className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="name">Name</label>
														<Input id="name" defaultValue="Cody Price" />
													</div>
													<div className="space-y-1">
														<label htmlFor="username">Username</label>
														<Input id="username" defaultValue="@cody-dot-js" />
													</div>
												</CardBody>
												<CardFooter>
													<Button type="button">Save changes</Button>
												</CardFooter>
											</Card>
										</TabsContent>
										<TabsContent value="password">
											<Card>
												<CardHeader>
													<CardTitle>Password</CardTitle>
													<p className="text-muted">Change your password here. After saving, you'll be logged out.</p>
												</CardHeader>
												<CardBody className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="current">Current password</label>
														<PasswordInput id="current" />
													</div>
													<div className="space-y-1">
														<label htmlFor="new">New password</label>
														<PasswordInput id="new" />
													</div>
												</CardBody>
												<CardFooter>
													<Button type="button">Save password</Button>
												</CardFooter>
											</Card>
										</TabsContent>
									</Tabs>
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
				<p className="text-xl text-body font-body">
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
							<Link to={href("/base/colors")}>See our colors!</Link>
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
									import { Link } from "react-router";

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
				<p className="text-xl text-body font-body">
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
