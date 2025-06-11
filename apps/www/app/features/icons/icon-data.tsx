import { SortIcon, TrafficPolicyFileIcon } from "@ngrok/mantle/icons";
import { AutoThemeIcon, ThemeIcon } from "@ngrok/mantle/icons";
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
		Icon: <SortIcon mode="time" direction="newest-to-oldest" />,
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
		Icon: <SortIcon mode="time" direction="oldest-to-newest" />,
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
		Icon: <SortIcon mode="alphanumeric" direction="asc" />,
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
		Icon: <SortIcon mode="alphanumeric" direction="desc" />,
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
		Icon: <TrafficPolicyFileIcon />,
		tags: [
			//,
			"file",
			"traffic policy",
		],
	},
	{
		id: "Auto-Theme-Icon",
		name: "AutoThemeIcon",
		description: (
			<p>An icon that automatically adapts to the current applied theme.</p>
		),
		Icon: <AutoThemeIcon />,
		tags: [
			//,
			"theme",
			"auto",
			"light",
			"dark",
			"light-high-contrast",
			"dark-high-contrast",
		],
	},
	{
		id: "Theme-Icon-System",
		name: "ThemeIcon",
		description: <p>An icon that adapts to a specific theme (system)</p>,
		Icon: <ThemeIcon theme="system" />,
		tags: [
			//,
			"theme",
			"system",
		],
	},
	{
		id: "Theme-Icon-Light",
		name: "ThemeIcon",
		description: <p>An icon that adapts to a specific theme (light)</p>,
		Icon: <ThemeIcon theme="light" />,
		tags: [
			//,
			"theme",
			"light",
		],
	},
	{
		id: "Theme-Icon-Dark",
		name: "ThemeIcon",
		description: <p>An icon that adapts to a specific theme (dark)</p>,
		Icon: <ThemeIcon theme="dark" />,
		tags: [
			//,
			"theme",
			"dark",
		],
	},
	{
		id: "Theme-Icon-Light-High-Contrast",
		name: "ThemeIcon",
		description: (
			<p>An icon that adapts to a specific theme (light-high-contrast)</p>
		),
		Icon: <ThemeIcon theme="light-high-contrast" />,
		tags: [
			//,
			"theme",
			"light-high-contrast",
		],
	},
	{
		id: "Theme-Icon-Dark-High-Contrast",
		name: "ThemeIcon",
		description: (
			<p>An icon that adapts to a specific theme (dark-high-contrast)</p>
		),
		Icon: <ThemeIcon theme="dark-high-contrast" />,
		tags: [
			//,
			"theme",
			"dark-high-contrast",
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
