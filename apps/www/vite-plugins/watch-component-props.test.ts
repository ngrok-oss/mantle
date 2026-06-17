import path from "node:path";
import { describe, expect, it } from "vitest";

import { isWatchedSource } from "./watch-component-props";

// Absolute mantle `src` directory the watcher compares changed files against.
// Built with the host `path.sep` so the test exercises the same OS-independent
// normalization the plugin relies on at runtime.
const mantleSrcDir = path.join("/repo", "packages", "mantle", "src");

/** Join path segments under `mantleSrcDir` using the host path separator. */
function srcFile(...segments: string[]): string {
	return path.join(mantleSrcDir, ...segments);
}

describe("isWatchedSource", () => {
	it("matches component .tsx and .ts sources", () => {
		expect(
			isWatchedSource(srcFile("components", "alert-dialog", "alert-dialog.tsx"), mantleSrcDir),
		).toBe(true);
		expect(isWatchedSource(srcFile("components", "alert-dialog", "index.ts"), mantleSrcDir)).toBe(
			true,
		);
	});

	it("matches shared type .ts sources", () => {
		expect(isWatchedSource(srcFile("types", "as-child.ts"), mantleSrcDir)).toBe(true);
	});

	it("excludes the generated artifact directory (the feedback-loop guard)", () => {
		// The generator writes back into `__generated__/`; matching it would
		// retrigger a regen on every run and spin forever.
		expect(isWatchedSource(srcFile("__generated__", "component-props.json"), mantleSrcDir)).toBe(
			false,
		);
		expect(isWatchedSource(srcFile("__generated__", "component-names.ts"), mantleSrcDir)).toBe(
			false,
		);
	});

	it("ignores non-source files under watched directories", () => {
		expect(isWatchedSource(srcFile("components", "button", "button.css"), mantleSrcDir)).toBe(
			false,
		);
		// `types/` only watches `.ts`; a stray `.tsx` there is not a type source.
		expect(isWatchedSource(srcFile("types", "widget.tsx"), mantleSrcDir)).toBe(false);
	});

	it("ignores sources outside the watched directories", () => {
		expect(isWatchedSource(srcFile("hooks", "use-theme.ts"), mantleSrcDir)).toBe(false);
		expect(isWatchedSource(srcFile("mantle.css"), mantleSrcDir)).toBe(false);
	});

	it("ignores files outside the mantle src tree entirely", () => {
		const outside = path.join("/repo", "apps", "www", "app", "root.tsx");
		expect(isWatchedSource(outside, mantleSrcDir)).toBe(false);
	});
});
