const ExercisesModel = require("../models/exercisesModel");

// Controller functions
const ExercisesController = {
  // Get all exercises
  getAllExercises: async (req, res, next) => {
    try {
      const exercises = await ExercisesModel.getAll();
      res.json(exercises);
    } catch (err) {
      next(err);
    }
  },

  // Get one exercise
  getExerciseById: async (req, res, next) => {
    try {
      const exercise = await ExercisesModel.getById(req.params.id);
      if (!exercise) return res.status(404).json({ message: "Exercise not found" });
      res.json(exercise);
    } catch (err) {
      next(err);
    }
  },

  // Create exercise
  createExercise: async (req, res, next) => {
    try {
      const { name, description, muscle_group } = req.body;
      if (!name) return res.status(400).json({ message: "Name is required" });

      const [newExercise] = await ExercisesModel.create({ name, description, muscle_group });
      res.status(201).json(newExercise);
    } catch (err) {
      next(err);
    }
  },

  // Update exercise
  updateExercise: async (req, res, next) => {
    try {
      const updates = req.body;
      const [updatedExercise] = await ExercisesModel.update(req.params.id, updates);
      if (!updatedExercise) return res.status(404).json({ message: "Exercise not found" });
      res.json(updatedExercise);
    } catch (err) {
      next(err);
    }
  },

  // Delete exercise
  deleteExercise: async (req, res, next) => {
    try {
      const deleted = await ExercisesModel.delete(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Exercise not found" });
      res.json({ message: "Exercise deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = ExercisesController;
