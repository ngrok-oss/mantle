import { Code } from "@ngrok/mantle/code";

/**
 * Displays the text color tokens with visual swatches.
 */
export function TypographyColors() {
	return (
		<div className="mt-3 flex flex-col gap-4 overflow-hidden text-xs md:flex-row">
			<div className="text-strong flex grow flex-col gap-1">
				<div className="h-10 w-full rounded bg-neutral-950" />
				<div className="flex items-center justify-between">
					<span className="text-strong">Strong</span>
					<Code>.text-strong</Code>
				</div>
			</div>
			<div className="flex grow flex-col gap-1">
				<div className="h-10 w-full rounded bg-neutral-950/75" />
				<div className="flex items-center justify-between">
					<span className="text-body">Body</span>
					<Code>.text-body</Code>
				</div>
			</div>
			<div className="flex grow flex-col gap-1">
				<div className="h-10 w-full rounded bg-neutral-950/60" />
				<div className="flex items-center justify-between">
					<span className="text-muted">Muted</span>
					<Code>.text-muted</Code>
				</div>
			</div>
			<div className="flex grow flex-col gap-1">
				<div className="h-10 w-full rounded bg-neutral-950/50" />
				<div className="flex items-center justify-between">
					<span className="text-placeholder">Placeholder</span>
					<Code>.text-placeholder</Code>
				</div>
			</div>
		</div>
	);
}
