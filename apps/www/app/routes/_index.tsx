import { useRef } from "react";
import { MdxProvider } from "~/components/mdx-provider";
import { DocActions } from "~/components/doc-actions";
import { TableOfContents } from "~/components/table-of-contents";
import { docModules } from "~/utilities/docs";
import type { Route } from "./+types/_index";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle" }];
};

const indexModule = docModules["../docs/index.mdx"];

export default function Page() {
	const contentRef = useRef<HTMLDivElement>(null);

	if (!indexModule) {
		return null;
	}

	const Component = indexModule.default;

	return (
		<>
			<div className="relative">
				<div className="absolute right-0 top-0">
					<DocActions markdownPath="/index.md" />
				</div>
				<div ref={contentRef}>
					<MdxProvider>
						<Component />
					</MdxProvider>
				</div>
			</div>
			<TableOfContents contentRef={contentRef} />
		</>
	);
}
