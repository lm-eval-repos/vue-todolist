#!/bin/bash

# Create React app structure
echo "Setting up React project structure..."

# Copy package.json
cp package-react.json package.json

# Copy source files
rm -rf src
cp -r src-react src

# Copy public files
rm -rf public
cp -r public-react public

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the development server
echo "Starting React development server..."
npm start
