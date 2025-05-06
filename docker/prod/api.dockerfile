# Build stage
FROM node:20-alpine as builder

WORKDIR /usr/src/api

COPY ../api/package*.json ./
RUN npm install -g pnpm && pnpm install

COPY ../api .

RUN pnpm run build

# Production stage
FROM node:20-alpine

WORKDIR /usr/src/api

COPY --from=builder /usr/src/api/package*.json ./
RUN npm install -g pnpm && pnpm install --prod

COPY --from=builder /usr/src/api/dist ./dist
COPY --from=builder /usr/src/api/prisma ./prisma

EXPOSE 4000

CMD ["node", "dist/main"]