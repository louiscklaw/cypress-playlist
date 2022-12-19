#!/usr/bin/env bash

yarn -d 

./node_modules/mocha/bin/mocha.js  --reporter mochawesome
