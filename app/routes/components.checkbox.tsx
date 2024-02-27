import { Checkbox } from "@/checkbox";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

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
		<div>
			<h1 className="text-5xl font-medium">Checkbox</h1>
			<p className="text-secondary mt-4 text-xl">
				A form control that allows the user to toggle between checked and not checked.
			</p>

			<Example className="mt-4">
				<div className="flex flex-col">
					<label htmlFor="terms" className="flex items-center gap-2">
						<Checkbox name="terms" id="terms" />
						Accept terms and conditions
					</label>
					<label htmlFor="unchecked" className="flex items-center gap-2">
						<Checkbox id="unchecked" name="unchecked" checked={false} />
						Unchecked
					</label>
					<label htmlFor="checked" className="flex items-center gap-2">
						<Checkbox id="checked" name="checked" checked />
						Checked
					</label>
					<label htmlFor="indeterminate" className="flex items-center gap-2">
						<Checkbox id="indeterminate" name="indeterminate" checked="indeterminate" />
						Indeterminate
					</label>
					<label htmlFor="disabled-unchecked" className="flex items-center gap-2">
						<Checkbox disabled id="unchecked" name="unchecked" checked={false} />
						<span className="opacity-50">Disabled Unchecked</span>
					</label>
					<label htmlFor="disabled-checked" className="flex items-center gap-2 ">
						<Checkbox disabled id="checked" name="checked" checked />
						<span className="opacity-50">Disabled Checked</span>
					</label>
					<label htmlFor="disabled-indeterminate" className="flex items-center gap-2">
						<Checkbox disabled id="indeterminate" name="indeterminate" checked="indeterminate" />
						<span className="opacity-50">Disabled Indeterminate</span>
					</label>
				</div>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">
						{code`
							import { Checkbox } from "@ngrok/mantle";

							<label htmlFor="terms" className="flex items-center gap-2">
								<Checkbox name="terms" id="terms" />
								Accept terms and conditions
							</label>
							<label htmlFor="unchecked" className="flex items-center gap-2">
								<Checkbox id="unchecked" name="unchecked" checked={false} />
								Unchecked
							</label>
							<label htmlFor="checked" className="flex items-center gap-2">
								<Checkbox id="checked" name="checked" checked />
								Checked
							</label>
							<label htmlFor="indeterminate" className="flex items-center gap-2">
								<Checkbox id="indeterminate" name="indeterminate" checked="indeterminate" />
								Indeterminate
							</label>
						`}
					</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
