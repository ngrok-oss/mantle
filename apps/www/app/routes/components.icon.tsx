import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Icon } from "@ngrok/mantle/icon";
import { FireIcon } from "@phosphor-icons/react/Fire";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	ObjectPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.icon";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Icon" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="icon">Icon</PageHeader>
				<p className="font-body text-body text-xl">
					Decorates an svg icon with automatic sizing. Useful when applying base styles to{" "}
					<Anchor href="https://phosphoricons.com">phosphor icons</Anchor>.
				</p>
				<div>
					<Example>
						<Icon svg={<FireIcon />} />
						<Icon className="text-danger-600" svg={<FireIcon weight="fill" />} />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Icon } from "@ngrok/mantle/icon";
									import { FireIcon } from "@phosphor-icons/react/Fire";

									<Icon svg={<FireIcon />} />
									<Icon className="text-danger-600" svg={<FireIcon weight="fill" />} />
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="examples" className="text-3xl font-medium">
						<h2>Examples</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="example-class-name" className="text-xl font-medium text-strong">
							<h3>
								Merging <Code>className</Code>s
							</h3>
						</HashLinkHeading>
					</header>
					<p className="font-body text-body text-xl">
						The <Code>Icon</Code> merges <Code>className</Code> selectors with the following order
						of precedence (last one wins):
					</p>
					<ol className="font-body text-body ml-8 list-decimal">
						<li>
							SvgOnly base classes (only <Code>"shrink-0"</Code>)
						</li>
						<li>Icon base classes</li>
						<li>Icon className</li>
						<li>svg className</li>
					</ol>
					<div>
						<Example className="flex-col gap-6">
							<div className="text-center">
								<p>
									When <Code>className</Code> is not specified:
								</p>
								<div className="flex items-center justify-center">
									<Icon svg={<FireIcon />} />
								</div>
							</div>
							<div className="text-center">
								<p>
									When <Code>className</Code> is only specified on <Code>svg</Code>:
								</p>
								<div className="flex items-center justify-center">
									<Icon svg={<FireIcon className="size-12 sm:size-16" />} />
								</div>
							</div>
							<div className="text-center">
								<p>
									When <Code>className</Code> is only specified on <Code>Icon</Code>:
								</p>
								<div className="flex items-center justify-center">
									<Icon className="size-20 sm:size-28" svg={<FireIcon />} />
								</div>
							</div>
							<div className="text-center">
								<p>
									When <Code>className</Code> is specified on both <Code>svg</Code> and{" "}
									<Code>Icon</Code>:
								</p>
								<div className="flex items-center justify-center">
									<Icon
										className="size-20 sm:size-28"
										svg={<FireIcon className="size-12 sm:size-16" />}
									/>
								</div>
							</div>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
									import { Icon } from "@ngrok/mantle/icon"
									import { FireIcon } from "@phosphor-icons/react/Fire";

									<Icon svg={<FireIcon />} />
									<Icon svg={<FireIcon className="size-12 sm:size-16" />} />
									<Icon className="size-20 sm:size-28" svg={<FireIcon />} />
									<Icon className="size-20 sm:size-28" svg={<FireIcon className="size-12 sm:size-16" />} />
								`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Icon</Code> accepts the following props:
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="className" optional />
						<PropTypeCell>
							<StringPropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							A string. Specifies the element’s CSS class name. See{" "}
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className">
								the MDN docs
							</Anchor>
							.
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="style" optional />
						<PropTypeCell>
							<ObjectPropType name="React.CSSProperties" />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							An object with CSS styles, for example{" "}
							<Code>{`{ fontWeight: 'bold', margin: 20 }`}</Code>. Similarly to the DOM style
							property, the CSS property names need to be written as camelCase, for example{" "}
							<Code>fontWeight</Code> instead of <Code>font-weight</Code>. You can pass strings or
							numbers as values. If you pass a number, like <Code>width: 100</Code>, React will
							automatically append px (“pixels”) to the value unless it’s a unitless property. See
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style">
								the MDN docs
							</Anchor>
							.
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="svg" />
						<PropTypeCell>
							<ReactNodePropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>A single SVG icon passed as a JSX tag.</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
