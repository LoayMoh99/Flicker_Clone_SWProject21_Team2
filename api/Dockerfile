FROM node:12.13.0-alpine AS alpine

WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install 
COPY . .

EXPOSE 4000

# Default command
CMD ["npm", "run", "start-prod"]