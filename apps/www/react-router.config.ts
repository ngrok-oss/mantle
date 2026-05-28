import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";
const isVercelDeploy = process.env.VERCEL === "1";

export default {
	ssr: true,
	presets: [
		//,
		isVercelDeploy && vercelPreset(),
	].filter(Boolean),
	prerender: ({ getStaticPaths }) => {
		// `.mdx` paths exist only to 301-redirect stale source URLs to the canonical
		// doc page; they are not pages to snapshot. Visiting them during prerender
		// fails because the framework treats the 301 as an unexpected status.
		return getStaticPaths().filter((path) => !path.endsWith(".mdx"));
	},
} satisfies Config;
