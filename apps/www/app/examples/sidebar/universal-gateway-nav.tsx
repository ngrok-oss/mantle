import { Sidebar } from "@ngrok/mantle/sidebar";
import { ArrowsLeftRightIcon } from "@phosphor-icons/react/ArrowsLeftRight";
import { GlobeIcon } from "@phosphor-icons/react/Globe";
import { ListMagnifyingGlassIcon } from "@phosphor-icons/react/ListMagnifyingGlass";
import { RocketIcon } from "@phosphor-icons/react/Rocket";
import { UserCircleIcon } from "@phosphor-icons/react/UserCircle";

type NavSection = {
	title: string;
	icon: React.ReactNode;
	items: ReadonlyArray<{ label: string; path: string }>;
};

const sections: ReadonlyArray<NavSection> = [
	{
		title: "Getting Started",
		icon: <RocketIcon />,
		items: [
			{ label: "Setup & Installation", path: "/get-started/setup" },
			{ label: "Your Authtoken", path: "/get-started/your-authtoken" },
		],
	},
	{
		title: "Universal Gateway",
		icon: <GlobeIcon />,
		items: [
			{ label: "Endpoints", path: "/endpoints" },
			{ label: "Domains", path: "/domains" },
			{ label: "TCP Addresses", path: "/tcp-addresses" },
			{ label: "TLS Certificates", path: "/tls-certs" },
			{ label: "Kubernetes Operators", path: "/kubernetes-operators" },
			{ label: "Vaults & Secrets", path: "/vaults" },
			{ label: "IP Policies", path: "/ip-policies" },
			{ label: "TLS Cert Authorities", path: "/tls-cert-authorities" },
			{ label: "Traffic Identities", path: "/traffic-identities" },
		],
	},
	{
		title: "Traffic Observability",
		icon: <ListMagnifyingGlassIcon />,
		items: [
			{ label: "Traffic Inspector", path: "/observability/traffic-inspector" },
			{ label: "Log Exporting", path: "/event-subscriptions" },
		],
	},
	{
		title: "Secure Tunnels",
		icon: <ArrowsLeftRightIcon />,
		items: [
			{ label: "Agents", path: "/agents" },
			{ label: "Connect URLs", path: "/ingress" },
		],
	},
	{
		title: "Identity & Access",
		icon: <UserCircleIcon />,
		items: [
			{ label: "Team Members", path: "/team-members" },
			{ label: "Service Users", path: "/service-users" },
			{ label: "Authtokens", path: "/authtokens" },
			{ label: "API Keys", path: "/api-keys" },
			{ label: "SSH Public Keys", path: "/ssh-keys" },
			{ label: "IP Restrictions", path: "/ip-restrictions" },
		],
	},
];

type Props = {
	pathname: string;
	onNavigate: (path: string) => void;
};

/**
 * Per-product navigation for the Universal Gateway example. Mirrors the
 * structure currently shipped in the dashboard's `PrimaryNav`. Active state is
 * derived from the `pathname` prop so the consumer's router (here, a local
 * `useState`) controls highlighting.
 */
export function UniversalGatewayNav({ onNavigate, pathname }: Props) {
	return (
		<>
			{sections.map((section) => (
				<Sidebar.Section key={section.title}>
					<Sidebar.SectionTitle asChild>
						<button
							type="button"
							onClick={() => {
								const firstPath = section.items[0]?.path;
								if (firstPath) {
									onNavigate(firstPath);
								}
							}}
						>
							{section.icon}
							{section.title}
						</button>
					</Sidebar.SectionTitle>
					<Sidebar.Group>
						{section.items.map((item) => (
							<Sidebar.Item key={item.path} active={pathname === item.path} asChild>
								<button type="button" onClick={() => onNavigate(item.path)}>
									{item.label}
								</button>
							</Sidebar.Item>
						))}
					</Sidebar.Group>
				</Sidebar.Section>
			))}
		</>
	);
}
