# highlight-server

`highlight-server` is a small Bun + Hono service that turns source code into Mantle-highlighted HTML.

It is intended for server-side syntax highlighting use cases such as rendering code snippets from user input in the ngrok dashboard traffic inspector.

## What It Does

- preloads the shared Shiki highlighter on startup
- exposes a readiness-aware `GET /health` endpoint
- accepts `POST /` requests with code and language input
- returns normalized code, resolved language metadata, and highlighted HTML
- enforces a request body size limit (streaming + Content-Length pre-check)
- aborts highlight requests that exceed a 5-second timeout

## Local Development

Install workspace dependencies from the repo root:

```sh
pnpm install
```

Run the server:

```sh
PORT=4444 bun run apps/highlight-server/src/index.ts
```

Or use the package script:

```sh
pnpm --filter highlight-server run dev
```

## API

### `GET /health`

Readiness probe for the highlighter preload.

- `200 {"status":"ok"}`: ready to serve highlight requests
- `503 {"status":"starting"}`: process is up, highlighter still loading
- `500 {"status":"error"}`: preload failed

### `POST /`

Request body:

```json
{
	"code": "const sum = (a, b) => a + b;",
	"language": "typescript",
	"highlightLines": "1",
	"lineNumberStart": 1,
	"showLineNumbers": true
}
```

Required fields:

- `code: string`
- `language: string`

Optional fields:

- `highlightLines`
- `lineNumberStart`
- `showLineNumbers`

Example:

```sh
curl -X POST http://127.0.0.1:4444/ \
  -H 'content-type: application/json' \
  -d '{
    "code": "const sum = (a, b) => a + b;",
    "language": "typescript",
    "showLineNumbers": true
  }'
```

Response shape:

```json
{
	"code": "const sum = (a, b) => a + b;",
	"highlightLines": [],
	"html": "<span class=\"mantle-code-line\">...</span>",
	"language": "typescript",
	"lineNumberStart": 1,
	"showLineNumbers": true
}
```

Common error responses:

- `400 {"message":"Invalid JSON body"}`
- `400 {"message":"Missing required fields: code, language"}`
- `413 {"message":"Request body too large"}`
- `500 {"message":"Failed to highlight code"}`
- `504 {"message":"Highlight timed out"}` — request exceeded the 5-second highlight timeout

## Configuration

Environment variables:

- `PORT`
  Default: `4444`
- `CORS_ORIGINS`
  Comma-separated allowlist. If unset, CORS is disabled (no browser access).
  Example: `https://mantle.ngrok.com,https://dashboard.ngrok.com`
- `MAX_REQUEST_BYTES`
  Maximum accepted request body size in bytes.
  Default: `1048576` (1 MiB)

## Docker

Build the image from the repo root:

```sh
docker build -t highlight-server -f apps/highlight-server/Dockerfile .
```

Run it:

```sh
docker run --rm -p 4444:4444 highlight-server
```

The Docker image:

- builds workspace packages in a Node-based builder stage
- bundles the server entrypoint with Bun
- ships a distroless Bun runtime image
- only copies the final bundled app into the runtime stage

## Notes

- Throughput is primarily limited by Shiki highlighting, not Hono request handling.
- Repeated identical highlight requests benefit from the server-side LRU cache in `@ngrok/mantle-server-syntax-highlighter`.
- For production, run multiple replicas and keep request payloads bounded.
