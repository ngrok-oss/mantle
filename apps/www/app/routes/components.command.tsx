import { PageHeader } from "~/components/page-header";

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="command">Command</PageHeader>
				<p className="font-body text-body text-xl">
					A command palette that allows users to search and execute commands.
				</p>
			</section>
		</div>
	);
}
