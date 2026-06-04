# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies based on the lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source and build the production bundle
COPY . .
RUN npm run build

# Use a lightweight web server to serve the built assets
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
