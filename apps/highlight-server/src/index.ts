import { parseCodeBlockHighlightLines } from "@ngrok/mantle/highlight-utils";
import {
	createMantleServerSyntaxHighlighter,
	getMantleShikiHighlighter,
} from "@ngrok/mantle-server-syntax-highlighter";
import { Hono } from "hono";
import { cors } from "hono/cors";
import * as v from "valibot";

const app = new Hono();
const highlighter = createMantleServerSyntaxHighlighter();
let highlighterState: "loading" | "ready" | "error" = "loading";
const maxRequestBytes = Number(process.env.MAX_REQUEST_BYTES ?? 1024 * 1024);
const requestTooLarge = Symbol("requestTooLarge");

const highlightRequestSchema = v.object({
	code: v.string(),
	language: v.string(),
	highlightLines: v.optional(v.unknown()),
	lineNumberStart: v.optional(v.number()),
	showLineNumbers: v.optional(v.boolean()),
});

// Eagerly start loading Shiki grammars; the state flag gates request handling.
getMantleShikiHighlighter()
	.then(() => {
		highlighterState = "ready";
	})
	.catch((error) => {
		highlighterState = "error";
		console.error("Failed to preload syntax highlighter", error);
	});

function isValidMaxRequestBytes(value: number): boolean {
	return Number.isFinite(value) && value > 0;
}

function isRequestTooLarge(contentLengthHeader: string | undefined): boolean {
	if (contentLengthHeader == null) {
		return false;
	}

	const contentLength = Number(contentLengthHeader);
	return Number.isFinite(contentLength) && contentLength > maxRequestBytes;
}

async function readUtf8BodyWithLimit(
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

/**
 * Comma-separated list of allowed CORS origins.
 * If not set, CORS is disabled (no browser access by default).
 * Example: CORS_ORIGINS=https://mantle.ngrok.com,https://dashboard.ngrok.com
 */
const corsOrigins = process.env.CORS_ORIGINS?.split(",")
	.map((origin) => origin.trim())
	.filter(Boolean);

if (corsOrigins && corsOrigins.length > 0) {
	app.use(
		"*",
		cors({
			origin: corsOrigins,
		}),
	);
}

app.get("/health", (ctx) => {
	if (highlighterState === "ready") {
		return ctx.json({ status: "ok" });
	}

	if (highlighterState === "error") {
		return ctx.json({ status: "error" }, 500);
	}

	return ctx.json({ status: "starting" }, 503);
});

app.post("/", async (ctx) => {
	if (!isValidMaxRequestBytes(maxRequestBytes)) {
		return ctx.json({ message: "Invalid MAX_REQUEST_BYTES configuration" }, 500);
	}

	// Reject requests while the highlighter is still loading or failed to load
	if (highlighterState !== "ready") {
		const status = highlighterState === "error" ? 500 : 503;
		return ctx.json({ message: "Highlighter not ready" }, status);
	}

	if (isRequestTooLarge(ctx.req.header("content-length"))) {
		return ctx.json({ message: "Request body too large" }, 413);
	}

	const rawBody = await readUtf8BodyWithLimit(ctx.req.raw, maxRequestBytes);
	if (rawBody === requestTooLarge) {
		return ctx.json({ message: "Request body too large" }, 413);
	}

	let body: unknown;

	try {
		body = JSON.parse(rawBody);
	} catch {
		return ctx.json({ message: "Invalid JSON body" }, 400);
	}

	const parsedBody = v.safeParse(highlightRequestSchema, body);
	if (!parsedBody.success) {
		return ctx.json({ message: "Missing required fields: code, language" }, 400);
	}

	const timeoutMs = 5_000;
	const highlightPromise = highlighter.highlight({
		code: parsedBody.output.code,
		highlightLines: parseCodeBlockHighlightLines(parsedBody.output.highlightLines) ?? [],
		language: parsedBody.output.language,
		lineNumberStart: parsedBody.output.lineNumberStart,
		showLineNumbers: parsedBody.output.showLineNumbers,
	});

	const timeoutSentinel = Symbol("timeout");
	const timeoutPromise = new Promise<typeof timeoutSentinel>((resolve) => {
		setTimeout(() => resolve(timeoutSentinel), timeoutMs);
	});

	let result;
	try {
		result = await Promise.race([highlightPromise, timeoutPromise]);
	} catch {
		return ctx.json({ message: "Failed to highlight code" }, 500);
	}

	if (result === timeoutSentinel) {
		return ctx.json({ message: "Highlight timed out" }, 504);
	}

	return ctx.json({
		code: result.code,
		highlightLines: result.highlightLines,
		html: result.html,
		language: result.language,
		lineNumberStart: result.lineNumberStart,
		showLineNumbers: result.showLineNumbers,
	});
});

const port = Number(process.env.PORT ?? 4444);

export default {
	port,
	fetch: app.fetch,
};
