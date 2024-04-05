import { Anchor } from "@/anchor";
import { IconButton } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { Globe } from "@phosphor-icons/react/Globe";
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
	StringPropType,
} from "~/components/props-table";
import { route } from "~/types/routes";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Icon Button" },
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
				<h1 id="icon-button" className="text-5xl font-medium">
					Icon Button
				</h1>
				<p className="text-xl text-body">
					Initiates an action, such as completing a task or submitting information. Renders only a single icon as
					children with an accessible, screen-reader-only label.
				</p>
				<div>
					<Example className="mt-4 flex flex-wrap gap-6">
						<div>
							<p className="mb-2 text-center font-mono text-xs">Size xs</p>
							<div className="flex items-center gap-2">
								<IconButton appearance="ghost" label="prestige worldwide" size="xs" icon={<Globe />} />
								<IconButton appearance="outlined" label="prestige worldwide" size="xs" icon={<Globe />} />
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Size sm</p>
							<div className="flex items-center gap-2">
								<IconButton appearance="ghost" label="prestige worldwide" size="sm" icon={<Globe />} />
								<IconButton appearance="outlined" label="prestige worldwide" size="sm" icon={<Globe />} />
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Size md</p>
							<div className="flex items-center gap-2">
								<IconButton appearance="ghost" label="prestige worldwide" icon={<Globe />} />
								<IconButton appearance="outlined" label="prestige worldwide" icon={<Globe />} />
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { IconButton } from "@ngrok/mantle";
									import { Fire } from "@phosphor-icons/react/Fire";

									<IconButton appearance="ghost" label="prestige worldwide" size="xs" icon={<Globe />} />
									<IconButton appearance="outlined" label="prestige worldwide" size="xs" icon={<Globe />} />

									<IconButton appearance="ghost" label="prestige worldwide" size="sm" icon={<Globe />} />
									<IconButton appearance="outlined" label="prestige worldwide" size="sm" icon={<Globe />} />

									<IconButton appearance="ghost" label="prestige worldwide" size="md" icon={<Globe />} />
									<IconButton appearance="outlined" label="prestige worldwide" size="md" icon={<Globe />} />
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
					<InlineCode>isLoading</InlineCode> determines whether or not the icon button is in a loading state, default{" "}
					<InlineCode>false</InlineCode>. Setting <InlineCode>isLoading</InlineCode> will replace the icon with a
					spinner. It will also disable user interaction with the button and set <InlineCode>aria-disabled</InlineCode>.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<div>
							<p className="mb-2 text-center font-mono text-xs">idle</p>
							<div className="flex items-center gap-2">
								<IconButton appearance="ghost" label="prestige worldwide" icon={<Globe />} />
								<IconButton appearance="outlined" label="prestige worldwide" icon={<Globe />} />
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">isLoading</p>
							<div className="flex items-center gap-2">
								<IconButton appearance="ghost" label="prestige worldwide" isLoading icon={<Globe />} />
								<IconButton appearance="outlined" label="prestige worldwide" isLoading icon={<Globe />} />
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle";
									import { Fire } from "@phosphor-icons/react/Fire";

									<IconButton appearance="ghost" label="prestige worldwide" icon={<Globe />} />
									<IconButton appearance="outlined" label="prestige worldwide" icon={<Globe />} />

									<IconButton appearance="ghost" label="prestige worldwide" isLoading icon={<Globe />} />
									<IconButton appearance="outlined" label="prestige worldwide" isLoading icon={<Globe />} />
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
					<InlineCode>remix</InlineCode> or <InlineCode>react-router</InlineCode>.
				</p>
				<div>
					<Example>
						<IconButton appearance="outlined" asChild label="prestige worldwide" icon={<Globe />}>
							<Link to={route("/base/colors")} />
						</IconButton>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Button } from "@ngrok/mantle";
									import { Fire } from "@phosphor-icons/react/Fire";
									import { Link } from "react-router-dom";

									<IconButton appearance="outlined" asChild label="prestige worldwide" icon={<Globe />}>
										<Link to={route("/base/colors")} />
									</IconButton>
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
					The <InlineCode>IconButton</InlineCode> accepts the following props in addition to the{" "}
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
									<StringPropType value="outlined" />
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
						<PropNameCell name="label" />
						<PropTypeCell>
							<StringPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								The accessible label for the icon. This label will be visually hidden but announced to screen reader
								users, similar to alt text for img tags.
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
								Determines whether or not the icon button is in a loading state, default <InlineCode>false</InlineCode>.
								Setting <InlineCode>isLoading</InlineCode> will replace the icon with a spinner. It will also disable
								user interaction with the button and set <InlineCode>aria-disabled</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="size" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="xs" />
								</li>
								<li>
									<StringPropType value="sm" />
								</li>
								<li>
									<StringPropType value="md" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="md" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The size of the <InlineCode>IconButton</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
