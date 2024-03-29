# Use an official Node.js runtime as the base image

FROM node:16
# Set the working directory within the container
WORKDIR /dev-wheels

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Build the React app
EXPOSE 3000

CMD ["npm", "start"]
#new commit for git webhooks and jenkins trigger 5.
