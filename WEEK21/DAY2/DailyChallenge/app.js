// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import router
const quizRoutes = require('./routes/quiz');

// Mount router
app.use('/quiz', quizRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🎯 Trivia Quiz running on http://localhost:${PORT}`);
});
