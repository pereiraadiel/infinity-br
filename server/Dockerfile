FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
COPY .docker.env ./.env

RUN yarn db:generate
RUN yarn db:migrate

EXPOSE 3000