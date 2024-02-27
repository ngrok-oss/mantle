import { Anchor } from "@/anchor";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle" },
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
			<h1 className="text-5xl font-medium">Mantle</h1>
			<p className="font-weight mt-4 text-xl text-default">
				Mantle is <Anchor href="https://ngrok.com">ngrok</Anchor>
				&rsquo;s UI library and design system that powers its front-end.
			</p>

			<h2 id="dependencies" className="mt-8 text-3xl font-medium">
				Dependencies
			</h2>
			<p className="mt-4 text-default">
				Mantle&rsquo;s styling is composed using <Anchor href="https://tailwindcss.com">Tailwind</Anchor>. Its{" "}
				<Anchor href="https://react.dev">React</Anchor> components are powered by{" "}
				<Anchor href="https://ui.shadcn.com">shadcn/ui</Anchor>
				&rsquo;s markup and <Anchor href="https://www.radix-ui.com">Radix</Anchor>
				&rsquo;s primitives. Its documentation is built in <Anchor href="https://remix.run/">Remix</Anchor>.
			</p>

			<h2 id="status" className="mt-8 text-3xl font-medium">
				Status
			</h2>
			<p className="mt-4 text-default">
				Mantle is a work in progress that&rsquo;s currently adding components. It intends to replace new and existing
				ngrok user interfaces.
			</p>

			<p className="mt-4 text-default">
				Mantle is available in its alpha state on{" "}
				<Anchor href="https://www.npmjs.com/package/@ngrok/mantle">NPM</Anchor>. It is open source and available on{" "}
				<Anchor href="https://github.com/ngrok-oss/mantle">GitHub</Anchor>.
			</p>
		</div>
	);
}
