// `decorateHighlightedHtml` and `computeJsonFoldRanges` are the SAME React-free
// primitives Mantle's server/build renderer uses (it imports them from the shared
// `@ngrok/mantle/highlight-utils` surface; we import the same leaf modules). Reusing
// them — rather than reimplementing line/fold decoration — is what keeps this
// client output identical to server/build-time rendering. `computeJsonFoldRanges`
// is specifically the raw, token-free fold computer the server's `json-raw` strategy
// delegates to, which is the right fit here since this path has no Shiki tokens.
// The ONLY thing this module reimplements vs the server is the Shiki-free JSON
// tokenization below — its byte-for-byte parity is locked by the json-*.fixtures tests.
import { computeJsonFoldRanges } from "./compute-json-fold-ranges.js";
import { decorateHighlightedHtml } from "./decorate-highlighted-html.js";
import { createMantleCodeBlockValue, type MantleCodeBlockValue } from "./mantle-code.js";

/**
 * CSS-variable color expressions, copied verbatim from what Mantle's Shiki
 * CSS-variables theme emits for the `json` grammar (see the token → variable
 * mappings in `@ngrok/mantle-server-syntax-highlighter`'s engine and the
 * `--shiki-token-*` definitions in `mantle.css`). Matching these strings exactly
 * is what makes this client-side tokenizer's output identical to server- and
 * build-time Shiki highlighting — Shiki never ships to the browser, but the
 * colors live in CSS, so only the tokenization needs to happen here.
 */
const COLOR_FOREGROUND = "var(--shiki-foreground)";
const COLOR_PUNCTUATION = "var(--shiki-token-punctuation)";
const COLOR_KEY = "var(--shiki-token-keyword)";
const COLOR_STRING = "var(--shiki-token-string-expression)";
const COLOR_CONSTANT = "var(--shiki-token-constant)";
// Note the literal fallback — Shiki emits the whole expression, so we must too.
const COLOR_ESCAPE = "var(--shiki-token-escape, var(--shiki-token-constant))";

/**
 * Escapes text exactly the way Shiki's hast serializer does: only `&` and `<`
 * become (hex) entities; `>`, `"`, and `'` are left literal. This intentionally
 * differs from {@link import("./escape-html.js").escapeHtml} (which uses named
 * entities and escapes more characters) so the output matches Shiki byte-for-byte.
 */
function escapeShikiText(value: string): string {
	return value.replace(/[&<]/g, (char) => (char === "&" ? "&#x26;" : "&#x3C;"));
}

/** A single colored run. `color === null` marks whitespace, whose color is resolved to the following run's. */
type Segment = { text: string; color: string | null };

/** True for characters that terminate a bare literal (number / `true` / `false` / `null`) run. */
function isStopChar(char: string): boolean {
	return (
		char === " " ||
		char === "\t" ||
		char === "\n" ||
		char === "\r" ||
		char === "{" ||
		char === "}" ||
		char === "[" ||
		char === "]" ||
		char === ":" ||
		char === "," ||
		char === '"'
	);
}

/**
 * Parses a JSON string literal beginning at `start` (a `"`), pushing one segment
 * per run: text runs colored as a key (`COLOR_KEY`) or value (`COLOR_STRING`)
 * depending on whether a `:` follows, and each `\\`-escape sequence as its own
 * `COLOR_ESCAPE` run — mirroring how the TextMate JSON grammar scopes
 * `constant.character.escape`. Returns the index just past the closing quote.
 */
