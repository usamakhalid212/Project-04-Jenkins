FROM nginx:alpine

LABEL maintainer="Usama Khalid"

COPY website/ /usr/share/nginx/html/

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
