import { MdxLayout } from "~/components/mdx-layout";
import PhilosophyContent from "~/content/philosophy.mdx";
import { makeCanonicalUrl } from "~/utilities/canonical-origin";
import type { Route } from "./+types/philosophy";
import { PageHeader } from "~/components/page-header";

export const meta: Route.MetaFunction = ({ location }) => {
	const canonicalUrl = makeCanonicalUrl(location.pathname);

	return [
		{ title: "Philosophy - @ngrok/mantle" },
		{
			//,
			name: "og:url",
			property: "og:url",
			content: canonicalUrl,
		},
		{
			name: "twitter:url",
			content: canonicalUrl,
		},
		{
			name: "description",
			content:
				"The design principles and architectural decisions that guide Mantle’s development, ensuring a consistent, accessible, and maintainable design system.",
		},
	];
};

export default function PhilosophyPage() {
	return (
		<>
			<MdxLayout>
				<PageHeader
					id="philosophy"
					title="Philosophy"
					description="The design principles and architectural philosophy behind mantle, ngrok’s UI library and design system"
				/>
				<PhilosophyContent />
			</MdxLayout>
		</>
	);
}
