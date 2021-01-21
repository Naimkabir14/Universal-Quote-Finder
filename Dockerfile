#image
FROM node:14

# directory to hold the application code
WORKDIR /usr/src/app 

# Wildcard is used to copy both package files into the working dir
COPY package*.json ./

# Install all dependencies
RUN npm install

# bundling app's source code
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]









