#This is dockerfile for server
FROM node:slim

ENV PORT 3000

WORKDIR /app/server

COPY package.json .
RUN npm install
EXPOSE 3000

COPY . .
CMD [ "node","index.js" ]