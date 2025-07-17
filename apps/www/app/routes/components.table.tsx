import { Anchor } from "@ngrok/mantle/anchor";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Table } from "@ngrok/mantle/table";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.table";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Table" },
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
			<section className="space-y-4">
				<PageHeader id="table">Table</PageHeader>
				<p className="font-body text-body text-xl">
					A structured way to display data in rows and columns. The API matches
					the HTML <InlineCode>table</InlineCode> element 1:1.
				</p>
				<div>
					<Example className="gap-2">
						<ExampleTable />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Table } from "@ngrok/mantle/table";

									<Table.Root>
										<Table.Element>
											<Table.Caption>A list of your recent invoices.</Table.Caption>
											<Table.Head>
												<Table.Row>
													<Table.Header className="w-[100px]">Invoice</Table.Header>
													<Table.Header>Status</Table.Header>
													<Table.Header>Method</Table.Header>
													<Table.Header className="text-right">Amount</Table.Header>
												</Table.Row>
											</Table.Head>
											<Table.Body>
												{invoices.map((invoice) => (
													<Table.Row key={invoice.invoice}>
														<Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
														<Table.Cell>{invoice.paymentStatus}</Table.Cell>
														<Table.Cell>{invoice.paymentMethod}</Table.Cell>
														<Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
													</Table.Row>
												))}
											</Table.Body>
											<Table.Foot>
												<Table.Row>
													<Table.Cell colSpan={3}>Total</Table.Cell>
													<Table.Cell className="text-right">$2,500.00</Table.Cell>
												</Table.Row>
											</Table.Foot>
										</Table.Element>
									</Table.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium text-strong">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Table</InlineCode> is structured way to display data
						in rows and columns. The API matches the HTML{" "}
						<InlineCode>table</InlineCode> element 1:1. It is composed of
						several sub-components.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-root" className="text-xl font-medium text-strong">
							Table.Root
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								Root container for all <InlineCode>Table</InlineCode>{" "}
								sub-components. Should be the parent of all other table
								sub-components.
							</p>

							<p>
								It provides styling and additional functionality, such as
								horizontal overflow detection.
							</p>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html div element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table" className="text-xl font-medium text-strong">
							Table
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The API matches the HTML <InlineCode>table</InlineCode> element
								1:1.
							</p>

							<p>Permitted content in this order:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									optional: <InlineCode>Table.Caption</InlineCode>
								</li>
								<li>
									0 or more: <InlineCode>colgroup</InlineCode> elements
								</li>
								<li>
									optional: <InlineCode>Table.Head</InlineCode>
								</li>
								<li>
									either one of the following:
									<ul className="list-disc ml-8 space-y-1">
										<li>
											0 or more: <InlineCode>Table.Body</InlineCode>
										</li>
										<li>
											0 or more: <InlineCode>Table.Row</InlineCode>
										</li>
									</ul>
								</li>
								<li>
									optional: <InlineCode>Table.Foot</InlineCode>
								</li>
							</ol>
							<p>
								Establishes a table formatting context. Elements inside the{" "}
								<InlineCode>Table</InlineCode> generate rectangular boxes. Each
								box occupies a number of table cells according to the following
								rules:
							</p>
							<ul className="list-disc ml-8 space-y-1">
								<li>
									The row boxes fill the table in the source code order from top
									to bottom. Each row box occupies one row of cells.
								</li>
								<li>A row group box occupies one or more row boxes.</li>
								<li>
									Column boxes are placed next to each other in source code
									order. Depending on the value of the dir attribute, the
									columns are laid in left-to-right or right-to-left direction.
									A column box occupies one or more columns of table cells.
								</li>
								<li>A column group box occupies one or more column boxes.</li>
								<li>
									A cell box may span over multiple rows and columns. User
									agents trim cells to fit in the available number of rows and
									columns.
								</li>
							</ul>
							<p>
								Table cells do have padding. Boxes that make up a table do not
								have margins.
							</p>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html table element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-head" className="text-xl font-medium text-strong">
							Table.Head
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>Table.Head</InlineCode> is a container for the
								table's column headers. Encapsulates a set of{" "}
								<InlineCode>Table.Row</InlineCode>s, indicating that they
								comprise the head of a table with information about the table's
								columns. This is usually in the form of column headers (
								<InlineCode>Table.Header</InlineCode>).
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table</InlineCode>. It
								should only come after any
								<InlineCode>Table.Caption</InlineCode> or{" "}
								<InlineCode>colgroup</InlineCode> and before any
								<InlineCode>Table.Body</InlineCode> or{" "}
								<InlineCode>Table.Foot</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>Table.Row</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html thead element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-body" className="text-xl font-medium text-strong">
							Table.Body
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>Table.Body</InlineCode> encapsulates a set of{" "}
								<InlineCode>Table.Row</InlineCode>s, indicating they they
								comprise the body of a table's (main) data.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table</InlineCode> and
								only come after any
								<InlineCode>Table.Caption</InlineCode>,
								<InlineCode>colgroup</InlineCode>, or{" "}
								<InlineCode>Table.Head</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>Table.Row</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html tbody element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-foot" className="text-xl font-medium text-strong">
							Table.Foot
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>Table.Foot</InlineCode> encapsulates a set of{" "}
								<InlineCode>Table.Row</InlineCode>s, indicating that they
								comprise the foot of a table with information about the table's
								columns. This is usually a summary of the columns, e.g., a sum
								of the given numbers in a column.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table</InlineCode> and
								only come after any
								<InlineCode>Table.Caption</InlineCode>,
								<InlineCode>colgroup</InlineCode>,
								<InlineCode>Table.Head</InlineCode>, and{" "}
								<InlineCode>Table.Body</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>Table.Row</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html tfoot element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-row" className="text-xl font-medium text-strong">
							Table.Row
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>Table.Row</InlineCode> defines a row of cells in
								a table. The row's cells can then be established using a mix of{" "}
								<InlineCode>Table.Cell</InlineCode> and{" "}
								<InlineCode>Table.Header</InlineCode> components.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table.Head</InlineCode>
								, <InlineCode>Table.Body</InlineCode>, or{" "}
								<InlineCode>Table.Foot</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>Table.Header</InlineCode> or{" "}
									<InlineCode>Table.Cell</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html tr element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-table-header"
							className="text-xl font-medium text-strong"
						>
							Table.Header
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>Table.Header</InlineCode> defines a cell as the
								header of a group of table cells and may be used as a child of a{" "}
								<InlineCode>Table.Row</InlineCode>. The exact nature of this
								group is defined by the scope and headers attributes.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table.Row</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									Flow content, but with no header, footer, sectioning content,
									or heading content descendants.
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html th element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-cell" className="text-xl font-medium text-strong">
							Table.Cell
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>Table.Cell</InlineCode> defines a cell of a
								table that contains data and may be used as a child of a{" "}
								<InlineCode>Table.Row</InlineCode>.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table.Row</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>Flow content</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html td element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-table-caption"
							className="text-xl font-medium text-strong"
						>
							Table.Caption
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The optional <InlineCode>Table.Caption</InlineCode> specifies
								the caption (or title) of a table, providing the table an
								accessible description.
							</p>

							<p>
								If used, must be the first child of a{" "}
								<InlineCode>Table</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>Flow content</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html caption element
								</Anchor>
							</p>
						</div>
					</header>
				</section>
			</section>
		</div>
	);
}

