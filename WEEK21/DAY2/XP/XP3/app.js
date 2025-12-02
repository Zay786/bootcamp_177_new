// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Import book routes
const bookRoutes = require('./routes/books');

// Mount the router
app.use('/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`📚 Book API server running on http://localhost:${PORT}`);
});
