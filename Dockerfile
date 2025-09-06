# syntax=docker/dockerfile:1
# escape=\

FROM oven/bun:distroless AS builder

WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM oven/bun:distroless AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 80/tcp
ENV NODE_ENV=production
CMD bun run start