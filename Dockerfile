FROM node:18.15-alpine

#
# Set env
#
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
ARG PROJECT_ROOT=/hub

ARG REGION=ap-northeast-2
ENV REGION=$REGION

#
# Set Working directory
#
WORKDIR ${PROJECT_ROOT}

#
# Copy project files
#
COPY . ${PROJECT_ROOT}

#
# Install packages
#
RUN npm install --production=false
RUN npm run build

#
# Run application
#

EXPOSE 8081

ENV PORT=8081
CMD node dist/app.js
