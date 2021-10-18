# Set S.O. to image
FROM node:lts

ENV PORT 3000

# Create app directory
WORKDIR /app

# Copying source files
COPY . .

# Installing dependencies
COPY package*.json /app/
RUN npm install

# Building app
RUN npm run build
EXPOSE 3000

# Start application
CMD "npm" "run" "dev"

# docker build -t boilerplate . =====> BUILD A IMAGE
# docker run -it boilerplate bash ===> ENTER ON IMAGE
# docker run -it -p 3000:3000 boilerplate npm start ==> START A IMAGE