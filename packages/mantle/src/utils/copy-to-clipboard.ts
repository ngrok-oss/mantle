/**
 * Copy the given string to the clipboard. Uses the Clipboard API when
 * available and falls back to an `execCommand("copy")` polyfill for older
 * browsers.
 *
 * Throws when both approaches fail — `await` the call to observe success.
 */
async function copyToClipboard(value: string) {
	try {
		if (typeof window.navigator?.clipboard?.writeText === "function") {
			await navigator.clipboard.writeText(value);
		} else {
			throw new Error("writeText not supported");
		}
	} catch (clipboardError) {
		try {
			copyToClipboardPolyfill(value);
		} catch {
			throw clipboardError; // both approaches failed; propagate
		}
	}
}

/**
 * A fallback copy to clipboard function for older browsers that lack the
 * Clipboard API. Creates a temporary `<textarea>`, selects it, and invokes
 * the deprecated `document.execCommand("copy")` API.
 */
function copyToClipboardPolyfill(text: string) {
	const tempTextArea = document.createElement("textarea");
	tempTextArea.value = text;
	document.body.appendChild(tempTextArea);
	try {
		tempTextArea.select();
		document.execCommand("copy");
	} finally {
		document.body.removeChild(tempTextArea);
	}
}

export { copyToClipboard };
