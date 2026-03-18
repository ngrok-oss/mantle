# Use Node.js 24 LTS (Debian Slim)
FROM node:24-slim AS base

# Base dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libc6 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user early
RUN groupadd nodejs && useradd --gid nodejs --uid 1001 --create-home ngrok

# Set working directory
WORKDIR /app

ENV COREPACK_HOME=/tmp/corepack-cache
ENV XDG_CACHE_HOME=$COREPACK_HOME
ENV PNPM_STORE_DIR=/root/.pnpm-store

RUN mkdir -p $COREPACK_HOME \
    && chmod -R 777 $COREPACK_HOME

# Enable corepack for pnpm
RUN npm install --global corepack@latest && corepack enable pnpm

# Pruner stage - generates pruned monorepo
FROM base AS pruner

# Copy only what's needed for pruning
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps apps
COPY packages packages
COPY config config

# Install turbo globally for prune command (avoids installing all root devDeps)
# Extract version from package.json to stay in sync
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    apt-get update && apt-get install -y --no-install-recommends jq && \
    TURBO_VERSION=$(jq -r '.devDependencies.turbo' package.json) && \
    corepack install && npm install -g turbo@$TURBO_VERSION && \
    apt-get remove -y jq && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*

# Use BuildKit secret for TURBO_TOKEN (fixes security warnings)
RUN --mount=type=secret,id=TURBO_TOKEN \
    --mount=type=secret,id=TURBO_TEAM \
    export TURBO_TOKEN=$(cat /run/secrets/TURBO_TOKEN || echo "") && \
    export TURBO_TEAM=$(cat /run/secrets/TURBO_TEAM || echo "") && \
    export DO_NOT_TRACK=1 && \
    export TURBO_TELEMETRY_DISABLED=1 && \
    export VERCEL_TELEMETRY_DISABLED=1 && \
    turbo prune www --docker

# Install dependencies separately for caching
FROM base AS installer
WORKDIR /app
COPY --from=pruner /app/out/json/ ./

# Enable and install pnpm via corepack (uses the <root>/package.json#packageManager field)
RUN yes | corepack enable pnpm \
    && yes | corepack install

# Install ALL dependencies (devDeps needed for build)
# Note: turbo prune may generate incomplete lockfile, so we skip frozen-lockfile in Docker
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --prod=false

# Copy full workspace for build
COPY --from=pruner /app/out/full/ ./

# Build with secrets
RUN --mount=type=secret,id=TURBO_TOKEN \
    --mount=type=secret,id=TURBO_TEAM \
    export TURBO_TOKEN=$(cat /run/secrets/TURBO_TOKEN || echo "") && \
    export TURBO_TEAM=$(cat /run/secrets/TURBO_TEAM || echo "") && \
    export NODE_ENV=production && \
    export DO_NOT_TRACK=1 && \
    export TURBO_TELEMETRY_DISABLED=1 && \
    pnpm turbo run build --filter=www...

# Prune devDependencies after build to slim down the runtime image
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    CI=true pnpm install --prod --ignore-scripts \
    && pnpm store prune

# Remove build-time-only files that aren't needed at runtime
RUN find . -name "*.ts" ! -name "*.d.ts" -delete 2>/dev/null; \
    find . -name "*.tsx" -delete 2>/dev/null; \
    find . -name "*.map" -delete 2>/dev/null; \
    rm -rf .turbo; \
    true

# Set up the runtime environment
FROM base AS runner
WORKDIR /app

# Copy only the pruned production workspace
COPY --from=installer --chown=ngrok:nodejs /app .

USER ngrok

# Set the working directory to the www app
WORKDIR /app/apps/www

# Expose the port
EXPOSE 3000

ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "run", "serve"]
