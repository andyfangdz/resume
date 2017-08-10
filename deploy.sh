#!/usr/bin/env bash
set -e

npm install
npm run build
./node_modules/pushstate-server/bin/pushstate-server build &
node render.js
rm build/index.html
