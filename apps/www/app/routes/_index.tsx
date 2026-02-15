import { MdxProvider } from "~/components/mdx-provider";
import { docModules } from "~/utilities/docs";
import type { Route } from "./+types/_index";
import { DocActions } from "~/components/doc-actions";

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
		<div className="relative">
			<div className="absolute right-0 top-0">
				<DocActions markdownPath="/index.md" />
			</div>
			<MdxProvider>
				<Component />
			</MdxProvider>
		</div>
	);
}
