import { Anchor } from "@ngrok/mantle/anchor";
import { IconButton } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { SandboxedOnClick } from "@ngrok/mantle/sandboxed-on-click";
import { Table } from "@ngrok/mantle/table";
import { BookIcon } from "@phosphor-icons/react/Book";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
} from "~/components/props-table";
import type { Route } from "./+types/components.sandboxed-on-click";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — SandboxedOnClick" }];
};

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

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="sandboxed-on-click">SandboxedOnClick</PageHeader>
				<p className="font-body text-body text-xl">
					A container that prevents the click event from bubbling out of it.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<p>
							Each table row will trigger a <Code>window.alert()</Code> when
							clicked. The icon button is wrapped in{" "}
							<Code>SandboxedOnClick</Code> and navigates you to{" "}
							<Anchor href="https://ngrok.com/docs">the ngrok docs.</Anchor>
						</p>
						<Table.Root>
							<Table.Element>
								<Table.Caption>A list of your recent invoices.</Table.Caption>
								<Table.Head>
									<Table.Row>
										<Table.Header className="w-[100px]">Invoice</Table.Header>
										<Table.Header>Status</Table.Header>
										<Table.Header>Method</Table.Header>
										<Table.Header className="text-right">Amount</Table.Header>
										<Table.Header className="text-right">Actions</Table.Header>
									</Table.Row>
								</Table.Head>
								<Table.Body>
									{invoices.map((invoice) => (
										<Table.Row
											key={invoice.invoice}
											className="cursor-pointer"
											onClick={() => {
												window.alert(`Clicked on ${invoice.invoice}!`);
											}}
										>
											<Table.Cell className="font-medium">
												{invoice.invoice}
											</Table.Cell>
											<Table.Cell>{invoice.paymentStatus}</Table.Cell>
											<Table.Cell>{invoice.paymentMethod}</Table.Cell>
											<Table.Cell className="text-right">
												{invoice.totalAmount}
											</Table.Cell>
											<Table.Cell className="text-right">
												<SandboxedOnClick allowClickEventDefault>
													<IconButton
														label="See ngrok docs"
														icon={<BookIcon />}
														asChild
													>
														<a href="https://ngrok.com/docs" target="_blank" />
													</IconButton>
												</SandboxedOnClick>
											</Table.Cell>
										</Table.Row>
									))}
								</Table.Body>
								<Table.Foot>
									<Table.Row>
										<Table.Cell colSpan={3}>Total</Table.Cell>
										<Table.Cell className="text-right">$2,500.00</Table.Cell>
										<Table.Cell />
									</Table.Row>
								</Table.Foot>
							</Table.Element>
						</Table.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { SandboxedOnClick } from "@ngrok/mantle/sandboxed-on-click";
									import {
										Table,
										Table.Body,
										Table.Caption,
										Table.Cell,
										Table.Foot,
										Table.Head,
										Table.Header,
										Table.Root,
										Table.Row,
									} from "@ngrok/mantle/table";
									import { BookIcon } from "@phosphor-icons/react/Book";

									<Table.Root>
										<Table.Element>
											<Table.Caption>A list of your recent invoices.</Table.Caption>
											<Table.Head>
												<Table.Row>
													<Table.Header className="w-[100px]">Invoice</Table.Header>
													<Table.Header>Status</Table.Header>
													<Table.Header>Method</Table.Header>
													<Table.Header className="text-right">Amount</Table.Header>
													<Table.Header className="text-right">Actions</Table.Header>
												</Table.Row>
											</Table.Head>
											<Table.Body>
												{invoices.map((invoice) => (
													<Table.Row
														key={invoice.invoice}
														className="cursor-pointer"
														onClick={() => {
															window.alert(\`Clicked on \${invoice.invoice}!\`);
														}}
													>
														<Table.Cell className="font-medium">
															{invoice.invoice}
														</Table.Cell>
														<Table.Cell>{invoice.paymentStatus}</Table.Cell>
														<Table.Cell>{invoice.paymentMethod}</Table.Cell>
														<Table.Cell className="text-right">
															{invoice.totalAmount}
														</Table.Cell>
														<Table.Cell className="text-right">
															<SandboxedOnClick allowClickEventDefault>
																<IconButton
																	label="See ngrok docs"
																	icon={<BookIcon />}
																	asChild
																>
																	<a href="https://ngrok.com/docs" target="_blank" />
																</IconButton>
															</SandboxedOnClick>
														</Table.Cell>
													</Table.Row>
												))}
											</Table.Body>
											<Table.Foot>
												<Table.Row>
													<Table.Cell colSpan={3}>Total</Table.Cell>
													<Table.Cell className="text-right">$2,500.00</Table.Cell>
													<Table.Cell />
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

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="api" className="text-3xl font-medium">
						<h2>API Reference</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-sandboxed-on-click"
							className="text-xl font-medium text-strong"
						>
							<h3>SandboxedOnClick</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A container that prevents the click event from bubbling out of it.
							Good to use when you want to provide some action buttons inside of
							a table row or list item that navigates on click.
						</p>

						<p className="font-body text-body">
							Good to use when you want to provide some action buttons inside of
							a table row or list item that navigates on click.
						</p>

						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="allowClickEventDefault" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Only call <Code>event.preventDefault()</Code> in the{" "}
									<Code>onClick</Code> handler if the user has not set{" "}
									<Code>allowClickEventDefault</Code> to
									<Code>true</Code>.
								</p>
								<p>
									This allows the user to control whether or not the default
									behavior of the click event should be allowed.
								</p>
								<p>
									This is useful for links or buttons that should navigate or
									perform some action on click.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>SandboxedOnClick</Code> functionality onto alternative
									element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
