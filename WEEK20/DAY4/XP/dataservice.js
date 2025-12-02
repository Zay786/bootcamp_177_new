// dataService.js
const axios = require('axios');

// Function to fetch posts
async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Return only the data
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error; // Re-throw so Express can handle it
  }
}

// Export the function
module.exports = { fetchPosts };
