// //Define the base URL for your API
// const baseURL = 'https://person-api-auaj.onrender.com/api';

// // Sample Usage

// // Create a New Person
// async function createPerson() {
//   try {
//     const response = await axios.post(`${baseURL}`, {
//       name: 'Alice Johnson',
//     });
//     console.log('New person created:', response.data);
//   } catch (error) {
//     console.error('Error creating person:', error.response.data);
//   }
// }

// // Fetch Details of a Person
// async function getPersonDetails() {
//   try {
//     const response = await axios.get(`${baseURL}/people/Alice%20Johnson`);
//     console.log('Person details:', response.data);
//   } catch (error) {
//     console.error('Error fetching person details:', error.response.data);
//   }
// }

// // Modify the Details of an Existing Person
// async function updatePersonDetails() {
//   try {
//     const response = await axios.put(`${baseURL}/people/Alice%20Johnson`, {
//       age: 26,
//     });
//     console.log('Person details updated:', response.data);
//   } catch (error) {
//     console.error('Error updating person details:', error.response.data);
//   }
// }

// // Remove a Person
// async function removePerson() {
//   try {
//     const response = await axios.delete(`${baseURL}/people/Alice%20Johnson`);
//     console.log('Person removed:', response.data);
//   } catch (error) {
//     console.error('Error removing person:', error.response.data);
//   }
// }

// // Uncomment the function calls to use them
// createPerson();
// // getPersonDetails();
// // updatePersonDetails();
// // removePerson();
