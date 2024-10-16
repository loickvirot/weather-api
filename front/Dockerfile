FROM node:22.2.0-alpine3.19 AS build_image

# Install right NPM version
RUN npm i -g npm@10.9.0

# Copy files
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install && npm run build

# ===============================================
FROM node:22.2.0-alpine3.19

ENV APP_ENV=production
ENV NUXT_PUBLIC_API_BASE_URL=

WORKDIR /app

COPY --from=build_image /app/.output /app

EXPOSE 3000

CMD ["node", "server/index.mjs"]