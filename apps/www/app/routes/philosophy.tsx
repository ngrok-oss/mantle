import { MdxLayout } from "~/components/mdx-layout";
import PhilosophyContent from "~/content/philosophy.mdx";
import type { Route } from "./+types/philosophy";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "Philosophy - @ngrok/mantle" },
		{
			name: "description",
			content:
				"The design principles and architectural philosophy behind mantle, ngrok's UI library and design system",
		},
	];
};

export default function PhilosophyPage() {
	return (
		<MdxLayout>
			<PhilosophyContent />
		</MdxLayout>
	);
}
