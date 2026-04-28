// Vite resolves `?raw` imports to the file's source as a string at build
// time, so the published @ngrok/mantle CHANGELOG.md is the single source
// of truth and the docs site stays in sync without a separate copy step.
import changelogMarkdown from "../../../../packages/mantle/CHANGELOG.md?raw";
import { ContentLayout } from "~/components/content-layout";
import { canonicalHref } from "~/utilities/canonical-origin";
import {
	jsonLdGraphMetaDescriptor,
	mantleTechArticleJsonLd,
	mantleWebPageJsonLd,
	mantleWebsiteJsonLd,
} from "~/utilities/json-ld";
import { renderMarkdownToReact } from "~/utilities/render-markdown-to-react";
import type { Route } from "./+types/changelog";

// Parse the changelog once at module init. `renderMarkdownToReact` walks
// the full ~100 KB CHANGELOG; doing it inside the component would re-run
// during hydration and on every render.
const changelogTree = renderMarkdownToReact(changelogMarkdown);

const PAGE_TITLE = "Changelog";
const PAGE_DESCRIPTION =
	"Release notes for @ngrok/mantle, generated from the package's CHANGELOG.md via changesets.";

export function meta({ location }: Route.MetaArgs) {
	const canonicalUrl = canonicalHref(location.pathname);
	const title = `${PAGE_TITLE} - @ngrok/mantle`;

	const jsonLdValues = [
		mantleWebsiteJsonLd(),
		mantleWebPageJsonLd({
			name: title,
			description: PAGE_DESCRIPTION,
			pathname: location.pathname,
		}),
		mantleTechArticleJsonLd({
			title: PAGE_TITLE,
			description: PAGE_DESCRIPTION,
			pathname: location.pathname,
		}),
	];

	return [
		{ title },
		{ name: "description", content: PAGE_DESCRIPTION },
		{ property: "og:title", content: title },
		{ name: "twitter:title", content: title },
		{ property: "og:description", content: PAGE_DESCRIPTION },
		{ name: "twitter:description", content: PAGE_DESCRIPTION },
		{ tagName: "link" as const, rel: "canonical", href: canonicalUrl },
		{ property: "og:type", content: "article" },
		{ name: "og:url", property: "og:url", content: canonicalUrl },
		{ name: "twitter:url", content: canonicalUrl },
		jsonLdGraphMetaDescriptor(jsonLdValues),
	];
}

export default function ChangelogPage() {
	return (
		<ContentLayout markdownPath="/changelog.md">
			<h1>Changelog</h1>
			<p>
				Release notes for <code>@ngrok/mantle</code>, generated from the package's{" "}
				<a
					href="https://github.com/ngrok-oss/mantle/blob/main/packages/mantle/CHANGELOG.md"
					target="_blank"
					rel="noreferrer"
				>
					<code>CHANGELOG.md</code>
				</a>{" "}
				via{" "}
				<a href="https://github.com/changesets/changesets" target="_blank" rel="noreferrer">
					changesets
				</a>
				. The same content is available as plain markdown at{" "}
				<a href="/changelog.md">
					<code>/changelog.md</code>
				</a>{" "}
				for agent and tooling consumption.
			</p>
			<p>
				See also the{" "}
				<a
					href="https://www.npmjs.com/package/@ngrok/mantle?activeTab=versions"
					target="_blank"
					rel="noreferrer"
				>
					npm version history
				</a>{" "}
				and the{" "}
				<a href="https://github.com/ngrok-oss/mantle/releases" target="_blank" rel="noreferrer">
					GitHub releases
				</a>
				.
			</p>
			<hr />
			<div className="changelog-body [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-medium [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-accent-600 hover:[&_a]:underline [&_code]:rounded [&_code]:border [&_code]:border-gray-500/15 [&_code]:bg-gray-500/5 [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.85em] [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:border [&_pre]:border-gray-500/15 [&_pre]:bg-gray-500/5 [&_pre]:p-3 [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0">
				{changelogTree}
			</div>
		</ContentLayout>
	);
}
