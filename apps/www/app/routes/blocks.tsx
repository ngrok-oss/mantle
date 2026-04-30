import { Link } from "react-router";
import { blockDescriptions, blockPages, blockRoutes } from "~/components/navigation-data";

export const meta = () => {
	return [
		{ title: "Blocks - @ngrok/mantle" },
		{ name: "description", content: "Production-minded layout recipes built with mantle" },
	];
};

export default function BlocksPage() {
	return (
		<div>
			<h1 className="text-4xl font-medium text-strong sm:text-5xl font-family mb-4">Blocks</h1>
			<p className="mb-4 leading-relaxed text-pretty text-body">
				Production-minded layout recipes built with mantle components. Use these when a component
				page is too small and a full app flow is too much.
			</p>
			<ul className="mt-8 max-w-3xl divide-y divide-gray-300 border-y border-gray-300">
				{blockPages.map((page) => (
					<li key={page}>
						<Link
							to={blockRoutes[page]}
							prefetch="intent"
							className="group block rounded py-4 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-focus-accent"
						>
							<span className="font-medium text-strong group-hover:text-accent-600">{page}</span>
							<p className="mt-1 text-sm leading-relaxed text-body">{blockDescriptions[page]}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
