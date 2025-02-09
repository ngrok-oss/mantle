import {
	useIsomorphicLayoutEffect,
	usePrefersReducedMotion,
} from "@ngrok/mantle/hooks";
import { useLocation } from "@remix-run/react";
import { useMemo } from "react";

type Props = {
	disabled?: boolean;
};

export function AutoScrollToHash({ disabled = false }: Props) {
	useAutoScrollToHash({ disabled });

	return null;
}

export function useAutoScrollToHash({ disabled = false }: Props = {}) {
	const { hash } = useLocation();
	const scrollBehavior = useScrollBehavior();

	useIsomorphicLayoutEffect(() => {
		const elementId = hash.replace(/^#/, "");
		if (disabled) {
			return () => {};
		}

		let handle = 0;
		if (elementId) {
			handle = window.requestAnimationFrame(() => {
				const element = document.getElementById(elementId);
				element?.scrollIntoView({ behavior: scrollBehavior });
			});
		}

		return () => {
			window.cancelAnimationFrame(handle);
		};
	});
}

type ScrollBehavior = "auto" | "smooth";

function useScrollBehavior(): ScrollBehavior {
	const prefersReducedMotion = usePrefersReducedMotion();

	return useMemo(
		() => (prefersReducedMotion ? "auto" : "smooth"),
		[prefersReducedMotion],
	);
}
