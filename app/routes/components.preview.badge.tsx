import { Badge } from "@/badge";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
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
					<Example className="mt-4 flex-row flex-wrap gap-4">
						<div className="flex flex-col items-center gap-2">
							<Badge appearance="muted" color="neutral">
								Muted Neutral
							</Badge>
							<Badge appearance="muted" color="neutral" icon={<GlobeHemisphereWest />}>
								Muted Neutral
							</Badge>
							<Badge appearance="strong" color="neutral">
								Strong Neutral
							</Badge>
							<Badge appearance="strong" color="neutral" icon={<GlobeHemisphereWest />}>
								Strong Neutral
							</Badge>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Badge appearance="muted" color="accent">
								Muted Accent
							</Badge>
							<Badge appearance="muted" color="accent" icon={<GlobeHemisphereWest />}>
								Muted Accent
							</Badge>
							<Badge appearance="strong" color="accent">
								Strong Accent
							</Badge>
							<Badge appearance="strong" color="accent" icon={<GlobeHemisphereWest />}>
								Strong Accent
							</Badge>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Badge appearance="muted" color="danger">
								Muted Danger
							</Badge>
							<Badge appearance="muted" color="danger" icon={<GlobeHemisphereWest />}>
								Muted Danger
							</Badge>
							<Badge appearance="strong" color="danger">
								Strong Danger
							</Badge>
							<Badge appearance="strong" color="danger" icon={<GlobeHemisphereWest />}>
								Strong Danger
							</Badge>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Badge appearance="muted" color="warning">
								Muted Warning
							</Badge>
							<Badge appearance="muted" color="warning" icon={<GlobeHemisphereWest />}>
								Muted Warning
							</Badge>
							<Badge appearance="strong" color="warning">
								Strong Warning
							</Badge>
							<Badge appearance="strong" color="warning" icon={<GlobeHemisphereWest />}>
								Strong Warning
							</Badge>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Badge appearance="muted" color="success">
								Muted Success
							</Badge>
							<Badge appearance="muted" color="success" icon={<GlobeHemisphereWest />}>
								Muted Success
							</Badge>
							<Badge appearance="strong" color="success">
								Strong Success
							</Badge>
							<Badge appearance="strong" color="success" icon={<GlobeHemisphereWest />}>
								Strong Success
							</Badge>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									// TODO(cody): fixme
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
