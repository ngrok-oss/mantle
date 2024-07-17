import { Icon } from "@/icon";
import { InlineCode } from "@/inline-code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import { Check } from "@phosphor-icons/react/Check";
import { X } from "@phosphor-icons/react/X";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Shadows" },
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
			<h1 className="text-5xl font-medium">Tailwind Variants</h1>
			<p className="mt-4 font-body text-xl text-body">Additional Tailwind variants added by our Tailwind preset.</p>

			<div className="mt-8 overflow-hidden rounded-lg border border-card">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead></TableHead>
							<TableHead>Class</TableHead>

							<TableHead>Description</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="font-body text-body">
						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 firefox:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 firefox:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.firefox:</InlineCode>
							</TableCell>

							<TableCell>Apply a class to Firefox browsers.</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 pointer-coarse:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 pointer-coarse:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.pointer-coarse:</InlineCode>
							</TableCell>

							<TableCell>
								Apply a class only when the user’s cursor is coarse. This generally means touch devices.
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 pointer-fine:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 pointer-fine:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.pointer-fine:</InlineCode>
							</TableCell>

							<TableCell>
								Apply a class only when the user’s cursor is fine. This applies to most mice and trackpads.
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 pointer-none:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 pointer-none:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.pointer-none:</InlineCode>
							</TableCell>

							<TableCell>Apply a class if the device has no primary pointer.</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 hover-hover:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 hover-hover:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.hover-hover:</InlineCode>
							</TableCell>

							<TableCell>Apply a class if hover is supported.</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 hover-none:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 hover-none:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.hover-none:</InlineCode>
							</TableCell>

							<TableCell>Apply a class if hover is unsupported</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon className="hidden size-4 text-success-600 high-contrast:block" svg={<Check weight="bold" />} />
								<Icon className="block size-4 text-danger-600 high-contrast:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.high-contrast:</InlineCode>
							</TableCell>

							<TableCell>Apply a class if high contrast theming is enabled.</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>
								<Icon
									className="hidden size-4 text-success-600 dark-high-contrast:block"
									svg={<Check weight="bold" />}
								/>
								<Icon className="block size-4 text-danger-600 dark-high-contrast:hidden" svg={<X weight="bold" />} />
							</TableCell>
							<TableCell>
								<InlineCode className="break-keep">.dark-high-contrast:</InlineCode>
							</TableCell>

							<TableCell>Apply a class if high contrast and dark themes are applied.</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>

			<ul className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 firefox:border-green-600 firefox:bg-green-600/10">
					firefox: <Icon className="hidden size-4 text-success-700 firefox:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 firefox:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 pointer-coarse:border-green-600 pointer-coarse:bg-green-600/10">
					pointer-coarse:{" "}
					<Icon className="hidden size-4 text-success-700 pointer-coarse:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 pointer-coarse:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 pointer-fine:border-green-600 pointer-fine:bg-green-600/10">
					pointer-fine:{" "}
					<Icon className="hidden size-4 text-success-700 pointer-fine:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 pointer-fine:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 pointer-none:border-green-600 pointer-none:bg-green-600/10">
					pointer-none:{" "}
					<Icon className="hidden size-4 text-success-700 pointer-none:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 pointer-none:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 hover-hover:border-green-600 hover-hover:bg-green-600/10">
					hover-hover:{" "}
					<Icon className="hidden size-4 text-success-700 hover-hover:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 hover-hover:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 hover-none:border-green-600 hover-none:bg-green-600/10">
					hover-none: <Icon className="hidden size-4 text-success-700 hover-none:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 hover-none:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 dark-high-contrast:border-green-600 dark-high-contrast:bg-green-600/10">
					dark-high-contrast:{" "}
					<Icon className="hidden size-4 text-success-700 dark-high-contrast:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 dark-high-contrast:hidden" svg={<X weight="bold" />} />
				</li>
				<li className="flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4 high-contrast:border-green-600 high-contrast:bg-green-600/10">
					high-contrast:{" "}
					<Icon className="hidden size-4 text-success-700 high-contrast:block" svg={<Check weight="bold" />} />
					<Icon className="block size-4 text-danger-700 high-contrast:hidden" svg={<X weight="bold" />} />
				</li>
			</ul>
		</div>
	);
}
