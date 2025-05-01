# build stage
FROM node:22.15.0-alpine AS builder

WORKDIR /usr/src/api

# Copy package.json and package-lock.json
COPY package.json pnpm-lock.yaml* ./
COPY prisma ./prisma

# Install app dependencies
RUN corepack enable && pnpm install --frozen-lockfile

# Generate Prisma client
RUN pnpm exec prisma generate

# Copy the rest of the app source code
COPY . .

# Build the app
RUN pnpm run build

# production stage
FROM node:22.15.0-alpine

WORKDIR /usr/src/api

# Copy just the built files
COPY --from=builder /usr/src/api/node_modules ./node_modules
COPY --from=builder /usr/src/api/package*.json ./
COPY --from=builder /usr/src/api/dist ./dist
COPY --from=builder /usr/src/api/prisma ./prisma

# Env variables
ENV NODE_ENV=production
ENV PORT=4000
ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ehr_manager?schema=public

# Expose the port
EXPOSE 4000

# Execute migrations and start the app
CMD pnpm exec prisma migrate deploy && pnpm exec prisma db seed && node dist/main.js