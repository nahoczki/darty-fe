# Build app
FROM node:22-alpine As build
WORKDIR /usr/src/app
COPY package*.json package-lock.json ./
RUN npm ci
COPY ./ ./
RUN npm run build

FROM nginx:stable-alpine as production

# Setup Nginx
RUN rm -rf /usr/share/nginx/html/*
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"] 