import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren<{ container?: HTMLElement | null }>;

/**
 * @private Internal component. Should not be exported from mantle, but rather used internally by other components.
 *
 * Render children into a different part of the DOM.
 */
const Portal = ({ children, container }: Props) => (
	<>{container ? createPortal(children, container) : null}</>
);

// MARK: - Exports

export { Portal };
