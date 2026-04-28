import { useCallback, useMemo, useReducer } from "react";

type UndoRedoState<T> = {
	undoStack: T[];
	redoStack: T[];
};

type UndoRedoAction<T> =
	| { type: "push"; snapshot: T }
	| { type: "undo"; current: T }
	| { type: "redo"; current: T };

function undoRedoReducer<T>(state: UndoRedoState<T>, action: UndoRedoAction<T>): UndoRedoState<T> {
	switch (action.type) {
		case "push": {
			return {
				undoStack: [...state.undoStack, action.snapshot],
				redoStack: [],
			};
		}
		case "undo": {
			if (state.undoStack.length === 0) {
				return state;
			}
			const undoStack = state.undoStack.slice(0, -1);
			const previous = state.undoStack[state.undoStack.length - 1];
			if (previous === undefined) {
				return state;
			}
			return {
				undoStack,
				redoStack: [...state.redoStack, action.current],
			};
		}
		case "redo": {
			if (state.redoStack.length === 0) {
				return state;
			}
			const redoStack = state.redoStack.slice(0, -1);
			const next = state.redoStack[state.redoStack.length - 1];
			if (next === undefined) {
				return state;
			}
			return {
				undoStack: [...state.undoStack, action.current],
				redoStack,
			};
		}
	}
}

type UseUndoRedoReturn<T> = {
	/** Whether there are actions to undo. */
	canUndo: boolean;
	/** Whether there are actions to redo. */
	canRedo: boolean;
	/** Push a snapshot onto the undo stack. Clears the redo stack. */
	push: (snapshot: T) => void;
	/** Pop the last snapshot from the undo stack. Returns `undefined` if empty. */
	undo: (current: T) => T | undefined;
	/** Pop the last snapshot from the redo stack. Returns `undefined` if empty. */
	redo: (current: T) => T | undefined;
};

/**
 * Generic undo/redo hook backed by a reducer that maintains two history
 * stacks (undo and redo).
 *
 * The hook does not own your application state — instead it helps you
 * snapshot it. Call `push(snapshot)` *before* mutating state to capture
 * the current value, then call `undo(current)` or `redo(current)` to swap
 * `current` with the previous/next snapshot. Both `undo` and `redo` return
 * the snapshot to apply, or `undefined` if their stack is empty. Pushing a
 * new snapshot clears the redo stack, matching standard editor semantics.
 *
 * @typeParam T - The type of the value being snapshotted (e.g. a list of
 *   items, a serialized form value, etc.).
 *
 * @returns An object with the current undo/redo capability flags and
 *   actions:
 *   - `canUndo`: `true` when there is at least one snapshot on the undo
 *     stack.
 *   - `canRedo`: `true` when there is at least one snapshot on the redo
 *     stack.
 *   - `push(snapshot)`: Push a snapshot onto the undo stack and clear the
 *     redo stack. Call this *before* mutating state.
 *   - `undo(current)`: Pop the latest undo snapshot and return it; returns
 *     `undefined` when the undo stack is empty. The supplied `current` is
 *     pushed onto the redo stack so you can redo back to it.
 *   - `redo(current)`: Pop the latest redo snapshot and return it; returns
 *     `undefined` when the redo stack is empty. The supplied `current` is
 *     pushed onto the undo stack.
 *
 * @example
 * // Snapshot before mutating, then wire up keyboard shortcuts
 * const [items, setItems] = useState<string[]>([]);
 * const { push, undo, redo, canUndo, canRedo } = useUndoRedo<string[]>();
 *
 * function removeItem(item: string) {
 *   push(items); // snapshot before mutation
 *   setItems((prev) => prev.filter((entry) => entry !== item));
 * }
 *
 * function handleKeyDown(event: React.KeyboardEvent) {
 *   const cmd = event.metaKey || event.ctrlKey;
 *   if (cmd && event.key === "z" && !event.shiftKey) {
 *     const previous = undo(items);
 *     if (previous) {
 *       setItems(previous);
 *     }
 *   }
 *   if (cmd && ((event.shiftKey && event.key === "z") || event.key === "y")) {
 *     const next = redo(items);
 *     if (next) {
 *       setItems(next);
 *     }
 *   }
 * }
 *
 * return (
 *   <div onKeyDown={handleKeyDown}>
 *     <button disabled={!canUndo} onClick={() => { const previous = undo(items); if (previous) setItems(previous); }}>Undo</button>
 *     <button disabled={!canRedo} onClick={() => { const next = redo(items); if (next) setItems(next); }}>Redo</button>
 *   </div>
 * );
 */
function useUndoRedo<T>(): UseUndoRedoReturn<T> {
	const [state, dispatch] = useReducer(undoRedoReducer<T>, {
		undoStack: [],
		redoStack: [],
	});

	const push = useCallback((snapshot: T) => {
		dispatch({ type: "push", snapshot });
	}, []);

	const undo = useCallback(
		(current: T): T | undefined => {
			const previous = state.undoStack[state.undoStack.length - 1];
			if (previous === undefined) {
				return undefined;
			}
			dispatch({ type: "undo", current });
			return previous;
		},
		[state.undoStack],
	);

	const redo = useCallback(
		(current: T): T | undefined => {
			const next = state.redoStack[state.redoStack.length - 1];
			if (next === undefined) {
				return undefined;
			}
			dispatch({ type: "redo", current });
			return next;
		},
		[state.redoStack],
	);

	return useMemo(
		() => ({
			canUndo: state.undoStack.length > 0,
			canRedo: state.redoStack.length > 0,
			push,
			undo,
			redo,
		}),
		[state.undoStack.length, state.redoStack.length, push, undo, redo],
	);
}

export {
	//,
	useUndoRedo,
};

export type {
	//,
	UseUndoRedoReturn,
};
