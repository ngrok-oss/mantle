import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { build } from "vite";
import { MARKER_END, MARKER_START } from "./internals.js";
import { mantleTwSourcePlugin } from "./mantle-tw-source-plugin.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let tmpDir: string;

beforeEach(() => {
	tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "mantle-vite-plugin-int-"));
});

afterEach(() => {
	fs.rmSync(tmpDir, { recursive: true, force: true });
});

function writeFile(relPath: string, content: string): string {
	const absPath = path.join(tmpDir, relPath);
	fs.mkdirSync(path.dirname(absPath), { recursive: true });
	fs.writeFileSync(absPath, content, "utf8");
	return absPath;
}

/**
 * Symlinks the real `@ngrok/mantle` package (from this plugin's own
 * `node_modules`) into the temp project root so that `resolveMantleDistDir`
 * and Vite's module resolver can find it.
 */
function symlinkMantle(): void {
	const mantlePkg = path.resolve(import.meta.dirname, "../node_modules/@ngrok/mantle");
	fs.mkdirSync(path.join(tmpDir, "node_modules/@ngrok"), { recursive: true });
	fs.symlinkSync(
		mantlePkg,
		path.join(tmpDir, "node_modules/@ngrok/mantle"),
		process.platform === "win32" ? "junction" : "dir",
	);
}

// ---------------------------------------------------------------------------
// Input filtering: utility subpaths, path traversal, bad allowlist entries
// ---------------------------------------------------------------------------

describe("mantleTwSourcePlugin — input filtering", () => {
	async function buildWith(sourceContent: string, opts?: { allowlist?: string[] }) {
		writeFile("src/app.ts", sourceContent);
		writeFile("app/global.css", '@import "tailwindcss";\n');
		symlinkMantle();

		await build({
			root: tmpDir,
			logLevel: "silent",
			build: {
				rollupOptions: {
					input: path.join(tmpDir, "src/app.ts"),
					external: [/^@ngrok\/mantle\//, /^react/],
				},
				outDir: path.join(tmpDir, "build-out"),
			},
			plugins: [mantleTwSourcePlugin({ include: ["src"], cssFile: "app/global.css", ...opts })],
		});

		return fs.readFileSync(path.join(tmpDir, "app/global.css"), "utf8");
	}

	it("does not emit @source for utility subpaths (cx, hooks, color, types, utils, icons)", async () => {
		const css = await buildWith(
			[
				'import { cx } from "@ngrok/mantle/cx";',
				'import { useTheme } from "@ngrok/mantle/hooks";',
				'import { color } from "@ngrok/mantle/color";',
				'import type { X } from "@ngrok/mantle/types";',
				'import { something } from "@ngrok/mantle/utils";',
				"export {};",
			].join("\n"),
		);

		// No @source block should be written at all — none of these are components.
		expect(css).not.toContain(MARKER_START);
		expect(css).not.toContain("@source");
	}, 30_000);

	it("does not emit @source for path traversal attempts", async () => {
		const css = await buildWith(
			[
				'import something from "@ngrok/mantle/../../../etc/passwd";',
				'import something2 from "@ngrok/mantle/./sneaky";',
				"export {};",
			].join("\n"),
		);

		expect(css).not.toContain(MARKER_START);
		expect(css).not.toContain("@source");
	}, 30_000);

	it("does not emit @source for .css imports", async () => {
		const css = await buildWith(['import "@ngrok/mantle/mantle.css";', "export {};"].join("\n"));

		expect(css).not.toContain(MARKER_START);
		expect(css).not.toContain("@source");
	}, 30_000);

	it("filters invalid allowlist entries and only emits known components", async () => {
		const css = await buildWith("export {};", {
			allowlist: [
				"button", // valid
				"not-a-real-component", // unknown — should warn and be dropped
				"../../../evil", // path traversal — should be dropped
				"cx", // utility, not a component — should be dropped
			],
		});

		expect(css).toContain("button.js");
		expect(css).not.toContain("not-a-real-component");
		expect(css).not.toContain("evil");
		expect(css).not.toContain("cx.js");
	}, 30_000);

	it("emits only real components when source mixes valid and invalid imports", async () => {
		const css = await buildWith(
			[
				'import { Button } from "@ngrok/mantle/button";',
				'import { cx } from "@ngrok/mantle/cx";',
				'import { useTheme } from "@ngrok/mantle/hooks";',
				"export {};",
			].join("\n"),
		);

		// Only button should appear — cx and hooks are not components.
		expect(css).toContain("button.js");
		expect(css).not.toContain("cx.js");
		expect(css).not.toContain("hooks.js");
	}, 30_000);
});

// ---------------------------------------------------------------------------
// Integration: vite build → @source block
// ---------------------------------------------------------------------------

describe("mantleTwSourcePlugin — vite build integration", () => {
	it("writes @source entries (exact stub + chunk glob) for button, alert, and command", async () => {
		// Source files that import three mantle components.
		writeFile(
			"src/app.ts",
			[
				'import { Button } from "@ngrok/mantle/button";',
				'import { Alert } from "@ngrok/mantle/alert";',
				'import { Command } from "@ngrok/mantle/command";',
				"export { Button, Alert, Command };",
			].join("\n"),
		);

		// CSS file that the plugin will inject `@source` lines into.
		writeFile("app/global.css", '@import "tailwindcss";\n');

		symlinkMantle();

		await build({
			root: tmpDir,
			logLevel: "silent",
			build: {
				rollupOptions: {
					input: path.join(tmpDir, "src/app.ts"),
					// Externalize mantle and react so we don't need their full dep trees.
					external: [/^@ngrok\/mantle\//, /^react/],
				},
				outDir: path.join(tmpDir, "build-out"),
			},
			plugins: [mantleTwSourcePlugin({ include: ["src"], cssFile: "app/global.css" })],
		});

		const cssContent = fs.readFileSync(path.join(tmpDir, "app/global.css"), "utf8");

		// The generated block must be present.
		expect(cssContent).toContain(MARKER_START);
		expect(cssContent).toContain(MARKER_END);

		// Paths are relative from app/global.css → node_modules/@ngrok/mantle/dist/
		// i.e. "../node_modules/@ngrok/mantle/dist/<name>.js"
		const mantleDistRel = "../node_modules/@ngrok/mantle/dist";

		for (const component of ["button", "alert", "command"]) {
			// Exact entry stub — always present in the mantle dist.
			expect(cssContent).toContain(`@source "${mantleDistRel}/${component}.js";`);
			// Hashed chunk glob — catches code-split chunks like button-BswTx6oS.js.
			expect(cssContent).toContain(`@source "${mantleDistRel}/${component}-*.js";`);
		}

		// Sanity: no absolute paths leaked into the CSS.
		expect(cssContent).not.toContain(tmpDir);
	}, 30_000);
});
