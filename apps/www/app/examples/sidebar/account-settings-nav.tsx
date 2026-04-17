import { Sidebar } from "@ngrok/mantle/sidebar";
import { CreditCardIcon } from "@phosphor-icons/react/CreditCard";
import { GearIcon } from "@phosphor-icons/react/Gear";
import { GoogleLogoIcon } from "@phosphor-icons/react/GoogleLogo";
import { ShieldCheckIcon } from "@phosphor-icons/react/ShieldCheck";
import { UsersThreeIcon } from "@phosphor-icons/react/UsersThree";

const items: ReadonlyArray<{ label: string; icon: React.ReactNode; path: string }> = [
	{ label: "General", icon: <GearIcon />, path: "/settings" },
	{ label: "Members", icon: <UsersThreeIcon />, path: "/settings/members" },
	{ label: "Billing", icon: <CreditCardIcon />, path: "/settings/billing" },
	{ label: "Authentication", icon: <ShieldCheckIcon />, path: "/settings/authentication" },
	{ label: "Google Apps Sign-on", icon: <GoogleLogoIcon />, path: "/settings/google-sso" },
];

type Props = {
	pathname: string;
	onNavigate: (path: string) => void;
};

/**
 * Placeholder navigation for the Account Settings rail section. Real items
 * will be filled in by the platform team — this exists to demonstrate the
 * pattern of admin-style sections living alongside products in the rail.
 */
export function AccountSettingsNav({ onNavigate, pathname }: Props) {
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
