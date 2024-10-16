# Use Node.js base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Install development dependencies
RUN npm install --save-dev nodemon typescript ts-node

# Build the TypeScript application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application with Nodemon
CMD ["npx", "nodemon", "dist/index.js"]
