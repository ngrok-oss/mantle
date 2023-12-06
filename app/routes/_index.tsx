import { Anchor } from "@/anchor";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Mantle</h1>
			<p className="font-weight mt-4 text-xl text-gray-600">
				Mantle is <Anchor href="https://ngrok.com">ngrok</Anchor>
				&apos;s UI library and design system that powers its front-end.
			</p>

			<h2 id="dependencies" className="mt-8 text-3xl font-medium">
				Dependencies
			</h2>
			<p className="mt-4 text-gray-600">
				Mantle&apos;s styling is composed using <Anchor href="https://tailwindcss.com">Tailwind</Anchor>. Its{" "}
				<Anchor href="https://react.dev">React</Anchor> components are powered by{" "}
				<Anchor href="https://ui.shadcn.com">shadcn/ui</Anchor>
				&apos;s markup and <Anchor href="https://www.radix-ui.com">Radix</Anchor>
				&apos;s primitives. Its documentation is built in <Anchor href="https://remix.run/">Remix</Anchor>.
			</p>

			<h2 id="status" className="mt-8 text-3xl font-medium">
				Status
			</h2>
			<p className="mt-4 text-gray-600">
				Mantle is a work in progress that&apos;s currently adding components. It intends to replace new and existing
				ngrok user interfaces.
			</p>

			<p className="mt-4 text-gray-600 mb-0">
				Mantle is available in its alpha state on{" "}
				<Anchor href="https://www.npmjs.com/package/@ngrok/mantle">NPM</Anchor>. It is open source and available on{" "}
				<Anchor href="https://github.com/ngrok-oss/mantle">GitHub</Anchor>.
			</p>
		</div>
	);
}
