import { Anchor } from "@ngrok/mantle/anchor";
import { Checkbox } from "@ngrok/mantle/checkbox";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Label } from "@ngrok/mantle/label";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import {
	BooleanPropType,
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Checkbox" },
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
				<h1 className="text-5xl font-medium">Checkbox</h1>
				<p className="font-body text-xl text-body">
					A form control that allows the user to toggle between checked and not checked.
				</p>
				<div>
					<Example>
						<div className="flex flex-col">
							<Label htmlFor="terms" className="flex items-center gap-2">
								<Checkbox name="terms" id="terms" />
								Accept terms and conditions
							</Label>
							<Label htmlFor="unchecked" className="flex items-center gap-2">
								<Checkbox id="unchecked" name="unchecked" checked={false} readOnly />
								Unchecked (static)
							</Label>
							<Label htmlFor="checked" className="flex items-center gap-2">
								<Checkbox id="checked" name="checked" checked readOnly />
								Checked (static)
							</Label>
							<Label htmlFor="indeterminate" className="flex items-center gap-2">
								<Checkbox id="indeterminate" name="indeterminate" defaultChecked="indeterminate" readOnly />
								Indeterminate (static)
							</Label>
							<Label htmlFor="disabled-unchecked" className="flex items-center gap-2">
								<Checkbox disabled id="unchecked" name="unchecked" checked={false} readOnly />
								<span className="opacity-50">Disabled Unchecked (static)</span>
							</Label>
							<Label htmlFor="disabled-checked" className="flex items-center gap-2">
								<Checkbox disabled id="checked" name="checked" checked readOnly />
								<span className="opacity-50">Disabled Checked (static)</span>
							</Label>
							<Label htmlFor="disabled-indeterminate" className="flex items-center gap-2">
								<Checkbox disabled id="indeterminate" name="indeterminate" defaultChecked="indeterminate" readOnly />
								<span className="opacity-50">Disabled Indeterminate (static)</span>
							</Label>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
							import { Checkbox } from "@ngrok/mantle/checkbox";
							import { Label } from "@ngrok/mantle/label";

							<Label htmlFor="terms" className="flex items-center gap-2">
								<Checkbox name="terms" id="terms" />
								Accept terms and conditions
							</Label>
							<Label htmlFor="unchecked" className="flex items-center gap-2">
								<Checkbox id="unchecked" name="unchecked" checked={false} />
								Unchecked
							</Label>
							<Label htmlFor="checked" className="flex items-center gap-2">
								<Checkbox id="checked" name="checked" checked />
								Checked
							</Label>
							<Label htmlFor="indeterminate" className="flex items-center gap-2">
								<Checkbox id="indeterminate" name="indeterminate" checked="indeterminate" />
								Indeterminate
							</Label>
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
					The <InlineCode>Checkbox</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">
						standard HTML checkbox input attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="checked" optional />
						<PropTypeCell>
							<ul>
								<li>
									<BooleanPropType />
								</li>
								<li>
									<StringPropType value="indeterminate" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Whether the checkbox is checked or not. Setting this to <InlineCode>indeterminate</InlineCode> will show
								the indeterminate state. This is useful for when the checkbox is in a parent-child relationship, but
								this requires manual, controlled state.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="defaultChecked" optional />
						<PropTypeCell>
							<ul>
								<li>
									<BooleanPropType />
								</li>
								<li>
									<StringPropType value="indeterminate" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								The checked state of the checkbox when it is initially rendered. Use when you do not need to control its
								checked state.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="validation" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="error" />
								</li>
								<li>
									<StringPropType value="success" />
								</li>
								<li>
									<StringPropType value="warning" />
								</li>
								<li>
									<BooleanPropType value={false} />
								</li>
								<li>
									<FuncPropType value={`() => "error" | "success" | "warning" | false`} />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell className="space-y-2">
							<p>
								Use the <InlineCode>validation</InlineCode> prop to show if the checkbox has a specific validation
								status. This will change the border and outline of the checkbox.
							</p>
							<p>
								The <InlineCode>false</InlineCode> type is useful when using short-circuiting logic so that you don't
								need to use a ternary with <InlineCode>undefined</InlineCode>.
							</p>
							<p>
								Setting <InlineCode>validation</InlineCode> to <InlineCode>error</InlineCode> also sets{" "}
								<InlineCode>aria-invalid</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
