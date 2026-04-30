import {
	finalizeFoldRanges,
	type FoldableRange,
	type FoldLine,
} from "@ngrok/mantle/highlight-utils";

/**
 * Keyword-pair fold computer for languages whose blocks are delimited by
 * keywords rather than punctuation.
 *
 * VS Code models this with `foldingStartMarker` / `foldingStopMarker` regexes
 * declared in each language's `language-configuration.json`. We mirror that
 * approach with hand-vendored regexes per language, but evaluate them against
 * the *visible* (non-string, non-comment) portion of each line — the Shiki
 * tokens carry scope information that lets us strip those out reliably.
 *
 * The stack is untyped — every closer pops the most recent opener, regardless
 * of which keyword opened it. Real source code nests properly, so this stays
 * correct without per-keyword tracking, and matches VS Code's marker-based
 * behavior.
 *
 * @see https://github.com/microsoft/vscode/blob/main/extensions/ruby/language-configuration.json
 * @see https://github.com/microsoft/vscode/blob/main/extensions/shellscript/language-configuration.json
 */

/** Languages this computer knows how to fold. */
type KeywordFoldLanguage = "ruby" | "rb" | "bash" | "sh" | "shell";

/**
 * Per-line opener/closer regex pair. The patterns intentionally match the
 * *visible* line content (after string and comment scopes are filtered out)
 * — interpolated `do … end` markers inside a string don't trigger folds.
 */
type KeywordPattern = {
	/** Matches when this line opens a foldable block. */
	start: RegExp;
	/** Matches when this line closes a foldable block. */
	end: RegExp;
};

/**
 * Ruby keyword folds modeled after VS Code's grammar. Covers:
 *
 * - Definition keywords at the start of a line: `def`, `class`, `module`, `begin`.
 * - Control-flow openers at the start of a line: `if`, `unless`, `while`,
 *   `until`, `for`, `case` — Ruby's flagship multi-line constructs.
 * - Trailing `do` / `do |args|` for blocks attached to a method call.
 *
 * `end` always closes; mid-block keywords (`else`, `elsif`, `when`, `rescue`,
 * `ensure`) deliberately don't, so a single `if … else … end` becomes one
 * fold, not three.
 */
const RUBY_PATTERN: KeywordPattern = {
	start: /^\s*(def|class|module|begin|if|unless|while|until|for|case)\b|\bdo\b\s*(\|[^|]*\|)?\s*$/,
	end: /^\s*end\b/,
};

/**
 * Bash / Shell keyword folds modeled after VS Code's grammar.
 *
 * - Opener keywords at the start of a line — `if`, `while`, `for`, `case`,
 *   `until`, `select` — that aren't closed on the same line.
 * - Lines ending with an unmatched `{` (function bodies, brace groups).
 * - Lines ending with `do` (the `for x in y; do` / `while cond; do` form).
 *
 * The end pattern matches `}` only when it leads its line — that lets us
 * close brace groups while ignoring `${VAR}` parameter expansions, which
 * are never line-leading.
 */
const BASH_PATTERN: KeywordPattern = {
	start: /^\s*(if|while|for|case|until|select)\b(?!.*\b(fi|esac|done)\b)|.*\{[^}]*$|\bdo\s*$/,
	end: /^\s*(?:(?:fi|esac|done)\b|\})/,
};

/** Resolves the keyword pattern for a given language. */
function patternFor(language: KeywordFoldLanguage): KeywordPattern {
	switch (language) {
		case "ruby":
		case "rb":
			return RUBY_PATTERN;
		case "bash":
		case "sh":
		case "shell":
			return BASH_PATTERN;
	}
}

/**
 * TextMate scope prefixes that mark a token as inert content (string body,
 * comment body, character escape). Mirrors the filter used by
 * `computeFoldRanges` for the bracket strategy so behaviors stay consistent.
 */
const INERT_SCOPE_PREFIXES: readonly string[] = [
	"string.",
	"comment.",
	"constant.character.escape",
];

/** Returns true when the innermost scope of a token marks it inert. */
function isInertScope(scopes: readonly { scopeName: string }[]): boolean {
	if (scopes.length === 0) {
		return false;
	}
	const innermost = scopes[scopes.length - 1]?.scopeName ?? "";
	if (innermost === "string" || innermost === "comment") {
		return true;
	}
	for (const prefix of INERT_SCOPE_PREFIXES) {
		if (innermost.startsWith(prefix)) {
			return true;
		}
	}
	return false;
}

/**
 * Reconstructs the visible (non-string, non-comment) text of a single
 * tokenized line.
 *
 * Subtlety: Shiki keeps leading whitespace inside `token.content` but strips
 * it from every `explanation.content` piece — so `" HttpListener"` (token)
 * decomposes into `[{ content: "HttpListener", scopes: […] }]`. Iterating
 * explanations alone collapses adjacent identifiers (`class HttpListener`
 * becomes `classHttpListener`), which breaks every word-boundary keyword
 * regex. We use `token.content` whenever no explanation piece is inert and
 * only fall back to per-explanation iteration for mixed-scope tokens.
 */
function visibleTextForLine(line: FoldLine): string {
	let visible = "";
	for (const token of line) {
		const explanations = token.explanation;
		if (explanations == null || explanations.length === 0) {
			visible += token.content;
			continue;
		}
		let hasInert = false;
		for (const explanation of explanations) {
			if (isInertScope(explanation.scopes)) {
				hasInert = true;
				break;
			}
		}
		if (!hasInert) {
			visible += token.content;
			continue;
		}
		for (const explanation of explanations) {
			if (isInertScope(explanation.scopes)) {
				continue;
			}
			visible += explanation.content;
		}
	}
	return visible;
}

/**
 * Computes foldable ranges from tokenized source lines using the language's
 * keyword opener/closer regex pair.
 *
 * The same line can both open and close a block (`if foo; end` in Ruby).
 * Such lines push and pop on the stack but their start/end coincide, so the
 * range gets discarded by the `endLine > startLine` filter — matching how
 * the bracket strategy treats single-line `{}` constructs.
 *
 * @example
 * // tokens: [["def f"], ["  pass"], ["end"]]
 * computeKeywordFoldRanges({ language: "ruby", tokens });
 * // => [{ id: "1", startLine: 1, endLine: 3 }]
 */
function computeKeywordFoldRanges({
	language,
	tokens,
}: {
	/** Resolved Mantle language; controls which keyword pattern to use. */
	language: KeywordFoldLanguage;
	/** Shiki-tokenized lines, with scope explanations populated. */
	tokens: FoldLine[];
}): FoldableRange[] {
	const pattern = patternFor(language);
	const stack: number[] = [];
	const ranges: FoldableRange[] = [];

	for (let lineIndex = 0; lineIndex < tokens.length; lineIndex += 1) {
		const line = tokens[lineIndex];
		if (line == null) {
			continue;
		}
		const visible = visibleTextForLine(line);
		if (visible.length === 0) {
			continue;
		}
		const lineNumber = lineIndex + 1;

		// Closers come first: `end` on the same line as a `do` (e.g. `loop do
		// end` written across two lines but both `do` and `end` are on different
		// lines) shouldn't first push then pop on the same iteration.
		if (pattern.end.test(visible)) {
			const startLine = stack.pop();
			if (startLine != null && startLine < lineNumber) {
				ranges.push({ id: String(startLine), startLine, endLine: lineNumber });
			}
		}
		if (pattern.start.test(visible)) {
			stack.push(lineNumber);
		}
	}

	return finalizeFoldRanges(ranges);
}

export { computeKeywordFoldRanges };
export type { KeywordFoldLanguage };
