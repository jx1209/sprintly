
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users - register or upsert a user
router.post('/', userController.createOrFindUser);

// GET /api/users/:id - get user by ID
router.get('/:id', userController.getUserById);

module.exports = router;
