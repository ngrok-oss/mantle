import { useCallback, useMemo, useReducer } from "react";

type UndoRedoState<T> = {
	past: T[];
	present: T;
	future: T[];
};

type UndoRedoAction<T> = { type: "set"; value: T } | { type: "undo" } | { type: "redo" };

function undoRedoReducer<T>(state: UndoRedoState<T>, action: UndoRedoAction<T>): UndoRedoState<T> {
	switch (action.type) {
		case "set": {
			return {
				past: [...state.past, state.present],
				present: action.value,
				future: [],
			};
		}
		case "undo": {
			if (state.past.length === 0) {
				return state;
			}
			const previous = state.past[state.past.length - 1];
			if (previous === undefined) {
				return state;
			}
			return {
				past: state.past.slice(0, -1),
				present: previous,
				future: [...state.future, state.present],
			};
		}
		case "redo": {
			if (state.future.length === 0) {
				return state;
			}
			const next = state.future[state.future.length - 1];
			if (next === undefined) {
				return state;
			}
			return {
				past: [...state.past, state.present],
				present: next,
				future: state.future.slice(0, -1),
			};
		}
	}
}

type UseUndoRedoReturn<T> = {
	/** The current value. */
	present: T;
	/** Whether there are actions to undo. */
	canUndo: boolean;
	/** Whether there are actions to redo. */
	canRedo: boolean;
	/** Set a new value, pushing the current value onto the undo stack and clearing the redo stack. */
	set: (value: T) => void;
	/** Undo the last change, moving the current value onto the redo stack. */
	undo: () => void;
	/** Redo the last undone change, moving the current value onto the undo stack. */
	redo: () => void;
};

/**
 * A generic undo/redo hook backed by a reducer.
 *
 * Owns the full history including the current value. Call `set` to update the
 * value and push the previous one onto the undo stack. Call `undo`/`redo` to
 * move through history.
 *
 * @example
 * ```tsx
 * const { present: items, set: setItems, undo, redo, canUndo, canRedo } = useUndoRedo<string[]>([]);
 *
 * function removeItem(item: string) {
 *   setItems(items.filter((i) => i !== item));
 * }
 *
 * function handleKeyDown(event: KeyboardEvent) {
 *   const mod = event.metaKey || event.ctrlKey;
 *   if (mod && event.key === "z" && !event.shiftKey) undo();
 *   if (mod && (event.key === "y" || (event.shiftKey && event.key === "z"))) redo();
 * }
 * ```
 */
function useUndoRedo<T>(initialValue: T): UseUndoRedoReturn<T> {
	const [state, dispatch] = useReducer(undoRedoReducer<T>, {
		past: [],
		present: initialValue,
		future: [],
	});

	const set = useCallback((value: T) => {
		dispatch({ type: "set", value });
	}, []);

	const undo = useCallback(() => {
		dispatch({ type: "undo" });
	}, []);

	const redo = useCallback(() => {
		dispatch({ type: "redo" });
	}, []);

	return useMemo(
		() => ({
			present: state.present,
			canUndo: state.past.length > 0,
			canRedo: state.future.length > 0,
			set,
			undo,
			redo,
		}),
		[state.present, state.past.length, state.future.length, set, undo, redo],
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
