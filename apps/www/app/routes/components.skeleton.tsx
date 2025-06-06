import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import {
	MediaObject,
	MediaObjectContent,
	MediaObjectMedia,
} from "@ngrok/mantle/media-object";
import { Skeleton } from "@ngrok/mantle/skeleton";
import { href } from "react-router";
import { Example } from "~/components/example";
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
	return [
		{ title: "@ngrok/mantle — Skeleton" },
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
				<PageHeader id="skeleton">Skeleton</PageHeader>
				<p className="font-body text-body mt-4 text-xl">
					Use to show a placeholder while content is loading. By using a{" "}
					<InlineCode>Skeleton</InlineCode>, you can give the user an idea of
					what the content will look like, reducing the perceived loading time
					and CLS (Cumulative Layout Shift).
				</p>
				<div>
					<Example>
						<Skeleton className="w-full" />
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Skeleton } from "@ngrok/mantle/skeleton";

									<Skeleton className="w-full" />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="examples" className="text-3xl font-medium">
						Examples
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="example-composition"
							className="text-xl font-medium text-strong"
						>
							Composition: Skeleton within a{" "}
							<Link to={href("/components/media-object")}>Media Object</Link>
						</h3>
						<p className="font-body text-body mt-1">
							The Skeleton component can be included within components. You can
							also pass Tailwind utility classes for further control.
						</p>
					</header>
					<div>
						<Example>
							<MediaObject className="w-full max-w-96 items-center">
								<MediaObjectMedia>
									<Skeleton className="h-12 w-12 rounded-full" />
								</MediaObjectMedia>
								<MediaObjectContent className="space-y-3">
									<Skeleton className="w-full" />
									<Skeleton className="w-4/5" />
								</MediaObjectContent>
							</MediaObject>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
									import { MediaObject, MediaObjectMedia, MediaObjectContent } from "@ngrok/mantle/media-object";
									import { Skeleton } from "@ngrok/mantle/skeleton";

									<MediaObject className="w-full max-w-96 items-center">
										<MediaObjectMedia>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObjectMedia>
										<MediaObjectContent className="space-y-3">
											<Skeleton className="w-full" />
											<Skeleton className="w-4/5" />
										</MediaObjectContent>
									</MediaObject>
								`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>Skeleton</InlineCode> accepts the following props in
					addition to the{" "}
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
								Use the <InlineCode>asChild</InlineCode> prop to compose the{" "}
								<InlineCode>Skeleton</InlineCode> styling and functionality onto
								alternative element types or your own React components.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
