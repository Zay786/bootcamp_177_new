// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById);
router.put('/users/:id', UserController.update);

module.exports = router;
