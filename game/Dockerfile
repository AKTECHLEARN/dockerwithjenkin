FROM nginx:alpine

# Copy only the game directory content (not the folder itself)
# Use Nginx Alpine as the base image
FROM nginx:alpine

# Remove default nginx web content
RUN rm -rf /usr/share/nginx/html/*

# Copy only the required files
COPY game/index.html /usr/share/nginx/html/
COPY game/script.js /usr/share/nginx/html/
COPY game/style.css /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
