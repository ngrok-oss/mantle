import { Sidebar } from "@ngrok/mantle/sidebar";
import { ArrowsLeftRightIcon } from "@phosphor-icons/react/ArrowsLeftRight";
import { GearIcon } from "@phosphor-icons/react/Gear";
import { GlobeIcon } from "@phosphor-icons/react/Globe";
import { HouseIcon } from "@phosphor-icons/react/House";
import { TerminalWindowIcon } from "@phosphor-icons/react/TerminalWindow";

const items: ReadonlyArray<{ label: string; icon: React.ReactNode; path: string }> = [
	{ label: "Overview", icon: <HouseIcon />, path: "/localhost" },
	{ label: "Tunnels", icon: <ArrowsLeftRightIcon />, path: "/localhost/tunnels" },
	{ label: "Connect URLs", icon: <GlobeIcon />, path: "/localhost/urls" },
	{ label: "Agent", icon: <TerminalWindowIcon />, path: "/localhost/agent" },
	{ label: "Settings", icon: <GearIcon />, path: "/localhost/settings" },
];

type Props = {
	pathname: string;
	onNavigate: (path: string) => void;
};

/**
 * Placeholder navigation for the Localhost product. Real nav items will be
 * filled in by the product team — this exists to demonstrate the multi-product
 * pattern without inventing specifics.
 */
export function LocalhostNav({ onNavigate, pathname }: Props) {
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
