# Pillar Product services

## Description
This is a Node.js project designed to provide a scalable and efficient solution for web applications. It includes essential configurations and APIs to streamline development.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Scripts](#scripts)

## Installation
```sh
# Clone the repository
git clone https://github.com/angel-sm/pillar-screen-test-backend.git
cd pillar-screen-test-backend

# Install dependencies
npm install
```

## Usage
```sh
# Build application
dcocker compose build

# Start the application
dcocker compose up

# Run in development mode
npm run start:dev
```

## Configuration
Describe any necessary environment variables or configurations required for the project.
Example:
```sh
PORT=3000
NODE_ENV=production
DATABASE_URL=mongodb://localhost:27017/mydatabase
```

## API Reference
If your project has an API, document the available endpoints.
```sh
POST   /products - Create one product    
GET    /products/search?page=&limit= - Search products   
PATCH  /products/product/:id - Update product properties
DELETE /products/:id - Delete one product
```

## Scripts
List useful scripts that can be run using npm.
```sh
npm run start    # Start the application
npm run start:dev      # Run in development mode
npm run build    # Build the project
```
