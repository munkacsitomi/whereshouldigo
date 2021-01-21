# base image
FROM node:12.19.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm i \
    && npm i -g @vue/cli@4.5.9 \
    && apk del build-dependencies

# start app
CMD ["npm", "run", "serve"]