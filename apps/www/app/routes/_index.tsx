import { Suspense, use } from "react";
import { ContentLayout } from "~/components/content-layout";
import { getDocComponent, resolveDocComponent } from "~/utilities/docs";
import {
	jsonLdGraphMetaDescriptor,
	mantleWebPageJsonLd,
	mantleWebsiteJsonLd,
} from "~/utilities/json-ld";
import type { Route } from "./+types/_index";

const indexFilePath = "../docs/index.mdx";
const title = "@ngrok/mantle";
const description = "mantle is ngrok's UI library and design system";

export const meta: Route.MetaFunction = () => {
	return [
		{ title },
		jsonLdGraphMetaDescriptor([
			mantleWebsiteJsonLd(),
			mantleWebPageJsonLd({
				name: title,
				description,
				pathname: "/",
			}),
		]),
	];
};

export default function Page() {
	if (import.meta.env.PROD) {
		return (
			<ContentLayout markdownPath="/index.md">
				<ProdIndexContent />
			</ContentLayout>
		);
	}

	return (
		<ContentLayout markdownPath="/index.md">
			<Suspense>
				<DevIndexContent />
			</Suspense>
		</ContentLayout>
	);
}

function ProdIndexContent() {
	const Component = getDocComponent(indexFilePath);
	if (!Component) {
		throw Response.json({ message: "Not Found" }, { status: 404 });
	}
	return <Component />;
}

function DevIndexContent() {
	const componentPromise = resolveDocComponent(indexFilePath);
	const Component = use(componentPromise);
	return <Component />;
}
