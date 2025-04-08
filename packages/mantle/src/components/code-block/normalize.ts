import type { Indentation } from "./indentation.js";

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

	return value.trim().replace(/^[ \t]*(?=\S)/gm, (match) => {
		// 1 tab === 2 spaces
		// convert tabs to spaces and spaces to tabs
		if (indentation === "spaces") {
			return match.replace(/\t/g, "  ");
		}
		return match.replace(/ {2}/g, "\t");
	});
}

export {
	//,
	normalizeIndentation,
};
