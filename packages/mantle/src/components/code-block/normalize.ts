import type { Indentation } from "./normalize-indentation.js";
import { findMinIndent } from "./fmt-code.js";

type Options = {
	/**
	 * The indentation type to use. Can be either "tabs" or "spaces".
	 * @default "spaces"
	 */
	indentation?: Indentation;
};

/**
 * Trim any leading and trailing whitespace/empty lines, convert leading
 * indentation to the given options.indentation
 */
function normalizeIndentation(value: string, options?: Options): string {
	const { indentation = "spaces" } = options || {};
	const trimmed = value.trim();

	if (trimmed === "") {
		return "";
	}

	const minIndent = findMinIndent(value);
	const lines = trimmed.split("\n");
	const normalizedLines = new Array<string>(lines.length);

	for (const [i, line] of lines.entries()) {
		const dedentedLine = /^\S+/.test(line) ? line : line.slice(minIndent);
		normalizedLines[i] = dedentedLine.replace(/^[ \t]*(?=\S)/, (match) => {
			// 1 tab === 2 spaces
			// convert tabs to spaces and spaces to tabs
			if (indentation === "spaces") {
				return match.replace(/\t/g, "  ");
			}
			return match.replace(/ {2}/g, "\t");
		});
	}

	return normalizedLines.join("\n");
}

export {
	//,
	normalizeIndentation,
};
