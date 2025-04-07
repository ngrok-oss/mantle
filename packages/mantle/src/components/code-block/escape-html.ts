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
	let escaped = "";
	for (const character of value) {
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
