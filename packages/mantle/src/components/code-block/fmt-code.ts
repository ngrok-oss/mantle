type Primitive = string | number | boolean | undefined | null;

/**
 * Tagged template literal to format code blocks and normalize leading indentation
 */
function fmtCode(strings: TemplateStringsArray, ...values: Primitive[]): string {
	if (!isTemplateStringsArray(strings) || !Array.isArray(values)) {
		throw new Error(
			"It looks like you tried to call `fmtCode` as a function. Make sure to use it as a tagged template.\n\tExample: fmtCode`SELECT * FROM users`, not fmtCode('SELECT * FROM users')",
		);
	}

	const text = String.raw({ raw: strings }, ...values);

	// fine the minimum indentation of the code block
	const minIndent = findMinIndent(text);
	const lines = text.trim().split("\n");

	return lines
		.map((line) => {
			// remove nothing if the line doesn't start with indentation
			if (/^\S+/.test(line)) {
				return line;
			}
			return line.slice(minIndent);
		})
		.join("\n");
}

export {
	//,
	fmtCode,
	findMinIndent,
};

/**
 * Find the shortest indentation of a multiline string
 */
function findMinIndent(value: string): number {
	let minIndent = Number.POSITIVE_INFINITY;
	let indent = 0;
	let atLineStart = true;

	for (let i = 0; i < value.length; i++) {
		const char = value[i];

		if (atLineStart) {
			if (char === " " || char === "\t") {
				indent += 1;
				continue;
			}
			if (char === "\n" || char === "\r") {
				indent = 0;
				continue;
			}

			if (indent < minIndent) {
				minIndent = indent;
				if (minIndent === 0) {
					return 0;
				}
			}
			atLineStart = false;
			continue;
		}

		if (char === "\n" || char === "\r") {
			atLineStart = true;
			indent = 0;
		}
	}

	return minIndent === Number.POSITIVE_INFINITY ? 0 : minIndent;
}

/**
 * Type guard to check if a value is a `TemplateStringsArray`
 */
function isTemplateStringsArray(strings: unknown): strings is TemplateStringsArray {
	return Array.isArray(strings) && "raw" in strings && Array.isArray(strings.raw);
}
