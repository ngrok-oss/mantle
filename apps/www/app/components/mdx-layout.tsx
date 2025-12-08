import { Prose } from "@ngrok/mantle/prose";
import type { ReactNode } from "react";

type MdxLayoutProps = {
	children: ReactNode;
};

export function MdxLayout({ children }: MdxLayoutProps) {
	return <Prose>{children}</Prose>;
}
