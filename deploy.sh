#!/usr/bin/env bash

npm install
npm run build
./node_modules/pushstate-server/bin/pushstate-server build &
node render.js
rm build/index.html
