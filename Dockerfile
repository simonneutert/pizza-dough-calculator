FROM node:22-bookworm-slim AS build

RUN apt-get update && apt-get -q -y install \
    wget \
    apt-utils \
    rlwrap \
    apt-transport-https \
    gpg \
    curl

RUN wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | gpg --dearmor | tee /etc/apt/trusted.gpg.d/adoptium.gpg > /dev/null
RUN echo "deb https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list
RUN apt-get update && apt install -y temurin-23-jdk

RUN curl -s https://download.clojure.org/install/linux-install-1.12.0.1530.sh | bash \
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
