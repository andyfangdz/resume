#!/usr/bin/env bash

yarn
yarn global add pushstate-server
yarnpkg build
pushstate-server build &
node render.js
rm build/index.html

