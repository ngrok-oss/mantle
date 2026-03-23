import { useCallback, useState } from "react";

/**
 * A hook that allows you to copy a string to the clipboard.
 *
 * The returned `copyToClipboard` function is async — `await` it to know
 * whether the write succeeded. It throws when both the Clipboard API and
 * the `execCommand` polyfill fail.
 *
 * Inspired by: https://usehooks.com/usecopytoclipboard
 */
function useCopyToClipboard() {
	const [state, setState] = useState<string>("");

	const copyToClipboard = useCallback(async (value: string) => {
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
		setState(value);
	}, []);

	return [state, copyToClipboard] as const;
}

export { useCopyToClipboard };

/**
 * A fallback copy to clipboard function for older browsers.
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
