// controllers/userController.js
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const db = require('../config/db');

const UserController = {
  // Register
  async register(req, res) {
    try {
      const { email, username, first_name, last_name, password } = req.body;

      if (!email || !username || !password) {
        return res.status(400).json({ error: 'Email, username and password are required.' });
      }

      const existingUser = await UserModel.getUserByUsername(username);
      if (existingUser) return res.status(400).json({ error: 'Username already exists.' });

      const hashedPwd = await bcrypt.hash(password, 10);

      const userId = await UserModel.addUser(
        { email, username, first_name, last_name },
        hashedPwd
      );

      res.status(201).json({ message: 'User registered successfully', userId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Registration failed' });
    }
  },

  // Login
  async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required.' });
      }

      const storedUser = await db('hashpwd').where({ username }).first();
      if (!storedUser) return res.status(404).json({ error: 'User not found.' });

      const match = await bcrypt.compare(password, storedUser.password);
      if (!match) return res.status(401).json({ error: 'Invalid password.' });

      res.json({ message: 'Login successful ✅' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Login failed' });
    }
  },

  // Get all users
  async getAll(req, res) {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  },

  // Get user by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },

  // Update user
  async update(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;

      const updated = await UserModel.updateUser(id, updates);
      if (!updated) return res.status(404).json({ error: 'User not found' });

      res.json({ message: 'User updated successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },
};

module.exports = UserController;
