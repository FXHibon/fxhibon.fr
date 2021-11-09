FROM node:17

ADD . /app

WORKDIR /app

RUN npm install -g bower && npm install

EXPOSE 9000

CMD ["npm", "start"]
