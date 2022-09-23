FROM node:16-buster AS build

RUN apt-get update && apt-get -q -y install \
    openjdk-11-jre-headless \
    curl 

RUN curl -s https://download.clojure.org/install/linux-install-1.11.1.1165.sh | bash \
    && rm -rf /var/lib/apt/lists/*

RUN npm i -g shadow-cljs

WORKDIR /app
COPY shadow-cljs.edn /app/
COPY src /app/src
COPY public/index.html /app/public/index.html

RUN npx shadow-cljs release frontend
COPY public/js/main.js /app/public/js/main.js

FROM nginx:1-alpine

COPY --from=build /app/public/ /usr/share/nginx/html