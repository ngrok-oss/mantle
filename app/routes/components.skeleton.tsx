import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@/media-object";
import { Skeleton } from "@/skeleton";
import type { MetaFunction } from "@vercel/remix";
import { Link } from "~/components/link";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Skeleton" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Skeleton</h1>
			<h2 className="my-4 text-xl text-gray-600">Use to show a placeholder while content is loading.</h2>
			<div className="my-4 rounded-lg border border-gray-300 bg-background">
				<div className="flex items-center justify-center p-4 md:p-9 border-b border-gray-300">
					<Skeleton className="h-4 w-full" />
				</div>
				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">{code`<Skeleton className="h-4 w-full" />`}</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>

			<section>
				<h3 className="mt-8 text-xl font-medium">
					Skeleton <Link to="/components/media-object">Media Object</Link>
				</h3>
				<p className="mt-1 text-gray-600">
					The Skeleton component can be included within components. You can also pass Tailwind utility classes for
					further control.
				</p>
				<div className="mt-4 rounded-lg border border-gray-300 bg-background">
					<div className="flex items-center justify-center p-4 md:p-9 border-b border-gray-300">
						<MediaObject>
							<MediaObjectMedia>
								<Skeleton className="h-12 w-12 rounded-full" />
							</MediaObjectMedia>
							<MediaObjectContent className="space-y-3">
								<Skeleton className="h-4 w-[250px]" />
								<Skeleton className="h-4 w-[200px]" />
							</MediaObjectContent>
						</MediaObject>
					</div>
					<CodeBlock className="border-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									<MediaObject>
										<MediaObjectMedia>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObjectMedia>
										<MediaObjectContent className="space-y-3">
											<Skeleton className="h-4 w-[250px]" />
											<Skeleton className="h-4 w-[200px]" />
										</MediaObjectContent>
									</MediaObject>
								`}
							</CodeBlockCode>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
		</div>
	);
}
