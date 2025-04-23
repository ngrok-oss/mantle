import { sortingDirections as baseSortingDirections } from "../../utils/sorting/direction.js";

const sortDirections = [...baseSortingDirections, "unsorted"] as const;
type SortDirection = (typeof sortDirections)[number];

export {
	//,
	sortDirections,
};

export type {
	//,
	SortDirection,
};
