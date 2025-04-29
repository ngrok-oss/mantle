declare module "*.svg" {
	import type { ComponentProps } from "react";

	export type SvgProps = ComponentProps<"svg">;

	const src: string;

	export default src;
}
