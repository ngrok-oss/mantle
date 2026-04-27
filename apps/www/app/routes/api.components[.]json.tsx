import { createHash } from "node:crypto";
import { buildManifest } from "~/utilities/manifest.server";
import type { Route } from "./+types/api.components[.]json";

/**
 * Serve `/api/components.json` — a structured, machine-readable manifest of
 * every mantle component, designed for ingestion by LLMs, code-generation
 * agents, IDE plugins, and downstream tooling.
 *
 * Schema is documented inline on `Manifest`/`ManifestComponent` types in
 * `~/utilities/manifest.server.ts`.
 */
export async function loader(_: Route.LoaderArgs) {
	const manifest = await buildManifest();
	const body = JSON.stringify(manifest, null, "\t");
	const etag = `"${createHash("sha256").update(body).digest("hex").slice(0, 16)}"`;

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
			ETag: etag,
			"Access-Control-Allow-Origin": "*",
		},
	});
}
