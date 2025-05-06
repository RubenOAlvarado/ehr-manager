# Build stage
FROM node:20-alpine as builder

WORKDIR /usr/src/admin-site

COPY ./admin-site/package*.json ./
RUN npm install

COPY ./admin-site .
RUN npm run build

# Production stage (static server)
FROM nginx:alpine

COPY --from=builder /usr/src/admin-site/dist /usr/share/nginx/html/admin

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]