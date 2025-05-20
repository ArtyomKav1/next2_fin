

FROM node:18-alpine AS builder

WORKDIR /app


RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install
RUN pnpm build


FROM node:18-alpine AS runner

WORKDIR /app


COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public


EXPOSE 3000

CMD ["node", "server.js"]
