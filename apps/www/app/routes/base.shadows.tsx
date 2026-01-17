import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.shadows";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Shadows" }];
};

export default function Page() {
	return (
		<div>
			<PageHeader id="shadows">Shadows</PageHeader>
			<p className="font-body text-body mt-4 text-xl">Tokens for defining elevations.</p>
			<div className="text-mono mt-8 flex flex-wrap gap-8 font-mono">
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow-inner">
					.shadow-inner
				</div>
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow-sm">
					.shadow-sm
				</div>
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow">
					.shadow
				</div>
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow-md">
					.shadow-md
				</div>
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow-lg">
					.shadow-lg
				</div>
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow-xl">
					.shadow-xl
				</div>
				<div className="bg-card xs:size-36 flex h-36 w-full shrink-0 items-center justify-center rounded-lg shadow-2xl">
					.shadow-2xl
				</div>
			</div>
		</div>
	);
}
