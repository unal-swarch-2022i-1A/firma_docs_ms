FROM node:16

WORKDIR /firma_docs_ms

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 8080