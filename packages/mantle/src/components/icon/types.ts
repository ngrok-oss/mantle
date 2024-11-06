import type { ComponentProps } from "react";

export type SvgAttributes = ComponentProps<"svg"> & {
	focusable?: "true" | "false";
};
