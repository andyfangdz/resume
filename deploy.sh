#!/usr/bin/env bash
set -euxo pipefail

yarn run build
./node_modules/.bin/serve -s build -p 9000 &

while ! nc -z localhost 9000; do
  echo "server not ready yet, sleeping 1 second"
  sleep 1
done

node render.js
rm build/index.html
