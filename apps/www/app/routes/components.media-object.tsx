import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { MediaObject } from "@ngrok/mantle/media-object";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
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
	return [{ title: "@ngrok/mantle — Media Object" }];
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
						<Code>gap-*</Code> class. The default <Code>gap</Code> is{" "}
						<Code>gap-4</Code>.
					</p>
					<p>
						Use <Code>flexbox</Code> utilities to change the alignment of the
						media and content.
					</p>
					<p>
						Compose the <Code>&lt;MediaObject&gt;</Code> with the{" "}
						<Code>&lt;MediaObject.Media&gt;</Code> and{" "}
						<Code>&lt;MediaObject.Content&gt;</Code> components as direct
						children.
					</p>

					<div>
						<Example>
							<MediaObject.Root>
								<MediaObject.Media>
									<ExampleMedia />
								</MediaObject.Media>
								<MediaObject.Content>
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

										<MediaObject.Root>
											<MediaObject.Media>
												<ExampleMedia />
											</MediaObject.Media>
											<MediaObject.Content>
												<h4 className="text-lg font-bold">Lorem ipsum</h4>
												<p className="mb-4 mt-1">
													Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
													quidem ipsam quia iusto.
												</p>
												<p>Ea eiusmod eiusmod aute reprehenderit exercitation eu ea id adipisicing occaecat.</p>
											</MediaObject.Content>
										</MediaObject.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<HashLinkHeading id="api">
						<h2 className="text-3xl font-medium text-strong">API Reference</h2>
					</HashLinkHeading>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-media-object">
							<h3 className="text-xl font-medium text-strong">
								<span id="api-media-object-root" />
								MediaObject.Root
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The <Code>MediaObject</Code> is an image/icon (media) to the left,
							with descriptive content (title and subtitle/description) to the
							right. Root container for all <Code>MediaObject.Root</Code>{" "}
							sub-components.
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
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>MediaObject</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-media-object-media">
							<h3 className="text-xl font-medium text-strong">
								MediaObject.Media
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The container for an image or icon to display in the media slot of
							the <Code>MediaObject</Code>.
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
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>MediaObject.Media</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading id="api-media-object-content">
							<h3 className="text-xl font-medium text-strong">
								MediaObject.Content
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							The container for the content slot of a <Code>MediaObject</Code>
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
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>MediaObject.Content</Code> styling and functionality
									onto alternative element types or your own React components.
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
