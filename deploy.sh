#!/usr/bin/env bash

npm install
npm install -g pushstate-server
npm run build
pushstate-server build &
node render.js
rm build/index.html