FROM node:lts-alpine AS builder

WORKDIR /app
COPY . .

RUN corepack enable && pnpm install && pnpm generate && rm -rf node_modules

FROM ghcr.io/static-web-server/static-web-server:2

WORKDIR /app

COPY --from=builder /app/.output/public ./

ENV SERVER_ROOT=/app

EXPOSE 80
ENTRYPOINT ["/static-web-server"]
