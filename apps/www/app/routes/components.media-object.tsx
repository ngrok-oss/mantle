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
import { Example } from "~/components/example";
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
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="media-object">Media Object</PageHeader>
				<p className="font-body text-body my-4 text-xl">
					The Media Object is an image/icon (media) to the left, with
					descriptive content (title and subtitle/description) to the right.
				</p>
				<div className="font-body text-body space-y-4">
					<p>
						Change the spacing between the media and content by passing a{" "}
						<InlineCode>gap-*</InlineCode> class. The default{" "}
						<InlineCode>gap</InlineCode> is <InlineCode>gap-4</InlineCode>.
					</p>
					<p>
						Use <InlineCode>flexbox</InlineCode> utilities to change the
						alignment of the media and content.
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
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium text-strong">
						API Reference
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-media-object"
							className="text-xl font-medium text-strong"
						>
							MediaObject
						</h3>

						<p className="font-body text-body">
							The <InlineCode>MediaObject</InlineCode> is an image/icon (media)
							to the left, with descriptive content (title and
							subtitle/description) to the right. Root container for all{" "}
							<InlineCode>MediaObject</InlineCode> sub-components.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

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
									<InlineCode>MeidaObject</InlineCode> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-media-object-media"
							className="text-xl font-medium text-strong"
						>
							MediaObjectMedia
						</h3>

						<p className="font-body text-body">
							The container for an image or icon to display in the media slot of
							the <InlineCode>MediaObject</InlineCode>.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

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
									<InlineCode>MeidaObjectMedia</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-media-object-content"
							className="text-xl font-medium text-strong"
						>
							MediaObjectContent
						</h3>

						<p className="font-body text-body">
							The container for the content slot of a{" "}
							<InlineCode>MediaObject</InlineCode>
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

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
									<InlineCode>MeidaObjectContent</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
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
