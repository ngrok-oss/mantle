import { canonicalOrigin, canonicalHref } from "./canonical-origin";

type JsonLdPrimitive = string | number | boolean | null;
type JsonLdValue = JsonLdPrimitive | JsonLdObject | JsonLdValue[];

type JsonLdObject = {
	[key: string]: JsonLdValue;
};

type JsonLdMetaDescriptor = {
	"script:ld+json": JsonLdObject;
};

type MantleWebPageJsonLdOptions = {
	description: string;
	name: string;
	pathname: string;
};

type MantleTechArticleJsonLdOptions = {
	description: string;
	pathname: string;
	title: string;
};

const ngrokOrigin = "https://ngrok.com";
const mantleSiteName = "@ngrok/mantle";

function jsonLdMetaDescriptor(value: JsonLdObject): JsonLdMetaDescriptor {
	return {
		"script:ld+json": value,
	};
}

class JsonLdGraphBuilder {
	readonly #values: JsonLdObject[];

	constructor(values: JsonLdObject[]) {
		this.#values = values;
	}

	toPojo(): JsonLdObject {
		if (this.#values.length <= 1) {
			return this.#values[0] ?? {};
		}

		return {
			"@context": "https://schema.org",
			"@graph": this.#values.map((value) => this.#toGraphNode(value)),
		};
	}

	#toGraphNode(value: JsonLdObject): JsonLdObject {
		const { ["@context"]: _context, ...graphNode } = value;
		return graphNode;
	}
}

function jsonLdGraphMetaDescriptor(values: JsonLdObject[]): JsonLdMetaDescriptor {
	return jsonLdMetaDescriptor(new JsonLdGraphBuilder(values).toPojo());
}

function mantleWebsiteJsonLd(): JsonLdObject {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: mantleSiteName,
		url: canonicalOrigin,
		inLanguage: "en-US",
		publisher: {
			"@type": "Organization",
			name: "ngrok",
			url: ngrokOrigin,
		},
	};
}

function mantleWebPageJsonLd({
	description,
	name,
	pathname,
}: MantleWebPageJsonLdOptions): JsonLdObject {
	const pageUrl = canonicalHref(pathname);

	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name,
		description,
		url: pageUrl,
		inLanguage: "en-US",
		isPartOf: {
			"@type": "WebSite",
			name: mantleSiteName,
			url: canonicalOrigin,
		},
		publisher: {
			"@type": "Organization",
			name: "ngrok",
			url: ngrokOrigin,
		},
	};
}

function mantleTechArticleJsonLd({
	description,
	pathname,
	title,
}: MantleTechArticleJsonLdOptions): JsonLdObject {
	const pageUrl = canonicalHref(pathname);

	return {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: title,
		description,
		url: pageUrl,
		inLanguage: "en-US",
		author: {
			"@type": "Organization",
			name: "ngrok",
			url: ngrokOrigin,
		},
		publisher: {
			"@type": "Organization",
			name: "ngrok",
			url: ngrokOrigin,
		},
		isPartOf: {
			"@type": "WebSite",
			name: mantleSiteName,
			url: canonicalOrigin,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": pageUrl,
		},
	};
}

export {
	//,
	jsonLdGraphMetaDescriptor,
	jsonLdMetaDescriptor,
	mantleTechArticleJsonLd,
	mantleWebPageJsonLd,
	mantleWebsiteJsonLd,
};

export type {
	//,
	JsonLdMetaDescriptor,
	JsonLdObject,
};
