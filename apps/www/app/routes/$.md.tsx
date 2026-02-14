import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Route } from "./+types/$.md";
import { urlToFileMap } from "~/utilities/docs";

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	let pathname = url.pathname;

	// Remove leading slash and .md extension
	if (pathname.startsWith("/")) {
		pathname = pathname.slice(1);
	}
	const cleanSlug = pathname.replace(/\.md$/, "");

	const filePath = urlToFileMap.get(cleanSlug);
	if (!filePath) {
		throw new Response("Not Found", { status: 404 });
	}

	// Resolve the absolute path and verify it stays within the docs directory
	const docsDir = resolve(process.cwd(), "app", "docs");
	const absolutePath = resolve(docsDir, filePath.replace("../docs/", ""));
	if (!absolutePath.startsWith(docsDir)) {
		throw new Response("Forbidden", { status: 403 });
	}

	const rawContent = await readFile(absolutePath, "utf-8");
	const filename = cleanSlug.split("/").pop() || "document";

	// Return raw markdown with text/markdown content-type
	// This completely bypasses React rendering and the root layout
	return new Response(rawContent, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Content-Disposition": `inline; filename="${filename}.md"`,
			"Cache-Control": "max-age=300, stale-while-revalidate=604800",
			"X-Content-Type-Options": "nosniff",
		},
	});
}
