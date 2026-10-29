# Lightweight production web server
FROM nginx:alpine

# Copy website files to default nginx HTML directory
COPY . /usr/share/nginx/html

# Expose standard web port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