function parseStringLiteral(
	code: string,
	start: number,
	push: (text: string, color: string) => void,
): number {
	const length = code.length;
	const parts: { text: string; isEscape: boolean }[] = [];
	let buffer = '"'; // opening quote
	let index = start + 1;

	while (index < length) {
		const char = code[index];
		if (char === "\\") {
			// JSON escapes: \" \\ \/ \b \f \n \r \t and \uXXXX. Treat \uXXXX as 6
			// chars, everything else as 2 — matching the grammar's escape token.
			const escapeLength = code[index + 1] === "u" ? 6 : 2;
			if (buffer !== "") {
				parts.push({ text: buffer, isEscape: false });
				buffer = "";
			}
			parts.push({ text: code.slice(index, index + escapeLength), isEscape: true });
			index += escapeLength;
			continue;
		}
		if (char === '"') {
			buffer += '"'; // closing quote belongs to the trailing text run
			index += 1;
			break;
		}
		buffer += char;
		index += 1;
	}
	if (buffer !== "") {
		parts.push({ text: buffer, isEscape: false });
	}

	// A string is an object key iff the next non-whitespace character is `:`.
	let lookahead = index;
	while (lookahead < length) {
		const char = code[lookahead];
		if (char === " " || char === "\t" || char === "\n" || char === "\r") {
			lookahead += 1;
			continue;
		}
		break;
	}
	const textColor = code[lookahead] === ":" ? COLOR_KEY : COLOR_STRING;

	for (const part of parts) {
		push(part.text, part.isEscape ? COLOR_ESCAPE : textColor);
	}
	return index;
}

/** Renders one line's resolved+merged segments into Shiki's `<span class="line">` markup. */
function renderLine(segments: Segment[]): string {
	// Resolve whitespace runs to the color of the following run (Shiki bundles
	// leading whitespace into the next token); fall back to foreground.
	for (let i = 0; i < segments.length; i += 1) {
		const segment = segments[i];
		if (segment != null && segment.color == null) {
			let nextColor = COLOR_FOREGROUND;
			for (let j = i + 1; j < segments.length; j += 1) {
				const candidate = segments[j];
				if (candidate != null && candidate.color != null) {
					nextColor = candidate.color;
					break;
				}
			}
			segment.color = nextColor;
		}
	}

	// Merge adjacent runs sharing a color into one span, then serialize.
	let html = "";
	let runText = "";
	let runColor: string | null = null;
	const flush = () => {
		if (runColor != null) {
			html += `<span style="color:${runColor}">${escapeShikiText(runText)}</span>`;
		}
		runText = "";
		runColor = null;
	};
	for (const segment of segments) {
		if (segment == null) {
			continue;
		}
		if (segment.color === runColor) {
			runText += segment.text;
		} else {
			flush();
			runText = segment.text;
			runColor = segment.color;
		}
	}
	flush();

	return `<span class="line">${html}</span>`;
}

/**
 * Tokenize a JSON string into the same per-line, CSS-variable-colored span markup
 * that Mantle's server/build-time Shiki highlighter produces — without shipping
 * Shiki (or any grammar/theme/WASM) to the browser. Output is byte-for-byte
 * identical to `extractHighlightedCodeInnerHtml(shiki.codeToHtml(code, …))` for
 * the `json` language, so a client-highlighted block looks identical to one
 * highlighted on the server.
 *
 * Expects well-formed JSON (e.g. the output of `JSON.stringify`). The result is
 * the inner HTML for a `<code>` element; feed it through `decorateHighlightedHtml`
 * (as `jsonCodeBlockValue` does) for the final `CodeBlock.Code` markup.
 *
 * @example
 * ```ts
 * jsonToShikiHtml('{\n  "id": 1\n}');
 * // '<span class="line"><span style="color:var(--shiki-foreground)">{</span></span>\n…'
 * ```
 */
function jsonToShikiHtml(code: string): string {
	const lines: Segment[][] = [[]];
	let current = lines[0] ?? [];
	const length = code.length;
	let index = 0;

	const push = (text: string, color: string | null) => {
		current.push({ text, color });
	};

	while (index < length) {
		const char = code[index];
		if (char === "\n") {
			const line: Segment[] = [];
			lines.push(line);
			current = line;
			index += 1;
			continue;
		}
		if (char === " " || char === "\t") {
			let end = index + 1;
			while (end < length) {
				const next = code[end];
				if (next !== " " && next !== "\t") {
					break;
				}
				end += 1;
			}
			push(code.slice(index, end), null);
			index = end;
			continue;
		}
		if (char === "{" || char === "}" || char === "[" || char === "]") {
			push(char, COLOR_FOREGROUND);
			index += 1;
			continue;
		}
		if (char === ":" || char === ",") {
			push(char, COLOR_PUNCTUATION);
			index += 1;
			continue;
		}
		if (char === '"') {
			index = parseStringLiteral(code, index, push);
			continue;
		}
		// Bare literal: number, true, false, or null — all map to the constant color.
		let end = index + 1;
		while (end < length && !isStopChar(code[end] ?? "")) {
			end += 1;
		}
		push(code.slice(index, end), COLOR_CONSTANT);
		index = end;
	}

	return lines.map(renderLine).join("\n");
}

