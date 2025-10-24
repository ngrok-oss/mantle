/**
 * file stolen shamelessly from vercel so that we can plumb in the nonce provider
 *
 * @see https://github.com/vercel/vercel/blob/main/packages/react-router/entry.server.ts
 */

import { randomBytes } from "node:crypto";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { isbot } from "isbot";
import type { RenderToPipeableStreamOptions } from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import type {
	ActionFunctionArgs,
	AppLoadContext,
	EntryContext,
	LoaderFunctionArgs,
} from "react-router";
import { ServerRouter } from "react-router";
import { NonceProvider } from "./components/nonce";
import { getBaseUrl } from "./utilities/base-url";

// Increase the stack trace limit so we can see more of the error
Error.stackTraceLimit = Number.POSITIVE_INFINITY;

// Reject/cancel all pending promises after 5 seconds
export const streamTimeout = 5_000;

// Automatically timeout the React renderer after 6 seconds, which ensures
// React has enough time to flush down the rejected boundary contents
const reactRendererTimeout = streamTimeout + 1_000;

const vercelDeploymentId = process.env.VERCEL_DEPLOYMENT_ID;
const vercelSkewProtectionEnabled =
	process.env.VERCEL_SKEW_PROTECTION_ENABLED === "1";
const isDev = import.meta.env.DEV || process.env.NODE_ENV !== "production";
const isPreview = process.env.VERCEL_ENV === "preview";

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	routerContext: EntryContext,
	_loadContext: AppLoadContext,
) {
	const uniquePerRequestNonce = randomBytes(16).toString("hex");

	/**
	 * SEO/indexing logic: only allow indexing when accessed through ngrok.com proxy
	 *
	 * Only allow indexing when:
	 *  1. Production environment (VERCEL_ENV === "production")
	 *  2. x-ngrok-edge header present (set by ngrok traffic policy)
	 */
	const isProdEnv = process.env.VERCEL_ENV === "production";
	const isNgrokProxy = request.headers.get("x-ngrok-edge") != null;

	return new Promise((resolve, reject) => {
		let shellRendered = false;
		const userAgent = request.headers.get("user-agent");
		const baseUrl = getBaseUrl(request.url);

		// Ensure requests from bots and SPA Mode renders wait for all content to load before responding
		// https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
		const readyOption: keyof RenderToPipeableStreamOptions =
			(userAgent && isbot(userAgent)) || routerContext.isSpaMode
				? "onAllReady"
				: "onShellReady";

		const { pipe, abort } = renderToPipeableStream(
			<NonceProvider value={uniquePerRequestNonce}>
				<ServerRouter
					context={routerContext}
					url={request.url}
					nonce={uniquePerRequestNonce}
				/>
			</NonceProvider>,
			{
				[readyOption]() {
					shellRendered = true;
					const body = new PassThrough();
					const stream = createReadableStreamFromReadable(body);

					responseHeaders.set("Content-Type", "text/html");

					/**
					 * Important: don't set cookies on cacheable HTML.
					 * Keep the skew-protection cookie to PREVIEW only.
					 */
					if (vercelSkewProtectionEnabled && vercelDeploymentId && isPreview) {
						responseHeaders.append(
							"Set-Cookie",
							`__vdpl=${vercelDeploymentId}; Path=/; HttpOnly; SameSite=Lax`,
						);
					}

					/**
					 * SEO & Indexing Strategy
					 *
					 * Only allow indexing when ALL conditions are met:
					 *  1. Production environment (VERCEL_ENV === "production")
					 *  2. x-ngrok-edge header present (proxied through ngrok.com)
					 */
					const shouldBlockIndexing = !(isProdEnv && isNgrokProxy);

					if (shouldBlockIndexing) {
						responseHeaders.set("X-Robots-Tag", "noindex, nofollow");
					}

					// Add debug headers to verify indexing logic
					responseHeaders.set(
						"X-Debug-Indexing-Blocked",
						String(shouldBlockIndexing),
					);
					responseHeaders.set("X-Debug-Is-Prod", String(isProdEnv));
					responseHeaders.set("X-Debug-Has-Ngrok-Header", String(isNgrokProxy));

					// Prevent cache bleed across hosts
					const existingVary = responseHeaders.get("Vary");
					responseHeaders.set(
						"Vary",
						existingVary
							? `${existingVary}, Host, X-Forwarded-Host`
							: "Host, X-Forwarded-Host",
					);

					// Caching Strategy
					if (isDev || shouldBlockIndexing) {
						// Dev/HMR/Preview: avoid any caching weirdness
						// When blocking indexing, also prevent CDN caching
						responseHeaders.set("Cache-Control", "private, no-store");
					} else {
						// Prod: browsers revalidate; CDN caches briefly + SWR
						responseHeaders.set(
							"Cache-Control",
							"public, max-age=0, must-revalidate",
						);
						// Target the CDN specifically (Vercel honors this)
						responseHeaders.set(
							"CDN-Cache-Control",
							"public, s-maxage=900, stale-while-revalidate=300",
						);
						// Harmless belt-and-suspenders; either works on Vercel
						responseHeaders.set(
							"Vercel-CDN-Cache-Control",
							"public, s-maxage=900, stale-while-revalidate=300",
						);
					}

					/**
					 * Prevent the page from being embedded in an iframe to mitigate
					 * clickjacking attacks
					 */
					responseHeaders.set("X-Frame-Options", "DENY");

					/**
					 * Enable basic XSS protection in older browsers by instructing them
					 * to block rendering if a reflected XSS attack is detected
					 */
					responseHeaders.set("X-XSS-Protection", "1; mode=block");

					/**
					 * Enforce a strict Content Security Policy (CSP) with a per-request
					 * nonce to prevent inline script execution unless explicitly allowed
					 */
					responseHeaders.set(
						"Content-Security-Policy",
						buildCSPHeader({ nonce: uniquePerRequestNonce, baseUrl }),
					);

					resolve(
						new Response(stream, {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					);

					pipe(body);
				},
				onShellError(error: unknown) {
					reject(error);
				},
				onError(error: unknown) {
					// biome-ignore lint/style/noParameterAssign: this is react-router code
					responseStatusCode = 500;
					// Log streaming rendering errors from inside the shell.  Don't log
					// errors encountered during initial shell rendering since they'll
					// reject and get logged in handleDocumentRequest.
					if (shellRendered) {
						console.error(error);
					}
				},
				nonce: uniquePerRequestNonce,
			},
		);

		// Abort the rendering stream after the `streamTimeout` so it has time to
		// flush down the rejected boundaries
		globalThis.setTimeout(abort, reactRendererTimeout);
	});
}

/**
 * TODO: add sentry/datadog handling here
 */
export function handleError(
	error: unknown,
	{ request }: LoaderFunctionArgs | ActionFunctionArgs,
) {
	if (!request.signal.aborted) {
		console.error(
			"react-router entry.server handleError (unexpected error)",
			error,
		);
	}
}

/**
 * Constructs a CSP (Content Security Policy) header string.
 * The `nonce` should be securely generated for each request and inserted into script tags.
 *
 * The script-src directive includes only trusted third-party scripts used in production.
 */
function buildCSPHeader({
	nonce,
	baseUrl,
}: { nonce: string; baseUrl: string }): string {
	const scriptNonce = `'nonce-${nonce}'`;

	/**
	 * in production, we use traffic policy to forward requests to vercel app from an ngrok.com origin
	 * we will want to filter this out if the baseUrl is just "/"
	 */
	const hostedOrigin = baseUrl !== "/" ? baseUrl : undefined;

	// List of trusted script sources.
	// NOTE: URLs ending in '/' indicate prefix match (important for CSP)
	const scriptSrcSources = [
		//,
		"'self'",
		hostedOrigin,
	].filter(Boolean);

	const scriptSrc = `script-src ${scriptNonce} ${scriptSrcSources.join(" ")}`;
	const baseUri = "base-uri 'self';";
	const objectSrc = "object-src 'none';";
	const workerSrc = "worker-src blob:;";

	return [
		//,
		scriptSrc,
		baseUri,
		objectSrc,
		workerSrc,
	].join("; ");
}
