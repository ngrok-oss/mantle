import { InlineCode } from "@ngrok/mantle/inline-code";
import { Table } from "@ngrok/mantle/table";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.typography";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Typography" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div>
			<PageHeader id="typography">Typography</PageHeader>
			<p className="font-body text-body mt-4 text-xl">
				Mantle provides various typography tokens for consistency and
				readability.
			</p>

			<h2 className="mt-8 text-3xl font-medium">Scale</h2>
			<p className="font-body text-body mt-3">
				Mantle provides a general type scale for various headers throughout our
				products. Do note that our text styling is independent of the actual
				markup, so a Heading 1 can be styled as a Heading 2 or Heading 5 as
				appropriate.
			</p>

			<h1 className="mt-4 text-5xl font-medium">Heading 1</h1>
			<h2 className="mt-4 text-3xl font-medium">Heading 2</h2>
			<h3 className="mt-4 text-2xl font-medium">Heading 3</h3>
			<h4 className="mt-4 text-xl font-medium">Heading 4</h4>
			<h5 className="mt-4 text-base font-medium">Heading 5</h5>
			<h6 className="mt-4 text-xs font-medium uppercase tracking-widest">
				Heading 6
			</h6>

			<h2 className="mt-12 text-3xl font-medium">Colors</h2>
			<p className="font-body text-body mt-3">
				When possible, it’s preferred to render text using the following tokens.
				This helps provide heirarchy outside of font size, and makes sure our
				type is the right color across various themes.
			</p>

			<div className="mt-3 flex flex-col gap-4 overflow-hidden text-xs md:flex-row">
				<div className="text-strong flex flex-grow flex-col gap-1">
					<div className="h-10 w-full rounded bg-neutral-950" />
					<div className="flex items-center justify-between">
						Strong
						<InlineCode>.text-strong</InlineCode>
					</div>
				</div>

				<div className="flex flex-grow flex-col gap-1">
					<div className="h-10 w-full rounded bg-neutral-950/75" />
					<div className="flex items-center justify-between">
						<span className="text-body">Body</span>
						<InlineCode>.text-body</InlineCode>
					</div>
				</div>

				<div className="flex flex-grow flex-col gap-1">
					<div className="h-10 w-full rounded bg-neutral-950/60" />
					<div className="flex items-center justify-between">
						<span className="text-muted">Muted</span>
						<InlineCode>.text-muted</InlineCode>
					</div>
				</div>

				<div className="flex flex-grow flex-col gap-1">
					<div className="h-10 w-full rounded bg-neutral-950/50" />
					<div className="flex items-center justify-between">
						<span className="text-placeholder">Placeholder</span>
						<InlineCode>.text-placeholder</InlineCode>
					</div>
				</div>
			</div>

			<h2 className="mt-12 text-3xl font-medium">Fonts</h2>
			<p className="font-body text-body mt-3">
				Mantle specifies Euclid as the default font for UI and headings. It
				extends Tailwind by providing Nunito Sans as a{" "}
				<InlineCode>font-body</InlineCode>. We also use IBM Plex Mono as a
				monospace typeface.
			</p>

			<Table.Root className="mt-4">
				<Table.Element>
					<Table.Head>
						<Table.Row>
							<Table.Header>Class</Table.Header>
							<Table.Header>Fonts</Table.Header>
							<Table.Header>Description</Table.Header>
						</Table.Row>
					</Table.Head>
					<Table.Body className="text-body text-xs">
						<Table.Row>
							<Table.Cell className="space-x-1 space-y-1">
								<InlineCode className="break-keep">font-sans</InlineCode>
								<InlineCode className="break-keep">default</InlineCode>
							</Table.Cell>
							<Table.Cell className="space-y-1">
								<p className="font-sans">Euclid Square</p>
								<p className="font-mono">
									"Euclid Square", ui-sans-serif, system-ui, sans-serif
								</p>
							</Table.Cell>
							<Table.Cell>
								The default font for rendering UI and headings.
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<InlineCode className="break-keep">font-body</InlineCode>
							</Table.Cell>
							<Table.Cell className="space-y-1">
								<p className="font-body">Nunito Sans</p>
								<p className="font-mono">
									"Nunito Sans", ui-sans-serif, system-ui, sans-serif
								</p>
							</Table.Cell>
							<Table.Cell>
								Best when used in longform writing like prose documentation.
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>
								<InlineCode className="break-keep">font-mono</InlineCode>
							</Table.Cell>
							<Table.Cell className="space-y-1">
								<p className="font-mono">IBM Plex Mono</p>
								<p className="font-mono">
									"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco,
									Consolas, "Liberation Mono", "Courier New", monospace
								</p>
							</Table.Cell>
							<Table.Cell>
								Used to render code and tokens. Take care to adjust the size a
								step down in most applications.
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Element>
			</Table.Root>
		</div>
	);
}
