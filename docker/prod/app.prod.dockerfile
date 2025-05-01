# build stage
FROM node:22.15.0-alpine AS builder
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install app dependencies
RUN npm ci --only=production

# Copy the rest of the app source code
COPY . .

# Build the app
RUN npm run build

# ---

# production stage
FROM node:22.15.0-alpine

WORKDIR /usr/src/app

# Copy just the necessary files from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/next.config.js ./

# Env variables for production
ENV NODE_ENV=production
ENV PORT=4000

# Expose the port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]