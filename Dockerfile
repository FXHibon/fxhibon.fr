FROM node:7

LABEL MAINTAINER "François-Xavier Hibon <hibonfx@gmail.com>"

ADD . /app

WORKDIR /app

RUN npm install -g bower && npm install && bower install --allow-root

EXPOSE 9000

CMD ["npm", "start"]