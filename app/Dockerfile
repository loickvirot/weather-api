FROM node:22.2.0-alpine3.19

# Install right NPM version
RUN npm i -g npm@10.8.1

# Copy files
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install && npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]