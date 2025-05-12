FROM node:20-alpine AS admin-builder
WORKDIR /usr/src/admin-site
COPY admin-site/package*.json ./
RUN npm install
COPY admin-site .
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ARG VITE_API_URL
ARG VITE_API_VERSION
RUN npm run build && \
    mkdir -p /usr/src/build/admin && \
    cp -R ./dist/admin/* /usr/src/build/admin/

FROM node:20-alpine AS patients-builder
WORKDIR /usr/src/patients-site
COPY patients-site/package*.json ./
RUN npm install
COPY patients-site .
ARG VITE_API_URL
ARG VITE_API_VERSION
RUN npm run build && \
    mkdir -p /usr/src/build/patients && \
    cp -R ./dist/patients/* /usr/src/build/patients/

# Final stage: Caddy
FROM caddy:alpine
# Copy build from sites
COPY --from=admin-builder /usr/src/build/admin /usr/share/caddy/admin
COPY --from=patients-builder /usr/src/build/patients /usr/share/caddy/patients
# Caddy config
COPY docker/caddy/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80