import { Sidebar } from "@ngrok/mantle/sidebar";
import { CompassIcon } from "@phosphor-icons/react/Compass";
import { GearIcon } from "@phosphor-icons/react/Gear";
import { ListMagnifyingGlassIcon } from "@phosphor-icons/react/ListMagnifyingGlass";
import { StackIcon } from "@phosphor-icons/react/Stack";

const items: ReadonlyArray<{ label: string; icon: React.ReactNode; path: string }> = [
	{ label: "Overview", icon: <CompassIcon />, path: "/codename" },
	{ label: "Workloads", icon: <StackIcon />, path: "/codename/workloads" },
	{ label: "Logs", icon: <ListMagnifyingGlassIcon />, path: "/codename/logs" },
	{ label: "Settings", icon: <GearIcon />, path: "/codename/settings" },
];

type Props = {
	pathname: string;
	onNavigate: (path: string) => void;
};

/**
 * Placeholder navigation for the Codename product. Real nav items will be
 * filled in by the product team — this exists to demonstrate the multi-product
 * pattern without inventing specifics.
 */
export function CodenameNav({ onNavigate, pathname }: Props) {
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
