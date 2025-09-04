import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
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
import type { Route } from "./+types/components.separator";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Separator" },
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
				<PageHeader id="separator">Separator</PageHeader>
				<p className="font-body text-body text-xl">
					Visually or semantically separates content.
				</p>
				<div>
					<Example>
						<div className="space-y-4">
							<div className="space-y-1">
								<h4 className="text-sm font-medium leading-none">mantle</h4>
								<p className="text-muted-foreground text-sm">
									An open-source UI component library.
								</p>
							</div>
							<Separator className="my-4" />
							<Separator className="my-4" semantic />
							<div className="flex h-5 items-center gap-4 text-sm">
								Blog
								<Separator orientation="vertical" />
								Docs
								<Separator orientation="vertical" />
								Source
							</div>
							<HorizontalSeparatorGroup>
								<Separator />
								<h3>ngrok mantle</h3>
								<Separator />
							</HorizontalSeparatorGroup>
							<HorizontalSeparatorGroup>
								<h3>ngrok mantle</h3>
								<Separator />
							</HorizontalSeparatorGroup>
							<HorizontalSeparatorGroup>
								<Separator />
								<h3>ngrok mantle</h3>
							</HorizontalSeparatorGroup>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
							import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

							<div>
								<div className="space-y-1">
									<h4 className="text-sm font-medium leading-none">mantle</h4>
									<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
								</div>
								<Separator className="my-4" />
								<Separator className="my-4" semantic />
								<div className="flex h-5 items-center gap-4 text-sm">
									Blog
									<Separator orientation="vertical" />
									Docs
									<Separator orientation="vertical" />
									Source
								</div>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
								</HorizontalSeparatorGroup>
							</div>
						`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="composition" className="text-3xl font-medium">
					<h2>Composition</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					When you want to render <span className="italic">something else</span>{" "}
					as a <Code>HorizontalSeparatorGroup</Code> or <Code>Separator</Code>,
					you can use the <Code>asChild</Code> prop to compose.
				</p>
				<div>
					<Example>
						<div className="flex w-full max-w-96 flex-col space-y-16">
							<form>
								<fieldset className="space-y-4">
									<HorizontalSeparatorGroup className="w-full" asChild>
										<legend>
											Choose your favorite fruit!
											<Separator asChild>
												<span />
											</Separator>
										</legend>
									</HorizontalSeparatorGroup>

									<div className="space-y-2">
										<div className="space-x-2">
											<input
												type="radio"
												id="apple"
												name="monster"
												value="apple"
											/>
											<label htmlFor="apple">Apple</label>
										</div>

										<div className="space-x-2">
											<input
												type="radio"
												id="mango"
												name="monster"
												value="mango"
											/>
											<label htmlFor="mango">Mango</label>
										</div>

										<div className="space-x-2">
											<input
												type="radio"
												id="pear"
												name="monster"
												value="pear"
											/>
											<label htmlFor="pear">Pear</label>
										</div>
									</div>
								</fieldset>
							</form>

							<div className="flex h-5 items-center space-x-4 text-sm">
								<div>Blog</div>
								<Separator orientation="vertical" asChild>
									<span />
								</Separator>
								<div>Docs</div>
								<Separator orientation="vertical" asChild>
									<span />
								</Separator>
								<div>Source</div>
							</div>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

									<form>
										<fieldset className="space-y-4">
											<HorizontalSeparatorGroup className="w-full" asChild>
												<legend>
													Choose your favorite fruit!
													<Separator asChild>
														<span />
													</Separator>
												</legend>
											</HorizontalSeparatorGroup>

											<div className="space-y-2">
												<div className="space-x-2">
													<input type="radio" id="apple" name="monster" value="apple" />
													<label htmlFor="apple">Apple</label>
												</div>

												<div className="space-x-2">
													<input type="radio" id="mango" name="monster" value="mango" />
													<label htmlFor="mango">Mango</label>
												</div>

												<div className="space-x-2">
													<input type="radio" id="pear" name="monster" value="pear" />
													<label htmlFor="pear">Pear</label>
												</div>
											</div>
										</fieldset>
									</form>

									<div className="flex h-5 items-center space-x-4 text-sm">
										<div>Blog</div>
										<Separator orientation="vertical" asChild>
											<span />
										</Separator>
										<div>Docs</div>
										<Separator orientation="vertical" asChild>
											<span />
										</Separator>
										<div>Source</div>
									</div>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api" className="text-3xl font-medium">
						<h2>API Reference</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-separator"
							className="text-xl font-medium text-strong"
						>
							<h3>Separator</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							Visually or semantically separates content.
						</p>

						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
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
								<p>
									The orientation of the separator, does it render horizontally
									or verticallly.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="semantic" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									If <Code>true</Code>, the separator will be rendered with all
									accessibility-related attributes and{" "}
									<Code>role="separator"</Code>.
								</p>
								<p>
									If <Code>false</Code>, the separator is purely decorative and
									all accessibility-related attributes are updated so that the
									rendered element is removed from the accessibility tree.
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
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>Separator</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-horizontal-separator-group"
							className="text-xl font-medium text-strong"
						>
							<h3>HorizontalSeparatorGroup</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A container to layout a group of horizontal separators and other
							children.
						</p>

						<p className="font-body text-body">
							Overrides all children <Code>Separator</Code>s to be{" "}
							<Code>orientation="horizontal"</Code>.
						</p>

						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
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
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>HorizontalSeparatorGroup</Code> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
