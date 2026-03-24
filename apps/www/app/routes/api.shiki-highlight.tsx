import { parseCodeBlockHighlightLines } from "@ngrok/mantle/code-block";
import { createMantleServerSyntaxHighlighter } from "@ngrok/mantle-server-syntax-highlighter";
import { z } from "zod";

/**
 * Maximum request body size in bytes (1 MiB). Requests exceeding this limit are
 * rejected before any highlighting work occurs.
 */
const maxRequestBytes = 1024 * 1024;

const requestSchema = z.object({
	code: z.string(),
	highlightLines: z.array(z.union([z.number(), z.string()])).optional(),
	language: z.string(),
	lineNumberStart: z.number().int().positive().optional(),
	showLineNumbers: z.boolean().optional(),
});

const mantleServerHighlighter = createMantleServerSyntaxHighlighter();

const methodNotAllowedBody = { message: "Method Not Allowed" };

export async function action({ request }: { request: Request }) {
	if (request.method !== "POST") {
		return Response.json(methodNotAllowedBody, { status: 405 });
	}

	const contentLength = Number(request.headers.get("content-length"));
	if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
		return Response.json({ message: "Request body too large" }, { status: 413 });
	}

	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return Response.json({ message: "Invalid JSON body" }, { status: 400 });
	}

	const parsed = requestSchema.safeParse(payload);
	if (!parsed.success) {
		return Response.json(
			{
				message: "Invalid request body",
				issues: parsed.error.issues.map((issue) => issue.message),
			},
			{ status: 400 },
		);
	}

	let highlighted;
	try {
		highlighted = await mantleServerHighlighter.highlight({
			code: parsed.data.code,
			highlightLines: parseCodeBlockHighlightLines(parsed.data.highlightLines) ?? [],
			language: parsed.data.language,
			lineNumberStart: parsed.data.lineNumberStart,
			showLineNumbers: parsed.data.showLineNumbers,
		});
	} catch {
		return Response.json({ message: "Failed to render highlighted HTML" }, { status: 500 });
	}

	return Response.json({
		code: highlighted.code,
		highlightLines: highlighted.highlightLines,
		html: highlighted.html,
		language: highlighted.language,
		lineNumberStart: highlighted.lineNumberStart,
		showLineNumbers: highlighted.showLineNumbers,
	});
}
