import { etagFor } from "~/utilities/etag";

/**
 * Cache directive shared by every public agent-facing JSON endpoint.
 * Five-minute browser cache, five-minute shared cache, with one-hour
 * stale-while-revalidate so a manifest miss doesn't ever block a page.
 */
export const AGENT_API_CACHE_CONTROL =
	"public, max-age=300, s-maxage=300, stale-while-revalidate=3600";

/**
 * Serialize `data` as pretty-printed JSON and return either a 304 (when
 * the request's `If-None-Match` matches the body's ETag) or a 200 with
 * the cache, content-type, and CORS headers expected for an agent-facing
 * `/api/*.json` endpoint.
 *
 * Centralizing this here avoids drift across the seven JSON routes that
 * all need identical 304/etag/CORS behavior. Override `contentType` for
 * `application/schema+json` (the JSON Schema endpoint) — everything else
 * uses the default `application/json`.
 */
export function jsonAgentResponse(
	data: unknown,
	request: Request,
	options?: { contentType?: string },
): Response {
	const body = JSON.stringify(data, null, "\t");
	const etag = etagFor(body);

	if (request.headers.get("If-None-Match") === etag) {
		return new Response(null, {
			status: 304,
			headers: { ETag: etag, "Cache-Control": AGENT_API_CACHE_CONTROL },
		});
	}

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": options?.contentType ?? "application/json; charset=utf-8",
			"Cache-Control": AGENT_API_CACHE_CONTROL,
			ETag: etag,
			"Access-Control-Allow-Origin": "*",
		},
	});
}
