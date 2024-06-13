import { Anchor } from "@/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { Label } from "@/label";
import { TextArea } from "@/text-area";
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
import type { DragEvent } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — TextArea" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

async function handleDrop(event: DragEvent<HTMLTextAreaElement>) {
	event.preventDefault();
	const files = Array.from(event.dataTransfer.files);
	const fileData = await Promise.all(files.map((file) => file.text()));
	const textArea = event.target as HTMLTextAreaElement;
	textArea.value = fileData.join("\n");
}

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="mb-4 space-y-4">
				<h1 id="textarea" className="text-5xl font-medium">
					TextArea
				</h1>
				<p className="mt-4 text-xl text-body">Displays a form textarea or a component that looks like a textarea.</p>

				<div>
					<Example className="mt-4 grid grid-cols-2 gap-6">
						<Label className="space-y-1">
							<p>Default TextArea</p>
							<TextArea onDrop={(event) => handleDrop(event)} placeholder="Tell us about your experience…" />
						</Label>
						<Label className="space-y-1">
							<p>Monospaced TextArea</p>
							<TextArea
								onDrop={(event) => handleDrop(event)}
								appearance="monospaced"
								placeholder="Tell us about your experience…"
							/>
						</Label>
						<Label className="space-y-1">
							<p>Error TextArea</p>
							<TextArea
								onDrop={(event) => handleDrop(event)}
								placeholder="Tell us about your experience…"
								validation="error"
							/>
						</Label>
						<Label className="space-y-1">
							<p>Success TextArea</p>
							<TextArea
								onDrop={(event) => handleDrop(event)}
								placeholder="Tell us about your experience…"
								validation="success"
							/>
						</Label>
						<Label className="space-y-1">
							<p>Warning TextArea</p>
							<TextArea
								onDrop={(event) => handleDrop(event)}
								placeholder="Tell us about your experience…"
								validation="warning"
							/>
						</Label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { TextArea } from "@ngrok/mantle/text-area";

									<TextArea placeholder="Tell us about your experience…" />
									<TextArea appearance="monospaced" placeholder="Tell us about your experience…" />
									<TextArea placeholder="Tell us about your experience…" validation="error" />
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
					The <InlineCode>TextArea</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">
						standard HTML textarea attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="appearance" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="monospaced" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Defines the visual style of the <InlineCode>TextArea</InlineCode>.
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
								Use the <InlineCode>validation</InlineCode> prop to show if the textarea has a specific validation
								status. This will change the border and outline of the textarea.
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
