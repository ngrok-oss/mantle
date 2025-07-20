import { Anchor } from "@ngrok/mantle/anchor";
import { Card } from "@ngrok/mantle/card";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Icon } from "@ngrok/mantle/icon";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Tabs } from "@ngrok/mantle/tabs";
import { GlobeIcon } from "@phosphor-icons/react/Globe";
import { ShieldCheckIcon } from "@phosphor-icons/react/ShieldCheck";
import { UserIcon } from "@phosphor-icons/react/User";
import { Link, href } from "react-router";
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
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
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
							<Tabs.Root orientation="horizontal" defaultValue="colors">
								<Tabs.List>
									<Tabs.Trigger value="colors" asChild>
										<Link to={href("/base/colors")}>Colors</Link>
									</Tabs.Trigger>
									<Tabs.Trigger value="shadows" asChild>
										<Link to={href("/base/shadows")}>Shadows</Link>
									</Tabs.Trigger>
									<Tabs.Trigger disabled value="tailwind-variants" asChild>
										<Link to={href("/base/tailwind-variants")}>
											Tailwind Variants
										</Link>
									</Tabs.Trigger>
									<Tabs.Trigger value="typography" asChild>
										<Link to={href("/base/typography")}>Typography</Link>
									</Tabs.Trigger>
								</Tabs.List>
							</Tabs.Root>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs.Root orientation="horizontal" defaultValue="tab-1">
								<Tabs.List>
									<Tabs.Trigger value="tab-1">Tab Title</Tabs.Trigger>
									<Tabs.Trigger value="tab-2">Tab Title</Tabs.Trigger>
									<Tabs.Trigger disabled value="tab-3">
										Tab Title
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-4">Tab Title</Tabs.Trigger>
								</Tabs.List>
							</Tabs.Root>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs.Root orientation="horizontal" defaultValue="tab-1">
								<Tabs.List>
									<Tabs.Trigger value="tab-1">
										<Icon svg={<GlobeIcon />} />
										Tab Title
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-2">
										<Icon svg={<GlobeIcon />} />
										Tab Title
									</Tabs.Trigger>
									<Tabs.Trigger disabled value="tab-3">
										<Icon svg={<GlobeIcon />} />
										Tab Title
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-4">
										<Icon svg={<GlobeIcon />} />
										Tab Title
									</Tabs.Trigger>
								</Tabs.List>
							</Tabs.Root>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs.Root orientation="horizontal" defaultValue="tab-1">
								<Tabs.List>
									<Tabs.Trigger value="tab-1">
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-2">
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
									<Tabs.Trigger disabled value="tab-3">
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-4">
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
								</Tabs.List>
							</Tabs.Root>
						</div>
						<div className="scrollbar overflow-x-scroll">
							<Tabs.Root orientation="horizontal" defaultValue="tab-1">
								<Tabs.List>
									<Tabs.Trigger value="tab-1">
										<Icon svg={<GlobeIcon />} />
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-2">
										<Icon svg={<GlobeIcon />} />
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
									<Tabs.Trigger disabled value="tab-3">
										<Icon svg={<GlobeIcon />} />
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
									<Tabs.Trigger value="tab-4">
										<Icon svg={<GlobeIcon />} />
										Tab Title
										<Tabs.Badge>32</Tabs.Badge>
									</Tabs.Trigger>
								</Tabs.List>
							</Tabs.Root>
						</div>
						<Tabs.Root
							orientation="horizontal"
							defaultValue="account"
							className="w-100 max-w-[400px]"
						>
							<Tabs.List>
								<Tabs.Trigger value="account">
									<Icon svg={<UserIcon />} />
									Account
									<Tabs.Badge>2</Tabs.Badge>
								</Tabs.Trigger>
								<Tabs.Trigger value="password">
									<Icon svg={<ShieldCheckIcon />} />
									Password
								</Tabs.Trigger>
							</Tabs.List>
							<Tabs.Content value="account">
								<Card.Root>
									<Card.Header>
										<Card.Title>Account</Card.Title>
										<p className="text-muted">
											Make changes to your account here. Click save when you're
											done.
										</p>
									</Card.Header>
								</Card.Root>
							</Tabs.Content>
							<Tabs.Content value="password">
								<Card.Root>
									<Card.Header>
										<Card.Title>Password</Card.Title>
										<p className="text-muted">
											Change your password here. After saving, you'll be logged
											out.
										</p>
									</Card.Header>
								</Card.Root>
							</Tabs.Content>
						</Tabs.Root>
						<Tabs.Root
							orientation="vertical"
							defaultValue="account"
							className="scrollbar max-w-xl overflow-x-scroll"
						>
							<Tabs.List>
								<Tabs.Trigger value="account">Account</Tabs.Trigger>
								<Tabs.Trigger value="password">Password</Tabs.Trigger>
								<Tabs.Trigger value="disabled-tab" disabled>
									Disabled tab
								</Tabs.Trigger>
							</Tabs.List>
							<Tabs.Content value="account">
								<Card.Root>
									<Card.Header>
										<Card.Title>Account</Card.Title>
										<p className="text-muted">
											Make changes to your account here. Click save when you're
											done.
										</p>
									</Card.Header>
								</Card.Root>
							</Tabs.Content>
							<Tabs.Content value="password">
								<Card.Root>
									<Card.Header>
										<Card.Title>Password</Card.Title>
										<p className="text-muted">
											Change your password here. After saving, you'll be logged
											out.
										</p>
									</Card.Header>
								</Card.Root>
							</Tabs.Content>
						</Tabs.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle/button";
									import { Card } from "@ngrok/mantle/card";
									import { Icon } from "@ngrok/mantle/icon";
									import { Input, PasswordInput } from "@ngrok/mantle/input";
									import { Tabs } from "@ngrok/mantle/tabs";

									<Tabs.Root orientation="horizontal" defaultValue="account" className="w-[400px]">
										<Tabs.List>
											<Tabs.Trigger value="account">
												<Icon svg={<UserIcon />} />
												Account
												<Tabs.Badge>2</Tabs.Badge>
											</Tabs.Trigger>
											<Tabs.Trigger value="password">
												<Icon svg={<ShieldCheckIcon />} />
												Password
											</Tabs.Trigger>
										</Tabs.List>
										<Tabs.Content value="account">
											<Card.Root>
												<Card.Header>
													<Card.Title>Account</Card.Title>
													<p className="text-muted">Make changes to your account here. Click save when you're done.</p>
												</Card.Header>
												<Card.Body className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="name">Name</label>
														<Input id="name" defaultValue="Cody Price" />
													</div>
													<div className="space-y-1">
														<label htmlFor="username">Username</label>
														<Input id="username" defaultValue="@cody-dot-js" />
													</div>
												</Card.Body>
												<Card.Footer>
													<Button type="button">Save changes</Button>
												</Card.Footer>
											</Card.Root>
										</Tabs.Content>
										<Tabs.Content value="password">
											<Card.Root>
												<Card.Header>
													<Card.Title>Password</Card.Title>
													<p className="text-muted">Change your password here. After saving, you'll be logged out.</p>
												</Card.Header>
												<Card.Body className="space-y-2">
													<div className="space-y-1">
														<label htmlFor="current">Current password</label>
														<PasswordInput id="current" />
													</div>
													<div className="space-y-1">
														<label htmlFor="new">New password</label>
														<PasswordInput id="new" />
													</div>
												</Card.Body>
												<Card.Footer>
													<Button type="button">Save password</Button>
												</Card.Footer>
											</Card.Root>
										</Tabs.Content>
									</Tabs.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>Tabs</InlineCode> components accept the following
					props.
				</p>

				<div className="space-y-8">
					<div className="space-y-4">
						<h3 id="api-tabs-root" className="text-2xl font-medium">
							Tabs.Root
						</h3>
						<p className="font-body text-body">
							The root container of the tabs component that provides context for
							all tab components. Based on{" "}
							<Anchor href="https://www.radix-ui.com/primitives/docs/components/tabs#root">
								Radix Tabs Root
							</Anchor>
							.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="defaultValue" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The value of the tab that should be active when initially
										rendered. Use when you do not need to control the state of
										the tabs.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="value" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The controlled value of the tab to activate. Should be used
										in conjunction with <InlineCode>onValueChange</InlineCode>.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="onValueChange" optional />
								<PropTypeCell>
									<StringPropType value="(value: string) => void" />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Event handler called when the value changes.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="orientation" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="horizontal" />
										</li>
										<li>
											<StringPropType value="vertical" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="horizontal" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>The orientation of the tabs.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="className" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										Additional CSS classes to apply to the tabs root element.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-tabs-list" className="text-2xl font-medium">
							Tabs.List
						</h3>
						<p className="font-body text-body">
							Contains the triggers that are aligned along the edge of the
							active content. Based on{" "}
							<Anchor href="https://www.radix-ui.com/primitives/docs/components/tabs#list">
								Radix Tabs List
							</Anchor>
							.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="className" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										Additional CSS classes to apply to the tabs list element.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-tabs-trigger" className="text-2xl font-medium">
							Tabs.Trigger
						</h3>
						<p className="font-body text-body">
							The button that activates its associated content. Based on{" "}
							<Anchor href="https://www.radix-ui.com/primitives/docs/components/tabs#trigger">
								Radix Tabs Trigger
							</Anchor>
							.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="value" />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										A unique value that associates the trigger with a content.
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
										Use the <InlineCode>asChild</InlineCode> prop to compose the
										trigger styling and functionality onto alternative element
										types or your own React components.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="disabled" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={false} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										When <InlineCode>true</InlineCode>, prevents the user from
										interacting with the tab.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="className" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Additional CSS classes to apply to the trigger element.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-tabs-content" className="text-2xl font-medium">
							Tabs.Content
						</h3>
						<p className="font-body text-body">
							Contains the content associated with each trigger. Based on{" "}
							<Anchor href="https://www.radix-ui.com/primitives/docs/components/tabs#content">
								Radix Tabs Content
							</Anchor>
							.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="value" />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										A unique value that associates the content with a trigger.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="className" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Additional CSS classes to apply to the content element.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-tabs-badge" className="text-2xl font-medium">
							Tabs.Badge
						</h3>
						<p className="font-body text-body">
							A badge component that can be used inside tab triggers to display
							additional information like counts or status indicators.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>The content to be rendered inside the badge.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="className" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Additional CSS classes to apply to the badge element.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>
				</div>
			</section>
		</div>
	);
}
