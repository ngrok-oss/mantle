import { useEffect, useState } from "react";

export function useMatchesMediaQuery(mediaQuery: MediaQueryList): boolean {
	const [matches, setMatches] = useState<boolean>(() => mediaQuery.matches);

	useEffect(() => {
		function onChange() {
			setMatches(mediaQuery.matches);
		}

		if (typeof mediaQuery.addEventListener === "undefined") {
			// fix for Safari < 14.x
			mediaQuery.addListener(onChange);

			return () => {
				mediaQuery.removeListener(onChange);
			};
		}

		mediaQuery.addEventListener("change", onChange);

		return () => {
			mediaQuery.removeEventListener("change", onChange);
		};
	}, [mediaQuery]);

	return matches;
}
