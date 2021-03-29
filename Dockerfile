FROM node:alpine
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
ENTRYPOINT ["yarn", "start"]