FROM node:16

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# RUN npm ci --only=production

# Bundle app source
COPY . .