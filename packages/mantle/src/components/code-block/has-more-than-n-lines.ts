/**
 * Returns `true` if `value` has more than `maxLines` newline-delimited lines.
 *
 * This is equivalent to `value.split("\\n").length > maxLines`, but avoids
 * allocating an intermediate array and can early-return once the threshold is exceeded.
 */
function hasMoreThanNLines(value: string, maxLines: number): boolean {
	let lines = 1;
	if (lines > maxLines) {
		return true;
	}

	for (let i = 0; i < value.length; i++) {
		if (value[i] === "\n") {
			lines += 1;
			if (lines > maxLines) {
				return true;
			}
		}
	}
	return false;
}

export {
	//,
	hasMoreThanNLines,
};
