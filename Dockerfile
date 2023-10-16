FROM node:20-alpine AS build

RUN apk update \
  && apk upgrade \
  && apk add curl openjdk11-jre-headless

RUN curl -s https://download.clojure.org/install/linux-install-1.11.1.1413.sh | ash \
    && rm -rf /var/lib/apt/lists/*

RUN npm i -g shadow-cljs

WORKDIR /app
COPY shadow-cljs.edn /app/
COPY src /app/src
COPY public/index.html /app/public/index.html

RUN npx shadow-cljs release frontend

FROM nginx:1-alpine

COPY --from=build /app/public/index.html /usr/share/nginx/html/index.html
COPY --from=build /app/public/js/main.js /usr/share/nginx/html/js/main.js
