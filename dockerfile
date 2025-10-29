# Use a small Node LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first (better caching)
COPY package*.json ./

# Install only production deps (change flag if you want dev deps too)
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose the port your app uses
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
