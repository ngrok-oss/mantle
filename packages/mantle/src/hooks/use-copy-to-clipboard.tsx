import { copyToClipboard } from "../utils/copy-to-clipboard.js";

/**
 * A hook that returns an async function to copy a string to the clipboard.
 *
 * `await` the returned function to know whether the write succeeded. It
 * throws when both the Clipboard API and the `execCommand` polyfill fail.
 *
 * Inspired by: https://usehooks.com/usecopytoclipboard
 */
function useCopyToClipboard() {
	return copyToClipboard;
}

export { useCopyToClipboard };
