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

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (https://nodejs.org/)
- MongoDB installed and running (https://docs.mongodb.com/manual/installation/)

### Installation

Clone the repository:

    git clone https://github.com/yourusername/person-api.git
    cd person-api


    - Install dependencies:

        `npm install`

    - Configure environment variables (optional):

        You can set environment variables for MongoDB connection, but the default connection is mongodb://localhost/yourdb. If you need to configure the database URL, create a .env file in the project root and set MONGODB_URI:
        `MONGODB_URI=mongodb://your-mongodb-uri/yourdb`

    - Start the server:

        `npm start`

    Your API should now be running at http://localhost:3000.

## API Endpoints

- Adding a New Person

Endpoint: POST /api
Request Body:

    `{

    "name" : "Your Name"

    }`

- Fetching details of a person

Endpoint: GET /api/:name

- Update a Person
  Endpoint: PUT /api/:name
  Request Body:

  `{
"name" : "Your Name"
}`

- Removing a Person
  Endpoint: DELETE /api/:name
  Response:
