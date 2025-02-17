import { Anchor } from "@ngrok/mantle/anchor";
import { IconButton } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ngrok/mantle/tooltip";
import { Globe } from "@phosphor-icons/react/Globe";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";
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
	StringPropType,
} from "~/components/props-table";
import { route } from "~/types/routes";
import type { Route } from "./+types/components.icon-button";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Icon Button" },
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

const DisabledTooltip = ({ children }: PropsWithChildren) => (
	<Tooltip>
		<TooltipTrigger asChild>{children}</TooltipTrigger>
		<TooltipContent>Tooltips work on disabled buttons!</TooltipContent>
	</Tooltip>
);

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="icon-button">Icon Button</PageHeader>

				<p className="font-body text-body text-xl">
					Initiates an action, such as completing a task or submitting
					information. Renders only a single icon as children with an
					accessible, screen-reader-only label.
				</p>
				<div>
					<Example className="flex flex-wrap gap-6">
						<div>
							<p className="mb-2 text-center font-mono text-xs">Size xs</p>
							<div className="flex items-center gap-2">
								<IconButton
									type="button"
									appearance="ghost"
									label="prestige worldwide"
									size="xs"
									icon={<Globe />}
								/>
								<IconButton
									type="button"
									appearance="outlined"
									label="prestige worldwide"
									size="xs"
									icon={<Globe />}
								/>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Size sm</p>
							<div className="flex items-center gap-2">
								<IconButton
									type="button"
									appearance="ghost"
									label="prestige worldwide"
									size="sm"
									icon={<Globe />}
								/>
								<IconButton
									type="button"
									appearance="outlined"
									label="prestige worldwide"
									size="sm"
									icon={<Globe />}
								/>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Size md</p>
							<div className="flex items-center gap-2">
								<IconButton
									type="button"
									appearance="ghost"
									label="prestige worldwide"
									icon={<Globe />}
								/>
								<IconButton
									type="button"
									appearance="outlined"
									label="prestige worldwide"
									icon={<Globe />}
								/>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">Disabled</p>
							<div className="flex items-center gap-2">
								<DisabledTooltip>
									<IconButton
										disabled
										type="button"
										appearance="ghost"
										label="prestige worldwide"
										icon={<Globe />}
									/>
								</DisabledTooltip>
								<DisabledTooltip>
									<IconButton
										disabled
										type="button"
										appearance="outlined"
										label="prestige worldwide"
										icon={<Globe />}
									/>
								</DisabledTooltip>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="xs" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="xs" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="sm" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="sm" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" size="md" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" size="md" icon={<Globe />} />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="example-loading" className="text-3xl font-medium">
					isLoading
				</h2>
				<p className="font-body text-body text-xl">
					<InlineCode>isLoading</InlineCode> determines whether or not the icon
					button is in a loading state, default <InlineCode>false</InlineCode>.
					Setting <InlineCode>isLoading</InlineCode> will replace the icon with
					a spinner. It will also disable user interaction with the button and
					set <InlineCode>aria-disabled</InlineCode>.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<div>
							<p className="mb-2 text-center font-mono text-xs">idle</p>
							<div className="flex items-center gap-2">
								<IconButton
									type="button"
									appearance="ghost"
									label="prestige worldwide"
									icon={<Globe />}
								/>
								<IconButton
									type="button"
									appearance="outlined"
									label="prestige worldwide"
									icon={<Globe />}
								/>
							</div>
						</div>
						<div>
							<p className="mb-2 text-center font-mono text-xs">isLoading</p>
							<div className="flex items-center gap-2">
								<IconButton
									type="button"
									appearance="ghost"
									label="prestige worldwide"
									isLoading
									icon={<Globe />}
								/>
								<IconButton
									type="button"
									appearance="outlined"
									label="prestige worldwide"
									isLoading
									icon={<Globe />}
								/>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";

									<IconButton type="button" appearance="ghost" label="prestige worldwide" icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" icon={<Globe />} />

									<IconButton type="button" appearance="ghost" label="prestige worldwide" isLoading icon={<Globe />} />
									<IconButton type="button" appearance="outlined" label="prestige worldwide" isLoading icon={<Globe />} />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="font-body text-body text-xl">
					When you want to render <span className="italic">something else</span>{" "}
					as a <InlineCode>IconButton</InlineCode>, you can use the{" "}
					<InlineCode>asChild</InlineCode> prop to compose. This is useful when
					you want to splat the <InlineCode>IconButton</InlineCode> styling onto
					a <InlineCode>Link</InlineCode> from <InlineCode>remix</InlineCode> or{" "}
					<InlineCode>react-router</InlineCode>. Keep in mind that when you use{" "}
					<InlineCode>asChild</InlineCode> the <InlineCode>type</InlineCode>{" "}
					prop will <strong>NOT</strong> be passed to the child component.
				</p>
				<div>
					<Example>
						<IconButton
							appearance="outlined"
							asChild
							label="prestige worldwide"
							icon={<Globe />}
						>
							<Link to={route("/base/colors")} />
						</IconButton>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { Fire } from "@phosphor-icons/react";
									import { Link } from "react-router";

									<IconButton appearance="outlined" asChild label="prestige worldwide" icon={<Globe />}>
										<Link to={route("/base/colors")} />
									</IconButton>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>IconButton</InlineCode> accepts the following props in
					addition to the{" "}
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
								Use the <InlineCode>asChild</InlineCode> prop to compose the{" "}
								<InlineCode>Button</InlineCode> styling and functionality onto
								alternative element types or your own React components.
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
								The accessible label for the icon. This label will be visually
								hidden but announced to screen reader users, similar to alt text
								for img tags.
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
								Determines whether or not the icon button is in a loading state,
								default <InlineCode>false</InlineCode>. Setting{" "}
								<InlineCode>isLoading</InlineCode> will replace the icon with a
								spinner. It will also disable user interaction with the button
								and set <InlineCode>aria-disabled</InlineCode>.
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
								The default behavior of the <InlineCode>IconButton</InlineCode>.
								Unlike the native <InlineCode>button</InlineCode> element,
								unless you use the <InlineCode>asChild</InlineCode> prop,{" "}
								<span className="font-semibold">
									this prop is required and has no default value
								</span>
								. See{" "}
								<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type">
									the MDN docs
								</Anchor>{" "}
								for more information.
							</p>
							<ul className="list-disc pl-5">
								<li>
									<p>
										<InlineCode>"button"</InlineCode>: The button has no default
										behavior, and does nothing when pressed by default.
									</p>
								</li>
								<li>
									<p>
										<InlineCode>"reset"</InlineCode>: The button resets all the
										controls to their initial values.
									</p>
								</li>
								<li>
									<p>
										<InlineCode>"submit"</InlineCode>: The button submits the
										form data to the server.
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
