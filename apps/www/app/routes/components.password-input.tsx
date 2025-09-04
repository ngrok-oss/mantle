import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { PasswordInput } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
import { useState } from "react";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.password-input";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — PasswordInput" },
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

const ControlledVisibility = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex flex-wrap items-center gap-2">
			<PasswordInput
				showValue={showPassword}
				onValueVisibilityChange={setShowPassword}
			/>
			<Button
				type="button"
				onClick={() => {
					setShowPassword((v) => !v);
				}}
			>
				{showPassword ? "Hide" : "Show"} Password
			</Button>
		</div>
	);
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="password-input">Password Input</PageHeader>
				<p className="font-body text-body text-xl">
					Fundamental component for password inputs.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<Label className="block w-full max-w-64 space-y-1">
							<p>Password</p>
							<PasswordInput />
						</Label>
						<Label className="block w-full max-w-64 space-y-1">
							<p>Password (error)</p>
							<PasswordInput validation="error" />
						</Label>
						<Label className="block w-full max-w-64 space-y-1">
							<p>Controlled Visibility</p>
							<ControlledVisibility />
						</Label>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { PasswordInput } from "@ngrok/mantle/input";

									<PasswordInput />
									<PasswordInput invalid />
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>PasswordInput</Code> accepts the following props in addition
					to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">
						standard HTML input attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="onValueVisibilityChange" optional />
						<PropTypeCell>
							<FuncPropType value="(value: boolean) => void" />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Callback for when the visibility of the password value changes.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="showValue" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>Show/hide the password value as a controlled state</p>
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
									<FuncPropType
										value={`() => "error" | "success" | "warning" | false`}
									/>
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell className="space-y-2">
							<p>
								Use the <Code>validation</Code> prop to show if the input has a
								specific validation status. This will change the border and
								outline of the input.
							</p>
							<p>
								The <Code>false</Code> type is useful when using
								short-circuiting logic so that you don't need to use a ternary
								with <Code>undefined</Code>.
							</p>
							<p>
								Setting <Code>validation</Code> to <Code>error</Code> also sets{" "}
								<Code>aria-invalid</Code>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
