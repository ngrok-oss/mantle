import { canonicalHref } from "~/utilities/canonical-origin";
import { rawDocContent, urlToFileMap } from "~/utilities/docs";
import { renderMdxToMarkdown } from "~/utilities/render-mdx-to-markdown.server";
import type { Route } from "./+types/llms-full[.]txt";

/**
 * Serve `/llms-full.txt` — the concatenated markdown of every docs page,
 * suitable for shoving into an LLM context window when an agent needs
 * full coverage of the library rather than just the per-page index.
 *
 * Each section is delimited by a heading with the docs URL so agents can
 * cite specific pages, and content is the same plain-markdown rendering
 * served at `/<slug>.md`.
 */
export async function loader(_: Route.LoaderArgs) {
	const slugs = Array.from(urlToFileMap.keys()).sort((a, b) => a.localeCompare(b));

	const sections: string[] = [];
	sections.push("# @ngrok/mantle — Full Documentation");
	sections.push("");
	sections.push(
		"> Concatenated markdown for every page on https://mantle.ngrok.com. Each section is preceded by its canonical docs URL. JSX preview blocks (`<Example>`) are dropped; code fences are preserved verbatim.",
	);
	sections.push("");
	sections.push(`Docs index: ${canonicalHref("/llms.txt")}`);
	sections.push(`Component manifest: ${canonicalHref("/api/components.json")}`);
	sections.push("");
	sections.push("---");
	sections.push("");

	for (const slug of slugs) {
		const filePath = urlToFileMap.get(slug);
		if (!filePath) {
			continue;
		}
		const raw = rawDocContent[filePath];
		if (!raw) {
			continue;
		}
		const path = slug === "index" ? "/" : `/${slug}`;
		sections.push(`<!-- source: ${canonicalHref(path)} -->`);
		sections.push("");
		sections.push(renderMdxToMarkdown(raw).trimEnd());
		sections.push("");
		sections.push("---");
		sections.push("");
	}

	const body = sections.join("\n");

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
			"X-Content-Type-Options": "nosniff",
		},
	});
}
