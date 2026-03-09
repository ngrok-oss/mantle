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
