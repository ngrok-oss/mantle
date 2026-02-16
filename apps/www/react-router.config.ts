import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
import { href } from "react-router";

const isVercelDeploy = process.env.VERCEL === "1";

export default {
	future: {
		v8_middleware: true,
	},
	ssr: true,
	presets: [
		//,
		isVercelDeploy && vercelPreset(),
	].filter(Boolean),
	prerender: ({ getStaticPaths }) => {
		return getStaticPaths().filter((path) => path !== href("/components/inline-code"));
	},
} satisfies Config;
