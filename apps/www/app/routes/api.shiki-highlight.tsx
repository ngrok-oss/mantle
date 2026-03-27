import { parseCodeBlockHighlightLines } from "@ngrok/mantle/code-block";
import { createMantleServerSyntaxHighlighter } from "@ngrok/mantle-server-syntax-highlighter";
import { z } from "zod";

/**
 * Maximum request body size in bytes (1 MiB). Requests exceeding this limit are
 * rejected before any highlighting work occurs.
 */
const maxRequestBytes = 1024 * 1024;

const requestTooLarge = Symbol("requestTooLarge");

/**
 * Streams a request body while enforcing a byte limit, preventing memory
 * exhaustion when the Content-Length header is absent or spoofed.
 */
async function readBodyWithLimit(
	request: Request,
	maxBytes: number,
): Promise<string | typeof requestTooLarge> {
	if (request.body == null) {
		return "";
	}

	const reader = request.body.getReader();
	const decoder = new TextDecoder();
	let totalBytes = 0;
	let body = "";

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) {
				break;
			}

			totalBytes += value.byteLength;
			if (totalBytes > maxBytes) {
				await reader.cancel();
				return requestTooLarge;
			}

			body += decoder.decode(value, { stream: true });
		}

		body += decoder.decode();
		return body;
	} finally {
		reader.releaseLock();
	}
}

const requestSchema = z.object({
	code: z.string(),
	highlightLines: z.array(z.union([z.number(), z.string()])).optional(),
	language: z.string(),
	lineNumberStart: z.number().int().positive().optional(),
	showLineNumbers: z.boolean().optional(),
});

const mantleServerHighlighter = createMantleServerSyntaxHighlighter();

const methodNotAllowedBody = { message: "Method Not Allowed" };

/** React Router action that accepts a POST with `{ code, language }` and returns Shiki-highlighted HTML. */
export async function action({ request }: { request: Request }) {
	if (request.method !== "POST") {
		return Response.json(methodNotAllowedBody, { status: 405 });
	}

	const contentLength = Number(request.headers.get("content-length"));
	if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
		return Response.json({ message: "Request body too large" }, { status: 413 });
	}

	const rawBody = await readBodyWithLimit(request, maxRequestBytes);
	if (rawBody === requestTooLarge) {
		return Response.json({ message: "Request body too large" }, { status: 413 });
	}

	let payload: unknown;
	try {
		payload = JSON.parse(rawBody);
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
