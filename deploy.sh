#!/usr/bin/env bash
set -e

yarn run build
./node_modules/.bin/serve build &
node render.js
rm build/index.html
