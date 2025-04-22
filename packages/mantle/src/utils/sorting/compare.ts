/**
 * Compare dates in newest-to-oldest (descending) order.
 * Used for chronological sorting use cases.
 *
 * @returns A negative number if `b` comes earlier in time than `a`; positive if `b` comes later in time than `a`; 0 if they are equivalent.
 */
function compareDatesNewestToOldest(a: Date, b: Date): number {
	return Math.sign(b.getTime() - a.getTime());
}

/**
 * Compare dates in oldest-to-newest (ascending) order.
 * Used for chronological sorting use cases.
 *
 * @returns A negative number if `a` comes earlier in time than `b`; positive if `a` comes later in time than `b`; 0 if they are equivalent.
 */
function compareDatesOldestToNewest(a: Date, b: Date): number {
	return Math.sign(a.getTime() - b.getTime());
}

export {
	//,
	compareDatesNewestToOldest,
	compareDatesOldestToNewest,
};
