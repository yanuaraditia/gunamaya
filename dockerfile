FROM oven/bun:1.3.11-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image

COPY . .
# Building process
RUN bun --bun install && bun --bun run build

WORKDIR /app

ENV APP_PORT=3000
ENV NITRO_PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

ENTRYPOINT ["bun", "./.output/server/index.mjs"]