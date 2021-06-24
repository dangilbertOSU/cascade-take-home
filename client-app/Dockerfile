FROM node:latest

EXPOSE 1234

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install

ADD . .

CMD ["npm", "start"]