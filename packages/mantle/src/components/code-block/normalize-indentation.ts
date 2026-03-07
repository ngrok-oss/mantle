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
	const indentation = options?.indentation ?? "spaces";
	const normalizedLineEndings = value.replace(/\r\n?/g, "\n");
	const trimmed = normalizedLineEndings.trim();

	if (trimmed === "") {
		return "";
	}

	const minIndent = findMinIndent(normalizedLineEndings);
	const lines = trimmed.split("\n");
	const normalizedLines = new Array<string>(lines.length);

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (line == null) {
			continue;
		}
		const dedentedLine = startsWithNonWhitespace(line) ? line : line.slice(minIndent);
		normalizedLines[i] = normalizeLeadingIndentation(dedentedLine, indentation);
	}

	return normalizedLines.join("\n");
}

export {
	//,
	normalizeIndentation,
};

/**
 * Rewrites only the leading indentation of a non-empty line into the requested
 * indentation style, leaving the rest of the line untouched.
 */
function normalizeLeadingIndentation(line: string, indentation: Indentation): string {
	let indentEnd = 0;
	while (indentEnd < line.length) {
		const character = line[indentEnd];
		if (character !== " " && character !== "\t") {
			break;
		}
		indentEnd += 1;
	}

	if (indentEnd === 0 || indentEnd === line.length) {
		return line;
	}

	const leadingWhitespace = line.slice(0, indentEnd);
	const normalizedLeadingWhitespace =
		indentation === "spaces"
			? leadingWhitespace.replace(/\t/g, "  ")
			: leadingWhitespace.replace(/ {2}/g, "\t");

	return normalizedLeadingWhitespace + line.slice(indentEnd);
}

/**
 * Returns true when a line begins with visible content instead of indentation.
 */
function startsWithNonWhitespace(line: string): boolean {
	const firstCharacter = line[0];
	return firstCharacter != null && firstCharacter !== " " && firstCharacter !== "\t";
}
