const express = require("express");
const router = express.Router();
const ExercisesController = require("../controllers/exercisesController");

// Routes
router.get("/", ExercisesController.getAllExercises);
router.get("/:id", ExercisesController.getExerciseById);
router.post("/", ExercisesController.createExercise);
router.put("/:id", ExercisesController.updateExercise);
router.delete("/:id", ExercisesController.deleteExercise);

module.exports = router;
