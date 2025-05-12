# Build stage
FROM node:20-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /usr/src/api

COPY api/package.json api/pnpm-lock.yaml ./
COPY api/prisma ./prisma/

RUN pnpm install
RUN npx prisma generate

FROM base AS build

WORKDIR /usr/src/api

COPY api .
COPY --from=dependencies /usr/src/api/node_modules ./node_modules

RUN pnpm run build

RUN pnpm build
RUN pnpm prune --prod

FROM base AS deploy

WORKDIR /usr/src/api
COPY --from=build /usr/src/api/dist/ ./dist/
COPY --from=build /usr/src/api/node_modules ./node_modules

CMD [ "node", "dist/src/main.js" ]