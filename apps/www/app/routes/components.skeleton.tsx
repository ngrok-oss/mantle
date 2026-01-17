import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { MediaObject } from "@ngrok/mantle/media-object";
import { Skeleton } from "@ngrok/mantle/skeleton";
import { href } from "react-router";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { Link } from "~/components/link";
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
import type { Route } from "./+types/components.skeleton";

export const meta: Route.MetaFunction = () => {
	return [{ title: "@ngrok/mantle — Skeleton" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="skeleton">Skeleton</PageHeader>
				<p className="font-body text-body mt-4 text-xl">
					Use to show a placeholder while content is loading. By using a <Code>Skeleton</Code>, you
					can give the user an idea of what the content will look like, reducing the perceived
					loading time and CLS (Cumulative Layout Shift).
				</p>
				<div>
					<Example>
						<Skeleton className="w-full" />
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Skeleton } from "@ngrok/mantle/skeleton";

									<Skeleton className="w-full" />
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<HashLinkHeading id="examples">
						<h2 className="text-3xl font-medium">Examples</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="example-composition">
							<h3 className="text-xl font-medium text-strong">
								Composition: Skeleton within a{" "}
								<Link to={href("/components/media-object")}>Media Object</Link>
							</h3>
						</HashLinkHeading>
						<p className="font-body text-body mt-1">
							The Skeleton component can be included within components. You can also pass Tailwind
							utility classes for further control.
						</p>
					</header>
					<div>
						<Example>
							<MediaObject.Root className="w-full max-w-96 items-center">
								<MediaObject.Media>
									<Skeleton className="h-12 w-12 rounded-full" />
								</MediaObject.Media>
								<MediaObject.Content className="space-y-3">
									<Skeleton className="w-full" />
									<Skeleton className="w-4/5" />
								</MediaObject.Content>
							</MediaObject.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
									import { MediaObject } from "@ngrok/mantle/media-object";
									import { Skeleton } from "@ngrok/mantle/skeleton";

									<MediaObject.Root className="w-full max-w-96 items-center">
										<MediaObject.Media>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObject.Media>
										<MediaObject.Content className="space-y-3">
											<Skeleton className="w-full" />
											<Skeleton className="w-4/5" />
										</MediaObject.Content>
									</MediaObject.Root>
								`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api">
					<h2 className="text-3xl font-medium">API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Skeleton</Code> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
						standard HTML div attributes
					</Anchor>
					.
				</p>
				<PropsTable>
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
								Use the <Code>asChild</Code> prop to compose the <Code>Skeleton</Code> styling and
								functionality onto alternative element types or your own React components.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
