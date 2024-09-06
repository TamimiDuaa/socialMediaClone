const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// Define routes
router.get('/', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/api/users', userController.createUser);

module.exports = router;