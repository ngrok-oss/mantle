import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { Checkbox } from "@ngrok/mantle/checkbox";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Label } from "@ngrok/mantle/label";
import { useForm } from "@tanstack/react-form";
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
import type { Route } from "./+types/components.checkbox";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Checkbox" },
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
				<PageHeader id="checkbox">Checkbox</PageHeader>
				<p className="font-body text-body text-xl">
					A form control that allows the user to toggle between checked and not
					checked. Supports indeterminate state.
				</p>
				<div>
					<Example>
						<div className="flex flex-col">
							<Label htmlFor="terms" className="flex items-center gap-2">
								<Checkbox name="terms" id="terms" />
								Accept terms and conditions
							</Label>
							<Label htmlFor="unchecked" className="flex items-center gap-2">
								<Checkbox
									id="unchecked"
									name="unchecked"
									checked={false}
									readOnly
								/>
								Unchecked (static)
							</Label>
							<Label htmlFor="checked" className="flex items-center gap-2">
								<Checkbox id="checked" name="checked" checked readOnly />
								Checked (static)
							</Label>
							<Label
								htmlFor="indeterminate"
								className="flex items-center gap-2"
							>
								<Checkbox
									id="indeterminate"
									name="indeterminate"
									defaultChecked="indeterminate"
									readOnly
								/>
								Indeterminate (static)
							</Label>
							<Label
								htmlFor="disabled-unchecked"
								className="flex items-center gap-2"
							>
								<Checkbox
									disabled
									id="unchecked"
									name="unchecked"
									checked={false}
									readOnly
								/>
								<span className="opacity-50">Disabled Unchecked (static)</span>
							</Label>
							<Label
								htmlFor="disabled-checked"
								className="flex items-center gap-2"
							>
								<Checkbox
									disabled
									id="checked"
									name="checked"
									checked
									readOnly
								/>
								<span className="opacity-50">Disabled Checked (static)</span>
							</Label>
							<Label
								htmlFor="disabled-indeterminate"
								className="flex items-center gap-2"
							>
								<Checkbox
									disabled
									id="indeterminate"
									name="indeterminate"
									defaultChecked="indeterminate"
									readOnly
								/>
								<span className="opacity-50">
									Disabled Indeterminate (static)
								</span>
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

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="examples" className="text-3xl font-medium">
						Examples
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">
							Checkbox in a form with client-side validation
						</h3>
						<p className="font-body text-body">
							In this example, the <InlineCode>Checkbox</InlineCode> is used in
							a form with client-side validation. The form is built using{" "}
							<InlineCode>
								<Anchor href="https://tanstack.com/form/latest/docs">
									@tanstack/react-form
								</Anchor>
							</InlineCode>
							and <InlineCode>zod</InlineCode> for validation. The form accepts
							and validates the input before submission.
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
										import { Checkbox } from "@ngrok/mantle/checkbox";
										import { useForm } from "@tanstack/react-form";
										import { z } from "zod";
										import { useSubmit } from "react-router";

										const formSchema = z.object({
											acceptedTermsAndConditions: z
												.boolean()
												.refine((value) => value, "You must accept the terms and conditions."),
										});

										type FormValues = z.infer<typeof formSchema>;

										function FormExample() {
											const submit = useSubmit();
											const form = useForm({
												defaultValues: {
													acceptedTermsAndConditions: false,
												} satisfies FormValues as FormValues,
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
														<form.Field name="acceptedTermsAndConditions">
															{(field) => (
																<Label htmlFor={field.name} className="flex items-center gap-2">
																	<Checkbox
																		name={field.name}
																		id={field.name}
																		checked={field.state.value}
																		onBlur={field.handleBlur}
																		onChange={(event) => field.handleChange(event.target.checked)}
																		validation={field.state.meta.errors.length > 0 && "error"}
																	/>
																	Accept terms and conditions
																</Label>
															)}
														</form.Field>
														<form.Field name="acceptedTermsAndConditions">
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
					The <InlineCode>Checkbox</InlineCode> accepts the following props in
					addition to the{" "}
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
								Whether the checkbox is checked or not. Setting this to{" "}
								<InlineCode>indeterminate</InlineCode> will show the
								indeterminate state. This is useful for when the checkbox is in
								a parent-child relationship, but this requires manual,
								controlled state.
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
								The checked state of the checkbox when it is initially rendered.
								Use when you do not need to control its checked state.
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
								checkbox has a specific validation status. This will change the
								border and outline of the checkbox.
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
	acceptedTermsAndConditions: z
		.boolean()
		.refine((value) => value, "You must accept the terms and conditions."),
});

type FormValues = z.infer<typeof formSchema>;

function FormExample() {
	const form = useForm({
		defaultValues: {
			acceptedTermsAndConditions: false,
		} satisfies FormValues as FormValues,
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: ({ value }) => {
			// Handle form submission here
			window.alert(`Form submitted: ${JSON.stringify(value, null, 2)}`);
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
				<form.Field name="acceptedTermsAndConditions">
					{(field) => (
						<Label htmlFor={field.name} className="flex items-center gap-2">
							<Checkbox
								name={field.name}
								id={field.name}
								checked={field.state.value}
								onBlur={field.handleBlur}
								onChange={(event) => field.handleChange(event.target.checked)}
								validation={field.state.meta.errors.length > 0 && "error"}
							/>
							Accept terms and conditions
						</Label>
					)}
				</form.Field>
				<form.Field name="acceptedTermsAndConditions">
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
