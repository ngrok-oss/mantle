import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Typography" },
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
			<p className="mt-4 text-xl text-body">Tokens for defining elevations.</p>
			<div className="mt-8 flex gap-8">
				<div className="size-24 rounded-lg bg-card shadow-md"></div>
				<div className="size-24 rounded-lg bg-card shadow-lg"></div>
				<div className="size-24 rounded-lg bg-card shadow-xl"></div>
				<div className="size-24 rounded-lg bg-card shadow-2xl"></div>
			</div>
		</div>
	);
}
