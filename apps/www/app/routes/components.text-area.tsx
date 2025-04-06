import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Label } from "@ngrok/mantle/label";
import { TextArea } from "@ngrok/mantle/text-area";
import { useForm } from "@tanstack/react-form";
import type { DragEvent } from "react";
import { z } from "zod";
import { Example } from "~/components/example";
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
import type { Route } from "./+types/components.text-area";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — TextArea" },
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
			<section className="space-y-4">
				<PageHeader id="textarea">TextArea</PageHeader>
				<p className="font-body text-body text-xl">
					A multi-line plain-text editing control, useful when you want to allow
					users to enter a sizeable amount of free-form text, for example a
					comment on a review or feedback form.
				</p>

				<div>
					<Example className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<Label className="space-y-1">
							<p>Default TextArea</p>
							<TextArea
								onDrop={(event) => handleDrop(event)}
								placeholder="Tell us about your experience…"
							/>
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

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="examples" className="text-3xl font-medium">
						Examples
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="example-client-side-form-validation"
							className="text-xl font-medium"
						>
							TextArea in a form with client-side validation
						</h3>
						<p className="font-body text-body">
							In this example, the <InlineCode>TextArea</InlineCode> is used in
							a form with client-side validation. The form is built using{" "}
							<InlineCode>
								<Anchor href="https://tanstack.com/form/latest/docs">
									@tanstack/react-form
								</Anchor>
							</InlineCode>
							and <InlineCode>zod</InlineCode> for validation. The form accepts
							user feedback and validates the input before submission.
						</p>
					</header>
					<div>
						<Example className="flex-col w-full">
							<FormExample />
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										import { Button } from "@ngrok/mantle/button";
										import { Label } from "@ngrok/mantle/label";
										import { TextArea } from "@ngrok/mantle/text-area";
										import { useForm } from "@tanstack/react-form";
										import { z } from "zod";
										import { useSubmit } from "react-router";

										const formSchema = z.object({
											feedback: z.string().trim().min(1, "Please enter your feedback."),
										});

										type FormValues = z.infer<typeof formSchema>;

										function FormExample() {
											const submit = useSubmit();
											const form = useForm({
												defaultValues: {
													feedback: "",
												} satisfies FormValues,
												validators: {
													onSubmit: formSchema,
												},
												onSubmit: ({ value }) => {
													// Handle form submission here
													submit(value, {
														method: "post",
													});
												},
											});

											return (
												<form
													className="space-y-4"
													onSubmit={(event) => {
														event.preventDefault();
														event.stopPropagation();
														void form.handleSubmit();
													}}
												>
													<div className="space-y-1">
														<Label htmlFor="feedback" className="block">
															Feedback:
														</Label>
														<form.Field name="feedback">
															{(field) => (
																<TextArea
																	id={field.name}
																	name={field.name}
																	onBlur={field.handleBlur}
																	onChange={(event) => field.handleChange(event.target.value)}
																	placeholder="Tell us about your experience…"
																	validation={field.state.meta.errors.length > 0 && "error"}
																	value={field.state.value}
																/>
															)}
														</form.Field>
														<form.Field name="feedback">
															{(field) =>
																field.state.meta.errors.map((error) => (
																	<p
																		key={error?.message}
																		className="text-sm leading-4 text-danger-600"
																	>
																		{error?.message}
																	</p>
																))
															}
														</form.Field>
													</div>
													<form.Subscribe selector={(state) => state.isDirty}>
														{(isDirty) => (
															<Button type="submit" appearance="filled" disabled={!isDirty}>
																Submit
															</Button>
														)}
													</form.Subscribe>
												</form>
											);
										}
									`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>TextArea</InlineCode> accepts the following props in
					addition to the{" "}
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
								Defines the visual style of the{" "}
								<InlineCode>TextArea</InlineCode>.
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
									<FuncPropType
										value={`() => "error" | "success" | "warning" | false`}
									/>
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell className="space-y-2">
							<p>
								Use the <InlineCode>validation</InlineCode> prop to show if the
								textarea has a specific validation status. This will change the
								border and outline of the textarea.
							</p>
							<p>
								The <InlineCode>false</InlineCode> type is useful when using
								short-circuiting logic so that you don't need to use a ternary
								with <InlineCode>undefined</InlineCode>.
							</p>
							<p>
								Setting <InlineCode>validation</InlineCode> to{" "}
								<InlineCode>error</InlineCode> also sets{" "}
								<InlineCode>aria-invalid</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}

const formSchema = z.object({
	feedback: z.string().trim().min(1, "Please enter your feedback."),
});

type FormValues = z.infer<typeof formSchema>;

function FormExample() {
	const form = useForm({
		defaultValues: {
			feedback: "",
		} satisfies FormValues,
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: ({ value }) => {
			// Handle form submission here
			window.alert(`Feedback submitted: ${JSON.stringify(value, null, 2)}`);
		},
	});

	return (
		<form
			className="space-y-4 w-full"
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				void form.handleSubmit();
			}}
		>
			<div className="space-y-1">
				<Label htmlFor="feedback" className="block">
					Feedback:
				</Label>
				<form.Field name="feedback">
					{(field) => (
						<TextArea
							id={field.name}
							name={field.name}
							onBlur={field.handleBlur}
							onChange={(event) => field.handleChange(event.target.value)}
							placeholder="Tell us about your experience…"
							validation={field.state.meta.errors.length > 0 && "error"}
							value={field.state.value}
						/>
					)}
				</form.Field>
				<form.Field name="feedback">
					{(field) =>
						field.state.meta.errors.map((error) => (
							<p
								key={error?.message}
								className="text-sm leading-4 text-danger-600"
							>
								{error?.message}
							</p>
						))
					}
				</form.Field>
			</div>
			<form.Subscribe selector={(state) => state.isDirty}>
				{(isDirty) => (
					<Button type="submit" appearance="filled" disabled={!isDirty}>
						Submit
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}
