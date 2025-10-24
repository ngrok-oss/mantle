import { href, redirect } from "react-router";
import type { Route } from "./+types/components._redirect.inline-code";

export const loader = (_: Route.LoaderArgs) => {
	throw redirect(href("/components/code"));
};
