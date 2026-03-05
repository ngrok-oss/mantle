import { createMantleServerHighlighter } from "@ngrok/mantle/server-highlighter";
import { z } from "zod";

const requestSchema = z.object({
	code: z.string(),
	highlightLines: z.array(z.union([z.number(), z.string()])).optional(),
	language: z.string(),
	lineNumberStart: z.number().int().positive().optional(),
	showLineNumbers: z.boolean().optional(),
});

const mantleServerHighlighter = createMantleServerHighlighter();

const methodNotAllowedBody = { message: "Method Not Allowed" };

function normalizeHighlightLines(
	lines: (string | number)[] | undefined,
): (number | `${number}-${number}`)[] {
	if (lines == null) {
		return [];
	}
	return lines.filter((line): line is number | `${number}-${number}` => {
		if (typeof line === "number") {
			return Number.isFinite(line) && line > 0;
		}
		return /^\d+-\d+$/.test(line);
	});
}

export async function action({ request }: { request: Request }) {
	if (request.method !== "POST") {
		return Response.json(methodNotAllowedBody, { status: 405 });
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
			highlightLines: normalizeHighlightLines(parsed.data.highlightLines),
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
