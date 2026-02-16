import { Suspense, use } from "react";
import { ContentLayout } from "~/components/content-layout";
import { resolveDocComponent } from "~/utilities/docs";
import type { Route } from "./+types/_index";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle" }];
};

export default function Page() {
	return (
		<ContentLayout markdownPath="/index.md">
			<Suspense>
				<IndexContent />
			</Suspense>
		</ContentLayout>
	);
}

function IndexContent() {
	const componentPromise = resolveDocComponent("../docs/index.mdx");
	const Component = use(componentPromise);
	return <Component />;
}
