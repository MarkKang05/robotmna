FROM node:12.18
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
EXPOSE ${PORT}
CMD ["npm", "start"]
