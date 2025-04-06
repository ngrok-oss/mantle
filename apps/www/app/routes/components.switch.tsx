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
import { Switch } from "@ngrok/mantle/switch";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
} from "~/components/props-table";
import type { Route } from "./+types/components.switch";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Switch" },
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
				<PageHeader id="switch">Switch</PageHeader>
				<p className="font-body text-body text-xl">
					A control that allows the user to toggle between checked and not
					checked.
				</p>
				<div>
					<Example className="mt-4 grid gap-6">
						<Label htmlFor="airplane-mode" className="flex items-center gap-2">
							Airplane Mode
							<Switch id="airplane-mode" />
						</Label>
						<Label htmlFor="unchecked" className="flex items-center gap-2">
							<Switch checked={false} id="unchecked" readOnly />
							<p>Unchecked (readonly)</p>
						</Label>
						<Label htmlFor="checked" className="flex items-center gap-2">
							<Switch checked={true} id="checked" readOnly />
							<p>Checked (readonly)</p>
						</Label>
						<Label
							htmlFor="airplane-mode-disabled-unchecked"
							className="flex items-center gap-2"
						>
							<Switch disabled id="airplane-mode-disabled-unchecked" readOnly />
							<p>Airplane Mode Disabled Unchecked (readonly)</p>
						</Label>
						<Label
							htmlFor="airplane-mode-disabled-checked"
							className="flex items-center gap-2"
						>
							<Switch
								checked
								disabled
								id="airplane-mode-disabled-checked"
								readOnly
							/>
							<p>Airplane Mode Disabled Checked (readonly)</p>
						</Label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Label } from "@ngrok/mantle/label";
									import { Switch } from "@ngrok/mantle/switch";

									<Label htmlFor="airplane-mode" className="flex items-center gap-2">
										Airplane Mode
										<Switch id="airplane-mode" />
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
						<h3
							id="example-client-side-form-validation"
							className="text-xl font-medium"
						>
							Switch in a form with client-side validation
						</h3>
						<p className="font-body text-body">
							In this example, the <InlineCode>Switch</InlineCode> is used in a
							form with client-side validation. The form is built using{" "}
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
										import { Switch } from "@ngrok/mantle/switch";
										import { useForm } from "@tanstack/react-form";
										import { z } from "zod";
										import { useSubmit } from "react-router";

										const formSchema = z.object({
											airplaneMode: z.boolean(),
										});

										type FormValues = z.infer<typeof formSchema>;

										function FormExample() {
											const submit = useSubmit();
											const form = useForm({
												defaultValues: {
													airplaneMode: false,
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
														<form.Field name="airplaneMode">
															{(field) => (
																<Label htmlFor={field.name} className="flex items-center gap-2">
																	Airplane Mode
																	<Switch
																		name={field.name}
																		id={field.name}
																		checked={field.state.value}
																		onBlur={field.handleBlur}
																		onCheckedChange={(value) => field.handleChange(value)}
																	/>
																</Label>
															)}
														</form.Field>
														<form.Field name="airplaneMode">
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

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Switch</InlineCode> is built on top of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/switch"
							target="_blank"
							rel="noopener noreferrer"
						>
							Radix Switch
						</Anchor>
						. It exposes the same API with the following additional props:
					</p>
				</header>

				<PropsTable>
					<PropRow>
						<PropNameCell name="readOnly" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Makes the switch immutable, meaning the user can not edit the
								control.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}

const formSchema = z.object({
	airplaneMode: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

function FormExample() {
	const form = useForm({
		defaultValues: {
			airplaneMode: false,
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
				<form.Field name="airplaneMode">
					{(field) => (
						<Label htmlFor={field.name} className="flex items-center gap-2">
							Airplane Mode
							<Switch
								name={field.name}
								id={field.name}
								checked={field.state.value}
								onBlur={field.handleBlur}
								onCheckedChange={(value) => field.handleChange(value)}
							/>
						</Label>
					)}
				</form.Field>
				<form.Field name="airplaneMode">
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
