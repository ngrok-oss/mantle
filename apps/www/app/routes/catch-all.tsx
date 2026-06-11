import { data } from "react-router";
import { ErrorPage } from "~/components/error-page";
import { canonicalHref } from "~/utilities/canonical-origin";
import type { Route } from "./+types/catch-all";

/** Meta for the 404 page — `noindex` so crawlers don't index broken URLs. */
export function meta({ location }: Route.MetaArgs) {
	return [
		{ title: "Page not found - @ngrok/mantle" },
		{ name: "robots", content: "noindex, nofollow" },
		{ tagName: "link" as const, rel: "canonical", href: canonicalHref(location.pathname) },
	];
}

/**
 * Loader for the splat route. Returns a 404 status so SSR responses for
 * unknown URLs are correctly marked as not found for crawlers and clients.
 * Because this route *matches*, ancestor loaders (including root) run normally
 * — unlike an unmatched URL, which would render the root error boundary with
 * no root loader data.
 */
export function loader(_args: Route.LoaderArgs) {
	return data(null, { status: 404 });
}

/** The 404 page. Catches any URL that doesn't match a known route. */
export default function CatchAll() {
	return <ErrorPage status={404} />;
}
