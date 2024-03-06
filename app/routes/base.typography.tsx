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
			<h1 className="text-5xl font-medium">Typography</h1>
			<p className="mt-4 text-xl text-body">Very early explorations of typographic scale.</p>
			<h1 className="mt-8 text-5xl font-medium">Heading 1</h1>
			<h2 className="mt-4 text-3xl font-medium">Heading 2</h2>
			<h3 className="mt-4 text-2xl font-medium">Heading 3</h3>
			<h4 className="mt-4 text-xl font-medium">Heading 4</h4>
			<h5 className="mt-4 text-base font-medium">Heading 5</h5>
			<h6 className="mt-4 text-xs font-medium uppercase tracking-widest">Heading 6</h6>

			<div className="text-strong">Strong text</div>
			<div className="text-body">default text</div>
			<div className="text-muted">Muted text</div>
			<div className="text-placeholder">Placeholder text</div>
		</div>
	);
}
