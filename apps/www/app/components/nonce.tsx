import { createContext, useContext } from "react";

const nonceContext = createContext<string>("");

/**
 * Context for providing a request-unique nonce value.
 *
 * This nonce is used for Content Security Policy (CSP) to allow inline scripts.
 * It should be rendered in the server entry above the ServerRouter
 */
const NonceProvider = nonceContext.Provider;

/**
 * Custom hook to access the request-unique nonce value from the context.
 *
 * This nonce is used for Content Security Policy (CSP) to allow inline scripts.
 */
const useNonce = () => useContext(nonceContext);

export {
	//,
	NonceProvider,
	useNonce,
};
