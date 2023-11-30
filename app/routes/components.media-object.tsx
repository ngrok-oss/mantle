import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@/media-object";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Media Object" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Media Object</h1>
			<h2 className="my-4 text-xl text-gray-600">
				The Media Object is an image/icon (media) to the left, with descriptive content (title and subtitle/description)
				to the right.
			</h2>
			<div className="space-y-4">
				<p>
					Change the spacing between the media and content by passing a <code>gap-*</code> class. The default{" "}
					<code>gap</code> is <code>gap-4</code>.
				</p>
				<p>
					Use <code>flexbox</code> utilities to change the alignment of the media and content.
				</p>
				<p>
					Compose the <code>&lt;MediaObject&gt;</code> with the <code>&lt;MediaObjectMedia&gt;</code> and{" "}
					<code>&lt;MediaObjectContent&gt;</code> components as direct children.
				</p>
			</div>

			<div className="my-4 rounded-lg border border-gray-300 bg-background">
				<div className="flex items-center justify-center p-4 md:p-9 border-b">
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
				</div>
				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">
							{code`
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
						</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>
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
		<path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
	</svg>
);