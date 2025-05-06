FROM nginx:alpine
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=admin-builder /usr/src/admin-site/dist /usr/share/nginx/html/admin
COPY --from=patients-builder /usr/src/patients-site/dist /usr/share/nginx/html/patients
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]