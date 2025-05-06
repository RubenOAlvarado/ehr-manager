# Build stage
FROM node:20-alpine as builder

WORKDIR /usr/src/patients-site

COPY ./patients-site/package*.json ./
RUN npm install

COPY ./patients-site .
RUN npm run build

# Production stage (static server)
FROM nginx:alpine

COPY --from=builder /usr/src/patients-site/dist /usr/share/nginx/html/patients

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]