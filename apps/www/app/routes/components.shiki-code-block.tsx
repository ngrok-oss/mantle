import { Button } from "@ngrok/mantle/button";
import { parseLanguage, type SupportedLanguage } from "@ngrok/mantle/code-block";
import {
	ShikiCodeBlock,
	createMantleCodeBlockValue,
	mantleCode,
} from "@ngrok/mantle/shiki-code-block";
import { useForm } from "@tanstack/react-form";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";

const shikiHighlightResponseSchema = z.object({
	code: z.string(),
	highlightLines: z.array(z.union([z.number(), z.string()])),
	html: z.string(),
	language: z.string(),
	lineNumberStart: z.number(),
	showLineNumbers: z.boolean(),
});

type ShikiHighlightResponse = z.infer<typeof shikiHighlightResponseSchema>;

type HighlightRequest = {
	code: string;
	highlightLines?: (number | `${number}-${number}`)[];
	language: SupportedLanguage;
	lineNumberStart?: number;
	showLineNumbers?: boolean;
};

type HighlightFormValues = Pick<HighlightRequest, "code" | "language">;

async function fetchHighlightedHtmlFromServer({
	code,
	highlightLines,
	language,
	lineNumberStart,
	showLineNumbers,
}: HighlightRequest): Promise<ShikiHighlightResponse> {
	const response = await fetch("/api/shiki-highlight", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ code, highlightLines, language, lineNumberStart, showLineNumbers }),
	});

	if (!response.ok) {
		throw new Error(`Highlight request failed with status ${response.status}`);
	}

	const data: unknown = await response.json();
	return shikiHighlightResponseSchema.parse(data);
}

function normalizeHighlightLines(lines: (string | number)[]): (number | `${number}-${number}`)[] {
	return lines.filter((line): line is number | `${number}-${number}` => {
		if (typeof line === "number") {
			return Number.isFinite(line) && line > 0;
		}
		return /^\d+-\d+$/.test(line);
	});
}

