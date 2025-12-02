// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the to-do routes
const todoRoutes = require('./routes/todos');

// Mount the router
app.use('/todos', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
