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
			if (previous == null) {
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
			if (next == null) {
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
 * A generic undo/redo hook backed by a reducer.
 *
 * Maintains two stacks (undo and redo). Call `push` before mutating state
 * to snapshot the current value. Call `undo`/`redo` with the current value
 * to swap it with the previous/next snapshot.
 *
 * @example
 * ```tsx
 * const { push, undo, redo, canUndo, canRedo } = useUndoRedo<string[]>();
 *
 * function removeItem(item: string) {
 *   push([...items]); // snapshot before mutation
 *   setItems(items.filter((i) => i !== item));
 * }
 *
 * function handleKeyDown(event: KeyboardEvent) {
 *   if ((event.metaKey || event.ctrlKey) && event.key === "z" && !event.shiftKey) {
 *     const previous = undo(items);
 *     if (previous) setItems(previous);
 *   }
 *   if ((event.metaKey || event.ctrlKey) && (event.shiftKey && event.key === "z" || event.key === "y")) {
 *     const next = redo(items);
 *     if (next) setItems(next);
 *   }
 * }
 * ```
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
			if (previous == null) {
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
			if (next == null) {
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
