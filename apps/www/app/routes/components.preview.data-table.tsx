import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import {
	DataTableHeader,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@ngrok/mantle/data-table";
import { InlineCode } from "@ngrok/mantle/inline-code";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ngrok/mantle/table";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.preview.data-table";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Data Table" },
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
		<div className="space-y-16">
			<div className="space-y-4">
				<PageHeader id="data-table" isPreview>
					Data Table
				</PageHeader>
				<p className="font-body text-body text-xl">
					Tables purposefully designed for dynamic, application data with
					features like sorting, filtering, and pagination. Powered by{" "}
					<Anchor href="https://tanstack.com/table/latest/docs/introduction">
						TanStack Table
					</Anchor>
					.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<PaymentsExample />
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { DNE } from "@ngrok/mantle/data-table";

									<DNE />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</div>
			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>DataTable</InlineCode> accepts the following props in
					addition to...
				</p>
				{/* <PropsTable>
					<PropRow>
						<PropNameCell name="max" optional />
						<PropTypeCell>
							<NumberPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<NumberPropType value={100} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The maximum value of the progress bar. This attribute describes how much work the task indicated by the
								progress element requires. The max attribute, if present, must have a value greater than 0. The default
								value is 100.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="strokeWidth" optional />
						<PropTypeCell>
							<ul>
								<li>
									<NumberPropType />
								</li>
								<li>
									<StringPropType value="`${number}rem`" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="0.25rem" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The width of the progress bar stroke. Note, we clamp the stroke width to a minimum of 1px and max of
								12px since it is proportional to the viewbox size (0 0 32 32).
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="value" optional />
						<PropTypeCell>
							<ul>
								<li>
									<NumberPropType />
								</li>
								<li>
									<StringPropType value="indeterminate" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<NumberPropType value={0} />
						</PropDefaultValueCell>
						<PropDescriptionCell className="space-y-2">
							<p>
								The current value of the progress bar. This attribute specifies how much of the task that has been
								completed. It must be a valid floating point number between 0 and max, or between 0 and 100 if max is
								omitted.
							</p>
							<p>
								If set to <InlineCode>"indeterminate"</InlineCode>, the progress bar is considered{" "}
								<strong>indeterminate</strong>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable> */}
			</section>
		</div>
	);
}

type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

const data: Payment[] = [
	{
		id: "m5gr84i9",
		amount: 316,
		status: "success",
		email: "ken99@example.com",
	},
	{
		id: "3u1reuv4",
		amount: 242,
		status: "success",
		email: "Abe45@example.com",
	},
	{
		id: "derv1ws0",
		amount: 837,
		status: "processing",
		email: "Monserrat44@example.com",
	},
	{
		id: "5kma53ae",
		amount: 874,
		status: "success",
		email: "Silas22@example.com",
	},
	{
		id: "bhqecj4p",
		amount: 721,
		status: "failed",
		email: "carmella@example.com",
	},
];

const columnHelper = createColumnHelper<Payment>();

const columns = [
	columnHelper.accessor("id", {
		id: "id",
		header: (props) => (
			<DataTableHeader column={props.column} sortingMode="alphanumeric">
				ID
			</DataTableHeader>
		),
		cell: (props) => <TableCell>{props.getValue()}</TableCell>,
	}),
	columnHelper.accessor("amount", {
		id: "amount",
		header: (props) => (
			<DataTableHeader column={props.column} sortingMode="alphanumeric">
				Amount
			</DataTableHeader>
		),
		cell: (props) => <TableCell>{props.getValue()}</TableCell>,
	}),
	columnHelper.accessor("status", {
		id: "status",
		header: (props) => (
			<DataTableHeader column={props.column} sortingMode="alphanumeric">
				Status
			</DataTableHeader>
		),
		cell: (props) => <TableCell>{props.getValue()}</TableCell>,
	}),
	columnHelper.accessor("email", {
		id: "email",
		header: (props) => (
			<DataTableHeader column={props.column} sortingMode="alphanumeric">
				Email
			</DataTableHeader>
		),
		cell: (props) => <TableCell>{props.getValue()}</TableCell>,
	}),
];

function PaymentsExample() {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		initialState: {
			pagination: {
				pageSize: 100,
			},
		},
	});

	return (
		<Table>
			<TableHead>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							return header.isPlaceholder ? (
								<TableHeader key={header.id} />
							) : (
								flexRender(header.column.columnDef.header, header.getContext())
							);
						})}
					</TableRow>
				))}
			</TableHead>
			<TableBody>
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							className="cursor-pointer !border-0 [&_>_td]:border-b [&_>_td]:border-card-muted [&_>_td]:last:border-b-0 [&_>_td]:bg-card [&_>_td]:hover:bg-card-hover"
							// data-state={row.getIsSelected() && "selected"}
							// onClick={() => console.log("row", row)}
						>
							{row
								.getVisibleCells()
								.map((cell) =>
									flexRender(cell.column.columnDef.cell, cell.getContext()),
								)}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell colSpan={columns.length} className="h-24 text-center">
							No results.
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
