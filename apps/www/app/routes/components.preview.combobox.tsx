import { Anchor } from "@ngrok/mantle/anchor";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Combobox } from "@ngrok/mantle/combobox";
import { CirclesThreePlusIcon } from "@phosphor-icons/react/CirclesThreePlus";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.preview.combobox";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Combobox" },
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
		<div className="space-y-4">
			<PageHeader id="hover-card" isPreview>
				Combobox
			</PageHeader>
			<p className="font-body text-body text-xl">
				Fill in a React input field with autocomplete & autosuggest
				functionalities. Choose from a list of suggested values with full
				keyboard support. This component is based on the{" "}
				<Anchor href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/">
					WAI-ARIA Combobox Pattern
				</Anchor>
				and is powered by the{" "}
				<Anchor href="https://ariakit.org/components/combobox">
					ariakit Combobox
				</Anchor>
				.
			</p>
			<div>
				<Example className="gap-2">
					<Combobox.Root>
						<Combobox.Input />
						<Combobox.Content>
							<Combobox.Group>
								<Combobox.GroupLabel>
									Choose an ngrok subdomain
								</Combobox.GroupLabel>
								<Combobox.Item value="https://" disabled>
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.app">
									<CirclesThreePlusIcon
										weight="duotone"
										className="text-accent-600"
									/>
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.dev">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.io">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.free">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.pizza">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.ninja">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.wtf">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.biz">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.online">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.space">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.tld0">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.tld1">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.tld2">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.tld3">
									<Combobox.ItemValue />
								</Combobox.Item>
								<Combobox.Item value="https://${random}.ngrok.tld4">
									<Combobox.ItemValue />
								</Combobox.Item>
							</Combobox.Group>
							<Combobox.Separator />
							<Combobox.Item>
								Sit dolor enim eiusmod nulla nostrud officia in magna deserunt
								ut ex veniam cillum.
							</Combobox.Item>
						</Combobox.Content>
					</Combobox.Root>
				</Example>
				<CodeBlock.Root className="rounded-b-lg rounded-t-none">
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { Combobox } from "@ngrok/mantle/combobox";
								import { CirclesThreePlusIcon } from "@phosphor-icons/react/CirclesThreePlus";

								<Combobox.Root>
									<Combobox.Input />
									<Combobox.Content>
										<Combobox.Group>
											<Combobox.GroupLabel>
												Choose an ngrok subdomain
											</Combobox.GroupLabel>
											<Combobox.Item value="https://" disabled>
												<Combobox.ItemValue />
											</Combobox.Item>
											<Combobox.Item value="https://\${random}.ngrok.app">
												<CirclesThreePlusIcon
													weight="duotone"
													className="text-accent-600"
												/>
												<Combobox.ItemValue />
											</Combobox.Item>
											<Combobox.Item value="https://\${random}.ngrok.dev">
												<Combobox.ItemValue />
											</Combobox.Item>
											<Combobox.Item value="https://\${random}.ngrok.io">
												<Combobox.ItemValue />
											</Combobox.Item>
										</Combobox.Group>
										<Combobox.Separator />
										<Combobox.Item>
											Sit dolor enim eiusmod nulla nostrud officia in magna deserunt
											ut ex veniam cillum.
										</Combobox.Item>
									</Combobox.Content>
								</Combobox.Root>
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</div>
		</div>
	);
}
