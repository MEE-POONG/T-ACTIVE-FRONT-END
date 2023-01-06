FROM node:18-alpine

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
RUN yarn build
COPY . .

CMD ["yarn", "start"]
