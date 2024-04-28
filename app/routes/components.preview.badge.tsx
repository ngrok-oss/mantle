import { Badge } from "@/badge";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { colors } from "@/color";
import { InlineCode } from "@/inline-code";
import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { PreviewBadge } from "~/components/preview-badge";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Badge" },
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
			<section className="mb-4 space-y-4">
				<div className="flex items-center gap-3">
					<h1 className="text-5xl font-medium">Badge</h1>
					<PreviewBadge />
				</div>
				<p className="mt-4 text-xl text-body">
					A Badge is used to highlight important information or to visually indicate the status of an item.
				</p>
				<div>
					<Example>
						<ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
							{colors.map((color) => (
								<li key={color} className="flex flex-col items-center gap-2">
									<Badge appearance="muted" color={color}>
										Muted {color}
									</Badge>
									<Badge appearance="muted" color={color} icon={<GlobeHemisphereWest />}>
										Muted {color}
									</Badge>
								</li>
							))}
						</ul>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Badge } from "@ngrok/mantle/badge";
									import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";

									<Badge appearance="muted" color="neutral">
										Muted neutral
									</Badge>
									<Badge appearance="muted" color="neutral" icon={<GlobeHemisphereWest />}>
										Muted neutral
									</Badge>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference TODO(cody): fixme (copypasta from Alert)
				</h2>
				<PropsTable>
					<PropRow>
						<PropNameCell name="priority" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="danger" />
								</li>
								<li>
									<StringPropType value="default" />
								</li>
								<li>
									<StringPropType value="info" />
								</li>
								<li>
									<StringPropType value="success" />
								</li>
								<li>
									<StringPropType value="warning" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="outlined" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Indicates the importance or impact level of the <InlineCode>Alert</InlineCode>, affecting its color and
								styling to communicate its purpose to the user.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}
