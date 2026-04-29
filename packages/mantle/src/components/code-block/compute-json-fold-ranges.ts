/**
 * A foldable region in a code block. Lines `startLine + 1` through `endLine - 1`
 * are hidden when the region is collapsed; the opener and closer lines remain visible.
 */
type FoldableRange = {
	/**
	 * Stable identifier for the fold region within a code block. Equal to the
	 * stringified `startLine` (unique by construction after `collapseSameStartLine`),
	 * encoded into `data-fold-line` on the toggle button and `data-fold-regions`
	 * on each descendant line so the runtime delegated handler can resolve
	 * toggles by attribute lookup.
	 */
	id: string;
	/** 1-based line number of the line that contains the opening bracket. */
	startLine: number;
	/** 1-based line number of the line that contains the matching closing bracket. */
	endLine: number;
};

/**
 * Computes foldable ranges for a JSON source string. Each multi-line `{...}`
 * or `[...]` produces one range whose opener and closer lines remain visible
 * when collapsed (matching VS Code's folding behavior).
 *
 * The parser is intentionally permissive: it skips over unmatched/invalid
 * bracket sequences instead of throwing, so a partially valid JSON snippet
 * still gets the folds it can. Strings, escape sequences, and unicode
 * escapes are handled correctly so brackets inside string literals don't
 * open spurious folds.
 *
 * Runs in a single pass over the source (O(n) chars). At most one fold range
 * per opener line is emitted — when several brackets open on the same line,
 * only the outermost (largest range) survives, so a single click collapses
 * the whole sub-tree without rendering stacked toggles.
 *
 * @example
 * ```ts
 * computeJsonFoldRanges(`{\n  "a": [\n    1\n  ]\n}`);
 * // => [
 * //   { id: "1", startLine: 1, endLine: 5 },
 * //   { id: "2", startLine: 2, endLine: 4 },
 * // ]
 * ```
 */
function computeJsonFoldRanges(code: string): FoldableRange[] {
	const length = code.length;
	if (length === 0) {
		return [];
	}

	const stack: number[] = []; // entries are buffer line numbers of open brackets
	const ranges: FoldableRange[] = [];

	let line = 1;
	let index = 0;

	while (index < length) {
		const character = code.charCodeAt(index);

		if (character === 10) {
			// '\n'
			line += 1;
			index += 1;
			continue;
		}
		if (character === 13) {
			// '\r' — treat \r\n and bare \r as a line break
			line += 1;
			index += 1;
			if (index < length && code.charCodeAt(index) === 10) {
				index += 1;
			}
			continue;
		}

		if (character === 34) {
			// '"' — skip over string contents (including escaped quotes)
			index += 1;
			while (index < length) {
				const stringChar = code.charCodeAt(index);
				if (stringChar === 92) {
					// '\\' — skip the next char unconditionally; do not advance line on escaped \n
					index += 2;
					continue;
				}
				if (stringChar === 34) {
					index += 1;
					break;
				}
				if (stringChar === 10 || stringChar === 13) {
					// Unterminated string spanning a line — bail without advancing further into it.
					break;
				}
				index += 1;
			}
			continue;
		}

		if (character === 123 || character === 91) {
			// '{' or '['
			stack.push(line);
			index += 1;
			continue;
		}

		if (character === 125 || character === 93) {
			// '}' or ']'
			const startLine = stack.pop();
			if (startLine != null && startLine !== line) {
				ranges.push({ id: String(startLine), startLine, endLine: line });
			}
			index += 1;
			continue;
		}

		index += 1;
	}

	// Closing brackets are processed inside-out, so `ranges` is innermost-first.
	// Sort by startLine ascending, then endLine descending so outer scopes precede
	// inner ones on the same opener line. After collapseSameStartLine, the
	// surviving range per startLine is the one with the largest span.
	ranges.sort((a, b) => {
		if (a.startLine !== b.startLine) {
			return a.startLine - b.startLine;
		}
		return b.endLine - a.endLine;
	});

	return collapseSameStartLine(ranges);
}

/**
 * When multiple fold openers sit on the same line (e.g. `{"a":[`), keep only
 * the one with the largest span so the gutter renders a single toggle. Inner
 * folds remain reachable on their own opener lines if those are distinct.
 */
function collapseSameStartLine(ranges: FoldableRange[]): FoldableRange[] {
	if (ranges.length <= 1) {
		return ranges;
	}

	const bestByStartLine = new Map<number, FoldableRange>();
	for (const range of ranges) {
		const existing = bestByStartLine.get(range.startLine);
		if (existing == null || range.endLine > existing.endLine) {
			bestByStartLine.set(range.startLine, range);
		}
	}

	const filtered: FoldableRange[] = [];
	const survivors = new Set(bestByStartLine.values());
	for (const range of ranges) {
		if (survivors.has(range)) {
			filtered.push(range);
		}
	}
	return filtered;
}

export { computeJsonFoldRanges };
export type { FoldableRange };
