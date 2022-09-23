FROM clojure:tools-deps-1.11.1.1113-slim-buster AS build

WORKDIR /app
COPY deps.edn /app/
COPY src /app/src
RUN clj -M -m cljs.main \
    --optimizations advanced \
    -c pizza.core

FROM nginx:1-alpine

COPY --from=build /app/out/main.js /usr/share/nginx/html/out/main.js
COPY index.html /usr/share/nginx/html/