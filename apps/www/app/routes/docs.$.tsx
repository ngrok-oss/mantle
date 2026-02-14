import { z } from "zod";
import { MdxProvider } from "~/components/mdx-provider";
import type { Route } from "./+types/docs.$";
import { docModules, urlToFileMap } from "~/utilities/docs";

const frontmatterSchema = z.object({
	title: z.string().trim().min(1, "Frontmatter title is required"),
	description: z.string().trim().min(1, "Frontmatter description is required"),
});

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	let pathname = url.pathname;

	// Remove leading slash
	if (pathname.startsWith("/")) {
		pathname = pathname.slice(1);
	}

	const filePath = urlToFileMap.get(pathname);
	if (!filePath) {
		throw new Response("Not Found", { status: 404 });
	}

	const mod = docModules[filePath];
	if (!mod) {
		throw new Response("Not Found", { status: 404 });
	}

	const frontmatter = frontmatterSchema.parse(mod.frontmatter ?? {});

	return {
		filePath,
		frontmatter,
	};
}

export function meta({ loaderData }: Route.MetaArgs) {
	if (!loaderData?.frontmatter) {
		return [{ title: "@ngrok/mantle" }];
	}

	const { frontmatter } = loaderData;
	const title = frontmatter.title ? `${frontmatter.title} - @ngrok/mantle` : "@ngrok/mantle";

	return [
		{ title },
		...(frontmatter.description ? [{ name: "description", content: frontmatter.description }] : []),
	];
}

export function headers() {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
}

export default function DocPage({ loaderData }: Route.ComponentProps) {
	const { filePath } = loaderData;

	// Render the MDX component
	const mod = docModules[filePath];

	if (!mod) {
		return null;
	}

	const Component = mod.default;

	return (
		<MdxProvider>
			<Component />
		</MdxProvider>
	);
}
