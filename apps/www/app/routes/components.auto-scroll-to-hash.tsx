import { Anchor } from "@ngrok/mantle/anchor";
import { AutoScrollToHash } from "@ngrok/mantle/auto-scroll-to-hash";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
} from "~/components/props-table";
import type { Route } from "./+types/components.auto-scroll-to-hash";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — AutoScrollToHash" },
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
				<PageHeader id="auto-scroll-to-hash">AutoScrollToHash</PageHeader>
				<p className="font-body text-body my-4 text-xl">
					A context provider and hook that automatically scrolls to elements
					matching the URL hash.
				</p>
				<div className="font-body text-body space-y-4">
					<p>
						The <Code>AutoScrollToHash</Code> provider component automatically
						scrolls to the element identified by the current URL hash (e.g.,{" "}
						<Code>#subscription</Code>). It wraps your app and provides a
						context that enables the <Code>useAutoScrollToHash</Code> hook to
						programmatically trigger scrolling.
					</p>
					<p>
						The scroll behavior respects user motion preferences, using smooth
						scrolling by default but switching to instant scrolling for users
						who prefer reduced motion.
					</p>

					<div>
						<Example>
							<div className="space-y-4">
								<p>
									Wrap your app with the provider (typically in your root
									layout):
								</p>
								<div className="space-y-2">
									<div
										id="section-1"
										className="rounded border border-gray-300 p-4"
									>
										<h3 className="font-bold">Section 1</h3>
										<p>This section can be linked with #section-1</p>
									</div>
									<div
										id="section-2"
										className="rounded border border-gray-300 p-4"
									>
										<h3 className="font-bold">Section 2</h3>
										<p>This section can be linked with #section-2</p>
									</div>
									<div
										id="section-3"
										className="rounded border border-gray-300 p-4"
									>
										<h3 className="font-bold">Section 3</h3>
										<p>This section can be linked with #section-3</p>
									</div>
								</div>
								<AutoScrollToHash />
							</div>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { AutoScrollToHash } from "@ngrok/mantle/auto-scroll-to-hash";

										function App() {
											return (
												<Router>
													<AutoScrollToHash>
														{/* Your page content */}
													</AutoScrollToHash>
												</Router>
											);
										}
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>

					<div className="space-y-4">
						<p>
							Use the hook to programmatically trigger scrolling after
							asynchronous content loads:
						</p>
						<CodeBlock.Root>
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										import { useAutoScrollToHash } from "@ngrok/mantle/auto-scroll-to-hash";

										function DetailsTab({ ready }: { ready: boolean }) {
											const reScroll = useAutoScrollToHash();

											useEffect(() => {
												if (ready) {
													reScroll();
												}
											}, [ready, reScroll]);

											return <div id="subscription">...</div>;
										}
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<HashLinkHeading id="api">
						<h2 className="text-3xl font-medium text-strong">API Reference</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-auto-scroll-to-hash">
							<h3 className="text-xl font-medium text-strong">
								AutoScrollToHash
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A context provider component that automatically scrolls to the
							element matching the current URL hash. Must wrap your application
							to enable the <Code>useAutoScrollToHash</Code> hook.
						</p>

						<p>This component accepts a single prop:</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="children" />
							<PropTypeCell>
								<Code>ReactNode</Code>
							</PropTypeCell>
							<PropDefaultValueCell>—</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>The app content to wrap with the auto-scroll context.</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-use-auto-scroll-to-hash">
							<h3 className="text-xl font-medium text-strong">
								useAutoScrollToHash
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							A hook that returns a stable callback for programmatically
							triggering the hash-based scroll. Use this when the target element
							is rendered asynchronously (e.g., after lazy-loading, tab
							switching, or fetching data). Must be used within an{" "}
							<Code>AutoScrollToHash</Code> provider.
						</p>
					</header>

					<p className="font-body text-body">
						<strong>Returns:</strong> A stable <Code>() =&gt; void</Code>{" "}
						function that scrolls the hash target into view if present.
					</p>

					<p className="font-body text-body">
						<strong>Throws:</strong> An error if used outside an{" "}
						<Code>AutoScrollToHash</Code> provider.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="behavior">
							<h3 className="text-xl font-medium text-strong">Behavior</h3>
						</HashLinkHeading>
					</header>

					<ul className="list-disc space-y-2 pl-6">
						<li>Runs on mount and whenever the URL hash changes</li>
						<li>
							Schedules scrolling in <Code>requestAnimationFrame</Code> to
							ensure the target element exists after DOM updates
						</li>
						<li>
							Respects user motion preferences (uses <Code>"auto"</Code> scroll
							behavior when reduced motion is enabled, <Code>"smooth"</Code>{" "}
							otherwise)
						</li>
						<li>
							Safe for SSR via <Code>useIsomorphicLayoutEffect</Code>
						</li>
						<li>Attempts both raw and URL-decoded hash IDs for robustness</li>
					</ul>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="notes">
							<h3 className="text-xl font-medium text-strong">Notes</h3>
						</HashLinkHeading>
					</header>

					<p>
						<strong>Dependencies:</strong> This component and hook require{" "}
						<Code>react-router</Code> as a peer dependency. Make sure to install
						it in your project.
					</p>

					<p>
						If your content is loaded asynchronously and may not exist by the
						next animation frame, consider enhancing the hook with a short retry
						loop or a <Code>MutationObserver</Code>.
					</p>

					<p>
						See{" "}
						<Anchor
							href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView"
							target="_blank"
							rel="noopener noreferrer"
						>
							scrollIntoView
						</Anchor>{" "}
						for more information about the underlying scroll API.
					</p>
				</section>
			</section>
		</div>
	);
}
