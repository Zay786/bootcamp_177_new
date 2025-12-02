const knex = require("../config/knexconnect");

const ExercisesModel = {
  // Get all exercises
  getAll: () => knex("exercises").select("*"),

  // Get a single exercise by ID
  getById: (id) => knex("exercises").where({ id }).first(),

  // Create a new exercise
  create: (exercise) => 
    knex("exercises").insert(exercise).returning("*"),

  // Update an existing exercise
  update: (id, updates) =>
    knex("exercises")
      .where({ id })
      .update({ ...updates, updated_at: knex.fn.now() })
      .returning("*"),

  // Delete an exercise
  delete: (id) => knex("exercises").where({ id }).del()
};

module.exports = ExercisesModel;
