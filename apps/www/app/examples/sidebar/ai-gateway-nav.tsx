import { Sidebar } from "@ngrok/mantle/sidebar";
import { ChartLineIcon } from "@phosphor-icons/react/ChartLine";
import { CloudIcon } from "@phosphor-icons/react/Cloud";
import { GearIcon } from "@phosphor-icons/react/Gear";
import { KeyIcon } from "@phosphor-icons/react/Key";
import { ListMagnifyingGlassIcon } from "@phosphor-icons/react/ListMagnifyingGlass";
import { RobotIcon } from "@phosphor-icons/react/Robot";

const items: ReadonlyArray<{ label: string; icon: React.ReactNode; path: string }> = [
	{ label: "Overview", icon: <RobotIcon />, path: "/ai-gateway" },
	{ label: "Providers", icon: <CloudIcon />, path: "/ai-gateway/providers" },
	{ label: "API Keys", icon: <KeyIcon />, path: "/ai-gateway/api-keys" },
	{ label: "Usage & Cost", icon: <ChartLineIcon />, path: "/ai-gateway/usage" },
	{ label: "Request Logs", icon: <ListMagnifyingGlassIcon />, path: "/ai-gateway/logs" },
	{ label: "Settings", icon: <GearIcon />, path: "/ai-gateway/settings" },
];

type Props = {
	pathname: string;
	onNavigate: (path: string) => void;
};

/**
 * Per-product navigation for the AI Gateway example. Today's AI Gateway dashboard
 * uses tabs; this example demonstrates how those tabs translate into top-level
 * sidebar items.
 */
export function AiGatewayNav({ onNavigate, pathname }: Props) {
	return (
		<Sidebar.Group>
			{items.map((item) => (
				<Sidebar.Item key={item.path} active={pathname === item.path} level="top" asChild>
					<button type="button" onClick={() => onNavigate(item.path)}>
						{item.icon}
						{item.label}
					</button>
				</Sidebar.Item>
			))}
		</Sidebar.Group>
	);
}
