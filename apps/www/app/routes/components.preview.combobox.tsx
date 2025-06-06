import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import {
	Combobox,
	ComboboxContent,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemValue,
	ComboboxSeparator,
} from "@ngrok/mantle/combobox";
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
					<Combobox>
						<ComboboxInput />
						<ComboboxContent>
							<ComboboxGroup>
								<ComboboxGroupLabel>
									Choose an ngrok subdomain
								</ComboboxGroupLabel>
								<ComboboxItem value="https://" disabled>
									<ComboboxItemValue />
								</ComboboxItem>
								<ComboboxItem value="https://${random}.ngrok.app">
									<CirclesThreePlusIcon
										weight="duotone"
										className="text-accent-600"
									/>
									<ComboboxItemValue />
								</ComboboxItem>
								<ComboboxItem value="https://${random}.ngrok.dev">
									<ComboboxItemValue />
								</ComboboxItem>
								<ComboboxItem value="https://${random}.ngrok.io">
									<ComboboxItemValue />
								</ComboboxItem>
							</ComboboxGroup>
							<ComboboxSeparator />
							<ComboboxItem>
								Sit dolor enim eiusmod nulla nostrud officia in magna deserunt
								ut ex veniam cillum.
							</ComboboxItem>
						</ComboboxContent>
					</Combobox>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
								import {
									Combobox,
									ComboboxContent,
									ComboboxGroup,
									ComboboxGroupLabel,
									ComboboxInput,
									ComboboxItem,
									ComboboxItemValue,
									ComboboxSeparator,
								} from "@ngrok/mantle/combobox";
								import { CirclesThreePlusIcon } from "@phosphor-icons/react/CirclesThreePlus";

								<Combobox>
									<ComboboxInput />
									<ComboboxContent>
										<ComboboxGroup>
											<ComboboxGroupLabel>
												Choose an ngrok subdomain
											</ComboboxGroupLabel>
											<ComboboxItem value="https://" disabled>
												<ComboboxItemValue />
											</ComboboxItem>
											<ComboboxItem value="https://\${random}.ngrok.app">
												<CirclesThreePlusIcon
													weight="duotone"
													className="text-accent-600"
												/>
												<ComboboxItemValue />
											</ComboboxItem>
											<ComboboxItem value="https://\${random}.ngrok.dev">
												<ComboboxItemValue />
											</ComboboxItem>
											<ComboboxItem value="https://\${random}.ngrok.io">
												<ComboboxItemValue />
											</ComboboxItem>
										</ComboboxGroup>
										<ComboboxSeparator />
										<ComboboxItem>
											Sit dolor enim eiusmod nulla nostrud officia in magna deserunt
											ut ex veniam cillum.
										</ComboboxItem>
									</ComboboxContent>
								</Combobox>
							`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}
