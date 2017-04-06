#!/usr/bin/env bash

yarn
yarnpkg build
./node_modules/pushstate-server/bin/pushstate-server build &
node render.js
rm build/index.html