/**
 * `JSON.stringify` (2-space indent) that never throws — rendering a detail panel
 * must not crash on awkward values. Serializes `BigInt` as its decimal string
 * (JSON has no bigint), and falls back to `String(value)` for inputs
 * `JSON.stringify` rejects outright (circular references, etc.). Returns `""` for
 * values that serialize to `undefined` (functions, symbols, bare `undefined`).
 */
function safeJsonStringify(value: unknown): string {
	try {
		return (
			JSON.stringify(value, (_key, val) => (typeof val === "bigint" ? val.toString() : val), 2) ??
			""
		);
	} catch {
		return String(value);
	}
}

/** Options for {@link jsonCodeBlockValue}. */
type JsonCodeBlockValueOptions = {
	/**
	 * Whether to render line numbers. Defaults to `false` — detail panels usually
	 * read better without a gutter.
	 */
	showLineNumbers?: boolean | undefined;
	/**
	 * Whether multi-line objects and arrays get collapsible fold toggles, matching
	 * every other JSON `CodeBlock`. Uses the same `computeJsonFoldRanges` the
	 * server/build pipeline uses, so the fold markup is identical. Defaults to
	 * `true`; set `false` for a flat, non-collapsible panel.
	 */
	foldable?: boolean | undefined;
};

/**
 * Build a `MantleCodeBlockValue` that renders a value as syntax-highlighted JSON
 * entirely on the client — no Shiki runtime, no build-time plugin, no server
 * roundtrip. The value is `JSON.stringify`'d (2-space indent), tokenized to
 * Shiki-identical markup by {@link jsonToShikiHtml}, and decorated with the same
 * `decorateHighlightedHtml` the server pipeline uses, so it looks identical to a
 * server/build-time highlighted block and adapts to light/dark themes for free.
 *
 * By default, multi-line objects and arrays get collapsible fold toggles (opt
 * out with `foldable: false`) — also identical to server/build-time blocks,
 * since both compute ranges with the same `computeJsonFoldRanges`.
 *
 * Pass the result straight to `CodeBlock.Code`'s `value` prop. Ideal for
 * inspecting a row's underlying object inside a `DataTable.ExpandedRow`.
 *
 * @example
 * ```tsx
 * import { CodeBlock, jsonCodeBlockValue } from "@ngrok/mantle/code-block";
 *
 * <CodeBlock.Root>
 *   <CodeBlock.Body>
 *     <CodeBlock.CopyButton />
 *     <CodeBlock.Code value={jsonCodeBlockValue(row.original)} />
 *   </CodeBlock.Body>
 * </CodeBlock.Root>
 * ```
 */
function jsonCodeBlockValue(
	value: unknown,
	{ showLineNumbers = false, foldable = true }: JsonCodeBlockValueOptions = {},
): MantleCodeBlockValue {
	const code = safeJsonStringify(value);
	const preHtml = decorateHighlightedHtml({
		html: jsonToShikiHtml(code),
		foldableRanges: foldable ? computeJsonFoldRanges(code) : undefined,
		showLineNumbers,
	});

	return createMantleCodeBlockValue({ language: "json", code, preHtml, showLineNumbers });
}

export {
	//,
	jsonCodeBlockValue,
	jsonToShikiHtml,
};

export type {
	//,
	JsonCodeBlockValueOptions,
};
