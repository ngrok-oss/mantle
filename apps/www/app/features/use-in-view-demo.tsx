"use client";

import { cx } from "@ngrok/mantle/cx";
import { useInView } from "@ngrok/mantle/hooks";
import { useRef, type ComponentRef } from "react";

/**
 * Live demo for the useInView hook.
 * A scrollable container where the observed element transitions
 * between in-view and out-of-view states as you scroll.
 */
export function UseInViewDemo() {
	const ref = useRef<ComponentRef<"div">>(null);
	const isInView = useInView(ref, { amount: 0.5 });

	return (
		<div className="h-72 w-full overflow-y-scroll overscroll-contain">
			<div className="flex flex-col items-center gap-4 px-8 py-6">
				<p className="select-none font-mono text-sm text-muted">↓ scroll down</p>
				<div className="h-60" />
				<div
					ref={ref}
					className={cx(
						"flex h-28 w-64 items-center justify-center rounded-xl border-2 font-mono text-sm transition-all duration-500",
						isInView
							? "scale-100 border-accent-600 bg-accent-600/10 text-accent-600 opacity-100"
							: "scale-95 border-card-muted bg-gray-50 text-muted opacity-30",
					)}
				>
					isInView: {String(isInView)}
				</div>
				<div className="h-60" />
				<p className="select-none font-mono text-sm text-muted">↑ scroll up</p>
			</div>
		</div>
	);
}
