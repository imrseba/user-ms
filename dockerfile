FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .env
EXPOSE 3000
CMD [ "npm", "run", "start" ]
