import { Anchor } from "@ngrok/mantle/anchor";
import { IconButton } from "@ngrok/mantle/button";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import {
	DataTable,
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@ngrok/mantle/data-table";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { Icon } from "@ngrok/mantle/icon";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Table } from "@ngrok/mantle/table";
import { DotsThreeIcon } from "@phosphor-icons/react/DotsThree";
import { PencilSimpleIcon } from "@phosphor-icons/react/PencilSimple";
import { TrashSimpleIcon } from "@phosphor-icons/react/TrashSimple";
import { useMemo } from "react";
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
						<div className="w-full">
							<PaymentsExample />
						</div>
						<div className="w-full">
							<EmptyPaymentsExample />
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import {
										DataTable,
										createColumnHelper,
										getCoreRowModel,
										getFilteredRowModel,
										getPaginationRowModel,
										getSortedRowModel,
										useReactTable,
									} from "@ngrok/mantle/data-table";

									type Payment = {
										id: string;
										amount: number;
										status: "pending" | "processing" | "success" | "failed";
										email: string;
									};

									const columnHelper = createColumnHelper<Payment>();
									const columns = [
										columnHelper.accessor("id", {
											id: "id",
											header: (props) => (
												<DataTable.Header>
													<DataTable.HeaderSortButton
														column={props.column}
														sortingMode="alphanumeric"
													>
														ID
													</DataTable.HeaderSortButton>
												</DataTable.Header>
											),
											cell: (props) => (
												<Table.Cell key={props.cell.id}>{props.getValue()}</Table.Cell>
											),
										}),
										columnHelper.accessor("amount", {
											id: "amount",
											header: (props) => (
												<DataTable.Header className="w-[200px]">
													<DataTable.HeaderSortButton
														className="justify-end"
														column={props.column}
														iconPlacement="start"
														sortingMode="alphanumeric"
													>
														Amount
													</DataTable.HeaderSortButton>
												</DataTable.Header>
											),
											cell: (props) => (
												<Table.Cell key={props.cell.id} className="text-right">
													{props.getValue()}
												</Table.Cell>
											),
										}),
										columnHelper.accessor("status", {
											id: "status",
											header: (props) => (
												<DataTable.Header>
													<DataTable.HeaderSortButton
														column={props.column}
														sortingMode="alphanumeric"
													>
														Status
													</DataTable.HeaderSortButton>
												</DataTable.Header>
											),
											cell: (props) => (
												<Table.Cell key={props.cell.id}>{props.getValue()}</Table.Cell>
											),
										}),
										columnHelper.accessor("email", {
											id: "email",
											header: (props) => (
												<DataTable.Header>
													<DataTable.HeaderSortButton
														column={props.column}
														sortingMode="alphanumeric"
													>
														Email
													</DataTable.HeaderSortButton>
												</DataTable.Header>
											),
											cell: (props) => (
												<Table.Cell key={props.cell.id}>{props.getValue()}</Table.Cell>
											),
										}),
										columnHelper.display({
											id: "actions",
											header: () => <DataTable.Header />,
											cell: () => (
												<DataTable.ActionCell>
													<DropdownMenu>
														<DropdownMenu.Trigger asChild>
															<IconButton
																appearance="outlined"
																className="max-w rounded"
																type="button"
																size="sm"
																label="Open actions"
																icon={<DotsThree weight="bold" />}
															/>
														</DropdownMenu.Trigger>
														<DropdownMenu.Content align="end">
															<DropdownMenu.Item className="flex items-center gap-2">
																<Icon svg={<PencilSimple />} /> Edit
															</DropdownMenu.Item>
															<DropdownMenu.Item className="text-danger-600 flex items-center gap-2">
																<Icon svg={<TrashSimple />} />
																Delete
															</DropdownMenu.Item>
														</DropdownMenu.Content>
													</DropdownMenu>
												</DataTable.ActionCell>
											),
										}),
									];

									function PaymentsExample() {
										const data = useMemo(() => examplePayments, []);

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
											<DataTable table={table}>
												<DataTable.Head />
												<DataTable.Body>
													{table.getRowModel().rows.length > 0 ? (
														<DataTable.Rows />
													) : (
														<DataTable.EmptyRow>
															<p className="flex items-center justify-center min-h-20">
																No results.
															</p>
														</DataTable.EmptyRow>
													)}
												</DataTable.Body>
											</DataTable>
										);
									}
								`}
							/>
						</CodeBlock.Body>
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

const examplePayments: Payment[] = [
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
			<DataTable.Header>
				<DataTable.HeaderSortButton
					column={props.column}
					sortingMode="alphanumeric"
				>
					ID
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => (
			<Table.Cell key={props.cell.id}>{props.getValue()}</Table.Cell>
		),
	}),
	columnHelper.accessor("amount", {
		id: "amount",
		header: (props) => (
			<DataTable.Header className="w-[200px]">
				<DataTable.HeaderSortButton
					className="justify-end"
					column={props.column}
					iconPlacement="start"
					sortingMode="alphanumeric"
				>
					Amount
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => (
			<Table.Cell key={props.cell.id} className="text-right">
				{props.getValue()}
			</Table.Cell>
		),
	}),
	columnHelper.accessor("status", {
		id: "status",
		header: (props) => (
			<DataTable.Header>
				<DataTable.HeaderSortButton
					column={props.column}
					sortingMode="alphanumeric"
				>
					Status
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => (
			<Table.Cell key={props.cell.id}>{props.getValue()}</Table.Cell>
		),
	}),
	columnHelper.accessor("email", {
		id: "email",
		header: (props) => (
			<DataTable.Header>
				<DataTable.HeaderSortButton
					column={props.column}
					sortingMode="alphanumeric"
				>
					Email
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => (
			<Table.Cell key={props.cell.id}>{props.getValue()}</Table.Cell>
		),
	}),
	columnHelper.display({
		id: "actions",
		header: () => <DataTable.Header />,
		cell: () => (
			<DataTable.ActionCell>
				<DropdownMenu>
					<DropdownMenu.Trigger asChild>
						<IconButton
							appearance="outlined"
							className="max-w rounded"
							type="button"
							size="sm"
							label="Open actions"
							icon={<DotsThreeIcon weight="bold" />}
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Item className="flex items-center gap-2">
							<Icon svg={<PencilSimpleIcon />} /> Edit
						</DropdownMenu.Item>
						<DropdownMenu.Item className="text-danger-600 flex items-center gap-2">
							<Icon svg={<TrashSimpleIcon />} />
							Delete
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu>
			</DataTable.ActionCell>
		),
	}),
];

function EmptyPaymentsExample() {
	const data = useMemo(() => [], []);

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
		<DataTable table={table}>
			<DataTable.Head />
			<DataTable.Body>
				{table.getRowModel().rows.length > 0 ? (
					<DataTable.Rows />
				) : (
					<DataTable.EmptyRow>
						<p className="flex items-center justify-center min-h-20">
							No results.
						</p>
					</DataTable.EmptyRow>
				)}
			</DataTable.Body>
		</DataTable>
	);
}

function PaymentsExample() {
	const data = useMemo(() => examplePayments, []);

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
		<DataTable table={table}>
			<DataTable.Head />
			<DataTable.Body>
				{table.getRowModel().rows.length > 0 ? (
					<DataTable.Rows />
				) : (
					<DataTable.EmptyRow>
						<p className="flex items-center justify-center min-h-20">
							No results.
						</p>
					</DataTable.EmptyRow>
				)}
			</DataTable.Body>
		</DataTable>
	);
}
