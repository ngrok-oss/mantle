import { Anchor } from "@/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { Icon } from "@/icon";
import { InlineCode } from "@/inline-code";
import { Fire } from "@phosphor-icons/react/Fire";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import {
	ObjectPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Icon" },
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
				<h1 id="icon" className="text-5xl font-medium">
					Icon
				</h1>
				<p className="font-body text-xl text-body">
					Decorates an svg icon with automatic sizing. Useful when applying base styles to{" "}
					<Anchor href="https://phosphoricons.com">phosphor icons</Anchor>.
				</p>
				<div>
					<Example>
						<Icon svg={<Fire />} />
						<Icon className="text-danger-600" svg={<Fire weight="fill" />} />
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Icon } from "@ngrok/mantle/icon";
									import { Fire } from "@phosphor-icons/react";

									<Icon svg={<Fire />} />
									<Icon className="text-danger-600" svg={<Fire weight="fill" />} />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="example-class-name" className="text-3xl font-medium">
					Merging <InlineCode>className</InlineCode>s
				</h2>
				<p className="font-body text-xl text-body">
					The <InlineCode>Icon</InlineCode> merges <InlineCode>className</InlineCode> selectors with the following order
					of precedence (last one wins):
				</p>
				<ol className="font-body ml-8 list-decimal text-body">
					<li>Icon base classes</li>
					<li>svg className</li>
					<li>Icon className</li>
				</ol>
				<div>
					<Example className="flex-col gap-6">
						<div className="text-center">
							<p>
								When <InlineCode>className</InlineCode> is not specified:
							</p>
							<div className="flex items-center justify-center">
								<Icon svg={<Fire />} />
							</div>
						</div>
						<div className="text-center">
							<p>
								When <InlineCode>className</InlineCode> is only specified on <InlineCode>svg</InlineCode>:
							</p>
							<div className="flex items-center justify-center">
								<Icon svg={<Fire className="size-12 sm:size-16" />} />
							</div>
						</div>
						<div className="text-center">
							<p>
								When <InlineCode>className</InlineCode> is specified on both <InlineCode>svg</InlineCode> and{" "}
								<InlineCode>Icon</InlineCode>:
							</p>
							<div className="flex items-center justify-center">
								<Icon className="size-20 sm:size-28" svg={<Fire className="size-12 sm:size-16" />} />
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Icon } from "@ngrok/mantle/icon"
									import { Fire } from "@phosphor-icons/react";

									<Icon svg={<Fire />} />
									<Icon svg={<Fire className="size-12 sm:size-16" />} />
									<Icon className="size-20 sm:size-28" svg={<Fire className="size-12 sm:size-16" />} />
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
				<p className="font-body text-xl text-body">
					The <InlineCode>Icon</InlineCode> accepts the following props:
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
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className">the MDN docs</Anchor>.
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="style" optional />
						<PropTypeCell>
							<ObjectPropType name="React.CSSProperties" />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							An object with CSS styles, for example <InlineCode>{`{ fontWeight: 'bold', margin: 20 }`}</InlineCode>.
							Similarly to the DOM style property, the CSS property names need to be written as camelCase, for example{" "}
							<InlineCode>fontWeight</InlineCode> instead of <InlineCode>font-weight</InlineCode>. You can pass strings
							or numbers as values. If you pass a number, like <InlineCode>width: 100</InlineCode>, React will
							automatically append px (“pixels”) to the value unless it’s a unitless property. See
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style">the MDN docs</Anchor>.
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
