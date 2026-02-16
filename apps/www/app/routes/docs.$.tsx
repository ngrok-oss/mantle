import { Suspense, use } from "react";
import { z } from "zod";
import { ContentLayout } from "~/components/content-layout";
import { loadFrontmatter, resolveDocComponent, urlToFileMap } from "~/utilities/docs";
import { makeCanonicalUrl } from "~/utilities/canonical-origin";
import type { Route } from "./+types/docs.$";

const frontmatterSchema = z.object({
	title: z.string().trim().min(1, "Frontmatter title is required"),
	description: z.string().trim().min(1, "Frontmatter description is required"),
});

export function meta({ loaderData, location }: Route.MetaArgs) {
	const canonicalUrl = makeCanonicalUrl(location.pathname);

	const { frontmatter } = loaderData;
	const title = frontmatter.title ? `${frontmatter.title} - @ngrok/mantle` : "@ngrok/mantle";
	const description = frontmatter.description ?? "mantle is ngrok's UI library and design system";

	return [
		{ title },
		{ name: "description", content: description },
		{ property: "og:title", content: title },
		{ name: "twitter:title", content: title },
		{ property: "og:description", content: description },
		{ name: "twitter:description", content: description },
		{ tagName: "link" as const, rel: "canonical", href: canonicalUrl },
		{ property: "og:type", content: "article" },
		{ name: "og:url", property: "og:url", content: canonicalUrl },
		{ name: "twitter:url", content: canonicalUrl },
	];
}

export function headers() {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
}

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	let pathname = url.pathname;

	if (pathname.startsWith("/")) {
		pathname = pathname.slice(1);
	}

	const filePath = urlToFileMap.get(pathname);
	if (!filePath) {
		throw Response.json({ message: "Not Found" }, { status: 404 });
	}

	const frontmatter = await loadFrontmatter(filePath);

	const frontmatterResult = frontmatterSchema.safeParse(frontmatter ?? {});
	if (!frontmatterResult.success) {
		throw Response.json(
			{
				message: `Invalid frontmatter in ${filePath}: ${frontmatterResult.error.issues.map((i) => i.message).join(", ")}`,
			},
			{ status: 500 },
		);
	}

	return {
		filePath,
		frontmatter: frontmatterResult.data,
	};
}

export default function DocPage({ loaderData }: Route.ComponentProps) {
	return (
		<ContentLayout>
			<Suspense>
				<DocContent filePath={loaderData.filePath} />
			</Suspense>
		</ContentLayout>
	);
}

type DocContentProps = {
	/** The file path of the MDX module to render. */
	filePath: string;
};

/**
 * Render a doc MDX module by file path.
 *
 * Uses {@link resolveDocComponent} with React's `use()` to suspend while
 * the lazy import resolves. The promise is cached so Suspense doesn't
 * re-flash on HMR updates to other modules.
 */
function DocContent({ filePath }: DocContentProps) {
	const componentPromise = resolveDocComponent(filePath);
	const Component = use(componentPromise);
	return <Component />;
}
