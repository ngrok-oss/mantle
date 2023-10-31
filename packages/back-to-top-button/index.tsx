import { usePrefersReducedMotion } from "../hooks/use-prefers-reduced-motion";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useRef, type CSSProperties, useEffect } from "react";
import { Portal } from "../portal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";
import { ArrowUpToLine } from "lucide-react";
import { cx } from "../cx";

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
							"fixed bottom-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-primary-500 text-gray-900 transition-all duration-150 ease-in-out hover:bg-white/90 hover:shadow-lg",
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
						<ArrowUpToLine />
					</TooltipTrigger>
					<TooltipContent collisionPadding={8}>
						<p>Scroll back to top</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Portal>
	);
};
