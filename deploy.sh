#!/bin/bash

# Install dependencies
npm install

# Build the application
npm run build

# Start the server
node .output/server/index.mjs 