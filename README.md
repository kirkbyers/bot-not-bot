# Bot or Not Bot

An app for crowd sourcing data classification

## Getting Started

0) Install Docker and docker-compose

1) Set the env vars documented below

2) Run `docker-compose up`

## Roadmap

- Analytics

- Getting started instructions

- Deploy demo instance

- Support non "Bot/Not Bot" labels

- Support multi-labels 

- Support other email strategies

- UI
  - Tinderize UI with swipe gestures of bi-label data sets

## ENV Vars

### bonb

`NODE_ENV`: set to `production` to turn off verbose logging

`PORT`: defaults to 3000. Sets port for express app to listen to

`BASE_URL`: base url where application is hosted. In development that is "localhost:PORT"

`MAIL_ADDRESS`: Email address to show as "from" sender

`IMPORT_FILE_PATH`: File path from root to csv to import

<!-- `CLASSIFICATION_OPTS`: comma separated labels for users to classify data -->

### secret.env

Create a file named "secret.env" in the root with the following environment variables set

`MAIL_PASS`: Gmail password

`MAIL_USER`: Gmail User name

`JWT_SECRET`: Any string used to sign JSON Web Tokens

`COOKIE_SECRET`: Any string used to sign cookies for authentication
