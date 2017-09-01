#!/usr/bin/env bash
set -e

yarn run build
./node_modules/.bin/serve -s build -p 9000 &
node render.js
rm build/index.html
