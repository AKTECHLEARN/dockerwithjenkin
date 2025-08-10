# Use Nginx base image
FROM nginx:latest

# Maintainer info (optional)
LABEL maintainer="Ashutosh Singh <ashutosh@example.com>" \
      description="Nginx container hosting Tic Tac Toe game"

# Set working directory for Nginx HTML
WORKDIR /usr/share/nginx/html

# Remove default Nginx index file
RUN rm -rf ./*

# Copy game files into container
# (You will need to have index.html, styles.css, script.js in the repo)
COPY game/ .

# Expose Nginx default port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
