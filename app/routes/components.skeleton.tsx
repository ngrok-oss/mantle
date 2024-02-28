import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@/media-object";
import { Skeleton } from "@/skeleton";
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
		<div>
			<h1 className="text-5xl font-medium">Skeleton</h1>
			<p className="mt-4 text-xl text-default">
				Use to show a placeholder while content is loading. By using a <InlineCode>Skeleton</InlineCode>, you can give
				the user an idea of what the content will look like, reducing the perceived loading time and CLS (Cumulative
				Layout Shift).
			</p>
			<Example className="mt-4">
				<Skeleton className="w-full" />
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">{code`
						import { Skeleton } from "@ngrok/mantle";

						<Skeleton className="w-full" />
					`}</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>

			<section>
				<h3 className="mt-8 text-xl font-medium">
					Skeleton <Link to="/components/media-object">Media Object</Link>
				</h3>
				<p className="mt-1 text-default">
					The Skeleton component can be included within components. You can also pass Tailwind utility classes for
					further control.
				</p>
				<Example className="mt-4">
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
						<CodeBlockCode language="tsx">
							{code`
									import { MediaObject, MediaObjectMedia, MediaObjectContent, Skeleton } from "@ngrok/mantle";

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
						</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</section>
		</div>
	);
}
