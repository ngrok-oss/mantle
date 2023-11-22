import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const tailwindConfigPath = path.resolve(__dirname, "./tailwind.config.ts");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: {
		postcss: {
			plugins: [autoprefixer, tailwind({ config: tailwindConfigPath })],
		},
	},
});
