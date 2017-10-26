FROM node:8.7-alpine

ENV HOME=/app NPM_CONFIG_LOGLEVEL=warn
COPY package.json $HOME/

WORKDIR $HOME
RUN npm install
COPY . $HOME