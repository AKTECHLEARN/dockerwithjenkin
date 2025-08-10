# Use the official Nginx base image
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy Tic Tac Toe game files into Nginx web root
COPY game/index.html /usr/share/nginx/html/
COPY game/style.css /usr/share/nginx/html/
COPY game/style.js /usr/share/nginx/html/


# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
