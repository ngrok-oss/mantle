import { etagFor } from "~/utilities/etag";
import { buildUtilitiesManifest } from "~/utilities/utils-manifest.server";
import type { Route } from "./+types/api.utils[.]json";

const CACHE_CONTROL = "public, max-age=300, s-maxage=300, stale-while-revalidate=3600";

/**
 * Serve `/api/utils.json` — a structured, machine-readable manifest of
 * every utility module published by `@ngrok/mantle`, designed for
 * ingestion by LLMs, code-generation agents, IDE plugins, and downstream
 * tooling.
 *
 * Schema is documented inline on `UtilitiesManifest`/`ManifestUtility`
 * types in `~/utilities/utils-manifest.server.ts`.
 */
export async function loader({ request }: Route.LoaderArgs) {
	const manifest = await buildUtilitiesManifest();
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
