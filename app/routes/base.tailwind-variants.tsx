import { Icon } from "@/icon";
import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { XCircle } from "@phosphor-icons/react/XCircle";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Shadows" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Tailwind Variants</h1>
			<p className="font-body mt-4 text-xl text-body">
				Additional tailwind variants added by our tailwind preset. The boxes below will have a green border and
				checkmark if they match, else a red border and X.
			</p>
			<ul className="mx-auto mt-8 flex flex-wrap gap-8">
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 firefox:border-green-600 firefox:bg-green-600/10">
					firefox: <Icon className="hidden firefox:block" svg={<CheckCircle />} />
					<Icon className="block firefox:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 pointer-coarse:border-green-600 pointer-coarse:bg-green-600/10">
					pointer-coarse: <Icon className="hidden pointer-coarse:block" svg={<CheckCircle />} />
					<Icon className="block pointer-coarse:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 pointer-fine:border-green-600 pointer-fine:bg-green-600/10">
					pointer-fine: <Icon className="hidden pointer-fine:block" svg={<CheckCircle />} />
					<Icon className="block pointer-fine:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 pointer-none:border-green-600 pointer-none:bg-green-600/10">
					pointer-none: <Icon className="hidden pointer-none:block" svg={<CheckCircle />} />
					<Icon className="block pointer-none:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 hover-hover:border-green-600 hover-hover:bg-green-600/10">
					hover-hover: <Icon className="hidden hover-hover:block" svg={<CheckCircle />} />
					<Icon className="block hover-hover:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 hover-none:border-green-600 hover-none:bg-green-600/10">
					hover-none: <Icon className="hidden hover-none:block" svg={<CheckCircle />} />
					<Icon className="block hover-none:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 dark-high-contrast:border-green-600 dark-high-contrast:bg-green-600/10">
					dark-high-contrast: <Icon className="hidden dark-high-contrast:block" svg={<CheckCircle />} />
					<Icon className="block dark-high-contrast:hidden" svg={<XCircle />} />
				</li>
				<li className="flex size-28 flex-col items-center justify-center gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 high-contrast:border-green-600 high-contrast:bg-green-600/10">
					high-contrast: <Icon className="hidden high-contrast:block" svg={<CheckCircle />} />
					<Icon className="block high-contrast:hidden" svg={<XCircle />} />
				</li>
			</ul>
		</div>
	);
}
