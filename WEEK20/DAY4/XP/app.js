// app.js
const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
app.use(express.json());

// Define route
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('✅ Data successfully retrieved from JSONPlaceholder');
    res.json(posts);
  } catch (error) {
    console.error('❌ Failed to fetch data:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
