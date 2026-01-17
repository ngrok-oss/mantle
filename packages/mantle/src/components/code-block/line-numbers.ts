/**
 * A line range is a string in the format of `start-end` where `start` and `end` are line numbers.
 */
export type LineRange = `${number}-${number}`;

/**
 * Given a list of line ranges and numbers, resolves them into a unique list of line numbers as a set.
 *
 * @example
 * ```tsx
 * const highlightedLines = resolveLineNumbers(1, "3-5", 7, "10-12");
 * // Returns: Set {1, 3, 4, 5, 7, 10, 11, 12}
 *
 * const singleLine = resolveLineNumbers(42);
 * // Returns: Set {42}
 * ```
 */
export function resolveLineNumbers(...items: (LineRange | number)[]): Set<number> {
	const lineNumberSet = new Set<number>();

	if (!items) {
		return lineNumberSet;
	}

	for (const item of items) {
		if (typeof item === "number") {
			if (!isPositiveLineNumber(item)) {
				continue;
			}
			// only support integer line numbers
			const int = Math.floor(item);
			lineNumberSet.add(int);
		} else {
			let [start, end] = item.split("-").map((n) => Number.parseInt(n, 10));

			// ignore invalid ranges that don't contain valid line numbers
			if (!isPositiveLineNumber(start) || !isPositiveLineNumber(end)) {
				continue;
			}

			// swap start and end if they are backwards
			if (start > end) {
				[start, end] = [end, start];
			}

			// add all line numbers in the range, inclusive
			for (let i = start; i <= end; i++) {
				const int = Math.floor(i);
				lineNumberSet.add(int);
			}
		}
	}

	return lineNumberSet;
}

/**
 * Type Predicate: checks if a value is a positive, finite integer.
 */
const isPositiveLineNumber = (value: number | undefined): value is number =>
	value != null && !Number.isNaN(value) && value > 0 && Number.isFinite(value);
