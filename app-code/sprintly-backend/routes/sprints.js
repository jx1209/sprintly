
const express = require('express');
const router = express.Router();
const sprintController = require('../controllers/sprintController');

// POST /api/sprints
router.post('/', sprintController.createSprint);

// GET /api/sprints/user/:userId
router.get('/user/:userId', sprintController.getSprintsByUser);

// GET /api/sprints/:id
router.get('/:id', sprintController.getSprintById);

module.exports = router;
