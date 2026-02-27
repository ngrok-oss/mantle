import { makeCanonicalUrl } from "~/utilities/canonical-origin";
import type { Route } from "./+types/robots[.]txt";

const robotsEnabled = `
User-agent: *
Allow: /
Sitemap: ${makeCanonicalUrl("/sitemap.xml")}
`.trim();

const robotsDisabled = `
User-agent: *
Disallow: /
`.trim();

/** Serve robots.txt — allow indexing only in production. */
export function loader(_: Route.LoaderArgs) {
	const enableIndexing = process.env.VERCEL_ENV === "production";
	const robotsTxt = enableIndexing ? robotsEnabled : robotsDisabled;

	return new Response(robotsTxt, {
		status: 200,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
		},
	});
}
