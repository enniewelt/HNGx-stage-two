# API Documentation

Welcome to the documentation for the Person API. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on person records. You can use this API to manage information about individuals.

## Table of Contents

- [Getting Started](#getting-started)
  - [Base URL](#base-url)
  - [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
  - [Create a New Person](#create-a-new-person)
  - [Fetch Details of a Person](#fetch-details-of-a-person)
  - [Modify the Details of an Existing Person](#modify-the-details-of-an-existing-person)
  - [Remove a Person](#remove-a-person)
- [Request and Response Formats](#request-and-response-formats)
- [Known Limitations](#known-limitations)
- [Deployment](#deployment)

## Getting Started

### Base URL

The base URL for all API endpoints is:
https://stage2-naxq.onrender.com/api

### Authentication

This API does not require authentication for the provided endpoints. However, you may implement authentication and authorization as needed for your specific use case.

## API Endpoints

### Create a New Person

- **Endpoint**: POST /api
- **Description**: Adds a new person to the database.
- **Request Body**:
  `{
"name": "Your Name",
}`
- **Response**:
  `{
    "name": "Your Name"
    "_id": "id",
}`

### Fetch Details of a Person

- **Endpoint**: GET /people/:name
- **Description**: Retrieves details of a person by name.
- **Response**:
  `{
    "name": "Your Name",
    "_id": "id"
}`

### Modify the Details of an Existing Person

- **Endpoint**: PUT /people/:name
- **Description**: Modifies details of an existing person by name.
- **Request Body**:
  `{
    "name": "Your Name",
    "_id": "id"
}`
- **Response**:
  `{
    "name": "Your Name",
    "_id": "id"
}`

### Remove a Person

- **Endpoint**: DELETE /people/:name
- **Description**: Removes a person by name.
- **Response**:

A status code will return as 204 for a succussfully operation and return nothing as response

## Request and Response Formats

- Request bodies must be in JSON format.
- Response bodies are in JSON format and include the person's name and id

## Known Limitations

- The API does not currently support pagination for fetching multiple records.
- No authentication or authorization mechanisms are provided; consider adding these for security.
- Error handling and validation of request data are minimal; you may need to enhance this for production use.

## Deployment

- To deploy this API, you can use cloud hosting platforms like Render, AWS, or others. Ensure that you configure environment variables and MongoDB connection settings on your chosen hosting platform.
