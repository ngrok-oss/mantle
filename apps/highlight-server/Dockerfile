# Stage 1: Install dependencies and build workspace packages
FROM node:24-slim AS builder

RUN corepack enable pnpm
WORKDIR /app

# Copy workspace root files for dependency resolution
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy package.json files for all workspace members needed by the highlight server
COPY config/tsconfig/package.json config/tsconfig/
COPY packages/mantle/package.json packages/mantle/
COPY packages/mantle-server-syntax-highlighter/package.json packages/mantle-server-syntax-highlighter/
COPY apps/highlight-server/package.json apps/highlight-server/

RUN pnpm install --frozen-lockfile

# Copy source files needed to build workspace packages
COPY config/ config/
COPY packages/mantle/src/ packages/mantle/src/
COPY packages/mantle/tsconfig*.json packages/mantle/
COPY packages/mantle/tsdown.config.ts packages/mantle/
COPY packages/mantle-server-syntax-highlighter/src/ packages/mantle-server-syntax-highlighter/src/
COPY packages/mantle-server-syntax-highlighter/tsconfig.json packages/mantle-server-syntax-highlighter/
COPY packages/mantle-server-syntax-highlighter/tsdown.config.ts packages/mantle-server-syntax-highlighter/

# Build workspace packages (order matters: mantle first, then syntax highlighter)
RUN pnpm -F @ngrok/mantle run build && pnpm -F @ngrok/mantle-server-syntax-highlighter run build

# Deploy the highlight-server with only production dependencies
RUN pnpm deploy --legacy --filter=highlight-server --prod /deployed

# Stage 2: Precompile the server entrypoint so the runtime doesn't have to transpile TS
FROM oven/bun:1 AS bundler
WORKDIR /app

COPY --from=builder /deployed .
COPY apps/highlight-server/src/ src/

RUN bun build ./src/index.ts \
	--target=bun \
	--outfile=./dist/index.js

# Stage 3: Distroless Bun runtime (no shell, no package manager, minimal attack surface)
FROM oven/bun:1-distroless
WORKDIR /app

COPY --from=bundler /app/dist ./dist

EXPOSE 4444

CMD ["run", "dist/index.js"]
