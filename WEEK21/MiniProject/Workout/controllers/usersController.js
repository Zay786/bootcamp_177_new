const knex = require("../config/knexconnect");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await knex("users").select("*");
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const [newUser] = await knex("users")
      .insert({ username, email, password })
      .returning("*");
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await knex("users").where({ id: req.params.id }).first();
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const [updatedUser] = await knex("users")
      .where({ id: req.params.id })
      .update({ username, email, updated_at: knex.fn.now() })
      .returning("*");
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await knex("users").where({ id: req.params.id }).del();
    res.json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
};
