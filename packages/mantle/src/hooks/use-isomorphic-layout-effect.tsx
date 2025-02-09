import { useEffect, useLayoutEffect } from "react";

/**
 * useIsomorphicLayoutEffect is a hook that uses useLayoutEffect on the client and useEffect on the server.
 */
export const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;
