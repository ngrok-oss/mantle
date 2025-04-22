import { Sort, TrafficPolicyFile } from "@ngrok/mantle/icons";
import { InlineCode } from "@ngrok/mantle/inline-code";
import type { ReactNode } from "react";

type IconData = {
	id: string;
	name: string;
	description: ReactNode;
	Icon: ReactNode;
	tags: string[];
};

const iconData = [
	{
		id: "Sort-time-newest-to-oldest",
		name: "Sort",
		description: (
			<div className="text-center space-y-1">
				<p>
					<InlineCode>mode="time"</InlineCode>
				</p>
				<p>
					<InlineCode>direction="newest-to-oldest"</InlineCode>
				</p>
			</div>
		),
		Icon: <Sort mode="time" direction="newest-to-oldest" />,
		tags: [
			//,
			"desc",
			"descending",
			"list",
			"newest-to-oldest",
			"sorting",
			"table",
			"time",
		],
	},
	{
		id: "Sort-time-oldest-to-newest",
		name: "Sort",
		description: (
			<div className="text-center space-y-1">
				<p>
					<InlineCode>mode="time"</InlineCode>
				</p>
				<p>
					<InlineCode>direction="oldest-to-newest"</InlineCode>
				</p>
			</div>
		),
		Icon: <Sort mode="time" direction="oldest-to-newest" />,
		tags: [
			//,
			"asc",
			"ascending",
			"list",
			"oldest-to-newest",
			"sorting",
			"table",
			"time",
		],
	},
	{
		id: "Sort-alphanumeric-asc",
		name: "Sort",
		description: (
			<div className="text-center space-y-1">
				<p>
					<InlineCode>mode="alphanumeric"</InlineCode>
				</p>
				<p>
					<InlineCode>direction="asc"</InlineCode>
				</p>
			</div>
		),
		Icon: <Sort mode="alphanumeric" direction="asc" />,
		tags: [
			//,
			"alphanumeric",
			"asc",
			"ascending",
			"list",
			"sorting",
			"table",
		],
	},
	{
		id: "Sort-alphanumeric-desc",
		name: "Sort",
		description: (
			<div className="text-center space-y-1">
				<p>
					<InlineCode>mode="alphanumeric"</InlineCode>
				</p>
				<p>
					<InlineCode>direction="desc"</InlineCode>
				</p>
			</div>
		),
		Icon: <Sort mode="alphanumeric" direction="desc" />,
		tags: [
			//,
			"alphanumeric",
			"desc",
			"descending",
			"list",
			"sorting",
			"table",
		],
	},
	{
		id: "TrafficPolicyFile",
		name: "TrafficPolicyFile",
		description: (
			<p className="text-muted">The ngrok traffic policy file icon</p>
		),
		Icon: <TrafficPolicyFile />,
		tags: [
			//,
			"file",
			"traffic policy",
		],
	},
] as const satisfies IconData[];

export {
	//,
	iconData,
};

export type {
	//,
	IconData,
};
