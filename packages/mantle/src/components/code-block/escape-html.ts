/**
 * Escapes special HTML characters in a string to their corresponding
 * HTML entities, preventing issues like unintended HTML rendering or
 * cross-site scripting (XSS) when injecting raw strings into the DOM
 * using `dangerouslySetInnerHTML`.
 *
 * Characters escaped:
 * - \& => `&amp`;
 * - \< => `&lt`;
 * - \> => `&gt`;
 * - \" => `&quot`;
 * - \' => `&#39`;
 *
 * @param {string} value The raw string to be escaped.
 *
 * @example
 * escapeHtml('<div>Hello & "world"</div>');
 * // Returns: '&lt;div&gt;Hello &amp; &quot;world&quot;&lt;/div&gt;'
 */
function escapeHtml(value: string): string {
	let firstSpecialCharIndex = -1;
	for (let i = 0; i < value.length; i++) {
		const character = value[i];
		if (
			character === "&" ||
			character === "<" ||
			character === ">" ||
			character === '"' ||
			character === "'"
		) {
			firstSpecialCharIndex = i;
			break;
		}
	}

	if (firstSpecialCharIndex === -1) {
		return value;
	}

	let escaped = value.slice(0, firstSpecialCharIndex);
	for (let i = firstSpecialCharIndex; i < value.length; i++) {
		const character = value[i];
		switch (character) {
			case "&":
				escaped += "&amp;";
				break;
			case "<":
				escaped += "&lt;";
				break;
			case ">":
				escaped += "&gt;";
				break;
			case '"':
				escaped += "&quot;";
				break;
			case "'":
				escaped += "&#39;";
				break;
			default:
				escaped += character;
		}
	}
	return escaped;
}

export {
	//,
	escapeHtml,
};