const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV004",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV005",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV006",
		paymentStatus: "Pending",
		totalAmount: "$200.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV007",
		paymentStatus: "Unpaid",
		totalAmount: "$300.00",
		paymentMethod: "Credit Card",
	},
];

const ExampleTable = () => {
	return (
		<Table.Root>
			<Table.Element>
				<Table.Caption>A list of your recent invoices.</Table.Caption>
				<Table.Head>
					<Table.Row>
						<Table.Header className="w-[100px]">Invoice</Table.Header>
						<Table.Header>Status</Table.Header>
						<Table.Header>Method</Table.Header>
						<Table.Header className="text-right">Amount</Table.Header>
					</Table.Row>
				</Table.Head>
				<Table.Body>
					{invoices.map((invoice) => (
						<Table.Row key={invoice.invoice}>
							<Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
							<Table.Cell>{invoice.paymentStatus}</Table.Cell>
							<Table.Cell>{invoice.paymentMethod}</Table.Cell>
							<Table.Cell className="text-right">
								{invoice.totalAmount}
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
				<Table.Foot>
					<Table.Row>
						<Table.Cell colSpan={3}>Total</Table.Cell>
						<Table.Cell className="text-right">$2,500.00</Table.Cell>
					</Table.Row>
				</Table.Foot>
			</Table.Element>
		</Table.Root>
	);
};
