# base image
FROM node:16-slim as dependencies
WORKDIR /src/balasolu
COPY ./src/balasolu/package.json ./src/balasolu/package-lock.json* ./
RUN npm ci


# builder for nextjs project
FROM node:16-slim AS builder
COPY ./src/balasolu ./src/balasolu
COPY --from=dependencies ./src/balasolu/node_modules ./src/balasolu/node_modules
WORKDIR /src/balasolu
RUN npm run build


# production for nextjs project
FROM node:16-slim as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder ./src/balasolu/public ./public
COPY --from=builder ./src/balasolu/.next/standalone ./
COPY --from=builder ./src/balasolu/.next/static ./.next/static
CMD ["node", "server.js"]