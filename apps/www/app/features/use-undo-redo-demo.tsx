"use client";

import { Button } from "@ngrok/mantle/button";
import { cx } from "@ngrok/mantle/cx";
import { useUndoRedo } from "@ngrok/mantle/hooks";

const COLORS = [
	"bg-red-400",
	"bg-orange-400",
	"bg-yellow-400",
	"bg-green-400",
	"bg-blue-400",
	"bg-purple-400",
];

/**
 * Live demo for the useUndoRedo hook.
 * A color picker where each color change can be undone and redone.
 */
export function UseUndoRedoDemo() {
	const {
		present: color,
		set: setColor,
		undo,
		redo,
		canUndo,
		canRedo,
	} = useUndoRedo(COLORS[0] ?? "bg-red-400");

	return (
		<div className="flex flex-col items-center gap-6 p-6">
			<div className={cx("h-24 w-24 rounded-xl transition-all duration-300", color)} />
			<div className="flex flex-wrap justify-center gap-2">
				{COLORS.map((c) => (
					<button
						key={c}
						className={cx(
							"h-8 w-8 rounded-full transition-transform hover:scale-110",
							c,
							color === c && "ring-2 ring-offset-2 ring-gray-400",
						)}
						onClick={() => setColor(c)}
					/>
				))}
			</div>
			<div className="flex gap-2">
				<Button type="button" appearance="outlined" disabled={!canUndo} onClick={undo}>
					Undo
				</Button>
				<Button type="button" appearance="outlined" disabled={!canRedo} onClick={redo}>
					Redo
				</Button>
			</div>
			<p className="font-mono text-xs text-muted">
				canUndo: {String(canUndo)} · canRedo: {String(canRedo)}
			</p>
		</div>
	);
}
