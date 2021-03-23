FROM nginx:1.19.8-alpine

COPY ./dist/ /usr/share/nginx/html/