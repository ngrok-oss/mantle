import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

const isVercelDeploy = process.env.VERCEL === "1";

export default {
	ssr: true,
	presets: [
		//,
		isVercelDeploy && vercelPreset(),
	].filter(Boolean),
} satisfies Config;
