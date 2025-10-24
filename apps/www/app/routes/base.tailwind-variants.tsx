import { Code } from "@ngrok/mantle/code";
import { Icon } from "@ngrok/mantle/icon";
import { Table } from "@ngrok/mantle/table";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { XIcon } from "@phosphor-icons/react/X";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/base.tailwind-variants";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Variants" }];
};

export default function Page() {
	return (
		<div>
			<PageHeader id="tailwind-variants">Tailwind Variants</PageHeader>
			<p className="font-body text-body my-4 text-xl">
				Additional Tailwind variants added by our Tailwind preset.
			</p>

			<Table.Root>
				<Table.Element>
					<Table.Head>
						<Table.Row>
							<Table.Header />
							<Table.Header>Class</Table.Header>

							<Table.Header>Description</Table.Header>
						</Table.Row>
					</Table.Head>
					<Table.Body className="font-body text-body">
						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 pointer-coarse:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 pointer-coarse:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.pointer-coarse:</Code>
							</Table.Cell>

							<Table.Cell>
								Apply a class only when the user’s cursor is coarse. This
								generally means touch devices.
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 pointer-fine:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 pointer-fine:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.pointer-fine:</Code>
							</Table.Cell>

							<Table.Cell>
								Apply a class only when the user’s cursor is fine. This applies
								to most mice and trackpads.
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 pointer-none:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 pointer-none:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.pointer-none:</Code>
							</Table.Cell>

							<Table.Cell>
								Apply a class if the device has no primary pointer.
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 hover-hover:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 hover-hover:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.hover-hover:</Code>
							</Table.Cell>

							<Table.Cell>Apply a class if hover is supported.</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 hover-none:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 hover-none:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.hover-none:</Code>
							</Table.Cell>

							<Table.Cell>Apply a class if hover is unsupported</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 high-contrast:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 high-contrast:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.high-contrast:</Code>
							</Table.Cell>

							<Table.Cell>
								Apply a class if high contrast theming is enabled.
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>
								<Icon
									className="text-success-600 dark-high-contrast:block hidden size-4"
									svg={<CheckIcon weight="bold" />}
								/>
								<Icon
									className="text-danger-600 dark-high-contrast:hidden block size-4"
									svg={<XIcon weight="bold" />}
								/>
							</Table.Cell>
							<Table.Cell>
								<Code className="break-keep">.dark-high-contrast:</Code>
							</Table.Cell>

							<Table.Cell>
								Apply a class if high contrast and dark themes are applied.
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Element>
			</Table.Root>

			<ul className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
				<li className="pointer-coarse:border-green-600 pointer-coarse:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					pointer-coarse:{" "}
					<Icon
						className="text-success-700 pointer-coarse:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 pointer-coarse:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
				<li className="pointer-fine:border-green-600 pointer-fine:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					pointer-fine:{" "}
					<Icon
						className="text-success-700 pointer-fine:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 pointer-fine:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
				<li className="pointer-none:border-green-600 pointer-none:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					pointer-none:{" "}
					<Icon
						className="text-success-700 pointer-none:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 pointer-none:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
				<li className="hover-hover:border-green-600 hover-hover:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					hover-hover:{" "}
					<Icon
						className="text-success-700 hover-hover:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 hover-hover:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
				<li className="hover-none:border-green-600 hover-none:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					hover-none:{" "}
					<Icon
						className="text-success-700 hover-none:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 hover-none:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
				<li className="dark-high-contrast:border-green-600 dark-high-contrast:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					dark-high-contrast:{" "}
					<Icon
						className="text-success-700 dark-high-contrast:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 dark-high-contrast:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
				<li className="high-contrast:border-green-600 high-contrast:bg-green-600/10 flex items-center justify-between gap-1 rounded-lg border border-red-600 bg-red-600/10 p-4">
					high-contrast:{" "}
					<Icon
						className="text-success-700 high-contrast:block hidden size-4"
						svg={<CheckIcon weight="bold" />}
					/>
					<Icon
						className="text-danger-700 high-contrast:hidden block size-4"
						svg={<XIcon weight="bold" />}
					/>
				</li>
			</ul>
		</div>
	);
}
