# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the source code
COPY . .

# Set environment variable for port
ENV PORT=3000

# Expose port 3000 for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
