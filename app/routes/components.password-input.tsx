import { Anchor } from "@/anchor";
import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { PasswordInput } from "@/input";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
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
import { useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — PasswordInput" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

const ControlledVisibility = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex items-center gap-2">
			<PasswordInput showValue={showPassword} onValueVisibilityChange={setShowPassword} />
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
			<section className="mb-4 space-y-4">
				<h1 id="password-input" className="text-5xl font-medium">
					Password Input
				</h1>
				<p className="mt-4 text-xl text-body">Fundamental component for password inputs.</p>
				<div>
					<Example className="mt-4 flex-col gap-4">
						<label className="block w-full max-w-64 space-y-1">
							<p>Password</p>
							<PasswordInput />
						</label>
						<label className="block w-full max-w-64 space-y-1">
							<p>Password (error)</p>
							<PasswordInput validation="error" />
						</label>
						<label className="block w-full max-w-64 space-y-1">
							<p>Controlled Visibility</p>
							<ControlledVisibility />
						</label>
						<label className="block w-full max-w-64 space-y-1">
							<p>Masked Hidden Value</p>
							<PasswordInput maskHiddenValue />
						</label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { PasswordInput } from "@ngrok/mantle/input";

									<PasswordInput />
									<PasswordInput invalid />
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
					The <InlineCode>PasswordInput</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">
						standard HTML input attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="maskHiddenValue" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Mask the true length of the password input with a fixed width when the value is hidden and the input is
								not focused.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="onValueVisibilityChange" optional />
						<PropTypeCell>{`(value: boolean) => void`}</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>Callback for when the visibility of the password value changes.</p>
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
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Use the <InlineCode>validation</InlineCode> prop to show if the input has a specific validation status.
								This will change the border and outline of the input. Setting <InlineCode>validation</InlineCode> to{" "}
								<InlineCode>error</InlineCode> also sets <InlineCode>aria-invalid</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
