FROM node:20

WORKDIR /myapp

COPY . .

RUN npm i 

RUN npm run dev