import { Icon } from "@ngrok/mantle/icon";
import { InlineCode } from "@ngrok/mantle/inline-code";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ngrok/mantle/table";
import { Check } from "@phosphor-icons/react/Check";
import { X } from "@phosphor-icons/react/X";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.tailwind-variants";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Shadows" },
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
			<PageHeader id="tailwind-variants">Tailwind Variants</PageHeader>
			<p className="font-body text-body my-4 text-xl">
				Additional Tailwind variants added by our Tailwind preset.
			</p>

			<Table>
				<TableHead>
					<TableRow>
						<TableHeader />
						<TableHeader>Class</TableHeader>

						<TableHeader>Description</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody className="font-body text-body">
					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 firefox:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 firefox:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.firefox:</InlineCode>
						</TableCell>

						<TableCell>Apply a class to Firefox browsers.</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 pointer-coarse:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 pointer-coarse:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.pointer-coarse:</InlineCode>
						</TableCell>

						<TableCell>
							Apply a class only when the user’s cursor is coarse. This
							generally means touch devices.
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 pointer-fine:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 pointer-fine:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.pointer-fine:</InlineCode>
						</TableCell>

						<TableCell>
							Apply a class only when the user’s cursor is fine. This applies to
							most mice and trackpads.
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 pointer-none:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 pointer-none:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.pointer-none:</InlineCode>
						</TableCell>

						<TableCell>
							Apply a class if the device has no primary pointer.
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 hover-hover:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 hover-hover:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.hover-hover:</InlineCode>
						</TableCell>

						<TableCell>Apply a class if hover is supported.</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 hover-none:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 hover-none:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.hover-none:</InlineCode>
						</TableCell>

						<TableCell>Apply a class if hover is unsupported</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 high-contrast:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 high-contrast:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">.high-contrast:</InlineCode>
						</TableCell>

						<TableCell>
							Apply a class if high contrast theming is enabled.
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Icon
								className="text-success-600 dark-high-contrast:block hidden size-4"
								svg={<Check weight="bold" />}
							/>
							<Icon
								className="text-danger-600 dark-high-contrast:hidden block size-4"
								svg={<X weight="bold" />}
							/>
						</TableCell>
						<TableCell>
							<InlineCode className="break-keep">
								.dark-high-contrast:
							</InlineCode>
						</TableCell>

						<TableCell>
							Apply a class if high contrast and dark themes are applied.
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<ul className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
				<li className="firefox:border-green-600 firefox:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					firefox:{" "}
					<Icon
						className="text-success-700 firefox:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 firefox:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="pointer-coarse:border-green-600 pointer-coarse:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					pointer-coarse:{" "}
					<Icon
						className="text-success-700 pointer-coarse:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 pointer-coarse:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="pointer-fine:border-green-600 pointer-fine:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					pointer-fine:{" "}
					<Icon
						className="text-success-700 pointer-fine:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 pointer-fine:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="pointer-none:border-green-600 pointer-none:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					pointer-none:{" "}
					<Icon
						className="text-success-700 pointer-none:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 pointer-none:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="hover-hover:border-green-600 hover-hover:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					hover-hover:{" "}
					<Icon
						className="text-success-700 hover-hover:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 hover-hover:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="hover-none:border-green-600 hover-none:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					hover-none:{" "}
					<Icon
						className="text-success-700 hover-none:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 hover-none:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="dark-high-contrast:border-green-600 dark-high-contrast:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					dark-high-contrast:{" "}
					<Icon
						className="text-success-700 dark-high-contrast:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 dark-high-contrast:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
				<li className="high-contrast:border-green-600 high-contrast:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					high-contrast:{" "}
					<Icon
						className="text-success-700 high-contrast:block hidden size-4"
						svg={<Check weight="bold" />}
					/>
					<Icon
						className="text-danger-700 high-contrast:hidden block size-4"
						svg={<X weight="bold" />}
					/>
				</li>
			</ul>
		</div>
	);
}
