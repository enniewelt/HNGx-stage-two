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
- [Sample Usage](#sample-usage)
- [Known Limitations](#known-limitations)
- [Deployment](#deployment)

## Getting Started

### Base URL

The base URL for all API endpoints is:
https://light-tiara-newt.cyclic.app/api

### Authentication

This API does not require authentication for the provided endpoints. However, you may implement authentication and authorization as needed for your specific use case.

## API Endpoints

### Create a New Person

- **Endpoint**: https://light-tiara-newt.cyclic.app/api
- **HTTP Method**: POST
- **Description**: Adds a new person to the database.
- **Request Body**:

```json
{
  "name": "Your Name"
}
```

- **Response Format**:

```json
{
  "_id": 1,
  "name": "Your Name",
  "createdAt": "2023-09-13T13:09:51.705Z",
  "updatedAt": "2023-09-13T13:09:51.705Z"
}
```

- **status Codes**:
  - 201 Created: Person Created.
  - 400 Bad Request: Validation failed

### Fetch Details of a Person

- **Endpoint**: https://light-tiara-newt.cyclic.app/api/id
- **HTTP Method**: GET
- **Description**: Retrieves details of a person by Id.
- **Response Format**:

```json
{
  "_id": 1,
  "name": "Your Name",
  "createdAt": "2023-09-13T13:09:51.705Z",
  "updatedAt": "2023-09-13T13:09:51.705Z"
}
```

- **status Codes**:
  - 200 Ok: Person Found.
  - 404 Not Found: Person not found

### Modify the Details of an Existing Person

- **Endpoint**: https://light-tiara-newt.cyclic.app/api/id
- **HTTP Method**: PUT
- **Description**: Modifies details of an existing person by Id.
- **Request Body**:

```json
{
  "_id": 1,
  "name": "Updated Name",
  "age": 45
}
```

- **Response Format**:

```json
{
  "_id": 1,
  "name": "Updated Name",
  "age": 45,
  "createdAt": "2023-09-13T13:09:51.705Z",
  "updatedAt": "2023-10-12T23:10:51.705Z"
}
```

- **status Codes**:
  - 200 Ok: Person Updated.
  - 404 Not Found: Person not found.
  - 400 Bad Request: Valdation failed.

### Remove a Person

- **Endpoint**: https://light-tiara-newt.cyclic.app/api/id
- **HTTP Method**: DELETE
- **Description**: Removes a person by Id.
- **Response Format**:

- **status Codes**:
  - 204 No Content: Nothing will be displayed
  - 404 Not Found: Person not found.

## Request and Response Formats

- Request bodies must be in JSON format.
- Response bodies are in JSON format and include the person's name and id

## Sample Usage

### Create a New Person

- **Request**:

```http
POST https://light-tiara-newt.cyclic.app/api
Content-Type: application/json

{
  "name": "Dash Ebony"
}
```

- **Response**:

```http
Status Code: 201 Created
Content-Type: application/json

{
  "id": 2,
  "name": "Your Name",
  "createdAt": "2023-09-13T13:09:51.705Z",
  "updatedAt": "2023-09-13T13:09:51.705Z",
}
```

### Fetch Details of a Person

- **Request**:

```http
GET https://light-tiara-newt.cyclic.app/api/2
```

- **Response**:

```http
Status Code: 200 OK
Content-Type: application/json

{
  "id": 2,
  "name": "Your Name",
  "createdAt": "2023-09-13T13:09:51.705Z",
  "updatedAt": "2023-09-13T13:09:51.705Z",

}
```

### Update Details of an Existing Person

- **Request**:

```http
PUT https://light-tiara-newt.cyclic.app/api/2


{
  "name": "Updated Name",
  "age": 30
}
```

- **Response**:

```http
Status Code 200 OK
Content-Type: application/json

{
  "id": 2,
  "name": "Updated Name",
  "age": 30,
  "createdAt": "2023-09-13T13:09:51.705Z",
  "updatedAt": "2023-10-12T23:10:51.705Z",
}
```

### Remove a Person

- **Request**:

```http
DELETE https://light-tiara-newt.cyclic.app/api/2
```

- **Response**:

```http
Status Code: 204 No Content
Content-Type: application/json

return an empty response for success
```

## Known Limitations

- The API does not currently support pagination for fetching multiple records.
- No authentication or authorization mechanisms are provided; consider adding these for security.
- Error handling and validation of request data are minimal; you may need to enhance this for production use.

## Deployment

- To deploy this API, you can use cloud hosting platforms like Render, AWS, or others. Ensure that you configure environment variables and MongoDB connection settings on your chosen hosting platform.
