import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Table } from "@ngrok/mantle/table";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/hooks";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Hooks" }];
};

export default function Page() {
	return (
		<div className="space-y-8">
			<div>
				<PageHeader id="hooks">Hooks</PageHeader>
				<p className="font-body text-body mt-4 text-xl">
					Custom React hooks exported from <Code>@ngrok/mantle/hooks</Code>.
				</p>
			</div>

			<section className="space-y-4">
				<HashLinkHeading id="overview" className="text-2xl font-medium">
					<h2>Overview</h2>
				</HashLinkHeading>
				<Table.Root>
					<Table.Element>
						<Table.Head>
							<Table.Row>
								<Table.Header>Hook</Table.Header>
								<Table.Header>Description</Table.Header>
							</Table.Row>
						</Table.Head>
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Code>useBreakpoint</Code>
								</Table.Cell>
								<Table.Cell>
									Returns the current responsive breakpoint based on the viewport width.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useIsBelowBreakpoint</Code>
								</Table.Cell>
								<Table.Cell>
									Returns <Code>true</Code> if the viewport width is below a given breakpoint.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useCallbackRef</Code>
								</Table.Cell>
								<Table.Cell>
									Returns a memoized callback that always refers to the latest function passed to
									it.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useCopyToClipboard</Code>
								</Table.Cell>
								<Table.Cell>Copies a string to the clipboard.</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useDebouncedCallback</Code>
								</Table.Cell>
								<Table.Cell>Creates a debounced version of a callback function.</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useIsHydrated</Code>
								</Table.Cell>
								<Table.Cell>
									Returns whether the component tree has been hydrated on the client.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useIsomorphicLayoutEffect</Code>
								</Table.Cell>
								<Table.Cell>
									Uses <Code>useLayoutEffect</Code> on the client and <Code>useEffect</Code> on the
									server.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useMatchesMediaQuery</Code>
								</Table.Cell>
								<Table.Cell>Subscribes to and returns the result of a CSS media query.</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>usePrefersReducedMotion</Code>
								</Table.Cell>
								<Table.Cell>
									Returns <Code>true</Code> when the user prefers reduced motion.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useRandomStableId</Code>
								</Table.Cell>
								<Table.Cell>
									Generates a random, stable ID safe for CSS selectors and element IDs.
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Code>useScrollBehavior</Code>
								</Table.Cell>
								<Table.Cell>
									Returns a <Code>ScrollBehavior</Code> that respects the user&#39;s reduced motion
									preference.
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Element>
				</Table.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usebreakpoint" className="text-2xl font-medium">
					<h2>useBreakpoint</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Returns the current responsive breakpoint based on the viewport width. Uses a singleton
					subscription to a set of min-width media queries and returns the largest matching
					breakpoint.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useBreakpoint } from "@ngrok/mantle/hooks";

								function ResponsiveComponent() {
									const breakpoint = useBreakpoint();
									return <p>Current breakpoint: {breakpoint}</p>;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="useisbelowbreakpoint" className="text-2xl font-medium">
					<h2>useIsBelowBreakpoint</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Returns <Code>true</Code> if the current viewport width is below the specified breakpoint.
					Accepts a <Code>TailwindBreakpoint</Code> (<Code>&quot;2xs&quot;</Code>,{" "}
					<Code>&quot;xs&quot;</Code>, <Code>&quot;sm&quot;</Code>, <Code>&quot;md&quot;</Code>,{" "}
					<Code>&quot;lg&quot;</Code>, <Code>&quot;xl&quot;</Code>, <Code>&quot;2xl&quot;</Code>).
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useIsBelowBreakpoint } from "@ngrok/mantle/hooks";

								function ResponsiveSidebar() {
									const isMobile = useIsBelowBreakpoint("md");
									return isMobile ? <MobileNav /> : <DesktopNav />;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usecallbackref" className="text-2xl font-medium">
					<h2>useCallbackRef</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Returns a memoized callback that always refers to the latest callback passed to the hook.
					Useful when passing a callback that may or may not be memoized to a child component
					without causing re-renders.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useCallbackRef } from "@ngrok/mantle/hooks";

								function Example({ onChange }: { onChange?: (value: string) => void }) {
									const stableOnChange = useCallbackRef(onChange);
									// stableOnChange always calls the latest onChange
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usecopytoclipboard" className="text-2xl font-medium">
					<h2>useCopyToClipboard</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Copies a string to the clipboard. Returns a tuple of the last copied value and a copy
					function. Includes a fallback for older browsers.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useCopyToClipboard } from "@ngrok/mantle/hooks";

								function CopyButton({ text }: { text: string }) {
									const [copiedValue, copy] = useCopyToClipboard();
									return (
										<button onClick={() => copy(text)}>
											{copiedValue === text ? "Copied!" : "Copy"}
										</button>
									);
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usedebouncedcallback" className="text-2xl font-medium">
					<h2>useDebouncedCallback</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Creates a debounced version of a callback function. Delays execution until a period of
					inactivity has passed (<Code>options.waitMs</Code>). The debounced callback is stable and
					safe to use in dependency arrays.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useDebouncedCallback } from "@ngrok/mantle/hooks";

								function SearchInput() {
									const debouncedSearch = useDebouncedCallback(
										(query: string) => fetchResults(query),
										{ waitMs: 300 },
									);
									return <input onChange={(event) => debouncedSearch(event.target.value)} />;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="useishydrated" className="text-2xl font-medium">
					<h2>useIsHydrated</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Returns whether the component tree has been hydrated on the client. Returns{" "}
					<Code>false</Code> on the server and <Code>true</Code> after hydration on the client. Uses{" "}
					<Code>useSyncExternalStore</Code> to prevent hydration mismatches.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useIsHydrated } from "@ngrok/mantle/hooks";
								import type { PropsWithChildren } from "react";

								function ClientOnly({ children }: PropsWithChildren) {
									const isHydrated = useIsHydrated();
									if (!isHydrated) {
										return <span style={{ visibility: "hidden" }}>Loading…</span>;
									}
									return <>{children}</>;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="useisomorphiclayouteffect" className="text-2xl font-medium">
					<h2>useIsomorphicLayoutEffect</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Uses <Code>useLayoutEffect</Code> on the client and <Code>useEffect</Code> on the server.
					Avoids SSR warnings about <Code>useLayoutEffect</Code> doing nothing on the server.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useIsomorphicLayoutEffect } from "@ngrok/mantle/hooks";

								function MeasureElement() {
									useIsomorphicLayoutEffect(() => {
										// safely measure DOM on client, no-op on server
									}, []);
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usematchesmediaquery" className="text-2xl font-medium">
					<h2>useMatchesMediaQuery</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Subscribes to and returns the result of a CSS media query string. Uses{" "}
					<Code>window.matchMedia</Code> and <Code>useSyncExternalStore</Code> for concurrent
					rendering compatibility.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useMatchesMediaQuery } from "@ngrok/mantle/hooks";

								function DarkModeDetector() {
									const isDark = useMatchesMediaQuery("(prefers-color-scheme: dark)");
									return <p>Dark mode: {isDark ? "Yes" : "No"}</p>;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="useprefersreducedmotion" className="text-2xl font-medium">
					<h2>usePrefersReducedMotion</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Returns <Code>true</Code> when the user has opted out of animations (i.e., prefers reduced
					motion). Defaults to <Code>true</Code> on the server to avoid animating before hydration.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { usePrefersReducedMotion } from "@ngrok/mantle/hooks";

								function AnimatedComponent() {
									const reduce = usePrefersReducedMotion();
									const duration = reduce ? 0 : 200;
									return <div style={{ transitionDuration: duration + "ms" }} />;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="userandomstableid" className="text-2xl font-medium">
					<h2>useRandomStableId</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Generates a random, stable ID. Similar to <Code>useId</Code>, but produces an ID that is
					safe for use in CSS selectors and as element IDs. Accepts an optional prefix (defaults to{" "}
					<Code>&quot;mantle&quot;</Code>).
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useRandomStableId } from "@ngrok/mantle/hooks";
								import type { PropsWithChildren } from "react";

								function Tooltip({ children }: PropsWithChildren) {
									const id = useRandomStableId("tooltip");
									return <div id={id}>{children}</div>;
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="usescrollbehavior" className="text-2xl font-medium">
					<h2>useScrollBehavior</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					Returns a <Code>ScrollBehavior</Code> (<Code>&quot;auto&quot;</Code> or{" "}
					<Code>&quot;smooth&quot;</Code>) that respects the user&#39;s reduced motion preference.
					Returns <Code>&quot;auto&quot;</Code> when the user prefers reduced motion, otherwise{" "}
					<Code>&quot;smooth&quot;</Code>.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { useScrollBehavior } from "@ngrok/mantle/hooks";

								function ScrollToTop() {
									const behavior = useScrollBehavior();
									return (
										<button onClick={() => window.scrollTo({ top: 0, behavior })}>
											Back to top
										</button>
									);
								}
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>
		</div>
	);
}
