import { createHash } from "node:crypto";
import { canonicalHref } from "~/utilities/canonical-origin";
import { urlToFileMap } from "~/utilities/docs";
import type { Route } from "./+types/sitemap[.]xml";

function escapeXml(input: string): string {
	return input
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function getDocPaths(): string[] {
	const paths = new Set<string>(["/"]);

	for (const slug of urlToFileMap.keys()) {
		if (slug === "index") {
			paths.add("/");
			continue;
		}
		paths.add(`/${slug}`);
	}

	return Array.from(paths).toSorted((a: string, b: string) => a.localeCompare(b));
}

export const loader = async (_: Route.LoaderArgs) => {
	const entries = getDocPaths()
		.map((path) => {
			const loc = escapeXml(canonicalHref(path));
			return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
		})
		.join("\n");

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

	const etag = `"${createHash("sha256").update(sitemap).digest("hex").slice(0, 16)}"`;

	return new Response(sitemap, {
		status: 200,
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
			ETag: etag,
		},
	});
};
