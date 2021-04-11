# Usage:
#
#    Build image:
#    docker build -t jojozhuang/text-compare-angular .
#
#    Run image (on localhost:12010):
#    docker run -d --name text-compare -p 12010:80 jojozhuang/text-compare-angular
#
#    Run image as virtual host (read more: https://github.com/nginx-proxy/nginx-proxy):
#    docker run -e VIRTUAL_HOST=text-compare.your-domain.com --name text-compare jojozhuang/text-compare-angular

# Stage 1, based on Node.js, to build and compile Angular

FROM node:15.12.0-alpine as builder

WORKDIR /ng-app

COPY package*.json tsconfig*.json angular.json ./
COPY ./src ./src

RUN npm ci --quiet && npm run build-nas

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.19.8-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html