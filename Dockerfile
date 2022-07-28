FROM node:18.6-alpine3.16
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then yarn; \
    else yarn --production=true; \
    fi
COPY . .
ENV PORT=8080
EXPOSE $PORT
CMD node index.js