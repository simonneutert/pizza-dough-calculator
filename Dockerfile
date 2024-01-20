FROM node:20-bookworm-slim AS build

RUN apt-get update && apt-get -q -y install \
    openjdk-17-jre-headless \
    curl

RUN curl -s https://download.clojure.org/install/linux-install-1.11.1.1435.sh | bash \
    && rm -rf /var/lib/apt/lists/*

RUN npm i -g shadow-cljs

WORKDIR /app
COPY shadow-cljs.edn /app/
COPY src /app/src
COPY public/index.html /app/public/index.html

RUN npx shadow-cljs release frontend

FROM nginx:1-alpine-slim

COPY --from=build /app/public/index.html /usr/share/nginx/html/index.html
COPY --from=build /app/public/js/main.js /usr/share/nginx/html/js/main.js
