import { useCallback, useState } from "react";

/**
 * A hook that allows you to copy a string to the clipboard.
 *
 * Inspired by: https://usehooks.com/usecopytoclipboard
 */
function useCopyToClipboard() {
	const [state, setState] = useState<string>("");

	const copyToClipboard = useCallback((value: string) => {
		(async () => {
			try {
				if (typeof window.navigator?.clipboard?.writeText === "function") {
					await navigator.clipboard.writeText(value);
				} else {
					throw new Error("writeText not supported");
				}
			} catch {
				try {
					copyToClipboardPolyfill(value);
				} catch {
					return; // both approaches failed; don't update state
				}
			}
			setState(value);
		})();
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
