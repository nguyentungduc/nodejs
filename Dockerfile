# Use an official Node.js runtime as a parent image
FROM node:18.15.0-alpine as base

# Set the working directory to /app
WORKDIR /node/app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./
COPY ./start.sh ./

# Install dependencies
RUN apk update && apk add bash

# Copy the rest of the application code to the working directory
COPY ./ .

# Expose port 3000 for the Node.js application to listen on
EXPOSE 3000

# Set the cammand to start the application
CMD ["./start.sh"]
