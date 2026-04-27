import { canonicalHref } from "~/utilities/canonical-origin";
import { loadFrontmatter, urlToFileMap } from "~/utilities/docs";
import type { Route } from "./+types/llms[.]txt";

type DocEntry = {
	slug: string;
	title: string;
	description: string;
};

const SECTION_ORDER = [
	{
		id: "welcome",
		title: "Welcome",
		match: (slug: string) => slug === "index" || slug === "philosophy",
	},
	{ id: "base", title: "Base", match: (slug: string) => slug.startsWith("base/") },
	{
		id: "components",
		title: "Components",
		match: (slug: string) =>
			slug.startsWith("components/") && !slug.startsWith("components/preview/"),
	},
	{
		id: "preview",
		title: "Preview Components",
		match: (slug: string) => slug.startsWith("components/preview/"),
	},
	{ id: "hooks", title: "Hooks", match: (slug: string) => slug === "hooks" },
	{ id: "utils", title: "Utilities", match: (slug: string) => slug.startsWith("utils/") },
] as const;

function titleFromFrontmatter(
	frontmatter: Record<string, unknown> | undefined,
	fallback: string,
): string {
	const title = frontmatter?.title;
	return typeof title === "string" && title.length > 0 ? title : fallback;
}

function descriptionFromFrontmatter(frontmatter: Record<string, unknown> | undefined): string {
	const description = frontmatter?.description;
	return typeof description === "string" ? description : "";
}

function fallbackTitleFromSlug(slug: string): string {
	const last = slug.split("/").pop() ?? slug;
	return last
		.split("-")
		.map((part) => {
			const first = part.charAt(0);
			return first ? first.toUpperCase() + part.slice(1) : part;
		})
		.join(" ");
}

/**
 * Serve `/llms.txt` — the curated index agents and LLMs use to ingest the
 * mantle docs site.
 *
 * The format follows the emerging `llms.txt` convention: a top-level H1
 * with a one-line description, optional blockquoted long description, then
 * H2 sections of bullet-listed `[Title](url): summary` links. Each entry
 * also exposes a `.md` URL so agents can fetch plain markdown without
 * having to strip HTML.
 *
 * @see https://llmstxt.org
 */
export async function loader(_: Route.LoaderArgs) {
	const slugs = Array.from(urlToFileMap.keys()).sort((a, b) => a.localeCompare(b));

	const entries: DocEntry[] = await Promise.all(
		slugs.map(async (slug) => {
			const filePath = urlToFileMap.get(slug);
			const frontmatter = filePath ? await loadFrontmatter(filePath) : undefined;
			return {
				slug,
				title: titleFromFrontmatter(frontmatter, fallbackTitleFromSlug(slug)),
				description: descriptionFromFrontmatter(frontmatter),
			};
		}),
	);

	const sections = SECTION_ORDER.map((section) => {
		const matched = entries
			.filter((entry) => section.match(entry.slug))
			.sort((a, b) => a.title.localeCompare(b.title));
		return { ...section, entries: matched };
	}).filter((section) => section.entries.length > 0);

	const lines: string[] = [];
	lines.push("# @ngrok/mantle");
	lines.push("");
	lines.push(
		"> ngrok's UI library and design system — built with React, TypeScript, Tailwind CSS, Radix, and Ariakit. Accessible, semantic, and progressively enhanced primitives for production web apps.",
	);
	lines.push("");
	lines.push(`Docs: ${canonicalHref("/")}`);
	lines.push(`NPM: https://www.npmjs.com/package/@ngrok/mantle`);
	lines.push(`Source: https://github.com/ngrok-oss/mantle`);
	lines.push(`Manifest: ${canonicalHref("/api/components.json")}`);
	lines.push(`Full text: ${canonicalHref("/llms-full.txt")}`);
	lines.push("");
	lines.push(
		"Every docs page is also available as plain markdown by appending `.md` to its URL (e.g. `/components/button.md`).",
	);
	lines.push("");

	for (const section of sections) {
		lines.push(`## ${section.title}`);
		lines.push("");
		for (const entry of section.entries) {
			const path = entry.slug === "index" ? "/" : `/${entry.slug}`;
			const url = canonicalHref(path);
			const mdUrl = canonicalHref(entry.slug === "index" ? "/index.md" : `/${entry.slug}.md`);
			const summary = entry.description ? `: ${entry.description}` : "";
			lines.push(`- [${entry.title}](${url}) ([md](${mdUrl}))${summary}`);
		}
		lines.push("");
	}

	const body =
		lines
			.join("\n")
			.replace(/\n{3,}/g, "\n\n")
			.trimEnd() + "\n";

	return new Response(body, {
		status: 200,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
			"X-Content-Type-Options": "nosniff",
		},
	});
}
