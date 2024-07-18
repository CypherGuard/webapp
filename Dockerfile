FROM node:22-alpine3.18

WORKDIR /webapp
COPY . .

RUN yarn install

CMD yarn dev