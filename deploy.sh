#!/bin/bash
# Deployment script for Futuronic Client

echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "Build successful!"
  echo "Files are ready in the 'dist' folder"
  echo "You can now upload the contents of the 'dist' folder to your hosting provider"
else
  echo "Build failed!"
  exit 1
fi

echo "Deployment preparation complete."
echo "Upload the contents of the 'dist' folder to your web server."