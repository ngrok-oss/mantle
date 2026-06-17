import { format } from "oxfmt";
import { describe, expect, it } from "vitest";

import { buildManifest, type ManifestComponent } from "./manifest.server";

/**
 * Drift guard for the agent-facing component surface served at
 * `/api/components.json`.
 *
 * The committed `__snapshots__/components-surface.json` file is *generated*
 * from each component's docs frontmatter and source JSDoc (summary + every
 * `@example` block) — never hand-edited. It is the source-of-truth shape of
 * the structured surface agents consume, so a change to a component's docs,
 * summary, or examples that isn't reflected here means the two have drifted.
 *
 * Regenerate after intentional changes:
 *
 *     pnpm -F @app/www test -u
 *
 * CI's "Vibe Check" runs `vitest` without `-u`, so any un-regenerated change
 * fails this test. Volatile fields (`version`, absolute `docsUrl`/
 * `markdownUrl`) are dropped — they're derivable from `slug` + the published
 * version — so the snapshot only churns on real content changes, not on
 * version bumps.
 */

/** The stable, content-bearing projection we guard against drift. */
type SurfaceEntry = Pick<
	ManifestComponent,
	"name" | "slug" | "status" | "importPath" | "summary" | "jsdoc" | "examples" | "props"
>;

/** Project a manifest component down to the drift-guarded {@link SurfaceEntry}. */
function toSurface(component: ManifestComponent): SurfaceEntry {
	return {
		name: component.name,
		slug: component.slug,
		status: component.status,
		importPath: component.importPath,
		summary: component.summary,
		jsdoc: component.jsdoc,
		examples: component.examples,
		props: component.props,
	};
}

const snapshotPath = "./__snapshots__/components-surface.json";

describe("agent surface drift", () => {
	it("component manifest matches the committed snapshot (regenerate with `pnpm -F @app/www test -u`)", async () => {
		const manifest = await buildManifest();
		const surface = manifest.components.map(toSurface);

		// Run the serialized surface through oxfmt so the committed snapshot is
		// byte-identical to what `fmt:check` expects — it satisfies both this
		// drift check and `fmt:check` without being excluded from the formatter.
		// `JSON.stringify(_, null, 2)` alone diverges from oxfmt for short arrays
		// (e.g. `see`, `enumMembers`), which oxfmt collapses onto one line.
		const serialized = `${JSON.stringify(surface, null, 2)}\n`;
		const formatted = await format(snapshotPath, serialized);
		if (formatted.errors.length > 0) {
			throw new Error(
				`oxfmt failed to format the surface snapshot: ${formatted.errors[0]?.message}`,
			);
		}

		await expect(formatted.code).toMatchFileSnapshot(snapshotPath);
	});
});
