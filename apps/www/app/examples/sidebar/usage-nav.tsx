import { Sidebar } from "@ngrok/mantle/sidebar";
import { ChartBarIcon } from "@phosphor-icons/react/ChartBar";
import { ChartLineIcon } from "@phosphor-icons/react/ChartLine";
import { ClockCounterClockwiseIcon } from "@phosphor-icons/react/ClockCounterClockwise";
import { SpeedometerIcon } from "@phosphor-icons/react/Speedometer";

const items: ReadonlyArray<{ label: string; icon: React.ReactNode; path: string }> = [
	{ label: "Overview", icon: <SpeedometerIcon />, path: "/usage" },
	{ label: "Current Period", icon: <ChartBarIcon />, path: "/usage/current" },
	{ label: "Trends", icon: <ChartLineIcon />, path: "/usage/trends" },
	{ label: "History", icon: <ClockCounterClockwiseIcon />, path: "/usage/history" },
];

type Props = {
	pathname: string;
	onNavigate: (path: string) => void;
};

/**
 * Placeholder navigation for the Usage rail section. Real items will be
 * filled in by the platform team — this exists to demonstrate how usage
 * lives in the rail alongside products and settings.
 */
export function UsageNav({ onNavigate, pathname }: Props) {
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
