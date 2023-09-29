import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle" },
		{ name: "description", content: "mantle is ngrok’s UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl">Mantle</h1>
			<p className="mt-4 text-xl text-gray-600">Dank mode engage.</p>
		</div>
	);
}
