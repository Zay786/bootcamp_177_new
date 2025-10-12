// routes/quiz.js
const express = require('express');
const router = express.Router();

// 🧠 Hard-coded trivia questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// 🧮 Game state (for simplicity, one user at a time)
let currentQuestionIndex = 0;
let score = 0;

// ✅ Route 1: Start the quiz / Get current question
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: "🎉 Quiz completed!",
      finalScore: score,
      totalQuestions: triviaQuestions.length,
    });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: currentQuestion.question,
  });
});

// ✅ Route 2: Submit answer and move to next question
router.post('/', (req, res) => {
  const { answer } = req.body;

  if (!answer) {
    return res.status(400).json({ error: "Please provide an answer." });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  let feedback = "";

  // Check if correct
  if (answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Incorrect! The correct answer was "${currentQuestion.answer}".`;
  }

  currentQuestionIndex++;

  // Check if quiz is done
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      feedback,
      message: "🎯 Quiz completed!",
      finalScore: score,
      totalQuestions: triviaQuestions.length,
    });
  }

  const nextQuestion = triviaQuestions[currentQuestionIndex];
  res.json({
    feedback,
    nextQuestion: nextQuestion.question,
    questionNumber: currentQuestionIndex + 1,
    currentScore: score,
  });
});

// ✅ Route 3: View current or final score
router.get('/score', (req, res) => {
  res.json({
    currentScore: score,
    questionNumber: currentQuestionIndex,
    totalQuestions: triviaQuestions.length,
  });
});

module.exports = router;
