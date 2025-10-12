// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample emojis
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🏀', name: 'Basketball' },
  { emoji: '🎸', name: 'Guitar' },
];

let leaderboard = []; // Store top scores

// Utility: Get random emoji + options
function getRandomEmojiQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];

  // Add random distractors
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  return { emoji: correct.emoji, correctAnswer: correct.name, options };
}

// Store current game state in memory (for demo)
let currentGame = {
  score: 0,
  currentQuestion: getRandomEmojiQuestion(),
};

// Route: Get a random emoji question
app.get('/emoji', (req, res) => {
  currentGame.currentQuestion = getRandomEmojiQuestion();
  res.json({
    emoji: currentGame.currentQuestion.emoji,
    options: currentGame.currentQuestion.options,
  });
});

// Route: Check answer
app.post('/guess', (req, res) => {
  const { answer } = req.body;
  const correct = currentGame.currentQuestion.correctAnswer;
  let message;

  if (answer === correct) {
    currentGame.score++;
    message = '✅ Correct!';
  } else {
    message = `❌ Wrong! The correct answer was ${correct}`;
  }

  // Prepare next question
  currentGame.currentQuestion = getRandomEmojiQuestion();

  res.json({
    message,
    score: currentGame.score,
    nextEmoji: currentGame.currentQuestion.emoji,
    options: currentGame.currentQuestion.options,
  });
});

// Route: Submit to leaderboard
app.post('/leaderboard', (req, res) => {
  const { playerName } = req.body;
  leaderboard.push({ name: playerName, score: currentGame.score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5); // Keep top 5
  res.json({ leaderboard });
});

// Route: Get leaderboard
app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
