FROM node:current-alpine as builder

WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:current-alpine

WORKDIR /usr/src/linkup-platform-api

COPY package*.json ./
COPY --from=builder build/node_modules ./node_modules
COPY --from=builder build/dist .

EXPOSE 3000
CMD [ "node", "./main.js" ]