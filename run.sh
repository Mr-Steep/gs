#!/bin/bash

# Remove node_modules, .next, and package-lock.json
pm2 stop all
sleep 2

rm -rf node_modules .next
sleep 2
sudo kill -9 $(sudo lsof -t -i:3000)
sleep 2


# Build and run the app
npm i
sleep 2
#next build
npm run build
sleep 2
npm start
sleep 2
pm2 start all
