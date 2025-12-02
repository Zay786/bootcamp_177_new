// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import the router
const routes = require('./routes/index');

// Mount the router
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
