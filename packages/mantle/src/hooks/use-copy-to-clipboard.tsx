import { useCallback, useState } from "react";

/**
 * A hook that allows you to copy a string to the clipboard.
 *
 * Inspired by: https://usehooks.com/usecopytoclipboard
 */
function useCopyToClipboard() {
	const [state, setState] = useState<string>("");

	const copyToClipboard = useCallback((value: string) => {
		const handleCopy = async () => {
			try {
				if (typeof window.navigator?.clipboard?.writeText === "function") {
					await navigator.clipboard.writeText(value);
					setState(value);
				} else {
					throw new Error("writeText not supported");
				}
			} catch {
				copyToClipboardPolyfill(value);
				setState(value);
			}
		};

		handleCopy();
	}, []);

	return [state, copyToClipboard] as const;
}

export {
	//,
	useCopyToClipboard,
};

/**
 * A fallback copy to clipboard function for older browsers.
 */
function copyToClipboardPolyfill(text: string) {
	const tempTextArea = document.createElement("textarea");
	tempTextArea.value = text;
	document.body.appendChild(tempTextArea);
	tempTextArea.select();
	document.execCommand("copy");
	document.body.removeChild(tempTextArea);
}
