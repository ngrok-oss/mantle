import { ContentLayout } from "~/components/content-layout";
import { docModules } from "~/utilities/docs";
import type { Route } from "./+types/_index";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle" }];
};

const indexModule = docModules["../docs/index.mdx"];

export default function Page() {
	if (!indexModule) {
		return null;
	}

	const Component = indexModule.default;

	return (
		<ContentLayout markdownPath="/index.md">
			<Component />
		</ContentLayout>
	);
}
