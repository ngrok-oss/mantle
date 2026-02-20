import { Suspense, use } from "react";
import { z } from "zod";
import { ContentLayout } from "~/components/content-layout";
import {
	getDocComponent,
	loadFrontmatter,
	resolveDocComponent,
	urlToFileMap,
} from "~/utilities/docs";
import { makeCanonicalUrl } from "~/utilities/canonical-origin";
import type { Route } from "./+types/$";

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
	if (import.meta.env.PROD) {
		return (
			<ContentLayout>
				<ProdDocContent filePath={loaderData.filePath} />
			</ContentLayout>
		);
	}

	return (
		<ContentLayout>
			<Suspense>
				<DevDocContent filePath={loaderData.filePath} />
			</Suspense>
		</ContentLayout>
	);
}

type DocContentProps = {
	/** The file path of the MDX module to render. */
	filePath: string;
};

/**
 * Render a doc MDX module synchronously from eager imports.
 * Used in production builds where all modules are available at build time,
 * ensuring content is fully prerendered in the HTML.
 */
function ProdDocContent({ filePath }: DocContentProps) {
	const Component = getDocComponent(filePath);
	if (!Component) {
		throw Response.json({ message: "Not Found" }, { status: 404 });
	}
	return <Component />;
}

/**
 * Render a doc MDX module by file path using Suspense + use().
 * Used in dev for granular HMR — lazy imports allow Vite to hot-update
 * individual MDX modules without a full page reload.
 */
function DevDocContent({ filePath }: DocContentProps) {
	const componentPromise = resolveDocComponent(filePath);
	const Component = use(componentPromise);
	return <Component />;
}
