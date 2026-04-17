import type { Product } from "@ngrok/mantle/sidebar";
import { CpuIcon } from "@phosphor-icons/react/Cpu";
import { GearIcon } from "@phosphor-icons/react/Gear";
import { GlobeIcon } from "@phosphor-icons/react/Globe";
import { LaptopIcon } from "@phosphor-icons/react/Laptop";
import { SparkleIcon } from "@phosphor-icons/react/Sparkle";
import { SpeedometerIcon } from "@phosphor-icons/react/Speedometer";
import type { ReactElement } from "react";

/**
 * Rail-section identifiers used by the Sidebar examples. The Sidebar primitives
 * have no opinion about what sections exist — this list lives in the docs site
 * to demonstrate the multi-product navigation pattern.
 *
 * `account-settings` is not a product but lives alongside products in the rail
 * so that the account's admin-style nav (members, authentication, etc.) is
 * always one click away regardless of which product is active.
 */
type ProductId =
	| "account-settings"
	| "ai-gateway"
	| "codename"
	| "localhost"
	| "universal-gateway"
	| "usage";

type ExampleProduct = Product & {
	id: ProductId;
	icon: ReactElement;
};

/**
 * The four core products, alphabetically ordered.
 */
const productItems: ReadonlyArray<ExampleProduct> = [
	{
		id: "localhost",
		label: "Share Localhost",
		icon: <LaptopIcon weight="regular" />,
	},
	{
		id: "universal-gateway",
		label: "Universal Gateway",
		icon: <GlobeIcon weight="regular" />,
	},
	{
		id: "codename",
		label: "Codename",
		icon: <CpuIcon weight="regular" />,
	},
	{
		id: "ai-gateway",
		label: "AI Gateway",
		icon: <SparkleIcon weight="regular" />,
	},
];

/**
 * Utility rail items that sit below the products, separated by a divider.
 */
const utilityItems: ReadonlyArray<ExampleProduct> = [
	{
		id: "usage",
		label: "Usage",
		icon: <SpeedometerIcon weight="regular" />,
	},
	{
		id: "account-settings",
		label: "Account Settings",
		icon: <GearIcon weight="regular" />,
	},
];

export type {
	//,
	ExampleProduct,
	ProductId,
};

export {
	//,
	productItems,
	utilityItems,
};
