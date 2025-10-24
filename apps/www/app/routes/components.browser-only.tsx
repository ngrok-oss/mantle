import { BrowserOnly } from "@ngrok/mantle/browser-only";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	ReactNodePropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.browser-only";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — BrowserOnly" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="browser-only">BrowserOnly</PageHeader>
				<p className="font-body text-body text-xl">
					A wrapper component that ensures its children only render in the
					browser, after hydration has completed.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<BrowserOnly
							fallback={
								<div className="h-8 w-32 bg-gray-200 animate-pulse rounded" />
							}
						>
							{() => <p>This only renders in the browser after hydration!</p>}
						</BrowserOnly>
						<BrowserOnly
							fallback={
								<div className="h-20 bg-gray-100 rounded p-4">Loading...</div>
							}
						>
							{() => (
								<div className="p-4 border rounded">
									<p>Browser-only content with window dimensions:</p>
									<p>Width: {window.innerWidth}px</p>
									<p>Height: {window.innerHeight}px</p>
								</div>
							)}
						</BrowserOnly>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
								import { BrowserOnly } from "@ngrok/mantle/browser-only";

								<BrowserOnly fallback={<div className="h-8 w-32 bg-gray-200 animate-pulse rounded" />}>
									{() => <p>This only renders in the browser after hydration!</p>}
								</BrowserOnly>

								<BrowserOnly fallback={<div className="h-20 bg-gray-100 rounded p-4">Loading...</div>}>
									{() => (
										<div className="p-4 border rounded">
											<p>Browser-only content with window dimensions:</p>
											<p>Width: {window.innerWidth}px</p>
											<p>Height: {window.innerHeight}px</p>
										</div>
									)}
								</BrowserOnly>
							`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<HashLinkHeading
						id="api"
						className="text-3xl font-medium text-strong"
					>
						<h2>API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>BrowserOnly</Code> component ensures its children only
						render in the browser, after hydration has completed. This is useful
						for components that rely on browser-only APIs.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-browser-only"
							className="text-xl font-medium text-strong"
						>
							<h3>BrowserOnly</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A wrapper component that ensures its children only render in the
							browser, after hydration has completed. Useful for components that
							rely on browser-only APIs like <Code>window</Code>,{" "}
							<Code>document</Code>, <Code>localStorage</Code>, or media
							queries.
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" />
							<PropTypeCell>
								<FuncPropType value="() => ReactNode" />
							</PropTypeCell>
							<PropDefaultValueCell>—</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Children must be a render function so that evaluation is
									deferred until after hydration has occurred.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="fallback" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<Code>null</Code>
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Optional fallback to render on the server (and during
									hydration) before the client-only children are mounted.
									Ideally, this should be the same dimensions as the eventual
									children to avoid layout shift.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}
