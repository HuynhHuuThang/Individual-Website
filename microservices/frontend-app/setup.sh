#!/bin/bash

# Clean install
echo "Cleaning node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Install dependencies
echo "Installing dependencies..."
npm install --no-fund --no-audit

# Check for deprecated packages
echo "Checking for deprecated packages..."
npm ls | grep -i deprecated

echo "Setup complete! You can now run 'npm start' to start the development server." 