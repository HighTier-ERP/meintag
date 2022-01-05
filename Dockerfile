FROM alpine/socat

RUN apk update && apk upgrade && apk add bash && apk add --no-cache curl

RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash

WORKDIR /usr/src/hasura

COPY . .

RUN chmod +x ./start.sh

CMD "./start.sh"
