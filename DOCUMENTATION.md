## API Endpoints

- Adding a New Person

Endpoint: POST /api/person
Request Body:

    `{

    "name" : "Your Name"

    }`

Response:

    `{
    "_id": "Id",
    "name": "John Doe",
    }`

- Fetching details of a person

Endpoint: GET /api/people/:name
Response:

    `{
    "_id": "Id",
    "name": "John Doe",
    }`

- Update a Person
  Endpoint: PUT /api/people/:name
  Request Body:

  `{
"name" : "Your Name"
}`

response:

    `{
    "_id": "Id",
    "name": "Updated Name",
    }`

- Removing a Person
  Endpoint: DELETE /api/people/:name
  Response:

### Testing

    To test the API, you can use a tool like Postman

### Deployment

    To deploy the API, you can use cloud platforms like Render or AWS. Be sure to configure your environment variables and MongoDB connection settings on your hosting platform.
