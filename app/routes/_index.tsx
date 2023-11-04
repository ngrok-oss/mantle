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
			<h1 className="text-5xl font-medium">Mantle</h1>
			<p className="mt-4 text-xl text-gray-600 font-weight max-w-prose">
				Mantle is{" "}
				<a className="text-brand-primary-600" href="https://ngrok.com">
					ngrok
				</a>
				’s UI library and design system that powers its front-end.
			</p>

			<h2 id="dependencies" className="mt-8 text-3xl font-medium">
				Dependencies
			</h2>
			<p className="mt-3 text-gray-600 max-w-prose">
				Mantle’s styling is composed using{" "}
				<a className="text-brand-primary-600" href="https://tailwindcss.com">
					Tailwind
				</a>
				. Its{" "}
				<a className="text-brand-primary-600" href="https://react.dev">
					React
				</a>{" "}
				components are powered by{" "}
				<a className="text-brand-primary-600" href="https://ui.shadcn.com">
					shadcn/ui
				</a>
				’s markup and{" "}
				<a className="text-brand-primary-600" href="https://www.radix-ui.com">
					Radix
				</a>
				’s primitives. Its documentation is built in{" "}
				<a className="text-brand-primary-600" href="https://remix.run/">
					Remix
				</a>
				.
			</p>

			<h2 id="status" className="mt-8 text-3xl font-medium">
				Status
			</h2>
			<p className="mt-3 text-gray-600 max-w-prose">
				Mantle is a work in progress that’s currently adding components. It intends to replace new and existing ngrok
				user interfaces.
			</p>
		</div>
	);
}
