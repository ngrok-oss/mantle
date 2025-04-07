/**
 * Trim any leading and trailing whitespace/empty lines, convert leading tabs to spaces
 */
function normalizeIndentation(value: string) {
	return value
		.trim()
		.replace(/^\t+/gm, (match) => " ".repeat(match.length * 2));
}

export {
	//,
	normalizeIndentation,
};
