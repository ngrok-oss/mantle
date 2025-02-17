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
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.media-object";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Media Object" },
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
		<div className="space-y-8">
			<header className="space-y-4">
				<PageHeader id="media-object">Media Object</PageHeader>
				<p className="font-body text-body my-4 text-xl">
					The Media Object is an image/icon (media) to the left, with
					descriptive content (title and subtitle/description) to the right.
				</p>
			</header>

			<section className="font-body text-body space-y-4">
				<p>
					Change the spacing between the media and content by passing a{" "}
					<InlineCode>gap-*</InlineCode> class. The default{" "}
					<InlineCode>gap</InlineCode> is <InlineCode>gap-4</InlineCode>.
				</p>
				<p>
					Use <InlineCode>flexbox</InlineCode> utilities to change the alignment
					of the media and content.
				</p>
				<p>
					Compose the <InlineCode>&lt;MediaObject&gt;</InlineCode> with the{" "}
					<InlineCode>&lt;MediaObjectMedia&gt;</InlineCode> and{" "}
					<InlineCode>&lt;MediaObjectContent&gt;</InlineCode> components as
					direct children.
				</p>

				<div>
					<Example>
						<MediaObject>
							<MediaObjectMedia>
								<ExampleMedia />
							</MediaObjectMedia>
							<MediaObjectContent>
								<h4 className="text-lg font-bold">Lorem ipsum</h4>
								<p className="mb-4 mt-1">
									Repudiandae sint consequuntur vel. Amet ut nobis explicabo
									numquam expedita quia omnis voluptatem. Minus quidem ipsam
									quia iusto.
								</p>
								<p>
									Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id
									adipisicing occaecat.
								</p>
							</MediaObjectContent>
						</MediaObject>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
							import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@ngrok/mantle/media-object";

							<MediaObject>
								<MediaObjectMedia>
									<ExampleMedia />
								</MediaObjectMedia>
								<MediaObjectContent>
									<h4 className="text-lg font-bold">Lorem ipsum</h4>
									<p className="mb-4 mt-1">
										Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
										quidem ipsam quia iusto.
									</p>
									<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
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

const ExampleMedia = () => (
	<svg
		className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
		preserveAspectRatio="none"
		stroke="currentColor"
		fill="none"
		viewBox="0 0 200 200"
		aria-hidden="true"
	>
		<path
			vectorEffect="non-scaling-stroke"
			strokeWidth={1}
			d="M0 0l200 200M0 200L200 0"
		/>
	</svg>
);
