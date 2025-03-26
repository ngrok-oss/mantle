import { handleRequest } from "@vercel/react-router/entry.server";
import type { AppLoadContext, EntryContext } from "react-router";

export default async function (
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext,
	loadContext?: AppLoadContext,
): Promise<Response> {
	const nonce = crypto.randomUUID();
	const response = await handleRequest(
		request,
		responseStatusCode,
		responseHeaders,
		routerContext,
		loadContext,
		{ nonce },
	);
	return response;
}
