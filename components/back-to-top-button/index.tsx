import { ArrowLineUp } from "@phosphor-icons/react/ArrowLineUp";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useRef, type CSSProperties } from "react";
import { cx } from "../core";
import { usePrefersReducedMotion } from "../hooks/use-prefers-reduced-motion";
import { Portal } from "../portal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip/src/tooltip";

type Props = {
	className?: string;
	showThresholdPx?: number;
	style?: CSSProperties;
};

export const BackToTopButton = ({ className, showThresholdPx = 200, style }: Props) => {
	const [position = { y: 0 }, scrollTo] = useWindowScroll();
	const prefersReducedMotion = usePrefersReducedMotion();

	const bodyRef = useRef<HTMLElement | undefined>(undefined);

	useEffect(() => {
		bodyRef.current = document.body;
	}, []);

	return (
		<Portal container={bodyRef.current}>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger
						className={cx(
							"fixed bottom-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-filled-blue text-on-filled transition-all duration-150 ease-in-out hover:bg-white/90 hover:shadow-lg",
							(position.y ?? 0) >= showThresholdPx ? "visible opacity-100" : "invisible opacity-0",
							className,
						)}
						onClick={() => {
							scrollTo({
								top: 0,
								behavior: prefersReducedMotion ? "auto" : "smooth",
							});
						}}
						style={style}
						tabIndex={-1}
					>
						<span className="sr-only">Scroll back to top</span>
						<ArrowLineUp className="h-6 w-6" />
					</TooltipTrigger>
					<TooltipContent collisionPadding={8}>
						<p>Scroll back to top</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Portal>
	);
};
