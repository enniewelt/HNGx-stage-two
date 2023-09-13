# Person API

This is a simple REST API for managing information about people. It provides a basic CRUD (Create, Read, Update, Delete) operations for a person name. The API is built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create a New Person](#create-a-new-person)
  - [Fetch Details of a Person](#fetch-details-of-a-person)
  - [Modify the Details of an Existing Person](#modify-the-details-of-an-existing-person)
  - [Remove a Person](#remove-a-person)
- [Testing](#testing)
- [Deployment](#deployment)
- [Documentation](#documentation)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (https://nodejs.org/)
- MongoDB installed and running (https://docs.mongodb.com/manual/installation/)

### Installation

Clone the repository:

- git clone https://github.com/enniewelt/HNGx-stage-two.git

  - cd person-api

- Install dependencies:

        `npm install`

- Configure environment variables (optional):

  - You can set environment variables for MongoDB connection, but the default connection is mongodb://localhost/yourdb. If you need to configure the database URL, create a .env file in the project root and set MONGODB_URI:
    `MONGODB_URI=mongodb://your-mongodb-uri/yourdb`

- Start the server:

        `npm start`

- Your API should now be running at http://localhost:3000.

## API Endpoints

### Create a New Person

- **Endpoint**: POST https://light-tiara-newt.cyclic.app/api
- **Request Body**:
  `{
    "name": "John Doe",    
}`
- **Response**:
  `{
    "name": "John Doe",
    "_id": "id"
}`

### Fetching details of a person

- **Endpoint**: GET https://light-tiara-newt.cyclic.app/api/id

- **Response**:
  `{
    "name": "Your Name"
    "_id": "id",
}`

### Update a Person

- **Endpoint**: PUT https://light-tiara-newt.cyclic.app/api/id
- **Request Body**:
  `{
    "name": "Your Name"
}`
- **Response**:
  `{
    "name": "Your Name"
    "_id": "id",
}`

### Removing a Person

- **Endpoint**: DELETE https://light-tiara-newt.cyclic.app/api/id
- **Response**:
  A status code will return as 204 for a succussfully operation and return nothing as response

## Testing

- To test the API, you can use a tool like Postman

## Deployment

- To deploy the API, you can use cloud platforms like Render or AWS. Be sure to configure your environment variables and MongoDB connection settings on your hosting platform.

## Documentation

- For more detailed information on how to use the API, view the full [API documentation](https://github.com/enniewelt/HNGx-stage-two/blob/master/DOCUMENTATION.md).
