import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const statusIndicatorLevels = ["none", "minor", "major", "critical"] as const;

type StatusIndicatorLevel = (typeof statusIndicatorLevels)[number];

/**
 * Statuspage API response schema
 * @see https://developer.statuspage.io/#operation/getPagesPageIdStatus
 */
const statusPageStatusSchema = z.object({
	page: z.object({
		id: z.string(),
		name: z.string(),
		url: z.string(),
		updated_at: z.string(),
	}),
	status: z.object({
		indicator: z.enum(statusIndicatorLevels),
		description: z.string(),
	}),
});

type StatusPageStatus = z.infer<typeof statusPageStatusSchema>;

type StatusIndicator = {
	/** The severity level of the current status */
	indicator: StatusIndicatorLevel;
	/** Human-readable description of the status */
	description: string;
	/** Tailwind text color class */
	color: string;
	/** Tailwind background color class */
	bgColor: string;
	/** Tailwind hover text color class */
	hoverColor: string;
	/** Whether to show the pulsing animation */
	animatePulse?: boolean;
};

const STATUS_CONFIGS: Record<StatusIndicatorLevel, Omit<StatusIndicator, "indicator">> = {
	none: {
		animatePulse: true,
		bgColor: "bg-emerald-600",
		color: "text-emerald-600",
		description: "All systems operational",
		hoverColor: "hover:text-emerald-700",
	},
	minor: {
		bgColor: "bg-yellow-600",
		color: "text-yellow-600",
		description: "Minor service issues",
		hoverColor: "hover:text-yellow-700",
	},
	major: {
		bgColor: "bg-orange-600",
		color: "text-orange-600",
		description: "Major service disruption",
		hoverColor: "hover:text-orange-700",
	},
	critical: {
		bgColor: "bg-danger-600",
		color: "text-danger-600",
		description: "Service outage",
		hoverColor: "hover:text-danger-700",
	},
};

function getConfigForStatusIndicatorLevel(level: StatusIndicatorLevel) {
	return STATUS_CONFIGS[level];
}

/** @see https://status.ngrok.com/api/v2/status.json */
async function fetchStatusPageStatus() {
	const response = await fetch("https://status.ngrok.com/api/v2/status.json");

	if (!response.ok) {
		throw new Error(`Failed to fetch status: ${response.statusText}`);
	}

	const data = await response.json();

	return statusPageStatusSchema.parse(data);
}

/**
 * Fetches and polls the ngrok service status from Atlassian Statuspage every 5 minutes.
 */
function useStatusPageStatus() {
	return useQuery({
		queryKey: ["statuspage", "status"],
		queryFn: fetchStatusPageStatus,
		// Refetch every 5 minutes
		refetchInterval: 300_000,
		// Pause polling when the tab is inactive to avoid unnecessary API calls
		refetchIntervalInBackground: false,
		staleTime: 300_000, // stale time of 5 minutes
		// Don't retry on failure - we'll fall back to default message
		retry: false,
	});
}

export {
	//,
	useStatusPageStatus,
	type StatusIndicator,
	type StatusPageStatus,
	type StatusIndicatorLevel,
	statusPageStatusSchema,
	getConfigForStatusIndicatorLevel,
};
