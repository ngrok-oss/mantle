import type { Indentation } from "./indentation.js";
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
	const minIndent = findMinIndent(value);
	const trimmed = value.trim();

	if (trimmed === "") {
		return "";
	}

	return value
		.trim()
		.split("\n")
		.map((line) => {
			const dedentedLine = /^\S+/.test(line) ? line : line.slice(minIndent);
			return dedentedLine.replace(/^[ \t]*(?=\S)/, (match) => {
				// 1 tab === 2 spaces
				// convert tabs to spaces and spaces to tabs
				if (indentation === "spaces") {
					return match.replace(/\t/g, "  ");
				}
				return match.replace(/ {2}/g, "\t");
			});
		})
		.join("\n");
}

export {
	//,
	normalizeIndentation,
};
