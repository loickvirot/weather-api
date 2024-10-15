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

WORKDIR /app

COPY --from=build_image /app/package.json /app
RUN npm install --omit=dev

COPY --from=build_image /app/dist /app

EXPOSE 3000

CMD ["node", "main.js"]