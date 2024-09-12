import type { HTMLAttributes } from "react";

export type SvgAttributes = HTMLAttributes<SVGElement> & {
	focusable?: "true" | "false";
};
