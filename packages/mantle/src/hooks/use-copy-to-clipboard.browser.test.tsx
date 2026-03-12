import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useCopyToClipboard } from "./use-copy-to-clipboard.js";

describe("useCopyToClipboard (browser)", () => {
	test("initial state is an empty string", () => {
		const { result } = renderHook(() => useCopyToClipboard());
		const [state] = result.current;
		expect(state).toBe("");
	});

	test("updates state to the copied value", async () => {
		const { result } = renderHook(() => useCopyToClipboard());
		const [, copyToClipboard] = result.current;

		act(() => {
			copyToClipboard("hello clipboard");
		});

		await waitFor(() => {
			const [state] = result.current;
			expect(state).toBe("hello clipboard");
		});
	});

	test("writes the value to navigator.clipboard", async () => {
		const { result } = renderHook(() => useCopyToClipboard());
		const [, copyToClipboard] = result.current;

		act(() => {
			copyToClipboard("written to clipboard");
		});

		await waitFor(async () => {
			// Chromium grants clipboard-write by default in Playwright — read it back to verify
			const text = await navigator.clipboard.readText();
			expect(text).toBe("written to clipboard");
		});
	});

	test("state reflects the most recently copied value", async () => {
		const { result } = renderHook(() => useCopyToClipboard());
		const [, copyToClipboard] = result.current;

		act(() => {
			copyToClipboard("first value");
		});
		await waitFor(() => {
			expect(result.current[0]).toBe("first value");
		});

		act(() => {
			copyToClipboard("second value");
		});
		await waitFor(() => {
			expect(result.current[0]).toBe("second value");
		});
	});

	test("polyfill removes the textarea from the DOM even when select() throws", async () => {
		vi.spyOn(navigator.clipboard, "writeText").mockRejectedValueOnce(
			new Error("clipboard unavailable"),
		);
		vi.spyOn(HTMLTextAreaElement.prototype, "select").mockImplementationOnce(() => {
			throw new Error("select failed");
		});

		const { result } = renderHook(() => useCopyToClipboard());
		const [, copyToClipboard] = result.current;

		act(() => {
			copyToClipboard("cleanup test");
		});

		await waitFor(() => {
			expect(document.body.querySelector("textarea")).toBeNull();
		});

		vi.restoreAllMocks();
	});

	test("falls back to the polyfill when clipboard.writeText is unavailable", async () => {
		// Simulate an environment where the Clipboard API is missing.
		// The hook catches the error and calls the execCommand polyfill, then still sets state.
		vi.spyOn(navigator.clipboard, "writeText").mockRejectedValueOnce(
			new Error("clipboard unavailable"),
		);

		const { result } = renderHook(() => useCopyToClipboard());
		const [, copyToClipboard] = result.current;

		act(() => {
			copyToClipboard("polyfill value");
		});

		// State should still update via the polyfill path
		await waitFor(() => {
			expect(result.current[0]).toBe("polyfill value");
		});

		vi.restoreAllMocks();
	});
});
