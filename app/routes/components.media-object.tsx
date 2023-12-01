import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import { MediaObject, MediaObjectContent, MediaObjectMedia } from "@/media-object";
import type { MetaFunction } from "@vercel/remix";
import { Example } from "~/components/example";

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
			<p className="my-4 text-xl text-gray-600">
				The Media Object is an image/icon (media) to the left, with descriptive content (title and subtitle/description)
				to the right.
			</p>
			<div className="mt-8 space-y-4 text-gray-600">
				<p>
					Change the spacing between the media and content by passing a{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">gap-*</code>{" "}
					class. The default{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">gap</code> is{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">gap-4</code>.
				</p>
				<p>
					Use{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">flexbox</code>{" "}
					utilities to change the alignment of the media and content.
				</p>
				<p>
					Compose the{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
						&lt;MediaObject&gt;
					</code>{" "}
					with the{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
						&lt;MediaObjectMedia&gt;
					</code>{" "}
					and{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
						&lt;MediaObjectContent&gt;
					</code>{" "}
					components as direct children.
				</p>
			</div>

			<Example className="mt-4">
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
			</Example>
			<CodeBlock className="rounded-t-none rounded-b-lg">
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
