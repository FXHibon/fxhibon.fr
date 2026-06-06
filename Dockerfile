# Build stage
FROM node:26-alpine AS build

WORKDIR /app

# Copy package config files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the production application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
