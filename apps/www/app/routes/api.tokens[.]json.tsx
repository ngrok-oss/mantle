import { jsonAgentResponse } from "~/utilities/json-response.server";
import { buildTokensManifest } from "~/utilities/tokens-manifest.server";
import type { Route } from "./+types/api.tokens[.]json";

/**
 * Serve `/api/tokens.json` — a structured, machine-readable manifest of the
 * Tailwind 4 semantic design tokens `@ngrok/mantle` ships, so agents can
 * enumerate token names and per-theme values instead of guessing them.
 *
 * Schema is documented inline on `TokensManifest`/`TokenEntry` types in
 * `~/utilities/tokens-manifest.server.ts`.
 */
export async function loader({ request }: Route.LoaderArgs) {
	const manifest = await buildTokensManifest();
	return jsonAgentResponse(manifest, request);
}
