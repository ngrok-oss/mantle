import { etagFor } from "~/utilities/etag";
import { buildManifest } from "~/utilities/manifest.server";
import type { Route } from "./+types/api.components[.]json";

const CACHE_CONTROL = "public, max-age=300, s-maxage=300, stale-while-revalidate=3600";

/**
 * Serve `/api/components.json` — a structured, machine-readable manifest of
 * every mantle component, designed for ingestion by LLMs, code-generation
 * agents, IDE plugins, and downstream tooling.
 *
 * Schema is documented inline on `Manifest`/`ManifestComponent` types in
 * `~/utilities/manifest.server.ts`.
 */
export async function loader({ request }: Route.LoaderArgs) {
	const manifest = await buildManifest();
	const body = JSON.stringify(manifest, null, "\t");
	const etag = etagFor(body);

	if (request.headers.get("If-None-Match") === etag) {
		return new Response(null, {
			status: 304,
			headers: { ETag: etag, "Cache-Control": CACHE_CONTROL },
		});
	}

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": CACHE_CONTROL,
			ETag: etag,
			"Access-Control-Allow-Origin": "*",
		},
	});
}
