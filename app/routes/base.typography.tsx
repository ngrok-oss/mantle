import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Typography" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Typography</h1>
			<p className="mt-4 text-xl text-gray-600">Very early explorations of typographic scale.</p>
			<h1 className="mt-8 font-medium text-5xl">Heading 1</h1>
			<h2 className="mt-4 font-medium text-3xl">Heading 2</h2>
			<h3 className="mt-4 font-medium text-2xl">Heading 3</h3>
			<h4 className="mt-4 font-medium text-xl">Heading 4</h4>
			<h5 className="mt-4 font-medium text-base">Heading 5</h5>
			<h6 className="mt-4 font-medium text-xs uppercase tracking-widest">Heading 6</h6>
		</div>
	);
}
