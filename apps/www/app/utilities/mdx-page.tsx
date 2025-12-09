import { MdxLayout } from "~/components/mdx-layout";
import { PageHeader } from "~/components/page-header";
import { makeCanonicalUrl } from "~/utilities/canonical-origin";
import type { ComponentType } from "react";

type MdxPageConfig = {
	/**
	 * The ID for the page header, used for anchor links
	 */
	id: string;
	/**
	 * The page title, displayed in the header and browser tab
	 */
	title: string;
	/**
	 * Optional description shown below the title
	 */
	description?: string;
	/**
	 * Optional meta description for SEO (defaults to description if not provided)
	 */
	metaDescription?: string;
	/**
	 * Mark the page as preview
	 */
	isPreview?: boolean;
	/**
	 * Mark the page as unreleased
	 */
	isUnreleased?: boolean;
};

/**
 * Creates a meta function for an MDX page with canonical URLs and SEO metadata
 *
 * @param config - Configuration for the MDX page metadata
 * @returns A meta function compatible with React Router's meta function
 *
 * @deprecated Prefer defining meta directly in .mdx files instead of using this helper.
 * See philosophy.mdx for an example of the recommended pattern.
 *
 * @example
 * export const meta = createMdxPageMeta({
 *   id: "philosophy",
 *   title: "Philosophy",
 *   description: "The design principles behind Mantle",
 * });
 */
export function createMdxPageMeta(config: MdxPageConfig) {
	const { title, description, metaDescription } = config;
	const fullTitle = `${title} - @ngrok/mantle`;
	const descriptionText = metaDescription || description;

	return ({ location }: { location: { pathname: string } }) => {
		const canonicalUrl = makeCanonicalUrl(location.pathname);

		const meta: Array<
			| { title: string }
			| { name: string; content: string }
			| { property: string; content: string }
			| { name: string; property: string; content: string }
		> = [
			{ title: fullTitle },
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
		];

		if (descriptionText) {
			meta.push({
				name: "description",
				content: descriptionText,
			});
		}

		return meta;
	};
}

/**
 * Creates a page component for an MDX page with consistent layout and header
 *
 * @deprecated Prefer defining layout and exports directly in .mdx files instead of using this helper.
 * MDX files can now be used directly as routes by placing them in app/routes/ and exporting
 * meta and a default Layout component. See philosophy.mdx for the recommended pattern.
 *
 * @param MdxContent - The imported MDX component
 * @param config - Configuration for the MDX page
 * @returns A page component ready to be used as a route default export
 *
 * @example
 * // Old pattern (deprecated)
 * import PhilosophyContent from "~/content/philosophy.mdx";
 * import { createMdxPage, createMdxPageMeta } from "~/utilities/mdx-page";
 *
 * const config = {
 *   id: "philosophy",
 *   title: "Philosophy",
 *   description: "The design principles behind Mantle",
 * };
 *
 * export const meta = createMdxPageMeta(config);
 * export default createMdxPage(PhilosophyContent, config);
 *
 * @example
 * // New recommended pattern - define directly in .mdx file:
 * // app/routes/philosophy.mdx
 * import { MdxLayout } from "~/components/mdx-layout";
 * import { PageHeader } from "~/components/page-header";
 * import { makeCanonicalUrl } from "~/utilities/canonical-origin";
 *
 * export const meta = ({ location }) => {
 *   const canonicalUrl = makeCanonicalUrl(location.pathname);
 *   return [
 *     { title: "Philosophy - @ngrok/mantle" },
 *     { name: "description", content: "The design principles behind Mantle" }
 *   ];
 * };
 *
 * export default function Layout({ children }) {
 *   return (
 *     <MdxLayout>
 *       <PageHeader id="philosophy" title="Philosophy" description="..." />
 *       {children}
 *     </MdxLayout>
 *   );
 * }
 *
 * // Your markdown content here...
 */
export function createMdxPage(
	MdxContent: ComponentType,
	config: MdxPageConfig,
) {
	const { id, title, description, isPreview, isUnreleased } = config;

	return function MdxPage() {
		return (
			<MdxLayout>
				<PageHeader
					id={id}
					title={title}
					description={description}
					isPreview={isPreview}
					isUnreleased={isUnreleased}
				/>
				<MdxContent />
			</MdxLayout>
		);
	};
}
