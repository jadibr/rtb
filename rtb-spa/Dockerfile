FROM node:current-alpine as builder

WORKDIR /rtb-spa
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /rtb-spa/dist/rtb-spa/browser .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]