export default function ShikiCodeBlockDemo() {
	const initialServerCode = [
		"const service = await fetchServiceConfig();",
		"if (!service.enabled) {",
		'\tthrow new Error("service is disabled");',
		"}",
	].join("\n");
	const [submittedHighlightRequest, setSubmittedHighlightRequest] = useState<HighlightFormValues>({
		code: initialServerCode,
		language: "typescript",
	});
	const form = useForm({
		defaultValues: {
			code: initialServerCode,
			language: "typescript",
		} satisfies HighlightFormValues as HighlightFormValues,
		onSubmit: ({ value }) => {
			setSubmittedHighlightRequest(value);
		},
	});

	const highlightQuery = useQuery({
		queryKey: [
			"shiki-highlight",
			submittedHighlightRequest.language,
			submittedHighlightRequest.code,
		],
		queryFn: async () => {
			const result = await fetchHighlightedHtmlFromServer({
				code: submittedHighlightRequest.code,
				highlightLines: ["2-3"],
				language: submittedHighlightRequest.language,
				lineNumberStart: 1,
				showLineNumbers: true,
			});
			return createMantleCodeBlockValue({
				code: result.code,
				highlightLines: normalizeHighlightLines(result.highlightLines),
				lineNumberStart: result.lineNumberStart,
				language: submittedHighlightRequest.language,
				preHtml: result.html,
				showLineNumbers: result.showLineNumbers,
			});
		},
	});

	const value = "Corby Pickles";

	return (
		<div className="mx-auto max-w-3xl space-y-8 p-8">
			<h1 className="text-2xl font-bold">ShikiCodeBlock Demo</h1>

			<section className="space-y-2">
				<h2 className="font-semibold">Static TypeScript</h2>
				<ShikiCodeBlock.Root>
					<ShikiCodeBlock.Header>
						<ShikiCodeBlock.Icon preset="file" />
						<ShikiCodeBlock.Title>example.ts</ShikiCodeBlock.Title>
					</ShikiCodeBlock.Header>
					<ShikiCodeBlock.Body>
						<ShikiCodeBlock.CopyButton />
						<ShikiCodeBlock.Code
							highlightLines={[2]}
							showLineNumbers
							value={mantleCode("typescript")`
								const greeting: string = "Hello, ${value}!";
								console.log(greeting);
							`}
						/>
					</ShikiCodeBlock.Body>
				</ShikiCodeBlock.Root>
			</section>

			<section className="space-y-2">
				<h2 className="font-semibold">Static Shell with Expander</h2>
				<ShikiCodeBlock.Root>
					<ShikiCodeBlock.Header>
						<ShikiCodeBlock.Icon preset="cli" />
						<ShikiCodeBlock.Title>Terminal</ShikiCodeBlock.Title>
					</ShikiCodeBlock.Header>
					<ShikiCodeBlock.Body>
						<ShikiCodeBlock.CopyButton />
						<ShikiCodeBlock.Code
							value={mantleCode("bash")`
								ngrok http 8080
							`}
						/>
					</ShikiCodeBlock.Body>
					<ShikiCodeBlock.ExpanderButton />
				</ShikiCodeBlock.Root>
			</section>

			<section className="space-y-2">
				<h2 className="font-semibold">JSON</h2>
				<ShikiCodeBlock.Root>
					<ShikiCodeBlock.Body>
						<ShikiCodeBlock.CopyButton />
						<ShikiCodeBlock.Code
							value={mantleCode("json", { highlightLines: ["2-4"], showLineNumbers: true })`
								{
									"name": "@ngrok/mantle",
									"version": "1.2.3",
									"private": false
								}
							`}
						/>
					</ShikiCodeBlock.Body>
				</ShikiCodeBlock.Root>
			</section>

			<section className="space-y-3">
				<h2 className="font-semibold">Server Highlight (React Query + Action)</h2>
				<p className="text-muted text-sm">
					Send code and language to <code>/api/shiki-highlight</code> and render the returned
					highlighted HTML.
				</p>
				<form
					className="space-y-3"
					onSubmit={(event) => {
						event.preventDefault();
						event.stopPropagation();
						void form.handleSubmit();
					}}
				>
					<form.Field name="language">
						{(field) => (
							<div className="space-y-2">
								<label className="block text-sm font-medium" htmlFor={field.name}>
									Language
								</label>
								<select
									id={field.name}
									className="bg-form border-form rounded-md border px-2 py-1"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(event) => {
										field.handleChange(parseLanguage(event.currentTarget.value));
									}}
								>
									<option value="typescript">typescript</option>
									<option value="javascript">javascript</option>
									<option value="json">json</option>
									<option value="bash">bash</option>
								</select>
							</div>
						)}
					</form.Field>
					<form.Field name="code">
						{(field) => (
							<div className="space-y-2">
								<label className="block text-sm font-medium" htmlFor={field.name}>
									Code
								</label>
								<textarea
									id={field.name}
									className="bg-form border-form text-mono min-h-28 w-full rounded-md border p-2 font-mono"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(event) => {
										field.handleChange(event.currentTarget.value);
									}}
								/>
							</div>
						)}
					</form.Field>
					<form.Subscribe selector={(state) => state.isSubmitting}>
						{(isSubmitting) => (
							<Button type="submit" appearance="filled" disabled={isSubmitting}>
								{highlightQuery.isFetching ? "Highlighting..." : "Highlight on Server"}
							</Button>
						)}
					</form.Subscribe>
				</form>
				{highlightQuery.error != null && (
					<p className="text-danger-600 text-sm">{highlightQuery.error.message}</p>
				)}
				{highlightQuery.status === "success" && (
					<ShikiCodeBlock.Root>
						<ShikiCodeBlock.Body>
							<ShikiCodeBlock.CopyButton />
							<ShikiCodeBlock.Code value={highlightQuery.data} />
						</ShikiCodeBlock.Body>
					</ShikiCodeBlock.Root>
				)}
			</section>
		</div>
	);
}
