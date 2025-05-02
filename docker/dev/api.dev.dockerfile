FROM node:22.15.0-alpine

WORKDIR /usr/src/api

# Copy package files
COPY package.json pnpm-lock.yaml* ./
COPY prisma ./prisma

# Install dependencies with development packages
RUN corepack enable && pnpm install

# Generate Prisma client
RUN pnpm exec prisma generate

# Copy the rest of the app source code
COPY . .

# Env variables for development
ENV NODE_ENV=development
ENV PORT=4000
ENV DATABASE_URL=postgres://prisma.ulabijgcrhzqudgtkqvp:xif17BzKKDJRAI8H@aws-0-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x

# Expose the port
EXPOSE 4000

# Start the app in development mode with hot reload
CMD pnpm run start:dev
