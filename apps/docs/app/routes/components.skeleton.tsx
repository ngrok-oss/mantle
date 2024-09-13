import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@ngrok/mantle/media-object";
import { Skeleton } from "@ngrok/mantle/skeleton";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { Link } from "~/components/link";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Skeleton" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<h1 className="text-5xl font-medium">Skeleton</h1>
				<p className="mt-4 font-body text-xl text-body">
					Use to show a placeholder while content is loading. By using a <InlineCode>Skeleton</InlineCode>, you can give
					the user an idea of what the content will look like, reducing the perceived loading time and CLS (Cumulative
					Layout Shift).
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

			<section className="space-y-4">
				<header className="space-y-1">
					<h3 className="text-xl font-medium">
						Skeleton <Link to="/components/media-object">Media Object</Link>
					</h3>
					<p className="mt-1 font-body text-body">
						The Skeleton component can be included within components. You can also pass Tailwind utility classes for
						further control.
					</p>
				</header>
				<div>
					<Example>
						<MediaObject>
							<MediaObjectMedia>
								<Skeleton className="h-12 w-12 rounded-full" />
							</MediaObjectMedia>
							<MediaObjectContent className="space-y-3">
								<Skeleton className="w-[250px]" />
								<Skeleton className="w-[200px]" />
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
									import { Skeleton } from "@ngrok/skeleton";

									<MediaObject>
										<MediaObjectMedia>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObjectMedia>
										<MediaObjectContent className="space-y-3">
											<Skeleton className="w-[250px]" />
											<Skeleton className="w-[200px]" />
										</MediaObjectContent>
									</MediaObject>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
		</div>
	);
}
