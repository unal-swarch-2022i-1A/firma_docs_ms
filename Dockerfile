FROM node:16

LABEL org.opencontainers.image.source https://github.com/unal-swarch-2022i-1A/firma_docs_ms

# Create app directory
WORKDIR /usr/src/app

COPY ./src ./src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN yarn install

# Install TS compiler
RUN yarn global add typescript
COPY tsconfig.json ./
RUN npx tsc

# Set the container port
ENV PORT=8091

EXPOSE 8091
# Launch:
CMD ["yarn", "run", "start"]