FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
RUN mkdir -p /usr/src/app/src
RUN mkdir -p /usr/src/app/lib
RUN mkdir -p /usr/src/app/lib/build
COPY ./src/ /usr/src/app/src
COPY ./lib/build /usr/src/app/lib/build

EXPOSE 8000
CMD [ "npm", "start" ]