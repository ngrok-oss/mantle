import { href, redirect } from "react-router";

export const loader = () => {
	throw redirect(href("/components/code"));
};
