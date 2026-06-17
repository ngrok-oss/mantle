import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { parseTokens, type TokenEntry } from "./tokens-manifest.server";

/**
 * Drift guard for the agent-facing design-token surface served at
 * `/api/tokens.json`.
 *
 * The committed `__snapshots__/tokens-surface.json` file is *generated* by
 * parsing the four Mantle theme stylesheets — never hand-edited. It is the
 * source-of-truth shape of the token surface agents consume, so a change to
 * any theme CSS (a renamed token, a new semantic alias, a tweaked value)
 * that isn't reflected here means the two have drifted.
 *
 * Regenerate after intentional changes:
 *
 *     pnpm -F @app/www test -u
 *
 * CI's "Vibe Check" runs `vitest` without `-u`, so any un-regenerated change
 * fails this test. The volatile `version`/`origin` envelope fields are
 * dropped (they are derivable and churn on every release), so the snapshot
 * only moves on real token changes.
 *
 * The tokens are read from disk via `parseTokens` rather than the runtime
 * `buildTokensManifest` because Vitest's CSS handling returns empty strings
 * for `.css?raw` imports; `parseTokens` is the same pure core production
 * runs, fed the real authored CSS.
 */

/** Read the four theme stylesheets straight from the package source. */
function readThemeCssFromDisk() {
	const dir = path.resolve(import.meta.dirname, "../../../../packages/mantle/src");
	return {
		light: readFileSync(path.join(dir, "mantle.css"), "utf8"),
		dark: readFileSync(path.join(dir, "mantle-dark.css"), "utf8"),
		lightHC: readFileSync(path.join(dir, "mantle-light-high-contrast.css"), "utf8"),
		darkHC: readFileSync(path.join(dir, "mantle-dark-high-contrast.css"), "utf8"),
	};
}

describe("tokens surface drift", () => {
	it("token manifest matches the committed snapshot (regenerate with `pnpm -F @app/www test -u`)", async () => {
		const tokens: TokenEntry[] = parseTokens(readThemeCssFromDisk());

		// 2-space JSON + trailing newline matches oxfmt's formatting, so the
		// committed snapshot satisfies both this drift check and `fmt:check`.
		await expect(`${JSON.stringify(tokens, null, 2)}\n`).toMatchFileSnapshot(
			"./__snapshots__/tokens-surface.json",
		);
	});
});
