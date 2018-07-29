# Usage:
#
#    Build image:
#    docker build -t text-compare .
#
#    Run image (on localhost:8080):
#    docker run --name text-compare -p 8080:80 text-compare
#
#    Run image as virtual host (read more: https://github.com/jwilder/nginx-proxy):
#    docker run -e VIRTUAL_HOST=text-compare.your-domain.com --name text-compare text-compare

# Stage 1, based on Node.js, to build and compile Angular

FROM node:9.4.0-alpine as builder

COPY package.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run build:aot:prod

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.13.12-alpine

COPY ./config/nginx-custom.conf /etc/nginx/conf.d/default.conf
                                  
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
