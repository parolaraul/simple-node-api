# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Typescript code
RUN npm run build

# Expose the port on which your Node.js application runs (change it to your desired port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
