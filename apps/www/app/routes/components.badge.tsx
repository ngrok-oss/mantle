import { Anchor } from "@ngrok/mantle/anchor";
import { Badge } from "@ngrok/mantle/badge";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { colors } from "@ngrok/mantle/color";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/GlobeHemisphereWest";
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
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.badge";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Badge" },
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
				<PageHeader id="badge">Badge</PageHeader>
				<p className="font-body text-body text-xl">
					A Badge is a non-interactive component used to highlight important
					information or to visually indicate the status of an item.
				</p>
				<div>
					<Example>
						<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
							{colors.map((color) => (
								<li key={color} className="flex flex-col gap-2">
									<Badge appearance="muted" color={color}>
										Muted {color}
									</Badge>
									<Badge
										appearance="muted"
										color={color}
										icon={<GlobeHemisphereWestIcon />}
									>
										Muted {color}
									</Badge>
								</li>
							))}
						</ul>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Badge } from "@ngrok/mantle/badge";
									import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/GlobeHemisphereWest";

									<Badge appearance="muted" color="neutral">
										Muted neutral
									</Badge>
									<Badge appearance="muted" color="neutral" icon={<GlobeHemisphereWestIcon />}>
										Muted neutral
									</Badge>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="font-body text-body text-xl">
					When you want to render <span className="italic">something else</span>{" "}
					as a <InlineCode>Badge</InlineCode>, you can use the{" "}
					<InlineCode>asChild</InlineCode> prop to compose. This is useful when
					you want to splat the <InlineCode>Badge</InlineCode> styling onto a{" "}
					<InlineCode>react-router</InlineCode> <InlineCode>Link</InlineCode>.
				</p>
				<div>
					<Example>
						<Badge
							appearance="muted"
							asChild
							color="pink"
							icon={<GlobeHemisphereWestIcon />}
						>
							<Link to={href("/base/colors")}>See our colors!</Link>
						</Badge>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Badge } from "@ngrok/mantle/badge";
									import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/GlobeHemisphereWest";
									import { Link, href } from "react-router";

									<Badge appearance="muted" asChild color="pink" icon={<GlobeHemisphereWestIcon />}>
										<Link to={href("/base/colors")}>See our colors!</Link>
									</Badge>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>Badge</InlineCode> accepts the following props in
					addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span">
						standard HTML span attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="appearance" />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="muted" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							<p>
								Defines the visual style of the <InlineCode>Badge</InlineCode>.
								Currently only supports the <InlineCode>muted</InlineCode>{" "}
								variant.
							</p>
						</PropDescriptionCell>
					</PropRow>
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
								<InlineCode>Badge</InlineCode> styling and functionality onto
								alternative element types or your own React components.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="color" optional />
						<PropTypeCell>
							<ul>
								{colors.map((color) => (
									<li key={color}>
										<StringPropType value={color} />
									</li>
								))}
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="neutral" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								The color variant of the <InlineCode>Badge</InlineCode>.
								Supports all <Link to={href("/base/colors")}>named colors</Link>
								, both functional and from the color palette.
							</p>
						</PropDescriptionCell>
					</PropRow>
					<PropRow>
						<PropNameCell name="icon" optional />
						<PropTypeCell>
							<ReactNodePropType />
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell>
							An icon to render inside the badge. Will be automatically sized
							for you.
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
