import { Anchor } from "@/anchor";
import { Button } from "@/button";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { Fire } from "@phosphor-icons/react/Fire";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Example } from "~/components/example";
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
		{ title: "@ngrok/mantle — Button" },
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
				<h1 id="button" className="text-5xl font-medium">
					Button
				</h1>
				<p className="text-xl text-body">Initiates an action, such as completing a task or submitting information</p>
				<div>
					<Example className="mt-4 flex flex-wrap gap-6">
						<div>
							<p className="mb-2 text-center font-mono text-xs">Default</p>
							<div className="flex items-center gap-2">
								<Button appearance="ghost" priority="default">
									Ghost
								</Button>
								<Button appearance="filled" priority="default">
									Filled
								</Button>
								<Button appearance="outlined" priority="default">
									Outlined
								</Button>
								<Button appearance="link" priority="default">
									Link
								</Button>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Neutral</p>
							<div className="flex items-center gap-2">
								<Button appearance="ghost" priority="neutral">
									Ghost
								</Button>
								<Button appearance="filled" priority="neutral">
									Filled
								</Button>
								<Button appearance="outlined" priority="neutral">
									Outlined
								</Button>
								<Button appearance="link" priority="neutral">
									Link
								</Button>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Danger</p>
							<div className="flex items-center gap-2">
								<Button appearance="ghost" priority="danger">
									Ghost
								</Button>
								<Button appearance="filled" priority="danger">
									Filled
								</Button>
								<Button appearance="outlined" priority="danger">
									Outlined
								</Button>
								<Button appearance="link" priority="danger">
									Link
								</Button>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									import { Button } from "@ngrok/mantle";

									<Button>Outlined</Button>
									<Button appearance="filled">Filled</Button>
									<Button appearance="ghost">Ghost</Button>
									<Button appearance="link">Link</Button>

									<Button priority="neutral">Outlined</Button>
									<Button priority="neutral" appearance="filled">Filled</Button>
									<Button priority="neutral" appearance="ghost">Ghost</Button>
									<Button priority="neutral" appearance="link">Link</Button>

									<Button priority="danger">Outlined</Button>
									<Button priority="danger" appearance="filled">Filled</Button>
									<Button priority="danger" appearance="ghost">Ghost</Button>
									<Button priority="danger" appearance="link">Link</Button>
								`}
							</CodeBlockCode>
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
							<Button icon={<Fire weight="fill" />}>Icon Start</Button>
							<Button icon={<Fire weight="fill" />} iconPlacement="end">
								Icon End
							</Button>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									import { Button } from "@ngrok/mantle";
									import { Fire } from "@phosphor-icons/react/Fire";

									<Button icon={<Fire weight="fill" />}>Icon Start</Button>
									<Button icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End
									</Button>
								`}
							</CodeBlockCode>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mb-4 space-y-4">
				<h2 id="example-state" className="text-3xl font-medium">
					State: Idle and Pending
				</h2>
				<p className="text-xl text-body">
					Use <InlineCode>state</InlineCode> to indicate if the button is in a loading state. By default, the button is
					in an <InlineCode>idle</InlineCode> state. If you set the state to <InlineCode>pending</InlineCode>, the
					button will render a spinner and disable user interaction. If an icon is given, it will be replaced with the
					spinner. If no icon is given, the spinner will render on the side defined by{" "}
					<InlineCode>iconPlacement</InlineCode>.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<div>
							<p className="mb-2 text-center font-mono text-xs">Idle</p>
							<div className="flex items-center gap-2">
								<Button>No Icon + Idle</Button>
								<Button icon={<Fire weight="fill" />}>Icon Start + Idle</Button>
								<Button icon={<Fire weight="fill" />} iconPlacement="end">
									Icon End + Idle
								</Button>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Pending</p>
							<div className="flex items-center gap-2">
								<Button state="pending">No Icon + Pending</Button>
								<Button icon={<Fire weight="fill" />} state="pending">
									Icon Start + Pending
								</Button>
								<Button icon={<Fire weight="fill" />} iconPlacement="end" state="pending">
									Icon End + Pending
								</Button>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									import { Button } from "@ngrok/mantle";
									import { Fire } from "@phosphor-icons/react/Fire";

									<Button>No Icon + Idle</Button>
									<Button icon={<Fire weight="fill" />}>Icon Start + Idle</Button>
									<Button icon={<Fire weight="fill" />} iconPlacement="end">
										Icon End + Idle
									</Button>
									<Button state="pending">No Icon + Pending</Button>
									<Button icon={<Fire weight="fill" />} state="pending">
										Icon Start + Pending
									</Button>
									<Button icon={<Fire weight="fill" />} iconPlacement="end" state="pending">
										Icon End + Pending
									</Button>
								`}
							</CodeBlockCode>
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
					<InlineCode>remix</InlineCode> or <InlineCode>react-router</InlineCode>.
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
							<CodeBlockCode language="tsx">
								{code`
									import { Button } from "@ngrok/mantle";
									import { Fire } from "@phosphor-icons/react/Fire";
									import { Link } from "react-router-dom";

									<Button appearance="filled" icon={<Fire weight="fill" />} asChild>
										<Link to="/base/colors">See our colors!</Link>
									</Button>
								`}
							</CodeBlockCode>
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
							<StringPropType value="ghost" />
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
								Indicates the importance or impact level of the button, affecting its color and potentially its styling
								to communicate its purpose to the user.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="state" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="idle" />
								</li>
								<li>
									<StringPropType value="pending" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="idle" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The state of the button. If the button should present a "loading state", use{" "}
								<InlineCode>pending</InlineCode>. Setting the state to <InlineCode>pending</InlineCode> will replace any
								icon with a spinner, or add one if an icon wasn't given. It will also disable user interaction with the
								button and set <InlineCode>aria-disabled</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
