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
			<h1 className="text-5xl font-medium">Shadows</h1>
			<p className="font-body text-body mt-4 text-xl">Tokens for defining elevations.</p>
			<div className="mt-8 flex gap-8">
				<div className="bg-card size-24 rounded-lg shadow-inner"></div>
				<div className="bg-card size-24 rounded-lg shadow-sm"></div>
				<div className="bg-card size-24 rounded-lg shadow"></div>
				<div className="bg-card size-24 rounded-lg shadow-md"></div>
				<div className="bg-card size-24 rounded-lg shadow-lg"></div>
				<div className="bg-card size-24 rounded-lg shadow-xl"></div>
				<div className="bg-card size-24 rounded-lg shadow-2xl"></div>
			</div>
		</div>
	);
}
